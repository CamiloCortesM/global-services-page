import type { CallToAction } from './types';
import { getTranslations } from './utils/i18n/ui';
import { getPermalink } from './utils/permalinks';

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

interface LinkFooter {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

interface LinksFooter {
  title?: string;
  links: Array<Link>;
}

export interface FooterData {
  links: Array<LinksFooter>;
  secondaryLinks: Array<LinkFooter>;
  socialLinks: Array<LinkFooter>;
  footNote?: string;
}

export const getHeaderData = (
  url: URL,
  getRelativeLocaleUrl: Function
): HeaderData => {
  const { t, lang } = getTranslations(url);
  return {
    links: [
      {
        text: t('nav.home'),
        href: getPermalink(getRelativeLocaleUrl(lang, '/')),
      },
      {
        text: t('nav.about'),
        href: getPermalink(getRelativeLocaleUrl(lang, '/about')),
      },
      {
        text: t('nav.service.title'),
        links: [
          {
            text: t('nav.service.general'),
            href: getPermalink(getRelativeLocaleUrl(lang, '/general-cleaning')),
          },
          {
            text: t('nav.service.window'),
            href: getPermalink(getRelativeLocaleUrl(lang, '/window-cleaning')),
          },
          {
            text: t('nav.service.carpet'),
            href: getPermalink(getRelativeLocaleUrl(lang, '/carpet-cleaning')),
          },
          {
            text: t('nav.service.garden'),
            href: getPermalink(
              getRelativeLocaleUrl(lang, '/garden-maintenance')
            ),
          },
          {
            text: t('nav.service.maintenance'),
            href: getPermalink(
              getRelativeLocaleUrl(lang, '/maintenance-services')
            ),
          },
        ],
      },
      {
        text: t('nav.faqs'),
        href: getPermalink(getRelativeLocaleUrl(lang, '/faqs')),
      },
      {
        text: t('nav.contact'),
        href: getPermalink(getRelativeLocaleUrl(lang, '/contact')),
      },
    ],
    actions: [
      {
        text: t('nav.actions.quote'),
        href: getPermalink(getRelativeLocaleUrl(lang, '/get-a-quote')),
        variant: 'primary',
      },
      {
        text: t('nav.actions.book'),
        href: getPermalink(getRelativeLocaleUrl(lang, '/booking')),
        variant: 'secondary',
      },
    ],
  };
};

export const getFooterData = (
  url: URL,
  getRelativeLocaleUrl: Function
): FooterData => {
  const { t, lang } = getTranslations(url);
  return {
    links: [
      {
        title: t('fot.pages'),
        links: [
          {
            text: t('fot.pages.home'),
            href: getPermalink(getRelativeLocaleUrl(lang, '/')),
          },
          {
            text: t('fot.pages.about'),
            href: getPermalink(getRelativeLocaleUrl(lang, '/about')),
          },
          { text: t('fot.pages.services'), href: '#' },
          {
            text: t('fot.pages.faqs'),
            href: getPermalink(getRelativeLocaleUrl(lang, '/faqs')),
          },
          {
            text: t('fot.pages.contact'),
            href: getPermalink(getRelativeLocaleUrl(lang, '/contact')),
          },
        ],
      },
      {
        title: t('fot.services.title'),
        links: [
          {
            text: t('fot.services.general'),
            href: getPermalink('/general-cleaning'),
          },
          {
            text: t('fot.services.window'),
            href: getPermalink('/window-cleaning'),
          },
          {
            text: t('fot.services.carpet'),
            href: getPermalink('/carpet-cleaning'),
          },
          {
            text: t('fot.services.garden'),
            href: getPermalink('/garden-maintenance'),
          },
          {
            text: t('fot.services.maintenance'),
            href: getPermalink('/maintenance-services'),
          },
        ],
      },
      {
        title: t('fot.contact'),
        links: [
          {
            text: 'gsmlimitedinfo@gmail.com',
            href: 'mailto:gsmlimitedinfo@gmail.com',
          },
          {
            text: 'director@gsmlimited.co.uk',
            href: 'mailto:director@gsmlimited.co.uk',
          },
          { text: '020 3319 0192', href: 'tel:+44 020 3319 0192' },
          { text: '07599 065018', href: 'tel:+44 07599 065018' },
          { text: t('fot.contact.days'), href: '#' },
          { text: '9AM - 5PM', href: '#' },
        ],
      },
    ],
    secondaryLinks: [
      { text: t('fot.legal.terms'), href: getPermalink('/terms') },
      { text: t('fot.legal.privacy'), href: getPermalink('/privacy') },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    ],
    footNote: ``,
  };
};
