import { motion } from 'motion/react';
import { Menu, X, MessageCircle, Users, Target, ChartBar, ArrowUpRight, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

const PARTNER_LOGOS = [
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103364622_16.png?alt=media&token=bdad3a1d-d6c9-4651-baeb-d87da85aff46",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103181779_12.png?alt=media&token=58ed150b-ed7b-44bf-88d9-44895d9c898f",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103303494_14.png?alt=media&token=6dba1966-33ad-4829-a795-e660e56a0452",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767102996183_7.png?alt=media&token=65a4d705-6e82-4e3d-b6ad-89c70e9f58f0",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103618669_Copy%20of%20HALO%20HRDKU%20(1).png?alt=media&token=4d3e7dff-7457-4f05-9a13-9e72a441451f",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103151396_11.png?alt=media&token=da72ca09-5af4-4597-859f-e7eba993edbb",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767095299157_1.png?alt=media&token=88a6b377-18ed-4dca-bdfa-4490cdb1575c",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103243413_13.png?alt=media&token=14caf60b-337d-4e91-8399-942d3d193a13",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103336409_15.png?alt=media&token=2b4e1c18-3e5f-4f26-9c31-13d16bfb9f73",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767106917363_ORI%20DP%20WA%20(5).png?alt=media&token=65520ccd-90c4-4596-bde7-2a8ba7d84df3",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767102951788_6.png?alt=media&token=e6118e9c-a5f4-4a3f-b056-38ae263a08e7",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103078693_9.png?alt=media&token=93a68604-d416-4b4a-a4e0-1a3e47ecc96e",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767102790104_3.png?alt=media&token=1188a8a9-42b5-46ff-a92a-18d0f47afadb",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103042295_8.png?alt=media&token=eb1abe05-7e63-40c1-934a-b69e0100b1eb",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767102815912_4.png?alt=media&token=5199d00a-7f36-4a72-ade4-0b27b6f2790b",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767102757398_2.png?alt=media&token=43f00cb5-8ed9-437f-8d1e-f2892f42f8a8",
  "https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1767103659512_Copy%20of%20HALO%20HRDKU%20(2).png?alt=media&token=79d44723-754b-4ba6-82f9-f53227365169"
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-black bg-[#faf9f6] min-h-screen selection:bg-gray-200 overflow-x-hidden">
      
      {/* 1. FLOATING PILL NAVBAR */}
      <div className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? 'top-0 px-0' : 'top-6 px-4'}`}>
        <nav className={`w-full bg-white/70 backdrop-blur-md border border-white/20 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'max-w-full rounded-none px-6 md:px-12 py-4 shadow-md bg-white/90' : 'max-w-4xl rounded-full px-6 py-3 shadow-sm'}`}>
          <a href="#" className="font-bold text-xl tracking-tight">M. Izza</a>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#ecosystem" className="hover:text-black transition-colors">Ecosystem</a>
            <a href="#experience" className="hover:text-black transition-colors">Journey</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
          </div>

          <a href="https://wa.link/l0jlia" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center justify-center px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors">
            Let's Connect ↗
          </a>

          <button 
            className="md:hidden p-1 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`fixed left-0 right-0 z-40 px-4 md:hidden transition-all duration-300 ${isScrolled ? 'top-20' : 'top-24'}`}>
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 flex flex-col gap-6 text-center">
                <a href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold text-lg hover:text-black transition-colors">Ecosystem</a>
                <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold text-lg hover:text-black transition-colors">Journey</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold text-lg hover:text-black transition-colors">About</a>
                <a href="https://wa.link/l0jlia" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 bg-black text-white rounded-full font-semibold mx-auto mt-2">Let's Connect ↗</a>
            </div>
        </div>
      )}

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative min-h-[85vh] md:min-h-[95vh] flex flex-col justify-end pt-40 md:pt-48 overflow-hidden mx-auto max-w-[1440px]">
            {/* Massive Name (Behind Image) */}
            <div className="absolute bottom-[10%] md:bottom-[8%] w-full flex justify-center z-0 left-0 right-0 pointer-events-none">
                <FadeIn delay={0.1} className="relative flex justify-center w-full">
                    <h1 className="text-[18vw] md:text-[11vw] font-black tracking-tighter text-black leading-none whitespace-nowrap opacity-95 text-center">
                        Mohamad<br className="md:hidden"/> <span className="hidden md:inline"> </span>Izza
                    </h1>
                </FadeIn>
            </div>

            {/* Portrait Image (Middle) */}
            <FadeIn delay={0.3} className="relative z-10 w-full max-w-5xl md:max-w-7xl mx-auto flex justify-center items-end h-[65vh] md:h-[90vh] pointer-events-none">
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/studio-299688656-32cdd.firebasestorage.app/o/media%2F1777796396446_M-IZZA.WEB.png?alt=media&token=26a0770a-1af9-476b-a9b6-a5f598ffd902" 
                    alt="Mohamad Izza" 
                    className="w-full h-full object-contain object-bottom scale-110 md:scale-125 origin-bottom"
                    referrerPolicy="no-referrer"
                    draggable="false"
                />
            </FadeIn>

            {/* Name & Handwritten Text (Front) */}
            <div className="absolute bottom-[10%] md:bottom-[8%] w-full flex justify-center z-20 left-0 right-0 pointer-events-none">
                <FadeIn delay={0.2} className="relative flex justify-center w-full">
                    <h1 
                        className="text-[18vw] md:text-[11vw] font-black tracking-tighter text-black leading-none whitespace-nowrap text-center relative"
                        style={{
                            textShadow: '0 0 30px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 1)'
                        }}
                    >
                        {/* Handwritten Text (Straight, aligned to the M) */}
                        <div className="absolute -top-[12vw] md:-top-[6vw] xl:-top-[5vw] left-0 z-30 font-handwriting text-5xl md:text-6xl xl:text-7xl text-black tracking-normal normal-case">
                            hi, i'm
                        </div>
                        Mohamad<br className="md:hidden"/> <span className="hidden md:inline"> </span>Izza
                    </h1>
                </FadeIn>
            </div>
        </section>

        {/* Hero Sub-headline */}
        <section className="bg-[#faf9f6] px-6 py-4 md:py-8 relative z-20 text-center">
            <FadeIn delay={0.4}>
                <div className="flex justify-center mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/50 text-green-800 text-xs md:text-sm font-bold tracking-widest border border-green-200">
                        <span className="text-[10px]">🟢</span> HUMAN CAPITAL COACH & HR PARTNER
                    </span>
                </div>
                <p className="text-[#555555] text-lg md:text-xl leading-relaxed tracking-tight font-medium max-w-3xl mx-auto px-4 md:px-0">
                    Founder & CEO of HRDKU.COM, TALENTEST.ID, and KIPIAI.ID. Dedicated to helping business owners scale through professional, automated, and end-to-end HR management ecosystems.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                    <a href="https://wa.link/l0jlia" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
                        Discuss Collaboration
                    </a>
                    <a href="https://www.linkedin.com/in/mohamad-izza-8ab67766/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-gray-800 border border-gray-200 px-6 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-all duration-300">
                        <Linkedin size={20} />
                        LinkedIn Profile
                    </a>
                </div>
            </FadeIn>
        </section>

        {/* 3. SOCIAL PROOF (Infinite Ticker) */}
        <section className="py-12 md:py-16 overflow-hidden">
          <div className="relative w-full flex overflow-hidden">
            <div className="flex w-max animate-marquee space-x-12 md:space-x-24 px-6 md:px-12 items-center hover:animation-pause">
               {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
                <span key={i} className="flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={src} 
                    alt={`Partner Logo ${i}`} 
                    className="h-12 md:h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 outline-none transition-all duration-300" 
                  />
                </span>
               ))}
            </div>
          </div>
        </section>

        {/* 4. THE ECOSYSTEM (Themed Bento Grid) */}
        <section id="ecosystem" className="py-24 px-6 max-w-7xl mx-auto">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">The Ecosystem</h2>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* Card 1: HRDKU */}
                <FadeIn delay={0.1}>
                    <div className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden cursor-pointer min-h-[320px] flex flex-col justify-between">
                        {/* Gradient Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mt-20 -mr-20 z-0 group-hover:scale-110 transition-transform duration-500"></div>
                        
                        <div className="relative z-10 flex-grow">
                            <span className="text-[10px] tracking-widest font-bold text-gray-400 mb-4 block uppercase p-0">CORE SERVICE</span>
                            <div className="w-14 h-14 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <Users size={28} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mt-6 tracking-tight">HRDKU.COM</h3>
                            <p className="text-gray-500 leading-relaxed mt-3 font-medium text-base">
                                End-to-End HR Managed Service for growing companies.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100/50 relative z-10 block">
                            <a href="https://hrdku.com/" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 text-sm font-bold text-gray-800 transition-all duration-300 group-hover/btn:gap-3 hover:text-blue-600">
                                Explore HRDKU <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </FadeIn>

                {/* Card 2: TALENTEST */}
                <FadeIn delay={0.2}>
                    <div className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden cursor-pointer min-h-[320px] flex flex-col justify-between">
                        {/* Gradient Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mt-20 -mr-20 z-0 group-hover:scale-110 transition-transform duration-500"></div>
                        
                        <div className="relative z-10 flex-grow">
                            <span className="text-[10px] tracking-widest font-bold text-gray-400 mb-4 block uppercase p-0">ASSESSMENT</span>
                            <div className="w-14 h-14 bg-purple-600/10 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mt-6 tracking-tight">TALENTEST.ID</h3>
                            <p className="text-gray-500 leading-relaxed mt-3 font-medium text-base">
                                Integrated Online Psychotest Platform for precise recruitment.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100/50 relative z-10 block">
                            <a href="https://talentest.id/" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 text-sm font-bold text-gray-800 transition-all duration-300 group-hover/btn:gap-3 hover:text-purple-600">
                                Explore Talentest <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </FadeIn>

                {/* Card 3: KIPIAI */}
                <FadeIn delay={0.3}>
                    <div className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden cursor-pointer min-h-[320px] flex flex-col justify-between">
                        {/* Gradient Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mt-20 -mr-20 z-0 group-hover:scale-110 transition-transform duration-500"></div>
                        
                        <div className="relative z-10 flex-grow">
                            <span className="text-[10px] tracking-widest font-bold text-gray-400 mb-4 block uppercase p-0">ANALYTICS</span>
                            <div className="w-14 h-14 bg-emerald-600/10 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                                <ChartBar size={28} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mt-6 tracking-tight">KIPIAI.ID</h3>
                            <p className="text-gray-500 leading-relaxed mt-3 font-medium text-base">
                                Performance Monitoring App, KBO, & KPI Dashboard.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100/50 relative z-10 block">
                            <a href="https://kipiai.id/" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 text-sm font-bold text-gray-800 transition-all duration-300 group-hover/btn:gap-3 hover:text-emerald-600">
                                Explore Kipiai <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* 5. EXECUTIVE TRACK RECORD (Centralized Timeline) */}
        <section id="experience" className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-center text-gray-900">Leadership Journey</h2>
              <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg">
                  A decade of driving human capital transformation across national retail, telco giants, and tech ecosystems.
              </p>
            </FadeIn>

            <div className="relative border-l-2 border-gray-100 md:ml-6 ml-4 space-y-8 md:space-y-12 pb-8">
                {/* Item 1 */}
                <FadeIn delay={0.1} className="relative pl-8 md:pl-12">
                    {/* Node */}
                    <div className="absolute top-6 md:top-8 -left-[9px] w-4 h-4 bg-gray-900 rounded-full ring-4 ring-gray-50" />
                    
                    <div className="group hover:bg-gray-50 hover:translate-x-2 transition-all duration-300 rounded-2xl p-6 md:p-8 border border-transparent hover:border-gray-100">
                        <div className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Aug 2023 - Present</div>
                        <h3 className="text-2xl font-bold text-gray-900">Founder & CEO</h3>
                        <p className="text-lg font-medium text-gray-700">PT. HRDKU REKSA TALENTA</p>
                        <p className="text-gray-500 mt-2 leading-relaxed">Providing strategic, financial, and operational leadership to build scalable B2B HR solutions.</p>
                    </div>
                </FadeIn>

                {/* Item 2 */}
                <FadeIn delay={0.2} className="relative pl-8 md:pl-12">
                    <div className="absolute top-6 md:top-8 -left-[9px] w-4 h-4 bg-gray-900 rounded-full ring-4 ring-gray-50" />
                    
                    <div className="group hover:bg-gray-50 hover:translate-x-2 transition-all duration-300 rounded-2xl p-6 md:p-8 border border-transparent hover:border-gray-100">
                        <div className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">May 2020 - Nov 2023</div>
                        <h3 className="text-2xl font-bold text-gray-900">Group Head Human Capital & Corporate Affairs</h3>
                        <p className="text-lg font-medium text-gray-700">Topsell Group</p>
                        <p className="text-gray-500 mt-2 leading-relaxed">Directed end-to-end HC functions and spearheaded corporate strategic affairs for the entire group.</p>
                    </div>
                </FadeIn>

                {/* Item 3 */}
                <FadeIn delay={0.3} className="relative pl-8 md:pl-12">
                    <div className="absolute top-6 md:top-8 -left-[9px] w-4 h-4 bg-gray-900 rounded-full ring-4 ring-gray-50" />
                    
                    <div className="group hover:bg-gray-50 hover:translate-x-2 transition-all duration-300 rounded-2xl p-6 md:p-8 border border-transparent hover:border-gray-100">
                        <div className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Jan 2019 - May 2020</div>
                        <h3 className="text-2xl font-bold text-gray-900">Senior Manager Training & Development</h3>
                        <p className="text-lg font-medium text-gray-700">Trans Retail Indonesia (CT Corp)</p>
                        <p className="text-gray-500 mt-2 leading-relaxed">Led digital transformation in Learning & Development and executed nationwide learning strategies.</p>
                    </div>
                </FadeIn>

                {/* Item 4 */}
                <FadeIn delay={0.4} className="relative pl-8 md:pl-12">
                    <div className="absolute top-6 md:top-8 -left-[9px] w-4 h-4 bg-gray-900 rounded-full ring-4 ring-gray-50" />
                    
                    <div className="group hover:bg-gray-50 hover:translate-x-2 transition-all duration-300 rounded-2xl p-6 md:p-8 border border-transparent hover:border-gray-100">
                        <div className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Dec 2014 - Jan 2019</div>
                        <h3 className="text-2xl font-bold text-gray-900">Corporate Training Manager</h3>
                        <p className="text-lg font-medium text-gray-700">First Media Business (Lippo Group)</p>
                        <p className="text-gray-500 mt-2 leading-relaxed">Developed and monitored organizational training and leadership development education.</p>
                    </div>
                </FadeIn>
            </div>
          </div>
        </section>

        {/* 5.5. PHILOSOPHY / ABOUT */}
        <section id="about" className="py-24 md:py-32 px-6 relative bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <FadeIn>
                    <span className="text-sm tracking-[0.2em] font-bold text-gray-400 uppercase block mb-6">
                        THE PHILOSOPHY
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight max-w-4xl mx-auto mb-10 italic">
                        "People-transformation is the biggest purpose in my life."
                    </h2>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-6">
                        For me, being a Coach is more than a profession—it is a life calling. My greatest reward is helping leaders grow with a positive mindset, provoking thought to find meaning in their business journey, and accompanying them in overcoming day-to-day challenges.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-10">
                        Backed by extensive experience in Human Capital General Management—spanning recruitment, performance management, learning & development, and organizational design—my mission is simple: <span className="font-bold text-gray-800">to transform human potential into the primary driver of your business growth.</span>
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="font-handwriting text-4xl text-gray-800 mt-8">
                        - Mohamad Izza
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* 6. CONTACT / FOOTER */}
        <section id="contact" className="pt-24 md:pt-32 pb-12 px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
          <FadeIn className="w-full flex flex-col items-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-6 leading-tight text-black">
                Let's Build a<br/>Super Team.
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 font-medium">
              Available for media features, podcast interviews, and HR consulting.
            </p>
            
            <a href="https://wa.link/l0jlia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-10 py-5 bg-black text-white text-lg rounded-full font-bold hover:scale-105 hover:bg-gray-900 shadow-xl shadow-black/20 hover:shadow-black/40 transition-all duration-300 mb-32 group ring-4 ring-black/5 hover:ring-black/10">
              <MessageCircle size={24} className="group-hover:text-green-400 transition-colors" />
              <span>WhatsApp Me</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4 font-medium">
            <p>© 2026 Mohamad Ainul Izza. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="https://www.linkedin.com/in/mohamad-izza-8ab67766/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
               <a href="https://www.instagram.com/mohamadizza_hrdku/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
               <a href="https://www.threads.com/@mohamadizza_hrdku/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Threads</a>
            </div>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}

