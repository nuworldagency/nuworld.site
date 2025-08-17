import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { env } from "../../../env.mjs"

export async function POST(request: NextRequest) {
  try {
    console.log("=== Contact Form Submission Started ===")
    
    const body = await request.json() as {
      name: string
      email: string
      message: string
      company?: string
      phone?: string
    }
    const { name, email, message, company, phone } = body
    
    console.log("Form data received:", { name, email, company, phone, messageLength: message?.length })

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Validation failed - missing required fields")
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    console.log("Environment variables check:", {
      hasEmailHost: !!env.EMAIL_HOST,
      hasEmailPort: !!env.EMAIL_PORT,
      hasEmailUser: !!env.EMAIL_USER,
      hasEmailPassword: !!env.EMAIL_PASSWORD,
      hasWebhookUrl: !!env.N8N_WEBHOOK_URL,
      emailHost: env.EMAIL_HOST,
      emailPort: env.EMAIL_PORT,
      emailUser: env.EMAIL_USER
    })

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: env.EMAIL_HOST,
      port: env.EMAIL_PORT,
      secure: env.EMAIL_SECURE,
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASSWORD,
      },
    })

    // Test connection
    console.log("Testing email connection...")
    try {
      await transporter.verify()
      console.log("Email connection verified successfully")
    } catch (verifyError) {
      console.error("Email connection verification failed:", verifyError)
      throw new Error(`Email connection failed: ${verifyError}`)
    }

    // Email content
    const mailOptions = {
      from: env.EMAIL_USER,
      to: "michael@nuworld.cloud",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    }

    // Send email
    console.log("Sending email...")
    try {
      const emailResult = await transporter.sendMail(mailOptions)
      console.log("Email sent successfully:", emailResult.messageId)
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      throw new Error(`Email sending failed: ${emailError}`)
    }

    // Send to n8n webhook
    const webhookData = {
      name,
      email,
      message,
      company: company || "",
      phone: phone || "",
      timestamp: new Date().toISOString(),
      source: "nuworldagency.com",
    }

    console.log("Sending to webhook:", env.N8N_WEBHOOK_URL)
    try {
      const webhookResponse = await fetch(env.N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      })
      
      console.log("Webhook response status:", webhookResponse.status)
      
      if (!webhookResponse.ok) {
        const webhookError = await webhookResponse.text()
        console.error("Webhook failed:", webhookError)
        throw new Error(`Webhook failed: ${webhookResponse.status} - ${webhookError}`)
      }
      
      console.log("Webhook sent successfully")
    } catch (webhookError) {
      console.error("Webhook sending failed:", webhookError)
      // Don't throw here - email was sent successfully, webhook failure shouldn't block the response
    }

    console.log("=== Contact Form Submission Completed Successfully ===")
    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("=== Contact Form Submission Failed ===")
    console.error("Full error:", error)
    return NextResponse.json(
      { error: `Failed to submit contact form: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}