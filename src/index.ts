import { Elysia } from 'elysia';

export const app = new Elysia()
  .get('/', () => ({ message: 'Hello World' }));

if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(3000);
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
}
