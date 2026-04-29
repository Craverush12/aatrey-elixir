import { z } from 'zod';
import { emailSchema, requiredText } from '@/lib/api';

const optionalText = z.string().trim().optional().default('');

export const contactSchema = z.object({
  name: requiredText('Name', 2),
  email: emailSchema,
  type: optionalText,
});

export const bulkInquirySchema = z.object({
  name: requiredText('Name', 2),
  organisation: optionalText,
  email: emailSchema,
  phone: optionalText,
  useCase: optionalText,
  quantity: optionalText,
  timeline: optionalText,
  message: optionalText,
  website: optionalText,
});

export const omakaseSchema = z.object({
  name: requiredText('Name', 2),
  email: emailSchema,
  phone: optionalText,
  guestCount: optionalText,
  city: optionalText,
  dates: optionalText,
  occasion: optionalText,
  budget: optionalText,
});

export const recipeSubmissionSchema = z.object({
  name: requiredText('Name', 2),
  email: emailSchema,
  city: optionalText,
  recipeName: requiredText('Recipe name', 2),
  instagram: optionalText,
  ratio: optionalText,
  ingredients: requiredText('Ingredients', 8),
  method: requiredText('Method', 8),
  story: optionalText,
});

export const staycationInquirySchema = z.object({
  name: requiredText('Name', 2),
  email: emailSchema,
  phone: optionalText,
  dates: optionalText,
  groupSize: optionalText,
  experiences: z.array(z.string().trim()).optional().default([]),
  dietary: optionalText,
  source: optionalText,
  message: optionalText,
});

export const waitlistSchema = z.object({
  name: requiredText('Name', 2),
  email: emailSchema,
});

export const paymentVerifySchema = z.object({
  razorpay_order_id: requiredText('Razorpay order ID'),
  razorpay_payment_id: requiredText('Razorpay payment ID'),
  razorpay_signature: requiredText('Razorpay signature'),
  formData: z.object({
    name: optionalText,
    email: z.string().trim().email().optional().or(z.literal('')).default(''),
    phone: optionalText,
    address: optionalText,
    pincode: optionalText,
    quantity: z.coerce.number().int().min(1).max(24).optional().default(1),
    variant: optionalText,
    type: optionalText,
    giftMessage: optionalText,
    amount: z.coerce.number().optional(),
  }).optional().default({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    quantity: 1,
    variant: '',
    type: '',
    giftMessage: '',
  }),
});
