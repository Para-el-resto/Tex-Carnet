const THEORY_MODULES=[
{id:'m1',num:1,title:'El Operador',subtitle:'Permiso · Puntos · Alcohol · Drogas · Fatiga · Visión',icon:'◉',week:1,sections:[
{title:'Permiso de conducir — clases y vigencia',content:`<div class="tv-lead">El permiso B es el más habitual. Sus condiciones de vigencia y las restricciones del período de prueba son pregunta frecuente en el examen.</div>
<div class="tv-table-title">VIGENCIA DEL PERMISO B</div>
<table class="tv-table"><thead><tr><th>Conductor</th><th>Vigencia</th></tr></thead><tbody>
<tr><td>Menores de 65 años</td><td class="tv-num gold">10 años</td></tr>
<tr><td>65 años o más</td><td class="tv-num teal">5 años</td></tr>
</tbody></table>
<div class="tv-table-title">QUÉ AUTORIZA EL PERMISO B</div>
<table class="tv-table"><thead><tr><th>Vehículo</th><th>Condición</th></tr></thead><tbody>
<tr><td>Turismos y derivados hasta 3.500 kg MMA</td><td>Sin restricción</td></tr>
<tr><td>Turismo con remolque ≤750 kg</td><td>Sin permiso adicional</td></tr>
<tr><td>Turismo con remolque &gt;750 kg (combinación ≤3.500 kg)</td><td>Sin permiso adicional</td></tr>
<tr><td>Turismo + remolque (combinación &gt;3.500 kg)</td><td>Requiere B+E</td></tr>
<tr><td>Motocicletas &lt;125cc</td><td>Con 2 años de antigüedad del B</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">RENOVACIÓN ANTICIPADA</span>Se puede solicitar hasta 3 meses antes de la caducidad sin perder días de validez.</div>
<div class="tv-key-item"><span class="tv-key-label">PERMISO EXTRANJERO EN ESPAÑA</span>Los permisos de la UE son válidos directamente. Los de fuera de la UE deben canjearse o validarse.</div>
</div>
<div class="tv-trap">⚠️ Un problema médico sobrevenido no caduca automáticamente el permiso, pero el conductor tiene obligación de comunicarlo a la DGT.</div>`},
{title:'Período de prueba y conductores noveles',content:`<div class="tv-lead">Los conductores con menos de 2 años de carnet están en período de prueba. Tienen saldo reducido y la tasa de alcohol es inferior.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon gold">8</div><div class="tv-card-title">Puntos iniciales</div><div class="tv-card-body">Al obtener el permiso por primera vez: 8 puntos, no 12. También quien recupera el permiso tras perderlo.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">2</div><div class="tv-card-title">2 años de período</div><div class="tv-card-body">Transcurridos 2 años sin infracciones graves o muy graves, el saldo pasa automáticamente a 12.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">0,15</div><div class="tv-card-title">Tasa de alcohol reducida</div><div class="tv-card-body">Límite: 0,15 mg/l en aire (0,3 g/l en sangre). La misma que los conductores profesionales.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">12</div><div class="tv-card-title">Tras el período</div><div class="tv-card-body">Al superar los 2 años sin graves, el saldo pasa a 12 automáticamente. Con infracciones graves, puede tardar más.</div></div>
</div>
<div class="tv-trap">⚠️ No hay restricción de velocidad específica para noveles en España. Se aplican los límites generales. El examen a veces pregunta esto para confirmar que lo sabes.</div>`},
{title:'Sistema de puntos — completo',content:`<div class="tv-lead">El carnet por puntos penaliza infracciones graves restando puntos. Al llegar a 0, se pierde la autorización para conducir.</div>
<div class="tv-points-track">
<div class="tv-pt-step"><div class="tv-pt-num gold">8</div><div class="tv-pt-label">INICIO<br><span>noveles/recuperados</span></div></div>
<div class="tv-pt-arrow">→</div>
<div class="tv-pt-step"><div class="tv-pt-num gold">12</div><div class="tv-pt-label">GENERAL<br><span>tras 2 años sin graves</span></div></div>
<div class="tv-pt-arrow">→</div>
<div class="tv-pt-step"><div class="tv-pt-num teal">15</div><div class="tv-pt-label">MÁXIMO<br><span>con bonificaciones</span></div></div>
</div>
<div class="tv-table-title">INFRACCIONES Y PUNTOS</div>
<table class="tv-table"><thead><tr><th>Infracción</th><th>Puntos</th><th>Multa</th></tr></thead><tbody>
<tr class="tv-row-red"><td>Alcohol &gt;0,50 mg/l · drogas · negarse a la prueba</td><td class="tv-num red">-6</td><td>hasta 1.000€</td></tr>
<tr class="tv-row-red"><td>Sentido contrario / adelantamiento muy peligroso</td><td class="tv-num red">-6</td><td>500€</td></tr>
<tr class="tv-row-red"><td>Exceso velocidad &gt;50 km/h</td><td class="tv-num red">-6</td><td>600€</td></tr>
<tr><td>Exceso velocidad 41–50 km/h</td><td class="tv-num red">-4</td><td>500€</td></tr>
<tr><td>No respetar semáforo rojo / stop / ceda</td><td class="tv-num red">-4</td><td>200€</td></tr>
<tr><td>Alcohol 0,25–0,50 mg/l (general) / 0,15–0,30 (novel)</td><td class="tv-num orange">-4</td><td>500€</td></tr>
<tr><td>Exceso velocidad 21–40 km/h</td><td class="tv-num orange">-2 a -4</td><td>300–400€</td></tr>
<tr><td>Móvil / auriculares al volante</td><td class="tv-num red">-3</td><td>200€</td></tr>
<tr><td>No usar cinturón / casco / SRI</td><td class="tv-num red">-3</td><td>200€</td></tr>
<tr><td>No respetar preferencia de paso</td><td class="tv-num orange">-4</td><td>200€</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">BONIFICACIÓN</span>Sin infracciones 3 años: +2 puntos. Cada 3 años más: +1 punto. Máximo: 15 puntos.</div>
<div class="tv-key-item"><span class="tv-key-label">RECUPERACIÓN PARCIAL</span>Hasta 6 puntos con curso de sensibilización (máx. 15h). Solo 1 vez cada 2 años (o 1 año para profesionales).</div>
<div class="tv-key-item"><span class="tv-key-label">PÉRDIDA TOTAL</span>Esperar 6 meses (3 profesionales) + curso 30h + prueba de aptitud.</div>
</div>`},
{title:'Tasas de alcoholemia',content:`<div class="tv-lead">El alcohol es uno de los principales factores de riesgo. Las tasas son distintas según la experiencia y el tipo de actividad.</div>
<div class="tv-table-title">LÍMITES EN AIRE ESPIRADO (mg/l) Y EN SANGRE (g/l)</div>
<table class="tv-table"><thead><tr><th>Conductor</th><th>Límite aire</th><th>Límite sangre</th><th>Pérdida 4 pts</th><th>Pérdida 6 pts</th></tr></thead><tbody>
<tr class="tv-row-gold"><td><strong>General</strong><span class="tv-sub">+2 años de carnet</span></td><td class="tv-num gold">0,25 mg/l</td><td>0,5 g/l</td><td>0,25–0,50</td><td class="tv-num red">+0,50</td></tr>
<tr class="tv-row-teal"><td><strong>Novel</strong><span class="tv-sub">&lt;2 años de carnet</span></td><td class="tv-num teal">0,15 mg/l</td><td>0,3 g/l</td><td>0,15–0,30</td><td class="tv-num red">+0,30</td></tr>
<tr class="tv-row-teal"><td><strong>Profesional</strong><span class="tv-sub">Transporte viajeros/mercancías</span></td><td class="tv-num teal">0,15 mg/l</td><td>0,3 g/l</td><td>0,15–0,30</td><td class="tv-num red">+0,30</td></tr>
</tbody></table>
<div class="tv-compare">
<div class="tv-compare-item danger"><div class="tv-compare-title">Negativa a la prueba = delito penal</div><div class="tv-compare-body">La negativa es un delito autónomo. Mismas o peores consecuencias que dar positivo. No existe derecho a negarse.</div></div>
<div class="tv-compare-item warn"><div class="tv-compare-title">Solo el tiempo elimina el alcohol</div><div class="tv-compare-body">El hígado metaboliza aprox. 0,10–0,15 g/l/hora. Ni café, ni agua, ni ejercicio, ni vomitar lo aceleran.</div></div>
</div>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">SEGUNDA PRUEBA</span>Si el resultado es positivo, el conductor puede pedir análisis de sangre. Mientras se realiza, no puede conducir.</div>
<div class="tv-key-item"><span class="tv-key-label">DELITO PENAL</span>Tasa superior a 0,60 mg/l en aire (1,2 g/l sangre): delito contra la seguridad vial.</div>
<div class="tv-key-item"><span class="tv-key-label">IMPLICADOS EN ACCIDENTE</span>Siempre obligados a someterse a pruebas de alcohol y drogas.</div>
</div>
<div class="tv-trap">⚠️ Dormir 6 horas no garantiza estar bajo el límite si se consumió mucho alcohol antes. Puede quedar tasa suficiente para superar el límite legal a la mañana siguiente.</div>`},
{title:'Drogas, medicamentos y fatiga',content:`<div class="tv-lead">Las drogas, ciertos medicamentos y la fatiga son tan peligrosos como el alcohol al volante, y menos visibles.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon red">⊗</div><div class="tv-card-title">Drogas ilegales</div><div class="tv-card-body">Prohibido conducir bajo sus efectos. No hay "límite mínimo" — cualquier presencia detectable puede ser infracción o delito penal.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">💊</div><div class="tv-card-title">Medicamentos</div><div class="tv-card-body">Antihistamínicos, ansiolíticos, antidepresivos, opiáceos, somníferos. Consultar el prospecto. Muchos prohíben expresamente conducir.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">😴</div><div class="tv-card-title">Fatiga y microsueños</div><div class="tv-card-body">Pérdidas de conciencia de 2–3 segundos. A 120 km/h = 67–100 metros a ciegas. Parar cada 2 horas. Solo el descanso resuelve la fatiga.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">📱</div><div class="tv-card-title">Móvil — 1ª causa accidentes</div><div class="tv-card-body">Prohibido en cualquier forma al volante. Solo sistemas integrados de fábrica. A 50 km/h, 2 segundos de distracción = 28 metros a ciegas.</div></div>
</div>
<div class="tv-trap">⚠️ Un medicamento recetado por el médico NO exime de responsabilidad si altera la conducción. El conductor tiene obligación de conocer sus efectos antes de conducir.</div>`},
{title:'Visión y aptitudes psicofísicas',content:`<div class="tv-lead">La renovación del permiso requiere superar un reconocimiento médico que evalúa las aptitudes físicas y psíquicas, especialmente la visión.</div>
<div class="tv-table-title">REQUISITOS MÍNIMOS DE VISIÓN</div>
<table class="tv-table"><thead><tr><th>Parámetro</th><th>Requisito</th></tr></thead><tbody>
<tr><td>Agudeza visual binocular</td><td>0,5 con corrección</td></tr>
<tr><td>Agudeza ojo peor</td><td>0,1 mínimo con corrección</td></tr>
<tr><td>Campo visual horizontal</td><td>Mínimo 120°</td></tr>
<tr><td>Conductor con un solo ojo</td><td>Puede obtener el permiso con restricciones</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">GAFAS O LENTILLAS</span>Si se conduce con corrección visual, es obligatorio llevar una segunda corrección en el vehículo. El permiso lleva la restricción "01".</div>
<div class="tv-key-item"><span class="tv-key-label">PUNTO CIEGO</span>Zona lateral no visible en los retrovisores. Siempre girar la cabeza para comprobarlo antes de cambiar de carril.</div>
<div class="tv-key-item"><span class="tv-key-label">VISIÓN NOCTURNA</span>La agudeza visual se reduce significativamente de noche. Aumentar la distancia de seguridad y reducir la velocidad.</div>
</div>`}
]},{id:'m2',num:2,title:'La Vía',subtitle:'Tipos · Velocidades · Señales · Semáforos · Marcas · Prioridad · Adelantamiento · Parada · Carriles',icon:'◈',week:1,sections:[
{title:'Tipos de vías',content:`<div class="tv-lead">El tipo de vía determina las normas aplicables: velocidad, adelantamientos y paradas. Reconocer cada tipo es fundamental.</div>
<table class="tv-table"><thead><tr><th>Tipo</th><th>Características</th><th>Vel. máx. turismo</th></tr></thead><tbody>
<tr><td><strong>Autopista</strong></td><td>Solo automóviles. Sin cruces a nivel. Calzadas separadas. Accesos controlados.</td><td class="tv-num gold">120 km/h</td></tr>
<tr><td><strong>Autovía</strong></td><td>Igual que autopista en diseño. Generalmente gratuita. Accesos más frecuentes.</td><td class="tv-num gold">120 km/h</td></tr>
<tr><td><strong>Vía para automóviles</strong></td><td>Una sola calzada. Solo automóviles. Sin accesos a propiedades.</td><td class="tv-num gold">120 km/h</td></tr>
<tr><td><strong>Carretera convencional</strong></td><td>Resto de interurbanas. Cruces, accesos, ciclistas y peatones posibles.</td><td class="tv-num teal">90 km/h</td></tr>
<tr><td><strong>Travesía</strong></td><td>Tramo de carretera que discurre por interior de un poblado.</td><td class="tv-num">50 km/h</td></tr>
<tr><td><strong>Vía urbana</strong></td><td>Dentro de poblado. Múltiples usuarios. Señalización específica.</td><td class="tv-num">20–50 km/h</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">PROHIBICIONES EN AUTOPISTAS Y AUTOVÍAS</span>Prohibidos: peatones, ciclistas, animales, vehículos especiales lentos, ciclomotores, marcha atrás, cambio de sentido y parada en calzada.</div>
<div class="tv-key-item"><span class="tv-key-label">ARCÉN</span>Franja lateral pavimentada. No es carril de circulación para turismos. Lo usan ciclistas, peatones y paradas de emergencia.</div>
</div>`},
{title:'Velocidades — tabla completa',content:`<div class="tv-lead">Los límites son máximos absolutos. No hay margen legal. Desde la reforma de 2021, las vías urbanas tienen tres límites distintos según el tipo de calle.</div>
<div class="tv-vel-grid">
<div class="tv-vel-card autopista"><div class="tv-vel-icon">🛣</div><div class="tv-vel-name">Autopista / Autovía</div><div class="tv-vel-speed">120</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">mín 60 km/h</div><div class="tv-vel-extra">Remolque &gt;750kg → 100 · Autobús → 100 · Camión → 90</div></div>
<div class="tv-vel-card convencional"><div class="tv-vel-icon">🛤</div><div class="tv-vel-name">Carretera convencional</div><div class="tv-vel-speed">90</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">mín 45 km/h</div><div class="tv-vel-extra">+20 km/h solo para adelantar a vehículos lentos</div></div>
<div class="tv-vel-card urbana"><div class="tv-vel-icon">🏙</div><div class="tv-vel-name">Vía urbana general</div><div class="tv-vel-speed">50</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">mín 25 km/h</div><div class="tv-vel-extra">Avenidas, rondas, vías principales</div></div>
<div class="tv-vel-card un-carril"><div class="tv-vel-icon">🏘</div><div class="tv-vel-name">1 carril por sentido</div><div class="tv-vel-speed">30</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">reforma 2021</div><div class="tv-vel-extra">Calles residenciales con acera y calzada separadas</div></div>
<div class="tv-vel-card plataforma"><div class="tv-vel-icon">🚶</div><div class="tv-vel-name">Plataforma única</div><div class="tv-vel-speed">20</div><div class="tv-vel-unit">km/h máx</div><div class="tv-vel-min">reforma 2021</div><div class="tv-vel-extra">Sin diferencia de nivel entre acera y calzada</div></div>
</div>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">PANELES VARIABLES</span>Mismo valor legal que señales fijas. Si el panel muestra 80 y la señal fija dice 120, rige 80.</div>
<div class="tv-key-item"><span class="tv-key-label">CONDICIONES ADVERSAS</span>El límite no cambia automáticamente con lluvia o niebla, pero el conductor DEBE adaptar la velocidad a las condiciones reales.</div>
</div>
<div class="tv-trap">⚠️ En calles con un solo carril por sentido el límite es 30 km/h desde 2021, aunque no haya señal específica y aunque la calle tenga aparcamiento lateral.</div>`},
{title:'Señales de tráfico — clasificación completa',content:`<div class="tv-lead">Hay cinco tipos de señales verticales. La forma y el color te dicen el tipo antes de leer el contenido. El orden de prioridad también es pregunta habitual.</div>
<div class="tv-senales-grid">
<div class="tv-senal-card peligro"><div class="tv-senal-shape"><svg width="64" height="58" viewBox="0 0 64 58" xmlns="http://www.w3.org/2000/svg"><polygon points="32,4 62,54 2,54" fill="white" stroke="#cc0000" stroke-width="5" stroke-linejoin="round"/><text x="32" y="48" text-anchor="middle" font-size="28" font-weight="900" fill="#cc0000" font-family="Arial">!</text></svg></div><div class="tv-senal-name">PELIGRO</div><div class="tv-senal-desc">Triángulo borde rojo. Advierte de riesgo próximo. No prohíbe ni obliga.</div><div class="tv-senal-examples">Curva, paso nivel, animales, obras, niebla, hielo...</div></div>
<div class="tv-senal-card prohibicion"><div class="tv-senal-shape"><svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="27" fill="white" stroke="#cc0000" stroke-width="5"/><text x="30" y="42" text-anchor="middle" font-size="24" font-weight="900" fill="#cc0000" font-family="Arial">80</text></svg></div><div class="tv-senal-name">PROHIBICIÓN</div><div class="tv-senal-desc">Círculo borde rojo, fondo blanco. Lo que NO puedes hacer.</div><div class="tv-senal-examples">Velocidad máx, no adelantar, no girar...</div></div>
<div class="tv-senal-card obligacion"><div class="tv-senal-shape"><svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="27" fill="#0033aa"/><polygon points="30,14 42,34 36,34 36,46 24,46 24,34 18,34" fill="white"/></svg></div><div class="tv-senal-name">OBLIGACIÓN</div><div class="tv-senal-desc">Círculo fondo azul. Lo que SÍ debes hacer obligatoriamente.</div><div class="tv-senal-examples">Dirección obligatoria, velocidad mínima...</div></div>
<div class="tv-senal-card stop"><div class="tv-senal-shape"><svg width="62" height="62" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg"><polygon points="20,3 42,3 59,20 59,42 42,59 20,59 3,42 3,20" fill="#cc0000" stroke-linejoin="round"/><polygon points="22,6 40,6 56,22 56,40 40,56 22,56 6,40 6,22" fill="none" stroke="white" stroke-width="2"/><text x="31" y="38" text-anchor="middle" font-size="14" font-weight="900" fill="white" font-family="Arial" letter-spacing="1">STOP</text></svg></div><div class="tv-senal-name">STOP</div><div class="tv-senal-desc">Octogonal roja — la única. Detención TOTAL siempre, aunque no haya tráfico.</div><div class="tv-senal-examples">La única señal de 8 lados del código</div></div>
<div class="tv-senal-card ceda"><div class="tv-senal-shape"><svg width="64" height="58" viewBox="0 0 64 58" xmlns="http://www.w3.org/2000/svg"><polygon points="32,54 62,4 2,4" fill="white" stroke="#cc0000" stroke-width="5" stroke-linejoin="round"/><polygon points="32,47 55,9 9,9" fill="none" stroke="#cc0000" stroke-width="2.5" stroke-linejoin="round"/></svg></div><div class="tv-senal-name">CEDA EL PASO</div><div class="tv-senal-desc">Triángulo invertido. Ceder preferencia. No siempre implica detenerse.</div><div class="tv-senal-examples">Solo parar si hay tráfico con prioridad</div></div>
<div class="tv-senal-card indicacion"><div class="tv-senal-shape"><svg width="70" height="52" viewBox="0 0 70 52" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="66" height="48" rx="5" fill="#0033aa"/><text x="35" y="34" text-anchor="middle" font-size="26" fill="white" font-family="Arial">→</text></svg></div><div class="tv-senal-name">INDICACIÓN</div><div class="tv-senal-desc">Rectángulo fondo azul o verde. Informa, no obliga ni prohíbe.</div><div class="tv-senal-examples">Destinos, servicios, información viaria</div></div>
</div>
<div class="tv-priority-ladder"><div class="tv-pl-title">PRIORIDAD DE SEÑALES (mayor → menor)</div><div class="tv-pl-steps"><div class="tv-pl-step gold">1 — Agente de tráfico (prevalece sobre todo, incluidos semáforos)</div><div class="tv-pl-step gold">2 — Señalización circunstancial (obras, accidentes)</div><div class="tv-pl-step">3 — Semáforos</div><div class="tv-pl-step">4 — Señales verticales fijas</div><div class="tv-pl-step">5 — Marcas viales</div><div class="tv-pl-step dim">6 — Norma general del RGC</div></div></div>
<div class="tv-compare">
<div class="tv-compare-item danger"><div class="tv-compare-title">STOP — detención SIEMPRE</div><div class="tv-compare-body">Aunque la intersección esté vacía. Detención completa antes de la línea. Sin excepciones posibles.</div></div>
<div class="tv-compare-item success"><div class="tv-compare-title">Ceda — solo si hay tráfico</div><div class="tv-compare-body">Si no hay ningún vehículo con prioridad, puedes continuar sin detenerte.</div></div>
</div>
<div class="tv-trap">⚠️ Si dos señales del mismo tipo se contradicen, prevalece la más restrictiva. Y las instrucciones de un agente prevalecen siempre, incluso sobre un semáforo en verde.</div>`},
{title:'Semáforos — todos los tipos',content:`<div class="tv-lead">Los semáforos controlan el acceso a intersecciones. Cada color y cada modalidad tienen una obligación distinta.</div>
<div class="tv-semaforo-grid">
<div class="tv-sem-card"><div class="tv-sem-light red-light"></div><div class="tv-sem-label">ROJO</div><div class="tv-sem-desc">Detención obligatoria ante la línea de stop. Sin ninguna excepción.</div></div>
<div class="tv-sem-card"><div class="tv-sem-light amber-light"></div><div class="tv-sem-label">ÁMBAR FIJO</div><div class="tv-sem-desc">Detente si puedes con seguridad. Si ya estás muy cerca del cruce, continúa sin frenar bruscamente.</div></div>
<div class="tv-sem-card"><div class="tv-sem-light green-light"></div><div class="tv-sem-label">VERDE</div><div class="tv-sem-desc">Paso autorizado. Pero asegúrate de que el cruce está libre antes de entrar en él.</div></div>
</div>
<div class="tv-table-title">SEMÁFOROS ESPECIALES</div>
<table class="tv-table"><thead><tr><th>Tipo</th><th>Significado</th></tr></thead><tbody>
<tr><td>Ámbar intermitente</td><td>Precaución. Puedes pasar con atención. No hay detención obligatoria.</td></tr>
<tr><td>Flecha verde</td><td>Autoriza el movimiento en la dirección indicada aunque el semáforo principal esté en rojo.</td></tr>
<tr><td>Semáforo de carril (X roja)</td><td>Prohibido circular por ese carril.</td></tr>
<tr><td>Semáforo de carril (flecha verde ↓)</td><td>Ese carril está abierto a la circulación.</td></tr>
<tr><td>Verde peatonal parpadeando</td><td>El tiempo se acaba. Los que ya cruzan terminan; los que no, esperan.</td></tr>
<tr><td>Semáforo apagado</td><td>Tratar como intersección sin señalizar. Aplicar regla de la derecha.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ El verde no garantiza que el cruce esté libre. Asegúrate antes de entrar de que no hay vehículos aún cruzando. El verde es autorización, no garantía.</div>`},
{title:'Marcas viales — todas las categorías',content:`<div class="tv-lead">Las marcas viales son señales en la calzada. Son de obligado cumplimiento igual que las señales verticales.</div>
<div class="tv-table-title">MARCAS LONGITUDINALES</div>
<table class="tv-table"><thead><tr><th>Marca</th><th>Significado</th></tr></thead><tbody>
<tr><td>Línea continua blanca en eje</td><td>No puede cruzarse. Prohíbe adelantar y cambiar de carril.</td></tr>
<tr><td>Línea discontinua blanca en eje</td><td>Puede cruzarse para adelantar o cambiar de carril con visibilidad y seguridad.</td></tr>
<tr><td>Línea continua + discontinua paralelas</td><td>Cada conductor respeta la línea de su lado. Continua a tu lado = no puedes cruzar.</td></tr>
<tr><td>Línea continua blanca en borde</td><td>Delimita calzada del arcén. No cruzar salvo emergencia.</td></tr>
<tr><td>Línea amarilla continua en borde</td><td>Prohibido parar y estacionar en ese tramo.</td></tr>
<tr><td>Línea amarilla discontinua en borde</td><td>Prohibido estacionar. Permitido parar brevemente (&lt;2 min sin abandonar el vehículo).</td></tr>
</tbody></table>
<div class="tv-table-title">MARCAS TRANSVERSALES Y OTRAS</div>
<table class="tv-table"><thead><tr><th>Marca</th><th>Significado</th></tr></thead><tbody>
<tr><td>Línea de detención (transversal continua)</td><td>Detenerse completamente antes de ella ante STOP, semáforo rojo o ceda el paso.</td></tr>
<tr><td>Línea de ceda (transversal discontinua)</td><td>Reducir velocidad y ceder el paso. No obligatorio detenerse si no hay tráfico.</td></tr>
<tr><td>Paso de peatones (líneas paralelas)</td><td>Peatones con preferencia cuando cruzan o van a cruzar.</td></tr>
<tr><td>Paso para ciclistas (rectángulos)</td><td>Ciclistas con preferencia cuando cruzan el paso señalizado.</td></tr>
<tr><td>Flechas de dirección</td><td>Obligatorio seguir la dirección indicada en ese carril.</td></tr>
<tr><td>Zigzag amarillo</td><td>Parada de autobús — prohibido parar en cualquier caso.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ Las flechas pintadas en el suelo son de cumplimiento obligatorio. Si el carril indica girar a la derecha, debes hacerlo. Elige el carril correcto con antelación.</div>`},
{title:'Preferencia de paso — todos los casos',content:`<div class="tv-lead">La preferencia determina quién pasa primero en una intersección. Hay norma para cada situación posible.</div>
<div class="tv-table-title">ORDEN DE PREFERENCIA EN INTERSECCIONES</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Quién tiene preferencia</th></tr></thead><tbody>
<tr><td>Sin señalizar</td><td>Vehículo que llega por la derecha del otro</td></tr>
<tr><td>Vía principal señalizada</td><td>Vehículos de la vía principal, independientemente de la dirección</td></tr>
<tr><td>Con señal STOP</td><td>Los de la vía a la que se accede. El que tiene el STOP para SIEMPRE.</td></tr>
<tr><td>Con señal Ceda el paso</td><td>Los de la vía a la que se accede. El que cede, espera si hay tráfico.</td></tr>
<tr><td>Rotonda</td><td>Los que ya circulan dentro de la rotonda</td></tr>
<tr><td>Emergencias (luces+sirena)</td><td>Preferencia absoluta sobre cualquier señal</td></tr>
<tr><td>Autobús saliendo de parada</td><td>Tiene preferencia si ha señalizado y no crea peligro</td></tr>
<tr><td>Incorporación a autopista</td><td>Los que ya circulan por la autopista</td></tr>
<tr><td>Salida de garaje o vía privada</td><td>Todos los vehículos y peatones de la vía pública</td></tr>
<tr><td>Tramo estrecho</td><td>El que entró primero o el de mayor dificultad de maniobra</td></tr>
<tr><td>Cuesta pronunciada</td><td>El que baja tiene preferencia sobre el que sube</td></tr>
<tr><td>Tranvías y trenes</td><td>Siempre tienen preferencia sobre vehículos a motor</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">PEATONES</span>Preferencia solo en pasos señalizados con semáforo a su favor. Personas con bastón blanco o perro guía: preferencia absoluta en cualquier punto.</div>
<div class="tv-key-item"><span class="tv-key-label">PASILLO DE EMERGENCIA</span>En autopista con atasco: carril izquierdo va a la izquierda, carril derecho a la derecha. El pasillo queda en el centro.</div>
</div>
<div class="tv-trap">⚠️ La regla de la derecha solo aplica cuando NO hay señal. Si hay señal de vía principal, STOP, Ceda o semáforo, la señal anula completamente la regla de la derecha.</div>`},
{title:'Adelantamientos',content:`<div class="tv-lead">El adelantamiento es la maniobra de mayor riesgo. El RGC exige verificar cinco condiciones antes de iniciarla.</div>
<div class="tv-steps">
<div class="tv-step"><div class="tv-step-num">1</div><div class="tv-step-text"><strong>Visibilidad:</strong> el carril contrario libre con suficiente distancia para completar la maniobra y volver.</div></div>
<div class="tv-step"><div class="tv-step-num">2</div><div class="tv-step-text"><strong>Sin vehículos de frente</strong> a corta distancia que puedan verse afectados.</div></div>
<div class="tv-step"><div class="tv-step-num">3</div><div class="tv-step-text"><strong>El adelantado</strong> no ha señalizado giro a la izquierda ni ha iniciado su propio adelantamiento.</div></div>
<div class="tv-step"><div class="tv-step-num">4</div><div class="tv-step-text"><strong>Señalizar</strong> con intermitente izquierdo. Comprobar punto ciego girando la cabeza.</div></div>
<div class="tv-step"><div class="tv-step-num">5</div><div class="tv-step-text"><strong>Completar</strong> la maniobra rápidamente. Volver al carril derecho señalizando intermitente derecho.</div></div>
</div>
<div class="tv-table-title">DÓNDE ESTÁ PROHIBIDO ADELANTAR</div>
<table class="tv-table"><thead><tr><th>Lugar</th><th>Motivo</th></tr></thead><tbody>
<tr class="tv-row-red"><td>Pasos de peatones y proximidades</td><td>Siempre, aunque no haya peatones</td></tr>
<tr class="tv-row-red"><td>Curvas y cambios de rasante sin visibilidad</td><td>Aunque la línea sea discontinua — la visibilidad manda</td></tr>
<tr class="tv-row-red"><td>Intersecciones en general</td><td>Salvo glorietas y excepciones señalizadas</td></tr>
<tr class="tv-row-red"><td>Pasos a nivel y proximidades</td><td>Zona de riesgo elevado</td></tr>
<tr class="tv-row-red"><td>Si otro vehículo ya adelanta</td><td>No se pueden hacer dos adelantamientos simultáneos</td></tr>
<tr class="tv-row-red"><td>Línea continua a tu lado</td><td>Marca vial de obligado cumplimiento</td></tr>
</tbody></table>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">Ciclistas: 1,5 metros de separación</div><div class="tv-compare-body">Mínimo obligatorio al adelantar un ciclista. Normalmente implica invadir el carril contrario. Verificar antes que no viene nadie de frente.</div></div>
<div class="tv-compare-item success"><div class="tv-compare-title">El adelantado NO debe acelerar</div><div class="tv-compare-body">El vehículo adelantado no puede aumentar su velocidad para obstaculizar la maniobra. Pero tampoco está obligado a reducirla.</div></div>
</div>
<div class="tv-trap">⚠️ Línea discontinua NO siempre significa que se puede adelantar. Si hay curva sin visibilidad o paso de peatones, el adelantamiento sigue prohibido aunque la línea sea discontinua.</div>`},
{title:'Parada, estacionamiento y zona ORA',content:`<div class="tv-lead">Son situaciones distintas con normas distintas. Confundirlas es uno de los errores más frecuentes.</div>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">PARADA</div><div class="tv-compare-body">Inmovilización de menos de 2 minutos SIN abandonar el puesto de mando. El conductor está al volante listo para arrancar.</div></div>
<div class="tv-compare-item danger"><div class="tv-compare-title">ESTACIONAMIENTO</div><div class="tv-compare-body">Cualquier inmovilización que no sea parada. El conductor se aleja del vehículo o permanece más de 2 minutos.</div></div>
</div>
<div class="tv-table-title">LUGARES PROHIBIDOS</div>
<table class="tv-table"><thead><tr><th>Lugar</th><th>Prohibición</th></tr></thead><tbody>
<tr class="tv-row-red"><td>Paso de peatones y proximidades</td><td>Prohibido parar y estacionar</td></tr>
<tr class="tv-row-red"><td>Intersecciones y glorietas</td><td>Prohibido parar y estacionar</td></tr>
<tr class="tv-row-red"><td>Carril bus o taxi</td><td>Prohibido (salvo subir/bajar pasajeros rápidamente)</td></tr>
<tr class="tv-row-red"><td>Línea amarilla continua en borde</td><td>Prohibido parar y estacionar</td></tr>
<tr class="tv-row-red"><td>Junto a señal de tráfico (tapándola)</td><td>Prohibido parar y estacionar</td></tr>
<tr class="tv-row-red"><td>Arcén de autopista/autovía</td><td>Solo emergencias</td></tr>
<tr><td>Línea amarilla discontinua en borde</td><td>Permitido parar. Prohibido estacionar.</td></tr>
<tr><td>A menos de 5 metros de una intersección (en ciudad)</td><td>Prohibido parar y estacionar</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">ZONA ORA</span>Estacionamiento de pago con ticket. El ticket debe indicar la hora de llegada. Exceder el tiempo es infracción. Los residentes tienen tarjetas especiales.</div>
<div class="tv-key-item"><span class="tv-key-label">DOBLE FILA</span>Prohibida en general. Solo parada brevísima con motor en marcha y conductor al volante.</div>
<div class="tv-key-item"><span class="tv-key-label">EN INTERURBANAS</span>Siempre fuera de la calzada, en el arcén derecho, paralelo al eje.</div>
</div>
<div class="tv-trap">⚠️ "No abandona el vehículo" es la clave de la parada. Si se va aunque sea 30 segundos, ya es estacionamiento.</div>`},
{title:'Normas de carriles y glorietas',content:`<div class="tv-lead">El uso correcto del carril evita conflictos y es exigible en el examen. Las glorietas tienen normas específicas de circulación que se preguntan frecuentemente.</div>
<div class="tv-table-title">USO DE CARRILES</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Vía con varios carriles por sentido</td><td>Circular por el carril derecho. Los izquierdos solo para adelantar.</td></tr>
<tr><td>Tráfico denso en todos los carriles</td><td>Se puede circular por cualquier carril en columna. Prohibido zigzaguear.</td></tr>
<tr><td>Vehículos lentos (&lt;40 km/h)</td><td>Arcén o carril derecho. Si obstaculizan, deben crear lugares de adelantamiento.</td></tr>
<tr><td>Vehículos de más de 3.500 kg o más de 7 m</td><td>Solo pueden usar el carril derecho y el inmediatamente adyacente en vías de 3 o más carriles.</td></tr>
<tr><td>Carril de alta ocupación (VAO)</td><td>Solo para vehículos con más ocupantes de los indicados en la señal.</td></tr>
</tbody></table>
<div class="tv-table-title">NORMAS EN GLORIETAS</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Acceso a la glorieta</td><td>El que entra cede el paso a los que ya están dentro. Señal de Ceda el paso.</td></tr>
<tr><td>Carril interior de la glorieta</td><td>Para dar más de una vuelta o salir por salidas a la izquierda.</td></tr>
<tr><td>Carril exterior de la glorieta</td><td>Para salir en la primera o segunda salida.</td></tr>
<tr><td>Salida de la glorieta</td><td>Señalizar con intermitente derecho antes de salir.</td></tr>
<tr><td>Cambio de carril dentro</td><td>Señalizar y ceder el paso. Los del carril interior tienen preferencia.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ En glorieta, quien ya está dentro tiene preferencia SIEMPRE. Aunque hayas entrado antes, si el otro ya circulaba dentro, él tiene preferencia.</div>`}
]},{id:'m3',num:3,title:'Otros Usuarios',subtitle:'Peatones · Ciclistas · Motos · Vehículos especiales · Animales · Emergencias',icon:'◆',week:2,sections:[
{title:'Peatones',content:`<div class="tv-lead">Los peatones son los usuarios más vulnerables. Tienen normas propias y derechos específicos según dónde se encuentren.</div>
<div class="tv-table-title">NORMAS DE CIRCULACIÓN PARA PEATONES</div>
<table class="tv-table"><thead><tr><th>Lugar</th><th>Norma</th></tr></thead><tbody>
<tr><td>Dentro de poblado con acera</td><td>Circular por aceras o zonas peatonales. Nunca por la calzada.</td></tr>
<tr><td>Dentro de poblado sin acera</td><td>Por el borde de la calzada, lo más pegado posible al bordillo.</td></tr>
<tr><td>Fuera de poblado con arcén</td><td>Por el arcén izquierdo (de frente al tráfico).</td></tr>
<tr><td>Fuera de poblado sin arcén</td><td>Por el borde izquierdo de la calzada (de frente al tráfico).</td></tr>
<tr><td>Cruzar la calzada</td><td>Por pasos señalizados. Si no hay: ángulo recto, buena visibilidad, rápidamente.</td></tr>
<tr><td>Autopistas y autovías</td><td>PROHIBIDA la circulación de peatones.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">PREFERENCIA EN PASO SEÑALIZADO</span>Preferencia absoluta. El conductor debe detenerse aunque el peatón esté en el extremo opuesto del paso y no haya iniciado el cruce.</div>
<div class="tv-key-item"><span class="tv-key-label">FUERA DEL PASO</span>El peatón cede el paso a los vehículos. Pero el conductor SIEMPRE debe extremar la precaución ante peatones cerca de la calzada.</div>
<div class="tv-key-item"><span class="tv-key-label">BASTÓN BLANCO O PERRO GUÍA</span>Preferencia absoluta en cualquier punto de la vía, incluso fuera de los pasos señalizados.</div>
<div class="tv-key-item"><span class="tv-key-label">GRUPOS DE NIÑOS</span>Reducir velocidad drásticamente aunque no haya paso señalizado. Cualquier imprevisto puede ocurrir.</div>
</div>
<div class="tv-trap">⚠️ Los peatones NO tienen preferencia en cualquier punto de la vía. Solo en pasos señalizados con semáforo a su favor. Fuera de ellos ceden el paso.</div>`},
{title:'Ciclistas',content:`<div class="tv-lead">Los ciclistas son usuarios vulnerables con derechos y obligaciones específicos. El examen pregunta mucho sobre la separación lateral y dónde pueden circular.</div>
<div class="tv-distance-visual">
<div class="tv-dist-title">SEPARACIÓN MÍNIMA AL ADELANTAR UN CICLISTA</div>
<div class="tv-dist-diagram"><div class="tv-dist-car">🚗</div><div class="tv-dist-space"><div class="tv-dist-line"></div><div class="tv-dist-measure">1,5 m mínimo</div></div><div class="tv-dist-bike">🚲</div></div>
<div class="tv-dist-note">Normalmente implica invadir parcialmente el carril contrario. Verificar que no viene nadie de frente.</div>
</div>
<div class="tv-table-title">NORMAS DE CIRCULACIÓN PARA CICLISTAS</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Vía general</td><td>Por el arcén derecho o carril bici. Si no hay, por el borde derecho de la calzada.</td></tr>
<tr><td>Grupos de ciclistas</td><td>Pueden ir en fila de a dos. Grupo organizado (&gt;5): el conductor debe tratarlo como vehículo largo y no partirlo al adelantar.</td></tr>
<tr><td>Casco en interurbanas</td><td>Obligatorio para todos (adultos y menores).</td></tr>
<tr><td>Casco en ciudad</td><td>Obligatorio para menores. Recomendado para adultos.</td></tr>
<tr><td>De noche o visibilidad reducida</td><td>Obligatorio chaleco reflectante o prendas de alta visibilidad.</td></tr>
<tr><td>Autopistas y autovías</td><td>PROHIBIDA la circulación de bicicletas.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ El casco es obligatorio para ciclistas adultos en interurbanas pero NO para adultos en ciudad. El examen distingue entre ambas situaciones.</div>`},
{title:'Motocicletas y ciclomotores',content:`<div class="tv-lead">Las motos tienen normas específicas que las distinguen de los turismos. El examen pregunta sobre luces, casco, pasajeros y limitaciones.</div>
<div class="tv-table-title">NORMAS ESPECÍFICAS DE MOTOCICLETAS</div>
<table class="tv-table"><thead><tr><th>Norma</th><th>Detalle</th></tr></thead><tbody>
<tr><td>Luces encendidas</td><td>Obligatorio luces de cruce siempre encendidas, incluso de día en cualquier vía.</td></tr>
<tr><td>Casco</td><td>Obligatorio para conductor y todos los pasajeros en cualquier vía.</td></tr>
<tr><td>Pasajero menor de 12 años</td><td>PROHIBIDO. Excepción: mínimo 7 años + padre/madre/tutor como conductor + casco homologado.</td></tr>
<tr><td>Circular entre filas de coches</td><td>PROHIBIDO circular entre filas de vehículos en movimiento o detenidos.</td></tr>
<tr><td>Número de pasajeros</td><td>Máximo 1 pasajero. Posición: siempre detrás del conductor, nunca delante.</td></tr>
<tr><td>Conductor responsable del casco del pasajero</td><td>Si el pasajero no lleva casco, la multa recae sobre el conductor.</td></tr>
</tbody></table>
<div class="tv-table-title">CICLOMOTORES</div>
<table class="tv-table"><thead><tr><th>Característica</th><th>Valor</th></tr></thead><tbody>
<tr><td>Velocidad máxima</td><td>45 km/h</td></tr>
<tr><td>Vías prohibidas</td><td>Autopistas, autovías y vías de acceso controlado</td></tr>
<tr><td>Casco</td><td>Siempre obligatorio (conductor y pasajero)</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ Las luces de cruce de día son obligatorias para motocicletas en CUALQUIER VÍA, no solo en interurbanas. Esta distinción aparece frecuentemente en el examen.</div>`},
{title:'Vehículos de emergencia — obligaciones exactas',content:`<div class="tv-lead">Los vehículos de emergencia tienen preferencia absoluta cuando activan sus señales. El conductor tiene obligaciones concretas y específicas.</div>
<div class="tv-table-title">OBLIGACIONES DEL CONDUCTOR ANTE VEHÍCULOS DE EMERGENCIA</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Qué debes hacer</th></tr></thead><tbody>
<tr><td>En movimiento en carretera</td><td>Reducir velocidad y desplazarse al borde derecho. Detenerse si es necesario para dejar paso libre.</td></tr>
<tr><td>En autopista fluida</td><td>Desplazarse al borde derecho del carril y reducir velocidad. No cambiar bruscamente de carril.</td></tr>
<tr><td>En autopista con atasco</td><td>CREAR PASILLO DE EMERGENCIA: carril izquierdo se desplaza a la izquierda, carril derecho a la derecha. El pasillo queda en el centro.</td></tr>
<tr><td>En intersección con semáforo verde</td><td>Ceder el paso al vehículo de emergencia aunque el semáforo esté verde para ti.</td></tr>
<tr><td>En ciudad con tráfico denso</td><td>Buscar el lateral más alejado de la trayectoria del vehículo. Detenerse si es necesario.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">PASILLO DE EMERGENCIA</span>Obligatorio crearlo cuando el tráfico está detenido o muy lento en autopista. Entre el carril izquierdo y el siguiente a la derecha. Obligación legal desde 2018.</div>
<div class="tv-key-item"><span class="tv-key-label">NO INVADIR EL PASILLO</span>Invadir el pasillo de emergencia es infracción grave incluso si el vehículo de emergencia no ha llegado aún.</div>
<div class="tv-key-item"><span class="tv-key-label">TRANVÍAS</span>Siempre tienen preferencia sobre vehículos a motor en carriles compartidos. No adelantar por la izquierda cuando hay parada.</div>
</div>`},
{title:'Transporte escolar y animales',content:`<div class="tv-lead">Algunos usuarios tienen normas muy específicas que el examen incluye puntualmente.</div>
<div class="tv-table-title">TRANSPORTE ESCOLAR</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Autobús escolar parado con señal naranja intermitente</td><td>Los conductores de frente o por detrás deben detenerse a distancia prudencial y esperar.</td></tr>
<tr><td>Señal de triángulo con niños</td><td>Extremar precaución en esa zona. Reducir velocidad.</td></tr>
</tbody></table>
<div class="tv-table-title">ANIMALES EN LA VÍA</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Autopistas y autovías</td><td>Prohibida la circulación de animales (de tiro, de carga o rebaños).</td></tr>
<tr><td>Cañada señalizada</td><td>Los vehículos deben ceder el paso al ganado que cruza.</td></tr>
<tr><td>Atropello de animal cinegético</td><td>El conductor es responsable si incumplió normas de tráfico. Si las cumplió, responsabilidad del titular del coto.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">VEHÍCULOS DE MASA REDUCIDA</span>Los que tienen masa autorizada inferior a la reglamentaria deben circular por el arcén derecho.</div>
<div class="tv-key-item"><span class="tv-key-label">VEHÍCULOS AGRÍCOLAS</span>No pueden circular en autopistas. En carretera, si circulan más de 20 km/h por debajo del límite, deben parar en lugares habilitados para facilitar los adelantamientos.</div>
</div>`}
]},{id:'m4',num:4,title:'El Vehículo',subtitle:'Documentación · Seguro · ITV · SRI · Airbag · ABS · Luces · Neumáticos · Carga',icon:'▣',week:3,sections:[
{title:'Documentación y seguro obligatorio',content:`<div class="tv-lead">Tres documentos son obligatorios para circular. El seguro no es opcional — circular sin él es delito penal.</div>
<div class="tv-docs-checklist">
<div class="tv-doc-item"><div class="tv-doc-icon gold">✓</div><div class="tv-doc-content"><div class="tv-doc-title">Permiso de conducir vigente</div><div class="tv-doc-desc">Del conductor activo. Válido para el tipo de vehículo. Debe estar vigente.</div></div></div>
<div class="tv-doc-item"><div class="tv-doc-icon gold">✓</div><div class="tv-doc-content"><div class="tv-doc-title">Permiso de circulación del vehículo</div><div class="tv-doc-desc">Acredita la identidad del titular y los datos básicos del vehículo.</div></div></div>
<div class="tv-doc-item"><div class="tv-doc-icon gold">✓</div><div class="tv-doc-content"><div class="tv-doc-title">Tarjeta ITV + Tarjeta verde del seguro</div><div class="tv-doc-desc">Acredita la inspección técnica vigente y el seguro obligatorio.</div></div></div>
<div class="tv-doc-item missing"><div class="tv-doc-icon red">✗</div><div class="tv-doc-content"><div class="tv-doc-title">DNI / NIF — NO obligatorio al conducir</div><div class="tv-doc-desc">No es obligatorio llevarlo en el vehículo para conducir. Error frecuente confundirlo.</div></div></div>
</div>
<div class="tv-table-title">EL SEGURO OBLIGATORIO (SOA)</div>
<table class="tv-table"><thead><tr><th>Aspecto</th><th>Detalle</th></tr></thead><tbody>
<tr><td>Qué cubre</td><td>Daños causados a TERCEROS: lesiones corporales y daños materiales a otros.</td></tr>
<tr><td>Qué NO cubre</td><td>Los daños propios del vehículo ni las lesiones del conductor culpable.</td></tr>
<tr><td>Circular sin seguro</td><td>DELITO PENAL. Inmovilización inmediata. Multa de hasta 3.000€.</td></tr>
<tr><td>Seguro a todo riesgo</td><td>Voluntario. Añade cobertura para daños propios. No es obligatorio.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ Circular sin seguro es DELITO PENAL, no solo una infracción administrativa. Puede conllevar pena de prisión.</div>`},
{title:'ITV — plazos y resultados',content:`<div class="tv-lead">La ITV garantiza que el vehículo cumple los requisitos técnicos. Sus plazos son de los datos más preguntados en el examen.</div>
<div class="tv-itv-timeline">
<div class="tv-itv-step exento"><div class="tv-itv-years">0 – 4 años</div><div class="tv-itv-status">EXENTO</div><div class="tv-itv-desc">No requiere ITV los primeros 4 años</div></div>
<div class="tv-itv-arrow">→</div>
<div class="tv-itv-step biennial"><div class="tv-itv-years">4 – 10 años</div><div class="tv-itv-status">CADA 2 AÑOS</div><div class="tv-itv-desc">Revisión bienal obligatoria</div></div>
<div class="tv-itv-arrow">→</div>
<div class="tv-itv-step annual"><div class="tv-itv-years">+10 años</div><div class="tv-itv-status">ANUAL</div><div class="tv-itv-desc">Revisión anual obligatoria</div></div>
</div>
<div class="tv-table-title">TIPOS DE RESULTADO EN LA ITV</div>
<table class="tv-table"><thead><tr><th>Resultado</th><th>Consecuencia</th></tr></thead><tbody>
<tr><td>FAVORABLE</td><td>Puede circular hasta la próxima revisión.</td></tr>
<tr><td>FAVORABLE CON DEFECTOS LEVES</td><td>Puede circular pero debe subsanar los defectos antes de la próxima ITV.</td></tr>
<tr><td>DESFAVORABLE</td><td>Puede circular pero debe volver a presentarse en plazo corto (aprox. 2 meses) tras subsanar los defectos.</td></tr>
<tr><td>NEGATIVA</td><td>NO puede circular. Debe ser remolcado al taller. No puede circular hasta superar la ITV.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">ITV EXIGE SEGURO</span>Las estaciones ITV requieren seguro vigente para emitir resultado favorable.</div>
<div class="tv-key-item"><span class="tv-key-label">ITV CADUCADA &gt;2 MESES</span>Infracción grave (200€). El seguro puede no cubrir ciertas contingencias.</div>
</div>`},
{title:'Cinturón de seguridad y SRI',content:`<div class="tv-lead">El cinturón y el SRI son los sistemas de retención obligatorios. Su uso correcto puede marcar la diferencia en un accidente.</div>
<div class="tv-compare">
<div class="tv-compare-item success"><div class="tv-compare-title">Cinturón — todos, en todas las vías</div><div class="tv-compare-body">Obligatorio para todos los ocupantes en todas las vías, urbanas e interurbanas, sin excepción de velocidad ni distancia.</div></div>
<div class="tv-compare-item warn"><div class="tv-compare-title">SRI — menores &lt;12 años o &lt;135 cm</div><div class="tv-compare-body">Obligatorio para menores de 12 años O con menos de 135 cm. SRI homologado adecuado al peso y talla.</div></div>
</div>
<div class="tv-table-title">NORMAS DETALLADAS DEL SRI</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Menor en asiento trasero</td><td>Siempre con SRI homologado. Obligatorio.</td></tr>
<tr><td>Menor en asiento delantero</td><td>Solo si los traseros están todos ocupados por otros menores con SRI, o si el vehículo no tiene traseros.</td></tr>
<tr><td>Sillita orientada hacia atrás + airbag frontal activo</td><td>PROHIBIDO. Debe desactivarse el airbag del copiloto.</td></tr>
<tr><td>Menor mayor de 135 cm</td><td>Puede usar cinturón normal. No necesita SRI.</td></tr>
<tr><td>Cinturón mal colocado</td><td>Llevar la banda por debajo del brazo equivale a no llevarlo. También es infracción.</td></tr>
</tbody></table>
<div class="tv-table-title">EXCEPCIONES AL CINTURÓN</div>
<table class="tv-table"><thead><tr><th>Excepción</th><th>Condición</th></tr></thead><tbody>
<tr><td>Taxistas en ciudad</td><td>Solo en zona urbana con pasajero en el taxi</td></tr>
<tr><td>Repartidores con paradas muy frecuentes</td><td>Solo durante el reparto, no en trayectos entre repartos</td></tr>
<tr><td>Certificado médico</td><td>Con informe médico; debe llevarse siempre en el vehículo</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ El conductor es responsable del uso del cinturón por parte de los pasajeros menores. Si un menor no lleva el SRI, la sanción recae sobre el conductor.</div>`},
{title:'Airbag y sistemas de seguridad pasiva',content:`<div class="tv-lead">El airbag protege en la colisión, pero solo funciona correctamente con el cinturón puesto. Sin cinturón, puede causar lesiones graves.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon teal">💥</div><div class="tv-card-title">Cómo funciona</div><div class="tv-card-body">Se infla en milisegundos al detectar un impacto de cierta magnitud. Absorbe parte de la energía del choque. Se desinfla inmediatamente.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">⚠</div><div class="tv-card-title">Sin cinturón es peligroso</div><div class="tv-card-body">Sin cinturón, el cuerpo sigue hacia delante a la velocidad del impacto. El airbag puede causar lesiones cervicales graves o fatales.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">🚫</div><div class="tv-card-title">Sillita hacia atrás + airbag</div><div class="tv-card-body">Absolutamente incompatible. El airbag del copiloto debe desactivarse si se instala una sillita orientada hacia atrás en ese asiento.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">📍</div><div class="tv-card-title">Posición al volante</div><div class="tv-card-body">Mínimo 25–30 cm entre el pecho y el volante para que el airbag funcione correctamente. Demasiado cerca puede causar lesiones.</div></div>
</div>
<div class="tv-trap">⚠️ El airbag NO reemplaza al cinturón. Es un complemento. El cinturón es el sistema primario de retención; el airbag es el secundario.</div>`},
{title:'Seguridad activa — ABS, ESP y frenada',content:`<div class="tv-lead">Los sistemas de seguridad activa previenen el accidente. Conocer su funcionamiento real es importante para el examen y para la conducción real.</div>
<div class="tv-table-title">SISTEMAS DE SEGURIDAD ACTIVA</div>
<table class="tv-table"><thead><tr><th>Sistema</th><th>Qué hace</th><th>Qué NO hace</th></tr></thead><tbody>
<tr><td>ABS (Antibloqueo)</td><td>Evita que las ruedas se bloqueen. Mantiene el control de la dirección en frenada brusca.</td><td>No reduce necesariamente la distancia de frenada. En grava/nieve suelta puede aumentarla.</td></tr>
<tr><td>ESP (Control de estabilidad)</td><td>Detecta y corrige el derrape actuando en frenos individuales.</td><td>No evita accidentes si la velocidad es excesiva para las condiciones.</td></tr>
<tr><td>Control de tracción (ASR)</td><td>Evita el patinaje de las ruedas motrices al acelerar en superficie resbaladiza.</td><td>No sustituye a los neumáticos adecuados en nieve o hielo.</td></tr>
</tbody></table>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">Cómo frenar con ABS</div><div class="tv-compare-body">Pisar el freno con toda la fuerza posible y MANTENERLO pisado. La vibración del pedal es el ABS funcionando. No soltar, no bombear.</div></div>
<div class="tv-compare-item success"><div class="tv-compare-title">Sin ABS — qué hacer</div><div class="tv-compare-body">Bombear el pedal (presionar y soltar rápidamente) para evitar el bloqueo y mantener algo de control de la dirección.</div></div>
</div>
<div class="tv-trap">⚠️ ABS no es sinónimo de frenar más corto. En grava o nieve suelta, la distancia de frenada puede ser MAYOR con ABS porque el bloqueo crea una "cuña" que frena más.</div>`},
{title:'Alumbrado completo',content:`<div class="tv-lead">Cada tipo de luz corresponde a una situación específica. Usarlas incorrectamente es infracción.</div>
<div class="tv-table-title">TIPOS DE LUCES Y CUÁNDO USARLAS</div>
<table class="tv-table"><thead><tr><th>Luz</th><th>Cuándo encender</th><th>Cuándo NO</th></tr></thead><tbody>
<tr><td><strong>Cruce (cortas)</strong></td><td>Noche, visibilidad reducida, lluvia/niebla de día, túneles siempre.</td><td>Son insuficientes en carretera oscura sin otros vehículos.</td></tr>
<tr><td><strong>Largas</strong></td><td>Carretera sin iluminación, sin riesgo de deslumbrar.</td><td>A menos de 200 m de vehículo de frente o siguiendo a otro.</td></tr>
<tr><td><strong>Antiniebla delantera</strong></td><td>Solo con niebla, lluvia intensa o nieve que reduzca notablemente la visibilidad.</td><td>Condiciones normales — infracción (200€).</td></tr>
<tr><td><strong>Antiniebla trasera (roja)</strong></td><td>Solo con visibilidad muy reducida (&lt;50 m aprox).</td><td>Condiciones normales — deslumbra al conductor de atrás.</td></tr>
<tr><td><strong>4 intermitentes</strong></td><td>Avería, frenada brusca de emergencia, retención imprevista.</td><td>Para aparcar incorrectamente (no justifica infracciones).</td></tr>
</tbody></table>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">200 metros — la regla de las largas</div><div class="tv-compare-body">A 200 metros de un vehículo de frente: cambiar de largas a cortas. También al seguir a otro de cerca para no deslumbrar por los retrovisores.</div></div>
<div class="tv-compare-item danger"><div class="tv-compare-title">Si te deslumbran</div><div class="tv-compare-body">Mira al borde derecho de la calzada. Reduce velocidad. NO pongas tú también las largas. Eso crearía peligro mayor para ambos.</div></div>
</div>
<div class="tv-trap">⚠️ En cualquier túnel (iluminado o no) es SIEMPRE obligatorio encender las luces de cruce. No existe excepción por nivel de iluminación del túnel.</div>`},
{title:'Neumáticos, carga y remolques',content:`<div class="tv-lead">Los neumáticos son el único punto de contacto con la calzada. Los remolques tienen normas específicas sobre permisos y velocidades.</div>
<div class="tv-table-title">NEUMÁTICOS</div>
<table class="tv-table"><thead><tr><th>Parámetro</th><th>Mínimo legal</th></tr></thead><tbody>
<tr><td>Profundidad del dibujo</td><td>1,6 mm en toda la banda de rodadura</td></tr>
<tr><td>Presión</td><td>La indicada por el fabricante (comprobar en frío)</td></tr>
<tr><td>Estado general</td><td>Sin grietas, bultos ni daños visibles</td></tr>
</tbody></table>
<div class="tv-table-title">CARGA</div>
<table class="tv-table"><thead><tr><th>Aspecto</th><th>Norma</th></tr></thead><tbody>
<tr><td>Carga sobresaliente por detrás</td><td>Máx. 50% de la longitud del vehículo. Si supera 1 metro, señalizar con panel reflectante.</td></tr>
<tr><td>Carga sobresaliente por delante</td><td>Máx. 50% de la longitud del vehículo, hasta 3 metros.</td></tr>
<tr><td>Sujeción</td><td>Bien asegurada. Responsabilidad del conductor si cae y causa accidente.</td></tr>
</tbody></table>
<div class="tv-table-title">REMOLQUES — PERMISOS Y VELOCIDADES</div>
<table class="tv-table"><thead><tr><th>Remolque</th><th>Permiso</th><th>Vel. máx. autopista</th></tr></thead><tbody>
<tr><td>Hasta 750 kg MMA</td><td>Permiso B</td><td>120 km/h</td></tr>
<tr><td>Más de 750 kg (combinación ≤3.500 kg)</td><td>Permiso B</td><td>100 km/h</td></tr>
<tr><td>Combinación más de 3.500 kg</td><td>Permiso B+E</td><td>100 km/h</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">VEHÍCULOS &gt;10 METROS</span>En autopistas y autovías: distancia mínima de 50 metros con el vehículo precedente. El único mínimo legal en metros para distancia de seguridad.</div>
</div>`}
]},{id:'m5',num:5,title:'La Conducción',subtitle:'Distancias · Autopista · Ciudad · Condiciones adversas · Nocturna · Eficiencia · Emergencias',icon:'↗',week:4,sections:[
{title:'Distancia de seguridad',content:`<div class="tv-lead">La distancia de seguridad es el espacio que permite frenar sin colisionar si el vehículo de delante frena bruscamente. Para turismos no hay número fijo en la ley.</div>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">¿Existe mínimo legal en metros para turismos?</div><div class="tv-compare-body">NO. La ley exige "distancia suficiente adaptada a las circunstancias" sin fijar metros. El único mínimo fijo es para vehículos de más de 10 metros: 50 metros en autopistas.</div></div>
<div class="tv-compare-item success"><div class="tv-compare-title">Regla de los 3 segundos</div><div class="tv-compare-body">El vehículo de delante pasa por un punto fijo → debes tardar mínimo 3 segundos en pasar por ese mismo punto. En adverso o noche: 4–6 segundos.</div></div>
</div>
<div class="tv-table-title">DISTANCIA DE FRENADA SEGÚN CONDICIONES</div>
<table class="tv-table"><thead><tr><th>Condición</th><th>Multiplicador de distancia</th></tr></thead><tbody>
<tr><td>Asfalto seco</td><td>Referencia (×1)</td></tr>
<tr><td>Asfalto mojado</td><td>×2 o más</td></tr>
<tr><td>Nieve compactada</td><td>×3 a ×5</td></tr>
<tr><td>Hielo</td><td>×8 a ×10</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">TIEMPO DE REACCIÓN</span>0,75–1,5 segundos antes de empezar a frenar. A 120 km/h = 25–50 metros recorridos ANTES de activar los frenos.</div>
<div class="tv-key-item"><span class="tv-key-label">NEUMÁTICOS DESGASTADOS</span>La distancia de frenada en mojado puede triplicarse con neumáticos desgastados.</div>
</div>
<div class="tv-trap">⚠️ Los 50 metros de mínimo legal son SOLO para vehículos de más de 10 metros en autopistas. Para turismos no hay mínimo fijo en metros.</div>`},
{title:'Circulación en autopista',content:`<div class="tv-lead">Las vías de alta velocidad tienen normas específicas que van más allá del límite de velocidad.</div>
<div class="tv-table-title">NORMAS DE AUTOPISTA</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Incorporación (carril de aceleración)</td><td>El que se incorpora cede el paso a los que ya circulan. Ajustar velocidad en el carril de aceleración.</td></tr>
<tr><td>Salida (carril de deceleración)</td><td>Reducir velocidad en el carril de deceleración, NO en el carril principal. Señalizar con antelación.</td></tr>
<tr><td>Marcha atrás</td><td>TERMINANTEMENTE PROHIBIDA. Si te equivocas de salida, continúa hasta la siguiente.</td></tr>
<tr><td>Cambio de sentido</td><td>Prohibido excepto en los pasos habilitados.</td></tr>
<tr><td>Parada de emergencia</td><td>Carril de emergencia o arcén. Chaleco antes de salir. V-16 o triángulos.</td></tr>
<tr><td>Velocidad mínima</td><td>60 km/h. Circular más lento sin causa justificada es infracción.</td></tr>
<tr><td>Carril izquierdo</td><td>Solo para adelantar. Al terminar, volver al carril derecho.</td></tr>
</tbody></table>
<div class="tv-compare">
<div class="tv-compare-item success"><div class="tv-compare-title">Carril de aceleración — cómo usarlo</div><div class="tv-compare-body">Acelerar hasta la velocidad de la autopista ANTES de incorporarse al carril general. No incorporarse a 60 si los demás van a 120.</div></div>
<div class="tv-compare-item warn"><div class="tv-compare-title">Carril de deceleración — cómo usarlo</div><div class="tv-compare-body">Entrar en el carril de deceleración y reducir la velocidad dentro de él. No frenar en el carril general de la autopista.</div></div>
</div>
<div class="tv-trap">⚠️ La marcha atrás en autopista: 6 puntos de penalización y multa de hasta 500€. Una de las principales causas de accidentes mortales en autopista.</div>`},
{title:'Circulación urbana',content:`<div class="tv-lead">La ciudad es el entorno de mayor complejidad: múltiples usuarios, intersecciones frecuentes y velocidades bajas donde los errores afectan especialmente a peatones.</div>
<div class="tv-table-title">NORMAS ESPECÍFICAS EN CIUDAD</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Intersección sin señal</td><td>Regla de la derecha.</td></tr>
<tr><td>Giro a la izquierda</td><td>Señalizar con antelación. Ceder el paso a peatones y ciclistas que cruzan la vía de destino.</td></tr>
<tr><td>Giro a la derecha</td><td>Extremar precaución con ciclistas que circulen por el arcén o carril bici a tu derecha.</td></tr>
<tr><td>Semáforo verde para mí + peatones cruzando</td><td>Ceder el paso a los peatones que tienen verde peatonal aunque mi semáforo esté verde.</td></tr>
<tr><td>Carril bus exclusivo</td><td>Solo autobuses, taxis (si señalizado), bicicletas y motos (si la señal lo indica).</td></tr>
<tr><td>Claxon en ciudad</td><td>Solo para evitar accidente. De noche: prohibido salvo peligro inminente.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">ZONA ORA</span>Estacionamiento de pago con ticket. Exceder el tiempo es infracción. Los residentes tienen tarjetas especiales.</div>
<div class="tv-key-item"><span class="tv-key-label">DISCO HORARIO</span>En algunas zonas, estacionamiento gratuito limitado en tiempo. El conductor pone el disco horario en el parabrisas con la hora de llegada.</div>
</div>`},
{title:'Conducción en condiciones adversas',content:`<div class="tv-lead">La lluvia, niebla, nieve y hielo cambian radicalmente las normas de conducción efectiva y segura.</div>
<div class="tv-table-title">LLUVIA</div>
<table class="tv-table"><thead><tr><th>Obligación</th><th>Detalle</th></tr></thead><tbody>
<tr><td>Luces</td><td>Encender luces de cruce aunque sea de día si la visibilidad está reducida.</td></tr>
<tr><td>Distancia</td><td>Duplicar como mínimo la distancia de seguridad.</td></tr>
<tr><td>Aquaplaning</td><td>La dirección no responde. No frenar bruscamente. Soltar el acelerador suavemente.</td></tr>
</tbody></table>
<div class="tv-table-title">NIEBLA</div>
<table class="tv-table"><thead><tr><th>Visibilidad</th><th>Obligación</th></tr></thead><tbody>
<tr><td>Reducida pero &gt;50 metros</td><td>Luces de cruce. Reducir velocidad. Aumentar distancia.</td></tr>
<tr><td>Menos de 50 metros</td><td>Luces antiniebla (delantera y trasera). Velocidad no superior a 50 km/h en cualquier vía.</td></tr>
</tbody></table>
<div class="tv-table-title">NIEVE E HIELO</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Señal de cadenas obligatorias</td><td>No puede circular sin cadenas o neumáticos de invierno homologados.</td></tr>
<tr><td>4x4 y tracción total</td><td>NO eximen del uso de cadenas cuando la señal lo exige. Mejoran la tracción, no la frenada.</td></tr>
<tr><td>Distancia en nieve</td><td>×3–5 la distancia habitual.</td></tr>
<tr><td>Distancia en hielo</td><td>×8–10 la distancia habitual. Prácticamente no hay adherencia.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ Tener 4x4 NO exime del uso de cadenas. La tracción total mejora el arranque pero no mejora la frenada en hielo.</div>`},
{title:'Conducción nocturna',content:`<div class="tv-lead">La noche multiplica los riesgos: visibilidad reducida, mayor presencia de peatones sin reflectantes y posible fatiga del conductor.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon gold">🌙</div><div class="tv-card-title">Mayor distancia de seguridad</div><div class="tv-card-body">El tiempo de reacción aumenta por la fatiga. La visibilidad está reducida. Aumentar siempre la distancia respecto al día.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">💡</div><div class="tv-card-title">Uso de largas</div><div class="tv-card-body">En carretera sin iluminación y sin vehículos cercanos: usar las largas. A 200 metros de un vehículo de frente: cambiar a cortas.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">⚠</div><div class="tv-card-title">Peatones y ciclistas</div><div class="tv-card-body">De noche son mucho más difíciles de detectar. Los peatones en interurbanas deben ir por el arcén izquierdo con ropa reflectante.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">😴</div><div class="tv-card-title">Fatiga nocturna</div><div class="tv-card-body">El riesgo de microsueños aumenta entre las 2 y las 6 de la madrugada. El café solo retrasa el problema. Solo el descanso resuelve.</div></div>
</div>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">DESLUMBRAMIENTO</span>Mirar al borde derecho. Reducir velocidad. NO poner las largas. Esperar a que el vehículo contrario se aleje.</div>
</div>`},
{title:'Conducción eficiente y etiquetas medioambientales',content:`<div class="tv-lead">La conducción eficiente ahorra combustible, reduce emisiones y el desgaste del vehículo. Las etiquetas determinan el acceso a zonas restringidas.</div>
<div class="tv-steps">
<div class="tv-step"><div class="tv-step-num">1</div><div class="tv-step-text"><strong>Arrancar sin acelerar.</strong> No "calentar" el motor acelerando en frío. En diésel: esperar unos segundos para la lubricación.</div></div>
<div class="tv-step"><div class="tv-step-num">2</div><div class="tv-step-text"><strong>Cambiar de marcha pronto.</strong> 2.000–2.500 rpm en gasolina, 1.500–2.000 en diésel.</div></div>
<div class="tv-step"><div class="tv-step-num">3</div><div class="tv-step-text"><strong>Velocidad constante.</strong> Evitar aceleraciones y frenazos innecesarios.</div></div>
<div class="tv-step"><div class="tv-step-num">4</div><div class="tv-step-text"><strong>Aprovechar la inercia.</strong> Soltar el acelerador con antelación. Motor en ralentí = consumo mínimo.</div></div>
<div class="tv-step"><div class="tv-step-num">5</div><div class="tv-step-text"><strong>Mantenimiento.</strong> Presión de neumáticos correcta, filtros en buen estado, escape operativo.</div></div>
</div>
<div class="tv-etiquetas-full">
<div class="tv-etiq-full cero"><div class="tv-etiq-badge">CERO</div><div class="tv-etiq-vehicles">Eléctricos puros · Pila de hidrógeno · Eléctrico de autonomía extendida</div><div class="tv-etiq-access">Acceso libre a todas las ZBE</div></div>
<div class="tv-etiq-full eco"><div class="tv-etiq-badge">ECO</div><div class="tv-etiq-vehicles">Híbridos enchufables y no enchufables · GLP · GNC</div><div class="tv-etiq-access">Acceso a la mayoría de ZBE</div></div>
<div class="tv-etiq-full c"><div class="tv-etiq-badge">C</div><div class="tv-etiq-vehicles">Gasolina matriculados desde 2006 · Diésel desde 2014</div><div class="tv-etiq-access">Acceso según restricciones locales</div></div>
<div class="tv-etiq-full b"><div class="tv-etiq-badge">B</div><div class="tv-etiq-vehicles">Gasolina desde 2000 · Diésel desde 2006</div><div class="tv-etiq-access">Acceso limitado en episodios de contaminación</div></div>
<div class="tv-etiq-full none"><div class="tv-etiq-badge">SIN</div><div class="tv-etiq-vehicles">Vehículos más antiguos o más contaminantes</div><div class="tv-etiq-access">Sin acceso a ZBE en episodios de contaminación</div></div>
</div>`},
{title:'Emergencias mecánicas',content:`<div class="tv-lead">Un reventón, una avería o los frenos que fallan pueden ocurrir. El protocolo correcto puede evitar que un susto se convierta en accidente grave.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon red">💥</div><div class="tv-card-title">Reventón de neumático</div><div class="tv-card-body">NO frenar bruscamente. Sujetar el volante firmemente. Soltar el acelerador gradualmente. Frenar de forma progresiva y suave. Salir de la calzada.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">🔦</div><div class="tv-card-title">Avería en autopista</div><div class="tv-card-body">1. Chaleco puesto dentro del vehículo antes de salir. 2. Señalizar (V-16 o triángulos). 3. Alejarse por el lateral derecho.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">🔥</div><div class="tv-card-title">Incendio del vehículo</div><div class="tv-card-body">Apagar el motor. Salir inmediatamente. Alejarse. NUNCA abrir el capó si hay llamas — el oxígeno aviva el fuego.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">🌊</div><div class="tv-card-title">Aquaplaning</div><div class="tv-card-body">La dirección no responde. No frenar ni girar. Soltar el acelerador muy suavemente hasta recuperar el contacto. Entonces frenar suave.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">⚙</div><div class="tv-card-title">Frenos que fallan</div><div class="tv-card-body">Bombear el pedal. Usar el freno de mano progresivamente. Reducir marcha. Buscar zona de deceleración o salida de emergencia.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">🌫</div><div class="tv-card-title">Deslumbramiento</div><div class="tv-card-body">Mirar al borde derecho. Reducir velocidad. NO poner las largas como respuesta. Si es muy intenso, detener en lugar seguro.</div></div>
</div>`}
]},{id:'m6',num:6,title:'Accidentes y Emergencias',subtitle:'Protocolo PAS · Primeros auxilios · Señalización · Paso a nivel · Túneles',icon:'⊕',week:5,sections:[
{title:'Protocolo PAS',content:`<div class="tv-lead">Ante cualquier accidente: tres pasos en orden estricto. No al revés. PAS es lo que salva vidas antes de que lleguen los servicios.</div>
<div class="tv-pas-steps">
<div class="tv-pas-step"><div class="tv-pas-letter gold">P</div><div class="tv-pas-word">PROTEGER</div><div class="tv-pas-desc">Señalizar el accidente para evitar nuevos choques. Zona de seguridad mínima 50 m delante y detrás. Chaleco reflectante antes de salir del vehículo. Apagar motores.</div></div>
<div class="tv-pas-step"><div class="tv-pas-letter teal">A</div><div class="tv-pas-word">AVISAR</div><div class="tv-pas-desc">Llamar al 112. Indicar: localización exacta (kilómetro, municipio), número de heridos, estado visible, si hay atrapados, si hay derrame de combustible.</div></div>
<div class="tv-pas-step"><div class="tv-pas-letter red">S</div><div class="tv-pas-word">SOCORRER</div><div class="tv-pas-desc">Asistir a las víctimas SIN MOVERLAS salvo peligro extremo (incendio, caída al agua). RCP si no respira. Posición lateral de seguridad si inconsciente pero respira.</div></div>
</div>
<div class="tv-table-title">NÚMEROS DE EMERGENCIA</div>
<table class="tv-table"><thead><tr><th>Número</th><th>Servicio</th></tr></thead><tbody>
<tr><td class="tv-num gold">112</td><td>Emergencias generales — policía, bomberos, ambulancias. Gratuito, 24h.</td></tr>
<tr><td class="tv-num teal">011</td><td>Información de carreteras — estado de la red, restricciones, incidencias.</td></tr>
<tr><td class="tv-num">060</td><td>DGT — trámites, consultas y gestiones administrativas.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">OBLIGACIÓN LEGAL</span>Todo implicado o testigo en condiciones de ayudar está OBLIGADO a auxiliar. No hacerlo es infracción grave.</div>
<div class="tv-key-item"><span class="tv-key-label">FACILITAR IDENTIDAD</span>Los implicados están obligados a facilitar identidad y datos del vehículo a los demás implicados y a los agentes.</div>
<div class="tv-key-item"><span class="tv-key-label">PRUEBA OBLIGATORIA</span>Todo implicado en accidente está obligado a someterse a pruebas de alcohol/drogas. Negarse es delito penal.</div>
</div>
<div class="tv-trap">⚠️ Negarse a auxiliar cuando se está en condiciones físicas de hacerlo es infracción grave, aunque no seas el causante del accidente.</div>`},
{title:'Primeros auxilios básicos',content:`<div class="tv-lead">No hace falta ser médico. Estas técnicas básicas pueden mantener con vida a una víctima hasta que lleguen los servicios.</div>
<div class="tv-cards-grid">
<div class="tv-card-item"><div class="tv-card-icon teal">↔</div><div class="tv-card-title">Posición lateral de seguridad (PLS)</div><div class="tv-card-body">Para inconscientes que SÍ respiran. Evita ahogarse con vómito. No mover si hay sospecha de lesión cervical o de columna. Vigilar respiración.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">♥</div><div class="tv-card-title">RCP básica</div><div class="tv-card-body">Si NO respira: 30 compresiones torácicas (100–120/min, 5–6 cm de profundidad) + 2 insuflaciones. Repetir. No parar hasta que lleguen los servicios.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">🩹</div><div class="tv-card-title">Hemorragias</div><div class="tv-card-body">Comprimir directamente con paño limpio con fuerza continua. No retirar el objeto clavado — fijarlo sin extraerlo. Elevar el miembro si es posible.</div></div>
<div class="tv-card-item"><div class="tv-card-icon teal">🦴</div><div class="tv-card-title">Fracturas</div><div class="tv-card-body">NO mover al accidentado salvo peligro extremo. Inmovilizar en la posición en que esté. No intentar "recolocar" el hueso.</div></div>
<div class="tv-card-item"><div class="tv-card-icon red">🔥</div><div class="tv-card-title">Quemaduras</div><div class="tv-card-body">Enfriar con agua fría 15–20 min. No reventar ampollas. No aplicar cremas ni hielo. Cubrir con paño limpio húmedo.</div></div>
<div class="tv-card-item"><div class="tv-card-icon gold">🧠</div><div class="tv-card-title">Traumatismo craneal</div><div class="tv-card-body">No quitar el casco si está inconsciente. Mantener quieto. No dar agua ni medicamentos. Vigilar si pierde el conocimiento.</div></div>
</div>
<div class="tv-trap">⚠️ NO retirar el casco a un motorista inconsciente. Si hay lesión cervical, quitarlo puede causar parálisis. Solo retirarlo si no respira Y es imposible hacer RCP con él puesto.</div>`},
{title:'Señalización de emergencia y dispositivos',content:`<div class="tv-lead">Señalizar correctamente un vehículo accidentado o averiado protege a todos. Las obligaciones van más allá de llamar al 112.</div>
<div class="tv-table-title">DISPOSITIVOS DE SEÑALIZACIÓN</div>
<table class="tv-table"><thead><tr><th>Dispositivo</th><th>Norma</th></tr></thead><tbody>
<tr><td>V-16 (luz naranja homologada)</td><td>Sustituto de los triángulos desde julio 2021. Se coloca sobre el techo desde dentro del vehículo — sin necesidad de salir a la calzada.</td></tr>
<tr><td>Triángulos de emergencia</td><td>Ya NO obligatorios para turismos desde 2021. Se pueden seguir usando voluntariamente. Colocar a 50 metros delante y detrás.</td></tr>
<tr><td>4 intermitentes</td><td>Activar siempre en avería o accidente. Complementan al V-16 o triángulos.</td></tr>
<tr><td>Chaleco reflectante</td><td>Ponérselo ANTES de salir del vehículo. Obligatorio llevarlo dentro del habitáculo (no en el maletero).</td></tr>
</tbody></table>
<div class="tv-table-title">SITUACIONES ESPECIALES</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Protocolo</th></tr></thead><tbody>
<tr><td>Incendio del vehículo</td><td>Apagar el motor. Salir inmediatamente. Alejarse. NUNCA abrir el capó si hay llamas.</td></tr>
<tr><td>Carga de combustible</td><td>Apagar el motor obligatoriamente. Prohibido fumar.</td></tr>
<tr><td>Arrojar objetos a la vía</td><td>Infracción grave. Puede provocar incendios o dañar vehículos.</td></tr>
</tbody></table>`},
{title:'Paso a nivel',content:`<div class="tv-lead">Los pasos a nivel son cruces entre vías de tren y carreteras. Son zonas de alto riesgo con normas muy específicas que el examen pregunta.</div>
<div class="tv-table-title">NORMAS EN PASOS A NIVEL</div>
<table class="tv-table"><thead><tr><th>Situación</th><th>Norma</th></tr></thead><tbody>
<tr><td>Con STOP, semáforo rojo o barreras bajando</td><td>Detenerse a MÍNIMO 3 METROS de las vías. Esperar a que las barreras suban completamente.</td></tr>
<tr><td>Paso sin barreras ni semáforos</td><td>Detenerse antes de cruzar. Mirar en ambas direcciones. Solo cruzar si está completamente libre.</td></tr>
<tr><td>Barreras que bajan mientras ya cruzas</td><td>Si ya iniciaste el cruce: continúa, no pares en las vías.</td></tr>
<tr><td>Vehículo atrapado en las vías</td><td>Desalojar todos los ocupantes INMEDIATAMENTE en diagonal (no paralelo a las vías). Llamar al 112. Avisar a los maquinistas.</td></tr>
<tr><td>Adelantar en paso a nivel</td><td>PROHIBIDO en la proximidad de un paso a nivel.</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">¿POR QUÉ 3 METROS?</span>El tren puede llevar carga que sobresalga lateralmente varios metros. La separación de 3 metros garantiza que el vehículo queda fuera de la zona de barrido del tren.</div>
</div>
<div class="tv-trap">⚠️ La distancia de 3 metros mínima en paso a nivel es uno de los datos numéricos concretos que más aparece en el examen DGT. Memorízalo.</div>`},
{title:'Normas en túneles',content:`<div class="tv-lead">Los túneles son entornos cerrados donde los accidentes tienen consecuencias especialmente graves por el humo y la dificultad de evacuación.</div>
<div class="tv-table-title">OBLIGACIONES EN TÚNELES</div>
<table class="tv-table"><thead><tr><th>Obligación</th><th>Detalle</th></tr></thead><tbody>
<tr><td>Luces de cruce</td><td>SIEMPRE al entrar en cualquier túnel, esté iluminado o no. Obligatorio por ley, sin excepciones.</td></tr>
<tr><td>Velocidad</td><td>Respetar los límites indicados. Son normalmente menores que en la vía exterior.</td></tr>
<tr><td>Adelantar</td><td>Prohibido en la mayoría de túneles. Solo si hay varios carriles por sentido y la señalización lo permite.</td></tr>
<tr><td>Marcha atrás</td><td>Absolutamente prohibida en cualquier circunstancia.</td></tr>
<tr><td>Vehículo detenido</td><td>Encender luces de emergencia. No salir del vehículo salvo peligro inminente. Llamar al 112.</td></tr>
<tr><td>Incendio en el túnel</td><td>NO dar la vuelta. Encender luces de emergencia. Salir del vehículo. Alejarse por las salidas de emergencia. Seguir instrucciones del personal.</td></tr>
<tr><td>Carga de combustible en túnel</td><td>Prohibido. También prohibido fumar.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ En incendio en túnel: NO dar la vuelta aunque sea posible. El humo se propaga en la dirección del tráfico; al dar la vuelta, te moverías hacia el humo que viene de frente.</div>`}
]},{id:'m7',num:7,title:'Normas y Sanciones',subtitle:'Infracciones · Delitos penales · Sanciones · Datos numéricos completos',icon:'◎',week:6,sections:[
{title:'Clasificación de infracciones',content:`<div class="tv-lead">Las infracciones de tráfico se clasifican en tres niveles. La clasificación determina la multa, los puntos perdidos y el plazo de prescripción.</div>
<div class="tv-table-title">CLASIFICACIÓN Y CONSECUENCIAS</div>
<table class="tv-table"><thead><tr><th>Tipo</th><th>Multa</th><th>Puntos</th><th>Prescripción</th></tr></thead><tbody>
<tr><td><strong>Leve</strong></td><td class="tv-num">100€</td><td class="tv-num">0</td><td>3 meses</td></tr>
<tr class="tv-row-gold"><td><strong>Grave</strong></td><td class="tv-num gold">200–500€</td><td class="tv-num orange">-2 a -4</td><td>6 meses</td></tr>
<tr class="tv-row-red"><td><strong>Muy grave</strong></td><td class="tv-num red">500–600€</td><td class="tv-num red">-4 a -6</td><td>1 año</td></tr>
</tbody></table>
<div class="tv-table-title">EJEMPLOS POR TIPO</div>
<table class="tv-table"><thead><tr><th>Infracción</th><th>Tipo</th></tr></thead><tbody>
<tr><td>Exceso velocidad hasta 20 km/h</td><td>Leve (100€, 0 puntos)</td></tr>
<tr><td>No usar cinturón, casco o SRI</td><td>Grave (200€, -3 puntos)</td></tr>
<tr><td>Usar el móvil al volante</td><td>Grave (200€, -3 puntos)</td></tr>
<tr><td>Exceso velocidad 21–40 km/h</td><td>Grave (200–400€, -2/-4 puntos)</td></tr>
<tr><td>Exceso velocidad 41–50 km/h</td><td>Muy grave (500€, -4 puntos)</td></tr>
<tr><td>Exceso velocidad +50 km/h</td><td>Muy grave (600€, -6 puntos)</td></tr>
<tr><td>No respetar semáforo rojo, stop, ceda</td><td>Muy grave (200€, -4 puntos)</td></tr>
<tr><td>Alcohol 0,25–0,50 mg/l</td><td>Grave (500€, -4 puntos)</td></tr>
<tr><td>Alcohol &gt;0,50 mg/l</td><td>Muy grave + posible delito penal</td></tr>
<tr><td>Circular en sentido contrario</td><td>Muy grave (500€, -6 puntos)</td></tr>
<tr><td>ITV caducada &gt;2 meses</td><td>Grave (200€)</td></tr>
<tr><td>Marcha atrás en autopista</td><td>Muy grave (500€, -6 puntos)</td></tr>
</tbody></table>
<div class="tv-keybox">
<div class="tv-key-item"><span class="tv-key-label">DESCUENTO POR PRONTO PAGO</span>50% de descuento si se paga dentro de los 20 días naturales desde la notificación. Al pagar con descuento se renuncia al recurso.</div>
<div class="tv-key-item"><span class="tv-key-label">RECURSO DE REPOSICIÓN</span>Plazo: 1 mes desde la resolución. Sin reducción de la multa.</div>
<div class="tv-key-item"><span class="tv-key-label">RECURSO CONTENCIOSO-ADMINISTRATIVO</span>Plazo: 2 meses desde la resolución del recurso de reposición.</div>
</div>`},
{title:'Infracciones penales vs administrativas',content:`<div class="tv-lead">Algunas infracciones de tráfico superan el ámbito administrativo y se convierten en delitos penales. La diferencia es fundamental.</div>
<div class="tv-compare">
<div class="tv-compare-item warn"><div class="tv-compare-title">Infracción administrativa</div><div class="tv-compare-body">Multa económica + posible pérdida de puntos. Se tramita por la DGT o el Ayuntamiento. No hay antecedentes penales.</div></div>
<div class="tv-compare-item danger"><div class="tv-compare-title">Delito penal (Código Penal)</div><div class="tv-compare-body">Pena de prisión, multa penal o trabajos en beneficio de la comunidad. Antecedentes penales. Se tramita en juzgados.</div></div>
</div>
<div class="tv-table-title">CUÁNDO SE CONVIERTE EN DELITO PENAL</div>
<table class="tv-table"><thead><tr><th>Infracción</th><th>Umbral para ser delito</th></tr></thead><tbody>
<tr class="tv-row-red"><td>Exceso de velocidad</td><td>+60 km/h en ciudad, o +80 km/h en interurbana sobre el límite</td></tr>
<tr class="tv-row-red"><td>Alcohol</td><td>Tasa superior a 0,60 mg/l en aire (1,2 g/l en sangre)</td></tr>
<tr class="tv-row-red"><td>Negativa a la prueba</td><td>SIEMPRE es delito penal, independientemente del resultado</td></tr>
<tr class="tv-row-red"><td>Conducción temeraria</td><td>Cuando pone en concreto peligro la vida o integridad de personas</td></tr>
<tr class="tv-row-red"><td>Circular sin permiso de conducir</td><td>Siempre es delito penal (nunca obtenido, o con permiso retirado)</td></tr>
<tr class="tv-row-red"><td>Circular sin seguro</td><td>Siempre es delito penal</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ Circular sin permiso de conducir es DELITO PENAL, no solo una infracción. También circular con el permiso retirado judicialmente.</div>`},
{title:'Chaleco, V-16 y equipamiento obligatorio',content:`<div class="tv-lead">El chaleco reflectante y el V-16 son equipamiento de seguridad obligatorio. El examen pregunta sobre su uso correcto.</div>
<div class="tv-table-title">CHALECO REFLECTANTE</div>
<table class="tv-table"><thead><tr><th>Aspecto</th><th>Norma</th></tr></thead><tbody>
<tr><td>¿Es obligatorio?</td><td>Sí, obligatorio tener al menos uno en el habitáculo del vehículo.</td></tr>
<tr><td>¿Dónde llevarlo?</td><td>Dentro del habitáculo, accesible. NO en el maletero.</td></tr>
<tr><td>¿Cuándo ponérselo?</td><td>ANTES de salir del vehículo en avería o accidente.</td></tr>
<tr><td>¿Quién lo usa?</td><td>Todos los que salgan del vehículo a la calzada o arcén.</td></tr>
</tbody></table>
<div class="tv-table-title">V-16 Y TRIÁNGULOS</div>
<table class="tv-table"><thead><tr><th>Dispositivo</th><th>Estado</th></tr></thead><tbody>
<tr><td>V-16 (luz naranja)</td><td>Obligatorio desde julio 2021. Sustituye a los triángulos. Se activa desde dentro del vehículo.</td></tr>
<tr><td>Triángulos de emergencia</td><td>Ya NO obligatorios para turismos desde julio 2021. Se pueden seguir usando voluntariamente.</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ El orden correcto en avería en autopista: 1) Chaleco dentro del vehículo antes de salir. 2) Señalizar (V-16 o triángulos). 3) Alejarse por el lateral derecho. El chaleco SIEMPRE primero.</div>`},
{title:'Resumen completo de datos numéricos',content:`<div class="tv-lead">Todos los números del permiso B que aparecen en el examen DGT, reunidos para repaso final.</div>
<div class="tv-table-title">VELOCIDADES</div>
<table class="tv-table"><thead><tr><th>Vía</th><th>Máxima</th><th>Mínima</th></tr></thead><tbody>
<tr><td>Autopista/autovía (turismo)</td><td>120 km/h</td><td>60 km/h</td></tr>
<tr><td>Autopista con remolque &gt;750 kg</td><td>100 km/h</td><td>60 km/h</td></tr>
<tr><td>Carretera convencional</td><td>90 km/h</td><td>45 km/h</td></tr>
<tr><td>Vía urbana general</td><td>50 km/h</td><td>25 km/h</td></tr>
<tr><td>Calle 1 carril por sentido</td><td>30 km/h</td><td>—</td></tr>
<tr><td>Plataforma única</td><td>20 km/h</td><td>—</td></tr>
</tbody></table>
<div class="tv-table-title">ALCOHOL</div>
<table class="tv-table"><thead><tr><th>Conductor</th><th>Límite aire</th><th>Límite sangre</th></tr></thead><tbody>
<tr><td>General (+2 años)</td><td>0,25 mg/l</td><td>0,5 g/l</td></tr>
<tr><td>Novel / Profesional</td><td>0,15 mg/l</td><td>0,3 g/l</td></tr>
<tr><td>Delito penal</td><td>&gt;0,60 mg/l</td><td>&gt;1,2 g/l</td></tr>
</tbody></table>
<div class="tv-table-title">PUNTOS Y VIGENCIA</div>
<table class="tv-table"><thead><tr><th>Concepto</th><th>Valor</th></tr></thead><tbody>
<tr><td>Puntos iniciales (novel/recuperado)</td><td>8 puntos</td></tr>
<tr><td>Puntos generales (tras 2 años)</td><td>12 puntos</td></tr>
<tr><td>Puntos máximos posibles</td><td>15 puntos</td></tr>
<tr><td>Recuperación parcial con curso</td><td>Hasta 6 puntos (1 vez cada 2 años)</td></tr>
<tr><td>Espera tras pérdida total (general)</td><td>6 meses</td></tr>
<tr><td>Espera tras pérdida total (profesional)</td><td>3 meses</td></tr>
<tr><td>Permiso B hasta 65 años</td><td>10 años</td></tr>
<tr><td>Permiso B desde 65 años</td><td>5 años</td></tr>
<tr><td>Renovación anticipada</td><td>Hasta 3 meses antes</td></tr>
</tbody></table>
<div class="tv-table-title">DISTANCIAS Y TIEMPOS CLAVE</div>
<table class="tv-table"><thead><tr><th>Concepto</th><th>Valor</th></tr></thead><tbody>
<tr><td>Distancia mínima vehículos &gt;10 m en autopista</td><td>50 metros</td></tr>
<tr><td>Distancia detención en paso a nivel</td><td>3 metros mínimo</td></tr>
<tr><td>Distancia para cambiar largas a cortas</td><td>200 metros</td></tr>
<tr><td>Separación lateral al adelantar ciclistas</td><td>1,5 metros</td></tr>
<tr><td>Parada máxima sin abandonar el vehículo</td><td>2 minutos</td></tr>
<tr><td>Distancia mínima a intersección para aparcar</td><td>5 metros</td></tr>
<tr><td>Visibilidad máxima con antiniebla obligatoria</td><td>&lt;50 metros</td></tr>
<tr><td>Velocidad máxima con &lt;50 m de visibilidad</td><td>50 km/h en cualquier vía</td></tr>
</tbody></table>
<div class="tv-table-title">ITV</div>
<table class="tv-table"><thead><tr><th>Antigüedad</th><th>Frecuencia</th></tr></thead><tbody>
<tr><td>0 a 4 años</td><td>Exenta</td></tr>
<tr><td>4 a 10 años</td><td>Cada 2 años</td></tr>
<tr><td>Más de 10 años</td><td>Anual</td></tr>
</tbody></table>
<div class="tv-table-title">INFRACCIONES — PRESCRIPCIÓN</div>
<table class="tv-table"><thead><tr><th>Tipo</th><th>Prescripción</th></tr></thead><tbody>
<tr><td>Leve</td><td>3 meses</td></tr>
<tr><td>Grave</td><td>6 meses</td></tr>
<tr><td>Muy grave</td><td>1 año</td></tr>
</tbody></table>
<div class="tv-trap">⚠️ Estos son los datos que aparecen directamente como preguntas en el examen DGT. Si alguno no te sale automático, vuelve al módulo correspondiente y estúdialo en contexto.</div>`}
]}
];
