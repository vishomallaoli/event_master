// src/app/faq/page.tsx

"use client";

import Navbar from "@/components/ui/Navbar";

export default function FAQ() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Frequently Asked Questions</h1>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
          <h3>Q: What is EventMaster?</h3>
          <p>A: EventMaster is an event management platform designed to streamline event planning.</p>

          <h3>Q: How do I sign up?</h3>
          <p>A: Click on the Sign Up button in the navigation bar and fill out the registration form.</p>

          <h3>Q: How can I contact support?</h3>
          <p>A: Please reach out via the contact form on the support page or email us directly.</p>

          {/* Add more FAQs as needed */}
        </div>
      </div>
    </div>
  );
}