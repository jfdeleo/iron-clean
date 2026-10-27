// Estilos inyectados por JS (en modo CDN los <style> dentro del template no funcionan)
(function () {
    if (document.getElementById('eventos-destacados-styles')) return;
    const style = document.createElement('style');
    style.id = 'eventos-destacados-styles';
    style.textContent = `
    .ed-wrapper { width: 100%; }

    .ed-titulo {
      margin: 0 0 14px;
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #1e293b;
    }

    .ed-carrusel { position: relative; }

    .ed-pista {
      display: flex;
      gap: 12px;
      overflow-x: auto;
      scroll-behavior: auto; /* la animación la hace el JS */
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .ed-pista::-webkit-scrollbar { display: none; }

    .ed-item {
      flex: 0 0 calc((100% - 5 * 12px) / 6);
      min-width: 0;
    }

    .ed-imagen {
      display: block;
      width: 100%;
      aspect-ratio: 1.1 / 1;
      object-fit: cover;
      border-radius: 6px;
      cursor: pointer;
      transition: transform 0.2s, filter 0.2s;
    }
    .ed-imagen:hover { filter: brightness(1.08); transform: scale(1.02); }

    .ed-item-titulo {
      margin: 8px 0 0;
      font-size: 0.85rem;
      font-weight: 700;
      color: #1e293b;
      line-height: 1.2;
    }

    .ed-item-subtitulo {
      margin: 2px 0 0;
      font-size: 0.78rem;
      color: #475569;
      line-height: 1.2;
    }

    .ed-flecha {
      position: absolute;
      top: calc(50% - 28px);
      transform: translateY(-50%);
      z-index: 2;
      width: 38px;
      height: 38px;
      border: none;
      border-radius: 50%;
      background: #ffffff;
      color: #1e293b;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.2s;
    }
    .ed-flecha:hover { transform: translateY(-50%) scale(1.08); }
    .ed-flecha:disabled { opacity: 0; pointer-events: none; }
    .ed-flecha-izq { left: -12px; }
    .ed-flecha-der { right: -12px; }

    /* ---------- Modal ---------- */
    .ed-modal {
      position: fixed;
      inset: 0;
      z-index: 2000;
      background: rgba(0, 0, 0, 0.82);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }

    .ed-modal-contenido {
      position: relative;
      width: 100%;
      max-width: 920px;
      max-height: 100%;
      background: #0f172a;
      border-radius: 10px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow: hidden;
    }

    .ed-modal-cerrar {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 2;
      width: 36px;
      height: 36px;
      border: none;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      color: #ffffff;
      font-size: 1.4rem;
      line-height: 1;
      cursor: pointer;
    }
    .ed-modal-cerrar:hover { background: rgba(255, 255, 255, 0.3); }

    .ed-modal-principal {
      display: flex;
      align-items: center;
      justify-content: center;
      height: min(62vh, 540px);
      background: #000000;
      border-radius: 6px;
      overflow: hidden;
    }
    .ed-modal-principal img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .ed-modal-info { color: #ffffff; }
    .ed-modal-titulo { margin: 0; font-size: 1.05rem; font-weight: 700; }
    .ed-modal-subtitulo { margin: 2px 0 0; font-size: 0.85rem; color: #cbd5e1; }

    .ed-miniaturas {
      display: flex;
      gap: 8px;
      justify-content: center;
      overflow-x: auto;
      padding-bottom: 2px;
    }

    .ed-miniatura {
      flex: 0 0 auto;
      width: 84px;
      height: 62px;
      padding: 0;
      border: 2px solid transparent;
      border-radius: 6px;
      overflow: hidden;
      background: none;
      opacity: 0.6;
      cursor: pointer;
      transition: opacity 0.2s, border-color 0.2s;
    }
    .ed-miniatura:hover { opacity: 1; }
    .ed-miniatura.ed-activa { opacity: 1; border-color: #ffffff; }
    .ed-miniatura img { display: block; width: 100%; height: 100%; object-fit: cover; }

    .ed-fade-enter-active, .ed-fade-leave-active { transition: opacity 0.2s; }
    .ed-fade-enter-from, .ed-fade-leave-to { opacity: 0; }

    @media (max-width: 991px) {
      .ed-item { flex-basis: calc((100% - 2 * 12px) / 3); }
    }
    @media (max-width: 575px) {
      .ed-item { flex-basis: calc((100% - 12px) / 2); }
      .ed-flecha-izq { left: -4px; }
      .ed-flecha-der { right: -4px; }
      .ed-miniatura { width: 64px; height: 48px; }
    }
  `;
    document.head.appendChild(style);
})();

export default {
    name: 'EventosDestacados',

    props: {
        // Título de la sección
        titulo: { type: String, default: 'Eventos destacados' },
        // Cada evento: { imagen, imagenes, titulo, subtitulo }
        //   imagen:    ruta de la imagen que se muestra en la tarjeta
        //   imagenes:  array de rutas secundarias (se ven como miniaturas en el modal)
        //   titulo:    texto en negrita debajo de la foto
        //   subtitulo: texto secundario debajo del título
        eventos: { type: Array, default: function () { return []; } }
    },

    data() {
        return {
            puedeIrIzquierda: false,
            puedeIrDerecha: true,
            animId: null,
            destinoScroll: null,
            eventoActivo: null,
            imagenActual: ''
        };
    },

    computed: {
        // Miniaturas del modal: la imagen principal + las secundarias
        miniaturas() {
            if (!this.eventoActivo) return [];
            const extras = Array.isArray(this.eventoActivo.imagenes) ? this.eventoActivo.imagenes : [];
            return [this.eventoActivo.imagen].concat(extras);
        }
    },

    methods: {
        /* ---------- Carrusel ---------- */
        mover(direccion) {
            const pista = this.$refs.pista;
            if (!pista) return;
            const maximo = pista.scrollWidth - pista.clientWidth;
            const base = this.animId !== null && this.destinoScroll !== null ? this.destinoScroll : pista.scrollLeft;
            const destino = Math.max(0, Math.min(maximo, base + direccion * pista.clientWidth));
            this.animarScroll(destino);
        },

        animarScroll(destino) {
            const pista = this.$refs.pista;
            if (!pista) return;
            this.cancelarAnimacion();

            const inicio = pista.scrollLeft;
            const delta = destino - inicio;
            if (Math.abs(delta) < 1) return;

            const duracion = 550;
            const t0 = performance.now();
            const ease = function (t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            };

            this.destinoScroll = destino;
            const paso = (ahora) => {
                const t = Math.min((ahora - t0) / duracion, 1);
                pista.scrollLeft = inicio + delta * ease(t);
                if (t < 1) {
                    this.animId = requestAnimationFrame(paso);
                } else {
                    this.animId = null;
                    this.destinoScroll = null;
                }
            };
            this.animId = requestAnimationFrame(paso);
        },

        cancelarAnimacion() {
            if (this.animId !== null) {
                cancelAnimationFrame(this.animId);
                this.animId = null;
                this.destinoScroll = null;
            }
        },

        actualizarFlechas() {
            const pista = this.$refs.pista;
            if (!pista) return;
            this.puedeIrIzquierda = pista.scrollLeft > 1;
            this.puedeIrDerecha = pista.scrollLeft + pista.clientWidth < pista.scrollWidth - 1;
        },

        /* ---------- Modal ---------- */
        abrirModal(evento) {
            this.eventoActivo = evento;
            this.imagenActual = evento.imagen;
            document.body.style.overflow = 'hidden';
        },

        cerrarModal() {
            this.eventoActivo = null;
            this.imagenActual = '';
            document.body.style.overflow = '';
        },

        seleccionarImagen(src) {
            this.imagenActual = src;
        },

        alPresionarTecla(e) {
            if (e.key === 'Escape' && this.eventoActivo) this.cerrarModal();
        }
    },

    mounted() {
        this.actualizarFlechas();
        window.addEventListener('resize', this.actualizarFlechas);
        document.addEventListener('keydown', this.alPresionarTecla);
    },

    updated() {
        this.actualizarFlechas();
    },

    beforeUnmount() {
        this.cancelarAnimacion();
        window.removeEventListener('resize', this.actualizarFlechas);
        document.removeEventListener('keydown', this.alPresionarTecla);
        document.body.style.overflow = '';
    },

    template: `
    <section class="ed-wrapper">
      <h2 class="ed-titulo">{{ titulo }}</h2>

      <div class="ed-carrusel">
        <button
          type="button"
          class="ed-flecha ed-flecha-izq"
          aria-label="Anterior"
          :disabled="!puedeIrIzquierda"
          @click="mover(-1)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div
          class="ed-pista"
          ref="pista"
          @scroll="actualizarFlechas"
          @wheel.passive="cancelarAnimacion"
          @touchstart.passive="cancelarAnimacion"
        >
          <article class="ed-item" v-for="(evento, i) in eventos" :key="i">
            <img
              class="ed-imagen"
              :src="evento.imagen"
              :alt="evento.titulo"
              role="button"
              tabindex="0"
              @click="abrirModal(evento)"
              @keydown.enter="abrirModal(evento)"
            >
            <p class="ed-item-titulo">{{ evento.titulo }}</p>
            <p class="ed-item-subtitulo">{{ evento.subtitulo }}</p>
          </article>
        </div>

        <button
          type="button"
          class="ed-flecha ed-flecha-der"
          aria-label="Siguiente"
          :disabled="!puedeIrDerecha"
          @click="mover(1)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <teleport to="body">
        <transition name="ed-fade">
          <div class="ed-modal" v-if="eventoActivo" @click.self="cerrarModal">
            <div class="ed-modal-contenido" role="dialog" aria-modal="true" :aria-label="eventoActivo.titulo">
              <button type="button" class="ed-modal-cerrar" aria-label="Cerrar" @click="cerrarModal">&times;</button>

              <div class="ed-modal-principal">
                <img :src="imagenActual" :alt="eventoActivo.titulo">
              </div>

              <div class="ed-modal-info">
                <p class="ed-modal-titulo">{{ eventoActivo.titulo }}</p>
                <p class="ed-modal-subtitulo">{{ eventoActivo.subtitulo }}</p>
              </div>

              <div class="ed-miniaturas" v-if="miniaturas.length > 1">
                <button
                  type="button"
                  class="ed-miniatura"
                  v-for="(src, j) in miniaturas"
                  :key="j"
                  :class="{ 'ed-activa': src === imagenActual }"
                  @click="seleccionarImagen(src)"
                >
                  <img :src="src" :alt="eventoActivo.titulo + ' ' + (j + 1)">
                </button>
              </div>
            </div>
          </div>
        </transition>
      </teleport>
    </section>
  `
};

/* ------------------------------------------------------------------
   USO (en modo CDN, kebab-case y etiqueta de cierre explícita):

   import EventosDestacados from './EventosDestacados.js';
   // registrar:  components: { EventosDestacados }

   <eventos-destacados
     titulo="Eventos destacados"
     :eventos="eventos"
   ></eventos-destacados>
------------------------------------------------------------------- */