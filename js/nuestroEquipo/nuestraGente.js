
(function () {
    if (!document.querySelector('link[href*="Material+Icons"]')) {
        const link = document.createElement('link');
        link.id = 'nuestra-gente-material-icons';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined';
        document.head.appendChild(link);
    }

    if (document.getElementById('nuestra-gente-styles')) return;

    const style = document.createElement('style');
    style.id = 'nuestra-gente-styles';
    style.textContent = `
    .nuestra-gente {
      --ng-azul: #0d2b52;
      --ng-texto: #4a5568;
      --ng-acento: #2f5fa8;
      --ng-margen: 5%;

      width: 100%;
      padding: 2.5rem 0;
      background: #ffffff;
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
      color: var(--ng-texto);
    }

    .nuestra-gente .nuestra-gente-grilla {
      display: grid;
      /* La primera columna ahora coincide con el ancho de la imagen */
      grid-template-columns: .75fr 1.25fr .85fr;
      gap: 2.2rem;
      align-items: stretch;
      width: 100%;
    }

    /* Imagen */
    .nuestra-gente .nuestra-gente-media {
      position: relative;
      margin: 0;
      width: 100%;
      aspect-ratio: 1 / 1;
      min-height: 0;
      align-self: center;
      justify-self: center;
      overflow: hidden;
      background: #dfe6ef;
    }

    .nuestra-gente .nuestra-gente-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    .nuestra-gente .nuestra-gente-leyenda {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 3rem var(--ng-margen) 1.4rem 1.4rem;
      background: linear-gradient(to top, rgba(8, 27, 54, .85), rgba(8, 27, 54, 0));
      color: #ffffff;
      font-size: 1.15rem;
      font-weight: 700;
      line-height: 1.2;
      text-transform: uppercase;
      white-space: pre-line;
    }

    /* Contenido central */
    .nuestra-gente .nuestra-gente-contenido {
      align-self: center;
    }

    .nuestra-gente .nuestra-gente-titulo {
      margin: 0 0 .5rem;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.15;
      color: var(--ng-azul);
    }

    .nuestra-gente .nuestra-gente-subtitulo {
      margin: 0 0 .9rem;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.3;
      color: var(--ng-azul);
    }

    .nuestra-gente .nuestra-gente-parrafo {
      margin: 0 0 1.3rem;
      font-size: .9rem;
      line-height: 1.55;
      color: var(--ng-texto);
    }

    .nuestra-gente .nuestra-gente-lista {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .nuestra-gente .nuestra-gente-lista li {
      display: flex;
      align-items: center;
      gap: .8rem;
      padding: .45rem 0;
      font-size: .9rem;
      color: var(--ng-azul);
    }

    .nuestra-gente .nuestra-gente-check {
      flex: 0 0 auto;
      font-size: 1.4rem;
      line-height: 1;
      color: var(--ng-azul);
      user-select: none;
    }

    /* Tarjeta de la cita */
    .nuestra-gente .nuestra-gente-cita {
      align-self: center;
      margin-right: var(--ng-margen);
      padding: 1.8rem 1.6rem;
      border-radius: .9rem;
      background: linear-gradient(135deg, #f5f7fb, #e9eef6);
      box-shadow: 0 6px 20px rgba(13, 43, 82, .08);
      height: 100%;
    }

    .nuestra-gente .nuestra-gente-comillas {
      display: block;
      margin-bottom: .2rem;
      font-size: 2.2rem;
      line-height: 1;
      color: #8fb0dc;
      user-select: none;
    }

    .nuestra-gente .nuestra-gente-frase {
      margin: 0;
      font-size: 1.35rem;
      font-weight: 700;
      line-height: 1.3;
      color: var(--ng-azul);
    }

    .nuestra-gente .nuestra-gente-linea-clara {
      width: 2.6rem;
      height: 2px;
      margin: 1rem 0;
      background: var(--ng-acento);
      opacity: .6;
    }

    .nuestra-gente .nuestra-gente-cita-texto {
      margin: 0;
      font-size: .85rem;
      line-height: 1.5;
      color: var(--ng-texto);
    }

    .nuestra-gente .nuestra-gente-linea-oscura {
      width: 2rem;
      height: 3px;
      margin-top: 1.4rem;
      background: var(--ng-azul);
    }

    /* Tablet */
    @media (max-width: 991.98px) {
      .nuestra-gente .nuestra-gente-grilla {
        grid-template-columns: .75fr 1fr;
        gap: 1.8rem;
      }

      .nuestra-gente .nuestra-gente-media {
        grid-column: 1;
        grid-row: 1;
        width: 100%;
      }

      .nuestra-gente .nuestra-gente-contenido {
        grid-column: 2;
        grid-row: 1;
        padding-right: var(--ng-margen);
      }

      .nuestra-gente .nuestra-gente-cita {
        grid-column: 1 / -1;
        grid-row: 2;
        height: auto;
        margin: 0 var(--ng-margen);
      }
    }

    /* Celular */
    @media (max-width: 639.98px) {
      .nuestra-gente {
        --ng-margen: 6%;
        padding: 0 0 1.8rem;
      }

      .nuestra-gente .nuestra-gente-grilla {
        grid-template-columns: 1fr;
        gap: 1.6rem;
      }

      .nuestra-gente .nuestra-gente-media {
        grid-column: auto;
        grid-row: auto;
        width: 75%;
        max-height: none;
        justify-self: center;
      }

      .nuestra-gente .nuestra-gente-contenido {
        grid-column: auto;
        grid-row: auto;
        padding: 0 var(--ng-margen);
      }

      .nuestra-gente .nuestra-gente-cita {
        grid-column: auto;
        grid-row: auto;
        margin: 0 var(--ng-margen);
      }

      .nuestra-gente .nuestra-gente-leyenda {
        padding-left: var(--ng-margen);
      }

      .nuestra-gente .nuestra-gente-titulo {
        font-size: 1.7rem;
      }

      .nuestra-gente .nuestra-gente-frase {
        font-size: 1.2rem;
      }
    }
  `;

    document.head.appendChild(style);
})();

export default {
    name: 'NuestraGente',

    props: {
        imagen: {
            type: String,
            default: ''
        },

        leyenda: {
            type: String,
            default: 'Personas\nque hacen\nla diferencia'
        },

        alt: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            beneficios: [
                'Formación continua',
                'Protocolos de seguridad',
                'Supervisión permanente',
                'Respuesta inmediata'
            ]
        };
    },

    template: `
    <section class="nuestra-gente">
      <div class="nuestra-gente-grilla">

        <figure class="nuestra-gente-media">
          <img
            v-if="imagen"
            class="nuestra-gente-img"
            :src="imagen"
            :alt="alt"
          />

          <figcaption
            v-if="leyenda"
            class="nuestra-gente-leyenda"
          >{{ leyenda }}</figcaption>
        </figure>

        <div class="nuestra-gente-contenido">
          <h2 class="nuestra-gente-titulo">Nuestra gente</h2>

          <h3 class="nuestra-gente-subtitulo">
            Personas comprometidas con la excelencia
          </h3>

          <p class="nuestra-gente-parrafo">
            Nuestro equipo está formado por supervisores, coordinadores y
            especialistas capacitados para mantener los más altos estándares
            de calidad operativa.
          </p>

          <ul class="nuestra-gente-lista">
            <li v-for="(beneficio, i) in beneficios" :key="i">
              <span
                class="material-icons nuestra-gente-check"
                aria-hidden="true"
              >check_circle</span>
              {{ beneficio }}
            </li>
          </ul>
        </div>

        <aside class="nuestra-gente-cita">
          <span
            class="material-icons nuestra-gente-comillas"
            aria-hidden="true"
          >format_quote</span>

          <p class="nuestra-gente-frase">
            “Un gran servicio comienza con grandes personas.”
          </p>

          <div class="nuestra-gente-linea-clara"></div>

          <p class="nuestra-gente-cita-texto">
            En Iron Clean SA creemos en el valor del trabajo en equipo y en el
            desarrollo de nuestra gente.
          </p>

          <div class="nuestra-gente-linea-oscura"></div>
        </aside>

      </div>
    </section>
  `
};
