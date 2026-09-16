import { Elysia } from 'elysia';
import { db } from './db';
import { usersTable } from './db/schema';

const app = new Elysia()
  .get('/', () => ({ message: 'Server is running', status: 'OK' }))
  .get('/health', () => ({ status: 'healthy', timestamp: new Date() }))
  .get('/users', async () => {
    try {
      const users = await db.select().from(usersTable);
      return { success: true, data: users };
    } catch (error) {
      return { success: false, error: 'Database connection failed or table does not exist' };
    }
  })
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
