import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { urlForImage } from '@/sanity/lib/utils'

interface HeroProps {
  data?: {
    heroSubtitle?: string
    heroTitle?: string
    heroDescription?: string
    heroImage?: any
    heroPrimaryButtonText?: string
    heroSecondaryButtonText?: string
  } | null
  settings?: {
    bookingUrlFreeConsult?: string
  } | null
}

export function Hero({ data, settings }: HeroProps) {
  const heroImageUrl = data?.heroImage 
    ? urlForImage(data.heroImage)?.width(1920).height(1080).url() ?? '/misty-forest-with-tall-trees-and-soft-morning-ligh.jpg'
    : '/misty-forest-with-tall-trees-and-soft-morning-ligh.jpg'
  
  const bookingUrl = settings?.bookingUrlFreeConsult || siteConfig.bookingUrls.freeConsult

  return (
    <section
      id="main-content"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImageUrl}
          alt="Misty forest with tall trees and soft morning light"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm mb-4">
            {data?.heroSubtitle || 'Forest & Flow Counselling'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 text-balance">
            {data?.heroTitle || 'Grounded like a tree, responsive like water.'}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            {data?.heroDescription || 'Your path to calm, clarity and confidence begins here.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base group">
              <Link href={bookingUrl}>
                {data?.heroPrimaryButtonText || 'Book Free Consult'}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground transition-all"
            >
              <Link href="#about">{data?.heroSecondaryButtonText || 'Learn More'}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
