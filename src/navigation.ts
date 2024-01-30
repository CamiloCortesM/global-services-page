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
          text: 'APARTMENT CLEANING',
          href: getPermalink('/services/apartment-cleaning'),
        },
        {
          text: 'HOUSE CLEANING',
          href: getPermalink('/services/house-cleaning'),
        },
        {
          text: 'CARPET CLEANING',
          href: getPermalink('/services/carpet-cleaning'),
        },
        {
          text: 'COMMERCIAL CLEANING',
          href: getPermalink('/services/comercial-cleaning'),
        },
        {
          text: 'WINDOW CLEANING',
          href: getPermalink('/services/window-cleaning'),
        },
        {
          text: 'ALL SERVICES',
          href: getPermalink('/services'),
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
    { text: 'GET QUOTE', href: '#', target: '_blank', variant: 'primary' },
    { text: 'BOOK NOW!', href: '#', target: '_blank', variant: 'secondary' },
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
        { text: 'Apartment Cleaning', href: '#' },
        { text: 'House Cleaning', href: '#' },
        { text: 'Carpet Cleaning', href: '#' },
        { text: 'Commercial Cleaning', href: '#' },
        { text: 'Window Cleaning', href: '#' },
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
