'use server';
import { Resend } from 'resend';
import { z } from 'zod';

import EmailTemplate from '@/components/EmailTemplate';

const contactSchema = z.object({
  fullname: z.string().min(4, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  request: z.string().min(1, 'Request is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
  type ContactForm = z.infer<typeof contactSchema>;

export async function submitContact(formData: ContactForm) {
  try {
    // Validate the input
    const validatedFields = contactSchema.parse(formData);

    // Initialize Resend with API key from environment variable
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send the email
    await resend.emails.send({
      from: 'admin@mvconsultingusa.com',
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Form Submission from ${validatedFields.fullname}`,
      text: 'MV Consulting - Contact Us',
      react: EmailTemplate(validatedFields),
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Validation failed', errors: error.errors };
    }
    return { success: false, message: 'Failed to send email' };
  }
}
