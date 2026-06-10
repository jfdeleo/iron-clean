const fichaStyles = `
  .ficha {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    font-family: 'Lato', sans-serif;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .ficha__inner {
    display: flex;
    flex: 1;
    min-height: 420px;
  }

  .ficha__mapa {
    flex: 1;
    min-height: 300px;
    position: relative;
  }

  .ficha__mapa iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .ficha__datos {
    flex: 0 0 360px;
    padding: 2rem 1.8rem;
    background: #0d1b2a;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    overflow-y: auto;
  }

  .ficha__titulo {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #f0c040;
    margin: 0 0 0.2rem 0;
  }

  .ficha__divider {
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #f0c040, #185fa5);
    border-radius: 2px;
    margin-bottom: 0.5rem;
  }

  .ficha__bloque {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .ficha__label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #f0c040;
    opacity: 0.85;
  }

  .ficha__valor {
    font-size: 0.9rem;
    font-weight: 300;
    color: rgba(255,255,255,0.85);
    line-height: 1.5;
  }

  .ficha__valor a {
    color: rgba(255,255,255,0.85);
    text-decoration: none;
    transition: color 0.2s;
  }

  .ficha__valor a:hover {
    color: #f0c040;
  }

  .ficha__sep {
    border: none;
    border-top: 0.5px solid rgba(255,255,255,0.1);
    margin: 0;
  }

  @media (max-width: 768px) {
    .ficha__inner {
      flex-direction: column;
      min-height: unset;
    }
    .ficha__datos {
      flex: none;
      order: -1;
    }
    .ficha__mapa {
      flex: none;
      height: 320px;
      min-height: unset;
    }
  }
`;

(function() {
  if (document.getElementById('ic-ficha-styles')) return;
  const tag = document.createElement('style');
  tag.id = 'ic-ficha-styles';
  tag.textContent = fichaStyles;
  document.head.appendChild(tag);
})();

export default {
  name: 'FichaContacto',
  props: {
    apikey:    { type: String, required: true                     },
    direccion: { type: String, default: 'Buenos Aires, Argentina' },
  },
  computed: {
    mapaUrl() {
      const dir = encodeURIComponent(this.direccion);
      return `https://www.google.com/maps/embed/v1/place?key=${this.apikey}&q=${dir}&zoom=15`;
    },
  },
  template: `
    <div class="ficha" style="padding:0;">
      <div class="ficha__inner">

        <div class="ficha__mapa">
          <iframe
            :src="mapaUrl"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="ficha__datos">
          <div>
            <p class="ficha__titulo">Contacto</p>
            <div class="ficha__divider"></div>
          </div>

          <div class="ficha__bloque">
            <span class="ficha__label">Gerente</span>
            <span class="ficha__valor">Gustavo Testai</span>
            <span class="ficha__valor">
              <a href="tel:1164692357">116 469-2357</a> /
              <a href="tel:51956458">5195-6458</a>
            </span>
          </div>

          <hr class="ficha__sep" />

          <div class="ficha__bloque">
            <span class="ficha__label">Gerente RRHH</span>
            <span class="ficha__valor">Liliana Morel</span>
            <span class="ficha__valor">
              <a href="tel:1160371192">116 037-1192</a> /
              <a href="tel:51956458">5195-6458</a>
            </span>
          </div>

          <hr class="ficha__sep" />

          <div class="ficha__bloque">
            <span class="ficha__label">Horario de oficina</span>
            <span class="ficha__valor">Lunes a viernes</span>
            <span class="ficha__valor">09:00 – 17:00</span>
          </div>

          <hr class="ficha__sep" />

          <div class="ficha__bloque">
            <span class="ficha__label">Teléfono</span>
            <span class="ficha__valor"><a href="tel:01151956458">(011) 5195-6458</a></span>
          </div>

          <div class="ficha__bloque">
            <span class="ficha__label">Email</span>
            <span class="ficha__valor">
              <a href="mailto:ironcleansa@gmail.com">ironcleansa@gmail.com</a>
            </span>
            <span class="ficha__valor">
              <a href="mailto:administracion@ironcleansa.com.es">administracion@ironcleansa.com.es</a>
            </span>
          </div>
        </div>

      </div>
    </div>
  `,
};