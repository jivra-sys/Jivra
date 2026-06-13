"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Wrench, GitBranch, Star, Mail, Globe, Bot, Zap, Smartphone, Paintbrush, Cloud } from 'lucide-react';

const stats = [
  { label: 'Projects Delivered', value: '12+' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Fast Delivery', value: '5–7 Days' },
  { label: 'Countries Served', value: '4+' }
];

const services = [
  { name: 'Website Development', desc: 'Fast, responsive sites built with modern frameworks. SEO-friendly and designed for conversions.', icon: Globe },
  { name: 'AI Solutions', desc: 'Custom AI integration for automation, chatbots, and intelligent workflows tailored to your needs.', icon: Bot },
  { name: 'SaaS Development', desc: 'Full-stack SaaS platforms from concept to launch with scalable architecture and clean code.', icon: Zap },
  { name: 'Mobile Apps', desc: 'Native and cross-platform apps that deliver great performance and user experience on iOS and Android.', icon: Smartphone },
  { name: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces that drive engagement and conversions for your digital product.', icon: Paintbrush },
  { name: 'Cloud & Automation', desc: 'AWS, GCP, and Azure deployment with CI/CD pipelines and infrastructure optimization.', icon: Cloud }
];

const reasons = [
  'Modern Tech Stack',
  'Scalable Architecture',
  'Fast Communication',
  'Premium UI/UX',
  'AI-Powered Solutions',
  'Brand-first Thinking'
];

const testimonials = [
  {
    quote: 'Jivra delivered our website in record time. Really professional and listened to our feedback throughout.',
    name: 'Raj Kumar',
    role: 'Founder, TechStart India'
  },
  {
    quote: 'They built our SaaS MVP exactly how we imagined it. Great communication, no delays.',
    name: 'Priya Sharma',
    role: 'Product Lead, DataFlow'
  },
  {
    quote: 'Working with Jivra felt like having a senior dev on our team. Fair pricing, solid work.',
    name: 'Vikram Patel',
    role: 'CTO, Growth Labs'
  }
];

const processSteps = [
  { step: '01', title: 'Discovery & Strategy', desc: 'Deep understanding of your vision, market, and goals' },
  { step: '02', title: 'Design & Prototype', desc: 'Premium mockups and interactive prototypes' },
  { step: '03', title: 'Development', desc: 'Clean, scalable code and modern architecture' },
  { step: '04', title: 'Launch & Testing', desc: 'Rigorous QA and seamless go-live' },
  { step: '05', title: 'Growth & Support', desc: 'Optimization, monitoring, and strategic guidance' }
];

const navLinks = [
  { href: '#services', label: 'Services', icon: Wrench },
  { href: '#process', label: 'Process', icon: GitBranch },
  { href: '#testimonials', label: 'Testimonials', icon: Star },
  { href: '#contact', label: 'Contact', icon: Mail },
];

// ─── EmailJS Config ───────────────────────────────────────────
const SERVICE_ID  = 'service_1en17gb';
const TEMPLATE_ID = 'template_ob0utnp';
const PUBLIC_KEY  = 'o4P_7qZNZfLos9Iwr';
// ─────────────────────────────────────────────────────────────

function JivraLogo({ className = '' }: { className?: string }) {
  return (
    <a id="home" href="#about" className={`inline-flex items-center gap-2 transition-opacity hover:opacity-80 ${className}`}>
      <span className="inline-flex flex-shrink-0 items-center justify-center" style={{ width: '34px', height: '34px', background: '#6B5CF6', borderRadius: '9px' }}>
        <span style={{ fontFamily: 'Inter, ui-sans-serif, sans-serif', fontWeight: 600, fontSize: '16px', color: '#ffffff', lineHeight: 1, letterSpacing: '-0.01em' }}>J</span>
      </span>
      <span style={{ fontFamily: 'Inter, ui-sans-serif, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.01em', lineHeight: 1 }}>
        <span style={{ color: '#ffffff' }}>ji</span>
        <span style={{ color: '#6B5CF6' }}>vra</span>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        email: formData.email,
        name: formData.name,
        message: formData.message,
      }, PUBLIC_KEY);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#05050d] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(80,67,255,0.24),transparent_42%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] rounded-full bg-[#2c0c6d] opacity-60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pb-28 sm:pt-10 lg:px-10">

        {/* ── Header ── */}
        <header className="relative flex items-center justify-between border-b border-white/10 pb-6 sm:pb-8">
          <JivraLogo />

          {/* Desktop nav — with icons */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                <Icon size={14} strokeWidth={1.8} className="text-[#7d62ff]" />
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#contact" className="hidden md:inline-flex items-center justify-center rounded-full bg-[#5f4cff] px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-[#7d62ff]">
            Book a Call
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <span className={`block h-0.5 w-5 bg-white rounded transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white rounded transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </header>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[#0b0b18]/95 backdrop-blur-xl p-4 space-y-1"
            >
              {navLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  <Icon size={15} strokeWidth={1.8} className="text-[#7d62ff]" />
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block w-full rounded-xl bg-[#5f4cff] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#7d62ff]"
              >
                Book a Call
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Hero ── */}
        <section className="relative mt-12 sm:mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#7d62ff]/30 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-slate-200 shadow-[0_0_40px_rgba(125,98,255,0.12)]">
                Freelance software studio for growing businesses
              </p>
              <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                Building Intelligent Digital Experiences
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Jivra is a growing freelance software studio helping startups and small businesses launch websites, AI tools, and digital products — built clean, delivered fast.
              </p>
            </div>
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#5f4cff] px-6 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-[#7d62ff] w-full xs:w-auto">Book a Call</a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-[#7d62ff]/60 hover:text-white w-full xs:w-auto">View Services</a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-xl transition hover:border-[#7d62ff]/40">
                  <p className="text-2xl sm:text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }} className="relative hidden lg:block overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-glass-gradient" />
            <div className="relative space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#090910]/90 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span className="font-medium text-slate-100">Jivra Studio</span>
                  <span className="rounded-full bg-[#1f1b35] px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">Studio</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">Future-ready product design</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">An elegant launch experience with subtle motion, premium spacing, and vivid UI details.</p>
              </div>
              <div className="grid gap-4 grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#090910]/90 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Speed</p>
                  <p className="mt-3 text-xl font-semibold text-white">Fast, focused delivery</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#090910]/90 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Quality</p>
                  <p className="mt-3 text-xl font-semibold text-white">Production-grade code</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="mt-16 sm:mt-20 space-y-6 sm:space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">Trusted performance</p>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold text-white md:text-4xl">Services crafted for modern growth</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-right">From enterprise SaaS to AI-powered products, Jivra delivers polished engineering, fast launches, and premium brand experiences.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ name, desc, icon: Icon }) => (
              <motion.div key={name} whileHover={{ y: -4, scale: 1.01 }} className="group rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#0b0b13]/85 p-5 sm:p-6 transition duration-300">
                <div className="mb-4 sm:mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#1b133d] text-[#7d62ff]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">{name}</h3>
                <p className="mt-2 sm:mt-3 text-sm leading-6 text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section id="process" className="mt-16 sm:mt-20 space-y-6 sm:space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">Proven methodology</p>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold text-white md:text-4xl">How we build premium digital products</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">A streamlined, collaborative process designed for clarity, speed, and exceptional results.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {processSteps.map((item) => (
              <motion.div key={item.step} whileHover={{ y: -4 }} className="group rounded-[28px] sm:rounded-[32px] border border-white/10 bg-[#0b0b13]/90 p-5 sm:p-6 shadow-soft transition">
                <p className="text-3xl sm:text-4xl font-bold text-[#7d62ff]">{item.step}</p>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Why Jivra ── */}
        <section id="why" className="mt-16 sm:mt-20 grid gap-5 sm:gap-6 lg:gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-[32px] sm:rounded-[36px] border border-white/10 bg-[#08080f]/90 p-5 sm:p-8 lg:p-10 shadow-soft backdrop-blur-xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">Why choose Jivra</p>
            <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-white lg:text-3xl">A premium partner for ambitious digital products</h2>
            <p className="mt-3 sm:mt-4 text-sm leading-7 text-slate-300">Jivra delivers elegant product experiences, end-to-end engineering, and a refined delivery rhythm built for modern scale.</p>
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-1">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-xs sm:text-sm text-slate-300">{reason}</div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
            {[
              { label: 'Brand-first', title: 'Design that communicates trust', desc: 'A cohesive style system that feels polished, futuristic, and refined across every interface.' },
              { label: 'Built to scale', title: 'Architecture optimized for growth', desc: 'Flexible, modern frameworks engineered for seamless expansion and product evolution.' },
              { label: 'Honest pricing', title: 'No surprises, fair rates', desc: "We're a lean studio—you get direct communication, senior-level attention, and fair rates. No agency overhead." },
              { label: 'Fast turnaround', title: '5–7 day delivery cycles', desc: 'We move fast without cutting corners. Iterative sprints keep you in the loop and ship results quickly.' }
            ].map((card) => (
              <motion.div key={card.label} whileHover={{ y: -4 }} className="rounded-[28px] sm:rounded-[32px] border border-white/10 bg-[#0b0a13]/90 p-5 sm:p-8 shadow-soft transition duration-300">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">{card.label}</p>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm leading-7 text-slate-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section id="testimonials" className="mt-16 sm:mt-20 space-y-6 sm:space-y-10">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">Testimonials</p>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold text-white md:text-4xl">What our early clients say</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} whileHover={{ y: -4 }} className="rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#09090f]/90 p-6 sm:p-8 shadow-soft backdrop-blur-xl">
                <p className="text-base sm:text-lg leading-7 sm:leading-8 text-slate-200">"{testimonial.quote}"</p>
                <div className="mt-6 sm:mt-8 space-y-1">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="mt-16 sm:mt-20 rounded-[32px] sm:rounded-[40px] border border-white/10 bg-[#0b0b13]/90 p-5 sm:p-8 lg:p-10 shadow-soft backdrop-blur-xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">About Jivra</p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-semibold text-white md:text-4xl">A growing freelance studio with real expertise</h2>
              <p className="mt-4 sm:mt-5 text-sm leading-7 sm:leading-8 text-slate-300">We're a lean team of senior engineers focused on building solid products that actually work. Direct communication, no unnecessary overhead.</p>
            </div>
            <div className="rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#09090f]/95 p-5 sm:p-8">
              <div className="mb-4 sm:mb-5 flex items-center justify-between gap-4 rounded-2xl sm:rounded-3xl bg-[#0d0c17]/90 px-4 sm:px-5 py-3 sm:py-4 text-sm text-slate-300">
                <span>Clients served</span>
                <span className="font-semibold text-white">12+</span>
              </div>
              <div className="grid gap-3 sm:gap-4">
                <div className="rounded-2xl sm:rounded-3xl bg-[#08080f]/80 p-4 sm:p-5 text-sm text-slate-300">Websites, apps, and AI tools built for startups and small businesses — clean code, fast delivery.</div>
                <div className="rounded-2xl sm:rounded-3xl bg-[#08080f]/80 p-4 sm:p-5 text-sm text-slate-300">From landing pages to full SaaS products — we handle design, development, and launch end to end.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="mt-16 sm:mt-20 rounded-[32px] sm:rounded-[40px] border border-white/10 bg-[#08080f]/90 p-5 sm:p-8 lg:p-10 shadow-soft backdrop-blur-xl">
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
                <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold text-white md:text-4xl">Start your project with Jivra</h2>
              </div>
              <p className="text-sm leading-7 text-slate-300">Share your vision, ask about AI strategy, or request a tailored proposal for your next digital product.</p>
              <div className="space-y-2 sm:space-y-3 text-sm text-slate-300">
                <p><strong className="text-white">Email:</strong> support.jivra@gmail.com</p>
                <p><strong className="text-white">WhatsApp:</strong> +91 75975 50730</p>
                <p><strong className="text-white">Address:</strong> Cloud 9 Society, Raheja Sterling Road, Mohammed Wadi, Pune - 411060</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-sm text-slate-300">
                <a href="https://www.linkedin.com/company/jivra-company/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">LinkedIn</a>
                <a href="https://twitter.com/jivra" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">Twitter</a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#0b0b13]/95 p-5 sm:p-6 lg:p-8">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" required className="w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#7d62ff]/60 focus:ring-2 focus:ring-[#7d62ff]/20" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required className="w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#7d62ff]/60 focus:ring-2 focus:ring-[#7d62ff]/20" />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">Project details</label>
                <textarea id="contact-message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your vision" required className="w-full rounded-[20px] sm:rounded-[28px] border border-white/10 bg-[#0a0a12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#7d62ff]/60 focus:ring-2 focus:ring-[#7d62ff]/20 resize-none" />
              </div>
              {status === 'success' && (
                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">✅ Message sent! We'll get back to you soon.</div>
              )}
              {status === 'error' && (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">❌ Something went wrong. Please try again.</div>
              )}
              <button type="submit" disabled={status === 'sending'} className="inline-flex w-full items-center justify-center rounded-full bg-[#5f4cff] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#7d62ff] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="mt-16 sm:mt-20 border-t border-white/10 pt-6 sm:pt-8 pb-12 sm:pb-16 text-sm text-slate-500">
          <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <JivraLogo />
              <p className="mt-2 sm:mt-3 text-slate-400 text-sm">Premium AI & software product studio.</p>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-slate-400">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#process" className="transition hover:text-white">Process</a>
              <a href="/about" className="transition hover:text-white">About</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-slate-400 mt-4 sm:mt-0">
              <a href="/privacy-policy" className="transition hover:text-white">Privacy Policy</a>
              <a href="/terms-and-conditions" className="transition hover:text-white">Terms & Conditions</a>
              <a href="/refund-policy" className="transition hover:text-white">Refund Policy</a>
            </div>
          </div>
          <p className="mt-6 sm:mt-8 text-center text-slate-500 text-xs sm:text-sm">© 2026 Jivra. Crafted for ambitious teams.</p>
        </footer>

      </div>
    </main>
  );
}