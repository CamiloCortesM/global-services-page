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
      href: getPermalink('/services'),
      links: [
        {
          text: 'GENERAL CLEANING',
          href: getPermalink('/services/general-cleaning'),
        },
        {
          text: 'WINDOW CLEANING',
          href: getPermalink('/services/window-cleaning'),
        },
        {
          text: 'CARPET CLEANING',
          href: getPermalink('/services/carpet-cleaning'),
        },
        {
          text: 'GARDEN MAINTENANCE',
          href: getPermalink('/services/garden-maintenance'),
        },
        {
          text: 'MAINTENANCE SERVICES',
          href: getPermalink('/services/maintenance-services'),
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
        { text: 'General Cleaning', href: '#' },
        { text: 'Window Cleaning', href: '#' },
        { text: 'Carpet Cleaning', href: '#' },
        { text: 'Garden Maintenance', href: '#' },
        { text: 'Maintenance Services', href: '#' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { text: 'example@gmail.com', href: '#' },
        { text: '+44 204571654', href: '#' },
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
