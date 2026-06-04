const footerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400;700&display=swap');

  .ic-footer {
    font-family: 'Lato', sans-serif;
    padding: 3rem 2rem 1.5rem;
    margin-top: 3rem;
  }

  .ic-footer__top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }

  .ic-footer__brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    margin: 0 0 0.4rem 0;
  }

  .ic-footer__slogan {
    font-size: 0.82rem;
    font-weight: 300;
    letter-spacing: 0.04em;
    opacity: 0.7;
    margin: 0;
    font-style: italic;
  }

  .ic-footer__col-title {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    opacity: 0.5;
    margin: 0 0 0.9rem 0;
  }

  .ic-footer__contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .ic-footer__contact-list a {
    font-size: 0.88rem;
    font-weight: 400;
    opacity: 0.8;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: opacity 0.2s;
  }

  .ic-footer__contact-list a:hover {
    opacity: 1;
  }

  .ic-footer__contact-icon {
    font-size: 0.95rem;
    opacity: 0.6;
  }

  .ic-footer__social-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .ic-footer__social-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.45rem 0.9rem;
    border-radius: 100px;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-decoration: none;
    background: rgba(255,255,255,0.10);
    border: 0.5px solid rgba(255,255,255,0.18);
    transition: background 0.2s, transform 0.15s;
  }

  .ic-footer__social-btn:hover {
    background: rgba(255,255,255,0.20);
    transform: translateY(-1px);
  }

  .ic-footer__bottom {
    padding-top: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .ic-footer__copy {
    font-size: 0.75rem;
    font-weight: 300;
    opacity: 0.45;
    margin: 0;
    letter-spacing: 0.04em;
  }

  .ic-footer__member {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .ic-footer__member-text {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.65;
    margin: 0;
    line-height: 1.5;
  }

  .ic-footer__member-img {
    height: 4.5em;
    width: 17em;
    object-fit: contain;
    opacity: 0.85;
  }

  @media (max-width: 720px) {
    .ic-footer__top {
      grid-template-columns: 1fr;
      gap: 1.8rem;
    }
    .ic-footer__bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

const SOCIAL_ICONS = {
  facebook:  { icon: 'f',  label: 'Facebook'  },
  instagram: { icon: '📷', label: 'Instagram' },
  twitter:   { icon: '𝕏',  label: 'Twitter'   },
  linkedin:  { icon: 'in', label: 'LinkedIn'  },
  youtube:   { icon: '▶',  label: 'YouTube'   },
  whatsapp:  { icon: '💬', label: 'WhatsApp'  },
};

(function() {
  if (document.getElementById('ic-footer-styles')) return;
  const tag = document.createElement('style');
  tag.id = 'ic-footer-styles';
  tag.textContent = footerStyles;
  document.head.appendChild(tag);
})();

export default {
  name: "Footer",
  props: {
    bgcolor: { type: String, default: "#0d1b2a" },
    color:   { type: String, default: "#ffffff" },
    redes:   { type: Array,  default: () => []  },
    adelimg: { type: String, default: null      },
  },
  computed: {
    estiloFondo() {
      return { backgroundColor: this.bgcolor, color: this.color };
    },
  },
  methods: {
    labelRed(red) { return SOCIAL_ICONS[red.toLowerCase()]?.label || red; },
    iconRed(red)  { return SOCIAL_ICONS[red.toLowerCase()]?.icon  || '🔗'; },
  },
  template: `
    <footer class="ic-footer" :style="estiloFondo">

      <div class="ic-footer__top">

        <!-- Columna 1: Marca -->
        <div>
          <p class="ic-footer__brand-name" :style="{ color }">IRON CLEAN S.A.</p>
          <p class="ic-footer__slogan" :style="{ color }">Eficiencia en el manejo de soluciones.</p>
        </div>

        <!-- Columna 2: Contacto -->
        <div>
          <p class="ic-footer__col-title" :style="{ color }">Contacto</p>
          <ul class="ic-footer__contact-list">
            <li>
              <a href="mailto:ironcleansa@gmail.com" :style="{ color }">
                <span class="ic-footer__contact-icon">✉</span>
                ironcleansa@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:01151956458" :style="{ color }">
                <span class="ic-footer__contact-icon">📞</span>
                011 5195-6458
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Redes sociales -->
        <div v-if="redes.length">
          <p class="ic-footer__col-title" :style="{ color }">Seguinos</p>
          <ul class="ic-footer__social-list">
            <li v-for="(red, i) in redes" :key="i">
              <a
                :href="red.url"
                target="_blank"
                rel="noopener noreferrer"
                class="ic-footer__social-btn"
                :style="{ color }"
              >
                <span>{{ iconRed(red.red) }}</span>
                <span>{{ labelRed(red.red) }}</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom: copyright izquierda | ADEL derecha -->
      <div class="ic-footer__bottom">
              <div class="ic-footer__member-text" :style="{ color }">Iron Clean S.A.<br>es miembro de ADEL</div>
              <div class="ic-footer__member">
                <img
                  style="background-color: white;"
                  v-if="adelimg"
                  :src="adelimg"
                  alt="Logo ADEL"
                  class="ic-footer__member-img"
                />
              </div>
        <p class="ic-footer__copy" :style="{ color }">Copyright &copy; Iron Clean S.A. 2019</p>

      </div>

    </footer>
  `,
};