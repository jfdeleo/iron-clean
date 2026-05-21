
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import Navbar      from './navbar.js';
import ContactForm from './ContactForm.js';

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

app.mount('#app');