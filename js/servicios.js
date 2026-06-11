const serviciosGridStyles = `
  .srv-grid {
    font-family: 'Lato', sans-serif;
  }

  .srv-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
  }

  .srv-card__img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .srv-card:hover .srv-card__img {
    transform: scale(1.04);
  }

  .srv-card__label {
    text-align: center;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #185fa5;
    padding: 0.9rem 0.5rem 0.5rem;
  }
`;

(function() {
  if (document.getElementById('ic-servicios-grid-styles')) return;
  const tag = document.createElement('style');
  tag.id = 'ic-servicios-grid-styles';
  tag.textContent = serviciosGridStyles;
  document.head.appendChild(tag);
})();

export default {
  name: 'ServiciosGrid',
  props: {
    // Array de objetos: { label: 'Oficinas', img: './img/oficinas.jpg', link: '#' }
    items: { type: Array, required: true },
  },
  template: `
    <div class="srv-grid">
      <div class="row g-3">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="col-6 col-md-3"
        >
          <a :href="item.link || '#'" class="text-decoration-none">
            <div class="srv-card">
              <img :src="item.img" :alt="item.label" class="srv-card__img" loading="lazy" />
            </div>
            <div class="srv-card__label">{{ item.label }}</div>
          </a>
        </div>
      </div>
    </div>
  `,
};