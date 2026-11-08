// Componente NuestrosValores (Vue 3 en modo CDN/ESM, sin build)
// Los estilos se inyectan desde un IIFE porque <style> dentro del template no funciona en CDN.
// Todo el texto es fijo y los iconos son Material Icons. Solo la foto se pasa por props.
// Los tamaños de texto e iconos escalan con el ancho de la pantalla (clamp) para que
// el bloque se vea proporcionado tanto en notebooks como en pantallas anchas.

(function () {
    // Fuente Material Icons de Google. Si la página ya la carga (desde cualquier
    // componente o desde el index.html), no se vuelve a agregar.
    if (!document.querySelector('link[href*="Material+Icons"]')) {
        const link = document.createElement('link');
        link.id = 'nuestros-valores-material-icons';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined';
        document.head.appendChild(link);
    }

    if (document.getElementById('nuestros-valores-styles')) return;

    const style = document.createElement('style');
    style.id = 'nuestros-valores-styles';
    style.textContent = `
    .nuestros-valores {
      --nv-azul: #0d2b52;
      --nv-texto: #4a5568;
      --nv-acento: #2f5fa8;
      --nv-divisor: rgba(13, 43, 82, .15);

      width: 100%;
      padding: clamp(1.6rem, 1rem + 1.2vw, 2.8rem) 5%;
      background: #eef2f7;
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
      color: var(--nv-texto);
    }
    .nuestros-valores .nuestros-valores-grilla {
      display: grid;
      grid-template-columns: 2.5fr 1fr .8fr;
      gap: clamp(1.5rem, .5rem + 2vw, 3.2rem);
      align-items: center;
    }

    /* Bloque de valores */
    .nuestros-valores .nuestros-valores-titulo {
      margin: 0;
      font-size: clamp(1.5rem, .9rem + .9vw, 2.4rem);
      font-weight: 700;
      line-height: 1.2;
      color: var(--nv-azul);
    }
    .nuestros-valores .nuestros-valores-subtitulo {
      margin: .15rem 0 clamp(1rem, .6rem + .7vw, 1.6rem);
      font-size: clamp(.9rem, .6rem + .4vw, 1.2rem);
      line-height: 1.3;
      color: var(--nv-azul);
    }
    .nuestros-valores .nuestros-valores-lista {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    .nuestros-valores .nuestros-valores-item {
      padding: .2rem 1rem;
      text-align: center;
    }
    .nuestros-valores .nuestros-valores-item + .nuestros-valores-item {
      border-left: 1px solid var(--nv-divisor);
    }
    .nuestros-valores .nuestros-valores-icono {
      display: block;
      margin-bottom: .6rem;
      font-size: clamp(2.2rem, 1.2rem + 1.1vw, 3.6rem);
      line-height: 1;
      color: var(--nv-azul);
      user-select: none;
    }
    .nuestros-valores .nuestros-valores-nombre {
      margin: 0 0 .35rem;
      font-size: clamp(.9rem, .65rem + .4vw, 1.2rem);
      font-weight: 700;
      line-height: 1.2;
      color: var(--nv-azul);
    }
    .nuestros-valores .nuestros-valores-detalle {
      margin: 0;
      font-size: clamp(.78rem, .6rem + .3vw, 1rem);
      line-height: 1.4;
      color: var(--nv-texto);
      white-space: pre-line;
    }

    /* Foto */
    .nuestros-valores .nuestros-valores-foto {
      margin: 0;
      overflow: hidden;
      border-radius: .6rem;
      aspect-ratio: 4 / 2.9;
      background: #d5dde9;
    }
    .nuestros-valores .nuestros-valores-foto img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Cita */
    .nuestros-valores .nuestros-valores-cita {
      margin: 0;
    }
    .nuestros-valores .nuestros-valores-comillas {
      display: block;
      margin-bottom: .1rem;
      font-size: clamp(2rem, 1.4rem + .7vw, 2.8rem);
      line-height: 1;
      color: #8fb0dc;
      user-select: none;
    }
    .nuestros-valores .nuestros-valores-frase {
      margin: 0;
      font-size: clamp(1.05rem, .7rem + .55vw, 1.6rem);
      font-weight: 700;
      line-height: 1.3;
      color: var(--nv-azul);
    }
    .nuestros-valores .nuestros-valores-linea {
      width: 2.4rem;
      height: 2px;
      margin-top: .9rem;
      background: var(--nv-acento);
      opacity: .6;
    }

    /* Tablet: valores arriba a todo el ancho; foto y cita debajo */
    @media (max-width: 991.98px) {
      .nuestros-valores .nuestros-valores-grilla {
        grid-template-columns: 1fr 1fr;
        gap: 1.6rem;
      }
      .nuestros-valores .nuestros-valores-bloque {
        grid-column: 1 / -1;
      }
      .nuestros-valores .nuestros-valores-foto {
        aspect-ratio: 4 / 3;
      }
    }

    /* Celular: valores en 2x2, foto y cita apiladas */
    @media (max-width: 575.98px) {
      .nuestros-valores { padding: 1.6rem 6%; }
      .nuestros-valores .nuestros-valores-grilla {
        grid-template-columns: 1fr;
      }
      .nuestros-valores .nuestros-valores-lista {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1.4rem;
      }
      .nuestros-valores .nuestros-valores-item + .nuestros-valores-item {
        border-left: 0;
      }
      .nuestros-valores .nuestros-valores-item:nth-child(even) {
        border-left: 1px solid var(--nv-divisor);
      }
    }
  `;
    document.head.appendChild(style);
})();

export default {
    name: 'NuestrosValores',
    props: {
        // Foto del centro (ruta o URL)
        imagen: {
            type: String,
            default: ''
        },
        // Texto alternativo de la foto (accesibilidad)
        alt: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            // Contenido fijo
            valores: [
                {
                    icono: 'diamond',
                    clase: 'material-icons-outlined',
                    nombre: 'Excelencia',
                    detalle: 'Buscamos superar\nexpectativas.'
                },
                {
                    icono: 'person',
                    clase: 'material-icons',
                    nombre: 'Compromiso',
                    detalle: 'Respondemos con rapidez\ny responsabilidad.'
                },
                {
                    icono: 'lightbulb',
                    clase: 'material-icons-outlined',
                    nombre: 'Innovación',
                    detalle: 'Aplicamos procesos\nmodernos y eficientes.'
                },
                {
                    icono: 'groups',
                    clase: 'material-icons',
                    nombre: 'Trabajo en Equipo',
                    detalle: 'La colaboración\nimpulsa nuestros resultados.'
                }
            ]
        };
    },
    template: `
    <section class="nuestros-valores">
      <div class="nuestros-valores-grilla">

        <div class="nuestros-valores-bloque">
          <h2 class="nuestros-valores-titulo">Nuestros valores</h2>
          <p class="nuestros-valores-subtitulo">La base de nuestro equipo</p>
          <div class="nuestros-valores-lista">
            <div
              v-for="(valor, i) in valores"
              :key="i"
              class="nuestros-valores-item"
            >
              <span :class="valor.clase + ' nuestros-valores-icono'" aria-hidden="true">{{ valor.icono }}</span>
              <p class="nuestros-valores-nombre">{{ valor.nombre }}</p>
              <p class="nuestros-valores-detalle">{{ valor.detalle }}</p>
            </div>
          </div>
        </div>

        <figure class="nuestros-valores-foto">
          <img v-if="imagen" :src="imagen" :alt="alt" />
        </figure>

        <blockquote class="nuestros-valores-cita">
          <span class="material-icons nuestros-valores-comillas" aria-hidden="true">format_quote</span>
          <p class="nuestros-valores-frase">“Juntos creamos espacios mejores para un futuro más limpio.”</p>
          <div class="nuestros-valores-linea"></div>
        </blockquote>

      </div>
    </section>
  `
};