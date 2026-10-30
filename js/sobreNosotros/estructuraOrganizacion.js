const estructuraStyles = `
  .org {
    display: flex;
    align-items: center;
    gap: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 28px 5%;
    background: #f3f6f9;
    font-family: Arial, Helvetica, sans-serif;
    color: #0b2f57;
  }

  .org__main {
    flex: 1;
    min-width: 0;
  }

  .org__title {
    margin: 0;
    font-size: 26px;
    line-height: 1.15;
    font-weight: 800;
    color: #0b2f57;
  }

  .org__subtitle {
    margin: 2px 0 18px;
    font-size: 16px;
    color: #1d3f63;
  }

  .org__steps {
    display: flex;
    align-items: flex-start;
  }

  .org__step {
    flex: 0 0 auto;
    width: 150px;
    text-align: center;
  }

  .org__avatar {
    width: 76px;
    height: 76px;
    margin: 0 auto 12px;
    border-radius: 50%;
    overflow: hidden;
    background: #dfe7ee;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(11, 47, 87, 0.15);
  }

  .org__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .org__avatar svg {
    width: 44px;
    height: 44px;
    fill: #8aa0b5;
  }

  .org__step-title {
    margin: 0 0 4px;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 700;
    color: #0b2f57;
  }

  .org__step-desc {
    margin: 0;
    font-size: 11.5px;
    line-height: 1.35;
    color: #4a6179;
  }

  .org__arrow {
    position: relative;
    flex: 1 1 40px;
    min-width: 40px;
    height: 1px;
    margin-top: 38px;
    background: #cfd8e1;
  }

  .org__arrow::after {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    width: 6px;
    height: 6px;
    border-top: 1px solid #cfd8e1;
    border-right: 1px solid #cfd8e1;
    transform: rotate(45deg);
  }

  .org__divider {
    align-self: stretch;
    width: 1px;
    background: #d5dde5;
  }

  .org__panel {
    flex: 0 0 240px;
  }

  .org__panel-title {
    margin: 0 0 12px;
    font-size: 18px;
    line-height: 1.25;
    font-weight: 700;
    color: #0b2f57;
  }

  .org__panel-text {
    margin: 0 0 18px;
    font-size: 12.5px;
    line-height: 1.55;
    color: #4a6179;
  }

  .org__panel-line {
    width: 38px;
    height: 2px;
    background: #0b2f57;
  }

  @media (max-width: 1100px) {
    .org {
      flex-direction: column;
      align-items: stretch;
      gap: 24px;
    }

    .org__divider {
      width: 100%;
      height: 1px;
      align-self: auto;
    }

    .org__panel {
      flex: none;
    }
  }

  @media (max-width: 700px) {
    .org__steps {
      flex-wrap: wrap;
      row-gap: 24px;
    }

    .org__step {
      width: 50%;
    }

    .org__arrow {
      display: none;
    }
  }
`;

(function() {
    if (document.getElementById('ic-estructura-styles')) return;

    const tag = document.createElement('style');
    tag.id = 'ic-estructura-styles';
    tag.textContent = estructuraStyles;
    document.head.appendChild(tag);
})();

export default {
    name: 'EstructuraOrganizacion',

    props: {
        titulo: {
            type: String,
            default: 'Nuestra estructura'
        },
        subtitulo: {
            type: String,
            default: 'Una organización que garantiza resultados'
        },
        // [{ imagen: 'ruta.jpg', titulo: '...', descripcion: '...' }]
        // Si no hay imagen se muestra un ícono de persona
        pasos: {
            type: Array,
            default: function() {
                return [
                    { imagen: '', titulo: 'Gerencia General', descripcion: 'Dirección y estrategia' },
                    { imagen: '', titulo: 'Operaciones', descripcion: 'Planificación y control' },
                    { imagen: '', titulo: 'Supervisores', descripcion: 'Coordinación en campo' },
                    { imagen: '', titulo: 'Equipos Técnicos', descripcion: 'Ejecución en sitio' }
                ];
            }
        },
        panelTitulo: {
            type: String,
            default: 'Trabajamos juntos por un mismo objetivo'
        },
        panelTexto: {
            type: String,
            default: 'Cada área cumple un rol fundamental para asegurar un servicio eficiente, seguro y de calidad.'
        }
    },

    template: `
    <section class="org">
      <div class="org__main">
        <h2 class="org__title">{{ titulo }}</h2>
        <p class="org__subtitle">{{ subtitulo }}</p>

        <div class="org__steps">
          <template v-for="(paso, i) in pasos" :key="i">
            <div class="org__step">
              <div class="org__avatar">
                <img v-if="paso.imagen" :src="paso.imagen" :alt="paso.titulo" loading="lazy" />
                <svg v-else viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"/>
                </svg>
              </div>
              <h3 class="org__step-title">{{ paso.titulo }}</h3>
              <p class="org__step-desc">{{ paso.descripcion }}</p>
            </div>
            <div v-if="i < pasos.length - 1" class="org__arrow" aria-hidden="true"></div>
          </template>
        </div>
      </div>

      <div class="org__divider" aria-hidden="true"></div>

      <div class="org__panel">
        <h3 class="org__panel-title">{{ panelTitulo }}</h3>
        <p class="org__panel-text">{{ panelTexto }}</p>
        <div class="org__panel-line"></div>
      </div>
    </section>
  `
};