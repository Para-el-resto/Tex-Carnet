// ============================================================
//  TEX // OPERACIÓN PERMISO B — theory.js v5
//  Contenido completo DGT — RGC y LSV 2024
//  Fuente: Manual del Conductor DGT + NotebookLM
// ============================================================

const THEORY_MODULES = [
{
  id:'m1',num:1,title:'El Operador',subtitle:'Conductor · Alcohol · Drogas · Fatiga · Carnet por puntos',icon:'◉',week:1,
  sections:[
    {
      title:'Permiso de conducir — vigencia y renovación',
      content:`<div class="tv-lead">El permiso de conducir clase B autoriza a conducir turismos, furgonetas de hasta 3.500 kg y vehículos derivados. Tiene condiciones específicas de vigencia que el examen pregunta.</div>
<div class="tv-table-title">VIGENCIA DEL PERMISO B</div>
<table class="tv-table"><thead><tr><th>Conductor</th><th>Vigencia</th></tr></thead><tbody>
<tr><td>Menos de 65 años</td><td class="tv-num gold">10 años</td></tr>
<tr><td>65 años o más</td><td class="tv-num teal">5 años</td></tr>
<tr><td>Con ciertas enfermedades</td><td class="tv-num">Según informe médico</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">RENOVACIÓN ANTICIPADA</span>Se puede renovar hasta 3 meses antes de la caducidad sin perder días de validez.</div>
<div class="tv-key-item"><span class="tv-key-label">PERÍODO DE PRUEBA</span>Los primeros 2 años el conductor tiene 8 puntos. Pasado ese período sin infracciones graves, se amplía a 12.</div>
<div class="tv-key-item"><span class="tv-key-label">PERMISO B+E</span>Autoriza a arrastrar remolques de más de 750 kg cuando la combinación supera 3.500 kg de MMA.</div>
</div>
<div class="tv-trap">⚠️ El permiso no caduca automáticamente si hay un problema médico: la autoridad puede retirarlo por incapacidad psicofísica sobrevenida.</div>`
    },
    {
      title:'Sistema de puntos — saldos y sanciones',
      content:`<div class="tv-lead">El carnet por puntos es el mecanismo de control del comportamiento al volante. Cada infracción resta puntos. Si llegas a 0, pierdes el permiso.</div>
<div class="tv-points-track">
<div class="tv-pt-step"><div class="tv-pt-num gold">8</div><div class="tv-pt-label">INICIO<br><span>noveles y recuperados</span></div></div>
<div class="tv-pt-arrow">→</div>
<div class="tv-pt-step"><div class="tv-pt-num gold">12</div><div class="tv-pt-label">GENERAL<br><span>tras 2 años sin graves</span></div></div>
<div class="tv-pt-arrow">→</div>
<div class="tv-pt-step"><div class="tv-pt-num teal">15</div><div class="tv-pt-label">MÁXIMO<br><span>con bonificaciones</span></div></div>
</div>
<div class="tv-table-title">INFRACCIONES Y PUNTOS PERDIDOS</div>
<table class="tv-table"><thead><tr><th>Infracción</th><th>Puntos</th><th>Multa</th></tr></thead><tbody>
<tr class="tv-row-red"><td>Conducir con alcohol &gt;0,50 mg/l (o &gt;0,30 noveles)</td><td class="tv-num red">-6</td><td class="tv-num">hasta 600€</td></tr>
<tr class="tv-row-red"><td>Conducir bajo efectos de drogas</td><td class="tv-num red">-6</td><td class="tv-num">1.000€</td></tr>
<tr class="tv-row-red"><td>Exceso de velocidad &gt;50 km/h sobre el límite</td><td class="tv-num red">-6</td><td class="tv-num">600€</td></tr>
<tr class="tv-row-red"><td>Conducir en sentido contrario o adelantamiento prohibido peligroso</td><td class="tv-num red">-6</td><td class="tv-num">500€</td></tr>
<tr><td>Uso del móvil / auriculares al volante</td><td class="tv-num red">-3</td><td class="tv-num">200€</td></tr>
<tr><td>No usar cinturón / casco / SRI infantil</td><td class="tv-num red">-3</td><td class="tv-num">200€</td></tr>
<tr><td>Exceso velocidad 41–50 km/h</td><td class="tv-num orange">-4</td><td class="tv-num">500€</td></tr>
<tr><td>Exceso velocidad 21–40 km/h</td><td class="tv-num orange">-2</td><td class="tv-num">300–400€</td></tr>
<tr><td>No respetar semáforo/señal de stop/ceda</td><td class="tv-num orange">-4</td><td class="tv-num">200€</td></tr>
<tr><td>Alcohol 0,25–0,50 mg/l (general) / 0,15–0,30 (novel)</td><td class="tv-num orange">-4</td><td class="tv-num">500€</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">BONIFICACIÓN</span>Sin infracciones: +2 puntos tras 3 años; +1 punto cada 3 años más → hasta 15 puntos máximo.</div>
<div class="tv-key-item"><span class="tv-key-label">RECUPERACIÓN PARCIAL</span>Hasta 6 puntos con curso de sensibilización (máx. 15h). Solo una vez cada 2 años (o 1 año para profesionales).</div>
<div class="tv-key-item"><span class="tv-key-label">PÉRDIDA TOTAL</span>Con 0 puntos: esperar 6 meses (3 para profesionales) + curso 30h + superar prueba de aptitud.</div>
</div>`
    },
    {
      title:'Tasas de alcoholemia',
      content:`<div class="tv-lead">El alcohol afecta a todos los conductores, pero las tasas legales son distintas según la experiencia y el tipo de actividad. Memoriza las cifras — entran siempre en el examen.</div>
<div class="tv-table-title">LÍMITES EN AIRE ESPIRADO (mg/l)</div>
<table class="tv-table"><thead><tr><th>Conductor</th><th>Límite máximo</th><th>Pérdida 4 puntos</th><th>Pérdida 6 puntos</th></tr></thead><tbody>
<tr class="tv-row-gold"><td><strong>General</strong><span class="tv-sub">más de 2 años de carnet</span></td><td class="tv-num gold">0,25 mg/l</td><td>0,25 – 0,50</td><td class="tv-num red">+0,50</td></tr>
<tr class="tv-row-teal"><td><strong>Novel</strong><span class="tv-sub">menos de 2 años de carnet</span></td><td class="tv-num teal">0,15 mg/l</td><td>0,15 – 0,30</td><td class="tv-num red">+0,30</td></tr>
<tr class="tv-row-teal"><td><strong>Profesional</strong><span class="tv-sub">transporte de viajeros y mercancías</span></td><td class="tv-num teal">0,15 mg/l</td><td>0,15 – 0,30</td><td class="tv-num red">+0,30</td></tr>
</tbody></table>
<div class="tv-compare">
<div class="tv-compare-item danger"><div class="tv-compare-title">Negativa a la prueba</div><div class="tv-compare-body">Delito penal autónomo. Mismas o peores consecuencias que dar positivo. No existe derecho a negarse.</div></div>
<div class="tv-compare-item warn"><div class="tv-compare-title">Lo que NO elimina el alcohol</div><div class="tv-compare-body">Café, agua, ejercicio, duchas frías, pastillas. Solo el hígado metaboliza el alcohol: 0,10–0,15 g/l por hora. Solo el tiempo.</div></div>
</div>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">SEGUNDA PRUEBA</span>Si el resultado es positivo, el conductor puede solicitar una segunda prueba de sangre. Mientras se realiza, no puede conducir.</div>
<div class="tv-key-item"><span class="tv-key-label">DROGAS Y PSICOFÁRMACOS</span>Prohibido conducir bajo efectos de drogas ilegales o psicofármacos que afecten a la conducción. Sin límite mínimo para las ilegales.</div>
</div>
<div class="tv-trap">⚠️ Dormir 6 horas no garantiza estar bajo el límite si se consumió mucho alcohol. Puede quedar alcohol en sangre a la mañana siguiente.</div>`
    },
    {
      title:'Fatiga, sueño y distracciones',
      content:`<div class="tv-lead">Las distracciones son la primera causa de accidentes en España, por encima del alcohol. La fatiga es la segunda. Ambas multiplican el riesgo de forma dramática.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon gold">📱</div><div class="tv-card-title">Distracciones — 1ª causa</div><div class="tv-card-body">Móvil, pantallas, comer, conversaciones. A 120 km/h, 2 segundos de distracción = 67 metros a ciegas. A 50 km/h = 28 metros.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">😴</div><div class="tv-card-title">Fatiga y microsueños</div><div class="tv-card-body">La fatiga reduce la atención igual que el alcohol. Los microsueños (2–3 segundos) a 120 km/h son letales. Parar cada 2 horas mínimo.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">💊</div><div class="tv-card-title">Medicamentos</div><div class="tv-card-body">Antihistamínicos, ansiolíticos, analgésicos fuertes, antidepresivos. Consultar prospecto. Algunos prohíben conducir expresamente.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">👁</div><div class="tv-card-title">Visión</div><div class="tv-card-body">Campo visual mínimo exigido: 120°. Agudeza mínima: 0,5 en el ojo peor con corrección. La revisión médica del permiso lo evalúa.</div></div>
</div>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">TELÉFONO MÓVIL</span>Prohibido en cualquier caso al volante — incluidos auriculares no integrados. Solo manos libres integrados de fábrica. Multa: 200€ y -3 puntos.</div>
<div class="tv-key-item"><span class="tv-key-label">MÚSICA ALTA</span>Si impide oír las señales acústicas de emergencia (sirenas), es infracción.</div>
<div class="tv-key-item"><span class="tv-key-label">ESTRÉS</span>El estrés y las emociones intensas también reducen la capacidad de reacción. Son factores de riesgo reconocidos.</div>
</div>`
    },
    {
      title:'Documentación obligatoria',
      content:`<div class="tv-lead">Sin estos documentos, tu autorización para circular queda suspendida. Hay que llevarlos siempre que se conduzca.</div>
<div class="tv-docs-checklist">
<div class="tv-doc-item"><div class="tv-doc-icon gold">✓</div><div class="tv-doc-content"><div class="tv-doc-title">Permiso de conducir vigente</div><div class="tv-doc-desc">Del conductor activo. Válido para el tipo de vehículo que se conduce.</div></div></div>
<div class="tv-doc-item"><div class="tv-doc-icon gold">✓</div><div class="tv-doc-content"><div class="tv-doc-title">Permiso de circulación del vehículo</div><div class="tv-doc-desc">Acredita la identidad del titular del vehículo y sus datos técnicos básicos.</div></div></div>
<div class="tv-doc-item"><div class="tv-doc-icon gold">✓</div><div class="tv-doc-content"><div class="tv-doc-title">Tarjeta ITV (ficha técnica)</div><div class="tv-doc-desc">Acredita que el vehículo ha superado la inspección técnica vigente.</div></div></div>
<div class="tv-doc-item"><div class="tv-doc-icon gold">✓</div><div class="tv-doc-content"><div class="tv-doc-title">Acreditación del seguro obligatorio (tarjeta verde)</div><div class="tv-doc-desc">El SOA (Seguro Obligatorio del Automóvil) debe estar vigente. Circular sin él es delito penal.</div></div></div>
<div class="tv-doc-item missing"><div class="tv-doc-icon red">✗</div><div class="tv-doc-content"><div class="tv-doc-title">DNI / NIF — NO obligatorio en el vehículo</div><div class="tv-doc-desc">No es obligatorio llevarlo en el vehículo para conducir. No confundirlo con los documentos obligatorios.</div></div></div>
</div>
<div class="tv-trap">⚠️ Circular sin seguro obligatorio es DELITO PENAL — no solo una multa. El vehículo puede ser inmovilizado de inmediato.</div>`
    }
  ]
},

{
  id:'m2',num:2,title:'La Vía',subtitle:'Tipos de vía · Velocidades · Señales · Semáforos · Prioridad',icon:'◈',week:1,
  sections:[
    {
      title:'Tipos de vías y sus características',
      content:`<div class="tv-lead">El tipo de vía determina las normas aplicables: velocidad, adelantamientos, parada y estacionamiento. Es fundamental conocer las diferencias.</div>
<table class="tv-table"><thead><tr><th>Tipo de vía</th><th>Características</th><th>Vel. máx.</th></tr></thead><tbody>
<tr><td><strong>Autopista</strong></td><td>Solo automóviles. Sin cruces a nivel. Calzadas separadas por sentido. Accesos controlados.</td><td class="tv-num gold">120</td></tr>
<tr><td><strong>Autovía</strong></td><td>Igual que autopista pero accesos más frecuentes. Puede tener cruces elevados.</td><td class="tv-num gold">120</td></tr>
<tr><td><strong>Vía para automóviles</strong></td><td>Una sola calzada, solo automóviles. Sin propiedades colindantes.</td><td class="tv-num gold">120</td></tr>
<tr><td><strong>Carretera convencional</strong></td><td>Resto de carreteras interurbanas. Puede haber accesos, cruces y ciclistas.</td><td class="tv-num teal">90</td></tr>
<tr><td><strong>Travesía</strong></td><td>Tramo de carretera que discurre por interior de poblado.</td><td class="tv-num">50</td></tr>
<tr><td><strong>Vía urbana</strong></td><td>Dentro de poblado (excepto travesías). Múltiples usuarios.</td><td class="tv-num">20–50</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">AUTOPISTA VS AUTOVÍA</span>Ambas son de acceso controlado y sin cruces a nivel. La diferencia es de categoría constructiva: la autopista era originalmente de peaje; la autovía, gratuita.</div>
<div class="tv-key-item"><span class="tv-key-label">ARCÉN</span>Franja lateral de la calzada. Se usa para paradas de emergencia y lo usan ciclistas y peatones en interurbanas. No es un carril de circulación.</div>
</div>`
    },
    {
      title:'Velocidades — tabla completa',
      content:`<div class="tv-lead">Los límites son máximos absolutos. No existe margen legal. Esta tabla entra en el examen casi siempre.</div>
<div class="tv-vel-grid">
<div class="tv-vel-card autopista"><div class="tv-vel-icon">🛣</div><div class="tv-vel-name">Autopista / Autovía / Vía automóviles</div><div class="tv-vel-speed">120</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">mín 60 km/h</div><div class="tv-vel-extra">Con remolque &gt;750kg → 100 km/h · Autobús → 100 km/h · Camión → 90 km/h</div></div>
<div class="tv-vel-card convencional"><div class="tv-vel-icon">🛤</div><div class="tv-vel-name">Carretera convencional</div><div class="tv-vel-speed">90</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">mín 45 km/h</div><div class="tv-vel-extra">+20 km/h para adelantar a vehículos lentos</div></div>
<div class="tv-vel-card urbana"><div class="tv-vel-icon">🏙</div><div class="tv-vel-name">Vía urbana general</div><div class="tv-vel-speed">50</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">mín 25 km/h</div><div class="tv-vel-extra">Avenidas, rondas, vías principales urbanas</div></div>
<div class="tv-vel-card un-carril"><div class="tv-vel-icon">🏘</div><div class="tv-vel-name">Calle 1 carril por sentido</div><div class="tv-vel-speed">30</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">reforma 2021</div><div class="tv-vel-extra">Calles residenciales con acera y calzada separadas</div></div>
<div class="tv-vel-card plataforma"><div class="tv-vel-icon">🚶</div><div class="tv-vel-name">Plataforma única</div><div class="tv-vel-speed">20</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">reforma 2021</div><div class="tv-vel-extra">Sin diferencia de nivel entre acera y calzada</div></div>
</div>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">PANELES VARIABLES</span>Mismo valor legal que señales fijas. Si el panel marca 80, ese es el límite aunque la señal fija diga 120.</div>
<div class="tv-key-item"><span class="tv-key-label">CONDICIONES ADVERSAS</span>El límite no cambia automáticamente con la meteorología, pero el conductor DEBE adaptar la velocidad a las condiciones reales.</div>
</div>
<div class="tv-trap">⚠️ Creer que existe un margen de tolerancia de 10 km/h. Legalmente no existe. Los radares tienen tolerancia técnica, pero ante un tribunal, superar el límite es infracción.</div>`
    },
    {
      title:'Señales de tráfico — clasificación',
      content:`<div class="tv-lead">La forma y el color de una señal te dicen el tipo antes de leer el contenido. El código es universal.</div>
<div class="tv-senales-grid">
<div class="tv-senal-card peligro"><div class="tv-senal-shape"><svg width="64" height="58" viewBox="0 0 64 58" xmlns="http://www.w3.org/2000/svg"><polygon points="32,4 62,54 2,54" fill="white" stroke="#cc0000" stroke-width="5" stroke-linejoin="round"/><text x="32" y="48" text-anchor="middle" font-size="28" font-weight="900" fill="#cc0000" font-family="Arial">!</text></svg></div><div class="tv-senal-name">PELIGRO</div><div class="tv-senal-desc">Triángulo borde rojo. Advierte de riesgo próximo. No prohíbe ni obliga — solo alerta.</div><div class="tv-senal-examples">Curva, paso nivel, animales, obras, niebla...</div></div>
<div class="tv-senal-card prohibicion"><div class="tv-senal-shape"><svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="27" fill="white" stroke="#cc0000" stroke-width="5"/><text x="30" y="42" text-anchor="middle" font-size="26" font-weight="900" fill="#cc0000" font-family="Arial">80</text></svg></div><div class="tv-senal-name">PROHIBICIÓN</div><div class="tv-senal-desc">Círculo borde rojo, fondo blanco. Lo que NO debes hacer.</div><div class="tv-senal-examples">Velocidad máx, no adelantar, no girar...</div></div>
<div class="tv-senal-card obligacion"><div class="tv-senal-shape"><svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="27" fill="#0033aa"/><polygon points="30,14 42,34 36,34 36,46 24,46 24,34 18,34" fill="white"/></svg></div><div class="tv-senal-name">OBLIGACIÓN</div><div class="tv-senal-desc">Círculo fondo azul. Lo que SÍ debes hacer obligatoriamente.</div><div class="tv-senal-examples">Dirección obligatoria, velocidad mínima...</div></div>
<div class="tv-senal-card stop"><div class="tv-senal-shape"><svg width="62" height="62" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg"><polygon points="20,3 42,3 59,20 59,42 42,59 20,59 3,42 3,20" fill="#cc0000" stroke-linejoin="round"/><polygon points="22,6 40,6 56,22 56,40 40,56 22,56 6,40 6,22" fill="none" stroke="white" stroke-width="2"/><text x="31" y="38" text-anchor="middle" font-size="14" font-weight="900" fill="white" font-family="Arial" letter-spacing="1">STOP</text></svg></div><div class="tv-senal-name">STOP</div><div class="tv-senal-desc">Octogonal roja — la única. Detención TOTAL siempre, aunque no haya tráfico.</div><div class="tv-senal-examples">La única señal de 8 lados del código</div></div>
<div class="tv-senal-card ceda"><div class="tv-senal-shape"><svg width="64" height="58" viewBox="0 0 64 58" xmlns="http://www.w3.org/2000/svg"><polygon points="32,54 62,4 2,4" fill="white" stroke="#cc0000" stroke-width="5" stroke-linejoin="round"/><polygon points="32,47 55,9 9,9" fill="none" stroke="#cc0000" stroke-width="2.5" stroke-linejoin="round"/></svg></div><div class="tv-senal-name">CEDA EL PASO</div><div class="tv-senal-desc">Triángulo invertido. Ceder preferencia. No siempre implica detenerse.</div><div class="tv-senal-examples">Solo detenerse si hay tráfico con prioridad</div></div>
<div class="tv-senal-card indicacion"><div class="tv-senal-shape"><svg width="70" height="52" viewBox="0 0 70 52" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="66" height="48" rx="5" fill="#0033aa"/><text x="35" y="34" text-anchor="middle" font-size="26" fill="white" font-family="Arial">→</text></svg></div><div class="tv-senal-name">INDICACIÓN</div><div class="tv-senal-desc">Cuadrado o rectángulo, fondo azul o verde. Informa, no obliga ni prohíbe.</div><div class="tv-senal-examples">Destinos, servicios, información...</div></div>
</div>
<div class="tv-priority-ladder"><div class="tv-pl-title">PRIORIDAD DE SEÑALES (de mayor a menor)</div><div class="tv-pl-steps"><div class="tv-pl-step gold">1 — Agente de tráfico (prevalece sobre todo)</div><div class="tv-pl-step gold">2 — Señalización circunstancial (obras, accidentes)</div><div class="tv-pl-step">3 — Semáforos</div><div class="tv-pl-step">4 — Señales verticales</div><div class="tv-pl-step">5 — Marcas viales</div><div class="tv-pl-step dim">6 — Norma general de circulación</div></div></div>
<div class="tv-trap">⚠️ Si hay señales del mismo tipo contradictorias, prevalece la más restrictiva. Un límite de 60 sobre una señal general de 90 → rige 60.</div>`
    },
    {
      title:'Semáforos y marcas viales',
      content:`<div class="tv-lead">Los semáforos controlan el acceso. Las marcas viales son instrucciones pintadas en la calzada. Ambos son de obligado cumplimiento.</div>
<div class="tv-semaforo-grid">
<div class="tv-sem-card"><div class="tv-sem-light red-light"></div><div class="tv-sem-label">ROJO</div><div class="tv-sem-desc">Detención obligatoria ante la línea de stop. Sin ninguna excepción posible.</div></div>
<div class="tv-sem-card"><div class="tv-sem-light amber-light"></div><div class="tv-sem-label">ÁMBAR FIJO</div><div class="tv-sem-desc">Detente si puedes con seguridad. Si ya estás muy cerca del cruce, continúa. No es siempre obligatorio parar.</div></div>
<div class="tv-sem-card"><div class="tv-sem-light green-light"></div><div class="tv-sem-label">VERDE</div><div class="tv-sem-desc">Paso autorizado. Siempre que no obstruyas la circulación transversal ni pongas en peligro a peatones.</div></div>
</div>
<div class="tv-table-title">SEMÁFOROS ESPECIALES</div>
<table class="tv-table"><thead><tr><th>Tipo</th><th>Significado</th></tr></thead><tbody>
<tr><td>Ámbar intermitente</td><td>Situación de precaución. Puedes pasar con atención — no hay detención obligatoria.</td></tr>
<tr><td>Flecha verde</td><td>Autoriza el giro indicado aunque el semáforo principal esté en rojo.</td></tr>
<tr><td>Verde peatonal parpadeando</td><td>El tiempo se acaba. Peatones que ya cruzaron deben terminar; los que no, esperar.</td></tr>
</tbody></table>
<div class="tv-table-title">MARCAS VIALES ESENCIALES</div>
<table class="tv-table"><thead><tr><th>Marca</th><th>Significado</th></tr></thead><tbody>
<tr><td>Línea longitudinal continua blanca</td><td>No puede cruzarse ni circularse sobre ella. Prohíbe adelantar y cambiar de carril.</td></tr>
<tr><td>Línea longitudinal discontinua blanca</td><td>Puede cruzarse para adelantar o cambiar de carril con visibilidad y seguridad.</td></tr>
<tr><td>Línea continua + discontinua juntas</td><td>Cada conductor respeta la línea de su lado. Si tienes la continua: no puedes cruzar.</td></tr>
<tr><td>Línea amarilla continua en el borde</td><td>Prohibido parar y estacionar en ese tramo.</td></tr>
<tr><td>Línea amarilla discontinua en el borde</td><td>Prohibido estacionar, pero se puede parar brevemente (&lt;2 minutos).</td></tr>
<tr><td>Zigzag amarillo</td><td>Parada de autobús — prohibido parar en ningún caso.</td></tr>
<tr><td>Paso de peatones (cebra)</td><td>Peatones con preferencia absoluta cuando están cruzando o van a cruzar.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ La luz ámbar NO obliga siempre a detenerse. Si ya estás muy cerca y frenar sería peligroso, debes continuar.</div>`
    },
    {
      title:'Preferencia de paso',
      content:`<div class="tv-lead">En intersecciones, alguien tiene que ceder. Las reglas de preferencia son el protocolo que evita los choques más peligrosos. El examen pregunta mucho sobre esto.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon gold">↗</div><div class="tv-card-title">Regla de la derecha</div><div class="tv-card-body">Sin señalizar: preferencia al vehículo que llega por tu derecha. Si hay señal de prioridad, la señal prevalece sobre esta regla.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">⟳</div><div class="tv-card-title">Rotonda</div><div class="tv-card-body">Los vehículos dentro tienen preferencia sobre los que entran. Los que entran siempre ceden el paso.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">🚨</div><div class="tv-card-title">Emergencias</div><div class="tv-card-body">Con sirena y luces: preferencia absoluta sobre cualquier señal o norma. Crear pasillo de emergencia.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">🚌</div><div class="tv-card-title">Autobús urbano</div><div class="tv-card-body">Preferencia para incorporarse desde su parada si ha señalizado con intermitente y no pone en peligro.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">🚶</div><div class="tv-card-title">Peatones</div><div class="tv-card-body">Solo tienen preferencia en pasos señalizados y con semáforo a su favor. Fuera de ellos ceden el paso.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">🚗</div><div class="tv-card-title">Incorporación autopista</div><div class="tv-card-body">El que se incorpora desde el carril de aceleración SIEMPRE cede el paso a los que ya circulan.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">🏠</div><div class="tv-card-title">Salida de garaje</div><div class="tv-card-body">El vehículo que sale de un garaje o vía privada cede el paso a todos los vehículos y peatones.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">🛤</div><div class="tv-card-title">Vía principal</div><div class="tv-card-body">Los vehículos de la vía principal tienen preferencia sobre los de las vías secundarias señalizadas con STOP o Ceda.</div></div>
</div>
<div class="tv-trap">⚠️ Los peatones NO tienen preferencia en cualquier punto de la vía. Solo en pasos señalizados y con semáforo verde peatonal.</div>`
    },
    {
      title:'Adelantamientos — cuándo y cómo',
      content:`<div class="tv-lead">El adelantamiento es la maniobra de mayor riesgo. Requiere verificar cinco condiciones antes de ejecutarlo. Si falta una sola, no se adelanta.</div>
<div class="tv-steps">
<div class="tv-step"><div class="tv-step-num">1</div><div class="tv-step-text"><strong>Visibilidad:</strong> la vía debe estar libre en el carril contrario con suficiente distancia para completar la maniobra.</div></div>
<div class="tv-step"><div class="tv-step-num">2</div><div class="tv-step-text"><strong>No viene nadie de frente</strong> a corta distancia que pueda verse afectado.</div></div>
<div class="tv-step"><div class="tv-step-num">3</div><div class="tv-step-text"><strong>El vehículo de delante</strong> no ha señalizado un giro a la izquierda ni ha iniciado un adelantamiento.</div></div>
<div class="tv-step"><div class="tv-step-num">4</div><div class="tv-step-text"><strong>Señalizar</strong> con intermitente izquierdo antes de salir del carril. Comprobar punto ciego.</div></div>
<div class="tv-step"><div class="tv-step-num">5</div><div class="tv-step-text"><strong>Completar</strong> la maniobra rápidamente. Volver al carril derecho señalizando con intermitente derecho.</div></div>
</div>
<div class="tv-table-title">DÓNDE ESTÁ PROHIBIDO ADELANTAR</div>
<table class="tv-table"><thead><tr><th>Lugar prohibido</th><th>Motivo</th></tr></thead><tbody>
<tr class="tv-row-red"><td>Pasos de peatones y sus inmediaciones</td><td>Siempre, aunque no haya peatones en ese momento</td></tr>
<tr class="tv-row-red"><td>Curvas y cambios de rasante sin visibilidad</td><td>Aunque la línea central sea discontinua</td></tr>
<tr class="tv-row-red"><td>Intersecciones en general</td><td>Salvo glorietas y excepciones señalizadas</td></tr>
<tr class="tv-row-red"><td>Pasos a nivel y sus proximidades</td><td>Zona de riesgo elevado</td></tr>
<tr class="tv-row-red"><td>Si otro vehículo ya está adelantando</td><td>No se pueden hacer dos adelantamientos simultáneos</td></tr>
<tr class="tv-row-red"><td>Señal de prohibición de adelantamiento</td><td>Hasta que aparezca la señal de fin de prohibición</td></tr>
</tbody></table>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">Separación al adelantar ciclistas: 1,5 m</div><div class="tv-compare-body">Mínimo 1,5 metros de separación lateral. Normalmente implica invadir parcialmente el carril contrario. Verificar antes que no viene nadie.</div></div>
<div class="tv-compare-item success"><div class="tv-compare-title">El adelantado no debe acelerar</div><div class="tv-compare-body">El vehículo adelantado no debe aumentar su velocidad. No está obligado a reducirla, pero no puede obstaculizar la maniobra.</div></div>
</div>
<div class="tv-trap">⚠️ Línea discontinua NO significa que siempre se puede adelantar. Si hay una curva sin visibilidad o un paso de peatones, el adelantamiento sigue prohibido aunque la línea sea discontinua.</div>`
    },
    {
      title:'Parada y estacionamiento',
      content:`<div class="tv-lead">Son dos situaciones distintas con normas distintas. Confundirlas es uno de los errores más frecuentes en el examen.</div>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">PARADA</div><div class="tv-compare-body">Inmovilización inferior a 2 minutos SIN abandonar el puesto de mando. El conductor está al volante listo para arrancar.</div></div>
<div class="tv-compare-item danger"><div class="tv-compare-title">ESTACIONAMIENTO</div><div class="tv-compare-body">Cualquier otra inmovilización. El conductor abandona el vehículo o permanece más de 2 minutos.</div></div>
</div>
<div class="tv-table-title">NORMAS DE PARADA Y ESTACIONAMIENTO</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>En vías interurbanas</td><td>Siempre fuera de la calzada, en el arcén derecho, paralelo al eje.</td></tr>
<tr><td>En vías urbanas</td><td>En el lado derecho, salvo sentido único o señal que lo autorice a la izquierda.</td></tr>
<tr><td>Distancia a una intersección</td><td>Mínimo 5 metros de distancia.</td></tr>
<tr><td>Distancia a una señal</td><td>No tapar ni ocultar señales de tráfico.</td></tr>
<tr><td>Junto a línea amarilla continua</td><td>Prohibido parar y estacionar.</td></tr>
<tr><td>Junto a línea amarilla discontinua</td><td>Prohibido estacionar. Permitido parar (&lt;2 minutos).</td></tr>
<tr><td>En doble fila</td><td>Prohibido en general. Solo parada brevísima con motor en marcha y conductor al volante.</td></tr>
<tr><td>En paso de peatones</td><td>Prohibido parar y estacionar.</td></tr>
<tr><td>En carril bus</td><td>Prohibido parar y estacionar salvo para subir/bajar pasajeros con rapidez.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ "El conductor no abandona el vehículo" es la clave de la PARADA. Si se va del vehículo aunque sea 30 segundos, pasa a ser estacionamiento.</div>`
    }
  ]
},

{
  id:'m3',num:3,title:'Otros Usuarios',subtitle:'Peatones · Ciclistas · Motos · Animales · Vehículos especiales',icon:'◆',week:2,
  sections:[
    {
      title:'Peatones — normas y preferencia',
      content:`<div class="tv-lead">Los peatones son los usuarios más vulnerables de la vía. Tienen normas propias y derechos específicos según donde se encuentren.</div>
<div class="tv-table-title">NORMAS PARA PEATONES</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Dentro de poblado</td><td>Circular por las aceras o zonas peatonales. Si no hay, por el arcén izquierdo (de frente al tráfico).</td></tr>
<tr><td>Fuera de poblado</td><td>Por el arcén izquierdo (frente al tráfico) o por la calzada izquierda si no hay arcén.</td></tr>
<tr><td>Cruzar la calzada</td><td>Por los pasos señalizados. Si no los hay, en ángulo recto, con buena visibilidad y sin obstaculizar el tráfico.</td></tr>
<tr><td>En autopista/autovía</td><td>Prohibida la circulación de peatones.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">PREFERENCIA EN PASO SEÑALIZADO</span>Los peatones tienen preferencia absoluta. El conductor debe detener el vehículo aunque el peatón esté en el otro extremo del paso.</div>
<div class="tv-key-item"><span class="tv-key-label">FUERA DEL PASO</span>El peatón cede el paso a los vehículos. Pero el conductor debe extremar la precaución ante peatones cerca de la calzada.</div>
<div class="tv-key-item"><span class="tv-key-label">PERSONAS CON DISCAPACIDAD VISUAL</span>Con bastón blanco o perro guía: preferencia absoluta en cualquier punto de la calzada, incluso fuera del paso.</div>
<div class="tv-key-item"><span class="tv-key-label">NIÑOS</span>El conductor debe reducir la velocidad drásticamente ante grupos de niños, incluso si no hay paso señalizado.</div>
</div>
<div class="tv-trap">⚠️ Los peatones NO tienen preferencia en cualquier punto. Solo en pasos señalizados y con semáforo verde peatonal. Fuera de ellos ceden el paso.</div>`
    },
    {
      title:'Ciclistas — normas específicas',
      content:`<div class="tv-lead">Los ciclistas son usuarios vulnerables con derechos y obligaciones específicos. El examen pregunta mucho sobre la separación lateral y la circulación en carretera.</div>
<div class="tv-distance-visual">
<div class="tv-dist-title">SEPARACIÓN MÍNIMA AL ADELANTAR UN CICLISTA</div>
<div class="tv-dist-diagram"><div class="tv-dist-car">🚗</div><div class="tv-dist-space"><div class="tv-dist-line"></div><div class="tv-dist-measure">1,5 m mínimo</div></div><div class="tv-dist-bike">🚲</div></div>
<div class="tv-dist-note">Normalmente implica invadir el carril contrario. Verificar que no viene nadie antes de adelantar.</div>
</div>
<div class="tv-table-title">NORMAS DE CIRCULACIÓN PARA CICLISTAS</div>
<table class="tv-table"><thead><tr><th>Norma</th><th>Detalle</th></tr></thead><tbody>
<tr><td>Carril de circulación</td><td>Por el arcén derecho o carril bici. En grupos, pueden circular en fila de a dos. De noche: obligatorio chaleco reflectante.</td></tr>
<tr><td>Casco</td><td>Obligatorio en vías interurbanas. En ciudad: recomendado pero no obligatorio para adultos. Sí obligatorio para menores.</td></tr>
<tr><td>En carretera</td><td>Pueden circular por el arcén o por la calzada si el arcén es insuficiente. El conductor los debe adelantar con 1,5 m de separación.</td></tr>
<tr><td>En autopistas y autovías</td><td>Prohibida la circulación de ciclistas.</td></tr>
<tr><td>Paso para ciclistas</td><td>Tienen preferencia en los pasos señalizados para bicicletas.</td></tr>
<tr><td>Grupo de ciclistas</td><td>Si circulan en grupo organizado, los conductores deben tratarlo como un vehículo largo y no interrumpirlo al adelantar.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ El casco no es obligatorio para ciclistas adultos en ciudad, pero SÍ lo es en vías interurbanas. El examen distingue entre ambas situaciones.</div>`
    },
    {
      title:'Motocicletas y ciclomotores',
      content:`<div class="tv-lead">Las motos tienen normas específicas que difieren en algunos aspectos de los turismos. Son frecuentes en el examen.</div>
<div class="tv-table-title">NORMAS ESPECÍFICAS DE MOTOCICLETAS</div>
<table class="tv-table"><thead><tr><th>Norma</th><th>Detalle</th></tr></thead><tbody>
<tr><td>Luces encendidas</td><td>Obligatorio llevar las luces de cruce encendidas siempre, incluso de día en cualquier vía.</td></tr>
<tr><td>Casco</td><td>Obligatorio para conductor y todos los pasajeros en cualquier vía.</td></tr>
<tr><td>Pasajero menor de 12 años</td><td>PROHIBIDO. Excepción: si tiene al menos 7 años Y el conductor es padre, madre o tutor, y usa casco homologado.</td></tr>
<tr><td>Equipamiento de protección</td><td>Guantes, botas y ropa adecuada son recomendables. El casco es el único obligatorio por ley.</td></tr>
<tr><td>Circular entre filas de coches</td><td>Prohibido circular entre filas de vehículos detenidos o en movimiento lento.</td></tr>
<tr><td>Número de pasajeros</td><td>Máximo 1 pasajero en moto. La posición del pasajero detrás del conductor es obligatoria.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">CONDUCTOR RESPONSABLE DEL CASCO</span>El conductor de la moto es responsable si el pasajero no lleva casco. La multa recae sobre el conductor.</div>
<div class="tv-key-item"><span class="tv-key-label">CICLOMOTORES</span>Velocidad máxima: 45 km/h. Prohibidos en autopistas, autovías y vías de acceso controlado. Casco siempre obligatorio.</td></div>
</div>
<div class="tv-trap">⚠️ Las luces encendidas de día son obligatorias para motos en cualquier vía, no solo en interurbanas. El examen pregunta sobre esto específicamente.</div>`
    },
    {
      title:'Animales, vehículos especiales y transporte escolar',
      content:`<div class="tv-lead">Hay usuarios de la vía con normas muy específicas. Aparecen en el examen con menos frecuencia pero cuando aparecen hay que saberlos.</div>
<div class="tv-table-title">ANIMALES EN LA VÍA</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Animales en autopistas y autovías</td><td>PROHIBIDA su circulación. No pueden circular animales ni de tiro ni rebaños.</td></tr>
<tr><td>Cañadas señalizadas</td><td>El conductor debe ceder el paso a los animales cuando crucen por cañadas señalizadas.</td></tr>
<tr><td>Animales en carretera convencional</td><td>El conductor debe extremar la precaución y reducir la velocidad. Paso de animales señalizado.</td></tr>
<tr><td>Atropello de animal cinegético</td><td>El conductor es responsable si incumplió normas de circulación o la velocidad era excesiva.</td></tr>
</tbody></table>
<div class="tv-table-title">VEHÍCULOS ESPECIALES Y ESCOLARES</div>
<table class="tv-table"><thead><tr><th>Vehículo</th><th>Norma específica</th></tr></thead><tbody>
<tr><td>Vehículos con masa inferior a la reglamentaria</td><td>Deben circular por el arcén derecho.</td></tr>
<tr><td>Vehículos de emergencia (luces+sirena)</td><td>Preferencia absoluta. Todos los vehículos deben crear pasillo de emergencia.</td></tr>
<tr><td>Transporte escolar</td><td>Al parar con señal luminosa naranja intermitente y señales de peligro: los conductores deben detenerse a distancia suficiente.</td></tr>
<tr><td>Vehículos agrícolas</td><td>Deben circular por el arcén. Si obstruyen el tráfico más de 20 km/h por debajo del límite, crear lugares de adelantamiento.</td></tr>
</tbody></table>`
    }
  ]
},

{
  id:'m4',num:4,title:'El Vehículo',subtitle:'ITV · Seguro · Seguridad activa/pasiva · Carga · Remolques',icon:'▣',week:3,
  sections:[
    {
      title:'ITV — inspección técnica',
      content:`<div class="tv-lead">La ITV garantiza que el vehículo cumple los requisitos técnicos de seguridad y emisiones. Sin ITV favorable, el seguro puede no cubrir ciertos siniestros.</div>
<div class="tv-itv-timeline">
<div class="tv-itv-step exento"><div class="tv-itv-years">0 – 4 años</div><div class="tv-itv-status">EXENTO</div><div class="tv-itv-desc">No requiere ITV en los primeros 4 años desde la primera matrícula</div></div>
<div class="tv-itv-arrow">→</div>
<div class="tv-itv-step biennial"><div class="tv-itv-years">4 – 10 años</div><div class="tv-itv-status">CADA 2 AÑOS</div><div class="tv-itv-desc">Revisión bienal obligatoria</div></div>
<div class="tv-itv-arrow">→</div>
<div class="tv-itv-step annual"><div class="tv-itv-years">+10 años</div><div class="tv-itv-status">ANUAL</div><div class="tv-itv-desc">Revisión anual obligatoria</div></div>
</div>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">ITV EXIGE SEGURO VIGENTE</span>Las estaciones ITV requieren seguro obligatorio vigente para emitir resultado favorable.</div>
<div class="tv-key-item"><span class="tv-key-label">ITV DESFAVORABLE</span>El vehículo puede circular hasta la siguiente revisión programada, pero no puede transferirse ni renovar la matrícula.</div>
<div class="tv-key-item"><span class="tv-key-label">ITV NEGATIVA</span>El vehículo NO puede circular. Debe ser remolcado al taller y volver a presentarse tras reparar los defectos.</div>
<div class="tv-key-item"><span class="tv-key-label">REMOLQUES &gt;750 KG</span>Deben tener matrícula propia y tarjeta de inspección técnica independiente del vehículo tractor.</div>
</div>
<div class="tv-trap">⚠️ Si un vehículo circula con ITV caducada más de dos meses, es infracción grave. La estación ITV también exige seguro para dar resultado favorable.</div>`
    },
    {
      title:'Cinturón, casco y SRI infantil',
      content:`<div class="tv-lead">Los sistemas de retención son la última línea de defensa en un accidente. Su uso correcto multiplica las probabilidades de supervivencia.</div>
<div class="tv-compare">
<div class="tv-compare-item success"><div class="tv-compare-title">Cinturón — todos, siempre</div><div class="tv-compare-body">Obligatorio para todos los ocupantes en todas las vías (urbanas e interurbanas). Sin excepción de velocidad ni trayecto corto. El conductor responde si un pasajero no lo lleva.</div></div>
<div class="tv-compare-item warn"><div class="tv-compare-title">SRI — menores de 12 años o &lt;135 cm</div><div class="tv-compare-body">Obligatorio para menores de 12 años O con menos de 135 cm de altura, con SRI homologado adaptado al peso y talla. Homologación R44 o R129.</div></div>
</div>
<div class="tv-table-title">NORMAS DEL SRI (SISTEMA DE RETENCIÓN INFANTIL)</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Menor en asiento trasero</td><td>Siempre con SRI homologado adecuado a su peso y talla. Obligatorio.</td></tr>
<tr><td>Menor en asiento delantero</td><td>Solo si todos los asientos traseros están ocupados por otros menores con SRI, o si el vehículo no tiene asientos traseros.</td></tr>
<tr><td>Sillita orientada hacia atrás + airbag frontal</td><td>PROHIBIDO instalarla en un asiento con airbag frontal activo. El airbag puede causar lesiones graves al niño. Debe desactivarse el airbag.</td></tr>
<tr><td>Menor más de 135 cm</td><td>Puede usar el cinturón normal. Ya no necesita SRI obligatorio.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">CASCO EN MOTO</span>Obligatorio para conductor y pasajeros en cualquier vía. El conductor es responsable si el pasajero no lleva casco.</div>
<div class="tv-key-item"><span class="tv-key-label">CINTURÓN MAL COLOCADO</span>Llevar la banda por debajo del brazo o por detrás de la espalda equivale a no llevarlo. También es infracción.</div>
</div>
<div class="tv-trap">⚠️ El airbag NO reemplaza al cinturón. Sin cinturón, el airbag puede causar lesiones graves en vez de proteger. El cinturón es el sistema primario.</div>`
    },
    {
      title:'Seguridad activa y pasiva',
      content:`<div class="tv-lead">Los sistemas de seguridad del vehículo se dividen en activos (evitan el accidente) y pasivos (reducen las consecuencias cuando ya ocurrió).</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon gold">🔴</div><div class="tv-card-title">Frenos ABS</div><div class="tv-card-body">Evita el bloqueo de ruedas. Mantiene el control de la dirección durante la frenada brusca. Con ABS: pisa fuerte y mantén pisado, no sueltes.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">⚡</div><div class="tv-card-title">Control de estabilidad (ESP)</div><div class="tv-card-body">Detecta y corrige derrapes actuando sobre los frenos de ruedas individuales. Seguridad activa.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">💥</div><div class="tv-card-title">Airbag</div><div class="tv-card-body">Seguridad pasiva. Se activa en colisión. Complementa al cinturón — sin cinturón puede causar lesiones graves.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">🏎</div><div class="tv-card-title">Neumáticos</div><div class="tv-card-body">Profundidad mínima del dibujo: 1,6 mm. Por debajo, la distancia de frenada en mojado aumenta drásticamente. Comprobar presión en frío.</div></div>
</div>
<div class="tv-table-title">CÓMO ACTUAR CON ABS</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Acción correcta</th></tr></thead><tbody>
<tr><td>Frenada de emergencia con ABS</td><td>Pisar el freno con toda la fuerza posible y mantenerlo pisado. La vibración del pedal es normal (ABS funcionando). No soltar el pie.</td></tr>
<tr><td>¿Acorta la distancia de frenada?</td><td>No necesariamente. Su ventaja es mantener el control de la dirección, no acortar la distancia.</td></tr>
<tr><td>En grava o nieve suelta</td><td>Sin ABS puede frenar en menos distancia porque el bloqueo crea un "cuña" de material. Con ABS la distancia puede ser mayor.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ ABS mantiene la dirección, no acorta la distancia de frenada. En superficies sueltas (grava, nieve) la distancia puede ser incluso mayor con ABS que sin él.</div>`
    },
    {
      title:'Alumbrado del vehículo',
      content:`<div class="tv-lead">Las luces tienen dos funciones: ver y ser visto. Hay una luz para cada situación y usarlas incorrectamente es infracción.</div>
<div class="tv-table-title">CUÁNDO USAR CADA TIPO DE LUZ</div>
<table class="tv-table"><thead><tr><th>Tipo de luz</th><th>Cuándo encender</th><th>Cuándo NO encender</th></tr></thead><tbody>
<tr><td><strong>Cruce (cortas)</strong></td><td>Noche, visibilidad reducida, lluvia/niebla de día, túneles (siempre)</td><td>—</td></tr>
<tr><td><strong>Largas (carretera)</strong></td><td>Carretera sin iluminación, fuera de poblado, sin riesgo de deslumbrar</td><td>A menos de 200 m de vehículo de frente o siguiendo a otro</td></tr>
<tr><td><strong>Antiniebla delantera</strong></td><td>Solo con niebla, lluvia intensa o nieve que reduzca notablemente la visibilidad</td><td>En condiciones normales — es infracción (multa 200€)</td></tr>
<tr><td><strong>Antiniebla trasera (roja)</strong></td><td>Solo con visibilidad notablemente reducida (&lt;50 m aprox)</td><td>En condiciones normales — deslumbra al de atrás</td></tr>
<tr><td><strong>4 intermitentes</strong></td><td>Avería, frenada brusca de emergencia, retención inesperada</td><td>Para aparcar mal o detenerse momentáneamente (no justifica infracciones)</td></tr>
<tr><td><strong>Luces de posición</strong></td><td>Complemento a cruce o largas. Vehículo estacionado en zona oscura.</td><td>Solas de noche para circular (insuficientes)</td></tr>
</tbody></table>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">200 metros — cambiar largas a cortas</div><div class="tv-compare-body">A 200 metros de un vehículo de frente, cambiar de largas a cortas. También al seguir a otro de cerca para no deslumbrar por los retrovisores.</div></div>
<div class="tv-compare-item danger"><div class="tv-compare-title">Si te deslumbran — qué hacer</div><div class="tv-compare-body">Mira al borde derecho de la calzada. Reduce velocidad. NO pongas tú también las largas — eso crearía un peligro mayor para ambos.</div></div>
</div>
<div class="tv-trap">⚠️ En cualquier túnel (iluminado o no) es obligatorio encender las luces de cruce. No existe excepción por iluminación del túnel.</div>`
    },
    {
      title:'Carga, remolques y masa máxima',
      content:`<div class="tv-lead">La carga y los remolques tienen normas estrictas de seguridad. Una carga mal sujeta o un remolque sobrecargado pueden causar accidentes graves.</div>
<div class="tv-table-title">NORMAS DE CARGA</div>
<table class="tv-table"><thead><tr><th>Aspecto</th><th>Norma</th></tr></thead><tbody>
<tr><td>Carga sobresaliente por delante</td><td>Máximo el 50% de la longitud del vehículo, hasta un máximo de 3 metros.</td></tr>
<tr><td>Carga sobresaliente por detrás</td><td>Máximo el 50% de la longitud del vehículo. Si supera 1 metro, señalizar con panel o dispositivo reflectante.</td></tr>
<tr><td>Carga sobresaliente por los lados</td><td>No puede superar el ancho del vehículo.</td></tr>
<tr><td>Sujeción de la carga</td><td>Debe estar bien asegurada para que no caiga ni se desplace. Responsabilidad del conductor.</td></tr>
<tr><td>Transporte de personas en zona de carga</td><td>Prohibido transportar personas en la zona de carga de vehículos no acondicionados.</td></tr>
</tbody></table>
<div class="tv-table-title">REMOLQUES</div>
<table class="tv-table"><thead><tr><th>Tipo</th><th>Norma</th></tr></thead><tbody>
<tr><td>Remolque hasta 750 kg MMA</td><td>Se puede arrastrar con permiso B sin restricción especial. Velocidad máxima del conjunto: la del vehículo tractor.</td></tr>
<tr><td>Remolque más de 750 kg MMA</td><td>Requiere permiso B+E si la combinación supera 3.500 kg. Velocidad máxima en autopista: 100 km/h.</td></tr>
<tr><td>Distancia de seguridad con remolque</td><td>Aumenta significativamente respecto a un vehículo sin remolque. La distancia de frenada es mayor.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">VEHÍCULOS &gt;10 METROS</span>En autopistas y autovías deben mantener al menos 50 metros de separación con el vehículo precedente. Es el único mínimo legal en metros para distancia de seguridad.</div>
</div>`
    }
  ]
},

{
  id:'m5',num:5,title:'La Conducción',subtitle:'Maniobras · Distancias · Fatiga · Conducción eficiente',icon:'↗',week:4,
  sections:[
    {
      title:'Distancia de seguridad',
      content:`<div class="tv-lead">La distancia de seguridad es el margen que te permite reaccionar y frenar antes de colisionar con el vehículo de delante. Es dinámica — no hay un número fijo para turismos.</div>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">¿Existe mínimo legal en metros?</div><div class="tv-compare-body">Para turismos: NO. La ley exige "distancia suficiente adaptada a las circunstancias" sin fijar metros. Solo hay mínimo fijo para vehículos de más de 10 metros: 50 metros en autopista.</div></div>
<div class="tv-compare-item success"><div class="tv-compare-title">Regla práctica de los 3 segundos</div><div class="tv-compare-body">El vehículo de delante pasa por un punto fijo → tarda mínimo 3 segundos en pasar tú. En condiciones adversas o de noche: aumenta a 4–6 segundos.</div></div>
</div>
<div class="tv-table-title">CÓMO AFECTAN LAS CONDICIONES A LA FRENADA</div>
<table class="tv-table"><thead><tr><th>Condición</th><th>Efecto en distancia de frenada</th></tr></thead><tbody>
<tr><td>Asfalto seco</td><td>Referencia base (100%)</td></tr>
<tr><td>Asfalto mojado (lluvia)</td><td>Se duplica o más (+100%). Aumentar distancia de seguridad.</td></tr>
<tr><td>Nieve compactada</td><td>Se multiplica por 3–5. Velocidad máxima recomendada: 40–50 km/h.</td></tr>
<tr><td>Hielo</td><td>Se multiplica por 8–10. Prácticamente imposible frenar. Solo usar cadenas o neumáticos de invierno.</td></tr>
<tr><td>Aquaplaning</td><td>El neumático flota sobre el agua. La dirección deja de responder. Soltar acelerador suavemente, no frenar bruscamente.</td></tr>
<tr><td>Frenos recalentados</td><td>Fading: pérdida temporal de eficacia. Usar motor para frenar en descensos largos.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">TIEMPO DE REACCIÓN</span>Entre que ves el peligro y el coche empieza a frenar: 0,75–1,5 segundos. A 120 km/h son 25–50 metros recorridos antes de empezar a frenar.</div>
<div class="tv-key-item"><span class="tv-key-label">NEUMÁTICOS DESGASTADOS</span>La distancia de frenada en mojado con neumáticos desgastados puede triplicarse respecto a neumáticos nuevos.</div>
</div>
<div class="tv-trap">⚠️ Los 50 metros de distancia mínima son SOLO para vehículos de más de 10 metros de longitud en autopistas. Para turismos no hay mínimo fijo en metros.</div>`
    },
    {
      title:'Circulación en autopista y carretera',
      content:`<div class="tv-lead">La autopista y la carretera convencional tienen normas específicas de circulación que van más allá de la velocidad. El examen pregunta sobre incorporaciones, salidas y adelantamientos.</div>
<div class="tv-table-title">NORMAS ESPECÍFICAS DE AUTOPISTA</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Incorporación (carril de aceleración)</td><td>El que se incorpora cede el paso a los que ya circulan. Ajustar velocidad en el carril de aceleración para buscar un hueco.</td></tr>
<tr><td>Salida (carril de deceleración)</td><td>Reducir la velocidad en el carril de deceleración, no en el carril principal. Señalizar con antelación.</td></tr>
<tr><td>Marcha atrás</td><td>TERMINANTEMENTE PROHIBIDA en cualquier circunstancia. Si te equivocas de salida, continúa hasta la siguiente.</td></tr>
<tr><td>Cambio de sentido</td><td>Prohibido. Solo en los pasos habilitados para ello.</td></tr>
<tr><td>Parada de emergencia</td><td>Señalizar, poner las luces de emergencia, usar el carril de emergencia o el arcén. Chaleco antes de salir.</td></tr>
<tr><td>Velocidad mínima en autopista</td><td>60 km/h. Circular más lento sin causa justificada es infracción.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">CARRIL IZQUIERDO</span>Solo para adelantar o cuando el tráfico llene todos los carriles. Al terminar el adelantamiento, volver al carril derecho.</div>
<div class="tv-key-item"><span class="tv-key-label">VEHÍCULOS LENTOS</span>Los vehículos que circulan habitualmente por debajo de la velocidad normal (agrícolas, etc.) deben circular por el arcén o carril derecho.</div>
</div>
<div class="tv-trap">⚠️ La marcha atrás en autopista es una infracción muy grave (pérdida de 6 puntos y multa de 500€) además de ser extremadamente peligrosa.</div>`
    },
    {
      title:'Circulación urbana',
      content:`<div class="tv-lead">La ciudad es el entorno de mayor complejidad: peatones, ciclistas, autobuses, semáforos, pasos de peatones y múltiples intersecciones. Exige más atención que la carretera.</div>
<div class="tv-table-title">NORMAS ESPECÍFICAS EN CIUDAD</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Intersección sin semáforo ni señal</td><td>Regla de la derecha. Si hay señal, seguir la señal.</td></tr>
<tr><td>Giro a la izquierda</td><td>Señalizar con antelación. Extremar precaución con peatones y ciclistas al completar el giro.</td></tr>
<tr><td>Paso de peatones sin semáforo</td><td>Ceder el paso siempre a peatones que cruzan o están a punto de cruzar.</td></tr>
<tr><td>Frenada ante peatón</td><td>Si un peatón está cruzando, detener completamente el vehículo aunque esté en el extremo opuesto del paso.</td></tr>
<tr><td>Uso del claxon</td><td>Solo para evitar un accidente. En ciudad de noche: prohibido salvo peligro inminente.</td></tr>
<tr><td>Carril bus</td><td>Solo pueden circular autobuses y, en algunos casos, taxis, motos y bicicletas si está señalizado.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">ZONAS DE BAJAS EMISIONES (ZBE)</span>Las ciudades grandes tienen restricciones de acceso por etiqueta medioambiental. Sin etiqueta o con etiqueta B pueden estar restringidos en episodios de contaminación.</div>
<div class="tv-key-item"><span class="tv-key-label">APARCAMIENTO EN CIUDAD</span>Las marcas amarillas, las señales de prohibición y las distancias mínimas a intersecciones o pasos de peatones determinan dónde se puede aparcar.</div>
</div>`
    },
    {
      title:'Conducción eficiente y medio ambiente',
      content:`<div class="tv-lead">La conducción eficiente no solo ahorra combustible — también reduce emisiones contaminantes y el desgaste del vehículo.</div>
<div class="tv-steps">
<div class="tv-step"><div class="tv-step-num">1</div><div class="tv-step-text"><strong>Arrancar sin acelerar.</strong> No "calentar" el motor acelerando en frío. En diésel: esperar unos segundos para asegurar la lubricación antes de arrancar.</div></div>
<div class="tv-step"><div class="tv-step-num">2</div><div class="tv-step-text"><strong>Cambiar de marcha pronto.</strong> Usar marchas largas cuanto antes. Cambiar entre 2.000–2.500 rpm en gasolina, 1.500–2.000 en diésel.</div></div>
<div class="tv-step"><div class="tv-step-num">3</div><div class="tv-step-text"><strong>Velocidad constante.</strong> Evitar aceleraciones y frenazos. A velocidad constante el consumo es mínimo.</div></div>
<div class="tv-step"><div class="tv-step-num">4</div><div class="tv-step-text"><strong>Anticipar y aprovechar la inercia.</strong> Soltar el acelerador con antelación antes de semáforos, curvas o cuestas. El motor en ralentí consume mínimo.</div></div>
<div class="tv-step"><div class="tv-step-num">5</div><div class="tv-step-text"><strong>Mantenimiento correcto.</strong> Presión de neumáticos adecuada (baja presión = más consumo), filtros limpios, sistema de escape en buen estado.</div></div>
</div>
<div class="tv-etiquetas-full">
<div class="tv-etiq-full cero"><div class="tv-etiq-badge">CERO</div><div class="tv-etiq-vehicles">Eléctricos puros · Pila de hidrógeno · Eléctrico de autonomía extendida</div><div class="tv-etiq-access">Acceso libre a todas las ZBE</div></div>
<div class="tv-etiq-full eco"><div class="tv-etiq-badge">ECO</div><div class="tv-etiq-vehicles">Híbridos enchufables y no enchufables · GLP · GNC</div><div class="tv-etiq-access">Acceso a la mayoría de ZBE</div></div>
<div class="tv-etiq-full c"><div class="tv-etiq-badge">C</div><div class="tv-etiq-vehicles">Gasolina matriculados desde 2006 · Diésel desde 2014</div><div class="tv-etiq-access">Acceso según restricciones locales</div></div>
<div class="tv-etiq-full b"><div class="tv-etiq-badge">B</div><div class="tv-etiq-vehicles">Gasolina desde 2000 · Diésel desde 2006</div><div class="tv-etiq-access">Acceso limitado en episodios de contaminación</div></div>
<div class="tv-etiq-full none"><div class="tv-etiq-badge">SIN</div><div class="tv-etiq-vehicles">Vehículos más antiguos o más contaminantes</div><div class="tv-etiq-access">Sin acceso a ZBE en episodios</div></div>
</div>
<div class="tv-trap">⚠️ Está prohibido emitir ruidos, gases o humos por encima de los límites legales. El conductor debe colaborar con las pruebas de control de emisiones.</div>`
    },
    {
      title:'Emergencias mecánicas — qué hacer',
      content:`<div class="tv-lead">Un reventón, una avería o los frenos que fallan pueden ocurrir. Conocer el protocolo correcto marca la diferencia entre un susto y un accidente grave.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon red">💥</div><div class="tv-card-title">Reventón de neumático</div><div class="tv-card-body">No frenar bruscamente. Sujetar el volante con firmeza. Soltar el acelerador gradualmente. Frenar de forma progresiva y suave. Salir de la calzada.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">🔦</div><div class="tv-card-title">Avería en autopista</div><div class="tv-card-body">1. Chaleco dentro del vehículo antes de salir. 2. Señalizar con V-16 o triángulos. 3. Alejarse por el lateral derecho de la calzada.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">🔥</div><div class="tv-card-title">Incendio del vehículo</div><div class="tv-card-body">Apagar el motor. Salir del vehículo inmediatamente. Alejarse. NUNCA abrir el capó si hay llamas visibles — el oxígeno aviva el fuego.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">⚙</div><div class="tv-card-title">Frenos que fallan</div><div class="tv-card-body">Bombear el freno (frenos hidráulicos). Usar el freno de mano progresivamente. Reducir marcha. Buscar una salida o zona de deceleración.</div></div>
</div>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">AQUAPLANING</span>La dirección deja de responder. No frenar bruscamente ni girar el volante. Soltar el acelerador suavemente hasta recuperar el contacto con el asfalto.</div>
<div class="tv-key-item"><span class="tv-key-label">DESLUMBRAMIENTO SOLAR</span>Reducir velocidad. Si no se puede ver la calzada, detener el vehículo en lugar seguro.</div>
</div>`
    }
  ]
},

{
  id:'m6',num:6,title:'Accidentes y Emergencias',subtitle:'Protocolo PAS · Primeros auxilios · Señalización · Obligaciones',icon:'⊕',week:5,
  sections:[
    {
      title:'Protocolo PAS — Proteger, Avisar, Socorrer',
      content:`<div class="tv-lead">Ante cualquier accidente, tres pasos en orden estricto. No al revés. PAS es lo que salva vidas cuando no hay servicios de emergencia aún.</div>
<div class="tv-pas-steps">
<div class="tv-pas-step"><div class="tv-pas-letter gold">P</div><div class="tv-pas-word">PROTEGER</div><div class="tv-pas-desc">Señalizar el accidente para evitar nuevos choques. Zona de seguridad mínima 50 m. Chaleco reflectante antes de salir del vehículo. Apagar motores.</div></div>
<div class="tv-pas-step"><div class="tv-pas-letter teal">A</div><div class="tv-pas-word">AVISAR</div><div class="tv-pas-desc">Llamar al 112. Indicar: localización exacta, número de heridos, estado de los heridos, si hay atrapados, si hay derrame de combustible.</div></div>
<div class="tv-pas-step"><div class="tv-pas-letter red">S</div><div class="tv-pas-word">SOCORRER</div><div class="tv-pas-desc">Asistir a las víctimas sin moverlas salvo peligro extremo (incendio, caída al agua). Aplicar RCP si no respira. Posición lateral si inconsciente y respira.</div></div>
</div>
<div class="tv-table-title">NÚMEROS DE EMERGENCIA</div>
<table class="tv-table"><thead><tr><th>Número</th><th>Servicio</th></tr></thead><tbody>
<tr><td class="tv-num gold">112</td><td>Emergencias generales — policía, bomberos, ambulancias</td></tr>
<tr><td class="tv-num teal">011</td><td>Información de carreteras y estado de la red viaria</td></tr>
<tr><td class="tv-num">060</td><td>DGT — trámites, consultas y gestiones administrativas</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">OBLIGACIÓN LEGAL</span>Todo implicado o testigo de un accidente está OBLIGADO a auxiliar. No hacerlo cuando se está en condiciones de ayudar es infracción grave.</div>
<div class="tv-key-item"><span class="tv-key-label">FACILITAR IDENTIDAD</span>Los implicados en un accidente están obligados a facilitar su identidad y los datos del vehículo a los demás implicados y a los agentes.</div>
<div class="tv-key-item"><span class="tv-key-label">PRUEBA DE ALCOHOL/DROGAS</span>Todo implicado en un accidente está obligado a someterse a pruebas de detección de alcohol y drogas. La negativa es delito penal.</div>
</div>
<div class="tv-trap">⚠️ Negarse a auxiliar cuando se está en condiciones físicas de hacerlo es infracción grave, independientemente de si eres el causante o solo testigo.</div>`
    },
    {
      title:'Primeros auxilios básicos',
      content:`<div class="tv-lead">No es necesario ser médico. Estas técnicas básicas pueden mantener con vida a una víctima hasta que lleguen los servicios de emergencia.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon teal">↔</div><div class="tv-card-title">Posición lateral de seguridad (PLS)</div><div class="tv-card-body">Para víctimas inconscientes que SÍ respiran. Evita ahogarse con vómito. No mover si hay sospecha de lesión cervical o de columna.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">♥</div><div class="tv-card-title">RCP básica</div><div class="tv-card-body">Si NO respira: 30 compresiones torácicas (100–120/min, hundiendo 5–6 cm) + 2 insuflaciones. Repetir. No parar hasta que lleguen los servicios.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">🩹</div><div class="tv-card-title">Hemorragias</div><div class="tv-card-body">Comprimir directamente con paño limpio con fuerza continua. No retirar el objeto clavado — fijarlo sin extraerlo. Elevar el miembro si es posible.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">🦴</div><div class="tv-card-title">Fracturas y traumatismos</div><div class="tv-card-body">NO mover al accidentado salvo peligro extremo. Inmovilizar la zona lesionada en la posición en que esté. Esperar servicios de emergencia.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">🔥</div><div class="tv-card-title">Quemaduras</div><div class="tv-card-body">Enfriar con agua fría (15–20 min). No reventar ampollas. No aplicar cremas, aceite ni pasta de dientes. Cubrir con paño limpio húmedo.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">🧠</div><div class="tv-card-title">Traumatismo craneal</div><div class="tv-card-body">No quitar el casco si el accidentado está inconsciente (riesgo cervical). Mantener quieto. No dar agua ni medicamentos. Vigilar la respiración.</div></div>
</div>
<div class="tv-trap">⚠️ NO retirar el casco a un motorista inconsciente: si hay lesión cervical, quitarlo puede causar parálisis. Solo quitarlo si no respira y es imposible hacer RCP con él puesto.</div>`
    },
    {
      title:'Señalización de emergencia y obligaciones',
      content:`<div class="tv-lead">Señalizar correctamente un vehículo averiado o accidentado protege a todos los usuarios de la vía. Las obligaciones legales van más allá de simplemente llamar al 112.</div>
<div class="tv-table-title">DISPOSITIVOS DE SEÑALIZACIÓN</div>
<table class="tv-table"><thead><tr><th>Dispositivo</th><th>Norma de uso</th></tr></thead><tbody>
<tr><td>Dispositivo V-16 (luz naranja)</td><td>Sustituto de los triángulos desde julio 2021. Se coloca sobre el techo del vehículo. Se activa desde dentro — sin necesidad de salir a la calzada.</td></tr>
<tr><td>Triángulos de emergencia</td><td>Ya no son obligatorios para turismos desde 2021. Se pueden seguir usando voluntariamente. En carretera: uno delante y uno detrás, a 50 metros.</td></tr>
<tr><td>Luces de emergencia (4 intermitentes)</td><td>Activar siempre en caso de avería o accidente. Complementan al V-16 o triángulos.</td></tr>
<tr><td>Chaleco reflectante</td><td>Obligatorio llevarlo en el habitáculo. Ponérselo ANTES de salir del vehículo. En autopista, también los pasajeros que salgan.</td></tr>
</tbody></table>
<div class="tv-table-title">SITUACIONES ESPECIALES</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Protocolo</th></tr></thead><tbody>
<tr><td>Paso a nivel — vehículo atrapado en las vías</td><td>Desalojar todos los ocupantes inmediatamente en diagonal (no paralelo a las vías). Avisar a los maquinistas. Llamar al 112.</td></tr>
<tr><td>Carga de combustible</td><td>Apagar el motor obligatoriamente. Prohibido fumar.</td></tr>
<tr><td>Vehículo detenido en túnel</td><td>Apagar el motor, poner luces de emergencia, salir por las salidas de emergencia si las hay.</td></tr>
<tr><td>Incendio en túnel</td><td>No dar la vuelta. Salir del vehículo. Seguir indicaciones del personal. Alejarse por las salidas de emergencia a pie.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">INMOVILIZACIÓN POR AGENTE</span>Los agentes pueden inmovilizar el vehículo por: deficiencias graves, falta de seguro, exceso de tiempos de conducción, tasa positiva de alcohol/drogas, o falta de documentación.</div>
<div class="tv-key-item"><span class="tv-key-label">ANIMALES CINEGÉTICOS</span>Si atropellas un animal de caza, el conductor es responsable si incumplió normas de tráfico. Si las cumplió, la responsabilidad puede ser del titular del coto.</div>
</div>`
    }
  ]
},

{
  id:'m7',num:7,title:'Normas Específicas',subtitle:'Vías especiales · Condiciones adversas · Infracciones · Sanciones',icon:'◎',week:6,
  sections:[
    {
      title:'Conducción en condiciones adversas',
      content:`<div class="tv-lead">La lluvia, niebla, nieve y oscuridad cambian radicalmente las condiciones de conducción. Hay normas específicas para cada situación.</div>
<div class="tv-table-title">NORMAS POR CONDICIÓN METEOROLÓGICA</div>
<table class="tv-table"><thead><tr><th>Condición</th><th>Obligaciones del conductor</th></tr></thead><tbody>
<tr><td>Lluvia</td><td>Encender luces de cruce de día. Aumentar distancia de seguridad. Evitar charcos grandes (aquaplaning). Velocidad inferior al límite si la visibilidad es reducida.</td></tr>
<tr><td>Niebla densa</td><td>Encender luces de cruce y antiniebla (si la visibilidad lo requiere). Reducir velocidad drásticamente. Aumentar distancia. Si la visibilidad es menor de 50 metros, reducir a menos de 50 km/h.</td></tr>
<tr><td>Nieve o hielo</td><td>Obligatorio usar cadenas o neumáticos de invierno si lo indica la señalización. Velocidad mínima posible. Distancia de seguridad muy amplia.</td></tr>
<tr><td>Viento fuerte</td><td>Reducir velocidad especialmente en viaductos, túneles de salida y zonas despejadas. Mayor peligro para motos, furgonetas y camiones.</td></tr>
<tr><td>Sol de cara</td><td>Usar visera y gafas de sol. Si no se puede ver la calzada, detener el vehículo en lugar seguro.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">VISIBILIDAD EN NIEBLA</span>Si la visibilidad es inferior a 50 metros, la velocidad no debe superar 50 km/h en ninguna vía.</div>
<div class="tv-key-item"><span class="tv-key-label">CADENAS</span>Si la señalización indica obligatoriedad de cadenas, no se puede circular sin ellas aunque el vehículo tenga 4x4 o neumáticos de invierno (salvo que la señal los exima).</div>
</div>`
    },
    {
      title:'Infracciones — clasificación y consecuencias',
      content:`<div class="tv-lead">Las infracciones se clasifican en tres categorías según su gravedad. La clasificación determina la multa y si hay pérdida de puntos.</div>
<div class="tv-table-title">CLASIFICACIÓN DE INFRACCIONES</div>
<table class="tv-table"><thead><tr><th>Tipo</th><th>Multa</th><th>Puntos</th><th>Ejemplos</th></tr></thead><tbody>
<tr><td><strong>Leve</strong></td><td class="tv-num">100€</td><td class="tv-num">0</td><td>Exceso velocidad hasta 20 km/h, no señalizar cambio de carril, no usar el claxon correctamente</td></tr>
<tr class="tv-row-gold"><td><strong>Grave</strong></td><td class="tv-num gold">200–500€</td><td class="tv-num orange">-2 a -4</td><td>Exceso velocidad 21–50 km/h, no usar cinturón, usar el móvil, no ceder el paso, alcohol 0,25–0,50 mg/l</td></tr>
<tr class="tv-row-red"><td><strong>Muy grave</strong></td><td class="tv-num red">500–600€</td><td class="tv-num red">-4 a -6</td><td>Exceso velocidad &gt;50 km/h, alcohol &gt;0,50 mg/l, conducir en sentido contrario, adelantamiento peligroso, pasar semáforo rojo</td></tr>
</tbody></table>
<div class="tv-table-title">PLAZOS Y DESCUENTOS</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Reducción</th><th>Plazo</th></tr></thead><tbody>
<tr><td>Pago voluntario con descuento</td><td>-50% de la multa</td><td>Dentro de los 20 días naturales desde la notificación</td></tr>
<tr><td>Recurso de reposición</td><td>Sin reducción</td><td>1 mes desde la resolución</td></tr>
<tr><td>Recurso contencioso-administrativo</td><td>Sin reducción</td><td>2 meses desde la resolución del recurso de reposición</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">PRESCRIPCIÓN DE INFRACCIONES</span>Infracciones leves: prescriben a los 3 meses. Graves: 6 meses. Muy graves: 1 año desde la comisión.</div>
<div class="tv-key-item"><span class="tv-key-label">NOTIFICACIÓN</span>Si no localiza al titular, la DGT notifica en el BOE. El plazo empieza a contar desde la publicación.</div>
</div>`
    },
    {
      title:'Normas en túneles y pasos a nivel',
      content:`<div class="tv-lead">Los túneles y los pasos a nivel son escenarios de alto riesgo con normas muy específicas que el examen suele preguntar.</div>
<div class="tv-table-title">NORMAS EN TÚNELES</div>
<table class="tv-table"><thead><tr><th>Obligación</th><th>Detalle</th></tr></thead><tbody>
<tr><td>Luces de cruce</td><td>SIEMPRE al entrar en un túnel, esté iluminado o no. Es obligatorio por ley.</td></tr>
<tr><td>Velocidad</td><td>Respetar los límites indicados. En caso de congestión: mantener distancia.</td></tr>
<tr><td>Adelantar</td><td>Prohibido salvo en túneles con varios carriles por sentido y señalización que lo permita.</td></tr>
<tr><td>Marcha atrás</td><td>Absolutamente prohibida en cualquier circunstancia.</td></tr>
<tr><td>Si el vehículo se detiene</td><td>Poner las luces de emergencia. No salir del vehículo salvo peligro. Llamar al 112.</td></tr>
<tr><td>En caso de incendio</td><td>No dar la vuelta. Poner las luces de emergencia. Salir del vehículo. Seguir instrucciones. Alejarse por las salidas de emergencia.</td></tr>
</tbody></table>
<div class="tv-table-title">NORMAS EN PASOS A NIVEL</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Distancia de detención</td><td>Detenerse a mínimo 3 metros de las vías cuando hay STOP, semáforo en rojo o barreras bajando.</td></tr>
<tr><td>Barreras bajando</td><td>Esperar hasta que las barreras suban completamente y el semáforo esté en verde antes de cruzar.</td></tr>
<tr><td>Vehículo atrapado en las vías</td><td>Desalojar inmediatamente. Alejarse en diagonal (no paralelo a las vías). Llamar al 112. Avisar a los maquinistas.</td></tr>
<tr><td>Paso sin barreras</td><td>El conductor debe detenerse, mirar en ambos sentidos y asegurarse de que no viene ningún tren antes de cruzar.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ Los 3 metros de detención mínima en paso a nivel son uno de los datos numéricos concretos que más aparece en el examen. Memorízalo.</div>`
    },
    {
      title:'Resumen de datos numéricos clave',
      content:`<div class="tv-lead">El examen DGT tiene preguntas sobre datos numéricos concretos. Esta sección reúne todos los que debes memorizar.</div>
<div class="tv-table-title">VELOCIDADES</div>
<table class="tv-table"><thead><tr><th>Vía</th><th>Máxima</th><th>Mínima</th></tr></thead><tbody>
<tr><td>Autopista/autovía</td><td>120 km/h (100 con remolque &gt;750 kg)</td><td>60 km/h</td></tr>
<tr><td>Carretera convencional</td><td>90 km/h</td><td>45 km/h</td></tr>
<tr><td>Vía urbana general</td><td>50 km/h</td><td>25 km/h</td></tr>
<tr><td>Calle 1 carril por sentido</td><td>30 km/h</td><td>—</td></tr>
<tr><td>Plataforma única</td><td>20 km/h</td><td>—</td></tr>
</tbody></table>
<div class="tv-table-title">ALCOHOL</div>
<table class="tv-table"><thead><tr><th>Conductor</th><th>Límite (aire)</th><th>Límite (sangre)</th></tr></thead><tbody>
<tr><td>General</td><td>0,25 mg/l</td><td>0,5 g/l</td></tr>
<tr><td>Novel / Profesional</td><td>0,15 mg/l</td><td>0,3 g/l</td></tr>
</tbody></table>
<div class="tv-table-title">PUNTOS Y DISTANCIAS</div>
<table class="tv-table"><thead><tr><th>Concepto</th><th>Valor</th></tr></thead><tbody>
<tr><td>Puntos iniciales (novel)</td><td>8 puntos</td></tr>
<tr><td>Puntos generales (tras 2 años)</td><td>12 puntos</td></tr>
<tr><td>Puntos máximos posibles</td><td>15 puntos</td></tr>
<tr><td>Distancia mínima legal vehículos &gt;10 m en autopista</td><td>50 metros</td></tr>
<tr><td>Distancia de detención en paso a nivel</td><td>3 metros mínimo</td></tr>
<tr><td>Distancia para cambiar largas a cortas</td><td>200 metros</td></tr>
<tr><td>Separación mínima al adelantar ciclistas</td><td>1,5 metros</td></tr>
<tr><td>Parada máxima sin abandonar el vehículo</td><td>2 minutos</td></tr>
<tr><td>Permiso B vigencia hasta 65 años</td><td>10 años</td></tr>
<tr><td>Permiso B vigencia desde 65 años</td><td>5 años</td></tr>
<tr><td>Tiempo mínimo de renovación anticipada</td><td>3 meses antes</td></tr>
<tr><td>ITV: exento</td><td>0–4 años</td></tr>
<tr><td>ITV: cada 2 años</td><td>4–10 años</td></tr>
<tr><td>ITV: anual</td><td>+10 años</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ Estos son los datos que aparecen directamente en preguntas del examen. Si alguno no te sale automático, vuelve al módulo correspondiente y estúdialo en contexto.</div>`
    }
  ]
}
];
