const formCVStyles = `
  .form-cv {
    background: #fff;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    font-family: 'Lato', sans-serif;
    max-width: 560px;
    margin: 0 auto;
  }

  .form-cv__titulo {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #0d1b2a;
    margin: 0 0 0.4rem 0;
  }

  .form-cv__divider {
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #f0c040, #185fa5);
    border-radius: 2px;
    margin-bottom: 1.8rem;
  }

  .form-cv__label {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
    color: #0d1b2a;
    margin-bottom: 0.35rem;
  }

  .form-cv__aclaracion {
    font-size: 0.75rem;
    font-weight: 300;
    color: #888;
    margin-left: 0.3rem;
  }

  .form-cv__input {
    width: 100%;
    border: 1.5px solid #e0e0e0;
    border-radius: 8px;
    padding: 0.6rem 0.9rem;
    font-size: 0.95rem;
    font-family: 'Lato', sans-serif;
    color: #333;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
    background: #fafafa;
  }

  .form-cv__input:focus {
    border-color: #185fa5;
    background: #fff;
  }

  .form-cv__file-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 1.5px dashed #c0c0c0;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    background: #fafafa;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }

  .form-cv__file-wrapper:hover {
    border-color: #185fa5;
    background: #f0f6ff;
  }

  .form-cv__file-btn {
    flex-shrink: 0;
    background: #185fa5;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    border-radius: 6px;
    padding: 0.4rem 0.9rem;
    cursor: pointer;
    border: none;
    white-space: nowrap;
  }

  .form-cv__file-nombre {
    font-size: 0.85rem;
    color: #888;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    min-width: 0;
  }

  .form-cv__file-nombre--activo {
    color: #185fa5;
    font-weight: 700;
  }

  .form-cv__acciones {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.8rem;
  }

  .form-cv__acciones--solo {
    justify-content: center;
  }

  .form-cv__acciones--ambos {
    justify-content: space-between;
  }

  .form-cv__btn {
    padding: 0.65rem 1.6rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    border: none;
    transition: opacity 0.2s, transform 0.15s;
  }

  .form-cv__btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .form-cv__btn--enviar {
    background: #185fa5;
    color: #fff;
  }

  .form-cv__btn--enviar:not(:disabled):hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  .form-cv__btn--whatsapp {
    background: #25d366;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .form-cv__btn--whatsapp:not(:disabled):hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  .form-cv__mb {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 640px) {
    .form-cv {
      padding: 1.5rem 1.2rem;
    }
    .form-cv__acciones--ambos {
      flex-direction: column;
    }
    .form-cv__btn {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }
`;

(function() {
  if (document.getElementById('ic-formcv-styles')) return;
  const tag = document.createElement('style');
  tag.id = 'ic-formcv-styles';
  tag.textContent = formCVStyles;
  document.head.appendChild(tag);
})();

export default {
  name: 'FormCV',
  props: {
    titulo:       { type: String,  default: 'Dejá tu curriculum' },
    whatsapp:     { type: Boolean, default: false                },
    wanumero:     { type: String,  default: ''                   },
    destinatario: { type: String,  default: ''                   },
  },
  data() {
    return {
      form: {
        nombre:   '',
        telefono: '',
        archivo:  null,
      },
    };
  },
  computed: {
    valido() {
      return this.form.nombre.trim() !== ''
          && this.form.telefono.trim() !== ''
          && this.form.archivo !== null;
    },
    textoArchivo() {
      return this.form.archivo ? this.form.archivo.name : 'Ningún archivo seleccionado';
    },
  },
  methods: {
    abrirSelector() {
      this.$refs.inputArchivo.click();
    },
    onArchivo(e) {
      const file = e.target.files[0];
      if (file && file.type === 'application/pdf') {
        this.form.archivo = file;
      } else {
        this.form.archivo = null;
        alert('Solo se aceptan archivos PDF.');
      }
    },
    enviarMail() {
      const asunto = encodeURIComponent(`[CV] ${this.form.nombre}`);
      const cuerpo = encodeURIComponent(
        `Nombre: ${this.form.nombre}\n` +
        `Teléfono: ${this.form.telefono}\n\n` +
        `Adjuntá el CV manualmente si tu cliente de correo no lo adjuntó automáticamente.`
      );
      window.location.href = `mailto:${this.destinatario}?subject=${asunto}&body=${cuerpo}`;
    },
    enviarWhatsapp() {
      const texto = encodeURIComponent(
        `Hola! Me llamo ${this.form.nombre} y quiero dejar mi curriculum.\n` +
        `Mi número de contacto es: ${this.form.telefono}`
      );
      window.open(`https://wa.me/${this.wanumero}?text=${texto}`, '_blank');
    },
  },
  template: `
    <div class="form-cv">
      <h2 class="form-cv__titulo">{{ titulo }}</h2>
      <div class="form-cv__divider"></div>

      <div class="form-cv__mb">
        <label class="form-cv__label">
          Nombre y apellido <span style="color:#e53935;">*</span>
        </label>
        <input
          v-model="form.nombre"
          type="text"
          class="form-cv__input"
          placeholder="Juan Pérez"
        />
      </div>

      <div class="form-cv__mb">
        <label class="form-cv__label">
          Número de contacto <span style="color:#e53935;">*</span>
        </label>
        <input
          v-model="form.telefono"
          type="tel"
          class="form-cv__input"
          placeholder="+54 11 1234-5678"
        />
      </div>

      <div class="form-cv__mb">
        <label class="form-cv__label">
          Curriculum vitae <span style="color:#e53935;">*</span>
          <span class="form-cv__aclaracion">Solo se aceptan archivos .pdf</span>
        </label>
        <div class="form-cv__file-wrapper">
          <button type="button" class="form-cv__file-btn" @click="abrirSelector">
            Elegir archivo
          </button>
          <span class="form-cv__file-nombre" :class="{ 'form-cv__file-nombre--activo': form.archivo }">
            {{ textoArchivo }}
          </span>
        </div>
        <input
          ref="inputArchivo"
          type="file"
          accept=".pdf,application/pdf"
          style="display:none;"
          @change="onArchivo"
        />
      </div>

      <div class="form-cv__acciones" :class="whatsapp ? 'form-cv__acciones--ambos' : 'form-cv__acciones--solo'">
        <button
          v-if="whatsapp"
          class="form-cv__btn form-cv__btn--whatsapp"
          :disabled="!valido"
          @click="enviarWhatsapp"
          type="button"
        >
          💬 Escribinos al WhatsApp
        </button>
        <button
          class="form-cv__btn form-cv__btn--enviar"
          :disabled="!valido"
          @click="enviarMail"
          type="button"
        >
          Enviar
        </button>
      </div>
    </div>
  `,
};