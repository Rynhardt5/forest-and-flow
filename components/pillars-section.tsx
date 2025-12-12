"use client"

import { useState } from "react"
import { Users, Eye, Brain, Compass, Layers, ChevronDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  Users,
  Eye,
  Brain,
  Compass,
  Layers,
}

const defaultPillars = [
  {
    icon: "Users",
    title: "Connection",
    description:
      "Real change begins with feeling genuinely seen and understood. In our work together, you'll have a steady, respectful space where you can speak freely and explore what's really going on.",
  },
  {
    icon: "Eye",
    title: "Clarity",
    description:
      "Through reflective dialogue and practical insight, we'll map out what's happening beneath the surface—your patterns, needs, and strengths—so you can make decisions with confidence.",
  },
  {
    icon: "Brain",
    title: "Emotional Regulation",
    description:
      "Together we'll explore evidence-based strategies to steady your mind and body, reduce overwhelm, and strengthen your capacity to respond rather than react.",
  },
  {
    icon: "Compass",
    title: "Self-Leadership",
    description:
      "Developing the inner strength to lead your own life with purpose. This includes cultivating healthy boundaries, aligning decisions with your values, and stepping into a more grounded, centred version of yourself.",
  },
  {
    icon: "Layers",
    title: "Integration",
    description:
      "We'll turn what you learn in session into practical steps you can use every day—helping you create meaningful, sustainable change that flows into your relationships, goals, and wellbeing.",
  },
]

interface PillarsSectionProps {
  data?: {
    pillarsLabel?: string
    pillarsTitle?: string
    pillarsDescription?: string
    pillars?: Array<{
      _key: string
      icon?: string
      title?: string
      description?: string
    }>
  } | null
}

export function PillarsSection({ data }: PillarsSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  const pillars = data?.pillars?.length ? data.pillars : defaultPillars

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-medium tracking-wide uppercase text-sm mb-4 text-muted-foreground">
            {data?.pillarsLabel || 'My Approach'}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-balance text-foreground">
            {data?.pillarsTitle || 'The Five Core Pillars'}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {data?.pillarsDescription || 'These five pillars shape every session and guide us toward meaningful, lasting change.'}
          </p>
        </div>

        {/* Accordion layout */}
        <div className="space-y-3">
          {pillars.map((pillar, index) => {
            const isOpen = openIndex === index
            const IconComponent = iconMap[pillar.icon || 'Users'] || Users
            return (
              <div
                key={('_key' in pillar ? pillar._key : index)}
                className={cn(
                  "rounded-xl border transition-all duration-300",
                  isOpen ? "border-primary/30 bg-card shadow-sm" : "border-border bg-card/50 hover:border-primary/20",
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                        isOpen ? "bg-primary/20" : "bg-primary/10",
                      )}
                    >
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground">{pillar.title}</h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-19 text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
