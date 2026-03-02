/*
 * Sky Walker — Home Page
 * Design: "Emerald Editorial" — Asymmetric editorial layout, magazine-inspired
 * Sections: Nav → Hero → About → Services (Massage/Salon) → Multi-Business → Company Info → Footer
 * No contact form per client instruction
 */

import { useState, useEffect, useRef } from "react";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/82o4WBfT0JfZRqDOwlunue/sandbox/KWAum8ZZJZENIGyLHfEWtC-img-1_1772148840000_na1fn_c2t5d2Fsa2VyLWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODJvNFdCZlQwSmZaUnFET3dsdW51ZS9zYW5kYm94L0tXQXVtOFpaSlpFTklHeUxIZkVXdEMtaW1nLTFfMTc3MjE0ODg0MDAwMF9uYTFmbl9jMnQ1ZDJGc2EyVnlMV2hsY204LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MG4R1Qzu5xqu4zWqbMofVclNDTEG74ejbmxmz1OxD4mjiVDMkydNUSSmGinHTtrBrIunLfq8FUzcnAOpEUAQ04GCZJ5UUEZy1~kZc7BPj5WCRdoPRpoPm2lLsxTW0nNpfQ7J-UTbXzL6eSlUI2kyMv8puvc1aZ-u5kvcLcIuV~wWlVzkc3gjQN47krojDoWPfY99Yn36BgPyY7qvm7rxmIdfU9QPZ8uRFeRSyGDcXc5HRQnK-I2SguuoxZiqbGHqN-YWine0fYlD6Dz9j0~xRtalZp-rbLaHaYw3w-bshYNSequHeefTqSX1S2vqYaY7ug0WcWQUwYFQKJRBAuDi~A__";
const BIZ_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/82o4WBfT0JfZRqDOwlunue/sandbox/KWAum8ZZJZENIGyLHfEWtC-img-2_1772148845000_na1fn_c2t5d2Fsa2VyLWJ1c2luZXNz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODJvNFdCZlQwSmZaUnFET3dsdW51ZS9zYW5kYm94L0tXQXVtOFpaSlpFTklHeUxIZkVXdEMtaW1nLTJfMTc3MjE0ODg0NTAwMF9uYTFmbl9jMnQ1ZDJGc2EyVnlMV0oxYzJsdVpYTnouanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vAT78ZUHo4ro1ygDvtkYKIRS0fvwhLWZ64baFPZTEXHyAIzMbuC55SU-SrNrPbQ8xyiXN19fIY0s3HiN~vckRb~Jijv3epXjf0tjkNICOVG83tpw89phncjIwACJylBPU-okmR1eEWwdaE4V3TezUjjIL2XPc68XbbuFyJX1oTOgA4At8Avkvrge~8mAn6TniiF60aUu9xpJgLCHD2kyJcWDZXMUxehlCDY6mhlssuZifla4J2D96Ji9QOTVmMPLr-5LFga4qrfKFBDIAfpXAtRqgujXcwtDR5wlsr4GBgGDkYe-KkZLmXmDcTFD5FCHo9QXhrM0KKSWgOt8MlvFMQ__";
const SEMINAR_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/82o4WBfT0JfZRqDOwlunue/sandbox/KWAum8ZZJZENIGyLHfEWtC-img-3_1772148849000_na1fn_c2t5d2Fsa2VyLXNlbWluYXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODJvNFdCZlQwSmZaUnFET3dsdW51ZS9zYW5kYm94L0tXQXVtOFpaSlpFTklHeUxIZkVXdEMtaW1nLTNfMTc3MjE0ODg0OTAwMF9uYTFmbl9jMnQ1ZDJGc2EyVnlMWE5sYldsdVlYSS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dpe09yuxekkTsXHmrUkV0RItcQeUzLIRkEBCLym8RH3wna3jZGm9fLjow-GMuhN76QyC66T9zHoa5xyODDA7VkfzX4EcdrudtDDC5cifKFY44WG-tOqyJ80aychmqJulrMW3LRqaLof~KG8vFsX7XCYtcz6xniR9eg0MpmdguwC6CFECs4vIOiI~qCsx1W-1CWDssnPEYvC12Akmyl1DEbZ~JmZ~MOJZgGUOMTKRTnZa37MT45oqJVOvi0vWUqZyMrQ0XgD5CfmlxCa6ISDOYe49wQMPsuDoQWqijLafAmV1kVYzYguk66xjZqeWgJYJessWbQM~9SaO~QMju2Fikg__";

// Intersection Observer hook for scroll animations
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#services", label: "SERVICES" },
    { href: "#business", label: "BUSINESS" },
    { href: "#company", label: "COMPANY" },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>

      {/* ===== NAVIGATION ===== */}
      <nav
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(6,95,70,0.12)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(6,95,70,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-sm flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #065F46, #047857)" }}
            >
              <span className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>SW</span>
            </div>
            <div>
              <div className="text-sm font-bold tracking-wider" style={{ color: "#065F46" }}>Sky Walker</div>
              <div className="text-xs text-stone-400 tracking-widest">株式会社</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.2em] text-stone-600 hover:text-emerald-800 transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "#065F46" }}
                />
              </a>
            ))}
            <a
              href="#company"
              className="px-5 py-2.5 text-xs font-medium tracking-widest text-white rounded-sm transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #065F46, #047857)" }}
            >
              会社概要
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className="h-px bg-stone-700 transition-all duration-300"
                style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }}
              />
              <span
                className="h-px bg-stone-700 transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="h-px bg-stone-700 transition-all duration-300"
                style={{ transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-widest text-stone-700 hover:text-emerald-800"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section
        id="top"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#F8F5F0" }}
      >
        {/* Background image — right side */}
        <div
          className="absolute inset-0 md:left-[45%]"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #F8F5F0 0%, #F8F5F0 20%, rgba(248,245,240,0.6) 60%, transparent 100%)",
            }}
          />
        </div>

        {/* Mobile overlay */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "rgba(248,245,240,0.82)" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-xl">
            <div className="animate-fade-up">
              <span
                className="inline-block text-xs font-bold tracking-[0.3em] mb-6"
                style={{ color: "#065F46" }}
              >
                RELAXATION &amp; INNOVATION
              </span>
              <div className="gold-line" />
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up-delay-1"
              style={{ color: "#1A1A1A", letterSpacing: "-0.02em" }}
            >
              心身の癒しと、<br />
              <span style={{ color: "#065F46" }}>事業の成長</span>を繋ぐ。
            </h1>

            <p
              className="text-base text-stone-600 mb-10 leading-relaxed animate-fade-up-delay-2"
              style={{ maxWidth: "440px" }}
            >
              治療院・サロンの経営から、インターネットマーケティング、
              ホームページ制作、経営者向けセミナーまで。
              個人と組織のポテンシャルを最大化するソリューションを提供します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <a
                href="#services"
                className="px-8 py-4 text-sm font-medium text-white text-center rounded-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #065F46, #047857)", boxShadow: "0 4px 20px rgba(6,95,70,0.3)" }}
              >
                サービスを見る
              </a>
              <a
                href="#company"
                className="px-8 py-4 text-sm font-medium text-stone-700 text-center rounded-sm border border-stone-300 bg-white hover:bg-stone-50 transition-all duration-300"
              >
                会社概要
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-stone-400">SCROLL</span>
          <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <span className="text-xs font-bold tracking-[0.3em] mb-4 block" style={{ color: "#065F46" }}>
                ABOUT US
              </span>
              <div className="gold-line" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1A1A1A", lineHeight: 1.4 }}>
                癒しとビジネスを、<br />ひとつの力に。
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                株式会社Sky Walkerは、治療院・サロンの経営を核に、健康食品・化粧品の販売、
                インターネットマーケティングのコンサルティング、ホームページ制作、
                そして経営者向けセミナーの開催まで、多角的なサービスを展開しています。
              </p>
              <p className="text-stone-600 leading-relaxed">
                「心身の癒しとビジネス成長をつなぐ」という理念のもと、
                個人の健康から組織の発展まで、一貫したクオリティでサポートします。
              </p>
            </FadeSection>

            <FadeSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "2009", label: "設立年", sub: "7月創業" },
                  { num: "5+", label: "事業領域", sub: "多角的展開" },
                  { num: "東京", label: "拠点", sub: "世田谷区" },
                  { num: "∞", label: "可能性", sub: "成長を支援" },
                ].map((stat) => (
                  <div
                    key={stat.num}
                    className="p-6 rounded-sm border border-stone-100 hover:border-emerald-200 transition-colors duration-300"
                    style={{ background: "#FAFAF8" }}
                  >
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#065F46" }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-sm font-medium text-stone-800">{stat.label}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ===== MAIN SERVICE: MASSAGE / SALON ===== */}
      <section id="services" className="py-24" style={{ background: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] mb-4 block" style={{ color: "#065F46" }}>
              MAIN SERVICE
            </span>
            <div className="gold-line" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1A1A1A" }}>
              治療院・サロンの経営
            </h2>
          </FadeSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <FadeSection className="order-2 md:order-1">
              <div className="relative">
                <div
                  className="rounded-sm overflow-hidden"
                  style={{ boxShadow: "0 20px 60px rgba(6,95,70,0.15)" }}
                >
                  <img
                    src={HERO_IMG}
                    alt="治療院・サロン"
                    className="w-full h-80 md:h-[480px] object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div
                  className="absolute -bottom-5 -right-5 px-6 py-4 rounded-sm"
                  style={{ background: "linear-gradient(135deg, #065F46, #047857)", boxShadow: "0 8px 30px rgba(6,95,70,0.3)" }}
                >
                  <div className="text-white text-xs tracking-widest font-medium">WELLNESS</div>
                  <div className="text-emerald-200 text-xs mt-0.5">プロの施術</div>
                </div>
              </div>
            </FadeSection>

            {/* Content */}
            <FadeSection delay={0.2} className="order-1 md:order-2">
              <div className="relative pl-0 md:pl-8">
                <span
                  className="text-8xl font-bold absolute -top-4 -left-4 select-none pointer-events-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: "rgba(6,95,70,0.06)" }}
                >
                  01
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "#1A1A1A", lineHeight: 1.5 }}>
                  日常に、プロの癒やしを。<br />
                  <span style={{ color: "#065F46" }}>出張型マッサージサービス</span>
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  整骨院や指圧マッサージ院での豊富な経験を持つ国家資格者が、
                  あなたのご自宅やオフィスへ直接伺います。
                  移動の負担なく、最もリラックスできる環境で最高の施術を提供します。
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { title: "有資格者による安心の施術", desc: "鍼灸・指圧のプロが担当します。" },
                    { title: "オーダーメイドケア", desc: "一人ひとりの症状に合わせた最適なアプローチ。" },
                    { title: "ご自宅・オフィスへ出張", desc: "移動不要で最高の施術をお届けします。" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(6,95,70,0.1)" }}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#065F46">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium text-stone-800">{item.title}：</span>
                        <span className="text-stone-600">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote
                  className="border-l-4 pl-5 py-3 italic text-sm text-stone-500"
                  style={{ borderColor: "#065F46", background: "rgba(6,95,70,0.03)" }}
                >
                  「サロンに行く時間がない、自宅でゆっくり受けたい」という多くのお客様にご利用いただいております。
                </blockquote>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ===== MULTI-BUSINESS SECTION ===== */}
      <section id="business" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] mb-4 block" style={{ color: "#065F46" }}>
              OUR BUSINESS
            </span>
            <div className="gold-line" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1A1A1A" }}>
              多角的なビジネスサポート
            </h2>
            <p className="text-stone-500 text-sm">
              健康からビジネスまで、一貫したクオリティで展開しています
            </p>
          </FadeSection>

          {/* Business cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: "02",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                iconBg: "rgba(6,95,70,0.08)",
                iconColor: "#065F46",
                title: "健康食品・基礎化粧品販売",
                desc: "内側からの美しさと健康を。厳選した健康食品や、プロユースの基礎化粧品を販売しています。",
              },
              {
                num: "03",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                iconBg: "rgba(29,78,216,0.08)",
                iconColor: "#1D4ED8",
                title: "マーケティングコンサル",
                desc: "実店舗経営の知見を活かしたインターネットマーケティング。集客からリピート率向上までトータルで支援します。",
              },
              {
                num: "04",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                iconBg: "rgba(180,83,9,0.08)",
                iconColor: "#B45309",
                title: "ホームページ制作",
                desc: "「成果につながる」デザインを。治療院やサロンに特化したWebサイト制作を行い、デジタルでの存在感を高めます。",
              },
              {
                num: "05",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                iconBg: "rgba(109,40,217,0.08)",
                iconColor: "#6D28D9",
                title: "経営者向けセミナー",
                desc: "次世代の店舗経営を担うリーダーの育成。実践的なマーケティング手法やマインドセットを伝えます。",
              },
            ].map((item) => (
              <FadeSection key={item.num} delay={0.1}>
                <div
                  className="p-8 rounded-sm border border-stone-100 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden group"
                  style={{ background: "#FAFAF8" }}
                >
                  <span
                    className="absolute top-4 right-4 text-5xl font-bold select-none"
                    style={{ fontFamily: "'Playfair Display', serif", color: "rgba(6,95,70,0.06)" }}
                  >
                    {item.num}
                  </span>
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                    style={{ background: item.iconBg, color: item.iconColor }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3" style={{ color: "#1A1A1A" }}>
                    {item.title}
                  </h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Seminar feature — full width with image */}
          <FadeSection>
            <div
              className="rounded-sm overflow-hidden grid md:grid-cols-2"
              style={{ boxShadow: "0 10px 40px rgba(6,95,70,0.12)" }}
            >
              <div className="relative h-64 md:h-auto">
                <img src={SEMINAR_IMG} alt="経営者向けセミナー" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "rgba(6,95,70,0.2)" }} />
              </div>
              <div className="emerald-gradient p-10 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.3em] text-emerald-300 mb-3">SEMINAR</span>
                <h3 className="text-2xl font-bold text-white mb-4">経営者向けセミナーの開催</h3>
                <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                  次世代の店舗経営を担うリーダーの育成を目的に、
                  実践的なマーケティング手法やマインドセット、
                  集客・リピート率向上のノウハウを体系的にお伝えします。
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-emerald-400" />
                  <span className="text-emerald-300 text-xs tracking-widest">BUSINESS GROWTH</span>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ===== MARKETING / CONSULTING FEATURE ===== */}
      <section className="py-24" style={{ background: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <div className="relative">
                <span
                  className="text-8xl font-bold absolute -top-4 -left-4 select-none pointer-events-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: "rgba(6,95,70,0.06)" }}
                >
                  03
                </span>
                <span className="text-xs font-bold tracking-[0.3em] mb-4 block" style={{ color: "#065F46" }}>
                  DIGITAL MARKETING
                </span>
                <div className="gold-line" />
                <h3 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "#1A1A1A", lineHeight: 1.5 }}>
                  インターネットマーケティング<br />
                  <span style={{ color: "#065F46" }}>コンサルティング</span>
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  実店舗経営で培ったリアルな知見と、最新のデジタルマーケティング手法を組み合わせ、
                  治療院・サロンの集客から顧客リピート率向上まで、トータルでサポートします。
                </p>
                <div className="space-y-3">
                  {[
                    "SEO対策・コンテンツマーケティング",
                    "SNS運用・広告戦略",
                    "顧客獲得・リピート率向上施策",
                    "データ分析・改善提案",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#065F46" }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            <FadeSection delay={0.2}>
              <div
                className="rounded-sm overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(6,95,70,0.15)" }}
              >
                <img
                  src={BIZ_IMG}
                  alt="マーケティングコンサルティング"
                  className="w-full h-80 md:h-[420px] object-cover"
                />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ===== COMPANY INFO ===== */}
      <section id="company" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] mb-4 block" style={{ color: "#065F46" }}>
              COMPANY
            </span>
            <div className="gold-line" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1A1A1A" }}>
              会社概要
            </h2>
          </FadeSection>

          <div className="grid md:grid-cols-2 gap-16">
            <FadeSection>
              <div className="space-y-0">
                {[
                  { label: "会社名", value: "株式会社Sky Walker" },
                  { label: "設立", value: "2009年7月" },
                  { label: "所在地", value: "東京都世田谷区祖師ヶ谷三丁目12-1" },
                  {
                    label: "事業内容",
                    value: (
                      <ul className="space-y-1">
                        <li>治療院・サロンの経営</li>
                        <li>健康食品・基礎化粧品の販売</li>
                        <li>インターネットマーケティングに関するコンサルティング業</li>
                        <li>ホームページ制作</li>
                        <li>経営者向けセミナーの開催</li>
                      </ul>
                    ),
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-3 gap-4 py-5 border-b border-stone-100"
                  >
                    <dt className="text-xs font-bold tracking-widest text-stone-400 col-span-1 pt-0.5">
                      {row.label}
                    </dt>
                    <dd className="text-stone-700 text-sm leading-relaxed col-span-2">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </div>
            </FadeSection>

            <FadeSection delay={0.2}>
              <div
                className="rounded-sm p-8 h-full"
                style={{
                  background: "linear-gradient(135deg, #065F46 0%, #047857 60%, #059669 100%)",
                  boxShadow: "0 20px 60px rgba(6,95,70,0.25)",
                }}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.15)" }}
                    >
                      <span className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>SW</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Sky Walker</div>
                      <div className="text-emerald-300 text-xs tracking-widest">株式会社</div>
                    </div>
                  </div>
                  <p className="text-emerald-100 text-sm leading-relaxed">
                    心身の癒しとビジネス成長をつなぐサポートを提供。
                    多角的なサービスで個人と組織を支援します。
                  </p>
                </div>

                <div className="border-t border-emerald-700 pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-emerald-100 text-sm">東京都世田谷区祖師ヶ谷三丁目12-1</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-emerald-100 text-sm">設立：2009年7月</span>
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-14 border-t border-stone-200" style={{ background: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #065F46, #047857)" }}
                >
                  <span className="text-white font-bold text-xs" style={{ fontFamily: "'Playfair Display', serif" }}>SW</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Sky Walker</div>
                  <div className="text-xs text-stone-500 tracking-widest">株式会社</div>
                </div>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">
                心身の癒しとビジネス成長をつなぐサポートを提供。<br />
                多角的なサービスで個人と組織を支援します。
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-stone-400 mb-4">SERVICES</h4>
              <ul className="space-y-2.5">
                {[
                  "治療院・サロンの経営",
                  "健康食品・基礎化粧品の販売",
                  "マーケティングコンサルティング",
                  "ホームページ制作",
                  "経営者向けセミナー",
                ].map((s) => (
                  <li key={s} className="text-stone-500 text-xs hover:text-stone-300 transition-colors cursor-default">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-stone-400 mb-4">COMPANY</h4>
              <div className="space-y-2.5 text-xs text-stone-500">
                <p>株式会社Sky Walker</p>
                <p>東京都世田谷区祖師ヶ谷三丁目12-1</p>
                <p>設立：2009年7月</p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-600 text-xs">
              © {new Date().getFullYear()} 株式会社Sky Walker. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              {["プライバシーポリシー", "特定商取引法に基づく表記"].map((link) => (
                <a key={link} href="#" className="text-stone-600 text-xs hover:text-stone-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
