# Sebastian Castillo Portfolio

## Publicar en Windows y Netlify

Requisitos: instala [Node.js](https://nodejs.org/) 18 o superior.

1. Descomprime este ZIP.
2. Abre la carpeta `sebastian-castillo-portfolio`.
3. Haz clic derecho en un espacio vacío y selecciona **Abrir en Terminal**. También puedes abrir PowerShell y escribir `cd` seguido de la ruta de la carpeta, por ejemplo:

```powershell
cd "C:\Users\TuUsuario\Downloads\sebastian-castillo-portfolio"
```

4. Instala pnpm una sola vez si no lo tienes:

```powershell
corepack enable
corepack prepare pnpm@10.4.1 --activate
```

5. Instala las dependencias:

```powershell
pnpm install
```

6. Genera el sitio listo para Netlify:

```powershell
pnpm build
```

7. En Netlify selecciona **Add new site → Deploy manually** y arrastra la carpeta `dist/public`.

Para probarlo localmente antes de publicar:

```powershell
pnpm dev
```

Después abre la dirección que aparezca en la terminal, normalmente `http://localhost:3000`.

Este paquete incluye el código, las imágenes y el CV; no necesitas descargar recursos adicionales.
