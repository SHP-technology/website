import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, subject, html, text, from_email, reply_to } = body;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'RESEND_API_KEY is not configured in environment variables.' },
        { status: 500 }
      );
    }

    if (!to || !subject) {
      return NextResponse.json(
        { success: false, error: "Fields 'to' and 'subject' are required." },
        { status: 400 }
      );
    }

    const sender = from_email || process.env.RESEND_FROM_EMAIL || 'SHP Technology <onboarding@resend.dev>';
    const recipients = Array.isArray(to) ? to : [to];

    const payload: Record<string, any> = {
      from: sender,
      to: recipients,
      subject,
    };

    if (html) payload.html = html;
    if (text) payload.text = text;
    if (!html && !text) payload.text = '(Empty message body)';
    if (reply_to) payload.reply_to = Array.isArray(reply_to) ? reply_to : [reply_to];

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      return NextResponse.json(
        { success: false, error: resendData.message || 'Failed to send email via Resend.' },
        { status: resendRes.status }
      );
    }

    return NextResponse.json({
      success: true,
      id: resendData.id,
      data: resendData,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Internal server error while sending email.' },
      { status: 500 }
    );
  }
}
