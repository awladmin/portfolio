import type { InferType } from 'yup';
import { contactFormSchema } from './schema';

export type ContactFormValues = InferType<typeof contactFormSchema>;
