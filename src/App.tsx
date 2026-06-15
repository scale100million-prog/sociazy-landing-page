import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  Clock, 
  MessageSquare, 
  Receipt, 
  ShieldCheck, 
  Sparkles,
  PhoneCall
} from "lucide-react";
import { 
  RESULT_CARDS, 
  PROBLEM_BLOCKS, 
  FEATURE_CARDS, 
  FAQ_ITEMS 
} from "./data";

// Scroll animation container wrapper adhering to the specific framer-motion once viewport requirement
const ScrollAnimate: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full flex flex-col items-center ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  // Global States
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);
  
  // Property owner count up animation hook
  const [ownerCount, setOwnerCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 40;
    const duration = 1600; // ms
    const step = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setOwnerCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, step);
    return () => clearInterval(timer);
  }, []);

  // Sticky Footer Countdown Timer (9:58 minutes = 598 seconds)
  const [secondsLeft, setSecondsLeft] = useState(598);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 598; // Automatically wrap to retain the urgent deal aspect
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSecs: number) => {
    const min = Math.floor(totalSecs / 60);
    const sec = totalSecs % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  // Icon selector helper for How It Works
  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-[#16A34A]" />;
      case "Receipt":
        return <Receipt className="w-6 h-6 text-[#16A34A]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#16A34A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#16A34A]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A2E] font-sans overflow-x-hidden select-none selection:bg-[#FFD84D] selection:text-[#1A1A2E]">
      
      {/* SECTION 1 — HERO & VIDEO CONTAINER */}
      {/* Background: cream gradient from #FFFDF0 top to #FFFFFF bottom */}
      <section className="bg-gradient-to-b from-[#FFFDF0] to-[#FFFFFF] pt-4 md:pt-[48px] pb-[24px] md:pb-[32px] px-6 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
          
          {/* Wide Black trust/qualifier bar with slightly rounded corners */}
          <div className="w-full max-w-[960px] bg-black text-[#FFFDF0] text-center text-[11px] md:text-[14px] font-semibold py-2.5 px-4 md:py-3.5 md:px-6 rounded-[12px] mx-auto mb-4 md:mb-5 leading-tight shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
            Only for Property, PG and Hostel Owners, Still Running Everything on WhatsApp Manually
          </div>

          {/* Hero Headline First Part (Main statement in dark heading color) */}
          <h1 
            id="hero-headline" 
            className="text-[24px] md:text-[44px] lg:text-[48px] font-[850] tracking-[-0.02em] leading-[1.12] text-[#1A1A2E] text-center max-w-[1000px] mb-2 md:mb-3"
          >
            Stop Spending your day replying to Whatsapp messages
          </h1>

          {/* Hero Headline Second Part (Continuation in green accent color) */}
          <h2 className="text-[19px] md:text-[28px] lg:text-[32px] font-[800] text-[#16A34A] text-center max-w-[900px] mb-3 md:mb-4 leading-tight tracking-[-0.01em]">
            and focus on Scaling your business.
          </h2>

          {/* Hero Supporting Description Paragraph */}
          <p 
            id="hero-subheadline" 
            className="text-[13px] md:text-[17px] text-[#4A4B65] leading-[1.6] text-center max-w-[760px] mb-4 md:mb-6"
          >
            Estate Desk automates broker replies, rent collection, and vendor follow-ups — on the same WhatsApp your tenants and brokers already use. <span className="text-[#16A34A] font-bold">400+ properties already automated across India</span>.
          </p>
          
          {/* Video Section (max-width 800px) */}
          <div className="w-full max-w-[800px] flex flex-col items-center mb-5 md:mb-8">
            {/* Video Container Wrapper with Annotation */}
            <div className="relative w-full">
              {/* Watch the video annotation */}
              <div className="hidden md:block absolute -top-12 -right-32 pointer-events-none select-none rotate-[-8deg] font-caveat text-[28px] text-[#16A34A] leading-none z-10 w-44">
                <div className="flex flex-col items-center">
                  <span>Watch the Video</span>
                  <svg className="w-16 h-16 mt-1 rotate-[10deg] text-[#16A34A]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M70,10 C50,20 30,35 20,65" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13,52 C15,57 19,63 20,65 C24,61 31,56 36,54" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
 
              {/* VSL Video Frame */}
              <div 
                id="vsl-video-container" 
                className="w-full rounded-[20px] border-3 border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-slate-900 overflow-hidden"
              >
                {/* Wistia Style Tag */}
                <style dangerouslySetInnerHTML={{
                  __html: `wistia-player[media-id='7sd20aqp18']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/7sd20aqp18/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`
                }} />
                {/* Embedded Wistia player using the designated customized tag strictly */}
                {/* @ts-ignore */}
                <wistia-player media-id="7sd20aqp18" aspect="1.7777777777777777"></wistia-player>
              </div>
            </div>
          </div>
 
          {/* Core Hero CTA Button */}
          <motion.a
            id="hero-cta"
            href="https://calendly.com/veomaz2/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).fbq('track', 'Lead')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto bg-[#FFD84D] text-[#1A1A2E] text-[15px] md:text-[16px] font-bold py-3.5 md:py-[18px] px-8 md:px-[52px] rounded-full shadow-[0_8px_28px_rgba(0,0,0,0.15)] transition-shadow hover:shadow-[0_12px_32px_rgba(255,216,77,0.3)] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center text-center"
          >
            Book Your Demo Call
          </motion.a>

        </div>
      </section>

      {/* SECTION 2 — SOCIAL PROOF */}
      {/* Background: #F8F8FB */}
      <section className="bg-[#F8F8FB] pt-[32px] md:pt-[44px] pb-[80px] px-6 md:px-12 flex flex-col items-center">
        <ScrollAnimate className="max-w-[1000px] mx-auto">
          
          {/* Section headline */}
          <h2 className="text-[28px] md:text-[42px] font-[850] text-[#1A1A2E] leading-tight text-center max-w-[760px] mx-auto mb-[40px] tracking-[-0.01em]">
            Real Results From Real Owners
          </h2>

          {/* Result cards Vertical Stack */}
          <div className="flex flex-col gap-[36px] w-full max-w-[500px] mx-auto mb-[44px]">
            {RESULT_CARDS.map((card) => {
              return (
                <div 
                  key={card.id} 
                  className="bg-white border border-[#E8E8F0] rounded-[32px] p-[28px] md:p-[36px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-center flex flex-col items-stretch"
                >
                  <div className="flex flex-col items-stretch">
                    
                    {/* Centered Avatar container with overlapping Badge */}
                    <div className="relative flex flex-col items-center mb-[24px]">
                      {card.imageUrl && (
                        <img 
                          src={card.imageUrl} 
                          alt={card.altText || card.name}
                          className="w-[120px] h-[120px] rounded-[24px] object-cover border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex-shrink-0"
                          style={card.objectPosition ? { objectPosition: card.objectPosition } : undefined}
                          referrerPolicy="no-referrer"
                        />
                      )}
                      
                      {/* Overlapping small pill badge in green accent with white text */}
                      <div className="absolute bottom-0 translate-y-1/2 bg-[#16A34A] text-white text-[10px] font-extrabold tracking-[0.14em] px-[14px] py-[6px] rounded-full shadow-md select-none uppercase">
                        {card.badge}
                      </div>
                    </div>

                    {/* Centered, bold, larger Name directly under the badge */}
                    <h4 className="font-[800] text-[22px] md:text-[24px] text-[#1A1A2E] text-center mt-[12px] mb-[12px]">
                      {card.name}
                    </h4>

                    {/* Centered thin horizontal divider */}
                    <div className="w-[60px] h-[1.5px] bg-[#E8E8F0] mx-auto mb-[24px]"></div>
                    
                    {/* Before state - muted gray */}
                    <div className="mb-[20px] text-left">
                      <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9090AA] mb-2">
                        BEFORE
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#6B6B80] leading-[1.65]">
                        {card.before}
                      </p>
                    </div>
                    
                    {/* After state with primary green left-border */}
                    <div className="border-l-3 border-[#16A34A] pl-[16px] text-left">
                      <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#16A34A] mb-2">
                        AFTER
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#1A1A2E] leading-[1.65] font-medium">
                        {card.after}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA under the Social grid */}
          <motion.a
            href="https://calendly.com/veomaz2/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).fbq('track', 'Lead')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto bg-[#FFD84D] text-[#1A1A2E] text-[16px] font-bold py-[18px] px-[52px] rounded-full shadow-[0_8px_28px_rgba(0,0,0,0.15)] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center text-center"
          >
            Book Your Demo Call
          </motion.a>

        </ScrollAnimate>
      </section>

      {/* SECTION 3 — PROBLEM SECTION */}
      {/* Background #0F0F1A */}
      <section className="bg-[#0F0F1A] text-white pt-[80px] pb-[80px] px-6 md:px-12 flex flex-col items-center">
        <ScrollAnimate className="max-w-[960px] mx-auto">
          
          {/* Section label pill - white/dark theme */}
          <div className="inline-flex items-center gap-2 bg-[#1A1A2E] border border-white/10 rounded-full py-[6px] px-[20px] mb-[20px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#9090AA]">
              THE REAL PROBLEM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
          </div>

          {/* Section headline */}
          <h2 className="text-[32px] md:text-[48px] font-[800] text-white leading-tight text-center mb-[44px]">
            Three Things Eating Your Time Every Single Month.
          </h2>

          {/* Stacked problem blocks */}
          <div className="flex flex-col gap-[40px] w-full max-w-[680px] text-center mb-[44px]">
            {PROBLEM_BLOCKS.map((block) => (
              <div key={block.id} className="flex flex-col items-center">
                <h3 className="font-bold text-[20px] text-white mb-3">
                  {block.subheadline}
                </h3>
                <p className="text-[17px] text-[#9090AA] leading-[1.8] text-center">
                  {block.bodyBefore}
                  <span className="text-[#16A34A] font-semibold">
                    {block.keyPhrase}
                  </span>
                  {block.bodyAfter}
                </p>
              </div>
            ))}
          </div>

          {/* Closing text */}
          <p className="text-[17px] text-[#9090AA] leading-[1.8] text-center max-w-[680px] mb-[44px] italic">
            These are not random problems. They happen every month because everything is manual. The moment you automate them, they stop.
          </p>

          {/* CTA at end of problems */}
          <motion.a
            href="https://calendly.com/veomaz2/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).fbq('track', 'Lead')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto bg-[#FFD84D] text-[#1A1A2E] text-[16px] font-bold py-[18px] px-[52px] rounded-full shadow-[0_8px_28px_rgba(0,0,0,0.15)] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center text-center"
          >
            Book Your Demo Call
          </motion.a>

        </ScrollAnimate>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      {/* Background #FFFFFF */}
      <section className="bg-[#FFFFFF] pt-[80px] pb-[80px] px-6 md:px-12 flex flex-col items-center">
        <ScrollAnimate className="max-w-[960px] mx-auto">
          
          {/* Section label pill */}
          <div className="inline-flex items-center gap-2 bg-[#F8F8FB] border border-[#E8E8F0] rounded-full py-[6px] px-[20px] mb-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#6B6B8A]">
              HOW IT WORKS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
          </div>

          {/* Headline */}
          <h2 className="text-[32px] md:text-[48px] font-[800] text-[#1A1A2E] leading-tight text-center max-w-[960px] mb-[44px]">
            Three Things That Run Automatically on WhatsApp. No New App for Anyone.
          </h2>

          {/* 3 stacked feature cards */}
          <div className="flex flex-col gap-[20px] w-full max-w-[800px] mb-[40px]">
            {FEATURE_CARDS.map((card) => (
              <div 
                key={card.id}
                className="bg-white border border-[#E8E8F0] rounded-[20px] p-[32px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-left flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Icon box top left in primary at 10% opacity */}
                <div className="w-[48px] h-[48px] rounded-xl bg-[#16A34A]/10 flex items-center justify-center flex-shrink-0">
                  {renderFeatureIcon(card.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[17px] text-[#4A4B65] leading-[1.8]">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Why this works block */}
          <div className="w-full max-w-[800px] bg-[#F8F8FF] border border-[#EEEDFC] rounded-[24px] p-[40px] text-left mb-[44px]">
            <h4 className="text-[20px] font-bold text-[#1A1A2E] mb-[20px]">
              Why this works when every other tool did not.
            </h4>
            <div className="space-y-[20px] text-[17px] text-[#4A4B65] leading-[1.8]">
              <p>
                Every app you have tried before — every property management platform — requires your tenants, brokers, and vendors to download something new. They never do. The tool sits unused. You go back to WhatsApp.
              </p>
              <p>
                Estate Desk does not ask anyone to change anything. Tenants keep using WhatsApp. Brokers keep using WhatsApp. Vendors keep using WhatsApp. We sit inside it and make the repetitive parts happen automatically.
              </p>
            </div>
          </div>

          {/* CTA at end of features */}
          <motion.a
            href="https://calendly.com/veomaz2/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).fbq('track', 'Lead')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto bg-[#FFD84D] text-[#1A1A2E] text-[16px] font-bold py-[18px] px-[52px] rounded-full shadow-[0_8px_28px_rgba(0,0,0,0.15)] active:scale-[0.98] cursor-pointer animate-pulse inline-flex items-center justify-center text-center"
          >
            Book Your Demo Call
          </motion.a>

        </ScrollAnimate>
      </section>

      {/* SECTION 5 — FAQ SECTION */}
      {/* Background #F8F8FB */}
      <section className="bg-[#F8F8FB] pt-[80px] pb-[80px] px-6 md:px-12 flex flex-col items-center">
        <ScrollAnimate className="w-full max-w-[860px] mx-auto">
          
          {/* Label pill */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8E8F0] rounded-full py-[6px] px-[20px] mb-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#6B6B8A]">
              QUESTIONS ANSWERED
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
          </div>

          <h2 className="text-[32px] md:text-[48px] font-[800] text-[#1A1A2E] leading-tight text-center mb-[44px]">
            Frequently Asked Questions
          </h2>

          {/* FAQ Accordion container */}
          <div className="w-full space-y-[12px] text-left">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between text-left py-6 px-7 text-[#1A1A2E] font-semibold text-[17px] focus:outline-none cursor-pointer hover:bg-slate-50/50"
                  >
                    <span>{faq.question}</span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300">
                      {isOpen ? (
                        <span className="text-xl font-bold text-[#6B6B8A] leading-none">-</span>
                      ) : (
                        <span className="text-xl font-bold text-[#6B6B8A] leading-none">+</span>
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-7 pb-6 text-[16px] text-[#4A4B65] leading-[1.8] border-t border-[#F8F8FB] pt-[16px]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </ScrollAnimate>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      {/* Background #FFFFFF */}
      <section className="bg-[#FFFFFF] pt-[80px] pb-[110px] px-6 md:px-12 flex flex-col items-center">
        <ScrollAnimate className="max-w-[960px] mx-auto text-center">
          
          {/* Subheading stamp */}
          <div className="inline-flex items-center gap-1 bg-[#16A34A]/10 text-[#16A34A] py-1.5 px-4 rounded-full font-bold uppercase text-[10px] tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> ESTABLISHED PORTFOLIO AUTOMATION
          </div>

          <h2 className="text-[32px] md:text-[56px] font-[800] leading-tight text-[#1A1A2E] mb-[8px] text-center max-w-[960px]">
            Your Properties Already Run on WhatsApp.
          </h2>

          <h2 className="text-[32px] md:text-[56px] font-[800] leading-tight text-[#16A34A] mb-[28px] text-center max-w-[960px]">
            Now Let Them Run Themselves.
          </h2>

          <p className="text-[17px] text-[#4A4B65] leading-[1.8] text-center max-w-[600px] mb-[44px]">
            Broker queries answered in 30 seconds. Rent collected without a single chase. Vendors accountable without a phone call. All on the WhatsApp your tenants and brokers already use.
          </p>

          {/* Book Demo Button */}
          <motion.a
            href="https://calendly.com/veomaz2/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).fbq('track', 'Lead')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto bg-[#FFD84D] text-[#1A1A2E] text-[16px] font-bold py-[18px] px-[52px] rounded-full shadow-[0_8px_28px_rgba(0,0,0,0.15)] mb-3 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center text-center"
          >
            Book Your Demo Call
          </motion.a>

          {/* Small print */}
          <p className="text-[14px] text-[#9090AA] italic max-w-[600px] mt-4">
            We show you exactly how it works for your specific properties. 30 minutes.
          </p>

        </ScrollAnimate>
      </section>

      {/* STICKY FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 py-3.5 md:py-4 bg-white/97 backdrop-blur-md border-t-2 border-[#E8E8F0] shadow-[0_-4px_24px_rgba(0,0,0,0.08)] px-4 md:px-[40px] flex items-center justify-between z-40">
        
        {/* Left Timer section */}
        <div className="hidden md:flex items-center gap-3">
          {/* Zap Lightning icon block */}
          <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full bg-[#16A34A]/15 flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-[#16A34A] fill-[#16A34A]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[#16A34A]">
              <Clock className="w-4 h-4" />
              <span className="font-mono text-[18px] md:text-[22px] font-bold tracking-tight">
                {formatTimer(secondsLeft)}
              </span>
            </div>
            <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#9090AA] mt-0.5">
              LIMITED-TIME OFFER
            </div>
          </div>
        </div>

        {/* Right CTA Button Section */}
        <div className="w-full md:w-auto">
          <motion.a
            href="https://calendly.com/veomaz2/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).fbq('track', 'Lead')}
            whileHover={{ scale: 1.03 }}
            className="w-full md:w-auto bg-[#FFD84D] rounded-[999px] py-4 md:py-[20px] px-6 md:px-[64px] transition-all cursor-pointer flex items-center justify-center text-center shadow-[0_0_24px_rgba(255,216,77,0.45)] hover:shadow-[0_0_32px_rgba(255,216,77,0.6)] font-bold text-[15px] md:text-[18px] text-[#1A1A2E] leading-tight"
          >
            Book Your Demo Call
          </motion.a>
        </div>

      </footer>

    </div>
  );
}
