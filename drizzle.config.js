import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/Utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_3uzbVOMJ0KPE@ep-dark-king-a8anuq2m-pooler.eastus2.azure.neon.tech/top20idea?sslmode=require&channel_binding=require',
  },
});
