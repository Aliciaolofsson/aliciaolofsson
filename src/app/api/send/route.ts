import { ReactElement } from 'react';
import { EmailTemplate } from '@/app/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any, res: any) {
  const body = req;
  const { email, message, subject } = body;
  try {
    const data = await resend.emails.send({
      from: 'Alicia <alicia-olofsson@hotmail.com>',
      to: [email],
      subject: subject,
      react: EmailTemplate({ subject: subject, message: message }) as ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
