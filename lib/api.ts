import { NextResponse } from 'next/server';
import { z } from 'zod';

export const apiSuccess = <T extends Record<string, unknown> = Record<string, never>>(
  data?: T,
  init?: ResponseInit
) => NextResponse.json({ success: true, ...(data ?? {}) }, init);

export const apiError = (error: string, status = 400) =>
  NextResponse.json({ success: false, error }, { status });

export async function parseJson<T>(
  req: Request,
  schema: z.ZodSchema<T>
): Promise<{ success: true; data: T } | { success: false; error: string }> {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.issues[0]?.message ?? 'Invalid submission',
      };
    }

    return { success: true, data: parsed.data };
  } catch {
    return { success: false, error: 'Invalid JSON body' };
  }
}

export const emailSchema = z.string().trim().email('Valid email is required');
export const requiredText = (label: string, min = 1) =>
  z.string().trim().min(min, `${label} is required`);
