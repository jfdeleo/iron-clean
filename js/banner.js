const eventBannerStyles = `
  .event-banner {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 28em;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #094974;
    background-position: center;
    background-repeat: no-repeat;
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
      rgba(4, 37, 59, 0.78) calc(var(--eb-content-w, 620px) * 0.68),
      rgba(4, 37, 59, 0.15) calc(var(--eb-content-w, 620px) * 1.45),
      transparent calc(var(--eb-content-w, 620px) * 1.9)
    );
    pointer-events: none;
  }

  .event-banner__content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: var(--eb-content-w, 620px);
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
    overflow-wrap: break-word;
  }

  .event-banner__description {
    margin: 0 0 28px;
    font-size: clamp(15px, 1.5vw, 21px);
    line-height: 1.45;
    font-weight: 400;
    overflow-wrap: break-word;
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
    .event-banner__content {
      padding-left: 5.2%;
    }
  }

  @media (max-width: 640px) {
    .event-banner {
      background-position: 60% center;
    }

    .event-banner__overlay {
      background: rgba(4, 37, 59, 0.78);
    }

    .event-banner__content {
      max-width: 100%;
      padding: 24px;
    }

    .event-banner__title {
      margin-bottom: 12px;
    }

    .event-banner__description {
      margin-bottom: 18px;
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
        // Ancho inicial (px) del bloque de texto
        anchoBase: {
            type: Number,
            default: 620
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
            default: 'https://wa.me/5491160371192?text=' +
                encodeURIComponent('¡Hola! Me gustaria obtener un presupuesto')
        }
    },

    computed: {
        bannerStyle() {
            const style = {};
            if (this.imageSrc) {
                style.backgroundImage = 'url(' + JSON.stringify(this.imageSrc) + ')';
            }
            return style;
        }
    },

    methods: {
        // Ensancha el bloque de texto hasta que entre en el alto del banner.
        // El alto del banner nunca cambia, así que no hay bucle.
        ajustarTexto() {
            const el = this.$refs.banner;
            const contenido = this.$refs.contenido;
            if (!el || !contenido) return;

            const anchoBanner = el.clientWidth;
            let w = Math.min(this.anchoBase, anchoBanner);
            el.style.setProperty('--eb-content-w', w + 'px');

            while (contenido.offsetHeight > el.clientHeight && w < anchoBanner) {
                w = Math.min(anchoBanner, w + 40);
                el.style.setProperty('--eb-content-w', w + 'px');
            }
        }
    },

    mounted() {
        this.ajustarTexto();
        if (typeof ResizeObserver !== 'undefined') {
            this._observer = new ResizeObserver(this.ajustarTexto);
            this._observer.observe(this.$refs.banner);
        } else {
            window.addEventListener('resize', this.ajustarTexto);
        }
    },

    watch: {
        anchoBase() { this.$nextTick(this.ajustarTexto); },
        titulo() { this.$nextTick(this.ajustarTexto); },
        descripcion() { this.$nextTick(this.ajustarTexto); },
        botonTexto() { this.$nextTick(this.ajustarTexto); }
    },

    beforeUnmount() {
        if (this._observer) this._observer.disconnect();
        window.removeEventListener('resize', this.ajustarTexto);
    },

    template: `
    <section ref="banner" class="event-banner" :style="bannerStyle">
      <div v-if="imageSrc" class="event-banner__overlay"></div>

      <div ref="contenido" class="event-banner__content">
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