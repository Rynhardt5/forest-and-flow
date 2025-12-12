import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Video, type LucideIcon } from 'lucide-react'
import { siteConfig } from '@/lib/config'

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Clock,
  Video,
}

interface ConsultCTAProps {
  data?: {
    ctaTitle?: string
    ctaDescription?: string
    ctaFeatures?: Array<{
      _key: string
      icon?: string
      text?: string
    }>
    ctaPrimaryTitle?: string
    ctaPrimaryDescription?: string
    ctaPrimaryButtonText?: string
    ctaSecondaryTitle?: string
    ctaSecondaryDescription?: string
    ctaSecondaryButtonText?: string
  } | null
  settings?: {
    bookingUrlFreeConsult?: string
    bookingUrlFullSession?: string
  } | null
}

const defaultFeatures = [
  { icon: 'Clock', text: '15 minutes, completely free' },
  { icon: 'Video', text: 'Online video call at your convenience' },
  { icon: 'Calendar', text: 'Flexible scheduling available' },
]

export function ConsultCTA({ data, settings }: ConsultCTAProps) {
  const freeConsultUrl = settings?.bookingUrlFreeConsult || siteConfig.bookingUrls.freeConsult
  const fullSessionUrl = settings?.bookingUrlFullSession || siteConfig.bookingUrls.fullSession
  const features = data?.ctaFeatures?.length ? data.ctaFeatures : defaultFeatures

  return (
    <section
      id="book"
      className="py-24 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-balance">
              {data?.ctaTitle || 'Ready to Take the First Step?'}
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 text-lg">
              {data?.ctaDescription || "Book a free 15-minute consultation to discuss your needs and see if I'm the right therapist for you. No pressure, just a conversation."}
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon || 'Clock'] || Clock
                return (
                  <div key={'_key' in feature ? feature._key : index} className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary-foreground/70" />
                    <span className="text-primary-foreground/90">
                      {feature.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Cards */}
          <div className="space-y-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20 transition-all hover:border-primary-foreground/30 hover:shadow-lg">
              <h3 className="font-serif text-2xl mb-3">
                {data?.ctaPrimaryTitle || 'Free 15-Minute Consult'}
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                {data?.ctaPrimaryDescription || "A no-obligation chat to explore whether we're a good fit to work together."}
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all"
                asChild
              >
                <Link href={freeConsultUrl}>
                  {data?.ctaPrimaryButtonText || 'Book Free Consult'}
                </Link>
              </Button>
            </div>

            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/10 transition-all hover:border-primary-foreground/20 hover:shadow-lg">
              <h3 className="font-serif text-2xl mb-3">
                {data?.ctaSecondaryTitle || 'Book a Full Session'}
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                {data?.ctaSecondaryDescription || 'Ready to begin? Schedule your first full counselling session online.'}
              </p>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-all"
                asChild
              >
                <Link href={fullSessionUrl}>
                  {data?.ctaSecondaryButtonText || 'Book Session'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
