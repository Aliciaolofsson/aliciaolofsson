import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <alicia-olofsson@hotmail.com>',
      to: ['alicia-olofsson@hotmail.com'],
      subject: 'Subject',
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            Thank you for contacting me!
          </p>
          <h1>New message submitted:</h1>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
