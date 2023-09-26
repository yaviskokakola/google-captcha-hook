import { Grecaptcha } from './grecaptcha';

export type GoogleRecaptchaType = {
  token: string;
  regenerate: () => void;
};

export type MergeWindowAndGrecaptcha = Window & typeof globalThis & Grecaptcha;
