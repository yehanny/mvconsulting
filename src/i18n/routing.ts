import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-US', 'es-ES'],
  defaultLocale: 'en-US',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en-US': '/us',
      'es-ES': '/es',
    },
  },
  pathnames: {
    '/': '/',
    '/organization': {
      'en-US': '/organization',
      'es-ES': '/organisation',
    },
  },
});
