export interface SendEmailParams {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  from_email?: string;
  reply_to?: string | string[];
}

export interface SendEmailResponse {
  success: boolean;
  id?: string;
  error?: string;
  data?: any;
}

/**
 * Send transactional email via Next.js API or Django backend.
 */
export async function sendEmail(params: SendEmailParams): Promise<SendEmailResponse> {
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const data = await res.json();
    return data;
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || 'Network request failed',
    };
  }
}
