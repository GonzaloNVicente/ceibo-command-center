# Ceibo Command Center

Quiero que diseñes la pantalla de Dashboard de "Ceibo AI" con el máximo nivel de calidad visual posible — este diseño va a definir el sistema visual completo del resto de la plataforma, así que necesito que sea una decisión de diseño deliberada, no un template genérico de SaaS.

CONTEXTO DEL PRODUCTO: Ceibo AI es un asistente de ventas por WhatsApp basado en IA, para corralones (distribuidoras de materiales de construcción: cemento, hierro, áridos, perfiles) en Argentina. Lo usan dueños y gerentes de corralón — gente práctica del rubro de la construcción, no early adopters de tech. Necesitan sentir que es una herramienta seria, precisa y confiable — de nivel empresarial — no una app de moda ni algo genérico tipo plantilla.

ANTES DE ESCRIBIR CÓDIGO: Definí primero un sistema de diseño concreto y contámelo:

- Paleta: 4 a 6 colores con sus hex exactos, y para qué se usa cada uno.

- Tipografía: qué familias tipográficas vas a usar y en qué rol cada una (texto, títulos, números/datos).

- Principio de layout: cómo se organiza la información (alineación, densidad, uso de espacio).

- Una frase que resuma la idea central del diseño (qué lo hace distinto).

EVITÁ ACTIVAMENTE estos clichés de diseño genérico de IA (son el resultado por defecto que cualquier modelo tira si no se le pide algo distinto):

- Fondo crema cálido + serif + acento terracota/anaranjado.

- Fondo casi negro + un solo acento verde neón o rojo vibrante, sin razón que lo conecte con el producto.

- El "kit de tarjetas SaaS": todo en cards blancas redondeadas idénticas, misma sombra gris suave en todas, gradientes decorativos.

- Etiquetas en MAYÚSCULA-CON-TRACKING arriba de cada sección, textos separados con "·" en todos lados, flechas "→" al final de botones.

Elegí una dirección de color y tipografía que tenga que ver específicamente con este producto y esta industria (materiales de construcción, precisión comercial, confianza B2B) — no la primera opción "linda" default.

CONTENIDO REAL A MOSTRAR (usá estos datos, no inventes otros):

Header: "Dashboard de Rendimiento WhatsApp" + indicador "En Vivo". Subtítulo: "Métricas comerciales en tiempo real para Ceibo AI Tech Solutions (ENTERPRISE)". Botones de acción: "Actualizar", "Ver Chats", "Entrenar Asistente" (este último como acción principal/destacada).

4 métricas:

1. Volumen de Consultas: 3.588 — +18.4% vs. mes anterior — "Últimos 30 días de actividad WhatsApp"

2. Horas Ahorradas: 588.6 h — 12 min promedio ahorrado por chat — "Equivale a ~3.7 asesores FTE de ventas liberados"

3. Tasa de Resolución IA: 82% — 2.943 resueltas por IA — "Sin intervención de asesor humano"

4. Derivadas a Humano: 645 — 18% escaladas a cierre — "Leads calificados para asesor comercial"

Gráfico: "Evolución de consultas — últimos 30 días", área/línea comparando "Resueltas por IA" vs "Derivadas a humano" a lo largo de 30 días (12 Ago a 06 Sep), con picos y valles realistas de actividad comercial (más alto en días de semana, más bajo en fines de semana).

Footer/banner: aviso de seguridad multi-tenant: "Todas las consultas y registros están aislados criptográficamente para la empresa [ID de tenant]".

Sidebar de navegación con: Dashboard (activo), Inbox, Chats, Base de Conocimiento, Configuración. Y un indicador de estado del bot abajo: "Bot WhatsApp — Operativo, Atención comercial automatizada activa 24/7".

Topbar con: nombre de la empresa cliente + badge de plan (ENTERPRISE), número de WhatsApp conectado, y usuario logueado (nombre + email + avatar).

Al final, decime en un resumen corto los hex codes exactos de la paleta y las tipografías elegidas, para que pueda documentarlos y aplicarlos consistentemente en el resto de las pantallas.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c8db5896-b6ff-4d57-9143-ebc0cc02df65).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
