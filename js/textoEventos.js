
(function () {
    if (document.getElementById('experiencia-seccion-styles')) return;

    // Cargar Material Icons si todavía no está disponible
    if (!document.getElementById('material-icons-font')) {
        const iconFont = document.createElement('link');
        iconFont.id = 'material-icons-font';
        iconFont.rel = 'stylesheet';
        iconFont.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
        document.head.appendChild(iconFont);
    }

    const style = document.createElement('style');
    style.id = 'experiencia-seccion-styles';

    style.textContent = `
    .experiencia {
      padding: 2rem 0;
      background: #f8f9fb;
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    }

    .experiencia .experiencia-label {
      display: block;
      margin-bottom: .5rem;
      font-size: .8rem;
      font-weight: 400;
      letter-spacing: .02em;
      text-transform: uppercase;
      color: #2f5fb3;
    }

    /* Tarjeta de cita */
    .experiencia .experiencia-cita {
      background: #eaf0f8;
      border-radius: 18px;
      padding: 2rem;
      box-shadow: 0 8px 25px rgba(15, 27, 61, 0.06);
      height: 100%;
    }

    /* Icono Material Icons */
    .experiencia .experiencia-cita-icono {
      display: block;
      font-family: 'Material Icons';
      font-size: 2.5rem;
      line-height: 1;
      color: #8eaddd;
      margin-bottom: .8rem;
    }

    /* Texto de la cita */
    .experiencia .experiencia-titulo {
      margin: 0;
      font-size: 1.9rem;
      font-weight: 700;
      line-height: 1.3;
      color: #0f1b3d;
    }

    .experiencia .experiencia-titulo-linea {
      display: inline;
    }

    /* Línea decorativa */
    .experiencia .experiencia-cita-linea {
      width: 42px;
      height: 2px;
      background: #2f5fb3;
      margin-top: 1.2rem;
      margin-bottom: 1.2rem;
    }

    .experiencia .experiencia-texto {
      margin: 0;
      font-size: .85rem;
      line-height: 1.6;
      color: #5b6270;
    }

    @media (max-width: 767.98px) {
      .experiencia .experiencia-titulo {
        font-size: 1.6rem;
      }

      .experiencia .experiencia-texto {
        margin-top: 1rem;
      }

      .experiencia .experiencia-cita {
        padding: 1.6rem;
      }
    }
    @media (min-width: 768px) {
    .experiencia .experiencia-cita-col {
        margin-left: 15%;
    }
}
    
  `;

    document.head.appendChild(style);
})();

export default {
    name: 'ExperienciaSeccion',

    props: {
        titulo: {
            type: String,
            default: 'Un gran servicio\ncomienza con grandes\npersonas.'
        },

        texto: {
            type: String,
            default: 'En Iron Clean SA creemos en el valor del trabajo en equipo y en el desarrollo de nuestra gente.'
        }
    },

    computed: {
        lineasTitulo() {
            return this.titulo.split(/\||\\n|\r?\n/).map(function (linea) {
                return linea.trim();
            }).filter(function (linea) {
                return linea.length > 0;
            });
        }
    },

    template: `
    <section class="experiencia">
      <div class="container">
        <div class="row align-items-center g-4">

          <div class="col-md-6">
            <p class="experiencia-texto" style="padding-top: 1em; font-size: 1.7em !important; font-weight: 700;">
              {{ texto }}
            </p>
          </div>

            <div class="col-md-4 experiencia-cita-col">
            <div class="experiencia-cita">

              <span class="experiencia-cita-icono">
                format_quote
              </span>

              <h2 class="experiencia-titulo">
                <span
                  v-for="(linea, indice) in lineasTitulo"
                  :key="indice"
                  class="experiencia-titulo-linea"
                >{{ linea }}{{ indice < lineasTitulo.length - 1 ? ' ' : '' }}</span>
              </h2>

              <div class="experiencia-cita-linea" style="font-size: 0.8em !important;></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `
};
