export default {
  name: "navbar",
  props: {
    logo: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark px-3" style="background: #0d1b2a;">

      <a class="navbar-brand d-flex align-items-center" href="#">
        <img
          v-if="logo"
          :src="logo"
          alt="Logo"
          class="navbar-logo"
        />
        <span v-else class="navbar-wordmark" style="font-family: 'Playfair Display', serif;">IRON CLEAN <div class="ic-footer__slogan" :style="{ color }">Eficiencia en el manejo de soluciones.</div> </span>
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
        <ul class="navbar-nav">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="nav-item"
          >
            <a class="nav-link" :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
      </div>

    </nav>
  `,
};