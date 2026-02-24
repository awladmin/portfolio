'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FORM_STATUS } from '@/lib/constants';
import type { FormStatus } from '@/lib/constants';
import type { ContactFormValues } from './types';
import { contactFormSchema } from './schema';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(FORM_STATUS.IDLE);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus(FORM_STATUS.SUBMITTING);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus(FORM_STATUS.SUCCESS);
      reset();
    } catch {
      setStatus(FORM_STATUS.ERROR);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a question or want to work together? Drop us a message."
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto flex flex-col gap-5"
        noValidate
      >
        <Input
          label="Name"
          id="name"
          placeholder="Jane Smith"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="jane@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          label="Company"
          id="company"
          placeholder="Acme Inc (optional)"
          error={errors.company?.message}
          {...register('company')}
        />
        <Textarea
          label="Message"
          id="message"
          rows={4}
          placeholder="Tell us about your project..."
          error={errors.message?.message}
          {...register('message')}
        />
        <Button type="submit" disabled={status === FORM_STATUS.SUBMITTING}>
          {status === FORM_STATUS.SUBMITTING ? 'Sending...' : 'Send Message'}
        </Button>
        {status === FORM_STATUS.SUCCESS && (
          <p className="text-green-600 dark:text-green-400 text-sm text-center" role="status">
            Message sent successfully. We will be in touch.
          </p>
        )}
        {status === FORM_STATUS.ERROR && (
          <p className="text-red-600 dark:text-red-400 text-sm text-center" role="alert">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
