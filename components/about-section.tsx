import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PortableText } from 'next-sanity'
import { urlForImage } from '@/sanity/lib/utils'
import { portableTextComponents } from '@/components/portable-text-components'

interface AboutSectionProps {
  data?: {
    aboutLabel?: string
    aboutTitle?: string
    aboutContent?: any[]
    aboutImage?: any
    aboutImageCaption?: string
  } | null
}

export function AboutSection({ data }: AboutSectionProps) {
  const aboutImageUrl = data?.aboutImage 
    ? urlForImage(data.aboutImage)?.width(800).height(1000).url() ?? '/images/img-20251125-wa0025-202.jpeg'
    : '/images/img-20251125-wa0025-202.jpeg'

  // Default content paragraphs
  const defaultContent = [
    "Nothing brings me more joy than seeing people's faces light up with clarity and purpose as they discover more about who they are, what they want, and how to move toward it — especially when that growth strengthens their relationships and communities.",
    "My mission is to offer a safe, grounded, and supportive space where you can explore your thoughts, emotions, patterns, and possibilities.",
    "Forest & Flow Counselling provides professional, evidence-based therapy informed by holistic wisdom. 'Holistic' simply means I see you as a whole, multi-faceted human being — shaped by your past, connected to others, and capable of making the changes you desire.",
    "I bring broad life experience, deep self-awareness, and postgraduate qualifications in Education, Coaching, and Counselling. I've also raised and have strong relationships with my two boys — my greatest achievements, so far."
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-transparent relative">
              <Image
                src={aboutImageUrl}
                alt="James - Therapist at Forest & Flow Counselling"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
            {(data?.aboutImageCaption || !data) && (
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <p className="text-sm text-muted-foreground italic">
                  {data?.aboutImageCaption || "That's Jasper — he occasionally joins sessions, on his own terms."}
                </p>
              </div>
            )}
          </div>

          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              {data?.aboutLabel || 'About Me'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
              {data?.aboutTitle || "Hi, I'm James"}
            </h2>
            <div className="space-y-4">
              {data?.aboutContent ? (
                <PortableText value={data.aboutContent} components={portableTextComponents} />
              ) : (
                <>
                  {defaultContent.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                  ))}
                  <blockquote className="border-l-2 border-primary pl-4 italic text-foreground my-6">
                    However you arrive, and whatever you&apos;re carrying, you&apos;ll be met with care, respect, and a sincere commitment to you living your life on your terms.
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed">
                    At Forest &amp; Flow, my aim is simple: to help you feel more present, more connected, and more empowered. Whether you&apos;re seeking clarity, healing, or a new direction, I&apos;m here to walk alongside you as you find your way forward.
                  </p>
                </>
              )}
            </div>

            <Button asChild className="mt-8">
              <Link href="#approach">More About My Approach</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
