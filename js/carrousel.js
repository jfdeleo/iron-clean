const carouselStyles = `
  .ic-carousel {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 420px;
  }
  .ic-carousel__track {
    display: flex;
    height: 100%;
  }
  .ic-carousel__slide {
    flex-shrink: 0;
    height: 100%;
  }
  .ic-carousel__slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    pointer-events: none;
    user-select: none;
  }
  .ic-carousel::before,
  .ic-carousel::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }
  .ic-carousel::before {
    left: 0;
    background: linear-gradient(to right, rgba(238,238,238,0.6), transparent);
  }
  .ic-carousel::after {
    right: 0;
    background: linear-gradient(to left, rgba(238,238,238,0.6), transparent);
  }
  @media (max-width: 640px) {
    .ic-carousel { height: 220px; }
    .ic-carousel::before,
    .ic-carousel::after { width: 30px; }
  }
`;

(function () {
  if (document.getElementById('ic-carousel-styles')) return;
  const tag = document.createElement('style');
  tag.id = 'ic-carousel-styles';
  tag.textContent = carouselStyles;
  document.head.appendChild(tag);
})();

export default {
  name: 'Carousel',
  props: {
    fotos:     { type: Array,  required: true },
    visibles:  { type: Number, default: 3     },
    velocidad: { type: Number, default: 60    },
  },
  data() {
    return {
      offset:     0,
      animId:     null,
      slideWidth: 0,
    };
  },
  computed: {
    slides()    { return [...this.fotos, ...this.fotos]; },
    loopWidth() { return this.fotos.length * this.slideWidth; },
  },
  mounted() {
    this.calcularSlideWidth();
    window.addEventListener('resize', this.calcularSlideWidth);

    let last = null;
    const tick = (ts) => {
      if (last !== null && this.slideWidth > 0) {
        this.offset += this.velocidad * (ts - last) / 1000;
        if (this.offset >= this.loopWidth) this.offset -= this.loopWidth;
        this.$refs.track.style.transform = `translateX(-${this.offset}px)`;
      }
      last = ts;
      this.animId = requestAnimationFrame(tick);
    };
    this.animId = requestAnimationFrame(tick);
  },
  beforeUnmount() {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.calcularSlideWidth);
  },
  methods: {
    calcularSlideWidth() {
      const contenedor = this.$refs.carousel;
      if (contenedor) {
        this.slideWidth = contenedor.offsetWidth / this.visibles;
        this.$refs.track.querySelectorAll('.ic-carousel__slide').forEach(el => {
          el.style.width = this.slideWidth + 'px';
        });
      }
    },
  },
  template: `
    <div class="ic-carousel" ref="carousel">
      <div class="ic-carousel__track" ref="track">
        <div
          v-for="(foto, i) in slides"
          :key="i"
          class="ic-carousel__slide"
        >
          <img :src="foto" :alt="'Foto ' + (i + 1)" />
        </div>
      </div>
    </div>
  `,
};