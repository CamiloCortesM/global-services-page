import type { CallToAction } from './types';
import { getPermalink, getHomePermalink } from './utils/permalinks';

export interface ActionLink extends CallToAction {
  href?: string;
  target?: string;
}

interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

export interface MenuLink extends Link {
  links?: Array<MenuLink>;
}

interface HeaderData {
  links?: Array<MenuLink>;
  actions?: Array<ActionLink>;
}

export const headerData: HeaderData = {
  links: [
    {
      text: 'HOME',
      href: getHomePermalink(),
    },
    {
      text: 'ABOUT',
      href: getPermalink('/about'),
    },
    {
      text: 'SERVICES',
      links: [
        {
          text: 'GENERAL CLEANING',
          href: getPermalink('/general-cleaning'),
        },
        {
          text: 'WINDOW CLEANING',
          href: getPermalink('/window-cleaning'),
        },
        {
          text: 'CARPET CLEANING',
          href: getPermalink('/carpet-cleaning'),
        },
        {
          text: 'GARDEN MAINTENANCE',
          href: getPermalink('/garden-maintenance'),
        },
        {
          text: 'MAINTENANCE SERVICES',
          href: getPermalink('/maintenance-services'),
        },
      ],
    },
    {
      text: 'FAQS',
      href: getPermalink('/faqs'),
    },
    {
      text: 'CONTACT',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'GET QUOTE',
      href: getPermalink('/get-a-quote'),
      variant: 'primary',
    },
    { text: 'BOOK NOW!', href: getPermalink('/booking'), variant: 'secondary' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Pages',
      links: [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Services', href: '#' },
        { text: 'FAQS', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Cleaning Services',
      links: [
        { text: 'General Cleaning', href: getPermalink('/general-cleaning') },
        { text: 'Window Cleaning', href: getPermalink('/window-cleaning') },
        { text: 'Carpet Cleaning', href: getPermalink('/carpet-cleaning') },
        {
          text: 'Garden Maintenance',
          href: getPermalink('/garden-maintenance'),
        },
        {
          text: 'Maintenance Services',
          href: getPermalink('/maintenance-services'),
        },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { text: 'gsmlimitedinfo@gmail.com', href: 'mailto:gsmlimitedinfo@gmail.com' },
        { text: 'director@gsmlimited.co.uk', href: 'mailto:director@gsmlimited.co.uk' },
        { text: '020 3319 0192', href: 'tel:+44 020 3319 0192' },
        { text: '07599 065018', href: 'tel:+44 07599 065018' },
        { text: 'Monday To Friday', href: '#' },
        { text: '9AM - 5PM', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: ``,
};
