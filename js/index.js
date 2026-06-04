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
        :image-src="'./img/taza.png'"
        image-alt="Servicio de hogar"
        titulo="Hogar"
        :items="['Limpieza y desinfección de baños y cocinas.','Limpieza de habitaciones, salas y zonas comunes.','Servicio de limpieza de cocina básica y sencilla.','Recolección y depósito de basuras.','Lavado de ropa.','Planchado de ropa.']"
        link="#hogar"
        :imagen-derecha="true"
      ></card>

      <card
        style="margin: 1em;"
        :image-src="'./img/propiedad-horizontal.png'"
        image-alt="Servicio de propiedad horizontal"
        titulo="EMPRESAS Y PROPIEDAD HORIZONTAL"
        :items="['Limpieza y desinfección de baños','Limpieza de escritorios y mobiliarios','Limpieza de pasillos, escaleras y espacios comunes.','Limpieza de vidrios y paredes interiores.','Recolección y depósito de basuras.']"
        link="#hogar"
        :imagen-derecha="false"
      ></card>

      <contact-form-con-texto
        destinatario="franco15deleo@gmail.com"
        texto="Somos una empresa de limpieza que se distingue por ofrecer soluciones eficientes, un compromiso genuino y una atención cercana tanto a nuestros clientes como a nuestros colaboradores."
      ></contact-form-con-texto>
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
  template: `<div class="container py-5"><h1>Servicios</h1></div>`,
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