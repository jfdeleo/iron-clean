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

// Mismo corte que el @media (max-width: 640px) del CSS
const MEDIA_MOVIL = '(max-width: 640px)';

export default {
    name: 'EventBanner',

    props: {
        imageSrc: {
            type: String,
            default: ''
        },
        // Si es true, en celular no se muestra (ni se descarga) la imagen de fondo:
        // queda solo el color de fondo del banner.
        ocultarImagenMovil: {
            type: Boolean,
            default: true
        },
        // Cómo se ajusta la imagen de fondo:
        //   'cover'   -> llena todo el banner (default)
        //   'contain' -> se ve la imagen completa, sin recortar (pueden quedar bordes del color de fondo)
        //   'fill'    -> estira la imagen al tamaño exacto del banner (puede deformarla)
        // También acepta cualquier valor válido de background-size (ej: '80%', 'auto 100%')
        ajusteImagen: {
            type: String,
            default: 'cover'
        },
        // Posición de la imagen (valor de background-position). Vacío = la del CSS
        posicionImagen: {
            type: String,
            default: ''
        },
        // Alto máximo del banner cuando se adapta a la proporción de la imagen.
        // Evita que en pantallas muy anchas ocupe más que la ventana. '' = sin límite.
        altoMaximo: {
            type: String,
            default: '90vh'
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
        // Mensaje que se envía por WhatsApp al hacer click en el botón
        mensajeWhatsapp: {
            type: String,
            default: '¡Hola! Me gustaria obtener un presupuesto'
        },
        // Si se pasa, tiene prioridad y se usa tal cual (ignora mensajeWhatsapp)
        botonLink: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            // Proporción (ancho / alto) de la imagen. 0 = sin imagen o todavía cargando.
            ratio: 0,
            // Se calcula desde el inicio para no mostrar la imagen un instante en celular.
            esMovil: typeof window !== 'undefined' && !!window.matchMedia
                ? window.matchMedia(MEDIA_MOVIL).matches
                : false
        };
    },

    computed: {
        usarImagen() {
            return !!this.imageSrc && !(this.ocultarImagenMovil && this.esMovil);
        },

        ratioEfectivo() {
            return this.usarImagen ? this.ratio : 0;
        },

        bannerStyle() {
            const style = {};
            if (this.usarImagen) {
                style.backgroundImage = 'url(' + JSON.stringify(this.imageSrc) + ')';
                style.backgroundSize = this.ajusteImagen === 'fill' ? '100% 100%' : this.ajusteImagen;
                // Solo se pisa la posición si se pasa la prop, así no se pierde el ajuste mobile del CSS
                if (this.posicionImagen) {
                    style.backgroundPosition = this.posicionImagen;
                }
                if (this.ratio && this.altoMaximo) {
                    style.maxHeight = this.altoMaximo;
                }
            }
            return style;
        },

        linkFinal() {
            if (this.botonLink) return this.botonLink;
            return 'https://wa.me/5491160371192?text=' +
                encodeURIComponent(this.mensajeWhatsapp);
        }
    },

    methods: {
        // Lee las medidas reales de la imagen para que el banner tome su proporción.
        cargarImagen() {
            if (!this.usarImagen) {
                this.ratio = 0;
                return;
            }
            const src = this.imageSrc;
            const img = new Image();
            img.onload = () => {
                if (src !== this.imageSrc) return;
                this.ratio = (img.naturalWidth && img.naturalHeight)
                    ? img.naturalWidth / img.naturalHeight
                    : 0;
            };
            img.onerror = () => {
                if (src === this.imageSrc) this.ratio = 0;
            };
            img.src = src;
        },

        actualizarMovil(e) {
            this.esMovil = e.matches;
        },

        // 1) El alto del banner sigue la proporción de la imagen (o 28em si no hay imagen).
        // 2) Se ensancha el bloque de texto hasta que entre en ese alto.
        // 3) Si aun así no entra, el banner crece lo necesario (nunca se corta el texto).
        // El resultado depende solo del ancho disponible, así que no hay bucle con el ResizeObserver.
        ajustarTexto() {
            const el = this.$refs.banner;
            const contenido = this.$refs.contenido;
            if (!el || !contenido) return;

            el.style.minHeight = '';
            el.style.height = this.ratioEfectivo
                ? Math.round(el.clientWidth / this.ratioEfectivo) + 'px'
                : '';

            const anchoBanner = el.clientWidth;
            let w = Math.min(this.anchoBase, anchoBanner);
            el.style.setProperty('--eb-content-w', w + 'px');

            while (contenido.offsetHeight > el.clientHeight && w < anchoBanner) {
                w = Math.min(anchoBanner, w + 40);
                el.style.setProperty('--eb-content-w', w + 'px');
            }

            if (contenido.offsetHeight > el.clientHeight) {
                el.style.minHeight = contenido.offsetHeight + 'px';
            }
        }
    },

    mounted() {
        if (typeof window !== 'undefined' && window.matchMedia) {
            this._mq = window.matchMedia(MEDIA_MOVIL);
            this.esMovil = this._mq.matches;
            if (this._mq.addEventListener) {
                this._mq.addEventListener('change', this.actualizarMovil);
            } else if (this._mq.addListener) {
                this._mq.addListener(this.actualizarMovil);
            }
        }

        this.cargarImagen();
        this.ajustarTexto();
        if (typeof ResizeObserver !== 'undefined') {
            this._observer = new ResizeObserver(this.ajustarTexto);
            this._observer.observe(this.$refs.banner);
        } else {
            window.addEventListener('resize', this.ajustarTexto);
        }
    },

    watch: {
        imageSrc() { this.cargarImagen(); },
        usarImagen() {
            this.cargarImagen();
            this.$nextTick(this.ajustarTexto);
        },
        ratio() { this.$nextTick(this.ajustarTexto); },
        altoMaximo() { this.$nextTick(this.ajustarTexto); },
        anchoBase() { this.$nextTick(this.ajustarTexto); },
        titulo() { this.$nextTick(this.ajustarTexto); },
        descripcion() { this.$nextTick(this.ajustarTexto); },
        botonTexto() { this.$nextTick(this.ajustarTexto); }
    },

    beforeUnmount() {
        if (this._observer) this._observer.disconnect();
        window.removeEventListener('resize', this.ajustarTexto);
        if (this._mq) {
            if (this._mq.removeEventListener) {
                this._mq.removeEventListener('change', this.actualizarMovil);
            } else if (this._mq.removeListener) {
                this._mq.removeListener(this.actualizarMovil);
            }
        }
    },

    template: `
    <section ref="banner" class="event-banner" :style="bannerStyle">
      <div v-if="usarImagen" class="event-banner__overlay"></div>

      <div ref="contenido" class="event-banner__content">
        <h1 class="event-banner__title">
          {{ titulo }}
        </h1>

        <p class="event-banner__description">
          {{ descripcion }}
        </p>

        <a
          class="event-banner__button"
          :href="linkFinal"
        >
          {{ botonTexto }}
          <span class="event-banner__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  `
};