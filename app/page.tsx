"use client";

import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '128+' },
  { label: 'Client Satisfaction', value: '99.7%' },
  { label: 'Fast Delivery', value: '48h Turnaround' },
  { label: 'Global Clients', value: '24 Countries' }
];

const services = [
  'Website Development',
  'AI Solutions',
  'SaaS Development',
  'Mobile Apps',
  'UI/UX Design',
  'Cloud & Automation'
];

const reasons = [
  'Modern Tech Stack',
  'Scalable Architecture',
  'Fast Communication',
  'Premium UI/UX',
  'AI-Powered Solutions'
];

const testimonials = [
  {
    quote: 'Jivra transformed our brand with a digital presence that feels both visionary and dependable.',
    name: 'Sofia Lennox',
    role: 'Founder, Lumina Labs'
  },
  {
    quote: 'The AI product they delivered was flawless and launch-ready in record time.',
    name: 'Markus Chen',
    role: 'CTO, Orion Ventures'
  },
  {
    quote: 'Premium execution, clear communication, and a beautiful product that wowed investors.',
    name: 'Amaya Patel',
    role: 'CEO, Nova Secure'
  }
];

const portfolio = [
  { title: 'Next-gen SaaS Platform', subtitle: 'Smart automation for enterprise teams' },
  { title: 'AI Insight Engine', subtitle: 'Predictive intelligence for growth' },
  { title: 'Digital Experience Suite', subtitle: 'Luxury web and product design' }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#05050d] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(80,67,255,0.24),transparent_42%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-[#2c0c6d] opacity-60 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-10 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <a className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 text-sm font-medium ring-1 ring-white/10 transition hover:bg-white/10" href="#about">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#7d62ff] shadow-[0_0_20px_rgba(125,98,255,0.6)]" />
            Jivra – Intelligent digital studio
          </a>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
            <a href="#testimonials" className="transition hover:text-white">Testimonials</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="relative mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#7d62ff]/30 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_0_40px_rgba(125,98,255,0.12)]">
                Premium software studio for ambitious brands
              </p>
              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Building Intelligent Digital Experiences
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Jivra helps businesses launch elevated websites, AI-enabled platforms, and modern software products with a polished, investor-ready presence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#5f4cff] px-7 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-[#7d62ff]">
                Book a Call
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-[#7d62ff]/60 hover:text-white">
                View Services
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-[#7d62ff]/40">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-glass-gradient" />
            <div className="relative space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#090910]/90 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span className="font-medium text-slate-100">Jivra Studio</span>
                  <span className="rounded-full bg-[#1f1b35] px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">Elite</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">Future-ready product design</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">An elegant launch experience with subtle motion, premium spacing, and vivid UI details.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#090910]/90 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Acceleration</p>
                  <p className="mt-3 text-xl font-semibold text-white">Accelerated onboarding</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#090910]/90 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Insight</p>
                  <p className="mt-3 text-xl font-semibold text-white">Data-driven decision flow</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="mt-20 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Trusted performance</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Services crafted for modern growth</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">From enterprise SaaS to AI-powered products, Jivra delivers polished engineering, fast launches, and premium brand experiences.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
            {services.map((name) => (
              <motion.div
                key={name}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-[28px] border border-white/10 bg-[#0b0b13]/85 p-6 transition duration-300"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b133d] text-[#7d62ff] shadow-glow">
                  <span className="text-2xl">•</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">Premium execution with scalable architecture and high-fidelity delivery.</p>
                <div className="mt-5 text-sm font-semibold text-[#7d62ff] transition group-hover:text-[#99a4ff]">Explore →</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mt-20 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Showcase</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Portfolio built for premium impact</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">A selection of polished projects that blend strategic thinking with futuristic design and seamless performance.</p>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="group rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0e0b19]/90 to-[#090912]/95 p-6 shadow-soft transition"
              >
                <div className="mb-6 h-[210px] rounded-[28px] bg-[#0c0a16] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                  <div className="flex h-full flex-col justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#1b1038]/80 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-400">Live Prototype</span>
                    <div className="text-right text-4xl font-semibold text-[#7d62ff]">{index + 1}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="why" className="mt-20 grid gap-10 xl:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-[36px] border border-white/10 bg-[#08080f]/90 p-10 shadow-soft backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Why choose Jivra</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">A premium partner for ambitious digital products</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Jivra delivers elegant product experiences, end-to-end engineering, and a refined delivery rhythm built for modern scale.</p>
            <div className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
                  {reason}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-[#0b0a13]/90 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Brand-first</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Design that communicates trust</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">A cohesive style system that feels polished, futuristic, and refined across every interface.</p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-[#0b0a13]/90 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Built to scale</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Architecture optimized for growth</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Flexible, modern frameworks engineered for seamless expansion and product evolution.</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mt-20 space-y-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Testimonials</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Clients say Jivra feels premium, fast, and precise</h2>
          </div>
          <div className="grid gap-5 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                whileHover={{ y: -6 }}
                className="rounded-[36px] border border-white/10 bg-[#09090f]/90 p-8 shadow-soft backdrop-blur-xl"
              >
                <p className="text-lg leading-8 text-slate-200">“{testimonial.quote}”</p>
                <div className="mt-8 space-y-1">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 rounded-[40px] border border-white/10 bg-[#0b0b13]/90 p-10 shadow-soft backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About Jivra</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Digital product craftsmanship for ambitious teams</h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300">Jivra builds high-performance digital products and intelligent software experiences for ambitious brands and startups. Every project is designed to feel trusted, innovative, and premium.</p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-[#09090f]/95 p-8">
              <div className="mb-5 flex items-center justify-between gap-4 rounded-3xl bg-[#0d0c17]/90 px-5 py-4 text-sm text-slate-300">
                <span>Clients served</span>
                <span className="font-semibold text-white">70+</span>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-[#08080f]/80 p-5 text-sm text-slate-300">Enterprise-ready digital strategy, product design, and launch execution.</div>
                <div className="rounded-3xl bg-[#08080f]/80 p-5 text-sm text-slate-300">AI-native platforms, scalable systems, and frictionless user journeys.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[40px] border border-white/10 bg-[#08080f]/90 p-10 shadow-soft backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Start your premium project with Jivra</h2>
              <p className="max-w-xl text-sm leading-7 text-slate-300">Share your vision, ask about AI strategy, or request a tailored proposal for your next digital product.</p>
              <div className="space-y-3 text-sm text-slate-300">
                <p><strong className="text-white">Email:</strong> hello@jivra.studio</p>
                <p><strong className="text-white">WhatsApp:</strong> +1 555 012 9867</p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">LinkedIn</button>
                <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">Twitter</button>
                <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">Dribbble</button>
              </div>
            </div>
            <form className="space-y-5 rounded-[32px] border border-white/10 bg-[#0b0b13]/95 p-8">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                <input type="text" placeholder="Your name" className="w-full rounded-3xl border border-white/10 bg-[#0a0a12] px-4 py-3 text-white outline-none transition focus:border-[#7d62ff]/60 focus:ring-2 focus:ring-[#7d62ff]/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                <input type="email" placeholder="you@company.com" className="w-full rounded-3xl border border-white/10 bg-[#0a0a12] px-4 py-3 text-white outline-none transition focus:border-[#7d62ff]/60 focus:ring-2 focus:ring-[#7d62ff]/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Project details</label>
                <textarea rows={5} placeholder="Tell us about your vision" className="w-full rounded-[28px] border border-white/10 bg-[#0a0a12] px-4 py-3 text-white outline-none transition focus:border-[#7d62ff]/60 focus:ring-2 focus:ring-[#7d62ff]/20" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#5f4cff] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#7d62ff]">
                Send Message
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-8 pb-16 text-sm text-slate-500">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">Jivra</p>
              <p className="mt-2 text-slate-400">Premium AI & software product studio.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-slate-400">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </div>
          <p className="mt-8 text-center text-slate-500">© 2026 Jivra. Crafted for ambitious teams.</p>
        </footer>
      </div>
    </main>
  );
}
