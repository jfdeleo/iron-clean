const bannerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lato:wght@300;400&display=swap');

  .ic-banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    padding: 4rem 4.5rem;
    background: #0d1b2a;
    border-radius: 24px;
    overflow: hidden;
    min-height: 380px;
    font-family: 'Lato', sans-serif;
    margin: 1rem;
  }
  .ic-banner__bg-shape {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
  .ic-banner__bg-shape--1 {
    width: 500px;
    height: 500px;
    top: -200px;
    left: -100px;
    background: radial-gradient(circle, rgba(24, 95, 165, 0.18) 0%, transparent 70%);
  }
  .ic-banner__bg-shape--2 {
    width: 400px;
    height: 400px;
    bottom: -180px;
    right: 260px;
    background: radial-gradient(circle, rgba(240, 192, 64, 0.10) 0%, transparent 70%);
  }
  .ic-banner__left {
    flex: 1;
    z-index: 1;
    max-width: 560px;
  }
  .ic-banner__eyebrow {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 0.75rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #f0c040;
    margin: 0 0 1rem 0;
  }
  .ic-banner__title {
    font-family: 'Playfair Display', serif;
    margin: 0 0 0.25rem 0;
    line-height: 1;
  }
  .ic-banner__title-brand {
    display: block;
    font-size: 2.8rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: 0.04em;
  }
  .ic-banner__title-sa {
    display: block;
    font-size: 1.4rem;
    font-weight: 700;
    color: #f0c040;
    letter-spacing: 0.18em;
    margin-top: 0.1rem;
  }
  .ic-banner__divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #f0c040, #185fa5);
    border-radius: 2px;
    margin: 1.25rem 0;
  }
  .ic-banner__body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.70);
    margin: 0 0 1.5rem 0;
  }
  .ic-banner__tags {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  .ic-banner__tag {
    font-size: 0.78rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.75);
    background: rgba(255, 255, 255, 0.07);
    border: 0.5px solid rgba(255, 255, 255, 0.15);
    border-radius: 100px;
    padding: 0.3rem 0.85rem;
  }
  .ic-banner__right {
    flex-shrink: 0;
    z-index: 1;
  }
  .ic-banner__img-wrapper {
    position: relative;
    width: 280px;
    height: 280px;
    border-radius: 20px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.08),
      0 8px 24px rgba(0, 0, 0, 0.45),
      0 24px 60px rgba(0, 0, 0, 0.35),
      0 0 80px rgba(24, 95, 165, 0.25);
  }
  .ic-banner__img {
    width: 85%;
    height: 85%;
    object-fit: contain;
    border-radius: 12px;
  }
  .ic-banner__img-glow {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
    pointer-events: none;
  }
  @media (max-width: 768px) {
    .ic-banner {
      flex-direction: column-reverse;
      padding: 2.5rem 2rem;
      text-align: center;
    }
    .ic-banner__title-brand { font-size: 2.6rem; }
    .ic-banner__divider { margin: 1rem auto; }
    .ic-banner__tags { justify-content: center; }
    .ic-banner__img-wrapper { width: 200px; height: 200px; }
    .ic-banner__bg-shape--2 { right: 0; }
  }
`;

function injectBannerStyles() {
  if (document.getElementById('ic-banner-styles')) return;
  const tag = document.createElement('style');
  tag.id = 'ic-banner-styles';
  tag.textContent = bannerStyles;
  document.head.appendChild(tag);
}

export default {
  name: "Banner",
  props: {
    imageSrc: {
      type: String,
      default: "../img/logo.png",
    },
  },
  mounted() {
    injectBannerStyles();
  },
  template: `
    <section class="ic-banner">

      <div class="ic-banner__bg-shape ic-banner__bg-shape--1"></div>
      <div class="ic-banner__bg-shape ic-banner__bg-shape--2"></div>

      <div class="ic-banner__left">
        <h1 class="ic-banner__title">
          <span class="ic-banner__title-brand">Servicio profesional de limpieza</span>
        </h1>
        <div class="ic-banner__divider"></div>
        <p class="ic-banner__body">
          Pone a su disposición profesionales altamente capacitados para el aseo
          y la limpieza de hogares y oficinas. Nuestros rigurosos procesos de
          selección y formación garantizan un servicio confiable y de excelencia,
          convirtiendo nuestra propuesta en la solución ideal para la limpieza de
          casas, departamentos, empresas, oficinas y locales comerciales.
        </p>
      </div>

      <div class="ic-banner__right">
        <div class="ic-banner__img-wrapper">
          <img :src="imageSrc" alt="Iron Clean logo" class="ic-banner__img" />
          <div class="ic-banner__img-glow"></div>
        </div>
      </div>

    </section>
  `,
};