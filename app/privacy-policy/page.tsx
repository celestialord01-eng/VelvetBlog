import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | VelvetNest",
  description: "Learn how VelvetNest collects, uses, and protects your personal information.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Last updated: May 1, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
              <p>
                Welcome to VelvetNest. Your privacy is important to us. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our 
                website velvetnest.com, including any other media form, media channel, mobile website, 
                or mobile application related or connected thereto.
              </p>

              <h2>Information We Collect</h2>
              
              <h3>Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Subscribe to our newsletter</li>
                <li>Fill out a contact form</li>
                <li>Leave comments on blog posts</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>
                This information may include your name, email address, and any other information 
                you choose to provide.
              </p>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about 
                your device, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent on those pages</li>
                <li>Time and date of your visit</li>
              </ul>

              <h2>Use of Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website 
                and store certain information. Cookies are files with a small amount of data that 
                may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie 
                is being sent. However, if you do not accept cookies, you may not be able to use 
                some portions of our website.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Send you newsletters and marketing communications (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and content</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>

              <h2>Third-Party Services</h2>
              
              <h3>Analytics</h3>
              <p>
                We use analytics services such as Google Analytics to help us understand how 
                visitors use our website. These services may collect information about your 
                online activities over time and across different websites.
              </p>

              <h3>Advertising and Affiliate Links</h3>
              <p>
                VelvetNest participates in affiliate marketing programs, including the Amazon 
                Services LLC Associates Program. When you click on affiliate links on our site 
                and make a purchase, we may earn a commission at no additional cost to you.
              </p>
              <p>
                These affiliate partners may use cookies to track referrals. For more information, 
                please see our{" "}
                <Link href="/affiliate-disclosure" className="text-accent hover:underline">
                  Affiliate Disclosure
                </Link>
                .
              </p>

              <h3>Email Marketing</h3>
              <p>
                If you subscribe to our newsletter, your email address will be stored with our 
                email service provider. You can unsubscribe at any time by clicking the unsubscribe 
                link at the bottom of any email.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information. However, please note that no method of transmission over 
                the Internet or electronic storage is 100% secure.
              </p>

              <h2>Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul>
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:privacy@velvetnest.com">privacy@velvetnest.com</a>.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If you believe we have 
                collected information from a child under 13, please contact us immediately.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the 
                &quot;Last updated&quot; date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>
                  By email:{" "}
                  <a href="mailto:privacy@velvetnest.com">privacy@velvetnest.com</a>
                </li>
                <li>
                  By visiting our{" "}
                  <Link href="/contact">Contact Page</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
