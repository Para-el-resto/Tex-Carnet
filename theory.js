// ============================================================
//  TEX // OPERACIÓN PERMISO B — theory.js v4
//  Teoría visual espectacular — 7 módulos DGT
//  Fuente: NotebookLM + RGC y LSV 2024
// ============================================================

const THEORY_MODULES = [
  {
    id: 'm1',
    num: 1,
    title: 'El Operador',
    subtitle: 'Factores de riesgo · Alcohol · Carnet por puntos',
    icon: '◉',
    week: 1,
    sections: [
      {
        id: 'm1-alcohol',
        title: 'Tasas de Alcoholemia',
        content: `
<div class="tv-lead">El alcohol altera la percepción, los reflejos y el tiempo de reacción. El Códice establece límites estrictos — superarlos es infracción grave o delito penal.</div>

<div class="tv-table-title">LÍMITES EN AIRE ESPIRADO (mg/l)</div>
<table class="tv-table">
  <thead><tr><th>Conductor</th><th>Límite</th><th>Sanción 4 puntos</th><th>Sanción 6 puntos</th></tr></thead>
  <tbody>
    <tr class="tv-row-gold"><td><strong>General</strong><span class="tv-sub">+2 años de carnet</span></td><td class="tv-num gold">0,25 mg/l</td><td class="tv-num">0,25 – 0,50</td><td class="tv-num red">+0,50</td></tr>
    <tr class="tv-row-teal"><td><strong>Novel / Profesional</strong><span class="tv-sub">&lt;2 años · transporte</span></td><td class="tv-num teal">0,15 mg/l</td><td class="tv-num">0,15 – 0,30</td><td class="tv-num red">+0,30</td></tr>
  </tbody>
</table>

<div class="tv-compare">
  <div class="tv-compare-item danger">
    <div class="tv-compare-icon">✕</div>
    <div class="tv-compare-title">Negativa a la prueba</div>
    <div class="tv-compare-body">Delito penal autónomo. Mismas o peores consecuencias que dar positivo. No existe derecho a negarse.</div>
  </div>
  <div class="tv-compare-item warn">
    <div class="tv-compare-icon">⊗</div>
    <div class="tv-compare-title">Nada elimina el alcohol</div>
    <div class="tv-compare-body">Ni café, ni agua, ni ejercicio, ni duchas. Solo el metabolismo hepático — a una tasa fija de 0,10–0,15 g/l por hora.</div>
  </div>
</div>

<div class="tv-trap">⚠️ Creer que negarse a la prueba evita consecuencias. Es delito penal igual o más grave que dar positivo.</div>`
      },
      {
        id: 'm1-puntos',
        title: 'Sistema de Puntos',
        content: `
<div class="tv-lead">El permiso de conducir funciona como un sistema de crédito. Empiezas con puntos y los pierdes con infracciones.</div>

<div class="tv-points-track">
  <div class="tv-pt-step">
    <div class="tv-pt-num gold">8</div>
    <div class="tv-pt-label">INICIO<br><span>noveles y recuperados</span></div>
  </div>
  <div class="tv-pt-arrow">→</div>
  <div class="tv-pt-step">
    <div class="tv-pt-num gold">12</div>
    <div class="tv-pt-label">GENERAL<br><span>tras 2 años sin graves</span></div>
  </div>
  <div class="tv-pt-arrow">→</div>
  <div class="tv-pt-step">
    <div class="tv-pt-num teal">15</div>
    <div class="tv-pt-label">MÁXIMO<br><span>bonificaciones buena conducta</span></div>
  </div>
</div>

<div class="tv-table-title">INFRACCIONES MÁS COMUNES Y PUNTOS PERDIDOS</div>
<table class="tv-table">
  <thead><tr><th>Infracción</th><th>Puntos</th><th>Multa</th></tr></thead>
  <tbody>
    <tr><td>Conducir con tasa de alcohol superior (>0,50 mg/l)</td><td class="tv-num red">-6</td><td class="tv-num">600€</td></tr>
    <tr><td>Conducir bajo efectos de drogas</td><td class="tv-num red">-6</td><td class="tv-num">1.000€</td></tr>
    <tr><td>Uso del móvil al volante / auriculares</td><td class="tv-num red">-3</td><td class="tv-num">200€</td></tr>
    <tr><td>No usar cinturón / casco / SRI</td><td class="tv-num orange">-3</td><td class="tv-num">200€</td></tr>
    <tr><td>Exceso de velocidad >50 km/h del límite</td><td class="tv-num red">-6</td><td class="tv-num">600€</td></tr>
    <tr><td>Exceso de velocidad 30–50 km/h del límite</td><td class="tv-num orange">-4</td><td class="tv-num">400€</td></tr>
    <tr><td>Conducir en sentido contrario</td><td class="tv-num red">-6</td><td class="tv-num">500€</td></tr>
    <tr><td>Adelantamiento peligroso</td><td class="tv-num red">-6</td><td class="tv-num">500€</td></tr>
  </tbody>
</table>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Recuperación parcial</span>Hasta 6 puntos con curso de sensibilización (15h máx). Máximo 1 vez cada 2 años.</div>
  <div class="tv-key-item"><span class="tv-key-label">Recuperación total</span>Tras perder el permiso: 6 meses de espera (3 profesionales) + curso 30h + examen.</div>
  <div class="tv-key-item"><span class="tv-key-label">Bonificación</span>+2 puntos tras 3 años sin infracciones. +1 cada 3 años más, hasta 15.</div>
</div>`
      },
      {
        id: 'm1-riesgo',
        title: 'Factores de Riesgo',
        content: `
<div class="tv-lead">Más allá del alcohol, hay otros factores que afectan directamente tu capacidad de conducir. El examen los pregunta con frecuencia.</div>

<div class="tv-cards-grid">
  <div class="tv-card-item">
    <div class="tv-card-icon gold">👁</div>
    <div class="tv-card-title">Visión</div>
    <div class="tv-card-body">Campo visual mínimo 120°. Agudeza visual mínima 0,5 en el ojo peor. La revisión médica del permiso evalúa la visión obligatoriamente.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon teal">💊</div>
    <div class="tv-card-title">Medicamentos</div>
    <div class="tv-card-body">Antihistamínicos, ansiolíticos, antidepresivos y analgésicos fuertes pueden afectar. Consultar siempre el prospecto antes de conducir.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon red">😴</div>
    <div class="tv-card-title">Fatiga</div>
    <div class="tv-card-body">Reduce reflejos y concentración. Los microsueños (2-3 seg) a 120 km/h = recorrer 67 m a ciegas. Parar cada 2 horas como mínimo.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon gold">📱</div>
    <div class="tv-card-title">Distracciones</div>
    <div class="tv-card-body">Primera causa de accidentes en España. Móvil, pantallas, conversaciones. A 50 km/h, 2 segundos de distracción = 28 metros sin control.</div>
  </div>
</div>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Permiso B vigencia</span>10 años hasta los 65 años de edad. A partir de los 65: renovación cada 5 años.</div>
  <div class="tv-key-item"><span class="tv-key-label">Renovación anticipada</span>Se puede solicitar 3 meses antes de la caducidad sin perder días de validez.</div>
</div>`
      }
    ]
  },

  {
    id: 'm2',
    num: 2,
    title: 'La Vía',
    subtitle: 'Velocidades · Señales · Semáforos · Prioridad',
    icon: '◈',
    week: 1,
    sections: [
      {
        id: 'm2-velocidades',
        title: 'Tabla de Velocidades',
        content: `
<div class="tv-lead">Los límites de velocidad son máximos absolutos. No existe margen legal para superarlos. Esta tabla entra siempre en el examen.</div>

<div class="tv-vel-grid">
  <div class="tv-vel-card autopista">
    <div class="tv-vel-icon">🛣</div>
    <div class="tv-vel-name">Autopista / Autovía</div>
    <div class="tv-vel-speed">120</div>
    <div class="tv-vel-unit">km/h máx</div>
    <div class="tv-vel-min">mín 60 km/h</div>
    <div class="tv-vel-extra">Con remolque &gt;750kg → 100 km/h</div>
  </div>
  <div class="tv-vel-card convencional">
    <div class="tv-vel-icon">🛤</div>
    <div class="tv-vel-name">Carretera Convencional</div>
    <div class="tv-vel-speed">90</div>
    <div class="tv-vel-unit">km/h máx</div>
    <div class="tv-vel-min">mín 45 km/h</div>
    <div class="tv-vel-extra">+20 km/h para adelantar en convencional</div>
  </div>
  <div class="tv-vel-card urbana">
    <div class="tv-vel-icon">🏙</div>
    <div class="tv-vel-name">Vía Urbana General</div>
    <div class="tv-vel-speed">50</div>
    <div class="tv-vel-unit">km/h máx</div>
    <div class="tv-vel-min">mín 25 km/h</div>
    <div class="tv-vel-extra">Avenidas, rondas, vías principales</div>
  </div>
  <div class="tv-vel-card un-carril">
    <div class="tv-vel-icon">🏘</div>
    <div class="tv-vel-name">Calle 1 carril/sentido</div>
    <div class="tv-vel-speed">30</div>
    <div class="tv-vel-unit">km/h máx</div>
    <div class="tv-vel-min">reforma 2021</div>
    <div class="tv-vel-extra">Calles residenciales con acera</div>
  </div>
  <div class="tv-vel-card plataforma">
    <div class="tv-vel-icon">🚶</div>
    <div class="tv-vel-name">Plataforma Única</div>
    <div class="tv-vel-speed">20</div>
    <div class="tv-vel-unit">km/h máx</div>
    <div class="tv-vel-min">reforma 2021</div>
    <div class="tv-vel-extra">Sin diferencia de nivel acera/calzada</div>
  </div>
</div>

<div class="tv-trap">⚠️ Creer que existe un margen de tolerancia de 10 km/h. Legalmente no existe ningún margen.</div>`
      },
      {
        id: 'm2-senales',
        title: 'Señales de Tráfico',
        content: `
<div class="tv-lead">La forma y el color de una señal te dicen el tipo antes de leer el contenido. Aprende el código visual.</div>

<div class="tv-senales-grid">
  <div class="tv-senal-card peligro">
    <div class="tv-senal-shape">
      <svg width="64" height="58" viewBox="0 0 64 58" xmlns="http://www.w3.org/2000/svg">
        <polygon points="32,4 62,54 2,54" fill="white" stroke="#cc0000" stroke-width="5" stroke-linejoin="round"/>
        <text x="32" y="48" text-anchor="middle" font-size="28" font-weight="900" fill="#cc0000" font-family="Arial">!</text>
      </svg>
    </div>
    <div class="tv-senal-name">PELIGRO</div>
    <div class="tv-senal-desc">Triángulo borde rojo. Advierte de un riesgo próximo. No prohíbe ni obliga — solo alerta.</div>
    <div class="tv-senal-examples">Curva, paso nivel, niebla, obras...</div>
  </div>
  <div class="tv-senal-card prohibicion">
    <div class="tv-senal-shape">
      <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="27" fill="white" stroke="#cc0000" stroke-width="5"/>
        <text x="30" y="42" text-anchor="middle" font-size="30" font-weight="900" fill="#cc0000" font-family="Arial">80</text>
      </svg>
    </div>
    <div class="tv-senal-name">PROHIBICIÓN</div>
    <div class="tv-senal-desc">Círculo borde rojo, fondo blanco. Lo que NO debes hacer: límite velocidad, no adelantar...</div>
    <div class="tv-senal-examples">Velocidad máx, prohibido adelantar...</div>
  </div>
  <div class="tv-senal-card obligacion">
    <div class="tv-senal-shape">
      <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="27" fill="#0033aa"/>
        <polygon points="30,14 42,34 36,34 36,46 24,46 24,34 18,34" fill="white"/>
      </svg>
    </div>
    <div class="tv-senal-name">OBLIGACIÓN</div>
    <div class="tv-senal-desc">Círculo fondo azul. Lo que SÍ debes hacer obligatoriamente.</div>
    <div class="tv-senal-examples">Dirección obligatoria, velocidad mínima...</div>
  </div>
  <div class="tv-senal-card stop">
    <div class="tv-senal-shape">
      <svg width="62" height="62" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
        <polygon points="20,3 42,3 59,20 59,42 42,59 20,59 3,42 3,20" fill="#cc0000" stroke="#cc0000" stroke-width="2" stroke-linejoin="round"/>
        <polygon points="22,6 40,6 56,22 56,40 40,56 22,56 6,40 6,22" fill="none" stroke="white" stroke-width="2"/>
        <text x="31" y="38" text-anchor="middle" font-size="14" font-weight="900" fill="white" font-family="Arial" letter-spacing="1">STOP</text>
      </svg>
    </div>
    <div class="tv-senal-name">STOP</div>
    <div class="tv-senal-desc">Octogonal roja — la única. Detención TOTAL siempre, aunque no haya tráfico.</div>
    <div class="tv-senal-examples">La única señal octogonal del código</div>
  </div>
  <div class="tv-senal-card ceda">
    <div class="tv-senal-shape">
      <svg width="64" height="58" viewBox="0 0 64 58" xmlns="http://www.w3.org/2000/svg">
        <polygon points="32,54 62,4 2,4" fill="white" stroke="#cc0000" stroke-width="5" stroke-linejoin="round"/>
        <polygon points="32,47 55,9 9,9" fill="none" stroke="#cc0000" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="tv-senal-name">CEDA EL PASO</div>
    <div class="tv-senal-desc">Triángulo invertido. Ceder preferencia. Solo detenerse si hay vehículos con prioridad.</div>
    <div class="tv-senal-examples">No siempre para — solo si hay tráfico</div>
  </div>
  <div class="tv-senal-card indicacion">
    <div class="tv-senal-shape">
      <svg width="70" height="52" viewBox="0 0 70 52" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="66" height="48" rx="5" fill="#0033aa"/>
        <text x="35" y="34" text-anchor="middle" font-size="26" fill="white" font-family="Arial">→</text>
      </svg>
    </div>
    <div class="tv-senal-name">INDICACIÓN</div>
    <div class="tv-senal-desc">Cuadrado o rectángulo, fondo azul o verde. Informa — no obliga ni prohíbe.</div>
    <div class="tv-senal-examples">Destinos, servicios, información</div>
  </div>
</div>

<div class="tv-compare">
  <div class="tv-compare-item danger">
    <div class="tv-compare-title">STOP — Detención SIEMPRE</div>
    <div class="tv-compare-body">Aunque la intersección esté completamente vacía. No hay excepción posible.</div>
  </div>
  <div class="tv-compare-item success">
    <div class="tv-compare-title">Ceda — Solo si hay tráfico</div>
    <div class="tv-compare-body">Si no hay vehículos que se vean afectados, puedes continuar sin detenerte.</div>
  </div>
</div>

<div class="tv-priority-ladder">
  <div class="tv-pl-title">PRIORIDAD DE SEÑALES</div>
  <div class="tv-pl-steps">
    <div class="tv-pl-step gold">1 — Agente de tráfico</div>
    <div class="tv-pl-step gold">2 — Señalización circunstancial</div>
    <div class="tv-pl-step dim">3 — Semáforos</div>
    <div class="tv-pl-step dim">4 — Señales verticales</div>
    <div class="tv-pl-step dim">5 — Marcas viales</div>
    <div class="tv-pl-step dim">6 — Norma general</div>
  </div>
</div>

<div class="tv-trap">⚠️ Si hay señales del mismo tipo contradictorias, prevalece la más restrictiva.</div>`
      },
      {
        id: 'm2-semaforos',
        title: 'Semáforos y Marcas Viales',
        content: `
<div class="tv-semaforo-grid">
  <div class="tv-sem-card">
    <div class="tv-sem-light red-light"></div>
    <div class="tv-sem-label">ROJO</div>
    <div class="tv-sem-desc">Detención obligatoria ante la línea de stop. Sin excepción.</div>
  </div>
  <div class="tv-sem-card">
    <div class="tv-sem-light amber-light"></div>
    <div class="tv-sem-label">ÁMBAR</div>
    <div class="tv-sem-desc">Detente <strong>si puedes hacerlo con seguridad</strong>. Si estás muy cerca del cruce, continúa.</div>
  </div>
  <div class="tv-sem-card">
    <div class="tv-sem-light green-light"></div>
    <div class="tv-sem-label">VERDE</div>
    <div class="tv-sem-desc">Paso autorizado — siempre que no obstruyas la circulación transversal.</div>
  </div>
</div>

<div class="tv-table-title">MARCAS VIALES CLAVE</div>
<table class="tv-table">
  <thead><tr><th>Marca</th><th>Significado</th></tr></thead>
  <tbody>
    <tr><td><span class="tv-line solid">───────</span> Línea continua</td><td>No puede cruzarse. Prohíbe adelantar y cambiar de carril.</td></tr>
    <tr><td><span class="tv-line dashed">- - - - - -</span> Línea discontinua</td><td>Puede cruzarse para adelantar o cambiar de carril si hay visibilidad.</td></tr>
    <tr><td><span class="tv-line yellow-solid" style="color:#f5c842">───────</span> Amarilla continua (borde)</td><td>Prohibido parar y estacionar.</td></tr>
    <tr><td><span class="tv-line yellow-dashed" style="color:#f5c842">- - - - - -</span> Amarilla discontinua (borde)</td><td>Prohibido estacionar. Permite parar brevemente.</td></tr>
    <tr><td>Flechas de dirección</td><td>Obligatorio seguir la dirección indicada en ese carril.</td></tr>
  </tbody>
</table>

<div class="tv-trap">⚠️ La luz ámbar NO obliga siempre a detenerse. Solo si puede hacerse con seguridad. Si ya estás cerca del cruce, continúa.</div>`
      }
    ]
  },

  {
    id: 'm3',
    num: 3,
    title: 'Otros Usuarios',
    subtitle: 'Peatones · Ciclistas · Motos · Emergencias',
    icon: '◆',
    week: 2,
    sections: [
      {
        id: 'm3-preferencia',
        title: 'Preferencia de Paso',
        content: `
<div class="tv-lead">En intersecciones sin señalizar, alguien tiene que ceder. Las reglas de preferencia son el protocolo que evita los conflictos más peligrosos.</div>

<div class="tv-cards-grid">
  <div class="tv-card-item">
    <div class="tv-card-icon gold">↗</div>
    <div class="tv-card-title">Regla de la derecha</div>
    <div class="tv-card-body">Sin señalizar: preferencia al vehículo que llega por tu derecha. Si hay señal de prioridad, la señal prevalece.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon teal">⟳</div>
    <div class="tv-card-title">Rotonda</div>
    <div class="tv-card-body">Los vehículos que ya circulan dentro tienen preferencia absoluta sobre los que intentan entrar.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon red">🚨</div>
    <div class="tv-card-title">Emergencias</div>
    <div class="tv-card-body">Con sirena y luces activadas: preferencia absoluta sobre cualquier señal o norma. Créales el pasillo de emergencia.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon gold">🚌</div>
    <div class="tv-card-title">Autobús urbano</div>
    <div class="tv-card-body">Preferencia para incorporarse al tráfico desde su parada, si ha señalizado con intermitente y no crea peligro.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon teal">🚶</div>
    <div class="tv-card-title">Peatones</div>
    <div class="tv-card-body">Solo tienen preferencia en pasos señalizados. Fuera de ellos ceden el paso a los vehículos.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon gold">🚗</div>
    <div class="tv-card-title">Incorporación autopista</div>
    <div class="tv-card-body">El que se incorpora SIEMPRE cede el paso. Los que ya circulan no tienen obligación de facilitarlo.</div>
  </div>
</div>

<div class="tv-trap">⚠️ Los peatones NO tienen preferencia en cualquier punto de la vía. Solo en pasos señalizados.</div>`
      },
      {
        id: 'm3-ciclistas',
        title: 'Ciclistas y Motocicletas',
        content: `
<div class="tv-lead">Los ciclistas y motoristas son usuarios vulnerables que requieren precauciones específicas.</div>

<div class="tv-distance-visual">
  <div class="tv-dist-title">SEPARACIÓN AL ADELANTAR CICLISTAS</div>
  <div class="tv-dist-diagram">
    <div class="tv-dist-car">🚗</div>
    <div class="tv-dist-space">
      <div class="tv-dist-line"></div>
      <div class="tv-dist-measure">1,5 m mínimo</div>
    </div>
    <div class="tv-dist-bike">🚲</div>
  </div>
  <div class="tv-dist-note">Normalmente implica invadir parcialmente el carril contrario. Asegúrate antes de que no viene nadie.</div>
</div>

<div class="tv-table-title">MOTOCICLETAS — NORMAS ESPECÍFICAS</div>
<table class="tv-table">
  <thead><tr><th>Norma</th><th>Detalle</th></tr></thead>
  <tbody>
    <tr><td>Luces encendidas</td><td>Obligatorio llevar las luces de cruce encendidas siempre, incluso de día.</td></tr>
    <tr><td>Casco</td><td>Obligatorio para el conductor y todos los pasajeros. El conductor es responsable si el pasajero no lo lleva.</td></tr>
    <tr><td>Pasajeros menores</td><td>Prohibido menores de 12 años como pasajero. Excepción: si el conductor es padre/madre/tutor y el menor tiene al menos 7 años.</td></tr>
    <tr><td>Adelantamiento</td><td>Al adelantar, dejar siempre separación lateral segura. En carreteras estrechas, circula contiguo al eje central.</td></tr>
  </tbody>
</table>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Vehículos especiales</span>Los que tienen masa inferior a la reglamentaria deben circular por el arcén derecho.</div>
  <div class="tv-key-item"><span class="tv-key-label">Animales</span>Prohibido llevarlos en autopistas y autovías. Ceder paso en cañadas señalizadas.</div>
</div>`
      },
      {
        id: 'm3-adelantamiento',
        title: 'Adelantamientos',
        content: `
<div class="tv-lead">El adelantamiento es la maniobra más peligrosa. Requiere visibilidad total, espacio suficiente y coordinación perfecta.</div>

<div class="tv-steps">
  <div class="tv-step">
    <div class="tv-step-num">1</div>
    <div class="tv-step-text">Comprueba visibilidad: carril contrario libre, sin curvas ni crestas sin visibilidad.</div>
  </div>
  <div class="tv-step">
    <div class="tv-step-num">2</div>
    <div class="tv-step-text">Señaliza: intermitente izquierdo antes de salir del carril.</div>
  </div>
  <div class="tv-step">
    <div class="tv-step-num">3</div>
    <div class="tv-step-text">Comprueba punto ciego girando la cabeza brevemente.</div>
  </div>
  <div class="tv-step">
    <div class="tv-step-num">4</div>
    <div class="tv-step-text">Adelanta con velocidad superior. No tardes más de lo necesario.</div>
  </div>
  <div class="tv-step">
    <div class="tv-step-num">5</div>
    <div class="tv-step-text">Vuelve al carril derecho con intermitente derecho, manteniendo distancia de seguridad.</div>
  </div>
</div>

<div class="tv-table-title">DÓNDE ESTÁ PROHIBIDO ADELANTAR</div>
<table class="tv-table">
  <thead><tr><th>Lugar</th><th>Motivo</th></tr></thead>
  <tbody>
    <tr class="tv-row-red"><td>Pasos de peatones y sus inmediaciones</td><td>Siempre, aunque no haya peatones en ese momento</td></tr>
    <tr class="tv-row-red"><td>Curvas y cambios de rasante sin visibilidad</td><td>Aunque la línea sea discontinua — la visibilidad manda</td></tr>
    <tr class="tv-row-red"><td>Intersecciones (salvo excepciones)</td><td>Riesgo de conflicto con vehículos que cruzan</td></tr>
    <tr class="tv-row-red"><td>Pasos a nivel</td><td>En su proximidad</td></tr>
    <tr class="tv-row-red"><td>Si otro vehículo ya adelanta</td><td>No se pueden hacer dos adelantamientos simultáneos</td></tr>
  </tbody>
</table>

<div class="tv-trap">⚠️ La línea discontinua solo indica que técnicamente puedes cruzarla. Si no hay visibilidad, el adelantamiento sigue prohibido.</div>`
      }
    ]
  },

  {
    id: 'm4',
    num: 4,
    title: 'El Vehículo',
    subtitle: 'Documentación · ITV · Seguro · SRI',
    icon: '▣',
    week: 3,
    sections: [
      {
        id: 'm4-docs',
        title: 'Documentación Obligatoria',
        content: `
<div class="tv-lead">Sin estos tres documentos, tu autorización para circular queda suspendida. Siempre en el vehículo.</div>

<div class="tv-docs-checklist">
  <div class="tv-doc-item">
    <div class="tv-doc-icon gold">✓</div>
    <div class="tv-doc-content">
      <div class="tv-doc-title">Permiso de conducir</div>
      <div class="tv-doc-desc">Del conductor activo. Debe estar vigente y ser válido para el vehículo.</div>
    </div>
  </div>
  <div class="tv-doc-item">
    <div class="tv-doc-icon gold">✓</div>
    <div class="tv-doc-content">
      <div class="tv-doc-title">Permiso de circulación</div>
      <div class="tv-doc-desc">Del vehículo. Acredita la identidad del titular.</div>
    </div>
  </div>
  <div class="tv-doc-item">
    <div class="tv-doc-icon gold">✓</div>
    <div class="tv-doc-content">
      <div class="tv-doc-title">Tarjeta ITV + Seguro obligatorio</div>
      <div class="tv-doc-desc">La ficha técnica del vehículo y la tarjeta verde del seguro SOA.</div>
    </div>
  </div>
  <div class="tv-doc-item missing">
    <div class="tv-doc-icon red">✗</div>
    <div class="tv-doc-content">
      <div class="tv-doc-title">DNI / NIF</div>
      <div class="tv-doc-desc">NO es obligatorio llevarlo en el vehículo. No confundirlo con documentos obligatorios.</div>
    </div>
  </div>
</div>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Seguro sin él</span>Circular sin seguro obligatorio es DELITO PENAL — inmovilización inmediata del vehículo.</div>
  <div class="tv-key-item"><span class="tv-key-label">ITV exige seguro</span>Las estaciones ITV requieren seguro vigente para emitir resultado favorable.</div>
</div>`
      },
      {
        id: 'm4-itv',
        title: 'ITV — Calendario de Revisiones',
        content: `
<div class="tv-lead">La ITV garantiza que el vehículo cumple los requisitos técnicos de seguridad y emisiones.</div>

<div class="tv-itv-timeline">
  <div class="tv-itv-step exento">
    <div class="tv-itv-years">0–4 años</div>
    <div class="tv-itv-status">EXENTO</div>
    <div class="tv-itv-desc">No se requiere ITV en los primeros 4 años</div>
  </div>
  <div class="tv-itv-arrow">→</div>
  <div class="tv-itv-step biennial">
    <div class="tv-itv-years">4–10 años</div>
    <div class="tv-itv-status">CADA 2 AÑOS</div>
    <div class="tv-itv-desc">Revisión bienal obligatoria</div>
  </div>
  <div class="tv-itv-arrow">→</div>
  <div class="tv-itv-step annual">
    <div class="tv-itv-years">+10 años</div>
    <div class="tv-itv-status">ANUAL</div>
    <div class="tv-itv-desc">Revisión anual obligatoria</div>
  </div>
</div>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Remolques &gt;750 kg</span>Matrícula propia y tarjeta técnica independiente del vehículo tractor.</div>
  <div class="tv-key-item"><span class="tv-key-label">Vehículos &gt;10 m</span>En autopistas y autovías deben mantener al menos 50 metros de distancia de seguridad.</div>
</div>`
      },
      {
        id: 'm4-sri',
        title: 'Cinturón, SRI y Etiquetas',
        content: `
<div class="tv-lead">El cinturón y los sistemas de retención infantil son obligatorios en todas las vías. Las etiquetas medioambientales determinan el acceso a zonas restringidas.</div>

<div class="tv-compare">
  <div class="tv-compare-item success">
    <div class="tv-compare-title">Cinturón — Todos, siempre</div>
    <div class="tv-compare-body">Obligatorio para todos los ocupantes en todas las vías (urbanas e interurbanas) sin excepción de velocidad ni distancia.</div>
  </div>
  <div class="tv-compare-item warn">
    <div class="tv-compare-title">SRI — Menores y talla</div>
    <div class="tv-compare-body">Obligatorio para menores de 12 años O con menos de 135 cm de altura, con SRI homologado adaptado al peso/talla.</div>
  </div>
</div>

<div class="tv-table-title">ETIQUETAS MEDIOAMBIENTALES DGT</div>
<div class="tv-etiquetas">
  <div class="tv-etiq cero">
    <div class="tv-etiq-label">CERO</div>
    <div class="tv-etiq-desc">Eléctricos puros · Hidrógeno · Sin emisiones directas</div>
  </div>
  <div class="tv-etiq eco">
    <div class="tv-etiq-label">ECO</div>
    <div class="tv-etiq-desc">Híbridos · GLP · GNC · Gasolina+eléctrico</div>
  </div>
  <div class="tv-etiq c">
    <div class="tv-etiq-label">C</div>
    <div class="tv-etiq-desc">Gasolina post-2006 · Diésel post-2014</div>
  </div>
  <div class="tv-etiq b">
    <div class="tv-etiq-label">B</div>
    <div class="tv-etiq-desc">Gasolina post-2000 · Diésel post-2006</div>
  </div>
</div>

<div class="tv-trap">⚠️ El conductor es responsable si el pasajero de moto no lleva casco o los menores del vehículo no usan SRI.</div>`
      }
    ]
  },

  {
    id: 'm5',
    num: 5,
    title: 'La Conducción',
    subtitle: 'Maniobras · Distancias · Parada y Estacionamiento',
    icon: '↗',
    week: 4,
    sections: [
      {
        id: 'm5-alumbrado',
        title: 'Alumbrado del Vehículo',
        content: `
<div class="tv-lead">Las luces tienen dos funciones: ver y ser visto. Usarlas incorrectamente puede deslumbrar o crear peligro.</div>

<div class="tv-table-title">CUÁNDO USAR CADA TIPO DE LUZ</div>
<table class="tv-table">
  <thead><tr><th>Luz</th><th>Cuándo encender</th><th>Cuándo NO</th></tr></thead>
  <tbody>
    <tr><td><strong>Cruce (cortas)</strong></td><td>Noche, túneles siempre, lluvia/niebla de día</td><td>—</td></tr>
    <tr><td><strong>Largas (carretera)</strong></td><td>Carretera sin iluminación fuera de poblado</td><td>A menos de 200 m de vehículo de frente</td></tr>
    <tr><td><strong>Antiniebla delantera</strong></td><td>Solo con visibilidad notablemente reducida</td><td>En condiciones normales — multa</td></tr>
    <tr><td><strong>Antiniebla trasera (roja)</strong></td><td>Solo con visibilidad muy reducida</td><td>Deslumbra al de atrás en condiciones normales</td></tr>
    <tr><td><strong>4 intermitentes</strong></td><td>Avería, frenada brusca, retención inesperada</td><td>Para aparcar mal o estacionar incorrectamente</td></tr>
  </tbody>
</table>

<div class="tv-compare">
  <div class="tv-compare-item warn">
    <div class="tv-compare-title">200 metros — la distancia clave</div>
    <div class="tv-compare-body">A 200 metros de un vehículo de frente, cambiar de largas a cortas. También al seguir a otro de cerca.</div>
  </div>
  <div class="tv-compare-item danger">
    <div class="tv-compare-title">Deslumbramiento — reacción correcta</div>
    <div class="tv-compare-body">Mira al borde derecho de la calzada. NO pongas tú también las largas — empeora la situación.</div>
  </div>
</div>

<div class="tv-trap">⚠️ En un túnel iluminado son obligatorias igualmente las luces de cruce. Siempre en cualquier túnel.</div>`
      },
      {
        id: 'm5-parada',
        title: 'Parada vs Estacionamiento',
        content: `
<div class="tv-lead">Son dos conceptos distintos con normas distintas. El examen los confunde habitualmente.</div>

<div class="tv-compare">
  <div class="tv-compare-item warn">
    <div class="tv-compare-title">PARADA</div>
    <div class="tv-compare-body">Inmovilización inferior a 2 minutos SIN abandonar el puesto de mando. El conductor permanece al volante listo para arrancar.</div>
  </div>
  <div class="tv-compare-item danger">
    <div class="tv-compare-title">ESTACIONAMIENTO</div>
    <div class="tv-compare-body">Cualquier otra inmovilización. El conductor abandona el vehículo o permanece más de 2 minutos.</div>
  </div>
</div>

<div class="tv-table-title">NORMAS EN VÍAS INTERURBANAS</div>
<table class="tv-table">
  <thead><tr><th>Acción</th><th>Dónde</th><th>Lado</th></tr></thead>
  <tbody>
    <tr><td>Parada y estacionamiento</td><td>Fuera de la calzada</td><td>Lado derecho de la vía</td></tr>
    <tr><td>Si no es posible fuera</td><td>En el arcén derecho</td><td>Siempre derecha</td></tr>
    <tr><td>En autopista</td><td>Solo en áreas designadas o emergencia</td><td>Arcén derecho · luces + chaleco</td></tr>
  </tbody>
</table>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Glorietas</span>Prioridad a quien ya circula dentro. Los que entran ceden el paso siempre.</div>
  <div class="tv-key-item"><span class="tv-key-label">Distancia de seguridad</span>No existe mínimo fijo en metros para turismos. Sí: 50 metros para vehículos de más de 10 metros en autopista.</div>
</div>

<div class="tv-trap">⚠️ "Parar 2 minutos" no es estacionamiento si el conductor está al volante. La clave es si abandona el puesto de mando.</div>`
      },
      {
        id: 'm5-infracciones',
        title: 'Infracciones de Velocidad',
        content: `
<div class="tv-lead">El exceso de velocidad tiene un sistema de sanciones escalonado. Los puntos se pierden según cuánto superas el límite.</div>

<div class="tv-table-title">SANCIONES POR EXCESO DE VELOCIDAD</div>
<table class="tv-table">
  <thead><tr><th>Exceso sobre el límite</th><th>Multa</th><th>Puntos</th><th>Tipo</th></tr></thead>
  <tbody>
    <tr><td>Hasta 20 km/h</td><td class="tv-num">100€</td><td class="tv-num">0</td><td>Leve</td></tr>
    <tr><td>21–30 km/h</td><td class="tv-num">300€</td><td class="tv-num orange">-2</td><td>Grave</td></tr>
    <tr><td>31–40 km/h</td><td class="tv-num">400€</td><td class="tv-num orange">-4</td><td>Grave</td></tr>
    <tr><td>41–50 km/h</td><td class="tv-num">500€</td><td class="tv-num red">-4</td><td>Muy grave</td></tr>
    <tr><td>51–60 km/h</td><td class="tv-num">600€</td><td class="tv-num red">-6</td><td>Muy grave</td></tr>
    <tr><td>+60 km/h</td><td class="tv-num red">600€</td><td class="tv-num red">-6</td><td>Muy grave</td></tr>
  </tbody>
</table>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Velocidad mínima</span>No circular por debajo de la velocidad mínima sin causa justificada. En autopista: 60 km/h.</div>
  <div class="tv-key-item"><span class="tv-key-label">Vehículos lentos</span>Los vehículos de más de 3.500 kg o 7 metros deben circular solo por el carril derecho en vías de 3 o más carriles.</div>
</div>`
      }
    ]
  },

  {
    id: 'm6',
    num: 6,
    title: 'Accidentes y Emergencias',
    subtitle: 'Protocolo PAS · Primeros auxilios · Señalización',
    icon: '⊕',
    week: 5,
    sections: [
      {
        id: 'm6-pas',
        title: 'Protocolo PAS',
        content: `
<div class="tv-lead">Ante cualquier accidente, tres pasos en orden. No al revés. PAS es la secuencia que salva vidas.</div>

<div class="tv-pas-steps">
  <div class="tv-pas-step">
    <div class="tv-pas-letter gold">P</div>
    <div class="tv-pas-word">PROTEGER</div>
    <div class="tv-pas-desc">Señaliza el accidente para evitar nuevos accidentes. Zona de seguridad mínima de 50 metros. Chaleco reflectante antes de salir.</div>
  </div>
  <div class="tv-pas-step">
    <div class="tv-pas-letter teal">A</div>
    <div class="tv-pas-word">AVISAR</div>
    <div class="tv-pas-desc">Llama al 112. Indica localización exacta, número de heridos y estado. Facilita también identidad y datos del vehículo.</div>
  </div>
  <div class="tv-pas-step">
    <div class="tv-pas-letter red">S</div>
    <div class="tv-pas-word">SOCORRER</div>
    <div class="tv-pas-desc">Asistir a las víctimas sin moverlas salvo peligro extremo. Aplicar RCP si no respira. Posición lateral de seguridad si está inconsciente.</div>
  </div>
</div>

<div class="tv-table-title">NÚMEROS DE EMERGENCIA</div>
<table class="tv-table">
  <thead><tr><th>Número</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td class="tv-num gold">112</td><td>Emergencias generales (policía, bomberos, ambulancia)</td></tr>
    <tr><td class="tv-num teal">011</td><td>Información de carreteras (estado de la red)</td></tr>
    <tr><td class="tv-num">060</td><td>DGT — trámites y gestiones</td></tr>
  </tbody>
</table>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Obligación de auxilio</span>Todo implicado o testigo está obligado a auxiliar. No hacerlo es infracción grave.</div>
  <div class="tv-key-item"><span class="tv-key-label">Prueba de alcohol</span>Si estás implicado en un accidente, es obligatorio someterse a prueba de alcohol/drogas.</div>
</div>

<div class="tv-trap">⚠️ Negarse a auxiliar cuando se está en condiciones de hacerlo es infracción grave, independientemente de si eres causante o testigo.</div>`
      },
      {
        id: 'm6-primeros',
        title: 'Primeros Auxilios Básicos',
        content: `
<div class="tv-lead">No es necesario ser médico. Conocer estos protocolos básicos puede ser la diferencia entre la vida y la muerte.</div>

<div class="tv-cards-grid">
  <div class="tv-card-item">
    <div class="tv-card-icon teal">↔</div>
    <div class="tv-card-title">Posición lateral de seguridad (PLS)</div>
    <div class="tv-card-body">Para víctimas inconscientes que respiran. Evita la asfixia por vómito. No mover si hay sospecha de lesión de columna.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon red">♥</div>
    <div class="tv-card-title">RCP básica</div>
    <div class="tv-card-body">Si no respira: 30 compresiones torácicas + 2 insuflaciones. Ritmo 100-120 compresiones/minuto. No parar hasta que lleguen los servicios.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon gold">🩹</div>
    <div class="tv-card-title">Hemorragias</div>
    <div class="tv-card-body">Comprimir directamente la herida con paño limpio. No retirar el objeto si está clavado — fijarlo sin extraerlo.</div>
  </div>
  <div class="tv-card-item">
    <div class="tv-card-icon teal">🦴</div>
    <div class="tv-card-title">Fracturas</div>
    <div class="tv-card-body">No mover al accidentado salvo peligro extremo. Inmovilizar la zona afectada. Esperar a los servicios de emergencia.</div>
  </div>
</div>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Incendio del vehículo</span>Apagar el motor, salir del vehículo rápidamente y alejarse. Nunca abrir el capó si hay llamas.</div>
  <div class="tv-key-item"><span class="tv-key-label">Paso a nivel</span>Si el vehículo queda parado en las vías: desalojar inmediatamente, alejarse en diagonal, avisar a los maquinistas.</div>
  <div class="tv-key-item"><span class="tv-key-label">Avería en autopista</span>V-16 o triángulos, chaleco puesto antes de salir, alejarse por el lateral derecho.</div>
</div>`
      }
    ]
  },

  {
    id: 'm7',
    num: 7,
    title: 'Medio Ambiente',
    subtitle: 'Etiquetas DGT · Conducción eficiente · ZBE',
    icon: '◎',
    week: 6,
    sections: [
      {
        id: 'm7-etiquetas',
        title: 'Etiquetas y Zonas de Bajas Emisiones',
        content: `
<div class="tv-lead">Las etiquetas medioambientales DGT clasifican los vehículos por sus emisiones y determinan el acceso a las Zonas de Bajas Emisiones (ZBE).</div>

<div class="tv-etiquetas-full">
  <div class="tv-etiq-full cero">
    <div class="tv-etiq-badge">CERO</div>
    <div class="tv-etiq-vehicles">Eléctricos puros · Pila de hidrógeno · Eléctrico autonomía extendida</div>
    <div class="tv-etiq-access">Acceso libre a todas las ZBE</div>
  </div>
  <div class="tv-etiq-full eco">
    <div class="tv-etiq-badge">ECO</div>
    <div class="tv-etiq-vehicles">Híbridos enchufables y no enchufables · GLP · GNC</div>
    <div class="tv-etiq-access">Acceso a la mayoría de ZBE</div>
  </div>
  <div class="tv-etiq-full c">
    <div class="tv-etiq-badge">C</div>
    <div class="tv-etiq-vehicles">Gasolina matriculados desde 2006 · Diésel desde 2014</div>
    <div class="tv-etiq-access">Acceso a ZBE según restricciones locales</div>
  </div>
  <div class="tv-etiq-full b">
    <div class="tv-etiq-badge">B</div>
    <div class="tv-etiq-vehicles">Gasolina desde 2000 · Diésel desde 2006</div>
    <div class="tv-etiq-access">Acceso limitado — restringido en episodios</div>
  </div>
  <div class="tv-etiq-full none">
    <div class="tv-etiq-badge">SIN</div>
    <div class="tv-etiq-vehicles">Vehículos más antiguos o más contaminantes</div>
    <div class="tv-etiq-access">Sin acceso a ZBE en episodios de contaminación</div>
  </div>
</div>

<div class="tv-trap">⚠️ Las infracciones industriales que afectan a la seguridad vial o al medio ambiente se consideran muy graves: multas de 3.000 a 20.000€.</div>`
      },
      {
        id: 'm7-eficiente',
        title: 'Conducción Eficiente',
        content: `
<div class="tv-lead">La conducción eficiente reduce el consumo de combustible, las emisiones de CO₂ y el desgaste del vehículo.</div>

<div class="tv-steps">
  <div class="tv-step">
    <div class="tv-step-num">1</div>
    <div class="tv-step-text"><strong>Arrancar sin acelerar.</strong> El motor no necesita calentar acelerando. En diésel: esperar unos segundos para asegurar la lubricación.</div>
  </div>
  <div class="tv-step">
    <div class="tv-step-num">2</div>
    <div class="tv-step-text"><strong>Usar marchas largas cuanto antes.</strong> Mantener las revoluciones bajas reduce el consumo. Cambiar de marcha entre 2.000-2.500 rpm.</div>
  </div>
  <div class="tv-step">
    <div class="tv-step-num">3</div>
    <div class="tv-step-text"><strong>Velocidad constante.</strong> Evitar aceleraciones y frenazos innecesarios. Anticipar el tráfico para aprovechar la inercia.</div>
  </div>
  <div class="tv-step">
    <div class="tv-step-num">4</div>
    <div class="tv-step-text"><strong>Aprovechar la inercia.</strong> Soltar el acelerador con antelación antes de una parada o curva. El motor en ralentí consume menos que frenando.</div>
  </div>
  <div class="tv-step">
    <div class="tv-step-num">5</div>
    <div class="tv-step-text"><strong>Mantenimiento del vehículo.</strong> Presión correcta de neumáticos, filtros en buen estado, sistema de escape operativo.</div>
  </div>
</div>

<div class="tv-keybox">
  <div class="tv-key-item"><span class="tv-key-label">Emisiones prohibidas</span>Prohibido emitir ruidos, gases o humos por encima de los límites legales. El conductor debe colaborar con las pruebas de detección.</div>
  <div class="tv-key-item"><span class="tv-key-label">Carga de combustible</span>Durante la carga o en túneles si el vehículo queda detenido: apagar el motor obligatoriamente.</div>
</div>`
      }
    ]
  }
];
