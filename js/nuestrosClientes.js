const grillaStyles = `
  .grilla-clientes {
    font-family: 'Lato', sans-serif;
  }

  .grilla-clientes__titulo {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 900;
    color: #0d1b2a;
    margin-bottom: 2rem;
  }

  .grilla-clientes__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .grilla-clientes__item {
    background: #fff;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    overflow: hidden;
    transition: box-shadow 0.2s, transform 0.2s;
    box-sizing: border-box;
  }

  .grilla-clientes__item:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.10);
    transform: translateY(-2px);
  }

  .grilla-clientes__img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    opacity: 0.7;
    transition: filter 0.2s, opacity 0.2s;
  }

  .grilla-clientes__item:hover .grilla-clientes__img {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

(function() {
  if (document.getElementById('ic-grilla-clientes-styles')) return;
  const tag = document.createElement('style');
  tag.id = 'ic-grilla-clientes-styles';
  tag.textContent = grillaStyles;
  document.head.appendChild(tag);
})();

export default {
  name: 'GrillaClientes',
  props: {
    titulo:   { type: String, default: ''  },
    logos:    { type: Array,  required: true },
    columnas: { type: Number, default: 5   },
  },
  computed: {
    // Ancho de cada item basado en el número de columnas
    estiloItem() {
      const pct = (100 / this.columnas) - 1;
      return { width: `calc(${pct}% - 0.5rem)`, aspectRatio: '4/3' };
    },
  },
  template: `
    <div class="grilla-clientes">
      <h2 v-if="titulo" class="grilla-clientes__titulo">{{ titulo }}</h2>
      <div class="grilla-clientes__grid">
        <div
          v-for="(logo, i) in logos"
          :key="i"
          class="grilla-clientes__item"
          :style="estiloItem"
        >
          <img
            :src="logo"
            :alt="'Cliente ' + (i + 1)"
            class="grilla-clientes__img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  `,
};