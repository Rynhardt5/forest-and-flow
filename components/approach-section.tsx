import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { urlForImage } from '@/sanity/lib/utils'

const defaultApproaches = [
  {
    title: "Cognitive Behavioural Therapy (CBT)",
    description:
      "CBT helps identify the thoughts and beliefs that shape how you feel and act. With this, we challenge unhelpful thinking patterns and build healthier, more constructive ways of responding to life's difficulties.",
  },
  {
    title: "Rational Emotive Behaviour Therapy (REBT)",
    description:
      "REBT focuses on the core beliefs and philosophies that drive emotional reactions. It helps you understand why certain situations trigger strong feelings and teaches you how to respond with greater clarity and steadiness.",
  },
  {
    title: "Solution-Focused Therapy (SFT)",
    description:
      "A practical, strengths-based approach that helps you move toward what is working rather than staying stuck in what isn't. SFT focuses on your existing resources, past successes, and small, achievable steps that create meaningful change.",
  },
  {
    title: "Acceptance and Commitment Therapy (ACT)",
    description:
      "ACT supports psychological flexibility—helping you accept difficult thoughts and feelings, reconnect with your values, and take purposeful action even in the face of discomfort or uncertainty.",
  },
  {
    title: "Motivational Interviewing (MI)",
    description:
      "A collaborative, conversational approach that helps you work through ambivalence and commit to change. It's especially useful when you're feeling stuck, uncertain, or divided about your next steps.",
  },
  {
    title: "Mindfulness & Present-Moment Awareness",
    description:
      "Mindfulness is woven throughout my work. It's not about emptying your mind, but strengthening your ability to stay present, notice what's happening inside you, and respond with clarity rather than reactivity.",
  },
]

interface ApproachSectionProps {
  data?: {
    approachLabel?: string
    approachTitle?: string
    approachDescription?: string
    approachImage?: any
    approaches?: Array<{
      _key: string
      title?: string
      description?: string
    }>
  } | null
}

export function ApproachSection({ data }: ApproachSectionProps) {
  const approaches = data?.approaches?.length ? data.approaches : defaultApproaches
  const approachImageUrl = data?.approachImage 
    ? urlForImage(data.approachImage)?.width(800).height(500).url() ?? '/calm-flowing-stream-through-forest-rocks--water-fl.jpg'
    : '/calm-flowing-stream-through-forest-rocks--water-fl.jpg'
  return (
    <section id="approach" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              {data?.approachLabel || 'My Approach'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
              {data?.approachTitle || 'Evidence-Based Methods, Holistic Wisdom'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {data?.approachDescription || "I integrate a range of evidence-based approaches to support meaningful, sustainable change. Each modality offers something different, and they help us explore your inner world, reshape unhelpful patterns, and build practical tools for everyday life."}
            </p>
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
              <img
                src={approachImageUrl}
                alt="Flowing stream through forest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Accordion */}
          <div className="flex items-center">
            <Accordion type="single" collapsible className="w-full">
              {approaches.map((approach, index) => (
                <AccordionItem key={'_key' in approach ? approach._key : index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary text-left">
                    {approach.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
