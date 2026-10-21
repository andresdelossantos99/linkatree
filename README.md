# Linkatree 🌳

Página personal tipo Linktree diseñada para centralizar proyectos, redes sociales y vías de contacto en una única interfaz limpia, rápida y responsiva.

Desarrollada por **Andrés De Los Santos**, pensada con una estética oscura moderna, microinteracciones fluidas y optimización completa para dispositivos móviles y escritorio.

---

## ⚡ Características principales

- **Perfil completo**: Avatar, biografía breve y ubicación.
- **Acceso rápido**: Enlaces a portfolio, GitHub, LinkedIn, WhatsApp, Instagram y correo electrónico.
- **Destacados**: Tarjeta con jerarquía visual prioritaria para resaltar el portafolio.
- **Fondo interactivo**: Animación fluida que reacciona al cursor y respeta automáticamente la preferencia `prefers-reduced-motion`.
- **Compartir en un clic**: Utiliza la Web Share API nativa o copia directamente la URL al portapapeles.
- **Exportación 100% estática**: Genera archivos HTML/JS listos para publicar en cualquier hosting sin requerir un servidor Node.js activo.

---

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Static Export)
- **UI & Estilos**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes & Iconos**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Instalación y desarrollo

### Requisitos previos

- Node.js `18.18` o superior (se recomienda versión LTS).
- gestor de paquetes `npm`.

### Pasos

1. Cloná el repositorio e ingresá al proyecto:

   ```bash
   git clone https://github.com/andresdelossantos99/linkatree.git
   cd linkatree/my-app
   ```

2. Instalá las dependencias necesarias:

   ```bash
   npm ci
   ```

3. Iniciá el servidor local de desarrollo con Turbopack:

   ```bash
   npm run dev
   ```

4. Abrí `http://localhost:3000` en tu navegador.

---

## 📜 Scripts disponibles

Ejecutar dentro de la carpeta `my-app/`:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el entorno de desarrollo con Turbopack. |
| `npm run lint` | Analiza el código con ESLint en busca de errores. |
| `npm run typecheck` | Verifica los tipos con el compilador de TypeScript. |
| `npm run build` | Compila y genera el sitio estático dentro del directorio `out/`. |
| `npm run export` | Alias para la compilación estática del proyecto. |
| `npm start` | Inicia un servidor local para previsualizar la carpeta `out/`. |

---

## 📁 Estructura del proyecto

```text
my-app/
├── public/
│   └── andres.jpg              # Imagen de perfil
├── src/
│   ├── app/
│   │   ├── globals.css         # Estilos globales y Tailwind CSS
│   │   ├── layout.tsx          # Tipografías, idioma y SEO/Metadatos
│   │   └── page.tsx            # Vista principal
│   ├── components/
│   │   ├── animated-background.tsx
│   │   ├── profile-header.tsx
│   │   ├── share-button.tsx
│   │   ├── social-link-card.tsx
│   │   └── ui/                 # Componentes base
│   └── lib/
│       ├── profile.ts          # Configuración de datos del perfil y links
│       └── utils.ts            # Helpers para clases de Tailwind
├── next.config.ts              # Configuración de exportación estática (`output: 'export'`)
└── package.json
```

---

## ⚙️ Configuración y personalización

### 1. Datos y enlaces

Toda la información del perfil se gestiona en `src/lib/profile.ts`:

- `profileData`: Modificá nombre, bio, ubicación y ruta de la foto de perfil.
- `socialLinks`: Agregá o quitá enlaces ajustando título, descripción, URL, icono y estilos.
- `featured: true`: Define qué enlace se destaca visualmente en la parte superior.

### 2. Recursos y estilos

- **Avatar**: Guardá tu imagen en `public/` (ej. `public/avatar.jpg`) y referenciala como `/avatar.jpg` en `profile.ts`.
- **Estilos globales**: Editá `src/app/globals.css` para ajustar la paleta de colores.
- **SEO & Metadatos**: Personalizá título y descripción en `src/app/layout.tsx`.

---

## 📦 Despliegue (Production)

Al estar configurado con `output: "export"`, la compilación produce una carpeta estática en `my-app/out/`.

### Servir la build localmente

```bash
npm run build
npm start
```

### Configuración en plataformas PaaS (Vercel, Netlify, Cloudflare Pages)

| Parámetro | Valor |
| :--- | :--- |
| **Root Directory** | `my-app` |
| **Build Command** | `npm run build` |
| **Output Directory** | `out` |
| **Install Command** | `npm ci` |

> **Nota**: Durante la compilación, Next.js se conecta a Google Fonts para descargar las fuentes *Playfair Display* y *Source Sans 3*. Asegurate de tener acceso a internet en el entorno de CI/CD.

---

## 👤 Autor

**Andrés De Los Santos** — *Full Stack Developer & Teaching Assistant*

- 🌐 [Portfolio](https://portfolio-qm9g.vercel.app/)
- 💻 [GitHub](https://github.com/andresdelossantos99)
- 👔 [LinkedIn](https://www.linkedin.com/in/andres-de-los-santos-48382a349/)