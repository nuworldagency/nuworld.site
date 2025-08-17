"use client"

import React, { useState } from "react"

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    console.log("Form submission started with data:", formData)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("API response status:", response.status)

      if (!response.ok) {
        const errorData = await response.json() as { error?: string }
        console.error("API error response:", errorData)
        throw new Error(errorData.error || `HTTP ${response.status}: Failed to submit form`)
      }

      const successData = await response.json()
      console.log("Form submitted successfully:", successData)

      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setError(error instanceof Error ? error.message : "Failed to submit form")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center dark:bg-green-900/20">
        <h3 className="mb-2 text-lg font-semibold text-green-800 dark:text-green-300">
          Thank you for your message!
        </h3>
        <p className="text-green-600 dark:text-green-400">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-lg border border-primary-600 bg-transparent px-6 py-2.5 text-center text-sm font-medium text-primary-600 hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:bg-primary-600 dark:hover:text-white dark:focus:ring-primary-800"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          required
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="Tell us about your project and how we can help..."
        />
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:opacity-50 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}

export default ContactForm