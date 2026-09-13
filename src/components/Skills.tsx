const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTMX", "Alpine.js", "JavaScript"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 14h4" strokeLinecap="round" />
      </svg>
    ),
    size: "lg", // spans 2 cols
    glow: "rgba(168,85,247,0.25)",
  },
  {
    category: "Backend",
    skills: ["Django", "PostgreSQL", "Raw SQL", "Node.js"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" strokeLinecap="round" />
      </svg>
    ),
    size: "sm",
    glow: "rgba(129,140,248,0.2)",
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "Vite", "Figma", "Vercel"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    size: "sm",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    category: "Design & Motion",
    skills: ["Framer Motion", "UI/UX Design", "Responsive Design", "Animation"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
      </svg>
    ),
    size: "lg",
    glow: "rgba(192,132,252,0.22)",
  },
];

/* ── Reusable Skill Card ── */
const SkillCard = ({
  group,
  className = "",
  large = false,
}: {
  group: (typeof skillGroups)[0];
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
    <div
      className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: "linear-gradient(90deg,transparent,rgba(168,85,247,0.7),transparent)" }}
    />
    <div
      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
      style={{ background: `radial-gradient(ellipse at top left, ${group.glow} 0%, transparent 60%)` }}
    />

    <div
      className={`relative z-10 flex items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400
        group-hover:bg-purple-500/18 group-hover:border-purple-500/40
        group-hover:text-purple-300 group-hover:shadow-[0_0_18px_rgba(168,85,247,0.2)]
        transition-all duration-300 mb-5 shrink-0
        ${large ? "w-14 h-14" : "w-12 h-12"}`}
    >
      {group.icon}
    </div>

    <h3
      className={`relative z-10 font-bold text-white mb-4
        group-hover:text-purple-300 transition-colors duration-300
        ${large ? "text-xl lg:text-2xl" : "text-lg"}`}
    >
      {group.category}
    </h3>

    <div className="relative z-10 flex flex-wrap gap-2">
      {group.skills.map((skill) => (
        <span
          key={skill}
          className="text-[0.78rem] font-medium px-3 py-1.5 rounded-lg
            bg-white/5 border border-white/10 text-slate-400
            group-hover:border-purple-500/25 group-hover:text-slate-300
            transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>

    <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <div
        className="absolute bottom-0 right-0 w-full h-full rounded-tl-full"
        style={{ background: `radial-gradient(circle at bottom right, ${group.glow} 0%, transparent 70%)` }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#07070F 0%,#0F0B1E 40%,#0F0B1E 70%,#150D2E 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(139,92,246,0.14) 0%,transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(168,85,247,0.12) 0%,rgba(99,102,241,0.07) 40%,transparent 70%)", filter: "blur(90px)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "180px" }}
      />

      <div className="relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 backdrop-blur-sm text-[0.7rem] font-bold tracking-[0.12em] uppercase text-purple-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_#a855f7]" />
            My toolkit
          </div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white">
            Skills &{" "}
            <span className="bg-linear-to-r from-purple-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              Technologies
            </span>
          </h2>

          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            The languages, frameworks, and tools I use to build clean, functional, and modern products.
          </p>

          <div className="mt-4 mx-auto w-20 h-0.5 rounded-full bg-linear-to-r from-purple-500 to-indigo-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
        </div>

        {/* ── Bento Grid ── */}
        {/*
          Row 1: [lg — Frontend (col-span-2)] [sm — Backend]
          Row 2: [sm — Tools & Workflow] [lg — Design & Motion (col-span-2)]
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <SkillCard group={skillGroups[0]} className="lg:col-span-2" large />
          <SkillCard group={skillGroups[1]} />
          <SkillCard group={skillGroups[2]} />
          <SkillCard group={skillGroups[3]} className="lg:col-span-2" large />
        </div>

      </div>
    </section>
  );
};

export default Skills;