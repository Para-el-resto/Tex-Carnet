// ============================================================
//  TEX // OPERACIÓN PERMISO B — app.js  v2
// ============================================================

let STATE = {
  name: 'Tex',
  planStart: null,
  completedDays: [],
  testHistory: [],
  pomodorosToday: 0,
  pomodorosTotal: 0,
  lastPomDate: '',
  streak: 0,
  lastStreakDate: '',
  lastDailyCompleted: '',
  combatDone: [false, false, false],
  combatDate: '',
  modulesViewed: [],
};

let currentTest = {
  questions: [],
  current: 0,
  answers: [],
  mode: '',
  topicFilter: null,
  answered: false,
  isDaily: false,
};

let pomState = {
  interval: null,
  seconds: 25 * 60,
  totalSeconds: 25 * 60,
  running: false,
  isBreak: false,
};

let testTimer = { interval: null, seconds: 30 * 60, active: false };
let cooldownInterval = null;
let selectedTopic = null;

// ── Mensajes Warframe ─────────────────────────────────────────
const WARFRAME_MESSAGES = [
  'Operador, tu determinación no pasa desapercibida. Cada norma que aprendes te acerca un paso más al objetivo. Descansa cinco minutos. La misión continúa.',
  'Lotus habla: "Bien hecho. Tu enfoque en el estudio demuestra la disciplina que te define." Cinco minutos de recarga y volvemos al campo.',
  'Tenno, el permiso B no es un obstáculo. Es simplemente otra misión que ya estás ganando. El descanso es parte del protocolo.',
  'En Warframe, cada mod equipado te hace más fuerte. En la carretera, cada norma dominada te hace más seguro. Sigue equipándote.',
  'Operador: la diferencia entre quien aprueba y quien no es la consistencia. Tú estás siendo consistente. Cinco minutos y seguimos.',
  'Tu cerebro acaba de consolidar información nueva. La neurociencia está de tu parte. Recarga y vuelve más fuerte.',
  'Excalibur, Volt, Mag... todos empezaron desde cero. El permiso B también empieza desde cero. Mira hasta dónde has llegado ya.',
  'Misión parcial completada. El verdadero operador no solo actúa con velocidad, actúa con precisión. Descansa y prepárate para el siguiente ciclo.',
  'Las normas de tráfico son tu loadout. Cuantas más domines, más preparado estarás cuando llegue el momento. Cinco minutos. Luego volvemos.',
  'El Tenno que estudia hoy es el conductor que no falla mañana. Eres ese Tenno. Descansa.',
  'Cada pomodoro completado es un fragmento de void más cerca del objetivo. La Lotus está orgullosa. Ahora descansa, operador.',
  'No se trata de memorizar. Se trata de comprender. Y tú estás comprendiendo. Cinco minutos de descanso bien ganados.',
];

// ── Mastery Rank ──────────────────────────────────────────────
const MASTERY_RANKS = [
  { name: 'Tenno Iniciado',    min: 0  },
  { name: 'Novicio del Void',  min: 5  },
  { name: 'Adepto del Código', min: 10 },
  { name: 'Maestro de Vías',   min: 20 },
  { name: 'Alto Maestro',      min: 30 },
  { name: 'Tenno Maestro',     min: 38 },
];

function getMasteryRank() {
  const completed = STATE.completedDays.length;
  let rank = MASTERY_RANKS[0];
  let nextMin = MASTERY_RANKS[1].min;
  for (let i = MASTERY_RANKS.length - 1; i >= 0; i--) {
    if (completed >= MASTERY_RANKS[i].min) {
      rank = MASTERY_RANKS[i];
      nextMin = MASTERY_RANKS[i + 1] ? MASTERY_RANKS[i + 1].min : 40;
      break;
    }
  }
  const pct = Math.min(100, Math.round(
    ((completed - rank.min) / (nextMin - rank.min)) * 100
  ));
  return { name: rank.name, pct };
}

function updateMasteryDisplay() {
  const { name, pct } = getMasteryRank();
  const nameEl = document.getElementById('mastery-rank-name');
  const fillEl = document.getElementById('mastery-rank-fill');
  const headerEl = document.getElementById('header-name');
  if (nameEl) nameEl.textContent = name;
  if (fillEl) fillEl.style.width = pct + '%';
  if (headerEl) {
    headerEl.setAttribute('data-text', STATE.name.toUpperCase());
    headerEl.textContent = STATE.name.toUpperCase();
  }
}

// ── ALERTA badge ──────────────────────────────────────────────
function updateAlertaBadge() {
  const container = document.getElementById('alerta-container');
  if (!container) return;
  const info = getDailyInfo();
  if (info.available) {
    container.innerHTML = `
      <div class="alerta-badge">
        <span class="alerta-dot"></span>
        ALERTA ACTIVA — MISIÓN DISPONIBLE
      </div>
    `;
    document.getElementById('daily-test-panel')?.classList.add('available');
  } else {
    container.innerHTML = '';
    document.getElementById('daily-test-panel')?.classList.remove('available');
  }
}
function saveState() { localStorage.setItem('tex_permiso_state', JSON.stringify(STATE)); }
function loadState() {
  const raw = localStorage.getItem('tex_permiso_state');
  if (raw) try { STATE = { ...STATE, ...JSON.parse(raw) }; } catch(e) {}

  // Parche: si el plan empieza exactamente 7 días después de hoy y hoy es lunes,
  // significa que se configuró un lunes y asignó el lunes siguiente por error.
  if (STATE.planStart) {
    const today = new Date();
    const planDate = new Date(STATE.planStart + 'T12:00:00');
    const diffDays = Math.round((planDate - today) / (1000 * 60 * 60 * 24));
    const isMonday = today.getDay() === 1;
    if (isMonday && diffDays === 7) {
      STATE.planStart = today.toISOString().split('T')[0];
      saveState();
    }
  }
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStreakOnLoad();
  if (!STATE.planStart) showSetupModal();
  else bootApp();
});

function getNextMonday() {
  const today = new Date();
  const day = today.getDay(); // 0=Dom, 1=Lun ... 6=Sáb
  const daysUntilMonday = day === 1 ? 0 : (8 - day) % 7 || 7;
  const monday = new Date(today);
  monday.setDate(today.getDate() + daysUntilMonday);
  return monday.toISOString().split('T')[0];
}

function showSetupModal() {
  const modal = document.getElementById('setup-modal');
  modal.style.display = 'flex';

  const nextMonday = getNextMonday();
  const [y, m, d] = nextMonday.split('-');
  const displayDate = `${d}/${m}/${y}`;
  const dayNames = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
  const dow = dayNames[new Date(nextMonday + 'T12:00:00').getDay()];
  const display = document.getElementById('setup-date-display');
  if (display) display.textContent = `${dow} ${displayDate}`;

  if (STATE.name) document.getElementById('setup-name').value = STATE.name;

  document.getElementById('setup-submit').addEventListener('click', () => {
    const name = document.getElementById('setup-name').value.trim() || 'Tex';
    STATE.name = name;
    STATE.planStart = nextMonday;
    saveState();
    modal.style.display = 'none';
    bootApp();
  });
}

function bootApp() {
  document.getElementById('header-name').textContent = STATE.name.toUpperCase();
  document.getElementById('header-name').setAttribute('data-text', STATE.name.toUpperCase());
  setupNav();
  renderInicio();
  renderPlan();
  renderPomodoroCounters();
  updateMasteryDisplay();
}

function setupNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.section).classList.add('active');
      if (btn.dataset.section === 'inicio') renderInicio();
      if (btn.dataset.section === 'teoria') renderTeoria();
    });
  });
}

// ── Fechas ────────────────────────────────────────────────────
function todayStr() { return new Date().toISOString().split('T')[0]; }
function addDays(s, n) {
  const d = new Date(s + 'T12:00:00');
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}
function formatDate(s) { const [y, m, d] = s.split('-'); return `${d}/${m}`; }
function getWeekday(s) { return ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'][new Date(s + 'T12:00:00').getDay()]; }
function isWeekend(s) { const d = new Date(s + 'T12:00:00').getDay(); return d === 0 || d === 6; }

// ── Racha ─────────────────────────────────────────────────────
function updateStreakOnLoad() {
  const today = todayStr();
  const yesterday = addDays(today, -1);
  if (STATE.lastStreakDate === today) return;
  if (STATE.lastStreakDate && STATE.lastStreakDate !== yesterday) STATE.streak = 0;
}
function maybeAddStreak() {
  const today = todayStr();
  if (STATE.lastStreakDate === today) return;
  const yesterday = addDays(today, -1);
  STATE.streak = (!STATE.lastStreakDate || STATE.lastStreakDate === yesterday) ? (STATE.streak || 0) + 1 : 1;
  STATE.lastStreakDate = today;
  saveState();
  document.getElementById('streak-val').textContent = STATE.streak;
  document.getElementById('stat-streak').textContent = STATE.streak;
}

// ── Helpers del plan ──────────────────────────────────────────
function getCurrentWeekInfo() {
  if (!STATE.planStart) return null;
  const today = todayStr();
  const diffDays = Math.floor((new Date(today + 'T12:00:00') - new Date(STATE.planStart + 'T12:00:00')) / (1000*60*60*24));
  const weekIndex = Math.floor(diffDays / 7);
  const dayInWeek = diffDays % 7;
  return { diffDays, weekIndex, dayInWeek, week: STUDY_PLAN.weeks[weekIndex] || null };
}

function getUnlockedTopics() {
  if (!STATE.planStart) return [];
  const today = todayStr();
  const unlocked = new Set();
  STUDY_PLAN.weeks.forEach((week, wi) => {
    if (today >= addDays(STATE.planStart, wi * 7)) {
      (week.topics || TOPICS.map(t => t.id)).forEach(tid => unlocked.add(tid));
    }
  });
  return [...unlocked];
}

function getDailyInfo() {
  if (!STATE.planStart) return { available: false, reason: 'no_plan' };
  const today = todayStr();
  if (isWeekend(today)) return { available: false, reason: 'weekend' };
  const { diffDays, weekIndex, dayInWeek, week } = getCurrentWeekInfo();
  if (diffDays < 0) return { available: false, reason: 'not_started' };
  if (dayInWeek > 4) return { available: false, reason: 'weekend' };
  if (!week) return { available: false, reason: 'completed' };
  const isFriday = dayInWeek === 4;
  const topics = week.topics || TOPICS.map(t => t.id);
  if (STATE.lastDailyCompleted) {
    const diffH = (new Date() - new Date(STATE.lastDailyCompleted)) / (1000*60*60);
    if (diffH < 4) {
      const nextTime = new Date(new Date(STATE.lastDailyCompleted).getTime() + 4*60*60*1000);
      return { available: false, reason: 'cooldown', nextTime, label: isFriday ? 'TEST SEMANAL' : 'TEST DEL DÍA', topics };
    }
  }
  return { available: true, topics, count: isFriday ? 30 : 20, label: isFriday ? 'TEST SEMANAL' : 'TEST DEL DÍA', isFriday, weekNum: weekIndex + 1 };
}

// ── INICIO ────────────────────────────────────────────────────
function renderInicio() {
  document.getElementById('streak-val').textContent = STATE.streak || 0;
  document.getElementById('stat-streak').textContent = STATE.streak || 0;
  const modulesViewed = STATE.modulesViewed ? STATE.modulesViewed.length : 0;
  document.getElementById('stat-tests').textContent = modulesViewed;
  document.getElementById('stat-pomodoros').textContent = STATE.pomodorosTotal || 0;
  document.getElementById('stat-accuracy').textContent = STATE.completedDays.length > 0
    ? Math.round((STATE.completedDays.length / 40) * 100) + '%'
    : '—';
  renderTodayBriefing();
  renderPlanProgress();
  renderOrdisTransmission();
  renderCombatTests();
  renderModMap();

  // Botón IR A TEORÍA en Misión de hoy
  const btn = document.getElementById('btn-ir-teoria');
  if (btn) {
    btn.onclick = () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelector('[data-section="teoria"]').classList.add('active');
      document.getElementById('teoria').classList.add('active');
      renderTeoria();
    };
  }
}

function renderTodayBriefing() {
  if (!STATE.planStart) return;
  const { diffDays, weekIndex, dayInWeek, week } = getCurrentWeekInfo();
  const today = todayStr();
  const themeEl = document.getElementById('today-theme');
  const topicsEl = document.getElementById('today-topics');
  topicsEl.innerHTML = '';
  if (diffDays < 0) {
    themeEl.textContent = 'El plan empieza el ' + formatDate(STATE.planStart);
  } else if (!week) {
    themeEl.textContent = '✓ Plan completado — sigue practicando';
  } else if (isWeekend(today) || dayInWeek > 4) {
    themeEl.textContent = 'Descanso operativo — recarga energía';
  } else {
    const isFriday = dayInWeek === 4;
    themeEl.textContent = isFriday ? `Semana ${weekIndex + 1} — TEST SEMANAL DE LA SEMANA` : week.theme;
    (week.topics || TOPICS.map(t => t.id)).forEach(tid => {
      const topic = TOPICS.find(t => t.id === tid);
      if (!topic) return;
      const tag = document.createElement('div');
      tag.className = 'topic-tag highlight';
      tag.textContent = topic.icon + ' ' + topic.name;
      topicsEl.appendChild(tag);
    });
  }
}

function renderPlanProgress() {
  if (!STATE.planStart) return;
  const completed = STATE.completedDays.length;
  const pct = Math.round((completed / 40) * 100);
  document.getElementById('plan-progress-bar').style.width = pct + '%';
  document.getElementById('plan-progress-text').textContent = `${completed} / 40 días`;
  updateMasteryDisplay();
}

function renderTopicPerformance() {
  const grid = document.getElementById('topic-performance-grid');
  if (STATE.testHistory.length === 0) {
    grid.innerHTML = '<div class="no-data">Completa tu primer test para ver estadísticas por tema</div>';
    return;
  }
  const ts = {};
  TOPICS.forEach(t => { ts[t.id] = { correct: 0, total: 0 }; });
  STATE.testHistory.forEach(test => {
    (test.topicDetails || []).forEach(td => {
      if (ts[td.topic]) { ts[td.topic].correct += td.correct ? 1 : 0; ts[td.topic].total++; }
    });
  });
  grid.innerHTML = '';
  TOPICS.forEach(t => {
    const s = ts[t.id];
    if (s.total === 0) return;
    const pct = Math.round(s.correct / s.total * 100);
    const item = document.createElement('div');
    item.className = 'topic-result-item';
    const cls = pct >= 70 ? 'good' : pct >= 50 ? 'ok' : 'bad';
    item.innerHTML = `<div><div class="topic-result-name">${t.icon} ${t.name}</div><div style="font-size:.62rem;color:var(--text-dim);font-family:var(--font-mono)">${s.correct}/${s.total}</div></div><div class="topic-result-score ${cls}">${pct}%</div>`;
    grid.appendChild(item);
  });
}

function renderTheoryPlaceholder() {
  const el = document.getElementById('theory-content');
  if (!el) return;

  if (typeof THEORY_MODULES === 'undefined') {
    el.innerHTML = '<div class="no-data">Cargando módulos...</div>';
    return;
  }

  const info = getCurrentWeekInfo();
  const weekIdx = (info && info.weekIndex >= 0) ? Math.min(info.weekIndex, THEORY_MODULES.length - 1) : 0;
  const mod = THEORY_MODULES[weekIdx] || THEORY_MODULES[0];
  const sec = mod.sections[0];

  // Preview del módulo de la semana actual
  el.innerHTML = '';

  const hdr = document.createElement('div');
  hdr.className = 'tv-module-header';
  hdr.style.marginBottom = '12px';
  hdr.innerHTML = `
    <div class="tv-module-icon">${mod.icon}</div>
    <div>
      <div class="tv-module-num">MÓDULO ${mod.num} — SEMANA ${mod.week}</div>
      <div class="tv-module-title">${mod.title}</div>
      <div class="tv-module-subtitle">${mod.subtitle}</div>
    </div>
  `;
  el.appendChild(hdr);

  if (sec) {
    const prev = document.createElement('div');
    prev.className = 'tv-section-content';
    prev.style.cssText = 'max-height:220px;overflow:hidden;position:relative;';
    prev.innerHTML = sec.content;
    // Fade out bottom
    const fade = document.createElement('div');
    fade.style.cssText = 'position:absolute;bottom:0;left:0;right:0;height:60px;background:linear-gradient(transparent, var(--bg2));';
    prev.appendChild(fade);
    el.appendChild(prev);
  }

  const cta = document.createElement('div');
  cta.className = 'teoria-cta';
  cta.style.marginTop = '10px';
  cta.innerHTML = `
    <span class="teoria-cta-text">Ver los 7 módulos completos</span>
    <button class="btn teal" id="ir-teoria-btn">▶ IR A TEORÍA</button>
  `;
  el.appendChild(cta);

  document.getElementById('ir-teoria-btn')?.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const teoriaBtn = document.querySelector('[data-section="teoria"]');
    const teoriaSection = document.getElementById('teoria');
    if (teoriaBtn) teoriaBtn.classList.add('active');
    if (teoriaSection) teoriaSection.classList.add('active');
    renderTeoria(weekIdx, 0);
  });
}

// ── MISIONES DE COMBATE (tests diarios) ──────────────────────
const COMBAT_LABELS = [
  { title: 'TEST 1', sub: 'Abre tu app de la autoescuela y completa 1 test' },
  { title: 'TEST 2', sub: 'Segundo test — sin mirar las respuestas antes' },
  { title: 'TEST 3', sub: 'Tercer test — este es el que consolida' },
];

function renderCombatTests() {
  const grid = document.getElementById('combat-tests');
  const footer = document.getElementById('combat-footer');
  if (!grid) return;

  // Reset si es un día nuevo
  const today = todayStr();
  if (STATE.combatDate !== today) {
    STATE.combatDone = [false, false, false];
    STATE.combatDate = today;
    saveState();
  }
  if (!STATE.combatDone) STATE.combatDone = [false, false, false];

  grid.innerHTML = '';
  COMBAT_LABELS.forEach((item, i) => {
    const done = STATE.combatDone[i];
    const el = document.createElement('div');
    el.className = 'combat-test-item' + (done ? ' done' : '');
    el.innerHTML = `
      <div class="combat-checkbox">${done ? '✓' : ''}</div>
      <div class="combat-test-label">
        <div class="combat-test-title">${item.title}</div>
        <div class="combat-test-sub">${item.sub}</div>
      </div>
    `;
    el.addEventListener('click', () => {
      STATE.combatDone[i] = !STATE.combatDone[i];
      saveState();
      renderCombatTests();
    });
    grid.appendChild(el);
  });

  // Footer
  const done = STATE.combatDone.filter(Boolean).length;
  if (footer) {
    if (done === 0) {
      footer.style.color = 'var(--text-dim)';
      footer.textContent = '○  Sin misiones completadas hoy';
    } else if (done < 3) {
      footer.style.color = 'var(--gold)';
      footer.textContent = `◈  ${done}/3 completados — sigue, Tenno`;
    } else {
      footer.style.color = 'var(--teal)';
      footer.textContent = '✓  MISIÓN COMPLETADA — 3 tests hechos hoy';
    }
  }
}


const ORDIS_MESSAGES = [
  'Operador. Tus procesos de aprendizaje generan una sincronía de datos... inusualmente eficiente. Ordis... aprueba.',
  'Los protocolos viales están siendo integrados en tu memoria táctica. Pronto serán instinto, Tenno.',
  'Alerta de sistema: la procrastinación ha sido detectada como amenaza de nivel GRINEER. Iniciando contramedidas...',
  'El examen teórico es simplemente otro simulacro del Cetus. Tú ya sabes cómo funciona, Operador.',
  'Ordis ha calculado que completar el plan aumenta la probabilidad de aprobar un 847%. Los números... no mienten.',
  'Las señales de tráfico son como los hologramas del Relé. Aprende el código y navega sin fallos.',
  '¿Sabes qué distingue a un Tenno Maestro de un Novicio del Void? La disciplina. Y conocer los límites de velocidad.',
  'Recuerda, Operador: el alcohol reduce los reflejos igual que el gas somnífero Corpus. Nunca en misión.',
  'El Códice de la DGT ha sido asimilado. Solo falta activar el protocolo de práctica.',
  'Ordis detiene el procesamiento de otras tareas para asegurarse de que estudias hoy. Por tu bien, claro.',
];

let ordisInterval = null;
let ordisIndex = 0;
let ordisTyping = false;

function renderOrdisTransmission() {
  const el = document.getElementById('ordis-text');
  if (!el) return;
  if (ordisInterval) clearInterval(ordisInterval);

  ordisIndex = Math.floor(Math.random() * ORDIS_MESSAGES.length);
  typeOrdisMessage(el);

  ordisInterval = setInterval(() => {
    ordisIndex = (ordisIndex + 1) % ORDIS_MESSAGES.length;
    typeOrdisMessage(el);
  }, 9000);
}

function typeOrdisMessage(el) {
  if (!el) return;
  const msg = ORDIS_MESSAGES[ordisIndex];
  let i = 0;
  el.textContent = '';
  if (ordisTyping) return;
  ordisTyping = true;
  const t = setInterval(() => {
    if (i < msg.length) {
      el.textContent += msg[i];
      i++;
    } else {
      clearInterval(t);
      ordisTyping = false;
    }
  }, 28);
}

// ── MAPA DE MÓDULOS ───────────────────────────────────────────
function renderModMap() {
  const grid = document.getElementById('modmap-grid');
  if (!grid || typeof THEORY_MODULES === 'undefined') return;
  const info = getCurrentWeekInfo();
  const currentWeek = info ? info.weekIndex + 1 : 1;
  const viewed = STATE.modulesViewed || [];

  grid.innerHTML = '';
  THEORY_MODULES.forEach((mod, i) => {
    const isVisited = viewed.includes(mod.id);
    const isCurrent = mod.week === currentWeek;
    const item = document.createElement('div');
    item.className = 'modmap-item' + (isVisited ? ' visited' : '') + (isCurrent ? ' current' : '');
    item.innerHTML = `
      <div class="modmap-icon">${mod.icon}</div>
      <div class="modmap-body">
        <div class="modmap-num">MÓDULO ${mod.num}</div>
        <div class="modmap-title">${mod.title}</div>
      </div>
      <div class="modmap-status">${isVisited ? '✓ VISTO' : isCurrent ? '◈ ACTIVO' : '○'}</div>
    `;
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelector('[data-section="teoria"]').classList.add('active');
      document.getElementById('teoria').classList.add('active');
      renderTeoria(i, 0);
    });
    grid.appendChild(item);
  });
}


function renderPlan() {
  const infoEl = document.getElementById('plan-start-info');
  if (infoEl && STATE.planStart) infoEl.textContent = STATE.planStart;
  document.getElementById('plan-reset-btn').addEventListener('click', () => {
    if (confirm('¿Resetear el progreso del calendario? El historial de tests no se borra.')) {
      STATE.completedDays = [];
      saveState();
      renderCalendar();
      renderPlanProgress();
    }
  });
  renderCalendar();
}

function renderCalendar() {
  const container = document.getElementById('calendar-container');
  container.innerHTML = '';
  if (!STATE.planStart) { container.innerHTML = '<div class="no-data">Configura la fecha de inicio</div>'; return; }
  const today = todayStr();
  STUDY_PLAN.weeks.forEach((week, wi) => {
    const wb = document.createElement('div');
    wb.className = 'panel';
    const hdr = document.createElement('div');
    hdr.className = 'week-header';
    hdr.innerHTML = `<span class="week-num">S${week.week}</span> — ${week.theme}`;
    wb.appendChild(hdr);
    const dr = document.createElement('div');
    dr.className = 'days-row';
    for (let d = 0; d < 5; d++) {
      const dateStr = addDays(STATE.planStart, wi * 7 + d);
      const dc = document.createElement('div');
      dc.className = 'day-cell';
      const isC = STATE.completedDays.includes(dateStr);
      const isT = dateStr === today;
      const isFut = dateStr > today;
      const isFri = d === 4;
      if (isC) dc.classList.add('completed');
      if (isT) dc.classList.add('today');
      if (dateStr < today && !isC) dc.classList.add('past');
      if (isFut) dc.classList.add('future');
      if (isFri) dc.classList.add('friday');
      dc.innerHTML = `<div class="day-name">${getWeekday(dateStr)}${isFri ? ' ★' : ''}</div><div class="day-date">${formatDate(dateStr)}</div>${isC ? '<div class="day-check">✓</div>' : ''}`;
      if (!isFut) {
        dc.addEventListener('click', () => {
          if (STATE.completedDays.includes(dateStr)) {
            STATE.completedDays = STATE.completedDays.filter(x => x !== dateStr);
          } else {
            STATE.completedDays.push(dateStr);
            if (dateStr === today) maybeAddStreak();
          }
          saveState();
          renderCalendar();
          renderPlanProgress();
        });
      }
      dr.appendChild(dc);
    }
    wb.appendChild(dr);
    const tb = document.createElement('div');
    tb.className = 'today-topics mt-8';
    (week.topics || TOPICS.map(t => t.id)).forEach(tid => {
      const topic = TOPICS.find(t => t.id === tid);
      if (!topic) return;
      const tag = document.createElement('div');
      tag.className = 'topic-tag';
      tag.textContent = topic.icon + ' ' + topic.name;
      tb.appendChild(tag);
    });
    wb.appendChild(tb);
    container.appendChild(wb);
  });
}

// ── POMODORO ──────────────────────────────────────────────────
function renderPomodoroCounters() {
  const today = todayStr();
  if (STATE.lastPomDate !== today) { STATE.pomodorosToday = 0; STATE.lastPomDate = today; saveState(); }
  updatePomDisplay();
  updatePomMission();
  document.getElementById('pom-start-btn').addEventListener('click', togglePomodoro);
  document.getElementById('pom-reset-btn').addEventListener('click', resetPomodoro);
}

function updatePomMission() {
  const el = document.getElementById('pom-mission-text');
  if (!el) return;
  const info = getCurrentWeekInfo();
  if (!info || !info.week || isWeekend(todayStr())) { el.textContent = 'Descanso operativo'; return; }
  el.textContent = info.week.theme;
}

function togglePomodoro() { pomState.running ? pausePomodoro() : startPomodoro(); }

function startPomodoro() {
  pomState.running = true;
  document.getElementById('pom-start-btn').textContent = '⏸ PAUSAR';
  document.getElementById('pom-timer').classList.add('running');
  document.querySelector('.void-rings')?.classList.add('active');
  pomState.interval = setInterval(() => {
    pomState.seconds--;
    updatePomDisplay();
    if (pomState.seconds <= 0) {
      clearInterval(pomState.interval);
      pomState.running = false;
      if (!pomState.isBreak) {
        pomState.isBreak = true;
        pomState.seconds = 5 * 60;
        pomState.totalSeconds = 5 * 60;
        STATE.pomodorosToday = (STATE.pomodorosToday || 0) + 1;
        STATE.pomodorosTotal = (STATE.pomodorosTotal || 0) + 1;
        saveState();
        document.getElementById('pom-count-today').textContent = STATE.pomodorosToday;
        document.getElementById('pom-count-total').textContent = STATE.pomodorosTotal;
        document.getElementById('stat-pomodoros').textContent = STATE.pomodorosTotal;
        document.getElementById('pom-label').textContent = 'DESCANSO — 5 MINUTOS';
        document.getElementById('pom-timer').classList.remove('running');
        document.getElementById('pom-timer').classList.add('break');
        document.getElementById('pom-ring-fill').classList.add('break');
        document.getElementById('pom-start-btn').textContent = '▶ INICIAR';
        maybeAddStreak();
        showPomReward();
      } else {
        pomState.isBreak = false;
        pomState.seconds = 25 * 60;
        pomState.totalSeconds = 25 * 60;
        document.getElementById('pom-label').textContent = 'TRABAJO — LISTO PARA COMENZAR';
        document.getElementById('pom-timer').classList.remove('break');
        document.getElementById('pom-ring-fill').classList.remove('break');
        document.getElementById('pom-start-btn').textContent = '▶ INICIAR';
        document.getElementById('reward-container').style.display = 'none';
        document.querySelector('.void-rings')?.classList.remove('active');
      }
      updatePomDisplay();
    }
  }, 1000);
}

function pausePomodoro() {
  clearInterval(pomState.interval);
  pomState.running = false;
  document.getElementById('pom-start-btn').textContent = '▶ CONTINUAR';
  document.querySelector('.void-rings')?.classList.remove('active');
}

function resetPomodoro() {
  clearInterval(pomState.interval);
  pomState.running = false; pomState.isBreak = false;
  pomState.seconds = 25 * 60; pomState.totalSeconds = 25 * 60;
  document.getElementById('pom-start-btn').textContent = '▶ INICIAR';
  document.getElementById('pom-timer').className = 'pom-timer';
  document.getElementById('pom-ring-fill').classList.remove('break');
  document.getElementById('pom-label').textContent = 'TRABAJO — LISTO PARA COMENZAR';
  document.getElementById('reward-container').style.display = 'none';
  document.querySelector('.void-rings')?.classList.remove('active');
  updatePomDisplay();
}

function updatePomDisplay() {
  const m = Math.floor(pomState.seconds / 60), s = pomState.seconds % 60;
  document.getElementById('pom-timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  const circ = 2 * Math.PI * 70;
  document.getElementById('pom-ring-fill').style.strokeDashoffset = circ * (1 - pomState.seconds / pomState.totalSeconds);
  document.getElementById('pom-count-today').textContent = STATE.pomodorosToday || 0;
  document.getElementById('pom-count-total').textContent = STATE.pomodorosTotal || 0;
}

function showPomReward() {
  document.getElementById('reward-container').style.display = 'block';
  document.getElementById('reward-text').textContent = WARFRAME_MESSAGES[(STATE.pomodorosTotal || 1) % WARFRAME_MESSAGES.length];
}

// ── TEORÍA — layout Codex Warframe ────────────────────────────
let teoriaActiveModule = 0;
let teoriaActiveSection = 0;

function renderTeoria(moduleIdx, sectionIdx) {
  if (typeof THEORY_MODULES === 'undefined') return;
  if (moduleIdx !== undefined) teoriaActiveModule = moduleIdx;
  if (sectionIdx !== undefined) teoriaActiveSection = sectionIdx;

  // Track módulo visitado
  if (!STATE.modulesViewed) STATE.modulesViewed = [];
  const modId = THEORY_MODULES[teoriaActiveModule]?.id;
  if (modId && !STATE.modulesViewed.includes(modId)) {
    STATE.modulesViewed.push(modId);
    saveState();
  }

  const el = document.getElementById('teoria-content');
  if (!el) return;

  // Construye el layout Codex completo
  const mod = THEORY_MODULES[teoriaActiveModule];
  const sec = mod?.sections[teoriaActiveSection] || mod?.sections[0];
  const viewed = STATE.modulesViewed || [];

  el.innerHTML = `
    <div class="teoria-codex">
      <!-- Sidebar -->
      <div class="codex-sidebar">
        <div class="codex-sidebar-title">CÓDICE DGT</div>
        ${THEORY_MODULES.map((m, i) => {
          const isActive = i === teoriaActiveModule;
          const isVisited = viewed.includes(m.id);
          return `<div class="codex-entry${isActive ? ' active' : ''}${isVisited ? ' visited' : ''}" data-mod="${i}">
            <span class="codex-entry-num">0${m.num}</span>
            <span class="codex-entry-icon">${m.icon}</span>
            <span class="codex-entry-name">${m.title}</span>
            ${isVisited && !isActive ? '<span class="codex-entry-tick">✓</span>' : ''}
          </div>`;
        }).join('')}
      </div>

      <!-- Content -->
      <div class="codex-content">
        <div class="codex-module-header">
          <div class="codex-module-tag">MÓDULO ${mod.num} — SEMANA ${mod.week}</div>
          <div class="codex-module-title">${mod.title}</div>
          <div class="codex-module-sub">${mod.subtitle}</div>
        </div>

        ${mod.sections.length > 1 ? `
        <div class="codex-section-tabs">
          ${mod.sections.map((s, si) =>
            `<button class="codex-tab${si === teoriaActiveSection ? ' active' : ''}" data-si="${si}">${s.title}</button>`
          ).join('')}
        </div>` : ''}

        <div class="codex-section-body">
          ${sec ? sec.content : ''}
        </div>
      </div>
    </div>
  `;

  // Eventos sidebar
  el.querySelectorAll('.codex-entry').forEach(entry => {
    entry.addEventListener('click', () => {
      teoriaActiveSection = 0;
      renderTeoria(parseInt(entry.dataset.mod), 0);
    });
  });

  // Eventos tabs
  el.querySelectorAll('.codex-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      renderTeoria(teoriaActiveModule, parseInt(tab.dataset.si));
    });
  });
}
function renderTests() {
  buildTopicSelector();
  renderHistory();
  document.getElementById('btn-test-daily').addEventListener('click', () => {
    const info = getDailyInfo();
    if (info.available) startTest('daily', null, info);
  });
  document.getElementById('btn-test-full').addEventListener('click', () => startTest('full', null, null));
  document.getElementById('btn-test-topic').addEventListener('click', () => { if (selectedTopic) startTest('topic', selectedTopic, null); });
  document.getElementById('btn-abort-test').addEventListener('click', abortTest);
  document.getElementById('btn-next-q').addEventListener('click', nextQuestion);
  document.getElementById('btn-retry-test').addEventListener('click', () => {
    const isDaily = currentTest.isDaily;
    if (isDaily) {
      const info = getDailyInfo();
      if (info.available) startTest('daily', null, info);
    } else if (currentTest.mode === 'Completo') {
      startTest('full', null, null);
    } else {
      startTest('topic', currentTest.topicFilter, null);
    }
  });
  document.getElementById('btn-back-tests').addEventListener('click', () => {
    document.getElementById('test-results-screen').style.display = 'none';
    document.getElementById('test-selector').style.display = 'block';
    refreshTestSelector();
    renderHistory();
  });
  refreshTestSelector();
}

function refreshTestSelector() {
  const info = getDailyInfo();
  const btn = document.getElementById('btn-test-daily');
  const subtitle = document.getElementById('daily-test-subtitle');
  if (!info.available) {
    btn.disabled = true;
    if (info.reason === 'weekend') {
      btn.textContent = '— DESCANSO — SIN TEST HOY';
      if (subtitle) subtitle.textContent = 'Los fines de semana son de descanso. Vuelve el lunes.';
    } else if (info.reason === 'cooldown') {
      btn.textContent = `▶ ${info.label || 'TEST DEL DÍA'}`;
      clearCooldownDisplay();
      cooldownInterval = setInterval(() => {
        const diff = info.nextTime - new Date();
        if (diff <= 0) { clearCooldownDisplay(); refreshTestSelector(); return; }
        const h = Math.floor(diff / 3600000), mi = Math.floor((diff % 3600000) / 60000), s = Math.floor((diff % 60000) / 1000);
        if (subtitle) subtitle.textContent = `Disponible en ${h}h ${String(mi).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
      }, 1000);
    } else if (info.reason === 'not_started') {
      btn.textContent = '▶ TEST DEL DÍA';
      if (subtitle) subtitle.textContent = 'El plan empieza el ' + (STATE.planStart ? formatDate(STATE.planStart) : '—');
    } else {
      btn.textContent = '▶ TEST DEL DÍA';
      if (subtitle) subtitle.textContent = '';
    }
  } else {
    clearCooldownDisplay();
    btn.disabled = false;
    btn.textContent = `▶ ${info.label} (${info.count} preguntas)`;
    if (subtitle) {
      const names = (info.topics || []).map(tid => TOPICS.find(t => t.id === tid)?.name || tid).join(', ');
      subtitle.textContent = 'Semana ' + info.weekNum + ' — ' + names;
    }
  }
  updateAlertaBadge();
  buildTopicSelector();
}

function clearCooldownDisplay() {
  if (cooldownInterval) { clearInterval(cooldownInterval); cooldownInterval = null; }
}

function buildTopicSelector() {
  const grid = document.getElementById('topic-selector-grid');
  grid.innerHTML = '';
  const unlocked = getUnlockedTopics();
  const MOD_RARITY = {
    'normas': 'PROTOCOLO', 'senales': 'CÓDICE', 'velocidad': 'TÁCTICO',
    'preferencia': 'AVANZADO', 'adelantamiento': 'AVANZADO', 'alumbrado': 'TÉCNICO',
    'distancias': 'TÉCNICO', 'alcohol': 'CRÍTICO', 'documentacion': 'BÁSICO', 'seguridad': 'CRÍTICO'
  };
  TOPICS.forEach(t => {
    const isLocked = !unlocked.includes(t.id);
    let unlockWeek = null;
    STUDY_PLAN.weeks.forEach((w, wi) => {
      if ((w.topics || TOPICS.map(x => x.id)).includes(t.id) && unlockWeek === null) unlockWeek = wi + 1;
    });
    const btn = document.createElement('button');
    btn.className = 'topic-select-btn' + (isLocked ? ' locked' : '');
    btn.disabled = isLocked;
    btn.innerHTML = `
      <span>${t.icon}</span>
      <span>${t.name}</span>
      ${!isLocked ? `<span class="mod-rarity">${MOD_RARITY[t.id] || 'MOD'}</span>` : ''}
      ${isLocked ? `<span class="lock-icon">S${unlockWeek}</span>` : ''}
    `;
    if (!isLocked) {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.topic-select-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedTopic = t.id;
        document.getElementById('btn-test-topic').disabled = false;
      });
    }
    grid.appendChild(btn);
  });
}

function renderHistory() {
  const el = document.getElementById('history-container');
  if (STATE.testHistory.length === 0) { el.innerHTML = '<div class="no-data">Aún no hay tests completados</div>'; return; }
  el.innerHTML = `<table class="history-table"><thead><tr><th>Fecha</th><th>Modo</th><th>Resultado</th><th>Precisión</th><th>Estado</th></tr></thead><tbody>${[...STATE.testHistory].reverse().map(t => {
    const pct = Math.round(t.score / t.total * 100);
    const pass = t.score >= Math.ceil(t.total * 0.65);
    return `<tr><td>${t.date}</td><td>${t.mode}</td><td>${t.score}/${t.total}</td><td>${pct}%</td><td><span class="${pass ? 'badge-pass' : 'badge-fail'}">${pass ? 'APTO' : 'REPASO'}</span></td></tr>`;
  }).join('')}</tbody></table>`;
}

// ── Test timer ────────────────────────────────────────────────
function startTestTimer() {
  testTimer.seconds = 30 * 60;
  testTimer.active = true;
  updateTestTimerDisplay();
  testTimer.interval = setInterval(() => {
    testTimer.seconds--;
    updateTestTimerDisplay();
    if (testTimer.seconds <= 0) { stopTestTimer(); finishTest(true); }
  }, 1000);
}

function stopTestTimer() {
  if (testTimer.interval) { clearInterval(testTimer.interval); testTimer.interval = null; }
  testTimer.active = false;
}

function updateTestTimerDisplay() {
  const el = document.getElementById('test-countdown');
  if (!el) return;
  const m = Math.floor(testTimer.seconds / 60), s = testTimer.seconds % 60;
  el.textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  el.className = 'test-countdown';
  if (testTimer.seconds <= 60) el.classList.add('danger');
  else if (testTimer.seconds <= 5 * 60) el.classList.add('warning');
}

// ── Test ──────────────────────────────────────────────────────
function startTest(mode, topicFilter, dailyInfo) {
  let pool = [...QUESTIONS];
  if (mode === 'daily' && dailyInfo) pool = pool.filter(q => dailyInfo.topics.includes(q.topic));
  else if (mode === 'topic' && topicFilter) pool = pool.filter(q => q.topic === topicFilter);
  pool = shuffleArray(pool);
  const count = mode === 'full' ? 30 : mode === 'daily' && dailyInfo ? dailyInfo.count : Math.min(20, pool.length);
  let modeName = mode === 'full' ? 'Completo' : mode === 'daily' && dailyInfo?.isFriday ? 'Test Semanal' : mode === 'daily' ? 'Diario' : TOPICS.find(t => t.id === topicFilter)?.name || topicFilter;
  currentTest = { questions: pool.slice(0, count), current: 0, answers: new Array(Math.min(count, pool.length)).fill(null), mode: modeName, topicFilter, answered: false, isDaily: mode === 'daily' };
  document.getElementById('test-selector').style.display = 'none';
  document.getElementById('test-results-screen').style.display = 'none';
  document.getElementById('test-container').style.display = 'block';
  startTestTimer();
  renderQuestion();
}

function abortTest() {
  stopTestTimer();
  document.getElementById('test-container').style.display = 'none';
  document.getElementById('test-selector').style.display = 'block';
  refreshTestSelector();
}

function renderQuestion() {
  const q = currentTest.questions[currentTest.current];
  const total = currentTest.questions.length;
  const idx = currentTest.current;
  document.getElementById('test-progress-info').textContent = `Pregunta ${idx + 1} / ${total}`;
  document.getElementById('test-progress-bar').style.width = Math.max(idx / total * 100, 2) + '%';
  currentTest.answered = false;
  document.getElementById('btn-next-q').style.display = 'none';
  const topic = TOPICS.find(t => t.id === q.topic);
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('question-area').innerHTML = `
    <div class="question-card">
      <div class="q-number">PREGUNTA ${idx + 1} DE ${total}</div>
      <div class="q-topic-badge">${topic ? topic.icon + ' ' + topic.name : q.topic}</div>
      <div class="q-text">${q.q}</div>
      <div class="options-grid" id="options-grid">
        ${q.opts.map((opt, i) => `<button class="option-btn" data-index="${i}" data-letter="${letters[i]}">${opt}</button>`).join('')}
      </div>
    </div>
  `;
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => { if (!currentTest.answered) answerQuestion(parseInt(btn.dataset.index)); });
  });
}

function answerQuestion(sel) {
  currentTest.answered = true;
  const q = currentTest.questions[currentTest.current];
  const isCorrect = sel === q.correct;
  currentTest.answers[currentTest.current] = { selected: sel, correct: isCorrect };
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct-reveal');  // dorado
    if (i === sel && !isCorrect) btn.classList.add('wrong');   // rojo
  });
  const card = document.querySelector('.question-card');
  const expDiv = document.createElement('div');
  expDiv.className = 'explanation-box ' + (isCorrect ? 'correct' : 'wrong');
  expDiv.innerHTML = `<div class="explanation-label">${isCorrect ? '◈ CORRECTO' : '✗ INCORRECTO — EXPLICACIÓN'}</div><div class="explanation-text">${q.exp}</div>`;
  card.appendChild(expDiv);
  const nextBtn = document.getElementById('btn-next-q');
  nextBtn.style.display = 'inline-block';
  nextBtn.textContent = currentTest.current < currentTest.questions.length - 1 ? 'SIGUIENTE ▶' : 'VER RESULTADOS ▶';
  maybeAddStreak();
}

function nextQuestion() {
  if (currentTest.current < currentTest.questions.length - 1) { currentTest.current++; renderQuestion(); }
  else finishTest(false);
}

function finishTest(autoFinish = false) {
  stopTestTimer();
  const answered = currentTest.answers.filter(a => a !== null);
  const score = answered.filter(a => a.correct).length;
  const total = autoFinish ? answered.length : currentTest.questions.length;
  const pct = total > 0 ? Math.round(score / total * 100) : 0;
  const pass = total > 0 && score >= Math.ceil(total * 0.65);
  const topicDetails = currentTest.questions.slice(0, total).map((q, i) => ({ topic: q.topic, correct: currentTest.answers[i]?.correct || false }));
  STATE.testHistory.push({ date: todayStr(), score, total, mode: currentTest.mode + (autoFinish ? ' (tiempo)' : ''), topicDetails });
  if (currentTest.isDaily) {
    STATE.lastDailyCompleted = new Date().toISOString();
    // Marcar el día de hoy como completado automáticamente
    const today = todayStr();
    if (!STATE.completedDays.includes(today)) {
      STATE.completedDays.push(today);
    }
  }
  saveState();
  document.getElementById('test-container').style.display = 'none';
  document.getElementById('test-results-screen').style.display = 'block';
  const se = document.getElementById('result-score');
  se.textContent = pct + '%';
  se.className = 'result-score ' + (pass ? 'pass' : 'fail');
  document.getElementById('result-label').textContent = `${score} de ${total} correctas${autoFinish ? ' · Tiempo agotado' : ''}`;
  const ve = document.getElementById('result-verdict');
  ve.textContent = pass ? '✓ MISIÓN COMPLETADA' : '✗ REPASO NECESARIO';
  ve.className = 'result-verdict ' + (pass ? 'pass' : 'fail');
  const tagEl = document.getElementById('result-mission-tag');
  if (tagEl) tagEl.textContent = `◈ INFORME DE MISIÓN — ${currentTest.mode.toUpperCase()}`;
  renderResultsByTopic(topicDetails);
  renderReview(total);
}

function renderResultsByTopic(topicDetails) {
  const grid = document.getElementById('result-by-topic');
  const ts = {};
  TOPICS.forEach(t => { ts[t.id] = { correct: 0, total: 0, name: t.name, icon: t.icon }; });
  topicDetails.forEach(td => { if (ts[td.topic]) { ts[td.topic].correct += td.correct ? 1 : 0; ts[td.topic].total++; } });
  grid.innerHTML = Object.entries(ts).filter(([, s]) => s.total > 0).map(([, s]) => {
    const pct = Math.round(s.correct / s.total * 100);
    const cls = pct >= 70 ? 'good' : pct >= 50 ? 'ok' : 'bad';
    return `<div class="topic-result-item"><div><div class="topic-result-name">${s.icon} ${s.name}</div><div style="font-size:.62rem;color:var(--text-dim)">${s.correct}/${s.total}</div></div><div class="topic-result-score ${cls}">${pct}%</div></div>`;
  }).join('');
}

function renderReview(limit) {
  const container = document.getElementById('review-container');
  container.innerHTML = '';
  currentTest.questions.slice(0, limit).forEach((q, i) => {
    const ans = currentTest.answers[i];
    if (!ans) return;
    const isC = ans.correct;
    const letters = ['A','B','C','D'];
    const topic = TOPICS.find(t => t.id === q.topic);
    const div = document.createElement('div');
    div.style.cssText = `border:1px solid ${isC ? 'rgba(200,155,60,0.15)' : 'rgba(192,57,43,0.2)'};background:${isC ? 'rgba(200,155,60,0.03)' : 'rgba(192,57,43,0.03)'};padding:14px 18px;margin-bottom:10px`;
    div.innerHTML = `<div style="font-family:var(--font-mono);font-size:.6rem;color:var(--text-dim);margin-bottom:6px">${i+1} / ${topic ? topic.icon+' '+topic.name : q.topic} — ${isC ? '<span style="color:var(--gold)">CORRECTO</span>' : '<span style="color:var(--red)">INCORRECTO</span>'}</div><div style="font-size:.88rem;color:var(--text-bright);margin-bottom:10px">${q.q}</div>${q.opts.map((opt, oi) => { const isCor = oi===q.correct, isSel = oi===ans?.selected; return `<div style="font-size:.8rem;${isCor ? 'color:var(--gold)' : isSel&&!isCor ? 'color:var(--red)' : 'color:var(--text-dim)'};margin-bottom:2px">${letters[oi]}) ${opt} ${isCor ? '✓' : ''} ${isSel&&!isCor ? '✗' : ''}</div>`; }).join('')}<div style="font-size:.78rem;color:var(--text-dim);margin-top:8px;font-style:italic">${q.exp}</div>`;
    container.appendChild(div);
  });
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i+1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
