
const aboutSectionStyles = `
  .about-section {
    display: grid;
    grid-template-columns: 1.15fr 0.95fr;
    align-items: center;
    gap: 3rem;
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
    background: #ffffff;
    font-family: 'Lato', Arial, sans-serif;
    color: #172c46;
  }

  .about-section__content {
    min-width: 0;
  }

  .about-section__eyebrow {
    margin: 0 0 0.7rem;
    color: #6b7887;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .about-section__title {
    margin: 0 0 0.8rem;
    color: #172c46;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    line-height: 1.12;
  }

  .about-section__description {
    margin: 0;
    color: #414b58;
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .about-section__features {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 1.7rem;
  }

  .about-section__feature {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.65rem;
    min-width: 0;
  }

  .about-section__feature-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    color: #399e85;
  }

  .about-section__feature-icon svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .about-section__feature-title {
    margin: 0;
    color: #172c46;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.3;
    white-space: pre-line;
  }

  .about-section__image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1.22 / 1;
    overflow: hidden;
    border-radius: 14px;
    background: #edf1f4;
  }

  .about-section__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .about-section__image-wrapper:hover .about-section__image {
    transform: scale(1.035);
  }

  @media (max-width: 768px) {
    .about-section {
      grid-template-columns: 1fr;
      gap: 1.75rem;
      padding: 1.5rem;
    }

    .about-section__image-wrapper {
      grid-row: 1;
      aspect-ratio: 16 / 9;
    }

    .about-section__title {
      font-size: clamp(1.7rem, 6vw, 2.2rem);
    }
  }

  @media (max-width: 420px) {
    .about-section {
      padding: 1rem;
    }

    .about-section__features {
      gap: 0.75rem;
    }

    .about-section__feature-title {
      font-size: 0.82rem;
    }
  }
`;

(function() {
    if (document.getElementById('ic-about-section-styles')) return;

    const tag = document.createElement('style');
    tag.id = 'ic-about-section-styles';
    tag.textContent = aboutSectionStyles;
    document.head.appendChild(tag);
})();

const defaultFeatures = [
    {
        titulo: 'Compromiso ambiental',
        icono: 'leaf',
    },
    {
        titulo: 'Equipo especializado',
        icono: 'team',
    },
    {
        titulo: 'Seguridad en cada proyecto',
        icono: 'shield',
    },
];

const featureIcons = {
    leaf: `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 4C15 4 5 9 5 19c0 5 4 8 8 8C24 27 27 15 27 4Z"
        fill="#4BAF91"/>
      <path d="M4 29C10 19 16 14 24 9"
        stroke="#247D67" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
    team: `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="8" r="4.5" fill="#2E8CB9"/>
      <circle cx="6.5" cy="12" r="3.5" fill="#4BAF91"/>
      <circle cx="25.5" cy="12" r="3.5" fill="#4BAF91"/>
      <path d="M7 25v-2c0-5 4-8 9-8s9 3 9 8v2H7Z" fill="#2E8CB9"/>
      <path d="M1 24v-2c0-3 2-5 5-5 1 0 2 .3 3 .8-2 2-3 4-3 7H1Z"
        fill="#4BAF91"/>
      <path d="M31 24v-2c0-3-2-5-5-5-1 0-2 .3-3 .8 2 2 3 4 3 7h5Z"
        fill="#4BAF91"/>
    </svg>
  `,
    shield: `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2 28 7v8c0 7-5 12-12 15C9 27 4 22 4 15V7L16 2Z"
        fill="#4BAF91"/>
      <path d="m10 15 4 4 8-9"
        stroke="#ffffff" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

export default {
    name: "AboutSection",

    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        imageAlt: {
            type: String,
            default: 'Instalaciones de la empresa',
        },
        subtitulo: {
            type: String,
            default: 'QUIÉNES SOMOS',
        },
        titulo: {
            type: String,
            default: 'Más que limpieza, generamos confianza',
        },
        descripcion: {
            type: String,
            default: 'Somos una empresa especializada en servicios de limpieza industrial, con años de experiencia en el mercado, brindando soluciones eficientes, seguras y sostenibles para sectores como el industrial, comercial y de infraestructura.',
        },
        caracteristicas: {
            type: Array,
            default: () => defaultFeatures,
        },
    },

    computed: {
        featuresConIconos() {
            return this.caracteristicas.map((feature) => ({
                ...feature,
                iconHtml: feature.iconHtml || featureIcons[feature.icono] || featureIcons.leaf,
            }));
        },
    },

    template: `
    <section class="about-section">

      <div class="about-section__content" >
        <p class="about-section__eyebrow">{{ subtitulo }}</p>

        <h2 class="about-section__title">{{ titulo }}</h2>

        <p class="about-section__description">{{ descripcion }}</p>

        <div class="about-section__features">
          <div
            v-for="(feature, index) in featuresConIconos"
            :key="index"
            class="about-section__feature"
          >
            <div
              class="about-section__feature-icon"
              v-html="feature.iconHtml"
              aria-hidden="true"
            ></div>

            <h3 class="about-section__feature-title">
              {{ feature.titulo }}
            </h3>
          </div>
        </div>
      </div>

      <div class="about-section__image-wrapper">
        <img
          class="about-section__image"
          :src="imageSrc"
          :alt="imageAlt"
          loading="lazy"
        />
      </div>

    </section>
  `,
};
