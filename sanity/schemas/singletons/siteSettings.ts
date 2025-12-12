import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'general', title: 'General'},
    {name: 'seo', title: 'SEO'},
    {name: 'navigation', title: 'Navigation'},
    {name: 'footer', title: 'Footer'},
    {name: 'booking', title: 'Booking'},
    {name: 'contact', title: 'Contact'},
    {name: 'social', title: 'Social Media'},
  ],
  fields: [
    // General
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'general',
      description: 'The name of your website (e.g., "Forest & Flow Counselling")',
    }),
    defineField({
      name: 'siteTagline',
      title: 'Site Tagline',
      type: 'string',
      group: 'general',
      description: 'A short tagline (e.g., "Grounded like a tree, responsive like water.")',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
      options: {hotspot: true},
    }),

    // SEO
    defineField({
      name: 'seoTitle',
      title: 'Default SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Default title for search engines and browser tabs',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Default SEO Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Default description for search engines (max 160 characters)',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Social Share Image',
      type: 'image',
      group: 'seo',
      description: 'Default image for social media sharing (Open Graph)',
      options: {hotspot: true},
    }),

    // Navigation
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      group: 'navigation',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string', description: 'Use # for anchor links (e.g., #about)'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        }),
      ],
    }),
    defineField({
      name: 'navButtonText',
      title: 'Navigation Button Text',
      type: 'string',
      group: 'navigation',
      description: 'Text for the CTA button in the header',
    }),
    defineField({
      name: 'navButtonUrl',
      title: 'Navigation Button URL',
      type: 'url',
      group: 'navigation',
      description: 'URL for the CTA button in the header (e.g., booking link)',
      validation: (rule) => rule.uri({allowRelative: true}),
    }),

    // Footer
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 3,
      group: 'footer',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Quick Links',
      type: 'array',
      group: 'footer',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        }),
      ],
    }),
    defineField({
      name: 'footerContactTitle',
      title: 'Footer Contact Section Title',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerContactText',
      title: 'Footer Contact Text',
      type: 'text',
      rows: 2,
      group: 'footer',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      group: 'footer',
      description: 'Text before the year (e.g., "Forest & Flow Counselling")',
    }),

    // Booking
    defineField({
      name: 'bookingUrlFreeConsult',
      title: 'Free Consultation Booking URL',
      type: 'url',
      group: 'booking',
      description: 'Link to book a free consultation (e.g., Splose URL)',
    }),
    defineField({
      name: 'bookingUrlFullSession',
      title: 'Full Session Booking URL',
      type: 'url',
      group: 'booking',
      description: 'Link to book a full session',
    }),

    // Contact
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
      group: 'contact',
    }),

    // Social Media
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'social',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Twitter/X', value: 'twitter'},
                  {title: 'YouTube', value: 'youtube'},
                ],
              },
            }),
            defineField({name: 'url', title: 'URL', type: 'url'}),
          ],
          preview: {
            select: {title: 'platform', subtitle: 'url'},
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Navigation, Footer, Contact & Booking',
      }
    },
  },
})
