"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("velvetnest-popup-seen")
    
    if (!hasSeenPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("velvetnest-popup-seen", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your email service
    setIsSubmitted(true)
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm">
      <div className="animate-fade-up relative w-full max-w-md rounded-2xl bg-card p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Content */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                Join the VelvetNest Community
              </h2>
              <p className="mt-2 text-muted-foreground">
                Get exclusive styling tips, early access to new content, and curated finds 
                delivered to your inbox weekly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button type="submit" className="w-full" size="lg">
                Subscribe Now
              </Button>
            </form>

            {/* Privacy note */}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              No spam, ever. Unsubscribe anytime.{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
            </p>

            {/* Skip option */}
            <button
              onClick={handleClose}
              className="mt-4 block w-full text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              No thanks, maybe later
            </button>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Welcome to VelvetNest!
            </h2>
            <p className="mt-2 text-muted-foreground">
              Check your inbox for a special welcome message.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
