import { Elysia } from 'elysia';
import { pathToFileURL } from 'url';

export const app = new Elysia()
  .get('/', () => ({ message: 'Hello World' }));

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  app.listen(3000);
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
}
