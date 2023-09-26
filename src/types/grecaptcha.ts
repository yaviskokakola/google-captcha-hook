export type Grecaptcha = {
  grecaptcha: {
    ready(callback: () => void): void;
    execute(siteKey: string): Promise<string>;
  };
};
