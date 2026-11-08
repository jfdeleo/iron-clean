// Componente EspecialistasGrid (Vue 3 en modo CDN/ESM, sin build)
// Los estilos se inyectan desde un IIFE porque <style> dentro del template no funciona en CDN.
// Siempre muestra 6 tarjetas (imagen + icono + texto). Todo se pasa por props.

(function () {
    // Fuente Material Icons de Google. Si la página ya la carga (desde cualquier
    // componente o desde el index.html), no se vuelve a agregar.
    if (!document.querySelector('link[href*="Material+Icons"]')) {
        const link = document.createElement('link');
        link.id = 'especialistas-grid-material-icons';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp';
        document.head.appendChild(link);
    }

    if (document.getElementById('especialistas-grid-styles')) return;

    const style = document.createElement('style');
    style.id = 'especialistas-grid-styles';
    style.textContent = `
    .especialistas-grid {
      --esp-azul: #0d2b52;
      --esp-acento: #2f5fa8;

      width: 100%;
      padding: 2rem 5%;
      background: #ffffff;
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
      color: var(--esp-azul);
    }
    .especialistas-grid .especialistas-grid-titulo {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.2;
      color: var(--esp-azul);
    }
    .especialistas-grid .especialistas-grid-subtitulo {
      margin: .15rem 0 1.2rem;
      font-size: .95rem;
      font-weight: 400;
      line-height: 1.3;
      color: var(--esp-azul);
    }
    .especialistas-grid .especialistas-grid-lista {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
    }
    .especialistas-grid .especialistas-grid-tarjeta {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: .6rem;
      background: #eef2f8;
      box-shadow: 0 3px 10px rgba(13, 43, 82, .08);
    }
    .especialistas-grid .especialistas-grid-imagen {
      width: 100%;
      aspect-ratio: 4 / 2.6;
      background: #d5dde9;
      overflow: hidden;
    }
    .especialistas-grid .especialistas-grid-imagen img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .especialistas-grid .especialistas-grid-info {
      display: flex;
      align-items: center;
      gap: .7rem;
      flex: 1 1 auto;
      padding: .9rem .9rem;
    }
    .especialistas-grid .especialistas-grid-icono {
      flex: 0 0 auto;
      font-size: 1.7rem;
      line-height: 1;
      color: var(--esp-acento);
      user-select: none;
    }
    .especialistas-grid .especialistas-grid-texto {
      margin: 0;
      font-size: .85rem;
      font-weight: 700;
      line-height: 1.25;
      color: var(--esp-azul);
      white-space: pre-line;
    }

    /* Tablet: 3 columnas */
    @media (max-width: 991.98px) {
      .especialistas-grid .especialistas-grid-lista {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    /* Celular: 2 columnas */
    @media (max-width: 575.98px) {
      .especialistas-grid { padding: 1.6rem 6%; }
      .especialistas-grid .especialistas-grid-lista {
        grid-template-columns: repeat(2, 1fr);
        gap: .8rem;
      }
      .especialistas-grid .especialistas-grid-titulo { font-size: 1.4rem; }
      .especialistas-grid .especialistas-grid-info { padding: .7rem; gap: .5rem; }
      .especialistas-grid .especialistas-grid-icono { font-size: 1.5rem; }
      .especialistas-grid .especialistas-grid-texto { font-size: .8rem; }
    }
  `;
    document.head.appendChild(style);
})();

// Clase de la fuente según el estilo pedido en cada tarjeta.
const CLASES_MATERIAL = {
    filled: 'material-icons',
    outlined: 'material-icons-outlined',
    round: 'material-icons-round',
    sharp: 'material-icons-sharp'
};

export default {
    name: 'EspecialistasGrid',
    props: {
        titulo: {
            type: String,
            default: 'Nuestros especialistas'
        },
        subtitulo: {
            type: String,
            default: 'Talento en cada servicio'
        },
        // Siempre se muestran 6 tarjetas (si pasás más, se usan las primeras 6).
        // [{ imagen, icono, texto, alt?, estilo? }]
        //  - imagen: ruta o URL de la foto
        //  - icono: nombre de un Material Icon de Google (https://fonts.google.com/icons)
        //  - texto: usá \n para un salto de línea
        //  - alt (opcional): texto alternativo de la imagen
        //  - estilo (opcional): 'filled' (por defecto), 'outlined', 'round' o 'sharp'
        items: {
            type: Array,
            default: function () {
                return [
                    { imagen: '', icono: 'hub',              texto: 'Limpieza\nCorporativa' },
                    { imagen: '', icono: 'factory',          texto: 'Limpieza\nIndustrial' },
                    { imagen: '', icono: 'engineering',      texto: 'Mantenimiento\nIntegral' },
                    { imagen: '', icono: 'groups',           texto: 'Logística\nOperativa' },
                    { imagen: '', icono: 'supervisor_account', texto: 'Supervisión\nTécnica' },
                    { imagen: '', icono: 'health_and_safety', texto: 'Seguridad\ne Higiene' }
                ];
            }
        }
    },
    computed: {
        tarjetas() {
            return this.items.slice(0, 6);
        }
    },
    methods: {
        claseIcono(item) {
            const base = CLASES_MATERIAL[item.estilo] || CLASES_MATERIAL.filled;
            return base + ' especialistas-grid-icono';
        }
    },
    template: `
    <section class="especialistas-grid">
      <h2 v-if="titulo" class="especialistas-grid-titulo">{{ titulo }}</h2>
      <p v-if="subtitulo" class="especialistas-grid-subtitulo">{{ subtitulo }}</p>

      <div class="especialistas-grid-lista">
        <article
          v-for="(item, i) in tarjetas"
          :key="i"
          class="especialistas-grid-tarjeta"
        >
          <div class="especialistas-grid-imagen">
            <img v-if="item.imagen" :src="item.imagen" :alt="item.alt || item.texto" />
          </div>
          <div class="especialistas-grid-info">
            <span :class="claseIcono(item)" aria-hidden="true">{{ item.icono }}</span>
            <p class="especialistas-grid-texto">{{ item.texto }}</p>
          </div>
        </article>
      </div>
    </section>
  `
};