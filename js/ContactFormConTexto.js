export default {
    name: "ContactForm",
    props: {
        title:        { type: String, default: "Contactanos" },
        subtitle:     { type: String, default: "Completá el formulario y te respondemos a la brevedad." },
        destinatario: { type: String, required: true },
        texto:        { type: String, default: null },
        bgimg:        { type: String, default: null },
    },
    data() {
        return {
            form: { nombre: "", telefono: "", mensaje: "", interes: "" },
            enviado: false,
            error: false,
            esMobile: window.innerWidth < 768,
        };
    },
    mounted() {
        this._onResize = () => { this.esMobile = window.innerWidth < 768; };
        window.addEventListener('resize', this._onResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this._onResize);
    },
    computed: {
        fondoEstilo() {
            if (this.bgimg && !this.esMobile) {
                return {
                    backgroundImage: `url('${this.bgimg}')`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                };
            }
            return { background: '#0d1b2a' };
        },
    },
    methods: {
        enviarMail() {
            const asunto = encodeURIComponent(`[Iron Clean] ${this.form.interes} de ${this.form.nombre}`);
            const cuerpo = encodeURIComponent(
                `Nombre: ${this.form.nombre}\n` +
                `Teléfono: ${this.form.telefono}\n` +
                `Tipo: ${this.form.interes}\n\n` +
                `Mensaje:\n${this.form.mensaje}`
            );
            window.location.href = `mailto:${this.destinatario}?subject=${asunto}&body=${cuerpo}`;
        },
        handleSubmit() { this.enviarMail(); },
    },
    template: `
    <div :style="[fondoEstilo, {
        borderRadius: '20px',
        padding: '2.5rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        position: 'relative',
        overflow: 'hidden',
    }]">

      <div style="position:absolute;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,rgba(24,95,165,0.20) 0%,transparent 70%);top:-150px;left:-100px;pointer-events:none;z-index:0;"></div>
      <div style="position:absolute;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(240,192,64,0.10) 0%,transparent 70%);bottom:-80px;right:-60px;pointer-events:none;z-index:0;"></div>

      <div class="container-fluid" style="position:relative;z-index:1;">
        <div class="row align-items-stretch g-4 justify-content-center">

          <!-- Texto: solo se muestra si se pasa la prop -->
          <div v-if="texto" class="col-12 col-md-5 order-1 order-md-0 d-flex">
            <div style="display:flex;flex-direction:column;justify-content:center;width:100%;padding:1rem 0.5rem;text-align:left;">
              <span style="display:block;font-size:2.4rem;font-family:'Playfair Display',serif;font-weight:700;color:#f0c040;margin-top:0.1rem;margin-bottom:1.5em;">
                Atención personalizada
              </span>
              <p style="white-space:pre-line;color:rgba(255,255,255,0.85);font-family:'Lato',sans-serif;font-size:1.5rem;font-weight:bold;line-height:1.8;margin:0;flex:1;">{{ texto }}</p>
            </div>
          </div>

          <!-- Formulario: centrado si no hay texto, a la derecha si hay texto -->
          <div :class="texto ? 'col-12 col-md-5 order-2 order-md-1' : 'col-12 col-md-6'">
            <div class="card shadow-sm p-4 p-md-5 h-100 w-100">

              <h2 class="fw-bold text-primary mb-1 text-center">{{ title }}</h2>
              <p class="text-primary mb-4 text-center" style="font-weight:bold;">{{ subtitle }}</p>

              <form @submit.prevent="handleSubmit" novalidate>

                <div class="mb-3">
                  <label for="cf-nombre" class="form-label fw-medium">Nombre <span class="text-danger">*</span></label>
                  <input id="cf-nombre" v-model="form.nombre" type="text" class="form-control" placeholder="Tu nombre completo" required />
                </div>

                <div class="mb-3">
                  <label for="cf-telefono" class="form-label fw-medium">Número de teléfono <span class="text-danger">*</span></label>
                  <input id="cf-telefono" v-model="form.telefono" type="tel" class="form-control" placeholder="+54 11 1234-5678" required />
                </div>

                <div class="mb-4">
                  <label for="cf-mensaje" class="form-label fw-medium">Mensaje <span class="text-danger">*</span></label>
                  <textarea id="cf-mensaje" v-model="form.mensaje" class="form-control" rows="4" placeholder="Escribí tu consulta acá..." required></textarea>
                </div>

                <div class="mb-4">
                  <p class="form-label fw-medium mb-2">Estoy interesado/a <span class="text-danger">*</span></p>
                  <div class="d-flex gap-4">
                    <div class="form-check">
                      <input id="cf-consulta" v-model="form.interes" class="form-check-input" type="radio" name="interes" value="Consulta" required />
                      <label class="form-check-label" for="cf-consulta">Consulta</label>
                    </div>
                    <div class="form-check">
                      <input id="cf-presupuesto" v-model="form.interes" class="form-check-input" type="radio" name="interes" value="Presupuesto" required />
                      <label class="form-check-label" for="cf-presupuesto">Presupuesto</label>
                    </div>
                  </div>
                </div>

                <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="!form.nombre || !form.telefono || !form.mensaje || !form.interes">
                    Enviar mensaje
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
};