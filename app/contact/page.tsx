import type { Metadata } from "next"
import Link from "next/link"
import { Instagram, Youtube, Mail, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Contact | VelvetNest - Get in Touch",
  description: "Have a question, collaboration idea, or just want to say hello? I&apos;d love to hear from you.",
  openGraph: {
    title: "Contact | VelvetNest",
    description: "Have a question, collaboration idea, or just want to say hello? I&apos;d love to hear from you.",
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@velvetnest.com",
    href: "mailto:hello@velvetnest.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, California",
    href: null,
  },
]

const faqs = [
  {
    question: "How do I shop your Amazon finds?",
    answer: "Simply click on any product on the Amazon Finds page, and you&apos;ll be redirected to the product on Amazon. As an Amazon Associate, I earn from qualifying purchases at no extra cost to you.",
  },
  {
    question: "Do you accept sponsored content?",
    answer: "I selectively partner with brands that align with VelvetNest&apos;s values and aesthetic. All sponsored content is clearly disclosed, and I only recommend products I genuinely love.",
  },
  {
    question: "Can I submit a guest post?",
    answer: "I&apos;m not currently accepting guest posts, but I appreciate your interest! Follow along on social media for any changes to this policy.",
  },
  {
    question: "How often do you post new content?",
    answer: "I aim to publish 2-3 new blog posts per week and update the Amazon Finds section weekly with fresh discoveries.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Get in Touch
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Let&apos;s Connect
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Have a question, collaboration idea, or just want to say hello? 
              I&apos;d love to hear from you. Fill out the form below or reach out directly.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Send a Message
                </h2>
                <p className="mt-2 text-muted-foreground">
                  I typically respond within 2-3 business days.
                </p>
                <form className="mt-8 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="mt-2"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="mt-2"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="collaboration">Brand Collaboration</option>
                      <option value="press">Press & Media</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Contact Info
                </h2>
                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-lg font-medium transition-colors hover:text-accent"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="text-lg font-semibold">Follow Along</h3>
                  <p className="mt-2 text-muted-foreground">
                    Connect with me on social media for daily inspiration.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <Link
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                      Pinterest
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Link>
                    <Link
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      <Youtube className="h-4 w-4" />
                      YouTube
                    </Link>
                  </div>
                </div>

                {/* Response Time */}
                <div className="mt-12 rounded-2xl border border-border bg-secondary/30 p-6">
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    I read every message personally and do my best to respond within 2-3 business days. 
                    For urgent press inquiries, please include &quot;PRESS&quot; in your subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-12 space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
