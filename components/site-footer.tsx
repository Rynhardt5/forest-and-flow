import Link from 'next/link'
import Image from 'next/image'
import { TreePine, Facebook, Instagram, Linkedin, Twitter, Youtube, type LucideIcon } from 'lucide-react'

const socialIconMap: Record<string, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
}

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
    logo?: {
      asset?: {
        _id: string
        url: string
      }
      alt?: string
    }
    showLogo?: boolean
    logoSize?: number
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
    socialLinks?: Array<{
      _key: string
      platform?: string
      url?: string
    }>
  } | null
}

export function SiteFooter({ settings }: SiteFooterProps) {
  const siteName = settings?.siteName || 'Forest & Flow'
  const logo = settings?.logo?.asset?.url
  const logoAlt = settings?.logo?.alt || siteName
  const showLogo = settings?.showLogo !== false
  const logoSize = settings?.logoSize || 40
  const footerDescription = settings?.footerDescription || 'Grounded like a tree, responsive like water. Compassionate counselling for those ready to find calm, clarity, and confidence.'
  const footerLinks = settings?.footerLinks?.length ? settings.footerLinks : defaultFooterLinks
  const contactTitle = settings?.footerContactTitle || 'Get in Touch'
  const contactText = settings?.footerContactText || 'Ready to start your journey? Book a free consultation or reach out with any questions.'
  const copyrightText = settings?.copyrightText || 'Forest & Flow Counselling'
  const bookingUrl = settings?.bookingUrlFreeConsult || '#book'
  const socialLinks = settings?.socialLinks || []

  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              {showLogo && logo ? (
                <Image
                  src={logo}
                  alt={logoAlt}
                  width={logoSize}
                  height={logoSize}
                  style={{ height: logoSize, width: 'auto' }}
                />
              ) : showLogo ? (
                <TreePine className="h-8 w-8 text-primary-foreground/80" />
              ) : null}
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
          
          {/* Social Media Icons */}
          {socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = socialIconMap[social.platform || ''] || Facebook
                return (
                  <a
                    key={social._key || index}
                    href={social.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
