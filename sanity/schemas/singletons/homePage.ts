import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'about', title: 'About Section'},
    {name: 'pillars', title: 'Pillars Section'},
    {name: 'howCanIHelp', title: 'How I Can Help'},
    {name: 'approach', title: 'Approach Section'},
    {name: 'story', title: 'Story Section'},
    {name: 'cta', title: 'CTA Section'},
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      group: 'hero',
      description: 'Small text above the main headline (e.g., "Forest & Flow Counselling")',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      description: 'Main headline (e.g., "Grounded like a tree, responsive like water.")',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 2,
      group: 'hero',
      description: 'Supporting text below the headline',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      group: 'hero',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroPrimaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSecondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      group: 'hero',
    }),

    // About Section
    defineField({
      name: 'aboutLabel',
      title: 'About Section Label',
      type: 'string',
      group: 'about',
      description: 'Small label above the title (e.g., "About Me")',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutContent',
      title: 'About Content',
      type: 'array',
      group: 'about',
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
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {name: 'href', type: 'url', title: 'URL'},
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),
    defineField({
      name: 'aboutImageCaption',
      title: 'About Image Caption',
      type: 'string',
      group: 'about',
      description: 'Caption below the image (e.g., about the cat)',
    }),

    // Pillars Section
    defineField({
      name: 'pillarsLabel',
      title: 'Pillars Section Label',
      type: 'string',
      group: 'pillars',
    }),
    defineField({
      name: 'pillarsTitle',
      title: 'Pillars Title',
      type: 'string',
      group: 'pillars',
    }),
    defineField({
      name: 'pillarsDescription',
      title: 'Pillars Description',
      type: 'text',
      rows: 2,
      group: 'pillars',
    }),
    defineField({
      name: 'pillars',
      title: 'Pillars',
      type: 'array',
      group: 'pillars',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name (e.g., Users, Eye, Brain, Compass, Layers)'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        }),
      ],
    }),

    // How Can I Help Section
    defineField({
      name: 'servicesLabel',
      title: 'How Can I Help Section Label',
      type: 'string',
      group: 'howCanIHelp',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'How Can I Help Title',
      type: 'string',
      group: 'howCanIHelp',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'How Can I Help Description',
      type: 'text',
      rows: 2,
      group: 'howCanIHelp',
    }),
    defineField({
      name: 'services',
      title: 'How Can I Help Items',
      type: 'array',
      group: 'howCanIHelp',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name (e.g., TreePine, Heart, Target, Waves)'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        }),
      ],
    }),
    defineField({
      name: 'servicesClosing',
      title: 'Services Closing Text',
      type: 'text',
      rows: 3,
      group: 'howCanIHelp',
    }),

    // Approach Section
    defineField({
      name: 'approachLabel',
      title: 'Approach Section Label',
      type: 'string',
      group: 'approach',
    }),
    defineField({
      name: 'approachTitle',
      title: 'Approach Title',
      type: 'string',
      group: 'approach',
    }),
    defineField({
      name: 'approachDescription',
      title: 'Approach Description',
      type: 'text',
      rows: 3,
      group: 'approach',
    }),
    defineField({
      name: 'approachImage',
      title: 'Approach Image',
      type: 'image',
      group: 'approach',
      options: {hotspot: true},
    }),
    defineField({
      name: 'approaches',
      title: 'Therapy Approaches',
      type: 'array',
      group: 'approach',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        }),
      ],
    }),

    // Story Section
    defineField({
      name: 'storyLabel',
      title: 'Story Section Label',
      type: 'string',
      group: 'story',
    }),
    defineField({
      name: 'storyTitle',
      title: 'Story Title',
      type: 'string',
      group: 'story',
    }),
    defineField({
      name: 'storyContent',
      title: 'Story Content',
      type: 'array',
      group: 'story',
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
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {name: 'href', type: 'url', title: 'URL'},
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'storyQuote',
      title: 'Story Quote',
      type: 'string',
      group: 'story',
    }),
    defineField({
      name: 'storyQuoteAttribution',
      title: 'Quote Attribution',
      type: 'string',
      group: 'story',
    }),
    defineField({
      name: 'storyClosing',
      title: 'Story Closing Paragraph',
      type: 'text',
      rows: 3,
      group: 'story',
    }),
    defineField({
      name: 'storyCards',
      title: 'Story Meaning Cards',
      type: 'array',
      group: 'story',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name (e.g., TreePine, Droplets)'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
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

    // CTA Section
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      rows: 3,
      group: 'cta',
    }),
    defineField({
      name: 'ctaFeatures',
      title: 'CTA Features',
      type: 'array',
      group: 'cta',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon Name', type: 'string'}),
            defineField({name: 'text', title: 'Text', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaPrimaryTitle',
      title: 'Primary CTA Card Title',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaPrimaryDescription',
      title: 'Primary CTA Card Description',
      type: 'text',
      rows: 2,
      group: 'cta',
    }),
    defineField({
      name: 'ctaPrimaryButtonText',
      title: 'Primary CTA Button Text',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaSecondaryTitle',
      title: 'Secondary CTA Card Title',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaSecondaryDescription',
      title: 'Secondary CTA Card Description',
      type: 'text',
      rows: 2,
      group: 'cta',
    }),
    defineField({
      name: 'ctaSecondaryButtonText',
      title: 'Secondary CTA Button Text',
      type: 'string',
      group: 'cta',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
        subtitle: 'Edit all homepage sections',
      }
    },
  },
})
