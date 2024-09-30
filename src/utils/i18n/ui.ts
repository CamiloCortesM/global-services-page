import { getLangFromUrl, useTranslations } from './utils';

export const languages = {
  en: 'English',
  fr: 'Français',
  pt: 'Português',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    //Navbar
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.service.title': 'SERVICES',
    'nav.service.general': 'GENERAL CLEANING',
    'nav.service.window': 'WINDOW CLEANING',
    'nav.service.carpet': 'CARPET CLEANING',
    'nav.service.garden': 'GARDEN MAINTENANCE',
    'nav.service.maintenance': 'MAINTENANCE SERVICES',
    'nav.actions.book': 'BOOK NOW',
    'nav.actions.quote': 'GET A QUOTE',
    'nav.faqs': 'FAQS',
    'nav.contact': 'CONTACT',

    // Footer
    'fot.pages': 'Pages',
    'fot.pages.home': 'Home',
    'fot.pages.about': 'About',
    'fot.pages.services': 'Services',
    'fot.pages.faqs': 'FAQs',
    'fot.pages.contact': 'Contact',
    'fot.services.title': 'Cleaning Services',
    'fot.services.general': 'General Cleaning',
    'fot.services.window': 'Window Cleaning',
    'fot.services.carpet': 'Carpet Cleaning',
    'fot.services.garden': 'Garden Maintenance',
    'fot.services.maintenance': 'Maintenance Services',
    'fot.contact': 'Contact Us',
    'fot.contact.days': 'Monday To Friday',
    'fot.legal.terms': 'Terms of Service',
    'fot.legal.privacy': 'Privacy Policy',

    // Index
    'index.description': 'Cleaning Services',

    // Contact Form
    'contact.form.button': 'Contact Us',
  },

  es: {
    //Nabvar
    'nav.home': 'INICIO',
    'nav.about': 'SOBRE NOSOTROS',
    'nav.service.title': 'SERVICIOS',
    'nav.service.general': 'LIMPIEZA GENERAL',
    'nav.service.window': 'LIMPIEZA DE VENTANAS',
    'nav.service.carpet': 'LIMPIEZA DE ALFOMBRAS',
    'nav.service.garden': 'MANTENIMIENTO DE JARDÍN',
    'nav.service.maintenance': 'SERVICIOS DE MANTENIMIENTO',
    'nav.actions.book': 'RESERVAR',
    'nav.actions.quote': 'REALIZAR COTIZACIÓN',
    'nav.faqs': 'FAQS',
    'nav.contact': 'CONTACTO',

    //Footer
    'fot.pages': 'Páginas',
    'fot.pages.home': 'Inicio',
    'fot.pages.about': 'Sobre Nosotros',
    'fot.pages.services': 'Servicios',
    'fot.pages.faqs': 'FAQs',
    'fot.pages.contact': 'Contacto',
    'fot.services.title': 'Servicios de Limpieza',
    'fot.services.general': 'Limpieza General',
    'fot.services.window': 'Limpieza de Ventanas',
    'fot.services.carpet': 'Limpieza de Alfombras',
    'fot.services.garden': 'Mantenimiento de Jardín',
    'fot.services.maintenance': 'Servicios de Mantenimiento',
    'fot.contact': 'Contáctanos',
    'fot.contact.days': 'Lunes a Viernes',
    'fot.legal.terms': 'Términos del Servicio',
    'fot.legal.privacy': 'Política de Privacidad',

    // Index
    'index.description': 'Servicios de limpieza',

    // Contact Form
    'contact.form.button': 'Contáctanos',
  },

  fr: {
    'nav.about': 'À PROPOS DE NOUS',
    'nav.service.title': 'SERVICES',
    'nav.service.general': 'NETTOYAGE GÉNÉRAL',
    'nav.service.window': 'NETTOYAGE DE FENÊTRES',
    'nav.service.carpet': 'NETTOYAGE DE TAPIS',
    'nav.service.garden': 'ENTRETIEN DE JARDIN',
    'nav.service.maintenance': 'SERVICES DE MAINTENANCE',
    'nav.actions.book': 'LIVRE',
    'nav.actions.quote': 'OBTENIR UN DEVIS',
    'nav.faqs': 'FAQS',
    'nav.contact': 'CONTACT',

    //Footer
    'fot.pages': 'Pages',
    'fot.pages.home': 'Accueil',
    'fot.pages.about': 'À propos de nous',
    'fot.pages.services': 'Services',
    'fot.pages.faqs': 'FAQs',
    'fot.pages.contact': 'Contact',
    'fot.services.title': 'Services de Nettoyage',
    'fot.services.general': 'Nettoyage Général',
    'fot.services.window': 'Nettoyage de Fenêtres',
    'fot.services.carpet': 'Nettoyage de Tapis',
    'fot.services.garden': 'Entretien de Jardin',
    'fot.services.maintenance': 'Services de Maintenance',
    'fot.contact': 'Contactez-nous',
    'fot.contact.days': 'Lundi à Vendredi',
    'fot.legal.terms': 'Conditions de Service',
    'fot.legal.privacy': 'Politique de Confidentialité',

    // Index
    'index.description': 'Services de Nettoyage',

    // Contact Form
    'contact.form.button': 'Contactez-nous',
  },
  pt: {
    'nav.about': 'SOBRE NÓS',
    'nav.service.title': 'SERVIÇOS',
    'nav.service.general': 'LIMPEZA GERAL',
    'nav.service.window': 'LIMPEZA DE JANELAS',
    'nav.service.carpet': 'LIMPEZA DE TAPETES',
    'nav.service.garden': 'MANUTENÇÃO DE JARDIM',
    'nav.service.maintenance': 'SERVIÇOS DE MANUTENÇÃO',
    'nav.actions.book': 'RESERVAR',
    'nav.actions.quote': 'OBTER UM ORÇAMENTO',
    'nav.faqs': 'FAQS',
    'nav.contact': 'CONTACTO',

    //Footer
    'fot.pages': 'Páginas',
    'fot.pages.home': 'Início',
    'fot.pages.about': 'Sobre Nós',
    'fot.pages.services': 'Serviços',
    'fot.pages.faqs': 'FAQs',
    'fot.pages.contact': 'Contacto',
    'fot.services.title': 'Serviços de Limpeza',
    'fot.services.general': 'Limpeza Geral',
    'fot.services.window': 'Limpeza de Janelas',
    'fot.services.carpet': 'Limpeza de Tapetes',
    'fot.services.garden': 'Manutenção de Jardim',
    'fot.services.maintenance': 'Serviços de Manutenção',
    'fot.contact': 'Contacte-nos',
    'fot.contact.days': 'Segunda a Sexta',
    'fot.legal.terms': 'Condições de Serviço',
    'fot.legal.privacy': 'Política de Privacidade',

    // Index
    'index.description': 'Serviços de Limpeza',

    // Contact Form
    'contact.form.button': 'Contacte-nos',
  },
} as const;

export function getTranslations(url: URL) {
  const lang = getLangFromUrl(url); // Obtener el idioma desde la URL
  const t = useTranslations(lang); // Crear la función de traducción

  return { lang, t }; // Retornar el idioma y la función de traducción
}
