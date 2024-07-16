import merge from 'lodash.merge';

import type { MetaData } from '../types';

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
  googleSiteVerificationId?: string;
}

export interface MetaDataConfig extends Omit<MetaData, 'title'> {
  title?: {
    default: string;
    template: string;
  };
}

export interface I18NConfig {
  language: string;
  textDirection: string;
  dateFormatter?: Intl.DateTimeFormat;
}

export interface AnalyticsConfig {
  vendors: {
    googleAnalytics: {
      id?: string;
      partytown?: boolean;
    };
  };
}


const config = {
  site: {
    name: 'Global Service',
    // site: 'https://globalservice.vercel.app',
    base: '/',
    trailingSlash: false,
    googleSiteVerificationId: '',
  },
  metadata: {
    title: {
      default: 'Global Service',
      template: '%s — Global Service',
    },
    description:
      'Global Service offers professional cleaning solutions for residential and commercial spaces. Our team of experienced cleaners ensures a spotless and healthy environment, using eco-friendly products and state-of-the-art equipment. Trust us to keep your space immaculate with our reliable and customizable cleaning services.',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      site_name: 'Global Service',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 628,
        },
      ],
      type: 'website',
    },
    twitter: {
      handle: '@nameUser', //change
      site: '@nameUser',
      cardType: 'summary_large_image',
    },
  },
  i18n: {
    language: 'en-GB',
    textDirection: 'ltr',
  },
  analytics: {
    vendors: {
      googleAnalytics: {
        id: 'G-SX9L8C359Z',
      },
    },
  },
  ui: {
    theme: 'system',
  },
};
const DEFAULT_SITE_NAME = 'Website';

const getSite = () => {
  const _default = {
    name: DEFAULT_SITE_NAME,
    site: 'http://localhost:4321',
    base: '/',
    trailingSlash: false,

    googleSiteVerificationId: '',
  };

  return merge({}, _default, config?.site ?? {}) as SiteConfig;
};

const getMetadata = () => {
  const siteConfig = getSite();

  const _default = {
    title: {
      default: siteConfig?.name || DEFAULT_SITE_NAME,
      template: '%s',
    },
    description: '',
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      type: 'website',
    },
  };

  return merge({}, _default, config?.metadata ?? {}) as MetaDataConfig;
};

const getI18N = () => {
  const _default = {
    language: 'en-GB',
    textDirection: 'ltr',
  };

  const value = merge({}, _default, config?.i18n ?? {});

  return Object.assign(value, {
    dateFormatter: new Intl.DateTimeFormat(value.language, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'Europe/London',
    }),
  }) as I18NConfig;
};

const getAnalytics = () => {
  const _default = {
    vendors: {
      googleAnalytics: {
        id: undefined,
        partytown: true,
      },
    },
  };

  return merge({}, _default, config?.analytics ?? {}) as AnalyticsConfig;
};

const getUI = () => {
  const _default = {
    theme: 'system',
    classes: {},
    tokens: {},
  };

  return merge({}, _default, config?.ui ?? {});
};

export const SITE = getSite();
export const I18N = getI18N();
export const UI = getUI();
export const METADATA = getMetadata();
export const ANALYTICS = getAnalytics();
