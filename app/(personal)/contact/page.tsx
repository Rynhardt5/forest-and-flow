import { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/live'
import { contactPageQuery } from '@/sanity/lib/queries'
import { ContactForm } from '@/components/contact-form'

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: contactPageQuery, stega: false })
  return {
    title: data?.seoTitle || 'Contact',
    description: data?.seoDescription || 'Get in touch with Forest & Flow Counselling. Send a message or book a free consultation.',
  }
}

export default async function ContactPage() {
  const { data } = await sanityFetch({ query: contactPageQuery })

  const heroTitle = data?.heroTitle || 'Get in Touch'
  const heroDescription = data?.heroDescription || "Have a question or ready to start your journey? I'd love to hear from you. Fill out the form below or use the contact details to reach out directly."

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            {heroTitle}
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <ContactForm
            formspreeId={data?.formspreeId}
            formTitle={data?.formTitle}
            formDescription={data?.formDescription}
            submitButtonText={data?.submitButtonText}
            successMessage={data?.successMessage}
            contactInfoTitle={data?.contactInfoTitle}
            email={data?.email}
            phone={data?.phone}
            responseTime={data?.responseTime}
            ctaTitle={data?.ctaTitle}
            ctaDescription={data?.ctaDescription}
            ctaButtonText={data?.ctaButtonText}
            ctaButtonUrl={data?.ctaButtonUrl}
          />
        </div>
      </section>
    </main>
  )
}
