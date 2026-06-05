const galeriaCardStyles = `
  .gc {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    height: 100%;
  }

  .gc__img-wrapper {
    position: relative;
    width: 100%;
    flex: 1;
    overflow: hidden;
    background: #f0f0f0;
    min-height: 200px;
  }

  .gc__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    position: absolute;
    inset: 0;
  }

  .gc__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.45);
    border: none;
    color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    z-index: 2;
    transition: background 0.2s;
    user-select: none;
  }

  .gc__arrow:hover {
    background: rgba(0,0,0,0.7);
  }

  .gc__arrow--left  { left: 10px;  }
  .gc__arrow--right { right: 10px; }

  .gc__dots {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
    z-index: 2;
  }

  .gc__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    transition: background 0.2s;
    cursor: pointer;
  }

  .gc__dot--active {
    background: #fff;
  }

  .gc__body {
    padding: 1rem 1.2rem 1.2rem;
    flex-shrink: 0;
  }

  .gc__title {
    font-size: 1rem;
    font-weight: 700;
    color: #0d1b2a;
    margin: 0 0 0.4rem 0;
    line-height: 1.3;
  }

  .gc__desc {
    font-size: 0.85rem;
    font-weight: 300;
    color: #666;
    margin: 0;
    line-height: 1.6;
  }

  .gc__counter {
    position: absolute;
    top: 8px;
    right: 10px;
    background: rgba(0,0,0,0.45);
    color: #fff;
    font-size: 0.72rem;
    padding: 2px 8px;
    border-radius: 100px;
    z-index: 2;
  }
`;

(function() {
  if (document.getElementById('ic-galeriacard-styles')) return;
  const tag = document.createElement('style');
  tag.id = 'ic-galeriacard-styles';
  tag.textContent = galeriaCardStyles;
  document.head.appendChild(tag);
})();

export default {
  name: 'GaleriaCard',
  props: {
    fotos:       { type: Array,  required: true },
    titulo:      { type: String, required: true },
    descripcion: { type: String, default: null  },
  },
  data() {
    return {
      actual: 0,
    };
  },
  methods: {
    anterior() {
      this.actual = this.actual === 0 ? this.fotos.length - 1 : this.actual - 1;
    },
    siguiente() {
      this.actual = this.actual === this.fotos.length - 1 ? 0 : this.actual + 1;
    },
    irA(i) {
      this.actual = i;
    },
  },
  template: `
    <div class="gc">

      <div class="gc__img-wrapper">
        <img :src="fotos[actual]" :alt="titulo + ' ' + (actual + 1)" class="gc__img" />

        <template v-if="fotos.length > 1">
          <button class="gc__arrow gc__arrow--left"  @click="anterior">&#8249;</button>
          <button class="gc__arrow gc__arrow--right" @click="siguiente">&#8250;</button>
          <div class="gc__counter">{{ actual + 1 }} / {{ fotos.length }}</div>
          <div class="gc__dots">
            <div
              v-for="(_, i) in fotos"
              :key="i"
              class="gc__dot"
              :class="{ 'gc__dot--active': i === actual }"
              @click="irA(i)"
            ></div>
          </div>
        </template>
      </div>

      <div class="gc__body">
        <p class="gc__title">{{ titulo }}</p>
        <p v-if="descripcion" class="gc__desc">{{ descripcion }}</p>
      </div>

    </div>
  `,
};