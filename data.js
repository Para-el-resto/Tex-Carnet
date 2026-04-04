// ============================================================
//  TEX // OPERACIÓN PERMISO B — data.js
//  Preguntas basadas en el Manual del Conductor DGT oficial
//  y la normativa vigente (RGC y LSV actualizados a 2024)
// ============================================================

const TOPICS = [
  { id: 'velocidad',      name: 'Velocidades',              icon: '⚡', color: '#c89b3c' },
  { id: 'senales',        name: 'Señales de Tráfico',       icon: '▲', color: '#4fc3a1' },
  { id: 'normas',         name: 'Normas de Circulación',    icon: '◈', color: '#c89b3c' },
  { id: 'preferencia',    name: 'Preferencia de Paso',      icon: '◆', color: '#4fc3a1' },
  { id: 'adelantamiento', name: 'Adelantamientos',          icon: '↗', color: '#c89b3c' },
  { id: 'alumbrado',      name: 'Alumbrado',                icon: '◉', color: '#4fc3a1' },
  { id: 'distancias',     name: 'Distancias de Seguridad',  icon: '↔', color: '#c89b3c' },
  { id: 'alcohol',        name: 'Alcohol y Drogas',         icon: '⊗', color: '#e05252' },
  { id: 'documentacion',  name: 'Documentación',            icon: '▣', color: '#4fc3a1' },
  { id: 'seguridad',      name: 'Seguridad Vial',           icon: '◎', color: '#c89b3c' },
];

const QUESTIONS = [

  // ── VELOCIDADES ──────────────────────────────────────────
  {
    id: 1, topic: 'velocidad',
    q: '¿Cuál es la velocidad máxima permitida en autopista para un turismo sin remolque?',
    opts: ['100 km/h', '110 km/h', '120 km/h', '130 km/h'],
    correct: 2,
    exp: 'En autopistas y autovías la velocidad máxima para turismos es 120 km/h según el Reglamento General de Circulación.'
  },
  {
    id: 2, topic: 'velocidad',
    q: '¿Cuál es la velocidad máxima en carretera convencional fuera de poblado para un turismo?',
    opts: ['80 km/h', '90 km/h', '100 km/h', '110 km/h'],
    correct: 1,
    exp: 'Desde la reforma de 2019, la velocidad máxima en carreteras convencionales fuera de poblado es 90 km/h para turismos.'
  },
  {
    id: 3, topic: 'velocidad',
    q: '¿Cuál es la velocidad máxima general en vías urbanas?',
    opts: ['30 km/h', '40 km/h', '50 km/h', '60 km/h'],
    correct: 2,
    exp: 'La velocidad máxima general en vías urbanas es 50 km/h, salvo señalización específica que indique otro límite.'
  },
  {
    id: 4, topic: 'velocidad',
    q: 'En una calle urbana con un solo carril por sentido, ¿cuál es la velocidad máxima?',
    opts: ['20 km/h', '30 km/h', '40 km/h', '50 km/h'],
    correct: 1,
    exp: 'Desde la reforma urbana de 2021, en calles con un solo carril por sentido la velocidad máxima es 30 km/h.'
  },
  {
    id: 5, topic: 'velocidad',
    q: 'En una calle de plataforma única (peatones y vehículos comparten calzada), ¿cuál es la velocidad máxima?',
    opts: ['10 km/h', '20 km/h', '30 km/h', '5 km/h'],
    correct: 1,
    exp: 'En calles de plataforma única o de coexistencia la velocidad máxima es 20 km/h según la reforma de 2021.'
  },
  {
    id: 6, topic: 'velocidad',
    q: '¿Cuál es la velocidad mínima que debe mantener un vehículo en autopista?',
    opts: ['40 km/h', '50 km/h', '60 km/h', '70 km/h'],
    correct: 2,
    exp: 'La velocidad mínima en autopista es 60 km/h, equivalente a la mitad de la máxima permitida (120 km/h).'
  },
  {
    id: 7, topic: 'velocidad',
    q: '¿Cuál es la velocidad máxima para un turismo que arrastra un remolque de más de 750 kg en autopista?',
    opts: ['80 km/h', '90 km/h', '100 km/h', '120 km/h'],
    correct: 2,
    exp: 'Los turismos con remolques de más de 750 kg de masa máxima autorizada tienen velocidad máxima de 100 km/h en autopistas y autovías.'
  },
  {
    id: 8, topic: 'velocidad',
    q: 'Está nevando y la calzada está resbaladiza. ¿Cuál es el límite de velocidad aplicable?',
    opts: ['El límite de la vía no cambia, pero debe adaptar la velocidad', '80 km/h en cualquier vía', '50% del límite de la vía', '60 km/h en cualquier vía'],
    correct: 0,
    exp: 'Los límites fijos no cambian automáticamente por meteorología, pero el conductor está obligado a adaptar su velocidad a las circunstancias de la vía, el vehículo y la visibilidad.'
  },
  {
    id: 9, topic: 'velocidad',
    q: 'En una vía urbana señalizada con 50 km/h, ¿puede circular a 55 km/h si la vía está libre?',
    opts: ['Sí, existe un margen de tolerancia de 10 km/h', 'Sí, si no hay peatones', 'No, el límite es máximo y no debe superarse', 'Sí, si la visibilidad es buena'],
    correct: 2,
    exp: 'Los límites de velocidad son máximos absolutos. No existe ningún margen legal para superarlos, independientemente de las condiciones de la vía.'
  },
  {
    id: 10, topic: 'velocidad',
    q: 'Una vía está señalizada con 80 km/h mediante panel variable. ¿Es ese el límite máximo aplicable?',
    opts: ['No, el límite del panel es orientativo', 'Sí, los paneles variables de limitación de velocidad son de obligado cumplimiento', 'Solo si la DGT lo confirma por radio', 'Solo de noche'],
    correct: 1,
    exp: 'Las señales de velocidad en paneles variables tienen el mismo valor legal que las señales fijas. Son de obligado cumplimiento.'
  },

  // ── SEÑALES ──────────────────────────────────────────────
  {
    id: 11, topic: 'senales',
    q: '¿Qué forma tiene la señal de STOP?',
    opts: ['Triangular', 'Circular', 'Octogonal', 'Cuadrada'],
    correct: 2,
    exp: 'La señal de STOP es la única octogonal (8 lados) del código de circulación. Es roja con letras blancas y obliga a detenerse y ceder el paso.'
  },
  {
    id: 12, topic: 'senales',
    q: '¿Qué indica una señal triangular con borde rojo?',
    opts: ['Prohibición', 'Peligro o advertencia', 'Obligación', 'Indicación de servicios'],
    correct: 1,
    exp: 'Las señales triangulares con borde rojo son señales de peligro. Advierten de un riesgo próximo en la calzada.'
  },
  {
    id: 13, topic: 'senales',
    q: '¿Qué significa una señal circular con borde rojo y fondo blanco?',
    opts: ['Obligación', 'Peligro', 'Prohibición o restricción', 'Indicación'],
    correct: 2,
    exp: 'Las señales circulares con borde rojo sobre fondo blanco indican prohibición o restricción, como un límite de velocidad o prohibición de adelantar.'
  },
  {
    id: 14, topic: 'senales',
    q: '¿Qué indica una señal circular de fondo azul?',
    opts: ['Prohibición', 'Peligro', 'Obligación', 'Información general'],
    correct: 2,
    exp: 'Las señales circulares de fondo azul son señales de obligación. Indican una conducta que el conductor debe seguir obligatoriamente.'
  },
  {
    id: 15, topic: 'senales',
    q: 'La señal "Ceda el paso" (triángulo invertido), ¿obliga siempre a detenerse?',
    opts: ['Sí, siempre', 'No, solo obliga a ceder el paso sin detenerse si no hay vehículos', 'Sí, durante 3 segundos', 'No, es solo indicativa'],
    correct: 1,
    exp: 'La señal de Ceda el paso obliga a reducir la velocidad y ceder preferencia a los vehículos de la vía a la que se accede, pero no a detenerse si no hay vehículos.'
  },
  {
    id: 16, topic: 'senales',
    q: '¿Cuál es la diferencia fundamental entre STOP y Ceda el paso?',
    opts: ['Ninguna, ambas obligan a detenerse', 'STOP obliga a detenerse siempre; Ceda el paso solo si hay tráfico', 'Ceda el paso es más restrictivo', 'STOP solo aplica de noche'],
    correct: 1,
    exp: 'La señal STOP obliga a detenerse siempre, aunque no haya tráfico. Ceda el paso solo obliga a parar si hay vehículos con prioridad que puedan verse afectados.'
  },
  {
    id: 17, topic: 'senales',
    q: '¿Qué indica una línea longitudinal discontinua en el centro de la calzada?',
    opts: ['Prohibición de adelantar', 'Permite adelantar o cambiar de carril si hay visibilidad suficiente', 'Carril exclusivo para autobuses', 'Límite de velocidad'],
    correct: 1,
    exp: 'La línea longitudinal discontinua central permite adelantar o cambiar de carril cuando las condiciones de circulación y la visibilidad lo permitan.'
  },
  {
    id: 18, topic: 'senales',
    q: '¿Qué indica una línea longitudinal continua en el centro de la calzada?',
    opts: ['Puede cruzarse si hay visibilidad', 'No puede cruzarse ni circular sobre ella', 'Solo puede cruzarse para adelantar', 'Delimita zona peatonal'],
    correct: 1,
    exp: 'La línea longitudinal continua no puede cruzarse ni circular sobre ella. Prohíbe el cambio de carril y el adelantamiento cruzando esa línea.'
  },
  {
    id: 19, topic: 'senales',
    q: '¿Qué prioridad tienen las indicaciones del agente de tráfico?',
    opts: ['Igual que las señales verticales', 'Inferior a las señales verticales', 'Superior a cualquier señal o norma de circulación', 'Solo aplican si hay señal horizontal'],
    correct: 2,
    exp: 'Las indicaciones del agente de tráfico prevalecen sobre cualquier señal vertical, horizontal, semáforo o norma de circulación.'
  },
  {
    id: 20, topic: 'senales',
    q: '¿Qué indica un semáforo con luz ámbar fija?',
    opts: ['Paso permitido con precaución', 'Detención obligatoria si se puede hacer con seguridad', 'Vía libre', 'Paso permitido para peatones'],
    correct: 1,
    exp: 'La luz ámbar fija obliga a detenerse si puede hacerse con seguridad. Solo se puede pasar si la detención supone un riesgo mayor que continuar.'
  },
  {
    id: 21, topic: 'senales',
    q: 'Una señal rectangular de fondo azul con una "P" blanca indica:',
    opts: ['Prohibición de aparcar', 'Estacionamiento permitido', 'Paso de peatones', 'Parada de autobús'],
    correct: 1,
    exp: 'La señal rectangular de fondo azul con "P" blanca indica que el estacionamiento está permitido, generalmente con las condiciones detalladas en la propia señal.'
  },
  {
    id: 22, topic: 'senales',
    q: '¿Qué significa la señal circular de fondo azul con flecha blanca curva hacia la derecha?',
    opts: ['Recomendación de girar a la derecha', 'Prohibición de girar a la izquierda', 'Obligación de girar a la derecha', 'Peligro: curva a la derecha'],
    correct: 2,
    exp: 'Las señales circulares de fondo azul son de obligación. Una flecha indicando dirección obliga al conductor a seguir esa dirección sin excepciones.'
  },
  {
    id: 23, topic: 'senales',
    q: '¿Qué indica la señal de "Fin de prohibición de adelantamiento"?',
    opts: ['Inicio de prohibición de adelantar', 'Queda levantada la prohibición de adelantar', 'Inicio de zona de obras', 'Obligación de circular por la derecha'],
    correct: 1,
    exp: 'La señal de fin de prohibición de adelantamiento (círculo barrado con líneas oblicuas) indica que la restricción de adelantar deja de tener efecto a partir de ese punto.'
  },
  {
    id: 24, topic: 'senales',
    q: 'La señal de "Calzada con prioridad" (fondo amarillo con flecha negra), ¿qué indica?',
    opts: ['Que hay señal de STOP próxima', 'Que esa vía tiene prioridad en las intersecciones siguientes', 'Que la calzada tiene dos carriles', 'Que hay un adelantamiento próximo'],
    correct: 1,
    exp: 'La señal de calzada con prioridad indica que la vía por la que se circula tiene preferencia de paso en las intersecciones que se encuentren, hasta que aparezca la señal de fin de prioridad.'
  },
  {
    id: 25, topic: 'senales',
    q: 'Una señal triangular con el símbolo de un tren y unas vías indica:',
    opts: ['Prohibición de cruzar las vías', 'Peligro: paso a nivel próximo', 'Obligación de detenerse', 'Zona de obras ferroviarias'],
    correct: 1,
    exp: 'Es una señal de peligro (triangular) que advierte de la proximidad de un paso a nivel. El conductor debe extremar la precaución y reducir la velocidad.'
  },

  // ── NORMAS DE CIRCULACIÓN ─────────────────────────────────
  {
    id: 26, topic: 'normas',
    q: '¿Por qué carril debe circular normalmente un vehículo en una vía con varios carriles por sentido?',
    opts: ['Por el carril central', 'Por el carril izquierdo', 'Por el carril derecho', 'Por cualquier carril libremente'],
    correct: 2,
    exp: 'El conductor debe circular por el carril de la derecha como norma general. Los carriles de la izquierda se usan para adelantar o cuando el tráfico lo justifique.'
  },
  {
    id: 27, topic: 'normas',
    q: '¿Está permitido usar el teléfono móvil con auricular mientras se conduce?',
    opts: ['Sí, con cualquier auricular', 'Sí, solo con auricular de un oído', 'No, está prohibido en cualquier caso incluyendo auriculares', 'Sí, si es de manos libres portátil'],
    correct: 2,
    exp: 'Desde 2022, el uso del teléfono móvil al volante está prohibido en cualquier caso, incluidos auriculares no integrados en el vehículo. Solo están permitidos los sistemas integrados de fábrica sin manipulación manual.'
  },
  {
    id: 28, topic: 'normas',
    q: '¿Es obligatorio llevar chaleco reflectante en el vehículo?',
    opts: ['No, es recomendable pero no obligatorio', 'Sí, dentro del habitáculo (no en el maletero)', 'Sí, pero puede guardarse en el maletero', 'Solo en vehículos de más de 3.500 kg'],
    correct: 1,
    exp: 'Es obligatorio llevar al menos un chaleco reflectante dentro del habitáculo del vehículo (no en el maletero), para poder ponérselo antes de salir en caso de avería o accidente.'
  },
  {
    id: 29, topic: 'normas',
    q: '¿Cuántos triángulos de emergencia son obligatorios en un turismo en 2024?',
    opts: ['Uno', 'Dos', 'Tres', 'No son obligatorios, han sido sustituidos por el dispositivo V-16'],
    correct: 3,
    exp: 'Desde julio de 2021 los triángulos de emergencia no son obligatorios para turismos. Han sido sustituidos por el dispositivo V-16 (luz naranja homologada), aunque los triángulos pueden seguir usándose voluntariamente.'
  },
  {
    id: 30, topic: 'normas',
    q: 'En una rotonda, ¿quién tiene preferencia de paso?',
    opts: ['Quien llega a la rotonda', 'Los vehículos que ya circulan dentro de la rotonda', 'Quien lleva más tiempo esperando', 'Los vehículos pesados'],
    correct: 1,
    exp: 'Los vehículos que ya circulan dentro de la rotonda tienen preferencia sobre los que pretenden acceder a ella, salvo señal que indique lo contrario.'
  },
  {
    id: 31, topic: 'normas',
    q: '¿Es obligatorio usar el cinturón de seguridad en vías urbanas?',
    opts: ['No, solo en vías interurbanas', 'Sí, en todas las vías y para todos los ocupantes', 'Solo para el conductor', 'Solo en vías con límite superior a 50 km/h'],
    correct: 1,
    exp: 'El uso del cinturón de seguridad es obligatorio para todos los ocupantes en todas las vías, tanto urbanas como interurbanas, sin excepciones de velocidad o distancia.'
  },
  {
    id: 32, topic: 'normas',
    q: '¿Qué debe hacer al entrar en un túnel?',
    opts: ['Encender las luces largas', 'Encender las luces de posición solamente', 'Encender las luces de cruce (cortas)', 'No es necesario si el túnel está iluminado'],
    correct: 2,
    exp: 'Al entrar en un túnel es obligatorio encender las luces de cruce (luces cortas), independientemente de si el túnel está iluminado artificialmente o no.'
  },
  {
    id: 33, topic: 'normas',
    q: 'Su vehículo se avería en una autopista. ¿Qué debe hacer primero?',
    opts: ['Salir del vehículo y colocar balizas', 'Intentar llegar a un área de servicio', 'Ponerse el chaleco ANTES de salir del vehículo y luego señalizar', 'Llamar a la grúa sin salir del coche'],
    correct: 2,
    exp: 'Ante una avería en autopista, primero debe ponerse el chaleco reflectante antes de salir del vehículo, luego señalizar correctamente y alejarse por el lateral derecho lo más posible de la calzada.'
  },
  {
    id: 34, topic: 'normas',
    q: '¿A qué distancia mínima de las vías del tren debe detenerse el vehículo en un paso a nivel?',
    opts: ['1 metro', '3 metros', '5 metros', '10 metros'],
    correct: 1,
    exp: 'El conductor debe detenerse a un mínimo de 3 metros de las vías del tren, tanto si hay barreras como señal de STOP o Ceda el paso.'
  },
  {
    id: 35, topic: 'normas',
    q: '¿Está permitido circular marcha atrás en autopistas o autovías?',
    opts: ['Sí, para cortas distancias', 'Solo para salir de un carril de incorporación', 'No, está terminantemente prohibido', 'Solo si hay agente de tráfico que lo autorice'],
    correct: 2,
    exp: 'Circular marcha atrás en autopistas y autovías está totalmente prohibido. En caso de haber tomado una salida incorrecta, debe continuar hasta la siguiente salida o área de servicio.'
  },

  // ── PREFERENCIA DE PASO ───────────────────────────────────
  {
    id: 36, topic: 'preferencia',
    q: 'En una intersección sin señalizar, ¿quién tiene preferencia de paso?',
    opts: ['El vehículo que lleva más velocidad', 'El vehículo que viene por la derecha', 'El que lleva más tiempo esperando', 'El vehículo más grande'],
    correct: 1,
    exp: 'En intersecciones sin señalización específica, tiene preferencia el vehículo que se aproxima por la derecha (norma de la derecha).'
  },
  {
    id: 37, topic: 'preferencia',
    q: '¿Tienen preferencia los vehículos de emergencia con sirena y luces activadas?',
    opts: ['Sí, siempre tienen preferencia absoluta', 'Solo en vías interurbanas', 'Solo si vienen por la derecha', 'No, deben respetar los semáforos'],
    correct: 0,
    exp: 'Los vehículos de emergencia (ambulancias, policía, bomberos) con señales acústicas y luminosas activadas tienen preferencia absoluta. El resto de conductores deben facilitarles el paso.'
  },
  {
    id: 38, topic: 'preferencia',
    q: '¿Tiene el autobús urbano preferencia para incorporarse al tráfico desde una parada?',
    opts: ['Sí, siempre sin excepción', 'Sí, cuando indica la maniobra y las condiciones de seguridad lo permiten', 'No, debe esperar un hueco como cualquier vehículo', 'Solo en zona señalizada'],
    correct: 1,
    exp: 'El autobús de transporte urbano tiene preferencia para incorporarse al tráfico desde una parada, siempre que indique la maniobra con intermitente y no ponga en peligro a otros usuarios.'
  },
  {
    id: 39, topic: 'preferencia',
    q: '¿Tienen los peatones preferencia siempre sobre los vehículos en cualquier punto de la vía?',
    opts: ['Sí, siempre', 'Solo en pasos de peatones señalizados', 'Solo en calles peatonales', 'Solo si hay semáforo verde para ellos'],
    correct: 1,
    exp: 'Los peatones tienen prioridad sobre los vehículos únicamente en los pasos de peatones señalizados. Fuera de ellos, deben ceder el paso a los vehículos que circulan por la calzada.'
  },
  {
    id: 40, topic: 'preferencia',
    q: 'Un vehículo sale de un garaje particular hacia la vía pública. ¿Quién tiene preferencia?',
    opts: ['El vehículo que sale, ya que maniobra', 'Los vehículos y peatones que circulan por la vía pública', 'El primero que llega a la intersección', 'Depende del horario'],
    correct: 1,
    exp: 'Los vehículos que salen de garajes, vías de servicio, caminos particulares o similares deben ceder el paso a todos los vehículos y peatones que circulen por la vía pública a la que acceden.'
  },
  {
    id: 41, topic: 'preferencia',
    q: 'Al incorporarse a una autopista por el carril de aceleración, ¿quién cede el paso?',
    opts: ['Los vehículos que ya circulan en la autopista', 'El vehículo que se incorpora', 'El que va más despacio', 'El que lleva menos tiempo en la vía'],
    correct: 1,
    exp: 'Al incorporarse a una autopista o autovía, el vehículo que se incorpora debe ceder el paso a los que ya circulan por ella, adaptando su velocidad para encontrar un hueco seguro.'
  },
  {
    id: 42, topic: 'preferencia',
    q: 'En un cruce señalizado con vía principal, ¿quién tiene preferencia?',
    opts: ['Siempre el de la derecha', 'El de la vía principal', 'El que lleva mayor velocidad', 'El primero en llegar'],
    correct: 1,
    exp: 'Si una vía está señalizada como vía principal, los vehículos que circulan por ella tienen preferencia sobre los que acceden desde las vías secundarias, independientemente de la dirección.'
  },
  {
    id: 43, topic: 'preferencia',
    q: '¿En qué situación tiene el ciclista preferencia sobre un turismo?',
    opts: ['Siempre, como usuario vulnerable', 'En los pasos para ciclistas señalizados', 'Solo en carriles bici', 'Solo si lleva casco'],
    correct: 1,
    exp: 'Los ciclistas tienen preferencia en los pasos para bicicletas señalizados, equivalentes a los pasos de peatones pero para ciclos. En intersecciones normales se aplican las mismas normas que para vehículos a motor.'
  },

  // ── ADELANTAMIENTOS ───────────────────────────────────────
  {
    id: 44, topic: 'adelantamiento',
    q: '¿Por qué lado debe realizarse el adelantamiento?',
    opts: ['Por la derecha siempre', 'Por la izquierda, salvo excepciones', 'Por cualquier lado si hay espacio', 'Por la derecha en vías urbanas'],
    correct: 1,
    exp: 'El adelantamiento debe realizarse por la izquierda, salvo cuando el conductor a adelantar haya indicado que va a girar a la izquierda, en cuyo caso puede adelantarse por la derecha.'
  },
  {
    id: 45, topic: 'adelantamiento',
    q: '¿Está permitido adelantar en un paso de peatones?',
    opts: ['Sí, si no hay peatones cruzando', 'No, está prohibido en pasos de peatones y sus inmediaciones', 'Solo si la línea central es discontinua', 'Solo en vías urbanas'],
    correct: 1,
    exp: 'Está prohibido adelantar en los pasos de peatones y sus inmediaciones, independientemente de si hay peatones cruzando o no en ese momento.'
  },
  {
    id: 46, topic: 'adelantamiento',
    q: '¿Qué debe hacer el conductor que va a ser adelantado?',
    opts: ['Acelerar para no ser adelantado', 'No aumentar la velocidad y facilitar la maniobra', 'Ceder el carril derecho al que adelanta', 'Encender las luces de emergencia'],
    correct: 1,
    exp: 'El conductor que va a ser adelantado debe facilitar la maniobra no aumentando su velocidad. No está obligado a reducirla salvo que sea necesario para dar seguridad.'
  },
  {
    id: 47, topic: 'adelantamiento',
    q: '¿Está prohibido adelantar en curvas con visibilidad reducida?',
    opts: ['No, si hay línea discontinua', 'Sí, siempre está prohibido adelantar en curvas sin visibilidad', 'Solo en curvas a la derecha', 'Solo si supera 90 km/h'],
    correct: 1,
    exp: 'Está prohibido adelantar en curvas y cambios de rasante con visibilidad reducida, ya que el riesgo de colisión frontal es muy elevado.'
  },
  {
    id: 48, topic: 'adelantamiento',
    q: '¿Está permitido adelantar a un vehículo que ya está adelantando a otro?',
    opts: ['Sí, si hay carril suficiente', 'No, no se puede adelantar a un vehículo que ya está en maniobra de adelantamiento', 'Solo en autopista con 3 carriles', 'Solo si usas el carril de emergencia'],
    correct: 1,
    exp: 'No está permitido adelantar a un vehículo que ya esté adelantando. Obligaría a invadir el carril contrario con varios vehículos simultáneamente, lo que es extremadamente peligroso.'
  },
  {
    id: 49, topic: 'adelantamiento',
    q: '¿En qué situación está permitido adelantar por la derecha?',
    opts: ['Cuando el vehículo de delante va a girar a la izquierda y ha señalizado', 'Siempre que haya dos carriles libres', 'En autopistas con más de 3 carriles', 'Nunca está permitido'],
    correct: 0,
    exp: 'Está permitido adelantar por la derecha cuando el conductor del vehículo que precede ha indicado que va a girar a la izquierda y se ha desplazado hacia ese lado para preparar la maniobra.'
  },
  {
    id: 50, topic: 'adelantamiento',
    q: '¿A qué distancia lateral mínima debe separarse de un ciclista al adelantarle?',
    opts: ['50 cm', '1 metro', '1,5 metros', '2 metros'],
    correct: 2,
    exp: 'Al adelantar a un ciclista, el vehículo debe guardar una separación lateral mínima de 1,5 metros. Para garantizarlo, generalmente es necesario invadir parcialmente el carril contrario.'
  },
  {
    id: 51, topic: 'adelantamiento',
    q: 'Antes de iniciar un adelantamiento, ¿qué debe comprobar el conductor?',
    opts: ['Solo que no haya vehículos detrás', 'Que hay visibilidad y distancia suficiente, que ningún vehículo viene de frente y que puede terminar la maniobra con seguridad', 'Solo que la línea sea discontinua', 'Que el vehículo de delante no vaya a girar'],
    correct: 1,
    exp: 'Antes de adelantar el conductor debe: tener suficiente visibilidad, asegurarse de que ningún vehículo viene en sentido contrario, y confirmar que puede completar la maniobra sin poner en peligro a nadie.'
  },

  // ── ALUMBRADO ─────────────────────────────────────────────
  {
    id: 52, topic: 'alumbrado',
    q: '¿Cuándo deben usarse las luces largas (de carretera)?',
    opts: ['En cualquier vía no iluminada', 'En carreteras no iluminadas fuera de poblado, cuando no se deslumbre a otros', 'Solo en autopistas', 'Siempre de noche'],
    correct: 1,
    exp: 'Las luces largas se usan en carreteras sin iluminación fuera de poblado cuando no hay riesgo de deslumbrar a otros conductores. Deben cambiarse a cortas al cruzarse con otro vehículo o seguirle de cerca.'
  },
  {
    id: 53, topic: 'alumbrado',
    q: '¿A qué distancia mínima deben cambiarse las luces largas a cortas al encontrar un vehículo de frente?',
    opts: ['100 metros', '150 metros', '200 metros', '300 metros'],
    correct: 2,
    exp: 'Deben cambiarse las luces largas a cortas a una distancia mínima de 200 metros del vehículo que viene en sentido contrario, para evitar deslumbrarlo.'
  },
  {
    id: 54, topic: 'alumbrado',
    q: '¿Cuándo se usan las luces de niebla delanteras?',
    opts: ['Siempre de noche en carretera', 'Solo cuando hay niebla, lluvia intensa o nieve que reduzca notablemente la visibilidad', 'Pueden usarse siempre como refuerzo', 'Solo en autopistas'],
    correct: 1,
    exp: 'Las luces antiniebla delanteras solo deben usarse cuando las condiciones meteorológicas reduzcan notablemente la visibilidad. Usarlas sin necesidad puede deslumbrar a otros conductores y está sancionado.'
  },
  {
    id: 55, topic: 'alumbrado',
    q: '¿Está permitido circular de noche solo con luces de posición?',
    opts: ['Sí, si la vía está bien iluminada', 'Sí, a menos de 50 km/h', 'No, es obligatorio usar como mínimo las luces de cruce (cortas)', 'Sí, solo en ciudad'],
    correct: 2,
    exp: 'Las luces de posición no son suficientes para circular. De noche o con visibilidad reducida es obligatorio usar como mínimo las luces de cruce (luces cortas).'
  },
  {
    id: 56, topic: 'alumbrado',
    q: '¿Cuándo deben usarse las luces de emergencia (4 intermitentes)?',
    opts: ['Para avisar de que vas despacio', 'Para aparcar en doble fila brevemente', 'En caso de avería o situación de peligro que obligue a reducir bruscamente la velocidad o detener el vehículo', 'Para agradecer a otro conductor'],
    correct: 2,
    exp: 'Las luces de emergencia deben usarse cuando el vehículo supone un peligro para otros, por ejemplo en caso de avería, frenada de emergencia o retención inesperada. No justifican estacionamientos incorrectos.'
  },
  {
    id: 57, topic: 'alumbrado',
    q: '¿Cuándo está obligado a usar luces de cruce de día?',
    opts: ['Nunca, las luces son solo para la noche', 'Siempre fuera de poblado', 'Solo en autopistas de día', 'En caso de lluvia, niebla u otras condiciones de baja visibilidad, y en túneles'],
    correct: 3,
    exp: 'De día es obligatorio usar luces de cruce cuando las condiciones meteorológicas reducen la visibilidad (lluvia, niebla, nieve) y siempre en túneles y pasos inferiores.'
  },
  {
    id: 58, topic: 'alumbrado',
    q: '¿Está permitido usar luces de niebla traseras cuando no hay niebla?',
    opts: ['Sí, para aumentar la visibilidad del vehículo', 'No, solo cuando la visibilidad es notablemente reducida por niebla o condiciones similares', 'Sí, de noche en carretera sin iluminación', 'Sí, si también se usan las delanteras'],
    correct: 1,
    exp: 'Las luces antiniebla traseras (color rojo intenso) solo pueden usarse cuando la visibilidad sea notablemente reducida por niebla, lluvia intensa o nevada. Usarlas sin necesidad puede deslumbrar al conductor de atrás y está sancionado.'
  },
  {
    id: 59, topic: 'alumbrado',
    q: 'Si un conductor que viene de frente te deslumbra con las luces largas, ¿qué debes hacer?',
    opts: ['Poner tú también las luces largas para que las quite', 'Reducir velocidad, mirar hacia el borde derecho y no mirar directamente a las luces', 'Detenerte completamente hasta que pase', 'Acelerar para salir cuanto antes del deslumbramiento'],
    correct: 1,
    exp: 'Ante el deslumbramiento debes reducir la velocidad y dirigir la mirada hacia el borde derecho de la calzada. No debes poner las luces largas (deslumbrarías al otro) ni frenar bruscamente.'
  },

  // ── DISTANCIAS DE SEGURIDAD ───────────────────────────────
  {
    id: 60, topic: 'distancias',
    q: '¿Qué es la distancia de seguridad?',
    opts: ['La distancia mínima entre el coche y el bordillo', 'La separación suficiente con el vehículo de delante para frenar sin colisionar si frena bruscamente', 'La distancia mínima al adelantar', 'La distancia al semáforo'],
    correct: 1,
    exp: 'La distancia de seguridad es la separación mínima con el vehículo precedente que permite frenar a tiempo si este reduce bruscamente su velocidad o se detiene.'
  },
  {
    id: 61, topic: 'distancias',
    q: '¿De qué factores depende la distancia de seguridad?',
    opts: ['Solo de la velocidad', 'De la velocidad, el estado del vehículo, la vía y las condiciones meteorológicas', 'Solo del peso del vehículo', 'Del tipo de vía'],
    correct: 1,
    exp: 'La distancia de seguridad depende de la velocidad, el estado del vehículo (frenos, neumáticos), el estado de la vía y las condiciones de visibilidad y meteorológicas.'
  },
  {
    id: 62, topic: 'distancias',
    q: '¿Existe una distancia de seguridad mínima fijada legalmente en metros?',
    opts: ['Sí, 50 metros en cualquier vía', 'No, la ley exige mantener distancia suficiente adaptada a las circunstancias', 'Sí, 100 metros en autopista', 'Sí, 3 segundos exactos'],
    correct: 1,
    exp: 'La ley no fija una distancia en metros, sino que exige mantener la distancia de seguridad suficiente para poder frenar sin peligro. Esta varía según la velocidad y las condiciones.'
  },
  {
    id: 63, topic: 'distancias',
    q: 'Con lluvia intensa y calzada mojada, ¿cómo debe modificarse la distancia de seguridad?',
    opts: ['No es necesario modificarla', 'Debe aumentarse, porque la distancia de frenada aumenta', 'Puede reducirse si llevas neumáticos de verano en buen estado', 'Depende del tipo de vía'],
    correct: 1,
    exp: 'Con calzada mojada la distancia de frenada aumenta considerablemente (puede duplicarse). La distancia de seguridad debe aumentarse para mantener el mismo margen de reacción.'
  },
  {
    id: 64, topic: 'distancias',
    q: 'La regla de los "3 segundos" en la conducción, ¿a qué se refiere?',
    opts: ['Tiempo mínimo entre frenos', 'Tiempo orientativo de separación con el vehículo de delante para tener distancia de seguridad suficiente', 'Tiempo máximo para cambiar de carril', 'Tiempo de reacción ante un semáforo'],
    correct: 1,
    exp: 'La regla de los 3 segundos es una guía práctica: el vehículo de delante pasa por un punto y el tuyo debe tardar al menos 3 segundos en pasar por ese mismo punto. En condiciones adversas debe aumentarse.'
  },

  // ── ALCOHOL Y DROGAS ──────────────────────────────────────
  {
    id: 65, topic: 'alcohol',
    q: '¿Cuál es la tasa máxima de alcoholemia para conductores en general (permiso B con más de 2 años)?',
    opts: ['0,25 mg/l en aire espirado / 0,5 g/l en sangre', '0,15 mg/l en aire / 0,3 g/l en sangre', '0,50 mg/l en aire / 1,0 g/l en sangre', '0,10 mg/l en aire / 0,2 g/l en sangre'],
    correct: 0,
    exp: 'Para conductores en general la tasa máxima es 0,25 mg/l en aire espirado o 0,5 g/l en sangre. Para noveles (menos de 2 años de permiso) y profesionales el límite es 0,15 mg/l / 0,3 g/l.'
  },
  {
    id: 66, topic: 'alcohol',
    q: '¿Cuál es la tasa máxima de alcoholemia para un conductor novel (menos de 2 años de carnet)?',
    opts: ['0,25 mg/l en aire / 0,5 g/l sangre', '0,10 mg/l en aire / 0,2 g/l sangre', '0,15 mg/l en aire / 0,3 g/l sangre', 'Cero tolerancia absoluta'],
    correct: 2,
    exp: 'Los conductores noveles (menos de 2 años de permiso) tienen límite más estricto: 0,15 mg/l en aire espirado o 0,3 g/l en sangre.'
  },
  {
    id: 67, topic: 'alcohol',
    q: '¿Está obligado un conductor a someterse a la prueba de alcoholemia si un agente lo solicita?',
    opts: ['No, puede negarse sin consecuencias', 'Sí, la negativa es delito con las mismas consecuencias que dar positivo', 'Solo si ha tenido un accidente', 'Solo si ha cometido una infracción'],
    correct: 1,
    exp: 'Todo conductor está obligado a someterse a las pruebas de control de alcoholemia cuando lo solicite un agente. La negativa constituye un delito contra la seguridad vial.'
  },
  {
    id: 68, topic: 'alcohol',
    q: '¿Puede conducir si ha consumido alguna droga aunque no se sienta afectado?',
    opts: ['Sí, si solo fue una pequeña cantidad', 'No, está prohibido conducir bajo efectos de cualquier sustancia estupefaciente', 'Solo si no supera los límites legales de la DGT', 'Depende del tipo de droga'],
    correct: 1,
    exp: 'Está totalmente prohibido conducir bajo los efectos de drogas, estupefacientes o cualquier sustancia que afecte a las capacidades psicofísicas, independientemente de la cantidad consumida.'
  },
  {
    id: 69, topic: 'alcohol',
    q: '¿El alcohol en sangre se elimina más rápido si se bebe agua o café?',
    opts: ['Sí, el agua lo elimina más rápido', 'Sí, el café activa el metabolismo', 'No, solo el hígado elimina el alcohol y el tiempo es el único factor', 'Sí, el ejercicio físico lo elimina'],
    correct: 2,
    exp: 'El alcohol solo se elimina a través del metabolismo hepático. Ninguna bebida, alimento ni actividad acelera este proceso. El tiempo es el único factor real.'
  },
  {
    id: 70, topic: 'alcohol',
    q: 'Si bebes alcohol en una cena y duermes 6 horas, ¿es seguro conducir al despertar?',
    opts: ['Sí, el sueño elimina el alcohol completamente', 'No necesariamente, puede quedar alcohol en sangre dependiendo de la cantidad consumida', 'Sí, 6 horas son suficientes para cualquier cantidad', 'Solo si bebiste vino, no destilados'],
    correct: 1,
    exp: 'El alcohol puede permanecer en sangre más de 6 horas dependiendo de la cantidad consumida. Es posible dar positivo a la mañana siguiente. La única forma segura es no conducir si has bebido cantidades significativas la noche anterior.'
  },
  {
    id: 71, topic: 'alcohol',
    q: '¿Los medicamentos pueden afectar a la capacidad de conducir?',
    opts: ['No, los medicamentos recetados son seguros', 'Sí, muchos medicamentos pueden reducir los reflejos, la visión o la capacidad de atención', 'Solo los que contienen alcohol', 'Solo los analgésicos fuertes'],
    correct: 1,
    exp: 'Muchos medicamentos (antihistamínicos, ansiolíticos, antidepresivos, analgésicos fuertes) pueden afectar a la conducción. Es obligatorio consultar al médico o farmacéutico y respetar las advertencias del prospecto.'
  },
  {
    id: 72, topic: 'alcohol',
    q: '¿Qué sanción conlleva conducir con una tasa entre 0,25 y 0,50 mg/l en aire espirado (conductor general)?',
    opts: ['Infracción leve, multa de 100€', 'Infracción grave, multa de 500€ y pérdida de 4 puntos', 'Delito penal con posible prisión', 'Infracción muy grave, multa de 1.000€'],
    correct: 1,
    exp: 'Conducir con tasa entre 0,25 y 0,50 mg/l (en conductores generales) es una infracción grave que conlleva multa de 500€ y pérdida de 4 puntos del permiso.'
  },

  // ── DOCUMENTACIÓN ─────────────────────────────────────────
  {
    id: 73, topic: 'documentacion',
    q: '¿Qué documentos debe llevar siempre un conductor?',
    opts: ['Solo el permiso de conducir', 'Permiso de conducir, permiso de circulación y acreditación del seguro obligatorio', 'Permiso de circulación e ITV en vigor', 'Todo lo anterior más el DNI'],
    correct: 1,
    exp: 'El conductor debe llevar: permiso de conducir, permiso de circulación del vehículo y acreditación del seguro obligatorio (tarjeta verde). El DNI no es obligatorio en el vehículo aunque sí aconsejable.'
  },
  {
    id: 74, topic: 'documentacion',
    q: '¿Con cuántos puntos se obtiene el permiso de conducir clase B por primera vez en España?',
    opts: ['8 puntos', '10 puntos', '12 puntos', '15 puntos'],
    correct: 0,
    exp: 'Al obtener el permiso por primera vez se asignan 8 puntos (período de prueba de 2 años). Tras superar los 2 años sin infracciones graves, se amplía a 12 puntos.'
  },
  {
    id: 75, topic: 'documentacion',
    q: '¿Cuántos puntos tiene un conductor con más de 2 años de experiencia y sin infracciones?',
    opts: ['8 puntos', '10 puntos', '12 puntos', '15 puntos'],
    correct: 2,
    exp: 'Un conductor con más de 2 años de antigüedad del permiso y sin infracciones dispone del saldo máximo de 12 puntos.'
  },
  {
    id: 76, topic: 'documentacion',
    q: '¿Cada cuánto tiempo debe pasar la ITV un turismo de entre 4 y 10 años de antigüedad?',
    opts: ['Cada año', 'Cada 2 años', 'Cada 4 años', 'Cada 3 años'],
    correct: 1,
    exp: 'Un turismo de entre 4 y 10 años debe pasar la ITV cada 2 años. A partir de los 10 años, la periodicidad es anual. Los primeros 4 años están exentos.'
  },
  {
    id: 77, topic: 'documentacion',
    q: '¿Es obligatorio el seguro del vehículo en España?',
    opts: ['No, es voluntario', 'Sí, el seguro de responsabilidad civil obligatoria es obligatorio para circular', 'Solo para vehículos de más de 5 años', 'Solo en autopistas'],
    correct: 1,
    exp: 'El seguro de responsabilidad civil de suscripción obligatoria (SOA) es obligatorio para cualquier vehículo que circule por la vía pública. Circular sin él es delito.'
  },

  // ── SEGURIDAD VIAL ────────────────────────────────────────
  {
    id: 78, topic: 'seguridad',
    q: '¿Hasta qué edad y talla deben los niños usar un sistema de retención infantil (SRI) homologado?',
    opts: ['Hasta los 3 años', 'Hasta los 5 años', 'Hasta los 12 años o 135 cm de altura', 'Hasta los 10 años'],
    correct: 2,
    exp: 'Los menores de 12 años con menos de 135 cm de altura deben usar obligatoriamente un SRI homologado adaptado a su peso y talla.'
  },
  {
    id: 79, topic: 'seguridad',
    q: '¿Puede un menor de 12 años viajar en el asiento delantero?',
    opts: ['No, nunca', 'Sí, siempre que use SRI adecuado', 'Sí, pero solo en vías urbanas', 'Solo si todos los asientos traseros están ocupados por otros menores con SRI'],
    correct: 3,
    exp: 'Los menores de 12 años solo pueden viajar en el asiento delantero si todos los asientos traseros están ocupados por otros menores con SRI, o si el vehículo no tiene asientos traseros. Siempre con SRI.'
  },
  {
    id: 80, topic: 'seguridad',
    q: '¿Cuál es actualmente la principal causa de accidentes de tráfico en España?',
    opts: ['El exceso de velocidad', 'Las distracciones al volante', 'El alcohol', 'El estado de las carreteras'],
    correct: 1,
    exp: 'Las distracciones al volante (uso del móvil, pantallas, conversaciones) son actualmente la principal causa de accidentes de tráfico en España.'
  },
  {
    id: 81, topic: 'seguridad',
    q: '¿Qué es la fatiga al volante y cómo afecta a la conducción?',
    opts: ['Solo afecta si se llevan más de 10 horas conduciendo', 'Reduce los reflejos, la atención y puede causar microsueños muy peligrosos', 'Solo afecta de noche', 'Se puede combatir con café hasta llegar al destino'],
    correct: 1,
    exp: 'La fatiga reduce los reflejos, la concentración y la toma de decisiones. Puede provocar microsueños (pérdidas de conciencia de pocos segundos) que son mortales a alta velocidad. Se recomienda parar cada 2 horas.'
  },
  {
    id: 82, topic: 'seguridad',
    q: '¿Qué es el punto ciego en un vehículo?',
    opts: ['La zona no iluminada por los faros', 'La zona lateral no visible en los espejos retrovisores', 'El ángulo de visión reducido por el parabrisas', 'La zona trasera no visible por el espejo interior'],
    correct: 1,
    exp: 'El punto ciego es la zona lateral que no queda visible en los espejos retrovisores. Antes de cambiar de carril es imprescindible girar la cabeza para comprobarlo directamente.'
  },
  {
    id: 83, topic: 'seguridad',
    q: '¿Cómo afecta una presión de neumáticos baja a la conducción?',
    opts: ['Solo aumenta el consumo de combustible', 'Aumenta la distancia de frenado, reduce el agarre y aumenta el riesgo de reventón', 'Una presión alta es más peligrosa que una baja', 'No afecta a la seguridad, solo al desgaste'],
    correct: 1,
    exp: 'Una presión insuficiente aumenta la distancia de frenada, reduce la estabilidad en curvas y aumenta el riesgo de reventón por sobrecalentamiento. Deben comprobarse en frío regularmente.'
  },
  {
    id: 84, topic: 'seguridad',
    q: '¿Qué hace el sistema ABS?',
    opts: ['Impide que las ruedas se bloqueen en frenada brusca, manteniendo el control de dirección', 'Aumenta la potencia de frenado automáticamente', 'Activa los frenos de emergencia de forma autónoma', 'Reduce la velocidad automáticamente en curvas'],
    correct: 0,
    exp: 'El ABS evita que las ruedas se bloqueen en una frenada de emergencia, permitiendo al conductor mantener el control de la dirección mientras frena. Con ABS, se debe pisar el freno con fuerza y mantenerlo pisado.'
  },
  {
    id: 85, topic: 'seguridad',
    q: '¿Qué debe hacer si sufre un reventón de neumático en marcha?',
    opts: ['Frenar bruscamente y girar al lado del reventón', 'Mantener la calma, sujetar el volante firmemente, soltar el acelerador progresivamente y frenar suavemente', 'Girar bruscamente en dirección contraria al reventón', 'Frenar bruscamente y detenerse de inmediato'],
    correct: 1,
    exp: 'Ante un reventón, mantén la calma, agarra firmemente el volante, no frenes bruscamente, suelta el acelerador gradualmente y frena de forma progresiva hasta detenerte en zona segura.'
  },
];

// ── Plan de estudio 8 semanas ─────────────────────────────
const STUDY_PLAN = {
  startDate: null, // Se configura al iniciar la app
  weeks: [
    { week: 1, theme: 'Normas básicas y señalización',         topics: ['normas', 'senales'],               days: ['L','M','X','J','V'] },
    { week: 2, theme: 'Velocidades y distancias de seguridad', topics: ['velocidad', 'distancias'],          days: ['L','M','X','J','V'] },
    { week: 3, theme: 'Preferencia de paso y adelantamientos', topics: ['preferencia', 'adelantamiento'],   days: ['L','M','X','J','V'] },
    { week: 4, theme: 'Alumbrado y documentación',             topics: ['alumbrado', 'documentacion'],      days: ['L','M','X','J','V'] },
    { week: 5, theme: 'Alcohol, drogas y seguridad vial',      topics: ['alcohol', 'seguridad'],            days: ['L','M','X','J','V'] },
    { week: 6, theme: 'Repaso señales y velocidades',          topics: ['senales', 'velocidad'],            days: ['L','M','X','J','V'] },
    { week: 7, theme: 'Repaso temas difíciles',                topics: ['preferencia', 'adelantamiento', 'alcohol'], days: ['L','M','X','J','V'] },
    { week: 8, theme: 'Simulacros completos DGT',              topics: null, /* all topics */               days: ['L','M','X','J','V'] },
  ]
};
