import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { contactFormSchema } from '@/features/contact-form/schema';
import type { ApiResponse } from '@/types';

export async function POST(
  request: NextRequest,
): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    await contactFormSchema.validate(body);

    return NextResponse.json({
      success: true,
      message: 'Message received. We will be in touch.',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid form data.' },
      { status: 400 },
    );
  }
}
