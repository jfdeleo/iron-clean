
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import Navbar      from './navbar.js';
import ContactForm from './ContactForm.js';
import Banner from './Banner.js';
import Card from './Cards.js';
import Footer from './footer.js';
import ContactFormConTexto from './ContactFormConTexto.js';

const app = createApp({
  data() {
    return {
      logoSrc: null,
      navItems: [
        { name: 'Inicio',    link: '#' },
        { name: 'Servicios', link: 'https://www.youtube.com/' },
        { name: 'Nosotros',  link: '#nosotros' },
        { name: 'Contacto',  link: '#contacto' },
      ],
    };
  },
});

app.component('Navbar', Navbar);
app.component('ContactForm', ContactForm);
app.component('Banner', Banner);
app.component('Card', Card);
app.component('ic-footer', Footer);
app.component('ContactFormConTexto', ContactFormConTexto);


app.mount('#app');