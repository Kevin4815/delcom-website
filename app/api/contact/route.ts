import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY manquante');
      return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: ' Formulaire Del\'com <onboarding@resend.dev>', // Remplacer par la bonne adresse
      to: ['kevin.robin@n2aexpertises.fr'], // Remplacer par la bonne adresse
      subject: 'Prise de contact',
      react: EmailTemplate({ name: body.name , email: body.email, phone: body.phone, projectType: body.projectType, message: body.message, budget: body.budget}),
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (e: any) {
    console.error('❌ POST /api/contact failed:', e);
    return NextResponse.json({ error: e?.message ?? 'Internal Server Error' }, { status: 500 });
  }
}