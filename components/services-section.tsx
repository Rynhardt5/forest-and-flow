import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {TreePine, Waves, Target, Heart, type LucideIcon} from 'lucide-react'
import {siteConfig} from '@/lib/config'

const iconMap: Record<string, LucideIcon> = {
  TreePine,
  Waves,
  Target,
  Heart,
}

const defaultServices = [
  {
    icon: 'TreePine',
    title: 'Life Transitions',
    description:
      'Navigate major changes with clarity and confidence—career shifts, relationship changes, or finding new direction.',
  },
  {
    icon: 'Heart',
    title: 'Anxiety & Stress',
    description:
      'Build practical tools to manage overwhelm, quiet the noise, and respond to life with calm and steadiness.',
  },
  {
    icon: 'Target',
    title: 'Goals & Purpose',
    description:
      'Clarify what matters most to you and create actionable steps toward the life you want to build.',
  },
  {
    icon: 'Waves',
    title: 'Self-Esteem',
    description:
      'Reconnect with your inherent worth, challenge limiting beliefs, and build genuine confidence from within.',
  },
]

interface ServicesSectionProps {
  data?: {
    servicesLabel?: string
    servicesTitle?: string
    servicesDescription?: string
    services?: Array<{
      _key: string
      icon?: string
      title?: string
      description?: string
    }>
    servicesClosing?: string
    servicesButtonText?: string
    servicesButtonUrl?: string
  } | null
  settings?: {
    bookingUrlFreeConsult?: string
  } | null
}

export function ServicesSection({data, settings}: ServicesSectionProps) {
  const services = data?.services?.length ? data.services : defaultServices
  const defaultBookingUrl = settings?.bookingUrlFreeConsult || siteConfig.bookingUrls.freeConsult
  const buttonText = data?.servicesButtonText || 'Book an Online Session'
  const buttonUrl = data?.servicesButtonUrl || defaultBookingUrl

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            {data?.servicesLabel || 'How I Can Help'}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
            {data?.servicesTitle || "Support Through Life's Challenges"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {data?.servicesDescription ||
              'Life can pull us in different directions, and sometimes we need an objective, professional sounding board to help us act with confidence.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon || 'TreePine'] || TreePine
            return (
              <div
                key={'_key' in service ? service._key : index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <IconComponent className="h-10 w-10 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {data?.servicesClosing ||
              "Together, we'll slow things down, make sense of what's happening, and build the clarity and confidence you need to take your next steps with strength and trust in yourself."}
          </p>
          <Button size="lg" asChild>
            <Link href={buttonUrl}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
