"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Vicky Swain",
    role: "Co-Founder & CEO",
    bio: "Passionate about building elegant digital products that solve real problems. Vicky leads product strategy, client relationships, and oversees delivery at Jivra.",
    initial: "V",
  },
  {
    name: "Lucky Jain",
    role: "Co-Founder & Managing Director",
    bio: "A builder at heart, Lucky drives the technical vision at Jivra — architecting scalable systems, AI solutions, and ensuring every product ships with precision.",
    initial: "L",
  },
];

const values = [
  {
    title: "Quality First",
    desc: "We never cut corners. Every line of code, every pixel, every interaction is crafted with care and intentionality.",
  },
  {
    title: "Radical Transparency",
    desc: "No hidden costs, no vague timelines. We communicate openly and honestly at every stage of the project.",
  },
  {
    title: "Speed Without Compromise",
    desc: "We move fast — but never at the expense of quality. Our process is optimized for rapid, reliable delivery.",
  },
  {
    title: "Client-First Mindset",
    desc: "Your success is our success. We treat every project as if it's our own business on the line.",
  },
];

const milestones = [
  { year: "2025", event: "Jivra founded by Vicky Swain and Lucky Jain in Pune, India" },
  { year: "2025", event: "First client project delivered — a full-stack web platform for a Mumbai startup" },
  { year: "2026", event: "Expanded to AI & automation services, serving clients across 4 countries" },
  { year: "2026", event: "Launched Jivra Internship Program to nurture the next generation of tech talent" },
  { year: "2026", event: "Registered as MSME — officially recognized by the Government of India" },
];

export default function AboutUs() {
  return (
    <main className="relative overflow-hidden bg-[#05050d] text-white min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(80,67,255,0.24),transparent_42%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-[#2c0c6d] opacity-40 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 pb-28 pt-10 sm:px-8 lg:px-10">

        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/10 pb-8 mb-16">
          <a href="/" className="inline-flex items-center gap-2 transition-opacity hover:opacity-80">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#6B5CF6] text-white font-bold text-sm">J</span>
            <span className="font-bold text-lg"><span className="text-white">ji</span><span className="text-[#6B5CF6]">vra</span></span>
          </a>
          <a href="/" className="text-sm text-slate-400 hover:text-white transition">← Back to Home</a>
        </header>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#7d62ff] mb-4">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
            We build digital products<br className="hidden sm:block" /> that actually work.
          </h1>
          <p className="text-slate-300 text-lg leading-8 max-w-2xl">
            Jivra is a lean, focused technology studio from Pune, India. We partner with startups and growing businesses to build websites, AI tools, SaaS platforms, and mobile apps — delivered fast, built to last.
          </p>
        </motion.div>

        {/* Story */}
        <section className="mb-20">
          <div className="rounded-[32px] border border-white/10 bg-[#0b0b13]/90 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">Our Story</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Built from frustration. Driven by craft.</h2>
            <div className="space-y-4 text-slate-300 text-sm leading-7">
              <p>
                Jivra was born out of a simple observation — too many businesses were paying agencies big fees for mediocre work, slow timelines, and zero accountability. Vicky and Lucky, both passionate engineers and builders, decided to do things differently.
              </p>
              <p>
                Founded in 2025 in Pune, India, Jivra started as a two-person studio with one goal: deliver production-grade digital products with the speed of a startup and the polish of a premium agency. No fluff, no bloat — just clean code and real results.
              </p>
              <p>
                What began as freelance projects quickly grew into a full-service digital studio, serving clients across India and internationally. From landing pages to full-stack SaaS platforms and AI-powered tools, Jivra has built a reputation for doing serious work with a small, focused team.
              </p>
              <p>
                Today, Jivra is an MSME-registered technology company, running an internship program to train the next wave of tech talent — and still driven by the same ethos that started it all: <span className="text-white font-medium">build great things, deliver on time, treat every client like a partner.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">The Team</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">Two builders. One mission.</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {team.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -4 }}
                className="rounded-[28px] border border-white/10 bg-[#0b0b13]/90 p-7 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b133d] text-[#7d62ff] text-2xl font-bold">
                    {member.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">{member.name}</p>
                    <p className="text-[#7d62ff] text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-6">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Our Values</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">What we stand for</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <motion.div
                key={v.title}
                whileHover={{ y: -4 }}
                className="rounded-[24px] border border-white/10 bg-[#0b0a13]/90 p-6 transition duration-300"
              >
                <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-6">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Journey</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">How we got here</h2>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-5 rounded-[20px] border border-white/10 bg-[#0b0b13]/80 px-6 py-4">
                <span className="text-[#7d62ff] font-bold text-sm shrink-0 mt-0.5">{m.year}</span>
                <p className="text-slate-300 text-sm leading-6">{m.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[32px] border border-white/10 bg-[#08080f]/90 p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to build something great?</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto">Whether you have a detailed brief or just a rough idea — we'd love to hear from you. Let's build it together.</p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#5f4cff] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#7d62ff]"
          >
            Get in Touch
          </a>
        </section>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500 text-xs">
          <p>© 2026 Jivra Technologies. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</a>
            <a href="/refund-policy" className="hover:text-white transition">Refund Policy</a>
          </div>
        </div>

      </div>
    </main>
  );
}