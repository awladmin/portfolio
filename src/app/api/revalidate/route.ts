import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key');

  if (!apiKey || apiKey !== process.env.REVALIDATE_API_KEY) {
    return NextResponse.json(
      { success: false, message: 'Invalid or missing API key.' },
      { status: 401 },
    );
  }

  const body = await request.json();
  const { path, tag } = body as { path?: string; tag?: string };

  if (!path && !tag) {
    return NextResponse.json(
      { success: false, message: 'Provide at least one of "path" or "tag".' },
      { status: 400 },
    );
  }

  const revalidated: { path?: string; tag?: string } = {};

  if (path) {
    revalidatePath(path);
    revalidated.path = path;
  }

  if (tag) {
    revalidateTag(tag);
    revalidated.tag = tag;
  }

  return NextResponse.json({ success: true, revalidated });
}
