// Componente BarraEstadisticas (Vue 3 en modo CDN/ESM, sin build)
// Los estilos se inyectan desde un IIFE porque <style> dentro del template no funciona en CDN.

(function () {
    // Fuente Material Icons de Google (clásica: filled, outlined, round y sharp).
    // Si la página ya la carga en otro lado, no se vuelve a agregar.
    if (!document.getElementById('barra-estadisticas-material-icons')) {
        const link = document.createElement('link');
        link.id = 'barra-estadisticas-material-icons';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp';
        document.head.appendChild(link);
    }

    if (document.getElementById('barra-estadisticas-styles')) return;

    const style = document.createElement('style');
    style.id = 'barra-estadisticas-styles';
    style.textContent = `
    .barra-estadisticas {
      --est-divisor: rgba(255, 255, 255, .15);
      --est-texto: #ffffff;
      --est-texto-suave: #b9c8da;

      padding: 2.2rem 5%;
      background: #0a2a4f;
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
      color: var(--est-texto);
    }
    .barra-estadisticas .barra-estadisticas-grilla {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      max-width: 1200px;
      margin: 0 auto;
    }
    .barra-estadisticas .barra-estadisticas-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: .4rem 1.6rem;
    }
    .barra-estadisticas .barra-estadisticas-item + .barra-estadisticas-item {
      border-left: 1px solid var(--est-divisor);
    }
    .barra-estadisticas .barra-estadisticas-icono {
      flex: 0 0 auto;
      font-size: 3rem;
      line-height: 1;
      color: var(--est-texto);
      user-select: none;
    }
    .barra-estadisticas .barra-estadisticas-numero {
      margin: 0;
      font-size: 1.9rem;
      font-weight: 700;
      line-height: 1.1;
    }
    .barra-estadisticas .barra-estadisticas-titulo {
      margin: .25rem 0 .35rem;
      font-size: .9rem;
      font-weight: 500;
      line-height: 1.3;
    }
    .barra-estadisticas .barra-estadisticas-detalle {
      margin: 0;
      font-size: .8rem;
      line-height: 1.4;
      color: var(--est-texto-suave);
      white-space: pre-line;
    }

    /* Tablet: 2 columnas */
    @media (max-width: 991.98px) {
      .barra-estadisticas .barra-estadisticas-grilla {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1.6rem;
      }
      .barra-estadisticas .barra-estadisticas-item + .barra-estadisticas-item {
        border-left: 0;
      }
      .barra-estadisticas .barra-estadisticas-item:nth-child(even) {
        border-left: 1px solid var(--est-divisor);
      }
      .barra-estadisticas .barra-estadisticas-item:nth-child(n + 3) {
        padding-top: 1.6rem;
        border-top: 1px solid var(--est-divisor);
      }
    }

    /* Celular: 1 columna */
    @media (max-width: 575.98px) {
      .barra-estadisticas { padding: 1.8rem 6%; }
      .barra-estadisticas .barra-estadisticas-grilla {
        grid-template-columns: 1fr;
        row-gap: 0;
      }
      .barra-estadisticas .barra-estadisticas-item,
      .barra-estadisticas .barra-estadisticas-item:nth-child(even),
      .barra-estadisticas .barra-estadisticas-item:nth-child(n + 3) {
        border-left: 0;
        padding: 1.2rem 0;
      }
      .barra-estadisticas .barra-estadisticas-item + .barra-estadisticas-item {
        border-top: 1px solid var(--est-divisor);
      }
      .barra-estadisticas .barra-estadisticas-icono { font-size: 2.6rem; }
      .barra-estadisticas .barra-estadisticas-numero { font-size: 1.7rem; }
    }
  `;
    document.head.appendChild(style);
})();

// Clase de la fuente según el estilo pedido en cada estadística.
const CLASES_MATERIAL = {
    filled: 'material-icons',
    outlined: 'material-icons-outlined',
    round: 'material-icons-round',
    sharp: 'material-icons-sharp'
};

export default {
    name: 'BarraEstadisticas',
    props: {
        // Color de fondo del componente (cualquier color CSS).
        // Si lo dejás vacío se usa el azul marino por defecto (#0a2a4f).
        fondo: {
            type: String,
            default: ''
        },
        // Lista de estadísticas: [{ icono, numero, titulo, detalle, estilo? }]
        //  - icono: nombre de un Material Icon de Google (https://fonts.google.com/icons)
        //  - numero: texto grande, ej: '+15', '98%', '24/7'
        //  - titulo: línea en negrita media
        //  - detalle: texto chico; usá \n para un salto de línea
        //  - estilo (opcional): 'outlined' (por defecto), 'filled', 'round' o 'sharp'
        estadisticas: {
            type: Array,
            default: function () {
                return [
                    {
                        icono: 'groups',
                        numero: '+15',
                        titulo: 'Años de experiencia',
                        detalle: 'Acompañando a empresas\nde todo el país'
                    },
                    {
                        icono: 'apartment',
                        numero: '+500',
                        titulo: 'Servicios mensuales',
                        detalle: 'En oficinas, industrias\ny grandes superficies'
                    },
                    {
                        icono: 'star_border',
                        numero: '98%',
                        titulo: 'Satisfacción del cliente',
                        detalle: 'Basada en nuestro\ncompromiso y calidad'
                    },
                    {
                        icono: 'schedule',
                        numero: '24/7',
                        titulo: 'Cobertura operativa',
                        detalle: 'Siempre listos\npara tu operación'
                    }
                ];
            }
        }
    },
    computed: {
        estiloContenedor() {
            return this.fondo ? { background: this.fondo } : {};
        }
    },
    methods: {
        claseIcono(item) {
            const base = CLASES_MATERIAL[item.estilo] || CLASES_MATERIAL.outlined;
            return base + ' barra-estadisticas-icono';
        }
    },
    template: `
    <section class="barra-estadisticas" :style="estiloContenedor">
      <div class="barra-estadisticas-grilla">
        <div
          v-for="(item, i) in estadisticas"
          :key="i"
          class="barra-estadisticas-item"
        >
          <span :class="claseIcono(item)" aria-hidden="true">{{ item.icono }}</span>
          <div>
            <p class="barra-estadisticas-numero">{{ item.numero }}</p>
            <p class="barra-estadisticas-titulo">{{ item.titulo }}</p>
            <p class="barra-estadisticas-detalle">{{ item.detalle }}</p>
          </div>
        </div>
      </div>
    </section>
  `
};