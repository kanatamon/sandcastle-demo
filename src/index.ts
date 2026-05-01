import { Elysia } from 'elysia';
import { node } from '@elysiajs/node';
import { pathToFileURL } from 'url';

export const app = new Elysia({ adapter: node() })
  .get('/', () => ({ message: 'Hello World' }));

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  app.listen(3000);
  console.log(`🦊 Elysia is running at http://localhost:3000`);
}
