import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

function createRequest(body: Record<string, unknown>): NextRequest {
  return new NextRequest('http://localhost:3000/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('POST /api/contact', () => {
  it('returns success for valid data', async () => {
    const request = createRequest({
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'Hello from the test suite.',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it('returns 400 for invalid data', async () => {
    const request = createRequest({
      name: '',
      email: 'invalid',
      message: '',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
  });

  it('returns 400 for missing fields', async () => {
    const request = createRequest({});

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('accepts optional company field', async () => {
    const request = createRequest({
      name: 'Jane Smith',
      email: 'jane@example.com',
      company: 'Acme Inc',
      message: 'Hello from the test suite.',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });
});
