import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { env } from "../../../env.mjs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      name: string
      email: string
      message: string
      company?: string
      phone?: string
    }
    const { name, email, message, company, phone } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

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
    await transporter.sendMail(mailOptions)

    // Send to n8n webhook
    const webhookData = {
      name,
      email,
      message,
      company: company || "",
      phone: phone || "",
      timestamp: new Date().toISOString(),
      source: "nuworld.site",
    }

    await fetch(env.N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookData),
    })

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    )
  }
}