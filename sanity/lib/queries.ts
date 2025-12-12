import {defineQuery} from 'next-sanity'

export const homePageQuery = defineQuery(`
  *[_type == "home"][0]{
    _id,
    _type,
    overview,
    showcaseProjects[]{
      _key,
      ...@->{
        _id,
        _type,
        coverImage,
        overview,
        "slug": slug.current,
        tags,
        title,
      }
    },
    title,
  }
`)

// Forest & Flow Home Page Query
export const forestFlowHomeQuery = defineQuery(`
  *[_type == "homePage"][0]{
    _id,
    _type,
    // Hero
    heroSubtitle,
    heroTitle,
    heroDescription,
    heroImage,
    heroPrimaryButtonText,
    heroSecondaryButtonText,
    // About
    aboutLabel,
    aboutTitle,
    aboutContent,
    aboutImage,
    aboutImageCaption,
    // Pillars
    pillarsLabel,
    pillarsTitle,
    pillarsDescription,
    pillars[]{
      _key,
      icon,
      title,
      description
    },
    // Services
    servicesLabel,
    servicesTitle,
    servicesDescription,
    services[]{
      _key,
      icon,
      title,
      description
    },
    servicesClosing,
    // Approach
    approachLabel,
    approachTitle,
    approachDescription,
    approachImage,
    approaches[]{
      _key,
      title,
      description
    },
    // Story
    storyLabel,
    storyTitle,
    storyContent,
    storyQuote,
    storyQuoteAttribution,
    storyClosing,
    storyCards[]{
      _key,
      icon,
      title,
      content
    },
    // CTA
    ctaTitle,
    ctaDescription,
    ctaFeatures[]{
      _key,
      icon,
      text
    },
    ctaPrimaryTitle,
    ctaPrimaryDescription,
    ctaPrimaryButtonText,
    ctaSecondaryTitle,
    ctaSecondaryDescription,
    ctaSecondaryButtonText,
  }
`)

// Forest & Flow Services Page Query
export const servicesPageQuery = defineQuery(`
  *[_type == "servicesPage"][0]{
    _id,
    _type,
    // Hero
    heroTitle,
    heroDescription,
    // Counselling Types
    counsellingTypes[]{
      _key,
      icon,
      title,
      description,
      extended,
      highlight,
      content
    },
    // Areas of Support
    areasOfSupportTitle,
    supportCategories[]{
      _key,
      title,
      items
    },
    // Pricing
    pricingTitle,
    pricingDescription,
    consultTitle,
    consultDescription,
    consultButtonText,
    consultButtonUrl,
    sessionTitle,
    sessionPrice,
    sessionDescription,
    sessionButtonText,
    sessionButtonUrl,
    // SEO
    seoTitle,
    seoDescription
  }
`)

// Shared CTA Section Query
export const ctaSectionQuery = defineQuery(`
  *[_type == "ctaSection"][0]{
    _id,
    _type,
    title,
    description,
    features,
    primaryTitle,
    primaryDescription,
    primaryButtonText,
    secondaryTitle,
    secondaryDescription,
    secondaryButtonText
  }
`)

// Forest & Flow Site Settings Query
export const forestFlowSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    _id,
    _type,
    // General
    siteName,
    siteTagline,
    logo,
    // SEO
    seoTitle,
    seoDescription,
    ogImage,
    // Navigation
    navLinks[]{
      _key,
      label,
      href
    },
    navButtonText,
    navButtonUrl,
    footerDescription,
    footerLinks[]{
      _key,
      label,
      href
    },
    footerContactTitle,
    footerContactText,
    copyrightText,
    bookingUrlFreeConsult,
    bookingUrlFullSession,
    email,
    phone,
    address,
    socialLinks[]{
      _key,
      platform,
      url
    }
  }
`)

export const pagesBySlugQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`)

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _type,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`)

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    footer,
    menuItems[]{
      _key,
      ...@->{
        _type,
        "slug": slug.current,
        title
      }
    },
    ogImage,
  }
`)

export const slugsByTypeQuery = defineQuery(`
  *[_type == $type && defined(slug.current)]{"slug": slug.current}
`)
