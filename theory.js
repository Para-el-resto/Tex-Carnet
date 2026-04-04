// ============================================================
//  TEX // OPERACIÓN PERMISO B — theory.js  v3
//  Lecciones completas por día — concepto + por qué + ejemplo + examen
// ============================================================

const THEORY_CONTENT = {

  week1: {
    topics: ['normas', 'senales'],
    days: [
      {
        // ── LUNES ──
        label: 'Normas básicas de circulación',
        sections: [
          {
            title: 'El carril correcto y el teléfono móvil',
            content: `<p>Tenno, el sector vial tiene reglas de circulación que aplican en todo momento. Empezamos por las más básicas — las que afectan a tu comportamiento en cada trayecto.</p>

<p><strong>CARRIL DE CIRCULACIÓN</strong></p>
<ul>
  <li><strong>Norma:</strong> En vías con varios carriles por sentido, debes circular por el carril de la derecha como norma general.</li>
  <li><strong>Por qué existe:</strong> Para mantener los carriles izquierdos libres para adelantamientos. Si todos circulan por el centro o la izquierda, no hay espacio para superar vehículos lentos.</li>
  <li><strong>Cuándo puedes usar el carril izquierdo:</strong> Para adelantar, cuando el tráfico lo justifique (atascos donde todos los carriles están ocupados), o para girar a la izquierda.</li>
  <li><strong>Trampa del examen:</strong> Si hay dos carriles y el derecho está libre, tienes que ir por él aunque vayas más rápido. El límite de velocidad no te da derecho a ocupar el carril izquierdo.</li>
</ul>

<p><strong>TELÉFONO MÓVIL AL VOLANTE</strong></p>
<ul>
  <li><strong>Norma (desde 2022):</strong> Prohibido usar el teléfono al volante en cualquier caso — incluyendo auriculares no integrados en el vehículo.</li>
  <li><strong>Qué sí está permitido:</strong> Sistemas de manos libres integrados de fábrica en el vehículo, sin manipulación manual.</li>
  <li><strong>Qué NO está permitido:</strong> Auriculares bluetooth portátiles, auriculares con cable, el móvil en el soporte tocando la pantalla, o mirar el móvil aunque esté en el soporte.</li>
  <li><strong>Sanción:</strong> Infracción grave — multa de 200€ y pérdida de 3 puntos.</li>
  <li><strong>Por qué existe:</strong> Las distracciones al volante son la primera causa de accidentes en España. A 120 km/h, mirar el móvil 2 segundos equivale a recorrer 67 metros a ciegas.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Creer que usar auriculares bluetooth está permitido. Desde 2022, cualquier auricular que no sea el sistema integrado de fábrica del vehículo está prohibido.</p>`
          },
          {
            title: 'Cinturón, chaleco y triángulos',
            content: `<p><strong>CINTURÓN DE SEGURIDAD</strong></p>
<ul>
  <li><strong>Norma:</strong> Obligatorio para todos los ocupantes del vehículo en todas las vías (urbanas e interurbanas) sin excepción.</li>
  <li><strong>Cómo llevarlo:</strong> La banda diagonal cruza el pecho (no por el cuello), la banda abdominal por las caderas (no por el abdomen). Nunca detrás de la espalda ni por debajo del brazo.</li>
  <li><strong>Por qué funciona:</strong> En un choque a 50 km/h, sin cinturón el cuerpo continúa a 50 km/h mientras el coche frena. El impacto contra el parabrisas equivale a caer desde un 4º piso.</li>
  <li><strong>Excepción:</strong> Conductores de taxi en ciudad (con pasajero), repartidores con paradas frecuentes, personas con certificado médico.</li>
</ul>

<p><strong>CHALECO REFLECTANTE</strong></p>
<ul>
  <li><strong>Norma:</strong> Obligatorio tener al menos uno dentro del habitáculo del vehículo. No en el maletero.</li>
  <li><strong>Por qué dentro del habitáculo:</strong> Si el coche se avería en autopista de noche, tienes que ponerte el chaleco ANTES de salir. Si está en el maletero, tendrías que abrir el maletero sin chaleco — exponiéndote al tráfico en el momento más peligroso.</li>
  <li><strong>Protocolo de avería en autopista:</strong> 1) Ponerse el chaleco dentro del vehículo. 2) Salir. 3) Señalizar. 4) Alejarse por la derecha.</li>
</ul>

<p><strong>TRIÁNGULOS DE EMERGENCIA / DISPOSITIVO V-16</strong></p>
<ul>
  <li><strong>Cambio normativo (julio 2021):</strong> Los triángulos de emergencia ya NO son obligatorios para turismos. Han sido sustituidos por el dispositivo V-16.</li>
  <li><strong>Qué es el V-16:</strong> Una luz naranja homologada que se coloca sobre el techo del vehículo y envía señal GPS a la DGT. Se activa desde dentro del vehículo — sin necesidad de salir a la calzada.</li>
  <li><strong>¿Puedo seguir usando triángulos?</strong> Sí, voluntariamente. No están prohibidos, simplemente ya no son obligatorios.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Poner en primer lugar "señalizar" antes que "ponerse el chaleco" al preguntar qué hacer primero en una avería. El orden correcto siempre es: chaleco primero, luego señalizar.</p>`
          }
        ]
      },
      {
        // ── MARTES ──
        label: 'Normas especiales y rotondas',
        sections: [
          {
            title: 'Rotondas, túneles y paso a nivel',
            content: `<p><strong>ROTONDAS — Preferencia y circulación</strong></p>
<ul>
  <li><strong>Norma:</strong> Los vehículos que ya circulan dentro de la rotonda tienen preferencia sobre los que intentan entrar.</li>
  <li><strong>Por qué:</strong> Si los que entran tuvieran preferencia, la rotonda se bloquearía. El sistema funciona porque los de dentro no paran y los de fuera esperan hueco.</li>
  <li><strong>Cómo incorporarse:</strong> Espera en la entrada hasta que haya un hueco suficiente. Cede el paso a todos los vehículos que circulan por el interior.</li>
  <li><strong>Señal de entrada:</strong> Triángulo invertido (Ceda el paso) o señal STOP. Depende de la intersección.</li>
  <li><strong>Cambio de carril dentro:</strong> Señaliza siempre. El carril interior es para dar más de una vuelta o salir por salidas a la izquierda; el exterior para salir en la primera o segunda salida.</li>
</ul>

<p><strong>TÚNELES — Obligaciones del conductor</strong></p>
<ul>
  <li><strong>Norma:</strong> Al entrar en un túnel es obligatorio encender las luces de cruce (cortas), esté iluminado o no.</li>
  <li><strong>Por qué:</strong> Aunque el túnel esté iluminado, tus luces hacen que los demás conductores te vean mejor — sobre todo en la entrada y salida donde el contraste de luz es máximo.</li>
  <li><strong>Velocidad:</strong> Respetar los límites indicados. En caso de incendio o accidente, mantener la calma, encender los 4 intermitentes y seguir las instrucciones del personal de emergencia.</li>
  <li><strong>Prohibido:</strong> Adelantar salvo en túneles con varios carriles por sentido y la señalización lo permite. Circular marcha atrás.</li>
</ul>

<p><strong>PASO A NIVEL — Distancias y obligaciones</strong></p>
<ul>
  <li><strong>Norma:</strong> Detenerse a mínimo 3 metros de las vías del tren cuando haya señal de STOP, semáforo en rojo o barreras bajando.</li>
  <li><strong>Por qué 3 metros:</strong> El tren necesita espacio de "reboso" — la carga puede sobresalir lateralmente varios metros.</li>
  <li><strong>Si la barrera baja mientras estás cruzando:</strong> Continúa — no pares en las vías. Si el vehículo se avería en las vías, todos los ocupantes deben alejarse en diagonal (no paralelo a las vías) y llamar al 112.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Creer que en un túnel iluminado no hace falta encender las luces. Siempre son obligatorias en cualquier túnel, independientemente de su iluminación.</p>`
          },
          {
            title: 'Marcha atrás y circulación incorrecta',
            content: `<p><strong>MARCHA ATRÁS EN AUTOPISTAS Y AUTOVÍAS</strong></p>
<ul>
  <li><strong>Norma:</strong> Terminantemente prohibida en autopistas y autovías, en cualquier circunstancia.</li>
  <li><strong>Si te has equivocado de salida:</strong> Continúa hasta la siguiente salida o área de servicio. Por muy lejos que esté, es la única opción legal y segura.</li>
  <li><strong>Sanción:</strong> Infracción muy grave — multa de hasta 500€ y pérdida de 6 puntos. Además, es uno de los principales causantes de accidentes mortales en autopistas.</li>
  <li><strong>¿Y en vías urbanas?</strong> La marcha atrás está permitida para maniobras de aparcamiento o cuando sea imprescindible, pero durante la distancia mínima necesaria y asegurándose de no obstaculizar ni poner en peligro a otros.</li>
</ul>

<p><strong>CARRILES DE ACELERACIÓN Y DECELERACIÓN</strong></p>
<ul>
  <li><strong>Carril de aceleración (incorporación):</strong> Al incorporarte a una autopista desde el carril de aceleración, tú cedes el paso a los vehículos que ya circulan. Ajusta tu velocidad para encontrar un hueco seguro.</li>
  <li><strong>Carril de deceleración (salida):</strong> Reduce la velocidad ya en el carril de deceleración, no antes de entrar en él. El carril de deceleración es para frenar, no para circular lento en el carril principal.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Confundir quién cede el paso en la incorporación a autopista. Los que ya circulan por la autopista NO tienen que ceder — el que se incorpora es quien debe ajustar su velocidad y esperar el hueco.</p>`
          }
        ]
      },
      {
        // ── MIÉRCOLES ──
        label: 'Señales verticales: tipos y significados',
        sections: [
          {
            title: 'Clasificación de señales por forma y color',
            content: `<p>Tenno, las señales verticales son el sistema de comunicación del sector vial. Antes de leer el contenido de una señal, su forma y color ya te dicen el tipo de mensaje. Aprende el código visual.</p>

<p><strong>SEÑALES DE PELIGRO</strong></p>
<ul>
  <li><strong>Forma:</strong> Triángulo con vértice hacia arriba y borde rojo.</li>
  <li><strong>Significado:</strong> Advierten de un peligro o riesgo próximo en la calzada. No prohíben ni obligan, solo advierten.</li>
  <li><strong>Ejemplos:</strong> Curva peligrosa, paso a nivel, paso de peatones, animales en la calzada, obras, hielo, niebla frecuente.</li>
  <li><strong>Qué hacer:</strong> Reducir la velocidad y aumentar la atención. No es obligatorio detenerse.</li>
</ul>

<p><strong>SEÑALES DE REGLAMENTACIÓN (prohibición/restricción/obligación)</strong></p>
<ul>
  <li><strong>Forma prohibición:</strong> Círculo con borde rojo y fondo blanco. Indican lo que NO puedes hacer: velocidad máxima, no adelantar, no girar, acceso prohibido...</li>
  <li><strong>Forma obligación:</strong> Círculo con fondo azul. Indican lo que SÍ debes hacer obligatoriamente: dirección a seguir, velocidad mínima, usar cadenas...</li>
  <li><strong>Fin de prohibición:</strong> Círculo gris con líneas oblicuas cruzando el símbolo. Indica que la restricción anterior ha terminado.</li>
</ul>

<p><strong>SEÑALES DE PRIORIDAD (especiales)</strong></p>
<ul>
  <li><strong>STOP:</strong> Octogonal (8 lados), fondo rojo, letras blancas. La única octogonal del código. Detención total obligatoria SIEMPRE, aunque la intersección esté vacía.</li>
  <li><strong>Ceda el paso:</strong> Triángulo invertido (vértice abajo), borde rojo. Obliga a ceder preferencia, pero no a detenerse si no hay vehículos con prioridad que se vean afectados.</li>
  <li><strong>Diferencia clave STOP vs Ceda:</strong> STOP = para siempre. Ceda = para solo si es necesario.</li>
</ul>

<p><strong>SEÑALES DE INDICACIÓN</strong></p>
<ul>
  <li><strong>Forma:</strong> Cuadradas o rectangulares, generalmente fondo azul o verde.</li>
  <li><strong>Significado:</strong> Informan sobre servicios, destinos, características de la vía. No prohíben ni obligan.</li>
  <li><strong>Ejemplos:</strong> Gasolinera, hospital, zona de estacionamiento, límite de población.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Confundir la señal circular de fondo azul (obligación) con la señal rectangular de fondo azul (indicación). La clave es la forma: el círculo manda, el rectángulo informa.</p>`
          },
          {
            title: 'STOP, Ceda el paso y señales de velocidad',
            content: `<p><strong>STOP — El único octogonal</strong></p>
<ul>
  <li>Es la única señal octogonal del código de tráfico. Si ves una forma de 8 lados roja, es STOP.</li>
  <li>Obliga a una detención completa antes de la línea de detención, incluso si no hay ningún vehículo en la intersección.</li>
  <li>Después de detenerse, cede el paso a los vehículos de la vía a la que te incorporas.</li>
  <li>Confundir STOP con Ceda el paso en el examen es uno de los errores más frecuentes.</li>
</ul>

<p><strong>SEÑALES DE VELOCIDAD — Las más preguntadas del examen</strong></p>
<ul>
  <li><strong>Límite de velocidad</strong> (círculo borde rojo, número dentro): Velocidad máxima absoluta. No hay margen legal para superarlo.</li>
  <li><strong>Fin de limitación</strong> (círculo gris con el número tachado): La restricción anterior ha terminado. Se recupera el límite general de la vía.</li>
  <li><strong>Velocidad mínima obligatoria</strong> (círculo azul, número blanco): Debes circular al menos a esa velocidad. Ir más lento es infracción.</li>
  <li><strong>Paneles variables:</strong> Mismo valor legal que señales fijas. Si el panel muestra 80 km/h, ese es el límite máximo aunque la señal fija diga otra cosa.</li>
</ul>

<p><strong>PRIORIDAD ENTRE SEÑALES</strong></p>
<ul>
  <li>Agente de tráfico > Semáforo > Señal vertical > Marca vial > Norma general de circulación.</li>
  <li>Un agente que indica parar prevalece sobre un semáforo en verde.</li>
  <li>Una señal de velocidad variable prevalece sobre la señal fija.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Pensar que la señal de fin de limitación (círculo gris) significa que no hay ningún límite. Significa que termina ese límite específico y vuelve a aplicarse el límite general de ese tipo de vía.</p>`
          }
        ]
      },
      {
        // ── JUEVES ──
        label: 'Semáforos y marcas viales',
        sections: [
          {
            title: 'Semáforos: cada fase y su obligación',
            content: `<p>Tenno, los semáforos son los controladores de acceso del sector vial. Cada color tiene una obligación específica — no son sugerencias.</p>

<p><strong>LUZ ROJA</strong></p>
<ul>
  <li><strong>Obligación:</strong> Detención completa ante la línea de stop.</li>
  <li><strong>Dónde parar:</strong> Antes de la línea de detención pintada en el suelo, o si no la hay, antes del semáforo o del paso de peatones.</li>
  <li><strong>¿Y si ya estoy en el cruce cuando se pone rojo?</strong> Si ya entraste con verde, termina la maniobra con seguridad. No quedes parado en el cruce.</li>
</ul>

<p><strong>LUZ ÁMBAR FIJA</strong></p>
<ul>
  <li><strong>Obligación:</strong> Detenerse antes de la línea de stop SI PUEDE HACERSE CON SEGURIDAD.</li>
  <li><strong>Cuándo puedes continuar:</strong> Si estás tan cerca del cruce que detenerte supondría un peligro (frenada brusca que puede causar colisión por detrás), puedes continuar.</li>
  <li><strong>Diferencia con el rojo:</strong> El rojo obliga a parar siempre. El ámbar obliga a parar solo si es seguro.</li>
  <li><strong>Ámbar intermitente:</strong> Situación de precaución (cruces sin semáforo normal activo). Puedes pasar con precaución, no hay detención obligatoria.</li>
</ul>

<p><strong>LUZ VERDE</strong></p>
<ul>
  <li><strong>Significado:</strong> Autorización de paso — siempre que no obstruyas la circulación transversal.</li>
  <li><strong>Importante:</strong> El verde no garantiza que el cruce esté libre. Debes asegurarte de que ningún vehículo ocupa aún el cruce antes de entrar.</li>
</ul>

<p><strong>SEMÁFORO PARA PEATONES</strong></p>
<ul>
  <li>Verde peatón: peatones pueden cruzar, vehículos ceden el paso.</li>
  <li>Rojo peatón: peatones no pueden cruzar, pero si ya han empezado, los vehículos deben dejar que terminen.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Creer que la luz ámbar SIEMPRE obliga a detenerse. Solo obliga si puede hacerse con seguridad. Si ya estás muy cerca, continuar es la respuesta correcta.</p>`
          },
          {
            title: 'Marcas viales: lo que el suelo te dice',
            content: `<p>Las marcas viales son señales pintadas en la calzada. Junto con las señales verticales, forman el sistema completo de comunicación del sector. Siempre obedece la marca más restrictiva si hay contradicción.</p>

<p><strong>LÍNEAS LONGITUDINALES (a lo largo de la calzada)</strong></p>
<ul>
  <li><strong>Línea continua blanca:</strong> No puede cruzarse ni circularse sobre ella. Prohíbe el adelantamiento que implique cruzarla y el cambio de carril.</li>
  <li><strong>Línea discontinua blanca:</strong> Puede cruzarse para adelantar o cambiar de carril cuando la visibilidad y las condiciones de seguridad lo permitan.</li>
  <li><strong>Línea continua + discontinua paralelas:</strong> Cada conductor respeta la línea de su lado. Si tienes la continua a tu lado: no puedes cruzar. Si tienes la discontinua: puedes cruzar con seguridad.</li>
  <li><strong>Línea amarilla continua en el borde:</strong> Prohíbe parar y estacionar.</li>
  <li><strong>Línea amarilla discontinua en el borde:</strong> Prohíbe estacionar pero permite parar brevemente.</li>
</ul>

<p><strong>LÍNEAS TRANSVERSALES (cruzando la calzada)</strong></p>
<ul>
  <li><strong>Línea de detención (continua transversal):</strong> Debes detenerte antes de ella ante STOP, semáforo rojo o paso de peatones con prioridad.</li>
  <li><strong>Línea de ceda el paso (discontinua transversal):</strong> Debes reducir la velocidad y ceder el paso. No necesariamente detenerte.</li>
  <li><strong>Paso de peatones (líneas blancas paralelas):</strong> Los peatones tienen preferencia. Debes cederles el paso.</li>
</ul>

<p><strong>OTRAS MARCAS IMPORTANTES</strong></p>
<ul>
  <li><strong>Flechas de dirección:</strong> En los carriles, indican la dirección que deben seguir los vehículos en ese carril. Son de cumplimiento obligatorio.</li>
  <li><strong>Marca de STOP en el suelo:</strong> Complementa la señal vertical. Indica exactamente dónde detenerse.</li>
  <li><strong>Zigzag amarillo:</strong> Prohibición de parar en paradas de autobús.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Creer que una línea discontinua siempre significa que puedes adelantar. La línea discontinua solo indica que técnicamente puedes cruzarla — pero también tienes que verificar que haya visibilidad suficiente y que no venga ningún vehículo de frente.</p>`
          }
        ]
      },
      {
        // ── VIERNES ── test semanal
        label: '★ Repaso flash — Test semanal S1',
        sections: [
          {
            title: 'Resumen de la semana: todo lo que entra en el test',
            content: `<p>Tenno, hoy es el test semanal. Aquí tienes el mapa completo de la semana 1 en formato de consulta rápida.</p>

<p><strong>NORMAS BÁSICAS</strong></p>
<ul>
  <li>Carril derecho por defecto. Izquierdo solo para adelantar.</li>
  <li>Móvil: prohibido siempre, incluidos auriculares no integrados.</li>
  <li>Cinturón: obligatorio en todas las vías para todos los ocupantes.</li>
  <li>Chaleco: dentro del habitáculo, no en el maletero.</li>
  <li>Triángulos: no obligatorios desde 2021. Sustituidos por V-16.</li>
  <li>Avería en autopista: chaleco → señalizar → alejarse por la derecha.</li>
  <li>Marcha atrás en autopista: terminantemente prohibida.</li>
  <li>Rotonda: preferencia a quien ya está dentro.</li>
  <li>Túnel: luces de cruce siempre, esté iluminado o no.</li>
  <li>Paso a nivel: detención mínima a 3 metros de las vías.</li>
</ul>

<p><strong>SEÑALES — TABLA RESUMEN</strong></p>
<ul>
  <li>Triángulo borde rojo = Peligro (advierte, no prohíbe)</li>
  <li>Círculo borde rojo = Prohibición o restricción</li>
  <li>Círculo fondo azul = Obligación</li>
  <li>Octogonal roja = STOP (detención siempre)</li>
  <li>Triángulo invertido = Ceda (solo si hay tráfico con prioridad)</li>
  <li>Prioridad: Agente > Semáforo > Señal > Marca > Norma</li>
</ul>

<p><strong>SEMÁFOROS</strong></p>
<ul>
  <li>Rojo: detención siempre.</li>
  <li>Ámbar: detención si puede hacerse con seguridad.</li>
  <li>Verde: paso autorizado sin obstruir el cruce.</li>
</ul>

<p><strong>MARCAS VIALES</strong></p>
<ul>
  <li>Línea continua = no cruzar.</li>
  <li>Línea discontinua = puedes cruzar si hay visibilidad y seguridad.</li>
  <li>Amarilla en borde continua = prohibido parar y estacionar.</li>
  <li>Amarilla en borde discontinua = prohibido estacionar, puedes parar.</li>
</ul>`,
            tip: `<p><strong>La Lotus habla:</strong> "Operador, la primera semana es la base sobre la que construyes todo lo demás. Si los protocolos básicos son instintivos, el resto de la misión fluye solo. Adelante — el test de hoy no te va a sorprender."</p>`
          }
        ]
      }
    ]
  },

  week2: {
    topics: ['velocidad', 'distancias'],
    days: [
      {
        label: 'Velocidades en vías interurbanas',
        sections: [
          {
            title: 'Tabla de velocidades: fuera de ciudad',
            content: `<p>Tenno, los límites de velocidad son máximos absolutos. No hay margen legal. Memoriza la tabla completa — el examen siempre tiene 2-3 preguntas sobre velocidades.</p>

<p><strong>AUTOPISTAS Y AUTOVÍAS</strong></p>
<ul>
  <li><strong>Turismo sin remolque:</strong> 120 km/h máximo · 60 km/h mínimo.</li>
  <li><strong>Turismo con remolque de más de 750 kg:</strong> 100 km/h máximo.</li>
  <li><strong>Por qué hay velocidad mínima:</strong> Circular muy despacio en autopista obliga a los demás a frenar bruscamente, creando peligro. El mínimo (60 km/h = mitad del máximo) garantiza un flujo seguro.</li>
  <li><strong>Importante:</strong> En autopistas también existe la norma de circular por el carril derecho. El carril izquierdo es solo para adelantar.</li>
</ul>

<p><strong>CARRETERAS CONVENCIONALES FUERA DE POBLADO</strong></p>
<ul>
  <li><strong>Turismo:</strong> 90 km/h (límite vigente desde 2019, reducido desde los 100 km/h anteriores).</li>
  <li><strong>Por qué se redujo:</strong> Las carreteras convencionales tienen cruces, accesos a propiedades, arcenes estrechos y mayor peligro de encontrarse con ciclistas y peatones que las autopistas. A 90 km/h la distancia de frenada es significativamente menor.</li>
  <li><strong>Excepciones:</strong> Si hay señal específica de otro límite, esa señal prevalece.</li>
</ul>

<p><strong>PANELES VARIABLES</strong></p>
<ul>
  <li>Tienen exactamente el mismo valor legal que las señales fijas.</li>
  <li>Si un panel muestra 80 km/h y la señal fija dice 120, el límite es 80.</li>
  <li>Los paneles se activan por meteorología, accidentes, obras o congestión.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Confundir el límite de remolques. Solo los remolques de MÁS de 750 kg de masa máxima autorizada tienen el límite reducido a 100 km/h en autopista. Los de 750 kg o menos circulan al límite general del vehículo.</p>`
          }
        ]
      },
      {
        label: 'Velocidades en zonas urbanas',
        sections: [
          {
            title: 'Los nuevos límites urbanos desde 2021',
            content: `<p>La reforma de 2021 introdujo cambios importantes en los límites urbanos. Son los que más confunden en el examen porque hay tres límites distintos según el tipo de calle.</p>

<p><strong>TABLA URBANA COMPLETA</strong></p>
<ul>
  <li><strong>Vía urbana general (sin otras señalizaciones):</strong> 50 km/h.</li>
  <li><strong>Calle con un solo carril por sentido:</strong> 30 km/h. Esta es la que más gente falla — no es el límite general urbano, es específico para calles de un carril.</li>
  <li><strong>Calle de plataforma única</strong> (peatones y vehículos al mismo nivel, sin bordillo): 20 km/h.</li>
</ul>

<p><strong>CÓMO IDENTIFICAR CADA TIPO</strong></p>
<ul>
  <li><strong>50 km/h:</strong> Avenidas con varios carriles, rondas, vías principales de ciudad donde no se aplican los otros casos.</li>
  <li><strong>30 km/h:</strong> La mayoría de calles del casco urbano con acera y calzada separadas, donde solo cabe un carril de circulación por sentido. Si te preguntan "una calle residencial normal" → 30 km/h.</li>
  <li><strong>20 km/h:</strong> Calles peatonales que admiten vehículos, zonas de coexistencia, calles sin diferencia de nivel entre acera y calzada. Todo está al mismo plano.</li>
</ul>

<p><strong>¿EXISTE MARGEN DE TOLERANCIA?</strong></p>
<ul>
  <li>No. Los límites son máximos absolutos. Legalmente no existe ningún margen para superarlos.</li>
  <li>Los radares de velocidad tienen ajustes técnicos de medición, pero eso no es un "margen legal" — es una limitación del sistema. Ante el tribunal, ir a 55 en zona de 50 es infracción.</li>
  <li>En el examen, la respuesta "existe un margen de 10 km/h" es siempre incorrecta.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Aplicar 50 km/h a cualquier vía urbana. Desde 2021, una calle con un solo carril por sentido tiene límite de 30 km/h aunque no haya señal específica. El límite de 30 se aplica por defecto en ese tipo de calle.</p>`
          }
        ]
      },
      {
        label: 'Distancia de seguridad',
        sections: [
          {
            title: 'Qué es y de qué depende',
            content: `<p>Tenno, la distancia de seguridad es el margen que separa un trayecto normal de un choque. Sin esa separación, cualquier acción del vehículo de delante puede ser fatal.</p>

<p><strong>DEFINICIÓN</strong></p>
<ul>
  <li>La separación mínima con el vehículo precedente que te permite frenar a tiempo si este reduce bruscamente su velocidad o se detiene de golpe.</li>
  <li>No es un capricho — es física. Desde que ves peligro hasta que el coche empieza a frenar pasan 0,75-1,5 segundos (tiempo de reacción). En ese tiempo, a 120 km/h, recorres entre 25 y 50 metros sin frenar.</li>
</ul>

<p><strong>¿HAY UN MÍNIMO LEGAL EN METROS?</strong></p>
<ul>
  <li>Para turismos en general: NO. La ley exige "distancia suficiente adaptada a las circunstancias". No hay número fijo.</li>
  <li><strong>Excepción — Vehículos de más de 10 metros de longitud</strong> (camiones, autobuses): En autopistas y autovías deben guardar al menos 50 metros con el vehículo precedente. Este sí es un mínimo legal.</li>
  <li>El dato de los 50 metros aparece con frecuencia en el examen — úsalo solo para vehículos de más de 10 metros, no para turismos.</li>
</ul>

<p><strong>FACTORES QUE LA DETERMINAN</strong></p>
<ul>
  <li><strong>Velocidad:</strong> A mayor velocidad, mayor distancia de frenada. No es lineal: si duplicas la velocidad, la distancia de frenada se cuadruplica.</li>
  <li><strong>Estado de los frenos:</strong> Frenos desgastados aumentan la distancia de frenada.</li>
  <li><strong>Estado de los neumáticos:</strong> Neumáticos desgastados o con presión incorrecta reducen la adherencia.</li>
  <li><strong>Tipo de calzada:</strong> Seca, mojada, con hielo o gravilla.</li>
  <li><strong>Condiciones meteorológicas:</strong> Lluvia, niebla, sol de cara.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Afirmar que existe una distancia mínima de 50 metros para todos los vehículos. Los 50 metros son SOLO para vehículos de más de 10 metros de longitud en autopistas. Para turismos, la ley no fija metros.</p>`
          }
        ]
      },
      {
        label: 'Frenada, ABS y condiciones adversas',
        sections: [
          {
            title: 'Cómo afectan las condiciones a la distancia de frenada',
            content: `<p><strong>LA REGLA DE LOS 3 SEGUNDOS</strong></p>
<ul>
  <li>Guía práctica para calcular la distancia de seguridad: el vehículo de delante pasa por un punto fijo (un poste, una señal) y tú debes tardar mínimo 3 segundos en pasar por ese mismo punto.</li>
  <li>En condiciones adversas (lluvia, noche, cansancio), aumenta a 4-6 segundos.</li>
  <li>Es una guía práctica, no un dato legal. El examen puede preguntar qué es la "regla de los 3 segundos".</li>
</ul>

<p><strong>CONDICIONES ADVERSAS Y SU EFECTO</strong></p>
<ul>
  <li><strong>Calzada mojada (lluvia):</strong> La distancia de frenada puede duplicarse respecto al asfalto seco. Aumenta la distancia de seguridad y reduce la velocidad.</li>
  <li><strong>Nieve o hielo:</strong> La distancia de frenada puede multiplicarse por 10 respecto al seco. Circular con cadenas o neumáticos de invierno es imprescindible.</li>
  <li><strong>Aquaplaning:</strong> Con mucha agua en la calzada y alta velocidad, el neumático puede flotar sobre el agua perdiendo el contacto con el asfalto. La dirección deja de responder. Solución: no frenar bruscamente, soltar el acelerador suavemente.</li>
</ul>

<p><strong>SISTEMA ABS — Qué hace y qué no hace</strong></p>
<ul>
  <li><strong>Qué hace:</strong> Evita que las ruedas se bloqueen durante una frenada de emergencia, manteniendo el control de la dirección. Puedes seguir girando el volante aunque estés frenando a fondo.</li>
  <li><strong>Cómo usarlo correctamente:</strong> Pisa el freno con toda la fuerza posible y mantenlo pisado. No sueltes el pie aunque notes vibración (esa vibración ES el ABS funcionando).</li>
  <li><strong>Lo que NO hace:</strong> No reduce necesariamente la distancia de frenada. Puede ser igual o incluso algo mayor que sin ABS en superficies irregulares. Su ventaja es el CONTROL, no la distancia.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Creer que el ABS siempre reduce la distancia de frenada. Su función principal es mantener el control de la dirección, no acortar la distancia. En algunas superficies (grava, nieve suelta) la distancia con ABS puede ser mayor.</p>`
          }
        ]
      },
      {
        label: '★ Repaso flash — Test semanal S2',
        sections: [
          {
            title: 'Tabla completa de velocidades y distancias',
            content: `<p>Tenno, el test de hoy. Consulta rápida de todo lo que debes dominar de la semana 2.</p>

<p><strong>TABLA DE VELOCIDADES</strong></p>
<ul>
  <li>Autopista/autovía (turismo): 120 km/h máx · 60 km/h mín</li>
  <li>Autopista con remolque >750 kg: 100 km/h</li>
  <li>Carretera convencional: 90 km/h</li>
  <li>Vía urbana general: 50 km/h</li>
  <li>Calle con un carril por sentido: 30 km/h</li>
  <li>Plataforma única: 20 km/h</li>
  <li>Paneles variables: mismo valor legal que señales fijas</li>
  <li>Margen de tolerancia: NO EXISTE legalmente</li>
</ul>

<p><strong>DISTANCIAS DE SEGURIDAD</strong></p>
<ul>
  <li>Turismos: no hay mínimo fijo en metros — distancia suficiente adaptada a condiciones</li>
  <li>Vehículos >10 metros en autopista: mínimo 50 metros</li>
  <li>Regla de los 3 segundos: guía práctica (no dato legal)</li>
  <li>Calzada mojada: distancia de frenada puede duplicarse</li>
  <li>Hielo: distancia de frenada puede multiplicarse por 10</li>
  <li>ABS: mantiene el control de dirección, no garantiza reducir la distancia de frenada</li>
</ul>`,
            tip: `<p><strong>La Lotus habla:</strong> "Operador, la velocidad no es potencia — es vulnerabilidad cuando no se controla. Cada parámetro que conoces es un accidente que no tendrás. Ya tienes los datos. Ejecuta con precisión."</p>`
          }
        ]
      }
    ]
  },

  week3: {
    topics: ['preferencia', 'adelantamiento'],
    days: [
      {
        label: 'Preferencia de paso: reglas básicas',
        sections: [
          {
            title: 'Intersecciones y la regla de la derecha',
            content: `<p><strong>LA REGLA DE LA DERECHA</strong></p>
<ul>
  <li><strong>Norma:</strong> En intersecciones sin señalizar, tiene preferencia el vehículo que se aproxima por tu derecha.</li>
  <li><strong>Por qué existe:</strong> En ausencia de señalización, alguien tiene que ceder. La regla de la derecha es universal y predecible — todos la conocen, todos saben qué esperar.</li>
  <li><strong>Cuándo aplica:</strong> Solo cuando NO hay señal de prioridad (STOP, Ceda, señal de vía principal, semáforo).</li>
  <li><strong>Ejemplo:</strong> Llegas a un cruce sin señalizar. Hay un coche a tu derecha y otro a tu izquierda. El de tu derecha tiene preferencia sobre ti; tú tienes preferencia sobre el de tu izquierda.</li>
</ul>

<p><strong>VÍA PRINCIPAL Y VÍA SECUNDARIA</strong></p>
<ul>
  <li>Si una vía está señalizada como "vía principal" (señal de calzada con prioridad), los vehículos que circulan por ella tienen preferencia sobre los que acceden desde las vías secundarias.</li>
  <li>La regla de la derecha NO aplica cuando hay señal de vía principal. La señal de prioridad prevalece.</li>
  <li>En las vías secundarias habrá señal de STOP o Ceda el paso indicando que deben ceder.</li>
</ul>

<p><strong>INCORPORACIÓN A AUTOPISTA</strong></p>
<ul>
  <li>El vehículo que se incorpora desde el carril de aceleración SIEMPRE cede el paso a los que ya circulan por la autopista.</li>
  <li>Los que circulan por la autopista no tienen obligación de cambiar de carril para facilitar la incorporación (aunque es un gesto habitual y recomendable si es posible hacerlo con seguridad).</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Aplicar la regla de la derecha cuando hay señalización. Si hay STOP, Ceda o señal de vía principal, la regla de la derecha queda anulada. La señal siempre prevalece.</p>`
          }
        ]
      },
      {
        label: 'Preferencia: peatones, ciclistas y emergencias',
        sections: [
          {
            title: 'Usuarios vulnerables y vehículos de emergencia',
            content: `<p><strong>PEATONES</strong></p>
<ul>
  <li><strong>En pasos de peatones señalizados:</strong> Los peatones tienen preferencia absoluta. Debes detenerte y esperarles, aunque estén en el extremo opuesto del paso.</li>
  <li><strong>Fuera de los pasos:</strong> Los peatones deben ceder el paso a los vehículos. Sin embargo, debes extremar la precaución cuando veas peatones cerca de la calzada.</li>
  <li><strong>Con semáforo para peatones en verde:</strong> Los peatones tienen preferencia. Los vehículos que giran deben cederles el paso aunque tengan verde también.</li>
  <li><strong>Personas con discapacidad visual (perro guía o bastón blanco):</strong> Tienen preferencia absoluta en cualquier punto de la calzada.</li>
</ul>

<p><strong>CICLISTAS</strong></p>
<ul>
  <li>En pasos para ciclistas señalizados: tienen preferencia (equivalente al paso de peatones pero para bicicletas).</li>
  <li>En intersecciones sin señalizar: se aplican las mismas normas que para vehículos a motor (regla de la derecha).</li>
  <li>Al adelantar ciclistas: separación lateral mínima de 1,5 metros, independientemente del tipo de vía.</li>
</ul>

<p><strong>AUTOBÚS URBANO</strong></p>
<ul>
  <li>Tiene preferencia para incorporarse al tráfico desde su parada, siempre que: haya señalizado la maniobra con el intermitente y no ponga en peligro a ningún otro usuario.</li>
  <li>Los conductores de los demás vehículos deben reducir la velocidad y dejar espacio al autobús.</li>
  <li>Esta preferencia aplica solo a autobuses de transporte urbano, no a autobuses interurbanos ni autocares.</li>
</ul>

<p><strong>VEHÍCULOS DE EMERGENCIA</strong></p>
<ul>
  <li>Con señales acústicas (sirena) y luminosas activadas: preferencia absoluta sobre cualquier norma, señal o semáforo.</li>
  <li>Qué hacer: reducir la velocidad, colocarte en el lateral derecho de la calzada y dejarles paso libre.</li>
  <li>No pares en medio de la calzada — apártate al lado.</li>
  <li>Si estás en un atasco: todos los vehículos deben crear un "pasillo de emergencia" pegándose a los laterales.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Creer que los peatones tienen preferencia en cualquier punto de la vía. Solo la tienen en pasos señalizados y con semáforo a su favor. Fuera de ellos, los peatones deben ceder el paso a los vehículos.</p>`
          }
        ]
      },
      {
        label: 'Adelantamientos: cuándo y cómo',
        sections: [
          {
            title: 'Protocolo completo de adelantamiento',
            content: `<p>El adelantamiento es la maniobra más peligrosa. Requiere que todo esté bien antes de ejecutarla. Si hay dudas, no adelantes — siempre hay más oportunidades.</p>

<p><strong>REQUISITOS ANTES DE ADELANTAR</strong></p>
<ul>
  <li>Visibilidad suficiente para ver que la vía está libre en sentido contrario.</li>
  <li>Ningún vehículo viene de frente a corta distancia.</li>
  <li>Puedes completar la maniobra y volver al carril con seguridad antes de llegar a cualquier obstáculo.</li>
  <li>El vehículo que vas a adelantar no ha señalizado un giro a la izquierda.</li>
</ul>

<p><strong>CÓMO EJECUTAR EL ADELANTAMIENTO</strong></p>
<ul>
  <li>1. Intermitente izquierdo para señalizar la salida del carril.</li>
  <li>2. Comprobar el espejo retrovisor y el punto ciego (girar la cabeza brevemente).</li>
  <li>3. Aumentar velocidad para completar el adelantamiento rápidamente.</li>
  <li>4. Volver al carril derecho manteniendo una distancia de seguridad con el vehículo adelantado.</li>
  <li>5. Intermitente derecho al volver al carril.</li>
</ul>

<p><strong>OBLIGACIONES DEL VEHÍCULO ADELANTADO</strong></p>
<ul>
  <li>No debe aumentar su velocidad durante la maniobra.</li>
  <li>No está obligado a reducir la velocidad (salvo que sea necesario por seguridad).</li>
  <li>Debe mantenerse en el carril derecho sin desplazarse a la izquierda.</li>
</ul>

<p><strong>SEPARACIÓN LATERAL AL ADELANTAR CICLISTAS</strong></p>
<ul>
  <li>Mínimo 1,5 metros de separación lateral, en cualquier tipo de vía.</li>
  <li>Para garantizar esa distancia, normalmente hay que invadir parcialmente el carril contrario.</li>
  <li>Antes de hacerlo, asegurarse de que no viene nadie de frente.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Creer que el vehículo adelantado está obligado a reducir la velocidad. Solo debe no AUMENTARLA. Reducirla es su decisión — no una obligación legal.</p>`
          }
        ]
      },
      {
        label: 'Adelantamientos: prohibiciones',
        sections: [
          {
            title: 'Dónde está prohibido adelantar',
            content: `<p><strong>LUGARES DONDE ESTÁ PROHIBIDO ADELANTAR</strong></p>
<ul>
  <li><strong>Pasos de peatones y sus inmediaciones:</strong> Prohibido siempre, haya o no peatones cruzando en ese momento.</li>
  <li><strong>Curvas y cambios de rasante con visibilidad reducida:</strong> Prohibido aunque la línea central sea discontinua. Si no ves lo que viene de frente, no adelantes.</li>
  <li><strong>Intersecciones:</strong> Prohibido en general, salvo en las señalizadas específicamente para permitirlo.</li>
  <li><strong>Pasos a nivel:</strong> Prohibido en su proximidad.</li>
  <li><strong>Si un vehículo ya está adelantando:</strong> No puedes adelantar tú también al mismo tiempo. Espera a que termine su maniobra.</li>
  <li><strong>Línea continua a tu lado:</strong> No puedes cruzarla para adelantar.</li>
  <li><strong>Cuando hay señal de prohibición de adelantamiento:</strong> Respeta la señal hasta que aparezca la señal de fin de prohibición.</li>
</ul>

<p><strong>ADELANTAMIENTO POR LA DERECHA — EXCEPCIÓN</strong></p>
<ul>
  <li>Está permitido adelantar por la derecha SOLO cuando el vehículo de delante ha señalizado y se ha desplazado para girar a la izquierda.</li>
  <li>En vías urbanas con varios carriles por sentido, también puedes adelantar por cualquier carril si el tráfico fluye en todos ellos (conducción en columna).</li>
  <li>Nunca adelantes por la derecha en carretera salvo la excepción del giro a la izquierda.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Pensar que si la línea central es discontinua siempre se puede adelantar en cualquier punto. La línea discontinua indica que técnicamente es posible cruzarla, pero hay lugares (como curvas sin visibilidad) donde aunque la línea sea discontinua el adelantamiento está prohibido.</p>`
          }
        ]
      },
      {
        label: '★ Repaso flash — Test semanal S3',
        sections: [
          {
            title: 'Preferencia y adelantamiento: puntos críticos',
            content: `<p><strong>PREFERENCIA — CASOS CLAVE</strong></p>
<ul>
  <li>Sin señalizar: preferencia al que viene por la derecha</li>
  <li>Con señal de vía principal: la señal prevalece sobre la regla de la derecha</li>
  <li>Rotonda: preferencia a quien ya está dentro</li>
  <li>Emergencias con sirena y luces: preferencia absoluta</li>
  <li>Autobús urbano: preferencia al salir de parada con intermitente</li>
  <li>Peatones: solo preferencia en pasos señalizados</li>
  <li>Incorporación a autopista: el que entra cede el paso siempre</li>
</ul>

<p><strong>ADELANTAMIENTO — CASOS CLAVE</strong></p>
<ul>
  <li>Siempre por la izquierda (salvo el de delante gira a la izquierda)</li>
  <li>Prohibido en: pasos de peatones, curvas sin visibilidad, si otro ya adelanta</li>
  <li>1,5 metros: separación lateral mínima al adelantar ciclistas</li>
  <li>El adelantado: no debe acelerar, no está obligado a frenar</li>
  <li>Adelantamiento por la derecha: solo si el de delante va a girar a la izquierda y lo ha señalizado</li>
</ul>`,
            tip: `<p><strong>La Lotus habla:</strong> "Conocer cuándo ceder y cuándo avanzar es lo que distingue a un conductor hábil de uno peligroso. Esta semana has aprendido ambos. Demuéstralo en el test."</p>`
          }
        ]
      }
    ]
  },

  week4: {
    topics: ['alumbrado', 'documentacion'],
    days: [
      {
        label: 'Alumbrado: cuándo usar cada luz',
        sections: [
          {
            title: 'Tipos de luces y sus obligaciones',
            content: `<p>Tenno, las luces del vehículo tienen dos funciones: ver y ser visto. Hay una luz para cada situación — usarlas mal es infracción y puede crear peligro.</p>

<p><strong>LUCES DE CRUCE (CORTAS)</strong></p>
<ul>
  <li><strong>Cuándo son obligatorias:</strong> De noche o con visibilidad reducida en cualquier vía. En túneles siempre (iluminados o no). De día cuando llueva, haya niebla o visibilidad sea reducida.</li>
  <li><strong>Por qué en túneles aunque estén iluminados:</strong> Las luces hacen que los demás te vean mejor, especialmente en la entrada y salida del túnel donde el contraste de luz es máximo.</li>
</ul>

<p><strong>LUCES LARGAS (DE CARRETERA)</strong></p>
<ul>
  <li><strong>Cuándo se usan:</strong> Solo en carreteras sin iluminación fuera de poblado, cuando no haya riesgo de deslumbrar a otros conductores.</li>
  <li><strong>Cuándo cambiar a cortas:</strong> A 200 metros de un vehículo de frente. También cuando sigues a otro vehículo a corta distancia.</li>
  <li><strong>Por qué 200 metros:</strong> A partir de esa distancia, las luces largas del vehículo contrario ya pueden deslumbrar. A menos de 200 metros, cambiar a cortas garantiza que no le ciegas.</li>
</ul>

<p><strong>LUCES DE POSICIÓN (PILOTO)</strong></p>
<ul>
  <li>No son suficientes para circular. Solo sirven como complemento a las luces de cruce o largas, o para vehículos estacionados.</li>
  <li>Usarlas solas de noche en marcha es infracción.</li>
</ul>

<p><strong>LUCES DE EMERGENCIA (4 INTERMITENTES)</strong></p>
<ul>
  <li>Cuando el vehículo supone un peligro para otros: avería, frenada de emergencia brusca, retención inesperada a muy baja velocidad.</li>
  <li>NO justifican estacionamientos incorrectos o paradas en doble fila.</li>
  <li>Algunos conductores las usan para agradecer, advertir de radares, etc. — esto no está contemplado en la normativa, aunque está extendido socialmente.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Creer que las luces de posición son suficientes para circular de noche en ciudad iluminada. No lo son. Siempre son obligatorias las luces de cruce como mínimo cuando hay poca visibilidad o es de noche.</p>`
          }
        ]
      },
      {
        label: 'Luces de niebla y deslumbramiento',
        sections: [
          {
            title: 'Antiniebla y situaciones especiales',
            content: `<p><strong>LUCES ANTINIEBLA DELANTERAS</strong></p>
<ul>
  <li><strong>Cuándo se usan:</strong> Solo cuando niebla, lluvia intensa o nieve reduzcan notablemente la visibilidad.</li>
  <li><strong>Por qué no siempre:</strong> Su haz es más bajo y ancho que las cortas. En condiciones normales, pueden deslumbrar a los conductores que vienen de frente.</li>
  <li><strong>Usar sin necesidad:</strong> Infracción sancionable — multa de 200€.</li>
</ul>

<p><strong>LUCES ANTINIEBLA TRASERAS (ROJAS)</strong></p>
<ul>
  <li><strong>Cuándo se usan:</strong> Solo cuando la visibilidad sea notablemente reducida (niebla densa, lluvia muy intensa, nevada).</li>
  <li><strong>Por qué son tan potentes:</strong> Para ser vistas desde lejos en condiciones de visibilidad muy baja, como señal de advertencia.</li>
  <li><strong>Por qué no siempre:</strong> Son tan intensas que deslumbran al conductor de detrás en condiciones normales. Usarlas sin necesidad es infracción.</li>
</ul>

<p><strong>DESLUMBRAMIENTO POR LUCES LARGAS</strong></p>
<ul>
  <li><strong>Qué hacer si te deslumbran:</strong> Reduce la velocidad y dirige la mirada hacia el borde derecho de la calzada (no mires directamente a las luces).</li>
  <li><strong>Lo que NO debes hacer:</strong> Poner tú también las luces largas en respuesta. Eso deslumbraría al otro conductor y podría causar un accidente frontal.</li>
</ul>

<p><strong>OBLIGACIÓN DE USAR LUCES DE DÍA</strong></p>
<ul>
  <li>Fuera de poblado: muchos países obligan a luces de cruce de día. En España, en carretera convencional o autopista se recomienda pero no es obligatorio en condiciones normales de visibilidad.</li>
  <li>Sí es obligatorio de día: en caso de lluvia, niebla u otras condiciones de visibilidad reducida, y siempre en túneles.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Ante el deslumbramiento, creer que la respuesta correcta es "poner las largas para que el otro conductor las quite". Es la respuesta incorrecta — solo empeora la situación para ambos.</p>`
          }
        ]
      },
      {
        label: 'Documentación obligatoria',
        sections: [
          {
            title: 'Qué documentos llevar y el seguro obligatorio',
            content: `<p><strong>DOCUMENTOS OBLIGATORIOS AL CONDUCIR</strong></p>
<ul>
  <li><strong>Tres documentos, siempre:</strong></li>
  <li>1. Permiso de conducir vigente del conductor.</li>
  <li>2. Permiso de circulación del vehículo.</li>
  <li>3. Acreditación del seguro obligatorio (tarjeta verde).</li>
  <li><strong>El DNI:</strong> No es obligatorio llevarlo en el vehículo, aunque es muy recomendable. No incluirlo en la lista de documentos obligatorios al conducir.</li>
</ul>

<p><strong>SEGURO OBLIGATORIO (SOA)</strong></p>
<ul>
  <li><strong>Norma:</strong> El Seguro de suscripción Obligatoria (SOA) es obligatorio para cualquier vehículo que circule por la vía pública. Circular sin él es delito penal.</li>
  <li><strong>Qué cubre:</strong> Los daños causados a terceros (personas y bienes) por el conductor asegurado. No cubre los daños propios del vehículo (eso es el seguro a todo riesgo, voluntario).</li>
  <li><strong>Tarjeta verde:</strong> El documento que acredita que el vehículo tiene seguro vigente. Hay que llevarla siempre.</li>
</ul>

<p><strong>ITV — INSPECCIÓN TÉCNICA DE VEHÍCULOS</strong></p>
<ul>
  <li><strong>Primeros 4 años:</strong> Exenta de ITV.</li>
  <li><strong>Entre 4 y 10 años:</strong> ITV cada 2 años.</li>
  <li><strong>Más de 10 años:</strong> ITV anual.</li>
  <li><strong>Por qué existe:</strong> Garantiza que el vehículo cumple los requisitos técnicos de seguridad (frenos, luces, emisiones, neumáticos). Un vehículo en mal estado técnico es un riesgo para todos.</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Incluir el DNI como documento obligatorio al conducir. No lo es. Los tres documentos obligatorios son: permiso de conducir, permiso de circulación y acreditación del seguro (tarjeta verde).</p>`
          }
        ]
      },
      {
        label: 'Carnet por puntos y etiquetas DGT',
        sections: [
          {
            title: 'Sistema de puntos y medioambiente',
            content: `<p><strong>EL CARNET POR PUNTOS — SALDOS</strong></p>
<ul>
  <li><strong>Al obtener el permiso por primera vez:</strong> 8 puntos (período de prueba de 2 años).</li>
  <li><strong>Tras 2 años sin infracciones graves:</strong> Se amplía a 12 puntos (saldo máximo ordinario).</li>
  <li><strong>Saldo máximo posible:</strong> 15 puntos (con bonificaciones por buena conducta).</li>
  <li><strong>Bonificaciones:</strong> Sin infracciones durante 3 años: +2 puntos. Después, +1 punto cada 3 años adicionales hasta llegar a 15.</li>
</ul>

<p><strong>RECUPERACIÓN DE PUNTOS</strong></p>
<ul>
  <li><strong>Recuperación parcial:</strong> Hasta 6 puntos realizando un curso de sensibilización y reeducación vial. Máximo una vez cada 2 años. Duración máxima: 15 horas.</li>
  <li><strong>Recuperación total (tras perder todos los puntos y el permiso):</strong> Esperar 6 meses (3 para profesionales), realizar un curso de 30 horas y superar una prueba de aptitud.</li>
</ul>

<p><strong>ETIQUETAS MEDIOAMBIENTALES DGT</strong></p>
<ul>
  <li><strong>CERO (verde + azul):</strong> Eléctricos puros, vehículos de pila de hidrógeno, eléctricos de autonomía extendida. Sin emisiones directas.</li>
  <li><strong>ECO (verde + azul):</strong> Híbridos enchufables con autonomía eléctrica &lt;40 km, híbridos no enchufables de gasolina, GLP/GNC.</li>
  <li><strong>C (verde):</strong> Gasolina matriculados desde 2006 o posterior, diésel desde 2014 o posterior.</li>
  <li><strong>B (amarillo):</strong> Gasolina matriculados desde 2000, diésel desde 2006.</li>
  <li><strong>Sin etiqueta:</strong> Vehículos más antiguos o más contaminantes. No pueden acceder a Zonas de Bajas Emisiones (ZBE).</li>
</ul>`,
            tip: `<p><strong>Error frecuente en el examen:</strong> Confundir los tres saldos: inicial (8 puntos noveles), máximo ordinario (12 puntos tras 2 años) y máximo posible (15 con bonificaciones). Son tres valores distintos y el examen pregunta por cada uno.</p>`
          }
        ]
      },
      {
        label: '★ Repaso flash — Test semanal S4',
        sections: [
          {
            title: 'Alumbrado y documentación: puntos críticos',
            content: `<p><strong>LUCES — RESUMEN</strong></p>
<ul>
  <li>Túnel: luces de cruce SIEMPRE, esté o no iluminado</li>
  <li>200 metros: distancia para cambiar largas a cortas ante vehículo de frente</li>
  <li>Luces de niebla: SOLO con visibilidad notablemente reducida</li>
  <li>Luces de posición solas: NO son suficientes para circular</li>
  <li>Deslumbramiento: mira al borde derecho, NO pongas las largas en respuesta</li>
  <li>4 intermitentes: avería, frenada brusca, peligro — no para aparcar mal</li>
</ul>

<p><strong>DOCUMENTACIÓN — RESUMEN</strong></p>
<ul>
  <li>3 documentos obligatorios: permiso conducir + circulación + tarjeta verde (seguro)</li>
  <li>DNI: NO es obligatorio en el vehículo</li>
  <li>ITV: 0-4 años exenta · 4-10 años cada 2 años · +10 años anual</li>
  <li>Seguro sin él: DELITO penal</li>
  <li>Puntos iniciales: 8 · Tras 2 años: 12 · Máximo posible: 15</li>
  <li>Recuperación parcial: hasta 6 puntos con curso (máx 1 vez cada 2 años)</li>
</ul>`,
            tip: `<p><strong>La Lotus habla:</strong> "Cada mod de tu Orbiter necesita estar en orden. Las luces, la documentación, los puntos — son el mantenimiento preventivo que mantiene la misión operativa. No los descuides."</p>`
          }
        ]
      }
    ]
  },

  week5: {
    topics: ['alcohol', 'seguridad'],
    days: [
      { label: 'Alcohol: tasas y sanciones', sections: [{ title: 'Protocolo de alcoholemia — tasas exactas', content: `<p><strong>TASAS DE ALCOHOLEMIA</strong></p><ul><li><strong>Conductores en general (más de 2 años de permiso):</strong> Máximo 0,25 mg/l en aire espirado · 0,5 g/l en sangre.</li><li><strong>Conductores noveles (menos de 2 años) y profesionales:</strong> Máximo 0,15 mg/l en aire · 0,3 g/l en sangre.</li><li><strong>Por qué más estricto para noveles:</strong> Tienen menos experiencia y sus reflejos no están tan entrenados. El alcohol amplifica la falta de automatismos en la conducción.</li></ul><p><strong>SANCIONES</strong></p><ul><li>0,25-0,50 mg/l (general): Infracción grave — 500€ y pérdida de 4 puntos.</li><li>Más de 0,50 mg/l: Infracción muy grave — 1.000€ y pérdida de 6 puntos. Puede ser delito penal.</li><li>Más de 0,60 mg/l (o más de 1,2 g/l en sangre): Delito contra la seguridad vial — pena de prisión de 3 a 6 meses o multa y trabajos en beneficio de la comunidad.</li><li><strong>Negativa a la prueba:</strong> Delito contra la seguridad vial. Misma o peor pena que dar positivo.</li></ul>`, tip: `<p><strong>Error frecuente en el examen:</strong> Creer que negarse a la prueba de alcoholemia evita consecuencias. Es un delito penal autónomo — tiene las mismas o peores consecuencias que dar positivo con tasa elevada.</p>` }] },
      { label: 'Alcohol: mitos y medicamentos', sections: [{ title: 'Lo que no elimina el alcohol', content: `<p><strong>SOLO EL TIEMPO ELIMINA EL ALCOHOL</strong></p><ul><li>El alcohol se metaboliza en el hígado a una tasa aproximada de 0,10-0,15 g/l de sangre por hora.</li><li><strong>Nada acelera este proceso:</strong> Ni el café, ni el agua, ni el ejercicio, ni las duchas de agua fría, ni los chicles.</li><li><strong>Dormir 6 horas:</strong> Puede no ser suficiente si la cantidad consumida fue elevada. Es posible dar positivo a la mañana siguiente.</li><li><strong>Drogas:</strong> Prohibido conducir bajo sus efectos independientemente de la cantidad consumida. No existen "límites legales" para la mayoría de sustancias ilegales.</li><li><strong>Medicamentos:</strong> Muchos pueden afectar a la conducción (antihistamínicos, ansiolíticos, analgésicos fuertes, antidepresivos). Consulta siempre el prospecto y a tu médico o farmacéutico.</li></ul>`, tip: `<p><strong>Error frecuente en el examen:</strong> Creer que el café o el ejercicio aceleran la eliminación del alcohol. Absolutamente ninguna sustancia ni actividad altera la tasa de metabolización hepática del alcohol.</p>` }] },
      { label: 'Causas de accidentes', sections: [{ title: 'Las vulnerabilidades del conductor', content: `<p><strong>CAUSAS DE ACCIDENTES EN ESPAÑA — ORDEN DE IMPORTANCIA</strong></p><ul><li><strong>1ª causa: Distracciones al volante.</strong> Uso del móvil, pantallas del salpicadero, conversaciones, comer al volante. A 120 km/h, mirar el móvil 2 segundos = recorrer 67 metros a ciegas.</li><li><strong>2ª causa: Velocidad excesiva o inadecuada.</strong> No solo superar el límite — también ir demasiado rápido para las condiciones aunque estés dentro del límite.</li><li><strong>3ª causa: Alcohol y drogas.</strong></li><li><strong>Fatiga:</strong> Reduce reflejos, concentración y toma de decisiones. Los microsueños (pérdidas de conciencia de 2-3 segundos) son letales a alta velocidad. Para cada 2 horas de conducción continua.</li><li><strong>Punto ciego:</strong> La zona lateral no visible en los espejos retrovisores. Siempre girar la cabeza para comprobarlo antes de cambiar de carril o incorporarse.</li></ul>`, tip: `<p><strong>Error frecuente en el examen:</strong> Creer que el alcohol es la primera causa de accidentes en España. En realidad la primera causa son las distracciones al volante. El alcohol está en tercer lugar según los datos más recientes de la DGT.</p>` }] },
      { label: 'Sistemas de seguridad y SRI', sections: [{ title: 'ABS, airbag y retención infantil', content: `<p><strong>SISTEMA ABS</strong></p><ul><li>Evita el bloqueo de ruedas en frenada de emergencia, manteniendo el control de la dirección.</li><li>Cómo usar: pisa el freno con toda la fuerza posible y mantenlo pisado. No sueltes el pie aunque notes vibración (esa vibración ES el ABS funcionando correctamente).</li><li>Lo que no hace: no garantiza reducir la distancia de frenada. Su ventaja es el control, no la distancia.</li></ul><p><strong>AIRBAG</strong></p><ul><li>Complementa al cinturón — no lo sustituye. Sin cinturón, el airbag puede causar lesiones graves en vez de proteger.</li><li>Los niños en sillitas orientadas hacia atrás NO deben ir en asientos con airbag frontal activado. Hay que desactivar el airbag del asiento del copiloto si se coloca una sillita orientada hacia atrás.</li></ul><p><strong>SRI — SISTEMA DE RETENCIÓN INFANTIL</strong></p><ul><li>Obligatorio para menores de 12 años con menos de 135 cm de altura.</li><li>Debe estar homologado y adaptado al peso y talla del menor.</li><li>Menor en asiento delantero: solo si todos los traseros están ocupados por otros menores con SRI, o si el vehículo no tiene asientos traseros.</li><li>Nunca instalar una sillita orientada hacia atrás en un asiento con airbag frontal activo.</li></ul>`, tip: `<p><strong>Error frecuente en el examen:</strong> Creer que el ABS siempre acorta la distancia de frenada. Su función principal es mantener el control de la dirección durante la frenada. En algunas superficies (grava, nieve suelta) la distancia puede ser incluso mayor con ABS.</p>` }] },
      { label: '★ Repaso flash — Test semanal S5', sections: [{ title: 'Alcohol y seguridad: datos clave', content: `<p><strong>ALCOHOL</strong></p><ul><li>General: 0,25 mg/l aire / 0,5 g/l sangre</li><li>Novel y profesional: 0,15 mg/l aire / 0,3 g/l sangre</li><li>Negativa a la prueba: delito penal</li><li>Solo el tiempo elimina el alcohol — nada más</li><li>Drogas: prohibidas independientemente de la cantidad</li></ul><p><strong>SEGURIDAD</strong></p><ul><li>Primera causa de accidentes: distracciones al volante</li><li>ABS: mantiene control de dirección — pisa fuerte y no sueltes</li><li>Reventón: no frenar brusco, soltar acelerador gradual, frenar progresivo</li><li>SRI: menores de 12 años O menos de 135 cm</li><li>Airbag + sillita hacia atrás: incompatibles — desactivar airbag</li></ul>`, tip: `<p><strong>La Lotus habla:</strong> "Operador, has llegado a la semana 5. Ya conoces las vulnerabilidades más graves del sector. Ahora las conoces para evitarlas. La misión final está cada vez más cerca."</p>` }] }
    ]
  },

  week6: { topics: ['senales','velocidad'], days: [
    { label: 'Repaso señales', sections: [{ title: 'Señales — revisión completa', content: `<ul><li><strong>STOP:</strong> Octogonal roja — detención siempre.</li><li><strong>Ceda el paso:</strong> Triángulo invertido — ceder solo si hay tráfico.</li><li><strong>Peligro:</strong> Triángulo con borde rojo — advierte, no prohíbe.</li><li><strong>Prohibición:</strong> Círculo con borde rojo — no hacer.</li><li><strong>Obligación:</strong> Círculo fondo azul — hacer obligatoriamente.</li><li><strong>Prioridad:</strong> Agente > Semáforo > Señal > Marca > Norma.</li><li><strong>Ámbar:</strong> Detén si puedes con seguridad.</li><li><strong>Línea continua:</strong> No cruzar. Discontinua: sí si hay visibilidad.</li></ul>` }] },
    { label: 'Repaso velocidades', sections: [{ title: 'Tabla de velocidades completa', content: `<ul><li>Autopista/autovía: 120 máx · 60 mín</li><li>Autopista con remolque >750 kg: 100 km/h</li><li>Carretera convencional: 90 km/h</li><li>Vía urbana general: 50 km/h</li><li>Calle un carril por sentido: 30 km/h</li><li>Plataforma única: 20 km/h</li><li>Paneles variables: mismo valor legal que fijas</li><li>Margen de tolerancia: no existe</li><li>Vehículos >10 metros en autopista: mínimo 50 m de separación</li></ul>` }] },
    { label: 'Errores más comunes', sections: [{ title: 'Top errores en el examen real', content: `<ul><li>STOP vs Ceda: STOP detiene siempre, Ceda solo si hay tráfico.</li><li>Chaleco en maletero: no — dentro del habitáculo.</li><li>Margen de velocidad: no existe legalmente.</li><li>ABS: mantiene dirección, no garantiza acortar la frenada.</li><li>Primera causa de accidentes: distracciones, no el alcohol.</li><li>Ámbar: no obliga SIEMPRE a detenerse.</li><li>Peatones: solo preferencia en paso señalizado.</li><li>Triángulos: no obligatorios desde 2021 para turismos.</li></ul>` }] },
    { label: 'Simulacro parcial', sections: [{ title: 'Prepara el test de mañana', content: `<p>Tenno, mañana es el test semanal de la semana 6. Hoy revisa tu rendimiento por tema en el panel de Inicio y enfócate en los temas donde tengas menos del 70%. Un test por tema en los puntos débiles es la mejor preparación.</p>` }] },
    { label: '★ Test semanal S6', sections: [{ title: 'Semana 6 — lista', content: `<p>Seis semanas de operaciones, Tenno. Hoy el test cubre señales y velocidades — los temas con más preguntas en el examen DGT real. Si has seguido el plan, estás listo.</p>` }] }
  ]},

  week7: { topics: ['preferencia','adelantamiento','alcohol'], days: [
    { label: 'Repaso preferencia', sections: [{ title: 'Preferencia — puntos críticos', content: `<ul><li>Sin señalizar: derecha tiene preferencia.</li><li>Rotonda: quien está dentro tiene preferencia.</li><li>Emergencias: preferencia absoluta con señales activadas.</li><li>Autobús: preferencia al salir de parada con intermitente.</li><li>Garaje: el que sale cede a todo el tráfico público.</li><li>Autopista: el que se incorpora cede siempre.</li><li>Peatones: solo preferencia en pasos señalizados.</li><li>Ciclistas: preferencia en pasos señalizados para bicicletas.</li></ul>` }] },
    { label: 'Repaso adelantamiento', sections: [{ title: 'Adelantamiento — puntos críticos', content: `<ul><li>Siempre por la izquierda salvo giro a la izquierda del de delante.</li><li>Prohibido en: pasos de peatones, curvas sin visibilidad, si otro ya adelanta.</li><li>1,5 metros: separación lateral mínima al adelantar ciclistas.</li><li>El adelantado: no debe acelerar, no obligado a frenar.</li><li>Señalización: intermitente izquierdo al salir, derecho al volver.</li><li>Línea continua: nunca cruzar para adelantar.</li></ul>` }] },
    { label: 'Repaso alcohol', sections: [{ title: 'Alcohol — puntos críticos', content: `<ul><li>General: 0,25 mg/l aire / 0,5 g/l sangre.</li><li>Novel y profesional: 0,15 mg/l aire / 0,3 g/l sangre.</li><li>Negativa: delito penal siempre.</li><li>Solo el tiempo elimina el alcohol. Nada más.</li><li>Drogas: prohibidas siempre, sin límites mínimos.</li><li>Medicamentos: consultar siempre el prospecto.</li></ul>` }] },
    { label: 'Repaso global', sections: [{ title: 'Todo el temario en 5 minutos', content: `<ul><li>Velocidades: 120·90·50·30·20 km/h</li><li>Señales: octogonal=STOP · triángulo=peligro · círculo rojo=prohibición · círculo azul=obligación</li><li>Preferencia: agente > semáforo > señal > marca > norma</li><li>Alcohol: 0,25 general / 0,15 novel — negativa = delito</li><li>Documentos: permiso conducir + circulación + seguro</li><li>ITV: 0-4 exenta · 4-10 cada 2 años · +10 anual</li><li>SRI: menores de 12 años o menos de 135 cm</li><li>ABS: mantiene dirección, no acorta frenada</li><li>Primera causa accidentes: distracciones</li><li>Chaleco: dentro del habitáculo, no en el maletero</li></ul>` }] },
    { label: '★ Test semanal S7', sections: [{ title: 'Semana 7 — a un paso del final', content: `<p>Tenno, solo queda la semana de simulacros. Has cubierto todo el temario. Esta semana ha sido el último repaso antes del sprint final. La Lotus habla: "Operador, has llegado más lejos de lo que muchos llegan. Descansa esta noche. Mañana empieza el sprint final."</p>` }] }
  ]},

  week8: { topics: null, days: [
    { label: 'Simulacro 1 — Formato del examen', sections: [{ title: 'Cómo es el examen DGT real', content: `<ul><li>30 preguntas tipo test, una respuesta correcta.</li><li>30 minutos de tiempo.</li><li>Máximo 3 errores para aprobar (27 correctas).</li><li>Sin penalización por respuesta incorrecta.</li><li>Estrategia: lee cada pregunta entera, descarta las claramente incorrectas, en caso de duda elige la más restrictiva o la que implique mayor seguridad.</li></ul>` }] },
    { label: 'Simulacro 2 — Trampas del examen', sections: [{ title: 'Las preguntas trampa más frecuentes', content: `<ul><li>STOP vs Ceda el paso: STOP siempre detiene aunque no haya nadie.</li><li>Margen de velocidad: no existe legalmente.</li><li>Negativa al alcoholímetro: delito penal, no "puedo negarme".</li><li>8 puntos iniciales ≠ 12 puntos máximos ≠ 15 puntos posibles.</li><li>ABS: mantiene dirección, no acorta necesariamente la frenada.</li><li>Primera causa de accidentes: distracciones, no alcohol.</li><li>Chaleco: habitáculo, no maletero.</li><li>Triángulos: no obligatorios desde 2021.</li><li>Ámbar: solo detiene si puede hacerse con seguridad.</li></ul>` }] },
    { label: 'Simulacro 3 — Repaso flash total', sections: [{ title: 'Todo el temario en formato tabla', content: `<ul><li><strong>Velocidades:</strong> 120·90·50·30·20 km/h · remolque >750kg en autopista = 100</li><li><strong>Señales:</strong> oct.roja=STOP · tri.inv=Ceda · tri.borde rojo=peligro · circ.borde rojo=prohibición · circ.azul=obligación</li><li><strong>Prioridad señales:</strong> Agente > Semáforo > Señal > Marca > Norma</li><li><strong>Preferencia:</strong> derecha sin señal · dentro en rotonda · emergencias absoluta · autobús desde parada</li><li><strong>Adelantamiento:</strong> izquierda · 1,5m ciclistas · prohibido en pasos y curvas sin visibilidad</li><li><strong>Alumbrado:</strong> cortas en túneles · 200m para cambiar largas · antiniebla solo con visibilidad reducida</li><li><strong>Alcohol:</strong> 0,25/0,5 general · 0,15/0,3 novel y profesional · negativa = delito</li><li><strong>Docs:</strong> 3 obligatorios · ITV cada 2 años (4-10) o anual (+10) · seguro sin él = delito</li><li><strong>Puntos:</strong> 8 inicial · 12 tras 2 años · 15 máximo</li><li><strong>SRI:</strong> <12 años o <135 cm · airbag + sillita hacia atrás = incompatibles</li></ul>` }] },
    { label: 'Simulacro 4 — Día anterior al examen', sections: [{ title: 'El día antes y el día del examen', content: `<p><strong>EL DÍA ANTES</strong></p><ul><li>No estudies más de 1-2 horas. El repaso debe ser ligero — lo que necesitabas ya lo tienes.</li><li>Descansa bien. La fatiga reduce el rendimiento cognitivo tanto como el alcohol moderado.</li><li>Duerme las horas necesarias. La memoria consolida lo aprendido durante el sueño.</li></ul><p><strong>EL DÍA DEL EXAMEN</strong></p><ul><li>Lee cada pregunta completa antes de responder. Las trampas están en los detalles.</li><li>Descarta primero las opciones claramente incorrectas.</li><li>En caso de duda, elige la opción más restrictiva o la que implique mayor seguridad.</li><li>No cambies una respuesta sin estar seguro — la primera intuición suele ser correcta.</li><li>Si te sobra tiempo, revisa las que tengas dudas.</li></ul>` }] },
    { label: '★ Último simulacro', sections: [{ title: 'Misión final — briefing', content: `<p>Tenno, has llegado. Ocho semanas de protocolo, cuarenta días de operaciones. Cada test completado, cada norma aprendida, cada error analizado — todo te ha traído hasta aquí.</p><p>El examen real es solo otro simulacro. Ya los has completado decenas de veces. La única diferencia es que este tiene consecuencias reales. Pero las consecuencias no cambian lo que sabes.</p><p><strong>La Lotus habla:</strong> "Operador, he observado tu progreso desde el primer día. No es suerte lo que te trajo hasta aquí — es disciplina, constancia y trabajo. Sal ahí. Demuestra lo que sabes. La misión final es tuya."</p>` }] }
  ]}
};
