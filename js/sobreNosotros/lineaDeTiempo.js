
const timelineHistoriaStyles = `
  .timeline-historia {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 2.2rem;
    background: #f4f6f8;
    border-radius: 12px;
    color: #172c46;
    font-family: Arial, Helvetica, sans-serif;
  }

  .timeline-historia__header {
    margin-bottom: 2rem;
  }

  .timeline-historia__eyebrow {
    margin: 0 0 0.6rem 0;
    color: #6b7887;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .timeline-historia__title {
    margin: 0;
    color: #172c46;
    font-size: clamp(1.4rem, 2.5vw, 1.8rem);
    font-weight: 700;
    line-height: 1.25;
  }

  .timeline-historia__scroll {
    width: 100%;
    overflow-x: auto;
    padding: 0.1rem 0 0.5rem 0;
  }

  .timeline-historia__track {
    position: relative;
    display: grid;
    grid-template-columns: repeat(var(--cantidad), minmax(0, 1fr));
    min-width: 0;
  }

  .timeline-historia__track::before {
    content: "";
    position: absolute;
    top: 0.45rem;
    left: 8%;
    right: 8%;
    height: 2px;
    background: #d4dce3;
  }

  .timeline-historia__item {
    position: relative;
    min-width: 0;
    padding: 0 0.6rem;
    text-align: center;
  }

  .timeline-historia__marker {
    position: relative;
    z-index: 1;
    display: flex;
    height: 1.5rem;
    align-items: flex-start;
    justify-content: center;
  }

  .timeline-historia__dot {
    display: block;
    width: 0.9rem;
    height: 0.9rem;
    flex-shrink: 0;
    border-radius: 50%;
    background: #287eb5;
    box-shadow: 0 0 0 3px #f4f6f8;
  }

  .timeline-historia__dot--0 {
    background: #287eb5;
  }

  .timeline-historia__dot--1 {
    background: #58a6b7;
  }

  .timeline-historia__dot--2 {
    background: #236b9d;
  }

  .timeline-historia__year {
    margin: 0.5rem 0 0.4rem 0;
    color: #172c46;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
  }

  .timeline-historia__description {
    max-width: 10rem;
    margin: 0 auto;
    color: #536171;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }

  @media (max-width: 640px) {
    .timeline-historia {
      padding: 1.5rem 1.25rem;
    }

    .timeline-historia__header {
      margin-bottom: 1.5rem;
    }

    .timeline-historia__track {
      min-width: max(100%, calc(var(--cantidad) * 115px));
    }

    .timeline-historia__track::before {
      left: 57.5px;
      right: 57.5px;
    }

    .timeline-historia__item {
      padding: 0 0.4rem;
    }
  }
`;

(function() {
    if (document.getElementById('ic-timeline-historia-styles')) return;

    const tag = document.createElement('style');
    tag.id = 'ic-timeline-historia-styles';
    tag.textContent = timelineHistoriaStyles;
    document.head.appendChild(tag);
})();

export default {
    name: "TimelineHistoria",

    props: {
        hitos: {
            type: Array,
            default: () => [
                { anio: 2010, descripcion: 'Inicio de operaciones' },
                { anio: 2014, descripcion: 'Expansión de servicios' },
                { anio: 2018, descripcion: 'Nuevos mercados y alianzas' },
                { anio: 2021, descripcion: 'Certificaciones de calidad' },
                { anio: 2024, descripcion: 'Seguimos creciendo' },
            ],
        },
        titulo: {
            type: String,
            default: 'Un camino de crecimiento constante',
        },
        subtitulo: {
            type: String,
            default: 'NUESTRA HISTORIA',
        },
    },

    template: `
    <section class="timeline-historia">

      <header class="timeline-historia__header">
        <p class="timeline-historia__eyebrow">{{ subtitulo }}</p>
        <h2 class="timeline-historia__title">{{ titulo }}</h2>
      </header>

      <div class="timeline-historia__scroll">
        <div
          class="timeline-historia__track"
          :style="{ '--cantidad': Math.max(hitos.length, 1) }"
        >
          <div
            v-for="(hito, index) in hitos"
            :key="hito.anio + '-' + index"
            class="timeline-historia__item"
          >
            <div class="timeline-historia__marker">
              <span
                class="timeline-historia__dot"
                :class="'timeline-historia__dot--' + (index % 3)"
              ></span>
            </div>

            <h3 class="timeline-historia__year">
              {{ hito.anio }}
            </h3>

            <p class="timeline-historia__description">
              {{ hito.descripcion }}
            </p>
          </div>
        </div>
      </div>

    </section>
  `,
};
