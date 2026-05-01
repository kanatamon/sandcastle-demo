import { describe, expect, it } from 'vitest';
import { app } from './index';

describe('Hello World API', () => {
  it('should return "Hello World" on GET /', async () => {
    const response = await app.handle(
      new Request('http://localhost/')
    );

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toEqual({ message: 'Hello World' });
  });

  it('should return 404 for unknown routes', async () => {
    const response = await app.handle(
      new Request('http://localhost/unknown')
    );

    expect(response.status).toBe(404);
  });
});
