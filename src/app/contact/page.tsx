"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your preferred email service
    console.log("Form submitted:", formData);
    alert(
      "Message sent! (This is a placeholder - integrate your email service)"
    );
  };

  return (
    <PageLayout
      watermarkText="Contact."
      footerCtaText="Go Back Home"
      footerCtaHref="/"
    >
      <div className="px-8 md:px-16 lg:px-24">
        {/* Page Title */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Contact.
        </h1>

        {/* Email Info */}
        <p className="text-lg mb-4">
          I welcome academic collaboration, speaking engagements, and research
          partnerships.
        </p>
        <p className="text-lg mb-12">
          {/* Reach me at{" "}
          <a
            href="mailto:diana.imoli@kemri.go.ke"
            className="font-bold hover:opacity-70 transition-opacity"
          >
            diana.imoli@kemri.go.ke
          </a> */}
          <span className="text-gray-600">Diana Imoli — Nairobi, Kenya</span>
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="form-input resize-none"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
