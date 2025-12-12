'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, TreePine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config'
import { cn } from '@/lib/utils'

const defaultNavLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Story', href: '/#story' },
  { label: 'Services', href: '/services' },
]

interface SiteHeaderProps {
  settings?: {
    siteName?: string
    navLinks?: Array<{
      _key: string
      label?: string
      href?: string
    }>
    navButtonText?: string
    navButtonUrl?: string
    bookingUrlFreeConsult?: string
  } | null
}

export function SiteHeader({ settings }: SiteHeaderProps) {
  const navLinks = settings?.navLinks?.length ? settings.navLinks : defaultNavLinks
  const defaultBookingUrl = settings?.bookingUrlFreeConsult || siteConfig.bookingUrls.freeConsult
  const siteName = settings?.siteName || 'Forest & Flow'
  const buttonText = settings?.navButtonText || 'Book a Consult'
  const buttonUrl = settings?.navButtonUrl || defaultBookingUrl
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/98 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-background/80 backdrop-blur-sm border-b border-border'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4" ref={menuRef}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
        >
          Skip to main content
        </a>
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center gap-2">
            <TreePine className="h-8 w-8 text-primary" />
            <span className="font-serif text-xl font-semibold text-foreground">
              {siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={'_key' in link ? link._key : index}
                href={link.href || '#'}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href={buttonUrl}>
                {buttonText}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-4 px-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={'_key' in link ? link._key : `mobile-${index}`}
                  href={link.href || '#'}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link
                  href={buttonUrl}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {buttonText}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
