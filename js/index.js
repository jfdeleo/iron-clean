import { createApp }                          from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Navbar               from './navbar.js';
import ContactForm          from './ContactForm.js';
import Banner               from './bannerHome.js';
import Card                 from './cards.js';
import Footer               from './footer.js';
import ContactFormConTexto  from './ContactFormConTexto.js';
import Carrousel            from './carrousel.js';
import EventsCards          from './eventsCards.js';
import FichaContacto from './contactanos.js';
import GrillaClientes from './nuestrosClientes.js';
import EventosDestacados from './eventosDestacados.js';
import EventTypes from './tiposDeEventos.js';
import EventBanner from './banner.js';
import FormCV from './enviarCv.js';
import ServiciosGrid from './servicios.js';
import ExperienciaSeccion from './textoEventos.js'
import CtaEvento from './ContactanosEventos.js'
import TimelineHistoria from './sobreNosotros/lineaDeTiempo.js';
import AboutSection from './sobreNosotros/sobreNosotros.js';
import EstructuraOrganizacion from './sobreNosotros/estructuraOrganizacion.js';
import barraEstadisticas from './nuestroEquipo/bajoEstadisticas.js';
import nuestraGente from './nuestroEquipo/nuestraGente.js';
import especialistasGrid from './nuestroEquipo/especialistasGrid.js';
import nuestrosValores from './nuestroEquipo/nuestrosValores.js';
import testimoniosClientes from './nuestroEquipo/testimoniosClientes.js';
import certificacionesAlianzas from './nuestroEquipo/certificacionesAlianzas.js';




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
        :fotos="[
          './img/clientes/img (1).jpeg',
          './img/clientes/img (2).jpeg',
          './img/clientes/img (3).jpeg',
          './img/clientes/img (4).jpeg',
          './img/clientes/img (5).jpeg',
          './img/clientes/img (6).jpeg',
          './img/clientes/img (7).jpeg',
          './img/clientes/img (8).jpeg',
          './img/clientes/img (9).jpeg',
          './img/clientes/img (10).jpeg',
          './img/clientes/img (11).jpeg',
          './img/clientes/img (12).jpeg',
          './img/clientes/img (13).jpeg',
          './img/clientes/img (14).jpeg',
          './img/clientes/img (15).jpeg',
          './img/clientes/img (16).jpeg',
          './img/clientes/img (17).jpeg',
          './img/clientes/img (18).jpeg',
          './img/clientes/img (19).jpeg',
          './img/clientes/img (20).jpeg',
          './img/clientes/img (21).jpeg',
          './img/clientes/img (22).jpeg',
          './img/clientes/img (23).jpeg',
          './img/clientes/img (24).jpeg',
          './img/clientes/img (25).jpeg',
          './img/clientes/img (26).jpeg',
          './img/clientes/img (27).jpeg',
          './img/clientes/img (28).jpeg',
          './img/clientes/img (29).jpeg',
]"
        :visibles="6"
        :velocidad="60"
      ></carrousel>
    </div>
  `,
};

const Nosotros = {
  template: `<div class="container py-5" style="padding-top: 1% !important;padding-bottom: 0 !important;">
          <EventBanner image-src="img/imagenes-banners/banner-en-construccion.svg" 
          titulo="Comprometidos con un entorno más limpio y seguro"
          descripcion="En Iron Clean SA  trabajamos para ofrecer soluciones de limpieza industrial que aportan valor, seguridad y sostenibilidad a nuestro clientes"
          botonTexto="Conocé nuestra historia"
          titulo="Comprometidos con un entorno más limpio y seguro"
          style="border-radius: 1.2rem;" />
              <AboutSection
              image-src="img/taza.png"
              image-alt="Edificio de Iron Clean"
              subtitulo="QUIÉNES SOMOS"
              titulo="Más que limpieza, generamos confianza"
              descripcion="Somos una empresa especializada en servicios de limpieza industrial, con años de experiencia en el mercado, brindando soluciones eficientes, seguras y sostenibles para sectores como el industrial, comercial y de infraestructura"
              :caracteristicas="caracteristicas"
            />
          <TimelineHistoria
              :hitos="historia"
              titulo="Un camino de crecimiento constante"
              subtitulo="NUESTRA HISTORIA"
         />
        <cta-evento
         fondo="#142C26"
         titulo="Nuesto propósito"
         texto="Contribuir a un mundo mas limpio, seguro y saludable, a través de servicios de limpieza industrial de alta calidad, con un fuerte compromiso con el medio ambiente y las personas"
         style="border-radius: 1em;"
          :beneficios="[
            { icono: 'nest_eco_leaf',   texto: 'Cuidamos el entorno' },
            { icono: 'groups',   texto: 'Valoramos a las personas', estilo: 'outlined' },
            { icono: 'signal_cellular_alt', texto: 'Generamos un impacto positivo' , estilo: 'round' }
          ]"
         
         ></cta-evento>
                  <carrousel
            :fotos="[
              './img/clientes/img (1).jpeg',
              './img/clientes/img (2).jpeg',
              './img/clientes/img (3).jpeg',
              './img/clientes/img (4).jpeg',
              './img/clientes/img (5).jpeg',
              './img/clientes/img (6).jpeg',
              './img/clientes/img (7).jpeg',
              './img/clientes/img (8).jpeg',
              './img/clientes/img (9).jpeg',
              './img/clientes/img (10).jpeg',
              './img/clientes/img (11).jpeg',
              './img/clientes/img (12).jpeg',
              './img/clientes/img (13).jpeg',
              './img/clientes/img (14).jpeg',
              './img/clientes/img (15).jpeg',
              './img/clientes/img (16).jpeg',
              './img/clientes/img (17).jpeg',
              './img/clientes/img (18).jpeg',
              './img/clientes/img (19).jpeg',
              './img/clientes/img (20).jpeg',
              './img/clientes/img (21).jpeg',
              './img/clientes/img (22).jpeg',
              './img/clientes/img (23).jpeg',
              './img/clientes/img (24).jpeg',
              './img/clientes/img (25).jpeg',
              './img/clientes/img (26).jpeg',
              './img/clientes/img (27).jpeg',
              './img/clientes/img (28).jpeg',
              './img/clientes/img (29).jpeg',
    ]"
            :visibles="6"
            :velocidad="60"            
          ></carrousel>
        </div>
`,
};

const NuestroEquipo = {
  template: `
    <div class="container py-5"  style="padding-top: 1% !important;padding-bottom: 0 !important;">
    <div style="background: #0a2a4f;">
    <EventBanner
       titulo="Más que un equipo, una operacion coordinada"
          descripcion="Profesionales comprometidos que garantizan entornos más limpios, seguros y productivos para tu organización"
          botonTexto="Solicitar presupuesto"   
     image-src="img/imagenes-banners/banner-en-construccion.svg"/>
    <barra-estadisticas
      fondo="#01294b"
      :estadisticas="[
        {
          icono: 'groups',
          numero: '+15',
          titulo: 'Años de experiencia',
          detalle: 'Acompañando a empresas\\nde todo el país'
        },
        {
          icono: 'apartment',
          numero: '+500',
          titulo: 'Servicios mensuales',
          detalle: 'En oficinas, industrias\\ny grandes superficies'
        },
        {
          icono: 'star_border',
          numero: '98%',
          titulo: 'Satisfacción del cliente',
          detalle: 'Basada en nuestro\\ncompromiso y calidad'
        },
        {
          icono: 'schedule',
          numero: '24/7',
          titulo: 'Cobertura operativa',
          detalle: 'Siempre listos\\npara tu operación'
        }
      ]"
    ></barra-estadisticas>
    </div>
    <nuestra-gente
      imagen="img/taza.png"
      alt="Operario de Iron Clean limpiando un hall"
    ></nuestra-gente>
      <estructura-organizacion
          :pasos="[
            { imagen: './img/user.png',    titulo: 'Gerencia General',  descripcion: 'Dirección y estrategia' },
            { imagen: './img/user.png', titulo: 'Operaciones',       descripcion: 'Planificación y control' },
            { imagen: './img/user.png', titulo: 'Supervisores',     descripcion: 'Coordinación en campo' },
            { imagen: './img/user.png',    titulo: 'Equipos Técnicos',  descripcion: 'Ejecución en sitio' }
          ]"
      ></estructura-organizacion>
      <especialistas-grid
      style="padding: 1% 2em 0px 2em;"
          :items="[
            { imagen: 'img/taza.png', icono: 'hub',               texto: 'Limpieza\\nCorporativa' },
            { imagen: 'img/taza.png',  icono: 'factory',           texto: 'Limpieza\\nIndustrial' },
            { imagen: 'img/taza.png',        icono: 'engineering',       texto: 'Mantenimiento\\nIntegral' },
            { imagen: 'img/taza.png',            icono: 'groups',            texto: 'Logística\\nOperativa' },
            { imagen: 'img/taza.png',          icono: 'supervisor_account', texto: 'Supervisión\\nTécnica' },
            { imagen: 'img/taza.png',            icono: 'health_and_safety', texto: 'Seguridad\\ne Higiene' }
          ]"
      ></especialistas-grid>  
    <nuestros-valores
      imagen="img/taza.png"
      alt="Equipo de Iron Clean"
    ></nuestros-valores>
    <div class="row g-4 px-5">
      <div class="col-lg-6">
        <testimonios-clientes
            style="
                padding-top: 2%;
                padding-bottom: 2%;
            "
          :testimonios="[
            {
              imagen: 'img/taza.png',
              opinion: 'La profesionalidad del equipo de Iron Clean ha sido clave para mantener nuestras instalaciones operativas y seguras.',
              cargo: 'Gerente de Operaciones',
              empresa: 'Empresa Industrial'
            },
            {
              imagen: 'img/taza.png',
              opinion: 'Otro testimonio...',
              cargo: 'Directora de Compras',
              empresa: 'Otra Empresa'
            }
          ]"
        ></testimonios-clientes>
      </div>
      <div class="col-lg-6">
        <certificaciones-alianzas
            style="
                padding-top: 2%;
                padding-bottom: 2%;
            "
          :imagenes="[
            'img/nuestroEquipo/iso-9001.png',
            'img/nuestroEquipo/iso-14001.png',
            'img/nuestroEquipo/iso-45001.png',
            'img/nuestroEquipo/sustentabilidad.png',
            'img/nuestroEquipo/capacitacion-continua.png'
          ]"
        ></certificaciones-alianzas>
      </div>
    </div>
    
    
    <cta-evento titulo="¿Necesitas un partner estratégico para la gestion de tus instalaciones?"
     texto="Nuestro equipo está listo para acompañar el crecimiento de tu organización con soluciones a medida"
      fondo="#012849"
      :beneficios="[]"
     style="border-radius: 1em;"></cta-evento>
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
                      './img/clientes/img (1).jpeg',
                      './img/clientes/img (2).jpeg',
                      './img/clientes/img (3).jpeg',
                      './img/clientes/img (4).jpeg',
                      './img/clientes/img (5).jpeg',
                      './img/clientes/img (6).jpeg',
                      './img/clientes/img (7).jpeg',
                      './img/clientes/img (8).jpeg',
                      './img/clientes/img (9).jpeg',
                      './img/clientes/img (10).jpeg',
                      './img/clientes/img (11).jpeg',
                      './img/clientes/img (12).jpeg',
                      './img/clientes/img (13).jpeg',
                      './img/clientes/img (14).jpeg',
                      './img/clientes/img (15).jpeg',
                      './img/clientes/img (16).jpeg',
                      './img/clientes/img (17).jpeg',
                      './img/clientes/img (18).jpeg',
                      './img/clientes/img (19).jpeg',
                      './img/clientes/img (20).jpeg',
                      './img/clientes/img (21).jpeg',
                      './img/clientes/img (22).jpeg',
                      './img/clientes/img (23).jpeg',
                      './img/clientes/img (24).jpeg',
                      './img/clientes/img (25).jpeg',
                      './img/clientes/img (26).jpeg',
                      './img/clientes/img (27).jpeg',
                      './img/clientes/img (28).jpeg',
                      './img/clientes/img (29).jpeg',
            ]"
                ></grilla-clientes>
                </div>
              </div>
        </div>
        </div>`,
};

const Eventos = {
  template: `
    <div class="container py-5" style="padding-top: 1% !important;padding-bottom: 0 !important;">
    <EventBanner image-src="img/imagenes-banners/banner-eventos.svg" style="border-radius: 1.2rem;" />
       <experiencia-seccion
      etiqueta="Nuestra historia"
      titulo="Más que limpieza, | acompañamos grandes | experiencias"
      texto="Contamos con amplia experiencia en eventos culturales, corporativos, exposiciones, desfiles y producciones especiales, brindando servicios de limpieza con altos estándares de calidad y supervisión permanente.."
    ></experiencia-seccion> 
      <eventos-destacados
          style="margin-top: 2%;"
          titulo="Eventos destacados"
          :eventos="[
              {
                'imagen': 'img/imagenes-eventos/Mafalda.png',
                'imagenes': ['img/imagenes-eventos/img1.png', 'img/imagenes-eventos/img2.png'],
                'titulo': 'Mafalda Inmersiva',
                'subtitulo': 'Centro Cultural Recoleta'
              },
              {
                'imagen': 'img/imagenes-eventos/FIT.png',
                'imagenes': ['img/imagenes-eventos/img1.png', 'img/imagenes-eventos/img2.png'],
                'titulo': 'FIT América Latina',
                'subtitulo': 'La Rural'
              },
              {
                'imagen': 'img/imagenes-eventos/Mafalda.png',
                'imagenes': ['img/imagenes-eventos/img1.png', 'img/imagenes-eventos/img2.png'],
                'titulo': 'FIT América Latina',
                'subtitulo': 'La Rural'
              },
                            {
                'imagen': 'img/imagenes-eventos/FIT.png',
                'imagenes': ['img/imagenes-eventos/img1.png', 'img/imagenes-eventos/img2.png'],
                'titulo': 'FIT América Latina',
                'subtitulo': 'La Rural'
              },              {
                'imagen': 'img/imagenes-eventos/Mafalda.png',
                'imagenes': ['img/imagenes-eventos/img1.png', 'img/imagenes-eventos/img2.png'],
                'titulo': 'FIT América Latina',
                'subtitulo': 'La Rural'
              },
              {
                'imagen': 'img/imagenes-eventos/FIT.png',
                'imagenes': ['img/imagenes-eventos/img1.png', 'img/imagenes-eventos/img2.png'],
                'titulo': 'FIT América Latina',
                'subtitulo': 'La Rural'
              },
              {
                'imagen': 'img/imagenes-eventos/Mafalda.png',
                'imagenes': ['img/imagenes-eventos/img1.png', 'img/imagenes-eventos/img2.png'],
                'titulo': 'FIT América Latina',
                'subtitulo': 'La Rural'
              },
              {
                'imagen': 'img/imagenes-eventos/FIT.png',
                'imagenes': ['img/imagenes-eventos/img1.png', 'img/imagenes-eventos/img2.png'],
                'titulo': 'FIT América Latina',
                'subtitulo': 'La Rural'
              }                       
            ]"
      ></eventos-destacados>
      <EventTypes style="margin-top: 4%;"/>
       <carrousel
        :fotos="[
          './img/clientes/img (1).jpeg',
          './img/clientes/img (2).jpeg',
          './img/clientes/img (3).jpeg',
          './img/clientes/img (4).jpeg',
          './img/clientes/img (5).jpeg',
          './img/clientes/img (6).jpeg',
          './img/clientes/img (7).jpeg',
          './img/clientes/img (8).jpeg',
          './img/clientes/img (9).jpeg',
          './img/clientes/img (10).jpeg',
          './img/clientes/img (11).jpeg',
          './img/clientes/img (12).jpeg',
          './img/clientes/img (13).jpeg',
          './img/clientes/img (14).jpeg',
          './img/clientes/img (15).jpeg',
          './img/clientes/img (16).jpeg',
          './img/clientes/img (17).jpeg',
          './img/clientes/img (18).jpeg',
          './img/clientes/img (19).jpeg',
          './img/clientes/img (20).jpeg',
          './img/clientes/img (21).jpeg',
          './img/clientes/img (22).jpeg',
          './img/clientes/img (23).jpeg',
          './img/clientes/img (24).jpeg',
          './img/clientes/img (25).jpeg',
          './img/clientes/img (26).jpeg',
          './img/clientes/img (27).jpeg',
          './img/clientes/img (28).jpeg',
          './img/clientes/img (29).jpeg',
]"
        :visibles="6"
        :velocidad="60"
      ></carrousel>
      <cta-evento style="border-radius: 1em;"></cta-evento>
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
    
        <div class="col-md-6 offset-md-3">
                  <h1 style="text-align: center;">REVISAR DONDE QUEDA ESTO</h1>
                  <div style="width: 7em !important;margin-left:auto;margin-right:auto;;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>
              </div>
      <form-c-v
         style="margin-top: 2em;"
          destinatario="franc15deleo@gmail.com"
          :whatsapp="true"
          wanumero="5491160371192"
        ></form-c-v>
    </div>
  `,
};

const Covid = {
  template: `
      <div class="row" style="margin: 0;">
        <img style="padding-right: 0; width: 100%;" src="https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000503-53a9753a99/nuestROS%20CLIENTES%20%282%29.webp?ph=4304814ec2" alt="" fetchpriority="high">

        <div style="color:white;background:rgb(13,27,42);margin-bottom:1em;font-family:'Lato',sans-serif;">
          <div class="container" style="padding:2em;">
            <h1><strong style="font-size:2.5rem;font-family:'Playfair Display',serif;">Covid-19</strong></h1>
            <p style="font-size:1.4rem;">Con el sistema de desinfección de IRON CLEAN, garantizás ambientes más higiénicos y protegidos, listos para la actividad diaria.</p>
          </div>
        </div>

        <servicios-grid
          class="col-10 offset-1 g-1"
          :items="[
            { label: 'Oficinas',  img: 'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000195-2098120983/WhatsApp%20Image%202021-09-01%20at%209.15.28%20PM.webp?ph=4304814ec2',  link: '#/servicios' },
            { label: 'Camiones',  img: 'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000188-e5c57e5c59/WhatsApp%20Image%202021-09-02%20at%201.10.09%20PM-9.webp?ph=4304814ec2',  link: '#/servicios' },
            { label: 'Empresas',  img: 'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000196-acf35acf36/WhatsApp%20Image%202021-09-01%20at%209.15.28%20PM%20%281%29-8.webp?ph=4304814ec2',  link: '#/servicios' },
            { label: 'Galpones',  img: 'https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000197-e45d4e45d6/WhatsApp%20Image%202021-09-01%20at%201.36.28%20PM-4.webp?ph=4304814ec2',  link: '#/servicios' },
          ]"
        ></servicios-grid>

        <div class="col-sm-6 col-md-8 offset-sm-1 offset-md-2" style="margin-top: 2em;">
          <img
            style="width: 100%;"
            src="https://4304814ec2.clvaw-cdnwnd.com/ddd8d8f19b3b15a30ba7927fe5e1966a/200000091-334e8334ea/iron%20clean2.0.png?ph=4304814ec2"
            alt=""
            loading="lazy"
          />
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
                      <div style="width: 5em !important;margin-left:auto;margin-right:auto;;height:5px;background:linear-gradient(90deg,rgb(240,192,64),rgb(24,95,165));border-radius:2px;margin-top:1.5rem;margin-bottom:1.5rem;"></div>
                      <p class="lead"> (Pagina en construccion)⚒️</p>
                      <p class="lead"> (Nuevo banner svg?)⚒️</p>
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
                     <a href="tel:+5491160371192" class="text-decoration-none text-dark fs-5">
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

        <p class="lead"> (Pagina en construccion)⚒️</p>
        <p class="lead"> (Nuevo banner svg?)⚒️</p>
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
        { name: 'Eventos',           link: '#/eventos'   },
        { name: 'Sobre nosotros',    link: '#/sobre-nosotros'  },
        { name: 'Nuestro equipo',    link: '#/nuestro-equipo' },
        { name: 'Nuestros clientes', link: '#/nuestros-clientes'          },
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
      historia: [
            { anio: 2010, descripcion: 'Inicio de operaciones' },
            { anio: 2014, descripcion: 'Expansión de servicios' },
            { anio: 2018, descripcion: 'Nuevos mercados y alianzas' },
            { anio: 2021, descripcion: 'Certificaciones de calidad' },
            { anio: 2024, descripcion: 'Seguimos creciendo' },
      ],
        caracteristicas: [
            { titulo: 'Compromiso ambiental', icono: 'leaf' },
            { titulo: 'Equipo especializado', icono: 'team' },
            { titulo: 'Seguridad en cada proyecto', icono: 'shield' },
        ]
    };
  },
});
// TODO : historia y caracteristicas, no van seguro aca, revisar si las otras tambien se pueden sacar a otro lado
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
app.component('FormCV', FormCV);
app.component('ServiciosGrid', ServiciosGrid);
app.component('EventosDestacados', EventosDestacados);
app.component('EventTypes', EventTypes);
app.component('EventBanner', EventBanner);
app.component('experiencia-seccion', ExperienciaSeccion)
app.component('cta-evento', CtaEvento)
app.component('TimelineHistoria', TimelineHistoria)
app.component('AboutSection', AboutSection)
app.component('EstructuraOrganizacion', EstructuraOrganizacion);
app.component('barraEstadisticas', barraEstadisticas);
app.component('nuestraGente', nuestraGente);
app.component('especialistasGrid', especialistasGrid);
app.component('nuestrosValores', nuestrosValores);
app.component('testimoniosClientes', testimoniosClientes);
app.component('certificacionesAlianzas', certificacionesAlianzas);

app.mount('#app');