import { POST } from '@/app/api/revalidate/route';
import { NextRequest } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

vi.mock('next/cache', () => ({
  revalidatePath: vi.fn(),
  revalidateTag: vi.fn(),
}));

const API_KEY = 'test-secret-key';

beforeAll(() => {
  process.env.REVALIDATE_API_KEY = API_KEY;
});

function createRequest(
  body: Record<string, unknown>,
  headers: Record<string, string> = {},
): NextRequest {
  return new NextRequest('http://localhost:3000/api/revalidate', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

describe('POST /api/revalidate', () => {
  it('returns 401 when API key is missing', async () => {
    const request = createRequest({ path: '/' });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.success).toBe(false);
  });

  it('returns 401 when API key is invalid', async () => {
    const request = createRequest({ path: '/' }, { 'x-api-key': 'wrong-key' });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.success).toBe(false);
  });

  it('returns 400 when neither path nor tag is provided', async () => {
    const request = createRequest({}, { 'x-api-key': API_KEY });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
  });

  it('revalidates path only', async () => {
    const request = createRequest({ path: '/' }, { 'x-api-key': API_KEY });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.revalidated.path).toBe('/');
    expect(data.revalidated.tag).toBeUndefined();
    expect(revalidatePath).toHaveBeenCalledWith('/');
  });

  it('revalidates tag only', async () => {
    const request = createRequest(
      { tag: 'posts' },
      { 'x-api-key': API_KEY },
    );

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.revalidated.tag).toBe('posts');
    expect(data.revalidated.path).toBeUndefined();
    expect(revalidateTag).toHaveBeenCalledWith('posts');
  });

  it('revalidates both path and tag', async () => {
    const request = createRequest(
      { path: '/blog', tag: 'posts' },
      { 'x-api-key': API_KEY },
    );

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.revalidated.path).toBe('/blog');
    expect(data.revalidated.tag).toBe('posts');
    expect(revalidatePath).toHaveBeenCalledWith('/blog');
    expect(revalidateTag).toHaveBeenCalledWith('posts');
  });
});
