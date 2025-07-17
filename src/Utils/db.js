import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './Schema'
const sql = neon( 'postgresql://neondb_owner:npg_3uzbVOMJ0KPE@ep-dark-king-a8anuq2m-pooler.eastus2.azure.neon.tech/top20idea?sslmode=require&channel_binding=require');
export const db = drizzle( sql, {schema} );


