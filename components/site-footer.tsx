import Link from 'next/link'
import { TreePine } from 'lucide-react'

const defaultFooterLinks = [
  { label: 'About James', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Story', href: '/#story' },
  { label: 'Book a Session', href: '/#book' },
]

interface SiteFooterProps {
  settings?: {
    siteName?: string
    siteTagline?: string
    footerDescription?: string
    footerLinks?: Array<{
      _key: string
      label?: string
      href?: string
    }>
    footerContactTitle?: string
    footerContactText?: string
    copyrightText?: string
    bookingUrlFreeConsult?: string
  } | null
}

export function SiteFooter({ settings }: SiteFooterProps) {
  const siteName = settings?.siteName || 'Forest & Flow'
  const footerDescription = settings?.footerDescription || 'Grounded like a tree, responsive like water. Compassionate counselling for those ready to find calm, clarity, and confidence.'
  const footerLinks = settings?.footerLinks?.length ? settings.footerLinks : defaultFooterLinks
  const contactTitle = settings?.footerContactTitle || 'Get in Touch'
  const contactText = settings?.footerContactText || 'Ready to start your journey? Book a free consultation or reach out with any questions.'
  const copyrightText = settings?.copyrightText || 'Forest & Flow Counselling'
  const bookingUrl = settings?.bookingUrlFreeConsult || '#book'

  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <TreePine className="h-8 w-8 text-primary-foreground/80" />
              <span className="font-serif text-xl font-semibold">
                {siteName}
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              {footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={'_key' in link ? link._key : index}>
                  <Link
                    href={link.href || '#'}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">{contactTitle}</h4>
            <p className="text-primary-foreground/60 text-sm mb-4">
              {contactText}
            </p>
            <Link
              href={bookingUrl}
              className="inline-block text-primary-foreground font-medium hover:underline text-sm"
            >
              Book Free Consult →
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} {copyrightText}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
