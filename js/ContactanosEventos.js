// Componente CtaEvento (Vue 3 en modo CDN/ESM, sin build)
// Los estilos se inyectan desde un IIFE porque <style> dentro del template no funciona en CDN.

(function () {
    if (document.getElementById('cta-evento-styles')) return;

    const style = document.createElement('style');
    style.id = 'cta-evento-styles';
    style.textContent = `
    .cta-evento {
      padding: 2.5rem 0;
      background: #0D1B2A;
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
      color: #ffffff;
    }
    .cta-evento .cta-evento-contenido {
      width: 100%;
      padding: 0 5%;
    }
    .cta-evento .cta-evento-titulo {
      margin: 0 0 .6rem;
      font-size: 1.9rem;
      font-weight: 700;
      line-height: 1.2;
      color: #ffffff;
    }
    .cta-evento .cta-evento-texto {
      margin: 0 0 1.5rem;
      max-width: 26rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #d6e2ea;
    }
    .cta-evento .cta-evento-botones {
      display: flex;
      flex-wrap: wrap;
      gap: .9rem;
    }
    .cta-evento .cta-evento-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: .45rem;
      padding: .8rem 1.8rem;
      border: 0;
      border-radius: 999px;
      font-size: .9rem;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      transition: transform .15s ease, filter .15s ease;
    }
    .cta-evento .cta-evento-btn:hover {
      transform: translateY(-1px);
      filter: brightness(.95);
    }
    .cta-evento .cta-evento-btn-claro {
      background: #ffffff;
      color: #074C73;
    }
    .cta-evento .cta-evento-btn-claro:hover {
      color: #074C73;
    }
    .cta-evento .cta-evento-btn-whatsapp {
      background: #22c55e;
      color: #ffffff;
    }
    .cta-evento .cta-evento-btn-whatsapp:hover {
      color: #ffffff;
    }
    .cta-evento .cta-evento-btn svg {
      width: 1.1rem;
      height: 1.1rem;
      fill: currentColor;
    }
    .cta-evento .cta-evento-beneficios {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
      text-align: center;
    }
    .cta-evento .cta-evento-beneficio {
      flex: 1 1 0;
      max-width: 10rem;
    }
    .cta-evento .cta-evento-icono {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.2rem;
      height: 3.2rem;
      margin: 0 auto .8rem;
      border-radius: 50%;
      background: #ffffff;
    }
    .cta-evento .cta-evento-icono-svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cta-evento .cta-evento-icono svg {
      width: 1.7rem;
      height: 1.7rem;
      fill: none;
      stroke: #074C73;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .cta-evento .cta-evento-icono img {
      width: 1.7rem;
      height: 1.7rem;
      object-fit: contain;
    }
    .cta-evento .cta-evento-beneficio-texto {
      margin: 0;
      font-size: .9rem;
      line-height: 1.3;
      color: #ffffff;
      white-space: pre-line;
    }
    @media (max-width: 767.98px) {
      .cta-evento .cta-evento-titulo { font-size: 1.5rem; }
      .cta-evento .cta-evento-beneficios { margin-top: 2rem; }
    }
  `;
    document.head.appendChild(style);
})();

// Iconos por defecto (SVG completos). Mismos dibujos de siempre.
const ICONO_CHECK =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
    '<polyline points="5 12.5 10 17.5 19 7.5"></polyline>' +
    '</svg>';

const ICONO_EQUIPO =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
    '<circle cx="12" cy="8" r="2.5"></circle>' +
    '<path d="M7.5 16c0-2.2 2-3.6 4.5-3.6s4.5 1.4 4.5 3.6"></path>' +
    '<circle cx="5.5" cy="10" r="1.8"></circle>' +
    '<path d="M2.5 16c0-1.6 1.2-2.6 3-2.6"></path>' +
    '<circle cx="18.5" cy="10" r="1.8"></circle>' +
    '<path d="M21.5 16c0-1.6-1.2-2.6-3-2.6"></path>' +
    '</svg>';

const ICONO_RELOJ =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="8"></circle>' +
    '<polyline points="12 7.5 12 12 15 14"></polyline>' +
    '</svg>';

export default {
    name: 'CtaEvento',
    props: {
        titulo: {
            type: String,
            default: '¿Organiza un evento?'
        },
        texto: {
            type: String,
            default: 'Nos encargamos de que cada espacio se mantenga limpio, seguro y presentable.'
        },
        email: {
            type: String,
            default: 'ironcleansa@gmail.com'
        },
        asunto: {
            type: String,
            default: 'Presupuesto'
        },
        mensaje: {
            type: String,
            default: '¡Hola! Me gustaria obtener un presupuesto'
        },
        telefono: {
            type: String,
            default: '5491160371192'
        },
        // Color de fondo del componente (cualquier color CSS)
        fondo: {
            type: String,
            default: '#0D1B2A'
        },
        // Lista de beneficios: [{ icono, texto }]
        //  - icono: markup SVG completo (empieza con "<svg") o la ruta/URL de una imagen
        //  - texto: usá \n para un salto de línea
        beneficios: {
            type: Array,
            default: function () {
                return [
                    { icono: ICONO_CHECK,  texto: 'Personal\ncapacitado' },
                    { icono: ICONO_EQUIPO, texto: 'Supervisión\npermanente' },
                    { icono: ICONO_RELOJ,  texto: 'Respuesta\ninmediata' }
                ];
            }
        }
    },
    computed: {
        enlaceMail() {
            return 'mailto:' + this.email
                + '?subject=' + encodeURIComponent(this.asunto)
                + '&body=' + encodeURIComponent(this.mensaje);
        },
        enlaceGmail() {
            return 'https://mail.google.com/mail/?view=cm&fs=1'
                + '&to=' + encodeURIComponent(this.email)
                + '&su=' + encodeURIComponent(this.asunto)
                + '&body=' + encodeURIComponent(this.mensaje);
        },
        enlaceWhatsapp() {
            return 'https://wa.me/' + this.telefono
                + '?text=' + encodeURIComponent(this.mensaje);
        }
    },
    methods: {
        esSvg(icono) {
            return typeof icono === 'string' && icono.trim().charAt(0) === '<';
        },
        // En celulares abre la app de correo (mailto). En computadoras abre
        // el redactor de Gmail en una pestaña nueva, porque mailto no hace nada
        // cuando no hay un programa de correo configurado.
        enviarMail(evento) {
            evento.preventDefault();
            const esCelular = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (esCelular) {
                window.location.href = this.enlaceMail;
            } else {
                window.open(this.enlaceGmail, '_blank', 'noopener');
            }
        }
    },
    template: `
    <section class="cta-evento" :style="{ background: fondo }">
      <div class="cta-evento-contenido">
        <div class="row align-items-center g-4">
          <div class="col-md-6">
            <h2 class="cta-evento-titulo">{{ titulo }}</h2>
            <p class="cta-evento-texto">{{ texto }}</p>
            <div class="cta-evento-botones">
              <a
                class="cta-evento-btn cta-evento-btn-claro"
                :href="enlaceMail"
                @click="enviarMail"
              >Solicitar presupuesto</a>
              <a
                class="cta-evento-btn cta-evento-btn-whatsapp"
                :href="enlaceWhatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="cta-evento-beneficios">
              <div
                v-for="(beneficio, i) in beneficios"
                :key="i"
                class="cta-evento-beneficio"
              >
                <div class="cta-evento-icono">
                  <span
                    v-if="esSvg(beneficio.icono)"
                    class="cta-evento-icono-svg"
                    v-html="beneficio.icono"
                  ></span>
                  <img v-else :src="beneficio.icono" alt="" />
                </div>
                <p class="cta-evento-beneficio-texto">{{ beneficio.texto }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};