// Site configuration
export const siteConfig = {
  name: 'Forest & Flow Counselling',
  description:
    "Grounded like a tree, responsive like water. Compassionate, evidence-based counselling for men navigating life's challenges.",
  url: 'https://forestandflow.com.au', // Update with actual domain

  // Booking URLs - Update with actual Splose URLs when available
  bookingUrls: {
    freeConsult: '#', // Replace with Splose free consult booking URL
    fullSession: '#', // Replace with Splose full session booking URL
  },

  // Contact information
  contact: {
    email: 'james@forestandflow.com.au', // Update with actual email
    phone: '', // Add if applicable
  },

  // Social links (add when available)
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
  },

  // SEO metadata
  author: 'James',
  keywords: [
    'counselling',
    'therapy',
    'mens counselling',
    'anxiety',
    'life transitions',
    'holistic therapy',
    'online therapy',
    'psychotherapy',
  ],

  // Sanity CMS configuration
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
}
