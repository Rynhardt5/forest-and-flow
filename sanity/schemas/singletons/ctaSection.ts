import {RocketIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'Call to Action Section',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Ready to Take the First Step?"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Main description text below the title',
    }),
    // Feature list items
    defineField({
      name: 'features',
      title: 'Feature List',
      type: 'array',
      description: 'List of features shown with icons (e.g., "15 minutes, completely free")',
      of: [{type: 'string'}],
    }),
    // Primary CTA Card
    defineField({
      name: 'primaryTitle',
      title: 'Primary Card Title',
      type: 'string',
      description: 'e.g., "Free 15-Minute Consult"',
    }),
    defineField({
      name: 'primaryDescription',
      title: 'Primary Card Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      description: 'e.g., "Book Free Consult"',
    }),
    // Secondary CTA Card
    defineField({
      name: 'secondaryTitle',
      title: 'Secondary Card Title',
      type: 'string',
      description: 'e.g., "Book a Full Session"',
    }),
    defineField({
      name: 'secondaryDescription',
      title: 'Secondary Card Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      description: 'e.g., "Book Session"',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Call to Action Section',
        subtitle: 'Shared CTA used across pages',
      }
    },
  },
})
