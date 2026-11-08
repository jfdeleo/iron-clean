// Componente CertificacionesAlianzas (Vue 3 en modo CDN/ESM, sin build)
// Los estilos se inyectan desde un IIFE porque <style> dentro del template no funciona en CDN.
// Muestra las imágenes que le pasés, todas dentro de un recuadro del mismo tamaño.

(function () {
    if (document.getElementById('certificaciones-alianzas-styles')) return;

    const style = document.createElement('style');
    style.id = 'certificaciones-alianzas-styles';
    style.textContent = `
    .certificaciones-alianzas {
      --ca-azul: #0d2b52;
      --ca-tam: clamp(4.2rem, 3rem + 2.4vw, 7rem);

      width: 100%;
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
      color: var(--ca-azul);
    }
    .certificaciones-alianzas .certificaciones-alianzas-titulo {
      margin: 0;
      font-size: clamp(1.4rem, .9rem + .9vw, 2.2rem);
      font-weight: 700;
      line-height: 1.2;
      color: var(--ca-azul);
    }
    .certificaciones-alianzas .certificaciones-alianzas-subtitulo {
      margin: .15rem 0 1.4rem;
      font-size: clamp(.9rem, .6rem + .4vw, 1.2rem);
      line-height: 1.3;
      color: var(--ca-azul);
    }
    .certificaciones-alianzas .certificaciones-alianzas-lista {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      gap: 1.2rem 1rem;
    }
    /* Todos los recuadros miden lo mismo; la imagen se ajusta adentro sin deformarse */
    .certificaciones-alianzas .certificaciones-alianzas-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--ca-tam);
      height: var(--ca-tam);
      flex: 0 0 auto;
    }
    .certificaciones-alianzas .certificaciones-alianzas-item img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media (max-width: 575.98px) {
      .certificaciones-alianzas .certificaciones-alianzas-lista {
        justify-content: center;
        gap: 1rem 1.4rem;
      }
    }
  `;
    document.head.appendChild(style);
})();

export default {
    name: 'CertificacionesAlianzas',
    props: {
        titulo: {
            type: String,
            default: 'Certificaciones y alianzas'
        },
        subtitulo: {
            type: String,
            default: 'Respaldados por estándares de calidad'
        },
        // Lista de imágenes. Cada elemento puede ser la ruta (texto) o un objeto
        // { imagen, alt? }. Todas se muestran en un recuadro del mismo tamaño.
        imagenes: {
            type: Array,
            default: function () {
                return [];
            }
        },
        // Tamaño del recuadro (cualquier medida CSS, ej: '6rem' o '90px').
        // Vacío = tamaño automático según el ancho de la pantalla.
        tamano: {
            type: String,
            default: ''
        }
    },
    computed: {
        items() {
            return this.imagenes.map(function (elemento) {
                return typeof elemento === 'string'
                    ? { imagen: elemento, alt: '' }
                    : { imagen: elemento.imagen, alt: elemento.alt || '' };
            });
        },
        estiloContenedor() {
            return this.tamano ? { '--ca-tam': this.tamano } : {};
        }
    },
    template: `
    <section class="certificaciones-alianzas" :style="estiloContenedor">
      <h2 v-if="titulo" class="certificaciones-alianzas-titulo" style="padding-top: 0.2em;padding-bottom: 0.2em;">{{ titulo }}</h2>
      <p v-if="subtitulo" class="certificaciones-alianzas-subtitulo">{{ subtitulo }}</p>

      <div class="certificaciones-alianzas-lista">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="certificaciones-alianzas-item"
        >
          <img :src="item.imagen" :alt="item.alt" />
        </div>
      </div>
    </section>
  `
};