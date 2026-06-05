"use client";

export default function TermsAndConditions() {
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
          <h1 className="text-4xl font-semibold text-white mb-4">Terms & Conditions</h1>
          <p className="text-slate-400 text-sm">Effective Date: June 05, 2026 &nbsp;|&nbsp; Last Updated: June 05, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-slate-300 text-sm leading-7">

          <section>
            <p>
              Welcome to Jivra Technologies ("Jivra", "we", "our", or "us"). By accessing or using our website at <span className="text-[#7d62ff]">www.jivra.co.in</span> or engaging our services, you agree to be bound by these Terms & Conditions. Please read them carefully before proceeding.
            </p>
            <p className="mt-4">
              If you do not agree with any part of these terms, please discontinue use of our website and services immediately.
            </p>
          </section>

          {[
            {
              title: "1. Services",
              content: (
                <div className="space-y-4">
                  <p>Jivra Technologies provides technology and digital services including but not limited to:</p>
                  <ul className="space-y-2">
                    {[
                      "Website Development",
                      "AI Solutions & Integration",
                      "SaaS Product Development",
                      "Mobile Application Development",
                      "UI/UX Design",
                      "Cloud & Automation Services",
                      "Internship Programs",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7d62ff] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>The scope, timeline, deliverables, and pricing of each service will be defined in a separate agreement or proposal provided to the client.</p>
                </div>
              )
            },
            {
              title: "2. Use of Website",
              content: (
                <div className="space-y-4">
                  <p>By using our website, you agree that you will not:</p>
                  <ul className="space-y-2">
                    {[
                      "Use the website for any unlawful or fraudulent purpose",
                      "Attempt to gain unauthorized access to any part of the website or its related systems",
                      "Transmit any harmful, offensive, or disruptive content",
                      "Copy, reproduce, or redistribute any content from this website without prior written permission",
                      "Use automated tools to scrape or extract data from our website",
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
              title: "3. Intellectual Property",
              content: (
                <div className="space-y-4">
                  <p>All content on this website, including but not limited to text, graphics, logos, icons, images, and software, is the property of Jivra Technologies and is protected by applicable intellectual property laws.</p>
                  <p>You may not use, reproduce, modify, or distribute any content from this website without our express written permission.</p>
                  <p>Work product created for clients during a project engagement shall be governed by the terms outlined in the individual service agreement or contract.</p>
                </div>
              )
            },
            {
              title: "4. Client Responsibilities",
              content: (
                <div className="space-y-4">
                  <p>Clients engaging Jivra Technologies for services agree to:</p>
                  <ul className="space-y-2">
                    {[
                      "Provide accurate and complete information required for project execution",
                      "Respond to communications in a timely manner",
                      "Make payments as per the agreed schedule",
                      "Not share confidential project information with third parties without written consent",
                      "Provide necessary access and permissions required to complete the project",
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
              title: "5. Payment Terms",
              content: (
                <div className="space-y-4">
                  <p>Payment terms for each project will be outlined in the individual proposal or contract. In general:</p>
                  <ul className="space-y-2">
                    {[
                      "An advance payment may be required before project commencement",
                      "Milestone-based payments may apply for larger projects",
                      "All payments are to be made via bank transfer or UPI as agreed",
                      "Late payments may result in project delays or suspension of work",
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
              title: "6. Confidentiality",
              content: <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. Jivra Technologies will not disclose client information to third parties without prior written consent, except as required by law.</p>
            },
            {
              title: "7. Limitation of Liability",
              content: (
                <div className="space-y-4">
                  <p>To the maximum extent permitted by applicable law, Jivra Technologies shall not be liable for:</p>
                  <ul className="space-y-2">
                    {[
                      "Any indirect, incidental, or consequential damages arising from the use of our services",
                      "Loss of data, revenue, or business opportunities",
                      "Delays caused by factors outside our control (force majeure)",
                      "Third-party services or integrations used as part of the project",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7d62ff] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>Our total liability shall not exceed the amount paid by the client for the specific service in question.</p>
                </div>
              )
            },
            {
              title: "8. Termination",
              content: (
                <div className="space-y-4">
                  <p>Either party may terminate a service agreement with written notice as specified in the individual contract. Upon termination:</p>
                  <ul className="space-y-2">
                    {[
                      "The client will be billed for work completed up to the termination date",
                      "All deliverables completed and paid for will be handed over to the client",
                      "Confidentiality obligations shall survive termination",
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
              title: "9. Internship Program Terms",
              content: (
                <div className="space-y-4">
                  <p>Individuals participating in Jivra's internship program agree to:</p>
                  <ul className="space-y-2">
                    {[
                      "Abide by all terms outlined in the Internship Offer Letter and NDA",
                      "Maintain confidentiality of all company and client information",
                      "Complete assigned tasks and deliverables within stipulated timelines",
                      "Conduct themselves professionally at all times",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7d62ff] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>Completion certificates will be issued only upon satisfactory completion of the internship as per the criteria defined in the offer letter.</p>
                </div>
              )
            },
            {
              title: "10. Governing Law",
              content: <p>These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.</p>
            },
            {
              title: "11. Changes to Terms",
              content: <p>We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website or services after any changes constitutes acceptance of the revised terms.</p>
            },
            {
              title: "12. Contact Us",
              content: (
                <div className="space-y-2">
                  <p>For any questions regarding these Terms & Conditions, please contact us:</p>
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
            <a href="/terms-and-conditions" className="text-[#7d62ff]">Terms & Conditions</a>
            <a href="/refund-policy" className="hover:text-white transition">Refund Policy</a>
          </div>
        </div>

      </div>
    </main>
  );
}