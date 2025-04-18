import type { Config } from 'drizzle-kit';

export default {
  out: './migrations',
  schema: './src/models/Schema.ts',
  // dialect: 'postgresql',
  // dbCredentials: {
  //   url: process.env.DATABASE_URL ?? '',
  // },
  verbose: true,
  strict: true,
} satisfies Config;
