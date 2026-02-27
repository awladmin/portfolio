import { GET } from '@/app/api/github/repo/route';

const originalFetch = global.fetch;

afterEach(() => {
  vi.restoreAllMocks();
  global.fetch = originalFetch;
});

describe('GET /api/github/repo', () => {
  it('returns repository metrics when GitHub request succeeds', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        name: 'portfolio',
        full_name: 'awladmin/portfolio',
        description: 'Test repo',
        html_url: 'https://github.com/awladmin/portfolio',
        stargazers_count: 42,
        forks_count: 7,
        open_issues_count: 3,
        subscribers_count: 5,
        language: 'TypeScript',
        default_branch: 'main',
        updated_at: '2026-02-20T10:00:00.000Z',
        pushed_at: '2026-02-21T11:00:00.000Z',
      }),
    }) as typeof fetch;

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data.fullName).toBe('awladmin/portfolio');
    expect(data.data.stars).toBe(42);
  });

  it('returns an error when GitHub request fails', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 403,
      json: async () => ({}),
    }) as typeof fetch;

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.success).toBe(false);
  });

  it('returns 500 when fetch throws unexpectedly', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('network')) as typeof fetch;

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.success).toBe(false);
  });
});
