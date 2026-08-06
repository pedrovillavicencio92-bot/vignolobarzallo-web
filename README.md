# Vignolo Barzallo — Sitio web

Sitio institucional del Estudio Jurídico Vignolo Barzallo (Cuenca, Ecuador).

HTML, CSS y JavaScript puros — sin frameworks ni proceso de compilación.
Bilingüe (español / inglés) y responsive.

## Cómo verlo localmente

No requiere instalación. Desde esta carpeta:

```bash
python3 -m http.server 8090
```

Luego abrir <http://localhost:8090>

> Abrir `index.html` directamente con doble clic **no funciona bien**: el sitio
> carga contenido con JavaScript y algunos navegadores lo bloquean bajo `file://`.
> Usar siempre el servidor local.

## Estructura

```
index.html      Estructura base: <head>, header, footer y widgets fijos
                (WhatsApp flotante, quiz, banner de cookies).
                El contenido de cada página se inyecta en <main id="page-content">.

css/style.css   Todos los estilos. Empieza con :root, que define los tokens
                de color, tipografía y movimiento.

js/script.js    Toda la lógica. Contiene además TODO el contenido del sitio
                (textos en ES/EN, datos del equipo, áreas de práctica).

img/            Imágenes en formato .webp
```

## Dónde editar cada cosa

Casi todo el contenido vive en `js/script.js`, cerca del inicio del archivo:

| Qué cambiar | Dónde |
|---|---|
| Textos de cualquier página (ES/EN) | objeto `translations` |
| Miembros del equipo, fotos, biografías | objeto `teamMembers` |
| Personal administrativo | array `adminTeam` |
| Áreas de práctica y sus contenidos | `translations.<idioma>.areas.groups` |
| Preguntas del buscador de área legal | `translations.<idioma>.quiz` |

## Convenciones importantes

**1. Versionado de caché.** `index.html` enlaza el CSS y el JS con un número de
versión (`style.css?v=25`). Al modificar cualquiera de esos dos archivos, **hay
que subir ese número**; si no, los navegadores siguen sirviendo la versión vieja
y los cambios no se ven.

**2. Sistema de movimiento.** Las duraciones y curvas de animación están
centralizadas en `:root` (`--duration-*`, `--ease-standard`) y en la constante
`MOTION` de `script.js`. Usar esos valores en vez de escribir números sueltos,
para que todo el sitio se sienta coherente.

**3. Puntos de quiebre (responsive).** Solo se usan tres:
- `900px` — tablet
- `760px` — activa el menú hamburguesa
- `600px` — móvil

**4. Accesibilidad.** El sitio respeta `prefers-reduced-motion`. Si se agregan
animaciones nuevas, verificar que no molesten con esa preferencia activada.

**5. Imágenes.** Siempre en `.webp` y optimizadas. Retratos del equipo en
proporción 3:4 (900×1200). Para convertir:

```bash
cwebp -q 82 -resize 900 1200 foto.jpg -o img/team-nombre.webp
```

## Flujo de trabajo

Trabajar en ramas y abrir Pull Request para revisar antes de integrar a `main`:

```bash
git checkout -b nombre-del-cambio
# ...editar...
git add .
git commit -m "Descripción breve del cambio"
git push -u origin nombre-del-cambio
```

## Pendientes

- Fotografías reales para la página *Nosotros* (2) y para 6 de las 9 áreas de
  práctica. Tres áreas usan fotos de stock de Unsplash con crédito visible;
  conviene reemplazarlas por material propio.
- Credenciales y áreas de práctica de los tres abogados incorporados
  recientemente.
- El formulario de contacto abre el cliente de correo del visitante (`mailto:`).
  Para recibir los mensajes directamente conviene conectar un servicio como
  Formspree.
- Publicación: definir hosting y conectar el dominio.
