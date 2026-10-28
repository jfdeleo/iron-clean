// Componente ExperienciaSeccion (Vue 3 en modo CDN/ESM, sin build)
// Los estilos se inyectan desde un IIFE porque <style> dentro del template no funciona en CDN.

(function () {
    if (document.getElementById('experiencia-seccion-styles')) return;

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
    .experiencia .experiencia-titulo {
      margin: 0;
      font-size: 1.9rem;
      font-weight: 700;
      line-height: 1.15;
      color: #0f1b3d;
      white-space: pre-line;
    }
    .experiencia .experiencia-texto {
      margin: 0;
      font-size: .85rem;
      line-height: 1.6;
      color: #5b6270;
    }
    @media (max-width: 767.98px) {
      .experiencia .experiencia-titulo { font-size: 1.6rem; }
      .experiencia .experiencia-texto { margin-top: 1rem; }
    }
  `;
    document.head.appendChild(style);
})();

export default {
    name: 'ExperienciaSeccion',
    props: {
        etiqueta: {
            type: String,
            default: 'Nuestra experiencia'
        },
        // Usá \n para forzar saltos de línea en el título
        titulo: {
            type: String,
            default: 'Más que limpieza,\nacompañamos grandes\nexperiencias.'
        },
        texto: {
            type: String,
            default: 'Contamos con amplia experiencia en eventos culturales, corporativos, exposiciones, desfiles y producciones especiales, brindando servicios de limpieza con altos estándares de calidad y supervisión permanente.'
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
            <span class="experiencia-label" style="font-weight: 900;font-size: 1.2em;">{{ etiqueta }}</span>
            <h2 class="experiencia-titulo">
              <div
                v-for="(linea, indice) in lineasTitulo"
                :key="indice"
                class="experiencia-titulo-linea"
              >{{ linea }}</div>
            </h2>
          </div>
          <div class="col-md-6">
            <p class="experiencia-texto" style="padding-top: 1em;font-size: unset;">{{ texto }}</p>
          </div>
        </div>
      </div>
    </section>
  `
};