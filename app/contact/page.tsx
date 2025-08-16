import { Metadata } from "next"
import ContactForm from "../../components/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us | NuWorld Agency - AI-Driven Marketing Solutions",
  description: "Get in touch with NuWorld Agency for AI-powered organic growth solutions. Schedule your free consultation and discover how we can transform your marketing.",
  keywords: "contact NuWorld Agency, AI marketing consultation, organic growth consultation, marketing automation experts",
  openGraph: {
    title: "Contact Us | NuWorld Agency - AI-Driven Marketing Solutions",
    description: "Get in touch with NuWorld Agency for AI-powered organic growth solutions. Schedule your free consultation and discover how we can transform your marketing.",
    url: "https://nuworld.site/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl xl:text-6xl">
              Let&apos;s Transform Your Marketing Together
            </h1>
            <p className="mb-6 text-lg font-light text-gray-600 dark:text-gray-400 lg:text-xl">
              Ready to unlock exponential organic growth with AI? We&apos;re here to help. Get your free consultation and discover how our AI-powered solutions can revolutionize your marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 lg:py-16">
        <div className="mx-auto max-w-screen-md px-4">
          <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-700 md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Get Your Free AI Growth Audit
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white dark:bg-gray-900 py-12 lg:py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="mailto:michael@nuworld.cloud" className="hover:text-primary-600 dark:hover:text-primary-400">
                  michael@nuworld.cloud
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="tel:+15551234567" className="hover:text-primary-600 dark:hover:text-primary-400">
                  (555) 123-4567
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-400">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 dark:bg-primary-800 py-12 lg:py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Scale with AI?
          </h2>
          <p className="mb-6 text-lg text-gray-200">
            Join the businesses already leveraging AI for exponential organic growth.
          </p>
          <div className="text-white">
            <p className="text-xl font-semibold">📧 michael@nuworld.cloud</p>
            <p className="mt-2 text-lg">📞 (555) 123-4567</p>
          </div>
        </div>
      </section>
    </>
  )
}