const hcardStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400;700&display=swap');

  .hcard {
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06);
    min-height: 320px;
    font-family: 'Lato', sans-serif;
  }
  .hcard__img-side {
    flex: 0 0 42%;
    position: relative;
    overflow: hidden;
    min-height: 260px;
  }
  .hcard__img-side img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .hcard:hover .hcard__img-side img {
    transform: scale(1.04);
  }
  .hcard__img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(13,27,42,0.18) 0%, transparent 60%);
    pointer-events: none;
  }
  .hcard__body {
    flex: 1;
    padding: 2.2rem 2rem 1.8rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hcard__title {
    font-family: 'Playfair Display', serif;
    font-size: 1.65rem;
    font-weight: 700;
    color: #0d1b2a;
    margin: 0 0 0.6rem 0;
    line-height: 1.15;
  }
  .hcard__divider {
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #f0c040, #185fa5);
    border-radius: 2px;
    margin-bottom: 1.1rem;
  }
  .hcard__list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }
  .hcard__list li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.4rem 0;
    border-bottom: 0.5px solid rgba(0,0,0,0.06);
  }
  .hcard__list li:last-child {
    border-bottom: none;
  }
  /* El bullet se alinea con el centro de la primera línea del título.
     El título es 1.6em con line-height 1.5 → altura de línea = 1.6 * 1.5 = 2.4em
     Centro = 2.4/2 = 1.2em, menos la mitad del bullet (3.5px ≈ 0.22em) */
  .hcard__bullet {
    flex-shrink: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #185fa5;
    margin-top: calc(1.6em * 1.5 / 2 - 3.5px);
  }
  .hcard__item-texto {
    display: flex;
    flex-direction: column;
  }
  .hcard__item-titulo {
    display: block;
    font-weight: 700;
    color: #0d1b2a;
    line-height: 1.5;
  }
  .hcard__item-subtitulo {
    display: block;
    font-weight: 300;
    font-size: 0.85rem;
    color: #666;
    margin-top: 0.1rem;
  }
  .hcard__link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #185fa5;
    text-decoration: none;
    transition: gap 0.2s ease, color 0.2s ease;
    margin-top: auto;
  }
  .hcard__link:hover {
    gap: 0.7rem;
    color: #0d1b2a;
  }

  @media (max-width: 640px) {
    .hcard {
      flex-direction: column;
    }
    .hcard__img-side {
      flex: 0 0 220px;
      min-height: 220px;
      order: -1;
    }
    .hcard__body {
      padding: 1.5rem 1.25rem;
      order: 1;
    }
  }
`;

(function() {
  if (document.getElementById('ic-hcard-styles')) return;
  const tag = document.createElement('style');
  tag.id = 'ic-hcard-styles';
  tag.textContent = hcardStyles;
  document.head.appendChild(tag);
})();

export default {
  name: "HCard",
  props: {
    imageSrc:      { type: String,  required: true    },
    imageAlt:      { type: String,  default: "Imagen" },
    titulo:        { type: String,  required: true    },
    items:         { type: Array,   default: () => [] },
    link:          { type: String,  default: "#"      },
    imagenDerecha: { type: Boolean, default: false    },
  },
  template: `
    <div class="hcard">

      <div v-if="!imagenDerecha" class="hcard__img-side">
        <img :src="imageSrc" :alt="imageAlt" />
        <div class="hcard__img-overlay"></div>
      </div>

      <div class="hcard__body">
        <h3 class="hcard__title" style="font-size: 2.5em;">{{ titulo }}</h3>
        <div class="hcard__divider"></div>
        <ul class="hcard__list">
          <li v-for="(item, i) in items" :key="i">
            <span class="hcard__bullet"></span>
            <span class="hcard__item-texto">
              <span class="hcard__item-titulo" style="font-size: 1.6em;">{{ item.titulo }}</span>
              <span v-if="item.subtitulo" class="hcard__item-subtitulo" style="font-size: 1.3em; font-weight: 500;">{{ item.subtitulo }}</span>
            </span>
          </li>
        </ul>
      </div>

      <div v-if="imagenDerecha" class="hcard__img-side">
        <img :src="imageSrc" :alt="imageAlt" />
        <div class="hcard__img-overlay"></div>
      </div>

    </div>
  `,
};