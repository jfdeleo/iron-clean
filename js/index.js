import { createApp }                          from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Navbar               from './navbar.js';
import ContactForm          from './ContactForm.js';
import Banner               from './banner.js';
import Card                 from './cards.js';
import Footer               from './footer.js';
import ContactFormConTexto  from './ContactFormConTexto.js';
import Carrousel            from './carrousel.js';
import EventsCards          from './eventsCards.js';
import FichaContacto from './contactanos.js';

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
          { titulo: 'Espacios laborales limpios', subtitulo: 'Proporcionamos respuestas y soluciones en tiempo récord a las necesidades de higienización que nuestros clientes necesitan.' },
          { titulo: 'Soluciones a Medida', subtitulo: 'Somos una empresa de limpieza que se distingue por ofrecer soluciones eficientes, un compromiso genuino y una atención cercana tanto a nuestros clientes como a nuestros colaboradores.' }
        ]"
        link="#hogar"
      ></card>

      <div style="color:white;background:rgb(13,27,42);margin-bottom:1em;font-family:'Lato',sans-serif;">
        <div class="container" style="padding:2em;">
          <h1><strong style="font-size:2.5rem;font-family:'Playfair Display',serif;">Nuestra visión</strong></h1>
          <p style="font-size:1.4rem;">Ser un referente en servicios de limpieza, brindando equipos confiables, calificados y comprometidos, que utilicen insumos sostenibles para garantizar espacios limpios, seguros y confortables.</p>
          <h1><strong style="font-size:2.5rem;font-family:'Playfair Display',serif;">Nuestro compromiso</strong></h1>
          <p style="font-size:1.4rem;">Aportar al bienestar y la salud de las personas mediante soluciones integrales de limpieza, adaptadas a las necesidades de hogares, oficinas e instalaciones comerciales.</p>
        </div>
      </div>

      <contact-form-con-texto style="margin:1em;" destinatario="franco15deleo@gmail.com" bgimg="./img/img.png"></contact-form-con-texto>

      <carrousel
        :fotos="['./img/prueba/img1.png','./img/prueba/img2.png','./img/prueba/img3.png','./img/prueba/img4.png','./img/prueba/img5.png','./img/prueba/img6.png']"
        :visibles="6"
        :velocidad="60"
      ></carrousel>
    </div>
  `,
};

const Nosotros = {
  template: `<div class="container py-5">
        <div class="jumbotron">
              <div class="row">
                <div class="col-md-6 offset-md-3">
                  <h1 style="text-align: center;">Nosotros</h1>
                  <div style="width: 8em !important;margin-left:auto;margin-right:auto;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>
                    <p class="lead"> (Pagina en construccion)⚒️</p>
                </div>
              </div>
        </div>
        </div>`,
};

const NuestroEquipo = {
  template: `
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h1 style="text-align: center;">Nuestro Equipo</h1>
          <div style="width: 12em !important;margin-left:auto;margin-right:auto;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>
          <img src="./img/limpieza-empresas.png" alt="Iron Clean logo" class="ic-banner__img" style="width:50rem;margin-top:35px;"/>
        </div>
      </div>
    </div>
  `,
};


const NuestrosClientes = {
  template: `<div class="container py-5">
        <div class="jumbotron">
              <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h1 style="text-align: center;">Nuestros Clientes</h1>
                    <div style="width: 10em !important;margin-left:auto;margin-right:auto;;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>
                    <p class="lead"> (Pagina en construccion)⚒️</p>
                </div>
              </div>
        </div>
        </div>`,
};

const Eventos = {
  template: `
    <div class="container py-5">
      <div class="jumbotron">
              <div class="row">
                <div class="col-md-6 offset-md-3">
                      <h1 style="text-align: center;">Eventos</h1>
                      <div style="width: 5em !important;margin-left:auto;margin-right:auto;;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>
                      <p class="lead"> (Pagina en construccion)⚒️</p>
                </div>
              </div>
      </div>
      <div class="row g-4">
        <div
          v-for="(evento, i) in $root.eventos"
          :key="i"
          style="height: 30em;"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <events-cards
            :titulo="evento.titulo"
            :descripcion="evento.descripcion"
            :fotos="evento.fotos"
          ></events-cards>
        </div>
      </div>
    </div>
  `,
};



const Contacto = {
  template: `
    <div class="container py-5">
      <div class="jumbotron">
            <div class="row">
              <div class="col-md-6 offset-md-3">
                  <h1 style="text-align: center;">Contacto</h1>
                  <div style="width: 7em !important;margin-left:auto;margin-right:auto;;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>


              </div>
            </div>
            <div class="row g-4">

                              <ficha-contacto
                              class="col-md-6 offset-md-1"

                                apikey="AIzaSyB_1RiBPpzx0T1rviCQjtlPvf2hhiTpJas"
                                direccion="A. Moriondo 2941, Sáenz Peña, Provincia de Buenos Aires"
                              ></ficha-contacto>
                             <contact-form class="col-md-5" destinatario="franco15deleo@gmail.com"></contact-form>

            </div>
      </div>
    </div>
  `,
};

const Covid = {
  template: `
    <div class="container py-5">
      <div class="jumbotron">
                    <div class="row">
                      <div class="col-md-6 offset-md-3">
                          <h1 style="text-align: center;">Covid-19</h1>
                          <div style="width: 7em !important;margin-left:auto;margin-right:auto;;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>
                          <p class="lead"> (Pagina en construccion)⚒️</p>
                      </div>
                    </div>
      </div>
    </div>
  `,
};

const Fotogaleria = {
  template: `
    <div class="container py-5">
      <div class="jumbotron">
              <div class="row">
                 <div class="col-md-6 offset-md-3">
                  <h1 style="text-align: center;">Fotogaleria</h1>
                  <div style="width: 10em !important;margin-left:auto;margin-right:auto;;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>
                  <p class="lead"> (Pagina en construccion)⚒️</p>
              </div>
            </div>
      </div>
    </div>
  `,
};

const HogarMariaLuisa = {
  template: `
    <div class="container py-5">
      <div class="jumbotron">
                    <div class="row">
                      <div class="col-md-6 offset-md-3">
                          <h1 style="text-align: center;">Hogar Maria Luisa</h1>
                          <div style="width: 15em !important;margin-left:auto;margin-right:auto;;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>
                          <p class="lead"> (Pagina en construccion)⚒️</p>
                      </div>
                </div>
      </div>
    </div>
  `,
};





// ── Router ────────────────────────────────────────────────────────────────────

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',          component: Home      },
    { path: '/sobre-nosotros', component: Nosotros },
    { path: '/nuestro-equipo', component: NuestroEquipo },
    { path: '/nuestros-clientes',  component: NuestrosClientes  },
    { path: '/eventos',   component: Eventos   },
    { path: '/contacto',  component: Contacto  },
    { path: '/covid-19',  component: Covid  },
    { path: '/fotogaleria',  component: Fotogaleria  },
    { path: '/hogar-maria-luisa',  component: HogarMariaLuisa  },
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
        { name: 'Inicio',            link: '#/'          },
        { name: 'Sobre nosotros',    link: '#/sobre-nosotros'  },
        { name: 'Nuestro equipo',    link: '#/nuestro-equipo' },
        { name: 'Nuestros clientes', link: '#/nuestros-clientes'          },
        { name: 'Eventos',           link: '#/eventos'   },
        { name: 'Contacto',          link: '#/contacto'  },
      ],
      dropdowns: [
        { name: 'Desinfección COVID-19',                          link: '#/covid-19' },
        { name: 'Fotogaleria',                                    link: '#/fotogaleria' },
        { name: 'HOGAR MARÍA LUISA - Vos también podes ayudar',  link: '#/hogar-maria-luisa' },
      ],
      eventos: [
        {
          titulo: 'Desfile DESIGNER de Guillermo Azar Producciones, Parque de las Naciones Unidas.',
          descripcion: 'Descripcion del evento',
          fotos: [
            './img/imagenes-eventos/img1.png',
            './img/imagenes-eventos/img2.png',
            './img/imagenes-eventos/img3.png',
          ],
        },
        {
          titulo: 'Desfile DESIGNER de Guillermo Azar Producciones, Parque de las Naciones Unidas.',
          descripcion: 'Descripcion del evento',
          fotos: [
            './img/prueba/img2.png',
            './img/prueba/img3.png',
            './img/prueba/img4.png',
            './img/prueba/img5.png',
            './img/prueba/img6.png',
          ],
        },
        {
          titulo: 'Desfile DESIGNER de Guillermo Azar Producciones, Parque de las Naciones Unidas.',
          descripcion: 'Descripcion del evento',
          fotos: [
            './img/prueba/img3.png',
            './img/prueba/img4.png',
            './img/prueba/img5.png',
            './img/prueba/img6.png',
          ],
        },
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
app.component('Carrousel',           Carrousel);
app.component('EventsCards',         EventsCards);
app.component('FichaContacto', FichaContacto);

app.mount('#app');