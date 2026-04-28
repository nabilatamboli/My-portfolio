const WHATSAPP_NUMBER = "917219328463"; // country code + number, no +
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Nabila! I visited your portfolio and I'm interested in working with you. I'd like to discuss my project."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const contactLinks = [
  {
    label: "LinkedIn",
    value: "Nabila Tamboli",
    href: "https://www.linkedin.com/in/nabila-tamboli-753bb3266/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "from-blue-600/20 to-indigo-600/10",
    border: "border-blue-500/25",
    hoverBorder: "hover:border-blue-400/50",
    hoverGlow: "hover:shadow-[0_0_24px_rgba(99,102,241,0.2)]",
    textColor: "text-blue-400",
  },
  {
    label: "Email",
    value: "nabilatamboli88@gmail.com",
    href: "mailto:nabilatamboli88@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    color: "from-purple-600/20 to-violet-600/10",
    border: "border-purple-500/25",
    hoverBorder: "hover:border-purple-400/50",
    hoverGlow: "hover:shadow-[0_0_24px_rgba(168,85,247,0.2)]",
    textColor: "text-purple-400",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-18 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#07070F 0%,#0F0B1E 40%,#150D2E 70%,#1A0B33 100%)",
      }}
    >
      {/* Blobs */}
      <div
        className="pointer-events-none absolute top-[-15%] left-[-5%] w-[45vw] h-[45vw] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(139,92,246,0.16) 0%,transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] right-[-5%] w-[45vw] h-[45vw] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(168,85,247,0.2) 0%,rgba(99,102,241,0.08) 40%,transparent 70%)", filter: "blur(90px)" }}
      />
      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "180px" }}
      />

      <div className="relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 backdrop-blur-sm text-[0.7rem] font-bold tracking-[0.12em] uppercase text-purple-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_#a855f7]" />
            Get in touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              Work Together
            </span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
            Have a project idea or need help with your website? I'd love to hear about it. Let's build something great.
          </p>
          <div className="mt-6 mx-auto w-20 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
        </div>

        {/* ── Main layout: left pitch + right actions ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* ── LEFT: Value pitch card ── */}
          <div
            className="relative flex flex-col justify-between rounded-2xl border border-purple-500/20 overflow-hidden p-8"
            style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(12px)" }}
          >
            {/* Top accent */}
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{ background: "linear-gradient(90deg,transparent,rgba(168,85,247,0.7),transparent)" }}
            />
            {/* Radial glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ background: "radial-gradient(ellipse at top left,rgba(139,92,246,0.1) 0%,transparent 60%)" }}
            />

            <div className="relative z-10">
              {/* Open badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/8 text-[0.7rem] font-bold tracking-wide uppercase text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                Open for projects
              </div>

              <h3 className="text-2xl font-black text-white mb-4 leading-snug">
                Ready to bring your<br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  vision to life?
                </span>
              </h3>

              <p className="text-slate-500 text-[0.92rem] leading-relaxed mb-8">
                Whether you need a brand new website, a redesign, a custom business tool, or an engaging ad video — I've got you covered with clean code and creative execution.
              </p>

              {/* What I can help with */}
              <ul className="flex flex-col gap-2">
                {[
                  "Website Development & UI/UX",
                  "Landing Pages that convert",
                  "Custom CRM & dashboards",
                  "Promotional ad videos & reels",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.88rem] text-slate-400">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}
                    >
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-purple-400" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical response */}
            <div className="relative z-10 mt-6 flex items-center gap-3 pt-6 border-t border-purple-500/15">
              <div className="w-9 h-9 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-sm">
                ⚡
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Fast response</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Action buttons ── */}
          <div className="flex flex-col gap-4">

            {/* WhatsApp — primary CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-5 rounded-2xl border border-green-500/25 overflow-hidden
                hover:border-green-400/50 hover:shadow-[0_0_32px_rgba(74,222,128,0.18)]
                hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "rgba(74,222,128,0.05)", backdropFilter: "blur(12px)" }}
            >
              {/* Radial glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at left,rgba(74,222,128,0.1) 0%,transparent 60%)" }} />

              {/* WhatsApp icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                bg-green-500/15 border border-green-500/30
                group-hover:bg-green-500/25 group-hover:border-green-400/50
                group-hover:shadow-[0_0_20px_rgba(74,222,128,0.25)]
                transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <span className="text-base font-bold text-white mb-0.5">Chat on WhatsApp</span>
                <span className="text-[0.8rem] text-slate-500">Message sent automatically when you click</span>
              </div>

              {/* Arrow */}
              <svg viewBox="0 0 16 16" fill="none" className="relative z-10 w-4 h-4 text-green-400 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>

            {/* Email + LinkedIn */}
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative flex items-center gap-4 p-5 rounded-2xl border ${link.border} ${link.hoverBorder} ${link.hoverGlow}
                  hover:-translate-y-0.5 transition-all duration-300 overflow-hidden`}
                style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(12px)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${link.color.replace("from-", "").split(" ")[0].replace("/20", "")} 0%, transparent 60%)` }} />

                {/* Icon bubble */}
                <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                  bg-white/5 border border-white/10 ${link.textColor}
                  group-hover:bg-white/10 transition-all duration-300`}>
                  {link.icon}
                </div>

                <div className="relative z-10 flex flex-col flex-1 min-w-0">
                  <span className="text-[0.78rem] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{link.label}</span>
                  <span className="text-[0.88rem] font-semibold text-white truncate">{link.value}</span>
                </div>

                <svg viewBox="0 0 16 16" fill="none" className={`relative z-10 w-4 h-4 ${link.textColor} flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1`} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            ))}

            {/* Availability note */}
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-purple-500/15"
              style={{ background: "rgba(255,255,255,0.015)", backdropFilter: "blur(8px)" }}
            >
              <div className="flex gap-1 flex-shrink-0">
                {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c) => (
                  <span key={c} className={`w-2.5 h-2.5 rounded-full ${c} opacity-80`} />
                ))}
              </div>
              <p className="text-[0.8rem] text-slate-500 leading-relaxed">
                <span className="text-slate-300 font-semibold">Currently available</span> for freelance projects and collaborations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;