"use client";

export default function RefundPolicy() {
  return (
    <main className="relative overflow-hidden bg-[#05050d] text-white min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(80,67,255,0.24),transparent_42%)] blur-3xl" />

      <div className="mx-auto max-w-4xl px-6 pb-28 pt-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/10 pb-8 mb-12">
          <a href="/" className="inline-flex items-center gap-2 transition-opacity hover:opacity-80">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#6B5CF6] text-white font-bold text-sm">J</span>
            <span className="font-bold text-lg"><span className="text-white">ji</span><span className="text-[#6B5CF6]">vra</span></span>
          </a>
          <a href="/" className="text-sm text-slate-400 hover:text-white transition">← Back to Home</a>
        </header>

        {/* Title */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7d62ff] mb-3">Legal</p>
          <h1 className="text-4xl font-semibold text-white mb-4">Refund Policy</h1>
          <p className="text-slate-400 text-sm">Effective Date: June 05, 2026 &nbsp;|&nbsp; Last Updated: June 05, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-slate-300 text-sm leading-7">

          <section>
            <p>
              At Jivra Technologies ("Jivra", "we", "our", or "us"), we are committed to delivering high-quality digital services and ensuring client satisfaction. This Refund Policy outlines the terms under which refunds may be requested and processed for our services.
            </p>
            <p className="mt-4">
              By engaging our services, you acknowledge and agree to the terms of this Refund Policy.
            </p>
          </section>

          {[
            {
              title: "1. General Policy",
              content: (
                <div className="space-y-4">
                  <p>Due to the nature of our digital services, which involve significant time, effort, and resources from our team, all payments made to Jivra Technologies are generally non-refundable once work has commenced.</p>
                  <p>However, we understand that circumstances may change, and we evaluate refund requests on a case-by-case basis in good faith.</p>
                </div>
              )
            },
            {
              title: "2. Eligibility for Refund",
              content: (
                <div className="space-y-4">
                  <p>Refunds may be considered in the following situations:</p>
                  <ul className="space-y-3">
                    {[
                      {
                        heading: "Project Not Started:",
                        desc: "If you cancel your project before any work has commenced, you are eligible for a full refund of the advance payment."
                      },
                      {
                        heading: "Project Cancellation Before Completion:",
                        desc: "If you cancel the project after work has commenced, a refund will be calculated based on the work completed up to the cancellation date. The remaining balance will be refunded proportionally."
                      },
                      {
                        heading: "Failure to Deliver:",
                        desc: "If Jivra Technologies fails to deliver the agreed deliverables within the mutually agreed timeline (excluding delays caused by client-side issues), a partial or full refund may be considered."
                      },
                      {
                        heading: "Duplicate Payment:",
                        desc: "In case of accidental duplicate payments, the excess amount will be refunded in full within 7 business days."
                      },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7d62ff] mt-1">→</span>
                        <span><span className="text-white font-medium">{item.heading}</span> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            },
            {
              title: "3. Non-Refundable Situations",
              content: (
                <div className="space-y-4">
                  <p>Refunds will NOT be provided in the following cases:</p>
                  <ul className="space-y-2">
                    {[
                      "The project has been completed and delivered as per the agreed scope",
                      "Client requests changes beyond the original agreed scope after delivery",
                      "Delays or issues caused due to lack of timely response or cooperation from the client",
                      "Change of mind after work has commenced",
                      "Dissatisfaction based on subjective preferences not specified in the original brief",
                      "Third-party tools, subscriptions, or licenses purchased on behalf of the client",
                      "Internship program fees (if applicable), once the internship has commenced",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7d62ff] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            },
            {
              title: "4. Refund Request Process",
              content: (
                <div className="space-y-4">
                  <p>To request a refund, please follow these steps:</p>
                  <ul className="space-y-2">
                    {[
                      "Send an email to support.jivra@gmail.com with the subject line \"Refund Request — [Your Name / Project Name]\"",
                      "Include your full name, contact details, project details, payment reference number, and reason for the refund request",
                      "Our team will acknowledge your request within 2 business days",
                      "We will review your request and respond with our decision within 7 business days",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7d62ff] mt-1 shrink-0">{i + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            },
            {
              title: "5. Refund Processing",
              content: (
                <div className="space-y-4">
                  <p>Approved refunds will be processed as follows:</p>
                  <ul className="space-y-2">
                    {[
                      "Refunds will be credited to the original payment method (bank account or UPI)",
                      "Processing time: 5–10 business days from approval",
                      "Any bank or transaction charges incurred will be deducted from the refund amount",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7d62ff] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            },
            {
              title: "6. Dispute Resolution",
              content: (
                <div className="space-y-4">
                  <p>We encourage clients to first reach out to us directly at <span className="text-[#7d62ff]">support.jivra@gmail.com</span> to resolve any concerns amicably before escalating disputes.</p>
                  <p>If a resolution cannot be reached, disputes will be handled in accordance with the laws of India and subject to the jurisdiction of courts in Pune, Maharashtra.</p>
                </div>
              )
            },
            {
              title: "7. Changes to This Policy",
              content: <p>Jivra Technologies reserves the right to modify this Refund Policy at any time. Changes will be effective upon posting on our website. We encourage clients to review this policy periodically.</p>
            },
            {
              title: "8. Contact Us",
              content: (
                <div className="space-y-2">
                  <p>For any refund-related queries, please contact us:</p>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
                    <p><span className="text-white font-medium">Company:</span> Jivra Technologies</p>
                    <p><span className="text-white font-medium">Address:</span> Cloud 9 Society, Raheja Sterling Road, Mohammed Wadi, Pune, Maharashtra 411060</p>
                    <p><span className="text-white font-medium">Email:</span> <span className="text-[#7d62ff]">support.jivra@gmail.com</span></p>
                    <p><span className="text-white font-medium">Website:</span> <span className="text-[#7d62ff]">www.jivra.co.in</span></p>
                  </div>
                </div>
              )
            },
          ].map((section, i) => (
            <section key={i} className="border-t border-white/5 pt-8">
              <h2 className="text-white font-semibold text-lg mb-4">{section.title}</h2>
              {section.content}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500 text-xs">
          <p>© 2026 Jivra Technologies. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</a>
            <a href="/refund-policy" className="text-[#7d62ff]">Refund Policy</a>
          </div>
        </div>

      </div>
    </main>
  );
}