
const eventBannerStyles = `
  .event-banner {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 320px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #094974;
    background-position: center;
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
  }

  .event-banner__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(4, 37, 59, 0.92) 0%,
      rgba(4, 37, 59, 0.78) 35%,
      rgba(4, 37, 59, 0.15) 75%,
      transparent 100%
    );
    pointer-events: none;
  }

  .event-banner__content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 620px;
    padding: 40px 5%;
    box-sizing: border-box;
  }

  .event-banner__title {
    margin: 0 0 20px;
    font-size: clamp(26px, 3.2vw, 46px);
    line-height: 1.08;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.025em;
  }

  .event-banner__description {
    margin: 0 0 28px;
    font-size: clamp(15px, 1.5vw, 21px);
    line-height: 1.45;
    font-weight: 400;
  }

  .event-banner__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 14px 25px;
    border: none;
    border-radius: 999px;
    background: #ffffff;
    color: #164b70;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .event-banner__button:hover {
    transform: translateY(-2px);
    background: #f0f5f8;
  }

  .event-banner__arrow {
    font-size: 23px;
    line-height: 1;
  }

  @media (min-width: 1000px) {
    .event-banner {
      min-height: 360px;
    }

    .event-banner__content {
      padding-left: 5.2%;
    }
  }

  @media (max-width: 640px) {
    .event-banner {
      min-height: 340px;
      background-position: 60% center;
    }

    .event-banner__overlay {
      background: rgba(4, 37, 59, 0.78);
    }

    .event-banner__content {
      padding: 32px 24px;
    }

    .event-banner__title {
      margin-bottom: 16px;
    }

    .event-banner__description {
      margin-bottom: 24px;
    }
  }
`;

(function() {
    if (document.getElementById('ic-event-banner-styles')) return;

    const tag = document.createElement('style');
    tag.id = 'ic-event-banner-styles';
    tag.textContent = eventBannerStyles;
    document.head.appendChild(tag);
})();

export default {
    name: 'EventBanner',

    props: {
        imageSrc: {
            type: String,
            default: ''
        },
        titulo: {
            type: String,
            default: 'Eventos, ferias y exposiciones'
        },
        descripcion: {
            type: String,
            default: 'Soluciones integrales de limpieza para eventos corporativos, culturales y producciones especiales.'
        },
        botonTexto: {
            type: String,
            default: 'Solicitar presupuesto'
        },
        botonLink: {
            type: String,
            default: 'https://wa.me/5491151956458?text=' +
                encodeURIComponent('¡Hola! Me gustaria obtener un presupuesto')
        }
    },

    template: `
    <section
      class="event-banner"
      :style="imageSrc
        ? { backgroundImage: 'url(' + JSON.stringify(imageSrc) + ')' }
        : { backgroundColor: '#094974' }"
    >
      <div v-if="imageSrc" class="event-banner__overlay"></div>

      <div class="event-banner__content">
        <h1 class="event-banner__title">
          {{ titulo }}
        </h1>

        <p class="event-banner__description">
          {{ descripcion }}
        </p>

        <a
          class="event-banner__button"
          :href="botonLink"
        >
          {{ botonTexto }}
          <span class="event-banner__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  `
};
