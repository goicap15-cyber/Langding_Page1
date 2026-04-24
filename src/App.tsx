/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ArrowRight, 
  LayoutGrid, 
  ShieldCheck, 
  Layers, 
  Search, 
  Code, 
  Settings, 
  CheckCircle2, 
  Rocket 
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-void/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-xl font-bold font-display tracking-tight text-white flex items-center gap-2">
        <div className="w-2 h-2 bg-brand-green rounded-full shadow-[0_0_8px_#00FF41]" />
        ADMOB_LABS
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <a href="#strategy" className="text-xs uppercase tracking-widest font-display text-brand-green border-b-2 border-brand-green pb-1 font-bold">Strategy</a>
        <a href="#process" className="text-xs uppercase tracking-widest font-display text-zinc-400 hover:text-white transition-colors">Process</a>
        <a href="#showcase" className="text-xs uppercase tracking-widest font-display text-zinc-400 hover:text-white transition-colors">Showcase</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
          <Layers size={18} />
        </button>
        <button className="btn-primary py-2 px-6 text-xs">
          Launch Growth
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center">
    <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] -z-10" />

    <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-3 bg-white/5 border border-brand-cyan/20 px-4 py-2 rounded-full glass-card">
          <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
          <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-brand-cyan">AdMob Engineering Protocol Active</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight">
          Maximize Mobile Revenue With <span className="text-brand-green">Precision Data.</span>
        </h1>

        <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
          We don't just build apps; we engineer automated revenue ecosystems. Leverage deep AdMob integration, ASO dominance, and policy expertise to scale your digital assets globally.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="btn-primary flex items-center gap-2 group">
            Start Scaling <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary">
            View Data Models
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative perspective-1000"
      >
        <div className="relative z-10 filter drop-shadow-[0_20px_50px_rgba(0,255,65,0.15)]">
           <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3cTrQ_Gu1gxdQlndBTRUIsk4wfv3OUbQt11gnUZvSB-JxJchBpZ4vhzVfc1a1Z-n8dbmvw1YNaQJ3Dn-uNtGWBNZtj1v7cA-KVJegH4trOfX-jEqtR02fESH0qMnClrza0pJr5geZJS9UilN4HZw2fXTZMHuhvWS3fFELWRyDK1ArrcRk1CxB_oWYWCJ-vEa8GsBR5vRKQGSuCa-ETTmRd7u9da1lAZI-2Wf-ai6Dqvp4YlVwP7rBulh57HuXLnWElSYbbW24xg" 
            alt="Hero App Devices"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>

        {/* Floating Data Widget */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 bottom-20 bg-void/80 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center border border-brand-green/30">
            <TrendingUp size={24} className="text-brand-green" />
          </div>
          <div>
            <div className="text-[10px] font-display font-bold uppercase tracking-widest text-zinc-500 mb-0.5">eCPM Growth</div>
            <div className="text-2xl font-display font-bold text-white">+247.5%</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Strategy = () => {
  const cards = [
    {
      title: "AdMob Optimization",
      desc: "Precision targeting for Banner, Interstitial, and Reward ads to ensure maximum eCPM without compromising user retention metrics.",
      icon: <TrendingUp size={28} className="text-brand-cyan" />,
      color: "cyan"
    },
    {
      title: "Bypass & Policy",
      desc: "Expert-level navigation of Google Play and App Store policies. Risk mitigation strategies to keep your revenue streams flowing uninterrupted.",
      icon: <ShieldCheck size={28} className="text-brand-green" />,
      color: "green",
      offset: true
    },
    {
      title: "Mediation Setup",
      desc: "Automated waterfall management and bidding structures integrating top-tier networks to force competition for your inventory.",
      icon: <Layers size={28} className="text-brand-cyan" />,
      color: "cyan"
    }
  ];

  return (
    <section id="strategy" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16 space-y-4">
        <h2 className="text-4xl font-display font-bold text-white">Chiến lược tăng trưởng doanh thu</h2>
        <div className="h-0.5 w-48 bg-gradient-to-r from-brand-cyan to-transparent" />
        <p className="text-zinc-400 max-w-2xl font-sans">
          Data-driven architecture designed to bypass limitations and maximize every impression.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className={`glass-card p-8 group relative overflow-hidden ${card.offset ? 'md:-translate-y-6' : ''}`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-brand-${card.color}/5 blur-[50px] -z-10 transition-opacity opacity-0 group-hover:opacity-100`} />
            
            <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
              {card.icon}
            </div>
            
            <h3 className="text-2xl font-display font-semibold text-white mb-4">{card.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Phân tích thị trường & ASO",
      tag: "Đúng hướng từ khởi đầu",
      desc: "Nghiên cứu từ khóa trên Store trước khi code.",
      icon: <Search size={22} className="text-brand-green" />
    },
    {
      number: "02",
      title: "Phát triển App tối ưu",
      tag: "Chất lượng là nền tảng",
      desc: "Code sạch, nhẹ, chuẩn UI/UX.",
      icon: <Code size={22} className="text-brand-green" />
    },
    {
      number: "03",
      title: "Cấu hình AdMob chuyên sâu",
      tag: "Khai thác tối đa tiềm năng",
      desc: "Setup sơ đồ quảng cáo thông minh.",
      icon: <Settings size={22} className="text-brand-green" />
    },
    {
      number: "04",
      title: "Kiểm duyệt & Release",
      tag: "Về đích an toàn",
      desc: "Vượt qua các vòng kiểm duyệt khắt khe của Apple/Google.",
      icon: <CheckCircle2 size={22} className="text-brand-green" />
    },
    {
      number: "05",
      title: "Tối ưu hóa sau phát hành",
      tag: "Tăng trưởng không giới hạn",
      desc: "Theo dỏi báo cáo, đẩy mạnh doanh thu và cập nhật theo chính sách mới.",
      icon: <Rocket size={22} className="text-brand-green" />
    }
  ];

  return (
    <section id="process" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-display font-bold text-white mb-4">Lộ trình 5 bước đưa App lên đỉnh</h2>
        <div className="h-0.5 w-64 bg-gradient-to-r from-transparent via-brand-green to-transparent mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto relative space-y-8">
        <div className="absolute left-7 top-10 bottom-10 w-px bg-gradient-to-b from-brand-green/30 via-brand-green/5 to-brand-green/30 hidden md:block" />
        
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start md:items-center group"
          >
            <div className="w-14 h-14 shrink-0 rounded-xl bg-void border border-white/10 flex items-center justify-center z-10 group-hover:border-brand-green/50 transition-colors shadow-[0_0_15px_rgba(0,255,65,0.1)]">
              {step.icon}
            </div>
            
            <div className="glass-card p-6 md:p-8 flex-1 w-full hover:bg-white/[0.05]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-3">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-3">
                  <span className="text-xs bg-brand-green/10 text-brand-green px-2 py-0.5 rounded font-bold uppercase">{step.number}</span>
                  {step.title}
                </h3>
                <span className="text-[10px] font-display font-bold text-brand-green/60 uppercase tracking-widest italic">
                  "{step.tag}"
                </span>
              </div>
              <p className="text-zinc-400 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-void border-t border-zinc-800 py-16 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <div className="text-xl font-bold font-display tracking-tight text-white">ADMOB_LABS</div>
          <p className="text-sm text-zinc-500 font-display">© 2024 ADMOB_LABS. PRECISION ENGINEERING FOR PUBLISHERS.</p>
        </div>
        
        <div className="flex flex-col md:items-end justify-center">
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {["Privacy Protocol", "Service Terms", "API Documentation", "Support"].map((link) => (
              <a key={link} href="#" className="text-xs font-display uppercase tracking-widest text-zinc-500 hover:text-brand-cyan transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-void text-white selection:bg-brand-green/30">
      <Navbar />
      <Hero />
      <Strategy />
      <Process />
      <Footer />
    </div>
  );
}
