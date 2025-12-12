import { PortableTextComponents } from 'next-sanity'

export const portableTextComponents: PortableTextComponents = {
  block: {
    // Default paragraph
    normal: ({ children }) => (
      <p className="text-muted-foreground leading-relaxed">{children}</p>
    ),
    // Headings
    h1: ({ children }) => (
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-serif text-xl md:text-2xl text-foreground mb-2">{children}</h4>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary pl-4 italic text-foreground my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    // Bold
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    // Italic
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    // Links
    link: ({ children, value }) => {
      const href = value?.href || '#'
      const isExternal = href.startsWith('http')
      return (
        <a
          href={href}
          className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {children}
        </a>
      )
    },
  },
  list: {
    // Bullet list
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
        {children}
      </ul>
    ),
    // Numbered list
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-muted-foreground my-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
}
