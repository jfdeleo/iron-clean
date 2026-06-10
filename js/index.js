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
import GrillaClientes from './nuestrosClientes.js';


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
                <grilla-clientes
                  :columnas="5"
                  :logos="[
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000165-59de259de4/PPlus_Logo_1200x630_BLUE.png?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000039-d32f6d32f9/kuarzo.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000578-eacb3eacb5/Captura%20de%20pantalla%202026-04-06%20132618.png?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000490-c9a96c9a98/ChatGPT%20Image%2028%20oct%202025%2C%2009_16_54.png?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000488-b6a39b6a3b/ChatGPT%20Image%2028%20oct%202025%2C%2009_06_21.png?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000038-b5228b522a/nettv.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000167-0591605919/Telefe.png?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000494-53c4453c46/294589374_417082223778804_8661031369506965919_n.png?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000149-bc5adbc5ae/gran-hermano-2022-el-reality___9FXtYKoum_2000x1500__1.jpeg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000037-d481ad481c/urbana%20play-1.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000394-5abbb5abbe/THE%20BALLS%21.jpeg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000355-25ce025ce3/the-floor-el-trecejpg.jpeg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000231-5638556387/CSYXHHA-_400x400%20%281%29.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000105-3c0303c032/EMBAJADA%20DE%20ESPA%C3%91A.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000070-1fbc81fbc9/onceloops.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000135-6ce926ce94/STORY%20LAB.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000143-3988e39890/%E2%9C%93%20Agencia%20O%E2%80%99GRADY..jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000233-f0032f0033/images.png?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000227-0f1400f143/10B1AAA6-3DAA-40E8-AF8E-06FE7E186754.jpeg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000321-777ca777cc/Captura%20de%20pantalla%202023-08-03%20110914.png?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000141-6f6c56f6c7/PROASEG.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000041-c3398c3399/el%20ombu.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000173-13ec713ec8/1534792960872.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000225-19d0d19d0e/1647014778762.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000219-dc7dbdc7dc/IMG-20230328-WA0024.jpg?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000235-d547cd547d/logo-mudra-cabecera_GRANDE-01.png?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000175-2b6362b638/Captura.PNG?ph=4304814ec2',
                    'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000323-92e9292e95/e5f63246-a545-4f64-9c59-8c8331f9cd6e.jpeg?ph=4304814ec2'
                  ]"
                ></grilla-clientes>
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
            <div class="row g-4 align-items-stretch">
              <div class="col-12 col-md-6 offset-md-1" style="display:flex; flex-direction:column;">
                <ficha-contacto
                  style="flex: 1;"
                  apikey="AIzaSyB_1RiBPpzx0T1rviCQjtlPvf2hhiTpJas"
                  direccion="A. Moriondo 2941, Sáenz Peña, Provincia de Buenos Aires"
                ></ficha-contacto>
              </div>
              <contact-form class="col-12 col-md-5" destinatario="franco15deleo@gmail.com"></contact-form>
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
    <div class="container py-5" style="padding: 0px !important;">
      <div class="jumbotron">
                    <div class="row">
                        <img src="https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000111-0f43a0f43c/hogar%20maria%20luisa.png?ph=4304814ec2" alt="" fetchpriority="high">
                              <div style="color:white;background:rgb(13,27,42);margin-bottom:1em;font-family:'Lato',sans-serif;">
                                <div class="container" style="padding:2em;">
                                  <h1><strong style="font-size:2.5rem;font-family:'Playfair Display',serif;">IRON CLEAN S.A.</strong></h1>
                                  <p style="font-size:1.4rem;">Agradece profundamente al Hogar María Luisa por brindarnos la oportunidad de colaborar y acompañar el valioso trabajo que realizan día a día todas las personas dedicadas al cuidado de jovenes y niños y al funcionamiento de este espacio tan importante.</p>
                                </div>
                              </div>
                  </div>
                </div>




     <div class="row align-items-center g-4 justify-content-center bg-transparent">

        <div class="col-12 col-md-4">
          <div style="position: relative; width: 100%; padding-bottom: 56.25%;">
            <iframe
              style="position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 8px;"
              src="https://www.youtube.com/embed/0QLUa9uSo5I?si=NatGsfNMUMn5qIzt"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
       <div class="col-12 col-md-5 d-flex flex-column align-items-center">

         <img
           src="https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000013-c9598c959b/Invoicelogo_logo-HML-RGB-01.png?ph=4304814ec2"
           alt="Hogar María Luisa"
           loading="lazy"
           class="mb-4"
           style="max-width: 100%; max-height: 100%; object-fit: contain;"
         />

         <div class="text-center w-100">
           <h5 class="mb-3">Seguinos en nuestras redes sociales</h5>
           <div class="d-flex justify-content-center flex-wrap gap-2">
             <a
               href="https://www.facebook.com/HogarMariaLuisa"
               target="_blank"
               rel="noopener noreferrer"
               class="btn btn-primary d-flex align-items-center gap-2 shadow-sm"
               style="background-color: #1877F2; border-color: #1877F2;">
               <i class="bi bi-facebook"></i> Facebook
             </a>

             <a
               href="https://www.instagram.com/hogardeninosmarialuisa"
               target="_blank"
               rel="noopener noreferrer"
               class="btn btn-danger d-flex align-items-center gap-2 shadow-sm text-white"
               style="background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); border: none;">
               <i class="bi bi-instagram"></i> Instagram
             </a>
           </div>
         </div>

       </div>

       <div class="col-12 col-md-4">
         <div class="container d-flex justify-content-center py-4 bg-transparent">
           <div class="card shadow-sm border-0 bg-white" style="width: 100%; border-radius: 12px; overflow: hidden;">
             <div class="row g-0 align-items-center">

               <div class="col-4 text-center py-4" style="background-color: #f8f9fa; min-height: 100%;">
                 <i class="bi bi-person-vcard text-primary" style="font-size: 3.5rem;"></i>
               </div>

               <div class="col-8">
                 <div class="card-body p-4 text-start">
                   <h4 class="card-title fw-bold mb-1">Contacto</h4>
                   <h5 class="text-secondary fw-semibold mb-3">Karina Tursi</h5>

                   <div class="mb-2 d-flex align-items-center gap-2">
                     <i class="bi bi-telephone-fill text-primary"></i>
                     <a href="tel:+541140748247" class="text-decoration-none text-dark fs-5">
                       (+54 11) 40748247
                     </a>
                   </div>

                   <div class="d-flex align-items-center gap-2">
                     <i class="bi bi-globe text-primary"></i>
                     <a href="https://www.hogarmarialuisa.org" target="_blank" rel="noopener noreferrer" class="text-decoration-none fw-medium">
                       www.hogarmarialuisa.org
                     </a>
                   </div>
                 </div>
               </div>

             </div>
           </div>
         </div>
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
app.component('GrillaClientes', GrillaClientes);

app.mount('#app');