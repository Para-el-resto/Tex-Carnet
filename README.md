# TEX // OPERACIÓN PERMISO B

App de estudio para el examen teórico del permiso de conducir clase B (España).

---

## Setup básico (sin IA)

1. Descarga los 4 ficheros en una carpeta: `index.html`, `style.css`, `data.js`, `app.js`
2. Abre `index.html` directamente en el navegador
3. Configura nombre y fecha de inicio del plan
4. Listo — funciona al 100% sin servidor

---

## Setup con IA (explicaciones Claude)

Para que Claude explique por qué fallaste una pregunta y genere mensajes de motivación Warframe en el pomodoro, necesitas una API key de Anthropic.

**Opción A — Desde el modal de inicio (fácil)**
- Al abrir la app por primera vez, pega tu API key en el campo correspondiente
- Se guarda en `localStorage` de tu navegador (nunca sale de tu máquina)

**Opción B — Cambiarla después**
- Abre la consola del navegador (F12)
- Ejecuta: `STATE.apiKey = 'sk-ant-TU_CLAVE'; saveState();`
- Recarga la página

> ⚠️ Nota: las llamadas a la API de Anthropic desde el navegador pueden bloquearse por CORS dependiendo del entorno. Si ocurre, usa la Opción C.

**Opción C — Proxy local (máxima compatibilidad)**

Requiere Node.js instalado.

```bash
# En la carpeta del proyecto:
npm install express cors node-fetch
node server.js
```

Luego abre `http://localhost:3000` en vez del fichero directo.

---

## Añadir preguntas a `data.js`

Cada pregunta tiene esta estructura:

```javascript
{
  id: 86,                    // número único
  topic: 'velocidad',        // uno de los IDs de TOPICS
  q: 'Texto de la pregunta',
  opts: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
  correct: 0,                // índice de la respuesta correcta (0-3)
  exp: 'Explicación corta de por qué es correcta'
}
```

Temas disponibles: `velocidad`, `senales`, `normas`, `preferencia`, `adelantamiento`, `alumbrado`, `distancias`, `alcohol`, `documentacion`, `seguridad`

---

## Estructura del proyecto

```
TexPermisoB/
├── index.html    — estructura de la app
├── style.css     — tema visual Warframe
├── data.js       — 85 preguntas DGT + plan de estudio
├── app.js        — lógica completa
└── README.md     — este fichero
```

---

## Funcionalidades

- **Inicio** — stats, tema del día, rendimiento por tema, últimos resultados
- **Plan** — calendario 8 semanas, marcar días completados, racha
- **Foco** — pomodoro 25/5 con anillo animado, mensaje de motivación (IA o fallback)
- **Tests** — test diario (20 preguntas), test completo (30), test por tema; revisión completa con explicaciones; historial de resultados

---

*Basado en el Manual del Conductor DGT y la normativa vigente (RGC y LSV actualizados a 2024)*
