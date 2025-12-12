import {EnvelopeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: EnvelopeIcon,
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'form', title: 'Form Settings'},
    {name: 'info', title: 'Contact Info'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      description: 'e.g., "Get in Touch"',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),

    // Form Settings
    defineField({
      name: 'formspreeId',
      title: 'Formspree Form ID',
      type: 'string',
      group: 'form',
      description: 'Your Formspree form ID (e.g., "xpznqwer"). Get this from formspree.io',
    }),
    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      group: 'form',
    }),
    defineField({
      name: 'formDescription',
      title: 'Form Description',
      type: 'text',
      rows: 2,
      group: 'form',
    }),
    defineField({
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      group: 'form',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      rows: 2,
      group: 'form',
      description: 'Message shown after successful submission',
    }),

    // Contact Info
    defineField({
      name: 'contactInfoTitle',
      title: 'Contact Info Title',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'responseTime',
      title: 'Response Time Note',
      type: 'string',
      group: 'info',
      description: 'e.g., "I typically respond within 24-48 hours"',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Box Title',
      type: 'string',
      group: 'info',
      description: 'e.g., "Prefer to book directly?"',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Box Description',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'ctaButtonUrl',
      title: 'CTA Button URL',
      type: 'url',
      group: 'info',
      validation: (rule) => rule.uri({allowRelative: true}),
    }),

    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page',
        subtitle: 'Contact form and information',
      }
    },
  },
})
