import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes, ImageMetadata } from 'astro/types';

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string;
  robots?: MetaDataRobots;
  description?: string;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  bg?: string;
  classes?: Record<string, string>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

interface TeamMember {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<Social>;
  description?: string;
  classes?: Record<string, string>;
}

interface Social {
  icon?: string;
  href?: string;
}

export interface Stat {
  amount?: number;
  title?: string;
  icon?: string;
}

export interface Item {
  title?: string;
  description?: string;
  link?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
}

export interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export interface Input {
  type: HTMLInputTypeAttribute;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
  pattern?: string;
  title?: string;
}

export interface Textarea {
  label?: string;
  placeholder?: string;
  rows?: number;
}

export interface Disclaimer {
  label?: string;
}

// COMPONENTS
export interface CallToAction extends HTMLAttributes<a> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Form {
  inputs?: Array<Input>;
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description?: string;
  serviceOption?: ServiceOption;
  subject?: string;
}

// WIDGETS
export interface Hero extends Headline, Widget {
  content?: string;
  image?: string | unknown;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
}

export interface Team extends Headline, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Headline, Widget {
  stats?: Array<Stat>;
}

export interface Pricing extends Headline, Widget {
  prices?: Array<Price>;
}

export interface Brands extends Headline, Widget {
  icons?: Array<string>;
  images?: Array<Image>;
}

export interface Features extends Headline, Widget {
  image?: string | unknown;
  video?: Video;
  items: Array<Item>;
  columns: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}
export interface Booking extends Widget {
}

export interface ServicesOfferings extends Headline, Widget {
  image?: { src: string; alt: string };
  listItems: string[];
  titleHeading: string;
  paragraphText: string;
  strongText: string;
  paragraphList: string;
}

export interface StepForm {
  title: string;
  id: string;
  classes: string;
}

export interface Services extends Headline, Widget {
  image?: string | unknown;
  video?: Video;
  items: Array<Item>;
  columns: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface CertificationDetails extends Widget {}

export interface ServiceDetails extends Widget {
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
}

export interface Description extends Headline {
  id?: string;
  image?: string;
}

export interface ImageGallery extends Widget {
  images: [{ src: string; alt: string }];
}

export interface Faqs extends Headline, Widget {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
}

export interface Steps extends Headline, Widget {
  items: Array<{
    title: string;
    description?: string;
    icon?: string;
    classes?: Record<string, string>;
  }>;
  itemsImagesShort: Array<Image>;
  itemImageLarge: string | Image;
  image?: string | Image;
  callToAction?: string | CallToAction;
  isReversed?: boolean;
  isReversedImage?: boolean;
}

export interface Content extends Headline, Widget {
  content?: string;
  image?: string | unknown;
  items?: Array<Item>;
  columns?: number;
  isReversed?: boolean;
  isAfterContent?: boolean;
  callToAction?: CallToAction;
}

export interface Contact extends Headline, Form, Widget {
  items: Array<Item>;
  defaultIcon?: string;
  columns: number;
  subject?: string;
  button?: string;
  columnsForm?: boolean;
}


export interface Quote {
  quote?: string;
  author?: string;
  classes?: Record<string, string>;
}

export interface Opinions extends Headline, Widget {
  items?: Array<Quote>;
  columns?: number;
  classes?: Record<string, string>;
}

export interface NumberInputControl {
  text?: string;
}

export interface cloudflareResult {
  success: boolean;
  'error-codes': any[];
  challenge_ts: Date;
  hostname: string;
  action: string;
  cdata: string;
  metadata: Metadata;
}

interface Metadata {
  interactive: boolean;
}

export interface CaptchaProps {
  token: FormDataEntryValue | null;
  ip: string | null;
}

export interface FormErrors {
  name: string;
  email: string;
  message: string;
  chosenService: string;
  phone: string;
}

export interface FormInformation {
  clientEmail: string;
  clientName: string;
  message: string;
  chosenService: string;
  phoneNumber: string;
  subject: string;
}

export interface FormResult {
  errors: FormErrors;
  information: FormInformation;
}

export interface responseCaptcha {
  statusText?: string;
  status?: Number;
  json?: () => Promise<any>;
}