import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any, res: any) {
  const body = req;
  const { email, message, subject } = body;
  try {
    const data = await resend.emails.send({
      from: 'Acme <alicia-olofsson@hotmail.com>',
      to: ['alicia-olofsson@hotmail.com', email],
      subject: 'Hello world',
      react: 'hello',
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
