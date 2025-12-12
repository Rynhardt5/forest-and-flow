import Link from 'next/link'
import { Metadata } from 'next'
import { User, Users, Heart, Check, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PortableText } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'
import { servicesPageQuery, forestFlowSettingsQuery } from '@/sanity/lib/queries'
import { portableTextComponents } from '@/components/portable-text-components'
import { siteConfig } from '@/lib/config'

const iconMap: Record<string, LucideIcon> = {
  User,
  Users,
  Heart,
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: servicesPageQuery, stega: false })
  return {
    title: data?.seoTitle || 'Services',
    description: data?.seoDescription || 'Professional counselling services including individual therapy, men\'s counselling, and couples counselling.',
  }
}

// Default content
const defaultCounsellingTypes = [
  {
    icon: 'User',
    title: 'Individual Counselling',
    description: 'Individual counselling gives you a steady, confidential space to slow down, speak openly, and make sense of what\'s happening in your life. Whether you\'re dealing with anxiety, low self-esteem, depression, life transitions, or simply feeling stuck and unsure of your next step, this is a place to explore your experience without pressure or judgment.',
    extended: 'Together, we\'ll look at the patterns beneath the surface, clarify what you want, and develop practical tools to help you move forward with confidence and calm. My approach blends evidence-based therapy with holistic wisdom, meeting you exactly where you are while supporting you to grow into where you want to be.',
    highlight: 'If you\'re ready to understand yourself more deeply and create meaningful, sustainable change, individual counselling can help you get there.',
  },
  {
    icon: 'Users',
    title: 'Men\'s Counselling',
    description: 'Society has changed dramatically over the past 80 years, and men are feeling the pressure to adapt while still staying true to themselves. Maybe your partner wants you to open up more, your relationship with your kids feels distant, or you simply need a space to talk through things with someone who understands the realities men face today.',
    extended: 'I work with men who are navigating these shifts—men who want stronger relationships, clearer direction, and a deeper connection to who they are. Together, we can bridge communication gaps, build emotional strength, and help you meet life\'s challenges without losing your sense of masculine identity or integrity.',
    highlight: 'This is a place to speak honestly, gain clarity, and develop the confidence to lead your life with purpose.',
  },
  {
    icon: 'Heart',
    title: 'Couples Counselling',
    description: 'Relationships can be one of the greatest sources of strength in our lives—and also one of the greatest sources of stress when things feel out of sync. Couples counselling offers a steady, respectful space for both partners to be heard without judgement, understand each other more deeply, and rebuild trust and connection.',
    extended: 'Whether you\'re navigating communication breakdowns, recurring conflicts, emotional distance, major life transitions, or simply wanting a stronger, healthier partnership, we\'ll work together to uncover the patterns beneath the surface and create practical ways forward.',
    highlight: 'Couples counselling isn\'t about blame—it\'s about turning toward one another with clarity, honesty, and a shared commitment to grow.',
  },
]

const defaultSupportCategories = [
  {
    title: 'General Support',
    items: [
      'Anxiety and stress',
      'Low self-esteem and self-worth',
      'Depression and low mood',
      'Life transitions and major changes',
      'Relationship concerns and communication issues',
      'Feeling stuck, overwhelmed, or directionless',
    ],
  },
  {
    title: 'Men\'s Wellbeing',
    items: [
      'Men\'s mental health',
      'Emotional resilience and regulation',
      'Identity, purpose, and confidence',
      'Fatherhood and family relationships',
      'Modern pressures on men and masculine expectations',
    ],
  },
]

// Default pricing (simplified two-tier)
const defaultPricing = {
  consultTitle: 'Free 15-Minute Consultation',
  consultDescription: 'A relaxed, no-pressure chat to see whether we\'re a good fit. Ask questions and get a feel for how I work.',
  consultButtonText: 'Book Free Consult',
  sessionTitle: '60-Minute Session',
  sessionPrice: '$120',
  sessionDescription: 'All counselling sessions—individual, men\'s, couples, or goal-focused—are conducted via secure video call.',
  sessionButtonText: 'Book Session',
}

export default async function ServicesPage() {
  const [{ data }, { data: settings }] = await Promise.all([
    sanityFetch({ query: servicesPageQuery }),
    sanityFetch({ query: forestFlowSettingsQuery }),
  ])

  const bookingUrl = settings?.bookingUrlFreeConsult || siteConfig.bookingUrls.freeConsult
  const fullSessionUrl = settings?.bookingUrlFullSession || siteConfig.bookingUrls.fullSession

  const counsellingTypes = data?.counsellingTypes?.length ? data.counsellingTypes : defaultCounsellingTypes
  const supportCategories = data?.supportCategories?.length ? data.supportCategories : defaultSupportCategories
  
  // Simplified pricing
  const pricing = {
    consultTitle: data?.consultTitle || defaultPricing.consultTitle,
    consultDescription: data?.consultDescription || defaultPricing.consultDescription,
    consultButtonText: data?.consultButtonText || defaultPricing.consultButtonText,
    consultButtonUrl: data?.consultButtonUrl || bookingUrl,
    sessionTitle: data?.sessionTitle || defaultPricing.sessionTitle,
    sessionPrice: data?.sessionPrice || defaultPricing.sessionPrice,
    sessionDescription: data?.sessionDescription || defaultPricing.sessionDescription,
    sessionButtonText: data?.sessionButtonText || defaultPricing.sessionButtonText,
    sessionButtonUrl: data?.sessionButtonUrl || fullSessionUrl,
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">My Services</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            {data?.heroTitle || 'Counselling That Meets You Where You Are'}
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {data?.heroDescription || 'All sessions are currently conducted over Zoom and run for 60 minutes. Whether you\'re navigating personal challenges, relationship concerns, or seeking greater clarity in life, I\'m here to help.'}
          </p>
        </div>
      </section>

      {/* Counselling Types (ServiceTypes) */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {counsellingTypes.map((type: any, index: number) => {
              const IconComponent = iconMap[type.icon || 'User'] || User
              return (
                <div key={type._key || index} className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10">
                  <div className="flex md:flex-col items-start gap-4">
                    <div className="p-4 rounded-lg bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{type.title}</h2>
                    {type.content ? (
                      <div className="space-y-4">
                        <PortableText value={type.content} components={portableTextComponents} />
                      </div>
                    ) : (
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        {type.description && <p>{type.description}</p>}
                        {type.extended && <p>{type.extended}</p>}
                        {type.highlight && (
                          <p className="text-foreground font-medium italic border-l-2 border-primary pl-4">
                            {type.highlight}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Areas of Support */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Areas of Support</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
              {data?.areasOfSupportTitle || 'I Offer Support With a Range of Challenges'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {supportCategories.map((category: any, index: number) => (
              <div key={category._key || index} className="bg-background p-8 rounded-lg border border-border">
                <h3 className="font-serif text-xl text-foreground mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {(category.items || []).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Simplified Two-Tier */}
      <section id="pricing" className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Pricing</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
              {data?.pricingTitle || 'Simple, Transparent Pricing'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {data?.pricingDescription || 'All sessions are conducted via secure video call and run for 60 minutes.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Consultation */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Start Here
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-2">{pricing.consultTitle}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pricing.consultDescription}</p>
              </div>
              <div className="mt-auto">
                <p className="font-serif text-3xl text-foreground mb-4">Free</p>
                <Button className="w-full" asChild>
                  <Link href={pricing.consultButtonUrl}>{pricing.consultButtonText}</Link>
                </Button>
              </div>
            </div>

            {/* Session Rate */}
            <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
                  All Sessions
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-2">{pricing.sessionTitle}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pricing.sessionDescription}</p>
              </div>
              <div className="mt-auto">
                <p className="font-serif text-3xl text-foreground mb-4">{pricing.sessionPrice}</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={pricing.sessionButtonUrl}>{pricing.sessionButtonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
