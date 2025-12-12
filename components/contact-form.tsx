'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Mail, Phone, Clock, CheckCircle, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  formspreeId?: string
  formTitle?: string
  formDescription?: string
  submitButtonText?: string
  successMessage?: string
  contactInfoTitle?: string
  email?: string
  phone?: string
  responseTime?: string
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonUrl?: string
}

export function ContactForm({
  formspreeId = '',
  formTitle = 'Send a Message',
  formDescription = "Share what's on your mind and I'll get back to you soon.",
  submitButtonText = 'Send Message',
  successMessage = "Thank you for reaching out! I'll respond within 24-48 hours.",
  contactInfoTitle = 'Other Ways to Reach Me',
  email = '',
  phone = '',
  responseTime = 'I typically respond within 24-48 hours',
  ctaTitle = 'Prefer to book directly?',
  ctaDescription = 'Skip the form and schedule a free 15-minute consultation.',
  ctaButtonText = 'Book Free Consult',
  ctaButtonUrl = '/services#pricing',
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    if (!formspreeId) {
      setSubmitError('Contact form is not configured. Please contact via email.')
      return
    }

    setSubmitError('')

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      setSubmitError('Something went wrong. Please try again or email directly.')
    }
  }

  return (
    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
      {/* Form */}
      <div className="lg:col-span-3">
        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="font-serif text-2xl text-foreground mb-2">
            {formTitle}
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            {formDescription}
          </p>

          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground mb-6">{successMessage}</p>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="What's this about?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me what's on your mind..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitError && (
                  <p className="text-destructive text-sm">{submitError}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {submitButtonText}
                    </>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="lg:col-span-2">
        <h2 className="font-serif text-2xl text-foreground mb-6">
          {contactInfoTitle}
        </h2>

        <div className="space-y-6">
          {email && (
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-0.5">
                <span className="font-medium text-foreground block">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          )}

          {phone && (
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-0.5">
                <span className="font-medium text-foreground block">Phone</span>
                <a
                  href={`tel:${phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>
          )}

          {responseTime && (
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-0.5">
                <span className="font-medium text-foreground block">Response Time</span>
                <p className="text-muted-foreground">{responseTime}</p>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-xl">
          <h3 className="font-serif text-lg text-foreground mb-2">
            {ctaTitle}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {ctaDescription}
          </p>
          <Button variant="outline" asChild className="w-full">
            <Link href={ctaButtonUrl || '/services#pricing'}>{ctaButtonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
