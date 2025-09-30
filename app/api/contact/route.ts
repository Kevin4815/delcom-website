// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template'; // <- depuis app/api/contact

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      projectType?: string;
      message?: string;
      budget?: string;
    };

    // Validation minimale
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { error: 'name, email et message sont obligatoires.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY manquante à l’exécution');
      return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    // ⚠️ Instanciation dans le handler (évite le crash au build)
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Formulaire Del'com <onboarding@resend.dev>",
      to: ['kevin.robin@n2aexpertises.fr'],
      subject: `Prise de contact – ${body.name}${body.projectType ? ' • ' + body.projectType : ''}`,
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        phone: body.phone ?? '',
        projectType: body.projectType ?? '',
        message: body.message,
        budget: body.budget ?? '',
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (e: any) {
    console.error('POST /api/contact failed:', e);
    return NextResponse.json({ error: e?.message ?? 'Internal Server Error' }, { status: 500 });
  }
}