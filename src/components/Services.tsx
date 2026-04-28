const services = [
  {
    title: "Website Development",
    description:
      "Build modern, responsive websites tailored to your business needs using the latest technologies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 14h4" strokeLinecap="round" />
      </svg>
    ),
    size: "lg", // spans 2 cols
    accent: "from-purple-500/20 to-violet-600/10",
    glow: "rgba(168,85,247,0.25)",
  },
  {
    title: "UI/UX Redesign",
    description:
      "Improve existing websites with better design, layout, and user experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
      </svg>
    ),
    size: "sm",
    accent: "from-indigo-500/20 to-purple-600/10",
    glow: "rgba(129,140,248,0.2)",
  },
  {
    title: "Custom Business Solutions",
    description:
      "Develop simple web systems like dashboards, order tracking, or CRM solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    size: "sm",
    accent: "from-violet-500/20 to-indigo-600/10",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    title: "Landing Page Development",
    description:
      "Create high-converting landing pages for products and services that drive real results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M9 13h6M9 17h4" strokeLinecap="round" />
      </svg>
    ),
    size: "lg",
    accent: "from-fuchsia-500/20 to-purple-600/10",
    glow: "rgba(192,132,252,0.22)",
  },
  {
    title: "Ad Video Creation",
    description:
      "Design engaging promotional videos and reels for marketing campaigns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="4" width="16" height="16" rx="2" />
        <path d="M22 8l-4 4 4 4V8z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 10l4 2-4 2v-4z" fill="currentColor" strokeWidth={0} />
      </svg>
    ),
    size: "sm",
    accent: "from-purple-600/20 to-pink-500/10",
    glow: "rgba(168,85,247,0.18)",
  },
  {
    title: "Responsive Fixes",
    description:
      "Make websites fully mobile-friendly and optimized across all devices and screen sizes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" strokeLinecap="round" strokeWidth={2} />
        <path d="M9 6h6M9 10h4" strokeLinecap="round" />
      </svg>
    ),
    size: "sm",
    accent: "from-indigo-600/20 to-violet-500/10",
    glow: "rgba(129,140,248,0.2)",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#0F0B1E 0%,#07070F 40%,#0F0B1E 70%,#150D2E 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute top-[-15%] right-[-10%] w-[45vw] h-[45vw] rounded-full"
        style={{
          background: "radial-gradient(circle,rgba(139,92,246,0.14) 0%,transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] w-[40vw] h-[40vw] rounded-full"
        style={{
          background: "radial-gradient(circle,rgba(168,85,247,0.12) 0%,rgba(99,102,241,0.07) 40%,transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      <div className="relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 backdrop-blur-sm text-[0.7rem] font-bold tracking-[0.12em] uppercase text-purple-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_#a855f7]" />
            What I offer
          </div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white">
            My{" "}
            <span className="bg-linear-to-r from-purple-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              Services
            </span>
          </h2>

          <p className="text-slate-500 text-base max-w-4xl mx-auto leading-relaxed">
            I help businesses build modern websites, improve user experience,
            and create digital solutions that drive results.
          </p>

          <div className="mt-4 mx-auto w-20 h-0.5 rounded-full bg-linear-to-r from-purple-500 to-indigo-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
        </div>

        {/* ── Bento Grid ── */}
        {/*
          Row 1: [lg — Website Dev (col-span-2)] [sm — UI/UX] [sm — Business Sol]
          Row 2: [sm — Ad Video] [sm — Responsive] [lg — Landing Page (col-span-2)]
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">

          {/* ── Card 1: Website Development — LARGE (2 cols) ── */}
          <BentoCard service={services[0]} className="lg:col-span-2" large />

          {/* ── Card 2: UI/UX Redesign — small ── */}
          <BentoCard service={services[1]} />

          {/* ── Card 3: Business Solutions — small ── */}
          <BentoCard service={services[2]} />

          {/* ── Card 4: Ad Video — small ── */}
          <BentoCard service={services[4]} />

          {/* ── Card 5: Responsive Fixes — small ── */}
          <BentoCard service={services[5]} />

          {/* ── Card 6: Landing Page — LARGE (2 cols) ── */}
          <BentoCard service={services[3]} className="lg:col-span-2" large />

        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Have a project in mind? Let's build it together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              text-[0.9rem] font-semibold text-white
              bg-linear-to-br from-purple-600 to-violet-700
              shadow-[0_0_20px_rgba(147,51,234,0.35)]
              hover:shadow-[0_0_32px_rgba(168,85,247,0.55)]
              hover:-translate-y-0.5 hover:scale-[1.02]
              transition-all duration-200"
          >
            Let's Work Together ✦
          </a>
        </div>

      </div>
    </section>
  );
};

/* ── Reusable Bento Card ── */
const BentoCard = ({
  service,
  className = "",
  large = false,
}: {
  service: (typeof services)[0];
  className?: string;
  large?: boolean;
}) => (
  <div
    className={`group relative flex flex-col rounded-2xl border border-purple-500/15
      bg-white/3 backdrop-blur-sm overflow-hidden
      hover:border-purple-500/40 hover:bg-white/4
      hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]
      transition-all duration-300
      ${large ? "p-7 lg:p-8" : "p-6"}
      ${className}`}
  >
    {/* Top gradient accent bar */}
    <div
      className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background:
          "linear-gradient(90deg,transparent,rgba(168,85,247,0.7),transparent)",
      }}
    />

    {/* Radial glow on hover */}
    <div
      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
      style={{
        background: `radial-gradient(ellipse at top left, ${service.glow} 0%, transparent 60%)`,
      }}
    />

    {/* Icon */}
    <div
      className={`relative z-10 flex items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400
        group-hover:bg-purple-500/18 group-hover:border-purple-500/40
        group-hover:text-purple-300 group-hover:shadow-[0_0_18px_rgba(168,85,247,0.2)]
        transition-all duration-300 mb-5 shrink-0
        ${large ? "w-14 h-14" : "w-12 h-12"}`}
    >
      {service.icon}
    </div>

    {/* Title */}
    <h3
      className={`relative z-10 font-bold text-white mb-3
        group-hover:text-purple-300 transition-colors duration-300
        ${large ? "text-xl lg:text-2xl" : "text-lg"}`}
    >
      {service.title}
    </h3>

    {/* Description */}
    <p
      className={`relative z-10 text-slate-500 leading-relaxed
        group-hover:text-slate-400 transition-colors duration-300
        ${large ? "text-[0.95rem] max-w-md" : "text-[0.88rem]"}`}
    >
      {service.description}
    </p>

    {/* Corner decoration */}
    <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <div
        className="absolute bottom-0 right-0 w-full h-full rounded-tl-full"
        style={{
          background: `radial-gradient(circle at bottom right, ${service.glow} 0%, transparent 70%)`,
        }}
      />
    </div>
  </div>
);

export default Services;