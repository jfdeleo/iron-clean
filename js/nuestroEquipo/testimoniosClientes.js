// Componente TestimoniosClientes (Vue 3 en modo CDN/ESM, sin build)
// Los estilos se inyectan desde un IIFE porque <style> dentro del template no funciona en CDN.
// Muestra un testimonio a la vez, con flechas para pasar al anterior / siguiente.

(function () {
    // Fuente Material Icons de Google. Si la página ya la carga (desde cualquier
    // componente o desde el index.html), no se vuelve a agregar.
    if (!document.querySelector('link[href*="Material+Icons"]')) {
        const link = document.createElement('link');
        link.id = 'testimonios-clientes-material-icons';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined';
        document.head.appendChild(link);
    }

    if (document.getElementById('testimonios-clientes-styles')) return;

    const style = document.createElement('style');
    style.id = 'testimonios-clientes-styles';
    style.textContent = `
    .testimonios-clientes {
      --tc-azul: #0d2b52;
      --tc-texto: #4a5568;
      --tc-borde: #dde4ee;

      width: 100%;
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
      color: var(--tc-texto);
    }
    .testimonios-clientes .testimonios-clientes-titulo {
      margin: 0;
      font-size: clamp(1.4rem, .9rem + .9vw, 2.2rem);
      font-weight: 700;
      line-height: 1.2;
      color: var(--tc-azul);
    }
    .testimonios-clientes .testimonios-clientes-subtitulo {
      margin: .15rem 0 1.1rem;
      font-size: clamp(.9rem, .6rem + .4vw, 1.2rem);
      line-height: 1.3;
      color: var(--tc-azul);
    }
    .testimonios-clientes .testimonios-clientes-carrusel {
      display: flex;
      align-items: center;
      gap: .8rem;
    }
    .testimonios-clientes .testimonios-clientes-flecha {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      padding: 0;
      border: 1px solid var(--tc-borde);
      border-radius: 50%;
      background: #ffffff;
      color: var(--tc-azul);
      cursor: pointer;
      transition: background .15s ease, box-shadow .15s ease;
    }
    .testimonios-clientes .testimonios-clientes-flecha:hover {
      background: #eef2f8;
      box-shadow: 0 2px 8px rgba(13, 43, 82, .15);
    }
    .testimonios-clientes .testimonios-clientes-flecha .material-icons {
      font-size: 1.4rem;
      line-height: 1;
      user-select: none;
    }
    .testimonios-clientes .testimonios-clientes-ventana {
      flex: 1 1 auto;
      min-width: 0;
    }
    .testimonios-clientes .testimonios-clientes-tarjeta {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      padding: 1.2rem 1.4rem;
      border: 1px solid var(--tc-borde);
      border-radius: .7rem;
      background: #ffffff;
    }
    .testimonios-clientes .testimonios-clientes-foto {
      flex: 0 0 auto;
      width: clamp(4rem, 3rem + 1.4vw, 5.6rem);
      height: clamp(4rem, 3rem + 1.4vw, 5.6rem);
      border-radius: 50%;
      object-fit: cover;
      background: #d5dde9;
    }
    .testimonios-clientes .testimonios-clientes-estrellas {
      display: flex;
      gap: .1rem;
      margin-bottom: .45rem;
      color: #f5a623;
    }
    .testimonios-clientes .testimonios-clientes-estrellas .material-icons {
      font-size: 1.2rem;
      line-height: 1;
      user-select: none;
    }
    .testimonios-clientes .testimonios-clientes-opinion {
      margin: 0 0 .6rem;
      font-size: clamp(.82rem, .65rem + .3vw, 1.05rem);
      line-height: 1.45;
      color: var(--tc-texto);
    }
    .testimonios-clientes .testimonios-clientes-cargo {
      margin: 0;
      font-size: clamp(.8rem, .62rem + .3vw, 1rem);
      font-weight: 700;
      line-height: 1.3;
      color: var(--tc-azul);
    }
    .testimonios-clientes .testimonios-clientes-empresa {
      margin: 0;
      font-size: clamp(.75rem, .6rem + .25vw, .95rem);
      line-height: 1.3;
      color: var(--tc-texto);
    }

    /* Transición entre testimonios */
    .testimonios-clientes .tc-fade-enter-active,
    .testimonios-clientes .tc-fade-leave-active {
      transition: opacity .25s ease;
    }
    .testimonios-clientes .tc-fade-enter-from,
    .testimonios-clientes .tc-fade-leave-to {
      opacity: 0;
    }

    @media (max-width: 575.98px) {
      .testimonios-clientes .testimonios-clientes-carrusel { gap: .5rem; }
      .testimonios-clientes .testimonios-clientes-flecha { width: 1.8rem; height: 1.8rem; }
      .testimonios-clientes .testimonios-clientes-tarjeta {
        gap: .8rem;
        padding: 1rem;
      }
    }
  `;
    document.head.appendChild(style);
})();

export default {
    name: 'TestimoniosClientes',
    props: {
        titulo: {
            type: String,
            default: 'Lo que dicen nuestros clientes'
        },
        subtitulo: {
            type: String,
            default: 'Confianza que nos impulsa'
        },
        // Lista de testimonios: [{ imagen, opinion, cargo, empresa, alt? }]
        //  - imagen: foto del cliente (ruta o URL)
        //  - opinion: texto de la opinión (las comillas se agregan solas)
        //  - cargo: puesto que ocupa, ej: 'Gerente de Operaciones'
        //  - empresa: nombre de la empresa
        //  - alt (opcional): texto alternativo de la foto
        testimonios: {
            type: Array,
            default: function () {
                return [];
            }
        },
        // Milisegundos entre cambios automáticos. 0 = sin cambio automático.
        intervalo: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            actual: 0,
            temporizador: null
        };
    },
    computed: {
        testimonio() {
            return this.testimonios[this.actual] || null;
        },
        hayVarios() {
            return this.testimonios.length > 1;
        }
    },
    watch: {
        testimonios() {
            // Si cambia la lista, nos aseguramos de no quedar fuera de rango.
            if (this.actual >= this.testimonios.length) this.actual = 0;
        }
    },
    methods: {
        anterior() {
            const total = this.testimonios.length;
            if (!total) return;
            this.actual = (this.actual - 1 + total) % total;
            this.reiniciarTemporizador();
        },
        siguiente() {
            const total = this.testimonios.length;
            if (!total) return;
            this.actual = (this.actual + 1) % total;
            this.reiniciarTemporizador();
        },
        iniciarTemporizador() {
            if (this.intervalo > 0 && this.hayVarios) {
                this.temporizador = setInterval(() => {
                    this.actual = (this.actual + 1) % this.testimonios.length;
                }, this.intervalo);
            }
        },
        reiniciarTemporizador() {
            clearInterval(this.temporizador);
            this.temporizador = null;
            this.iniciarTemporizador();
        }
    },
    mounted() {
        this.iniciarTemporizador();
    },
    beforeUnmount() {
        clearInterval(this.temporizador);
    },
    template: `
    <section class="testimonios-clientes">
      <h2 v-if="titulo" class="testimonios-clientes-titulo" style="padding-top: 0.2em;padding-bottom: 0.2em;">{{ titulo }}</h2>
      <p v-if="subtitulo" class="testimonios-clientes-subtitulo" style="padding-bottom: 0.2em;">{{ subtitulo }}</p>

      <div v-if="testimonio" class="testimonios-clientes-carrusel">
        <button
          v-if="hayVarios"
          type="button"
          class="testimonios-clientes-flecha"
          aria-label="Testimonio anterior"
          @click="anterior"
        >
          <span class="material-icons" aria-hidden="true">chevron_left</span>
        </button>

        <div class="testimonios-clientes-ventana">
          <transition name="tc-fade" mode="out-in">
            <article :key="actual" class="testimonios-clientes-tarjeta">
              <img
                v-if="testimonio.imagen"
                class="testimonios-clientes-foto"
                :src="testimonio.imagen"
                :alt="testimonio.alt || testimonio.cargo"
              />
              <div class="testimonios-clientes-cuerpo">
                <div class="testimonios-clientes-estrellas" aria-label="5 estrellas">
                  <span
                    v-for="n in 5"
                    :key="n"
                    class="material-icons"
                    aria-hidden="true"
                  >star</span>
                </div>
                <p class="testimonios-clientes-opinion">“{{ testimonio.opinion }}”</p>
                <p class="testimonios-clientes-cargo">{{ testimonio.cargo }}</p>
                <p class="testimonios-clientes-empresa">{{ testimonio.empresa }}</p>
              </div>
            </article>
          </transition>
        </div>

        <button
          v-if="hayVarios"
          type="button"
          class="testimonios-clientes-flecha"
          aria-label="Testimonio siguiente"
          @click="siguiente"
        >
          <span class="material-icons" aria-hidden="true">chevron_right</span>
        </button>
      </div>
    </section>
  `
};