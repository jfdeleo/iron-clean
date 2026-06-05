export default {
  name: "navbar",
  props: {
    logo:      { type: String, default: null      },
    items:     { type: Array,  default: () => []  },
    dropdowns: { type: Array,  default: () => []  },
  },
  data() {
    return {
      masAbierto: false,
      esMobile: window.innerWidth < 992,
    };
  },
  computed: {
    // En mobile mostramos todos juntos, en desktop solo items normales
    itemsVisibles() {
      return this.esMobile ? [...this.items, ...this.dropdowns] : this.items;
    },
  },
  methods: {
    toggleMas() { this.masAbierto = !this.masAbierto; },
    cerrar()    { this.masAbierto = false; },
    onResize()  { this.esMobile = window.innerWidth < 992; },
  },
  mounted() {
    document.addEventListener('click', this.cerrar);
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.cerrar);
    window.removeEventListener('resize', this.onResize);
  },
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark px-3" style="background: #0d1b2a;">

      <a class="navbar-brand d-flex align-items-center" href="#">
        <img v-if="logo" :src="logo" alt="Logo" class="navbar-logo" />
        <span v-else class="navbar-wordmark" style="font-family: 'Playfair Display', serif;">
          IRON CLEAN
          <div style="font-size:0.75rem;font-weight:300;opacity:0.7;font-style:italic;letter-spacing:0.04em;">
            Eficiencia en el manejo de soluciones.
          </div>
        </span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarMenu">
        <ul class="navbar-nav align-items-lg-center">

          <!-- En mobile: todos juntos. En desktop: solo items normales -->
          <li v-for="(item, index) in itemsVisibles" :key="'item-' + index" class="nav-item">
            <a class="nav-link" :href="item.link">{{ item.name }}</a>
          </li>

          <!-- Botón Más con dropdown (solo en desktop) -->
          <li v-if="!esMobile && dropdowns.length" class="nav-item" style="position:relative;" @click.stop="toggleMas">
            <a class="nav-link d-flex align-items-center gap-1 navbar-toggler" href="#" @click.prevent>
              <span class="navbar-toggler-icon"></span>
              <span style="font-size:0.65rem;transition:transform 0.2s;" :style="masAbierto ? 'transform:rotate(180deg)' : ''"></span>
            </a>

            <ul
              v-show="masAbierto"
              style="
                position: absolute;
                top: 100%;
                right: 0;
                min-width: 200px;
                background: #0d1b2a;
                border: 0.5px solid rgba(255,255,255,0.12);
                border-radius: 10px;
                padding: 0.5rem 0;
                list-style: none;
                margin: 0;
                z-index: 1000;
                box-shadow: 0 8px 24px rgba(0,0,0,0.3);
              "
            >
              <li v-for="(item, i) in dropdowns" :key="i">
                <a
                  :href="item.link"
                  style="display:block;padding:0.5rem 1.25rem;color:rgba(255,255,255,0.8);text-decoration:none;font-size:0.88rem;"
                  @mouseover="$event.target.style.background='rgba(255,255,255,0.08)';$event.target.style.color='#fff'"
                  @mouseleave="$event.target.style.background='transparent';$event.target.style.color='rgba(255,255,255,0.8)'"
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </li>

        </ul>
      </div>

    </nav>
  `,
};