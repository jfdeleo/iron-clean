export default {
  name: "ContactForm",
  props: {
    title: {
      type: String,
      default: "Contactanos",
    },
    subtitle: {
      type: String,
      default: "Completá el formulario y te respondemos a la brevedad.",
    },
    destinatario: {
      type: String,
      required: true, // tu email se pasa desde el padre
    },
  },
  data() {
    return {
      form: {
        nombre: "",
        telefono: "",
        mensaje: "",
        interes: "", // "Consulta" o "Presupuesto"
      },
      enviado: false,
      error: false,
    };
  },
  methods: {
    enviarMail() {
      // Construye el mailto y lo abre
      const asunto = encodeURIComponent(
        `[Iron Clean] ${this.form.interes} de ${this.form.nombre}`
      );
      const cuerpo = encodeURIComponent(
        `Nombre: ${this.form.nombre}\n` +
        `Teléfono: ${this.form.telefono}\n` +
        `Tipo: ${this.form.interes}\n\n` +
        `Mensaje:\n${this.form.mensaje}`
      );
      window.location.href =
        `mailto:${this.destinatario}?subject=${asunto}&body=${cuerpo}`;
    },
    handleSubmit() {
      this.enviarMail();
    },
  },
  template: `
    <div class="card shadow-sm p-4 p-md-5 mx-auto" style="max-width: 560px;">

      <!-- Título y subtítulo -->
      <h2 class="fw-bold text-primary mb-1">{{ title }}</h2>
      <p class="text-primary mb-4">{{ subtitle }}</p>

      <form @submit.prevent="handleSubmit" novalidate>

        <!-- Nombre -->
        <div class="mb-3">
          <label for="cf-nombre" class="form-label fw-medium">Nombre <span class="text-danger">*</span></label>
          <input
            id="cf-nombre"
            v-model="form.nombre"
            type="text"
            class="form-control"
            placeholder="Tu nombre completo"
            required
          />
        </div>

        <!-- Teléfono -->
        <div class="mb-3">
          <label for="cf-telefono" class="form-label fw-medium">Número de teléfono <span class="text-danger">*</span></label>
          <input
            id="cf-telefono"
            v-model="form.telefono"
            type="tel"
            class="form-control"
            placeholder="+54 11 1234-5678"
            required
          />
        </div>

        <!-- Mensaje -->
        <div class="mb-4">
          <label for="cf-mensaje" class="form-label fw-medium">Mensaje <span class="text-danger">*</span></label>
          <textarea
            id="cf-mensaje"
            v-model="form.mensaje"
            class="form-control"
            rows="4"
            placeholder="Escribí tu consulta acá..."
            required
          ></textarea>
        </div>

        <!-- Radio buttons -->
        <div class="mb-4">
          <p class="form-label fw-medium mb-2">Estoy interesado/a <span class="text-danger">*</span></p>
          <div class="d-flex gap-4">
            <div class="form-check">
              <input
                id="cf-consulta"
                v-model="form.interes"
                class="form-check-input"
                type="radio"
                name="interes"
                value="Consulta"
                required
              />
              <label class="form-check-label" for="cf-consulta">Consulta</label>
            </div>
            <div class="form-check">
              <input
                id="cf-presupuesto"
                v-model="form.interes"
                class="form-check-input"
                type="radio"
                name="interes"
                value="Presupuesto"
                required
              />
              <label class="form-check-label" for="cf-presupuesto">Presupuesto</label>
            </div>
          </div>
        </div>

        <!-- Botón enviar -->
        <div class="d-grid">
          <button
            type="submit"
            class="btn btn-primary btn-lg"
            :disabled="!form.nombre || !form.telefono || !form.mensaje || !form.interes"
          >
            Enviar mensaje
          </button>
        </div>

      </form>
    </div>
  `,
};
