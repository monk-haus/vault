import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, org, role, focus, inquiry } = body;

    const data = await resend.emails.send({
      from: 'VAULT INQUIRY <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'your-email@example.com',
      subject: `[Access Request] ${org} - ${focus}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #f4f1ea; color: #111;">
          <h1 style="font-family: serif; border-bottom: 1px solid #ccc; padding-bottom: 10px;">New Enterprise Inquiry</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Organization:</strong> ${org}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Focus:</strong> ${focus}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #fff; border: 1px solid #ddd;">
            <strong>Inquiry:</strong><br/>
            ${inquiry}
          </div>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}