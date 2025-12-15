"use client"
import React from "react"

// Editable contact links
const CONTACT = {
  facebook: "https://web.facebook.com/profile.php?id=61583791092081",
  instagram: "https://www.instagram.com/d_four_lab/",
  email: "hello@dfour.example",
  // WhatsApp number in international format without plus for wa.me (e.g. 94771234567)
  whatsappNumber: "94771234567",
  phone: "+94771234567",
}

export default function ContactPage() {
  const waHref = `https://wa.me/${CONTACT.whatsappNumber}`

  return (
    <section className="min-h-screen py-16 bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-gray-300 max-w-prose mb-8">Reach out via any channel below — we usually reply within one business day.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] hover:shadow-lg flex items-center gap-4"
          >
            <div className="text-2xl">📘</div>
            <div>
              <div className="font-semibold">Facebook</div>
              <div className="text-sm text-gray-300">{CONTACT.facebook}</div>
            </div>
          </a>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] hover:shadow-lg flex items-center gap-4"
          >
            <div className="text-2xl">📸</div>
            <div>
              <div className="font-semibold">Instagram</div>
              <div className="text-sm text-gray-300">{CONTACT.instagram}</div>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="group p-6 rounded-xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] hover:shadow-lg flex items-center gap-4"
          >
            <div className="text-2xl">✉️</div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-gray-300">{CONTACT.email}</div>
            </div>
          </a>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] hover:shadow-lg flex items-center gap-4"
          >
            <div className="text-2xl">💬</div>
            <div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-gray-300">Chat: {CONTACT.phone}</div>
            </div>
          </a>

          <a
            href={`tel:${CONTACT.phone}`}
            className="group p-6 rounded-xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] hover:shadow-lg flex items-center gap-4"
          >
            <div className="text-2xl">📞</div>
            <div>
              <div className="font-semibold">Call</div>
              <div className="text-sm text-gray-300">{CONTACT.phone}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
