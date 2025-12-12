import '@/styles/index.css'
import {SiteHeader} from '@/components/site-header'
import {SiteFooter} from '@/components/site-footer'
import IntroTemplate from '@/intro-template'
import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {forestFlowSettingsQuery} from '@/sanity/lib/queries'
import {urlForOpenGraphImage} from '@/sanity/lib/utils'
import {siteConfig} from '@/lib/config'
import type {Metadata, Viewport} from 'next'
import {VisualEditing} from 'next-sanity/visual-editing'
import {draftMode} from 'next/headers'
import {Suspense} from 'react'
import {Toaster} from 'sonner'
import {handleError} from './client-functions'
import {DraftModeToast} from './DraftModeToast'
import {SpeedInsights} from '@vercel/speed-insights/next'

export async function generateMetadata(): Promise<Metadata> {
  const {data: siteSettings} = await sanityFetch({query: forestFlowSettingsQuery, stega: false})

  const ogImage = urlForOpenGraphImage(siteSettings?.ogImage)
  const siteName = siteSettings?.siteName || siteConfig.name
  const seoTitle = siteSettings?.seoTitle || siteName
  const seoDescription = siteSettings?.seoDescription || siteConfig.description

  return {
    title: {
      template: `%s | ${siteName}`,
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#2d5a3d',
}

export default async function IndexRoute({children}: {children: React.ReactNode}) {
  const {data: siteSettings} = await sanityFetch({query: forestFlowSettingsQuery})

  return (
    <>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader settings={siteSettings} />
        <main className="flex-grow">{children}</main>
        <SiteFooter settings={siteSettings} />
        {/* <Suspense>
          <IntroTemplate />
        </Suspense> */}
      </div>
      <Toaster />
      <SanityLive onError={handleError} />
      {(await draftMode()).isEnabled && (
        <>
          <DraftModeToast />
          <VisualEditing />
        </>
      )}
      <SpeedInsights />
    </>
  )
}
