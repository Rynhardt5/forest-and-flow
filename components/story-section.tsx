import { TreePine, Droplets, Quote, type LucideIcon } from "lucide-react"
import { PortableText } from 'next-sanity'
import { portableTextComponents } from '@/components/portable-text-components'

const iconMap: Record<string, LucideIcon> = {
  TreePine,
  Droplets,
}

interface StorySectionProps {
  data?: {
    storyLabel?: string
    storyTitle?: string
    storyContent?: any[]
    storyQuote?: string
    storyQuoteAttribution?: string
    storyClosing?: string
    storyCards?: Array<{
      _key: string
      icon?: string
      title?: string
      content?: any[]
    }>
  } | null
}

export function StorySection({ data }: StorySectionProps) {
  return (
    <section id="story" className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              {data?.storyLabel || 'About the Name'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
              {data?.storyTitle || 'Why "Forest & Flow"?'}
            </h2>

            <div className="space-y-4">
              {data?.storyContent ? (
                <PortableText value={data.storyContent} components={portableTextComponents} />
              ) : (
                <>
                  <p>
                    For a long time, I&apos;ve felt an affinity with the Buddhist story behind the phrase &quot;Chop Wood,
                    Carry Water&quot;. In fact, I have it tattooed on my forearms! Its message is to value the simple tasks,
                    though they are often boring, as these are the foundations of a meaningful life.
                  </p>
                  <p>
                    It reminds us to find fulfilment in the daily journey rather than just the end goal. For me, the story
                    is a reminder to accept things as they are, to find peace, and to do what I need to do to achieve my
                    goals.
                  </p>
                </>
              )}
            </div>

            <div className="my-8 p-6 bg-card rounded-lg border border-border">
              <Quote className="h-6 w-6 text-primary mb-3" />
              <p className="font-serif text-lg text-foreground italic">
                {data?.storyQuote || '"Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water."'}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {data?.storyQuoteAttribution || '— Zen Kōan'}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {data?.storyClosing || "The other reason for the name is the simple, healing powers of nature. Walking in a forest and swimming in a body of water are some of the best things we can do for our minds, bodies, and souls. I recommend getting into nature at least once a week."}
            </p>
          </div>

          {/* Meaning Cards from Sanity */}
          {data?.storyCards && data.storyCards.length > 0 ? (
            <div className="space-y-6">
              {data.storyCards.map((card) => {
                const IconComponent = iconMap[card.icon || 'TreePine'] || TreePine
                return (
                  <div key={card._key} className="bg-card p-8 rounded-lg border border-border">
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-serif text-xl text-foreground mb-3">{card.title}</h3>
                    {card.content && (
                      <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                        <PortableText value={card.content} components={portableTextComponents} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg border border-border">
                <TreePine className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-3">Forest</h3>
                <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Forests are made of trees, which form the basis of many ecosystems. They give us wood for us to build
                    our houses and fires for warmth.
                  </p>
                  <p>
                    In forests, trees live not alone but in an ecosystem that is integrated and supportive of each
                    other—just like our complex human societies. It speaks to the recognition of ourselves as part of
                    something bigger than us.
                  </p>
                  <p>
                    Forests—especially Old Growth and Rainforests—feel timeless. They have taken millions of years to
                    become what we see today. So it is with humans and our societies. We are part of a very long story,
                    and that is worth remembering.
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <Droplets className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-3">Flow</h3>
                <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>Flow, as in the flow of water—adaptable, necessary for life, and very powerful.</p>
                  <p>
                    It also refers to the state of flow—the mental state of being completely absorbed in an activity,
                    bringing a feeling of energised focus, full involvement, and enjoyment. This is known as a peak state,
                    commonly felt by artists and professional athletes.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
