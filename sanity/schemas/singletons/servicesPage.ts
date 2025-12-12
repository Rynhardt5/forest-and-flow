import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'counsellingTypes', title: 'Counselling Types'},
    {name: 'areasOfSupport', title: 'Areas of Support'},
    {name: 'pricing', title: 'Pricing'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      description: 'e.g., "Counselling That Meets You Where You Are"',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),

    // Counselling Types (Individual, Men's, Couples)
    defineField({
      name: 'counsellingTypes',
      title: 'Counselling Types',
      type: 'array',
      group: 'counsellingTypes',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name (e.g., User, Users, Heart)'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Main Description', type: 'text', rows: 4}),
            defineField({name: 'extended', title: 'Extended Description', type: 'text', rows: 4}),
            defineField({name: 'highlight', title: 'Highlight Quote', type: 'text', rows: 2, description: 'Italicized highlight text with border'}),
            defineField({
              name: 'content',
              title: 'Rich Content (Alternative)',
              type: 'array',
              description: 'Use this OR the text fields above, not both',
              of: [
                defineArrayMember({
                  type: 'block',
                  styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'Quote', value: 'blockquote'},
                  ],
                  marks: {
                    decorators: [
                      {title: 'Strong', value: 'strong'},
                      {title: 'Emphasis', value: 'em'},
                    ],
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {title: 'title'},
          },
        }),
      ],
    }),

    // Areas of Support
    defineField({
      name: 'areasOfSupportTitle',
      title: 'Areas of Support Title',
      type: 'string',
      group: 'areasOfSupport',
    }),
    defineField({
      name: 'supportCategories',
      title: 'Support Categories',
      type: 'array',
      group: 'areasOfSupport',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Category Title', type: 'string'}),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),
          ],
          preview: {
            select: {title: 'title'},
          },
        }),
      ],
    }),

    // Pricing - Simplified to two tiers
    defineField({
      name: 'pricingTitle',
      title: 'Pricing Section Title',
      type: 'string',
      group: 'pricing',
    }),
    defineField({
      name: 'pricingDescription',
      title: 'Pricing Description',
      type: 'text',
      rows: 2,
      group: 'pricing',
    }),
    // Free Consultation
    defineField({
      name: 'consultTitle',
      title: 'Free Consultation Title',
      type: 'string',
      group: 'pricing',
      description: 'e.g., "Free 15-Minute Consultation"',
    }),
    defineField({
      name: 'consultDescription',
      title: 'Free Consultation Description',
      type: 'text',
      rows: 2,
      group: 'pricing',
    }),
    defineField({
      name: 'consultButtonText',
      title: 'Free Consultation Button Text',
      type: 'string',
      group: 'pricing',
      description: 'e.g., "Book Free Consult"',
    }),
    defineField({
      name: 'consultButtonUrl',
      title: 'Free Consultation Button URL',
      type: 'url',
      group: 'pricing',
      description: 'Link to booking page for free consultation',
    }),
    // Session Rate
    defineField({
      name: 'sessionTitle',
      title: 'Session Title',
      type: 'string',
      group: 'pricing',
      description: 'e.g., "60-Minute Session"',
    }),
    defineField({
      name: 'sessionPrice',
      title: 'Session Price',
      type: 'string',
      group: 'pricing',
      description: 'e.g., "$120"',
    }),
    defineField({
      name: 'sessionDescription',
      title: 'Session Description',
      type: 'text',
      rows: 2,
      group: 'pricing',
    }),
    defineField({
      name: 'sessionButtonText',
      title: 'Session Button Text',
      type: 'string',
      group: 'pricing',
      description: 'e.g., "Book Session"',
    }),
    defineField({
      name: 'sessionButtonUrl',
      title: 'Session Button URL',
      type: 'url',
      group: 'pricing',
      description: 'Link to booking page for full session',
    }),

    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Title for search engines (defaults to page title if empty)',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Description for search engines (max 160 characters)',
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Services Page',
        subtitle: 'Edit services page content',
      }
    },
  },
})
