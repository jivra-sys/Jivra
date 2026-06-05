"use client";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-semibold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Effective Date: June 05, 2026 &nbsp;|&nbsp; Last Updated: June 05, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-slate-300 text-sm leading-7">

          <section>
            <p>
              Jivra Technologies ("Jivra", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <span className="text-[#7d62ff]">www.jivra.co.in</span> or contact us through our platform.
            </p>
            <p className="mt-4">
              By using our website, you agree to the collection and use of information in accordance with this policy. Please read it carefully.
            </p>
          </section>

          {[
            {
              title: "1. Information We Collect",
              content: (
                <div className="space-y-4">
                  <p><span className="text-white font-medium">a) Information You Provide Directly:</span> When you fill out our contact form, we collect your name, email address, and project details/message. This information is used solely to respond to your inquiry.</p>
                  <p><span className="text-white font-medium">b) Automatically Collected Information:</span> When you visit our website, we may automatically collect certain technical information including your IP address, browser type, operating system, referring URLs, and pages visited. This is collected through standard server logs and analytics tools.</p>
                  <p><span className="text-white font-medium">c) Cookies:</span> Our website is hosted on Vercel, which may use cookies and similar tracking technologies for performance and analytics purposes. These cookies help us understand how visitors interact with our website.</p>
                </div>
              )
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <ul className="space-y-2 list-none">
                  {[
                    "To respond to your inquiries and project requests",
                    "To improve our website content and user experience",
                    "To analyze website traffic and usage patterns",
                    "To communicate updates or relevant information (only if you have opted in)",
                    "To comply with legal obligations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#7d62ff] mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            },
            {
              title: "3. Sharing of Information",
              content: (
                <div className="space-y-4">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:</p>
                  <ul className="space-y-2">
                    {[
                      "With service providers who assist in operating our website (e.g., Vercel for hosting, EmailJS for contact form delivery)",
                      "When required by law, court order, or government authority",
                      "To protect the rights, property, or safety of Jivra, our users, or the public",
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
              title: "4. Cookies Policy",
              content: (
                <div className="space-y-4">
                  <p>Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:</p>
                  <ul className="space-y-2">
                    {[
                      "Essential cookies: Required for the website to function properly",
                      "Analytics cookies: Help us understand how visitors use our site (via Vercel Analytics)",
                      "Performance cookies: Used to improve website speed and performance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7d62ff] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>You can control cookie settings through your browser. Disabling cookies may affect some website functionality.</p>
                </div>
              )
            },
            {
              title: "5. Data Retention",
              content: <p>We retain personal information submitted through our contact form only as long as necessary to respond to your inquiry and for a reasonable period thereafter for business records. We do not store sensitive personal data beyond what is necessary.</p>
            },
            {
              title: "6. Data Security",
              content: <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            },
            {
              title: "7. Third-Party Links",
              content: <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
            },
            {
              title: "8. Your Rights",
              content: (
                <div className="space-y-4">
                  <p>You have the right to:</p>
                  <ul className="space-y-2">
                    {[
                      "Access the personal information we hold about you",
                      "Request correction of inaccurate data",
                      "Request deletion of your personal data",
                      "Withdraw consent for data processing at any time",
                      "Lodge a complaint with a relevant data protection authority",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7d62ff] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>To exercise any of these rights, please contact us at <span className="text-[#7d62ff]">support.jivra@gmail.com</span>.</p>
                </div>
              )
            },
            {
              title: "9. Children's Privacy",
              content: <p>Our website is not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately.</p>
            },
            {
              title: "10. Changes to This Policy",
              content: <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
            },
            {
              title: "11. Contact Us",
              content: (
                <div className="space-y-2">
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
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
            <a href="/privacy-policy" className="text-[#7d62ff]">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</a>
            <a href="/refund-policy" className="hover:text-white transition">Refund Policy</a>
          </div>
        </div>

      </div>
    </main>
  );
}