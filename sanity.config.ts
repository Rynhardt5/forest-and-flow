'use client'

/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/page.tsx` route
 */
import {apiVersion, dataset, projectId, studioUrl} from '@/sanity/lib/api'
import * as resolve from '@/sanity/plugins/resolve'
import {pageStructure, singletonPlugin} from '@/sanity/plugins/settings'
import page from '@/sanity/schemas/documents/page'
import ctaSection from '@/sanity/schemas/singletons/ctaSection'
import homePage from '@/sanity/schemas/singletons/homePage'
import servicesPage from '@/sanity/schemas/singletons/servicesPage'
import siteSettings from '@/sanity/schemas/singletons/siteSettings'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Personal Website with Sanity.io'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      ctaSection,
      homePage,
      servicesPage,
      siteSettings,
      // Documents
      page,
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure([homePage, servicesPage, ctaSection, siteSettings]),
    }),
    presentationTool({
      resolve,
      previewUrl: {previewMode: {enable: '/api/draft-mode/enable'}},
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([homePage.name, servicesPage.name, ctaSection.name, siteSettings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
