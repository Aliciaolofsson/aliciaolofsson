// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: any) {
//   const body = req;
//   const { email, message, subject } = body;
//   try {
//     const data = await resend.emails.send({
//       from: 'Alicia <hello@aliciaolofsson.com>',
//       to: ['alicia-olofsson@hotmail.com', 'hello@konte.se'],
//       subject: 'New message from aliciaolofsson.com',
//       react: EmailTemplate({
//         subject: subject,
//         message: message,
//       }) as ReactElement,
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

import { ReactElement } from 'react';
import { EmailTemplate } from '@/app/components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, title, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Alicia Olofsson <hello@aliciaolofsson.com>',
      to: ['alicia-olofsson@hotmail.com'],
      subject: 'New message from aliciaolofsson.com',
      react: EmailTemplate({
        sender: email,
        title: title,
        message: message,
      }) as ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
