import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://neondb_owner:3JYiCI7RwmVb@ep-jolly-bonus-a50hsll6.us-east-2.aws.neon.tech/neondb?sslmode=require');
const db = drizzle(sql,{schema});
