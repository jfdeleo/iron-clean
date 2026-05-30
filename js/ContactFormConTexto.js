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
            required: true,
        },
        texto: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            form: {
                nombre: "",
                telefono: "",
                mensaje: "",
                interes: "",
            },
            enviado: false,
            error: false,
        };
    },
    methods: {
        enviarMail() {
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
    <div class="container py-4">
      <div class="row align-items-start g-0">

        <!-- Texto lateral -->
        <div v-if="texto" class="col-12 col-md-6 d-flex">
          <div style="
            background: #0d1b2a;
            border-radius: 20px;
            padding: 2.5rem 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            box-shadow: 0 4px 24px rgba(0,0,0,0.10);
            position: relative;
            overflow: hidden;
          ">
            <!-- Decoración de fondo -->
            <div style="
              position: absolute;
              width: 280px; height: 280px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(24,95,165,0.25) 0%, transparent 70%);
              top: -100px; left: -80px;
              pointer-events: none;
            "></div>
            <div style="
              position: absolute;
              width: 200px; height: 200px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(240,192,64,0.12) 0%, transparent 70%);
              bottom: -60px; right: -40px;
              pointer-events: none;
            "></div>

            <!-- Comilla decorativa -->
            <div style="
              font-size: 5rem;
              line-height: 1;
              color: #f0c040;
              opacity: 0.35;
              font-family: Georgia, serif;
              margin-bottom: -1rem;
              position: relative;
              z-index: 1;
            ">&ldquo;</div>

            <p style="
              white-space: pre-line;
              color: rgba(255,255,255,0.85);
              font-family: 'Lato', sans-serif;
              font-size: 1rem;
              font-weight: 300;
              line-height: 1.8;
              margin: 0;
              position: relative;
              z-index: 1;
            ">{{ texto }}</p>

            <!-- Línea decorativa inferior -->
            <div style="
              width: 50px;
              height: 3px;
              background: linear-gradient(90deg, #f0c040, #185fa5);
              border-radius: 2px;
              margin-top: 1.5rem;
              position: relative;
              z-index: 1;
            "></div>
          </div>
        </div>

        <!-- Formulario -->
        <div :class="texto ? 'col-12 col-md-6' : 'col-12'">
          <div class="card shadow-sm p-4 p-md-5 mx-auto" style="max-width: 560px;">

            <h2 class="fw-bold text-primary mb-1">{{ title }}</h2>
            <p class="text-primary mb-4">{{ subtitle }}</p>

            <form @submit.prevent="handleSubmit" novalidate>

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
        </div>

      </div>
    </div>
  `,
};