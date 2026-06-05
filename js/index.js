import { createApp }                          from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Navbar               from './navbar.js';
import ContactForm          from './ContactForm.js';
import Banner               from './banner.js';
import Card                 from './cards.js';
import Footer               from './footer.js';
import ContactFormConTexto  from './ContactFormConTexto.js';
import Carrousel  from './carrousel.js';

// ── Páginas ───────────────────────────────────────────────────────────────────

const Home = {
    template: `
      <div>
        <banner :items="$root.navItems" :logo="$root.logoSrc"></banner>
        <card
          style="margin: 1em;"
          titulo="Experiencia y calidad"
          :image-src="'./img/propiedad-horizontal.png'"
          :items="[
            { titulo: 'Asesoramiento especializado', subtitulo: 'Estamos a su disposición las 24 horas y los 365 días del año, proporcionando la mejor solución a sus necesidades de limpieza.' },
            { titulo: 'Cumplimos lo prometido', subtitulo: 'Realizamos supervisiones permanentes a nuestro personal de limpieza para garantizar el mejor servicio al precio más conveniente.' },
            { titulo: 'Cumplimos lo prometido', subtitulo: 'Proporcionamos respuestas y soluciones en tiempo récord a las necesidades de higienización que nuestros clientes necesitan.' }
          ]"
          link="#hogar"
        ></card>
        <div style="color: white;background: rgb(13, 27, 42);margin-bottom: 1em; font-family: 'Lato', sans-serif;">
        <div class="container" style="padding: 2em;"><h1><strong style="font-size: 2.5rem;font-family: 'Playfair Display', serif;">Nuestra
        visión</strong></h1><p style="font-size: 1.4rem;">Ser un referente en servicios de limpieza, brindando equipos confiables, calificados y comprometidos, que utilicen insumos sostenibles para garantizar espacios limpios, seguros y confortables.
        </p><h1><strong style="font-size: 2.5rem;font-family: 'Playfair Display', serif;">Nuestro compromiso</strong></h1>
        <p style="font-size: 1.4rem;">Aportar al bienestar y la salud de las personas mediante soluciones integrales de limpieza, adaptadas a las necesidades de hogares, oficinas e instalaciones comerciales.</p></div>
        </div></div>
        </div>
        </div>

          <Contact-form-con-texto style="margin-left: 0.5em; width: 99.1%;" destinatario="franco15deleo@gmail.com" bgimg="./img/img.png"  texto="Somos una empresa de limpieza que se distingue por ofrecer soluciones eficientes, un compromiso genuino y una atención cercana tanto a nuestros clientes como a nuestros colaboradores."></Contact-form-con-texto>

        <Carrousel
          :fotos="['./img/prueba/img1.png',
           './img/prueba/img2.png',
           './img/prueba/img3.png',
           './img/prueba/img4.png',
           './img/prueba/img5.png',
           './img/prueba/img6.png', ]"
          :visibles="6"
          :velocidad="60"
        ></Carrousel>
      </div>
    `,
  };

const Servicios = {
  template: `<div class="container py-5">
   <div class="row">
      <div class="col-md-6 offset-md-3">
          <h1>Servicios</h1>
          <div style="width: 50px; height: 5px; background: linear-gradient(90deg, rgb(240, 192, 64), rgb(24, 95, 165)); border-radius: 2px; margin-top: 1.5rem; margin-bottom: 1.5rem: width: 28rem;"></div>
          <img src="./img/limpieza-empresas.png" alt="Iron Clean logo" class="ic-banner__img" style="width: 50rem;margin-top: 35px;"/>
      </div>
    </div>
       <div class="row">
          <div class="col-md-6 offset-md-3">
              <h1>Servicios</h1>
              <div style="width: 50px; height: 5px; background: linear-gradient(90deg, rgb(240, 192, 64), rgb(24, 95, 165)); border-radius: 2px; margin-top: 1.5rem; margin-bottom: 1.5rem: width: 28rem;"></div>
              <img src="./img/limpieza-empresas.png" alt="Iron Clean logo" class="ic-banner__img" style="width: 50rem;margin-top: 35px;"/>
          </div>
        </div>




  </div>`,
};

const Nosotros = {
  template: `<div class="container py-5"><h1>Nosotros</h1></div>`,
};

const Contacto = {
  template: `
    <div class="container py-5">
      <contact-form destinatario="franco15deleo@gmail.com"></contact-form>
    </div>
  `,
};

// ── Router ────────────────────────────────────────────────────────────────────

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',          component: Home      },
    { path: '/servicios', component: Servicios },
    { path: '/nosotros',  component: Nosotros  },
    { path: '/contacto',  component: Contacto  },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

// ── App ───────────────────────────────────────────────────────────────────────

const app = createApp({
  data() {
    return {
      logoSrc: null,
      navItems: [
        { name: 'Inicio',    link: '#/'          },
        { name: 'Servicios', link: '#/servicios' },
        { name: 'Nosotros',  link: '#/nosotros'  },
        { name: 'Contacto',  link: '#/contacto'  },
      ],
    };
  },
});

app.use(router);

app.component('Navbar',              Navbar);
app.component('ContactForm',         ContactForm);
app.component('Banner',              Banner);
app.component('Card',                Card);
app.component('ic-footer',           Footer);
app.component('ContactFormConTexto', ContactFormConTexto);
app.component('Carrousel', Carrousel);

app.mount('#app');