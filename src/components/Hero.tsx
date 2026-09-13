import { useEffect, useRef, useState } from "react";

// Project screenshots
import tailorCrmImg from "../assets/projects/tailor-crm.png";
import haatBazaarImg from "../assets/projects/haat-bazaar.png";
import westernFlexImg from "../assets/projects/western-flex.png";

const TITLES = [
  "Frontend Developer",
  "Creative Problem Solver",
  "UI/UX Enthusiast",
  "React Specialist",
];

const PROJECTS = [
  {
    img: tailorCrmImg,
    label: "Tailor CRM",
    sub: "Business Management System",
  },
  {
    img: haatBazaarImg,
    label: "Haat Bazaar",
    sub: "E-commerce Website",
  },
  {
    img: westernFlexImg,
    label: "Western Flex",
    sub: "Internship Project — Corporate Website",
  },
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    typingRef.current = setTimeout(() => {
      if (!isDeleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (!isDeleting && displayed.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else if (isDeleting && displayed.length === 0) {
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % TITLES.length);
      }
    }, speed);

    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [displayed, isDeleting, titleIndex]);

  return (
    <>
      <style>{`
        @keyframes floatA {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(3%,4%) scale(1.05); }
        }
        @keyframes floatB {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-3%,-4%) scale(1.06); }
        }
        @keyframes floatImg {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 6px #a855f7; }
          50% { box-shadow: 0 0 14px #a855f7; opacity: .6; }
        }
        .animate-floatA { animation: floatA 8s ease-in-out infinite; }
        .animate-floatB { animation: floatB 10s ease-in-out infinite; }
        .animate-floatImg { animation: floatImg 6s ease-in-out infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-dotPulse { animation: dotPulse 2s infinite; }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-shimmer:hover::after { opacity: 1; }
        .gradient-name {
          background: linear-gradient(135deg, #c084fc 0%, #a855f7 35%, #7c3aed 65%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(168,85,247,0.5));
        }
        .device-frame {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #0b0816;
          box-shadow: 0 30px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(168,85,247,0.28), 0 0 35px rgba(124,58,237,0.16);
        }
        .device-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent 35%, transparent 70%, rgba(168,85,247,0.06));
        }
        .device-frame img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
          background: #0b0816;
        }
        .project-cards {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 20px;
          width: 570px;
          margin-top: -48px;
        }
        .project-card {
          position: relative;
          flex: 0 0 275px;
          width: 275px;
        }
        .project-card-image {
          width: 100%;
          aspect-ratio: 1.65 / 1;
        }
        @media (max-width: 1024px) {
          .project-cards { width: 100%; max-width: 570px; }
          .project-card { flex: 1 1 0; width: auto; }
        }
        @media (max-width: 640px) {
          .project-cards { flex-direction: column; align-items: center; width: 100%; gap: 18px; margin-top: 20px; }
          .project-card { width: min(330px, 90vw); flex: none; }
        }
      `}</style>

      <section
        id="home"
        className="pt-14 relative w-full min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#07070F 0%,#0F0B1E 40%,#150D2E 70%,#1A0B33 100%)" }}
      >
        <div className="animate-floatA pointer-events-none absolute -top-[10%] -left-[5%] w-[50vw] h-[50vw] rounded-full" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%)", filter: "blur(70px)" }} />
        <div className="animate-floatB pointer-events-none absolute -bottom-[15%] -right-[5%] w-[55vw] h-[55vw] rounded-full" style={{ background: "radial-gradient(circle,rgba(168,85,247,0.22) 0%,rgba(99,102,241,0.1) 40%,transparent 70%)", filter: "blur(90px)" }} />
        <div className="pointer-events-none absolute top-1/2 right-[8%] -translate-y-1/2 w-[40vw] h-[40vw] max-w-[520px] rounded-full" style={{ background: "radial-gradient(circle,rgba(168,85,247,0.28) 0%,rgba(109,40,217,0.1) 45%,transparent 70%)", filter: "blur(65px)" }} />

        <div className="relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14 px-4 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-20 lg:py-0 lg:min-h-screen">

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border text-[0.68rem] font-bold tracking-[0.12em] uppercase backdrop-blur-sm" style={{ borderColor: "rgba(139,92,246,0.4)", background: "rgba(139,92,246,0.08)", color: "#c084fc", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s" }}>
              <span className="animate-dotPulse w-1.75 h-1.75 rounded-full bg-purple-500 shrink-0" />
              Available for work
            </div>

            <h1 className="font-black leading-[1.05] mb-2" style={{ fontSize: "clamp(2.25rem, 5vw, 3.8rem)", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(18px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}>
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="gradient-name">Nabila Tamboli</span>
            </h1>

            <h2 className="font-semibold mb-4 min-h-[1.8rem]" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#94a3b8", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s" }}>
              <span style={{ color: "#c084fc" }}>{displayed}</span>
              <span className="animate-blink inline-block w-0.5 h-[1em] bg-purple-500 ml-0.5 rounded-sm align-middle" />
            </h2>

            <p className="mb-6 leading-relaxed max-w-110" style={{ color: "#64748b", fontSize: "clamp(0.875rem, 1.2vw, 0.95rem)", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s" }}>
              I help businesses build modern websites, improve user experience, and create digital solutions that drive results.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6" style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.8s ease 0.62s, transform 0.8s ease 0.62s" }}>
              <a href="#projects" className="btn-shimmer relative overflow-hidden px-7 py-3 rounded-xl font-semibold text-white text-[0.95rem] border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] inline-flex items-center gap-2" style={{ background: "linear-gradient(135deg,#9333ea,#7c3aed)", boxShadow: "0 0 22px rgba(147,51,234,0.42), 0 4px 20px rgba(0,0,0,0.35)" }}>
                View Projects
                <span>→</span>
              </a>
              <a href="#contact" className="px-7 py-3 rounded-xl font-semibold text-[0.95rem] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm" style={{ color: "#c084fc", background: "rgba(139,92,246,0.07)", border: "1px solid rgba(168,85,247,0.4)" }}>
                Contact Me
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center min-w-0" style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s" }}>
            <div className="animate-floatImg relative w-full" style={{ width: "min(560px, 100%)" }}>

              <div className="absolute -inset-16 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(124,58,237,0.12) 38%, transparent 72%)", filter: "blur(45px)" }} />

              <div className="relative z-10">
                <div className="absolute top-0 left-0 right-0 h-8 z-20 flex items-center px-3 gap-1.5" style={{ background: "rgba(15,10,30,0.96)", borderBottom: "1px solid rgba(168,85,247,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-red-400/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <span className="w-2 h-2 rounded-full bg-green-400/70" />
                  <div className="ml-3 h-4 flex-1 rounded-md" style={{ background: "rgba(255,255,255,0.05)" }} />
                </div>

                <div className="device-frame w-full pt-8" style={{ aspectRatio: "1.72 / 1", border: "5px solid #171126" }}>
                  <img src={PROJECTS[0].img} alt={PROJECTS[0].label} className="w-full h-full" />
                </div>

                <div className="absolute top-4 left-4 z-30 px-3.5 py-2 rounded-lg text-xs font-bold backdrop-blur-xl" style={{ background: "rgba(10,7,22,0.92)", border: "1px solid rgba(192,132,252,0.55)", color: "#c084fc", boxShadow: "0 8px 25px rgba(0,0,0,0.35)" }}>
                  01 · Tailor CRM
                </div>
              </div>

              <div className="project-cards">
                <div className="project-card" style={{ transform: "rotate(-1.2deg)" }}>
                  <div className="device-frame project-card-image" style={{ border: "4px solid #171126" }}>
                    <img src={PROJECTS[1].img} alt={PROJECTS[1].label} className="w-full h-full" />
                  </div>
                  <div className="absolute -bottom-3 left-3 right-3 px-3 py-2 rounded-lg text-[0.7rem] font-bold backdrop-blur-xl" style={{ background: "rgba(10,7,22,0.94)", border: "1px solid rgba(168,85,247,0.5)", color: "#c084fc", boxShadow: "0 8px 20px rgba(0,0,0,0.35)" }}>
                    02 · Haat Bazaar
                  </div>
                </div>

                <div className="project-card" style={{ transform: "rotate(1.2deg)" }}>
                  <div className="device-frame project-card-image" style={{ border: "4px solid #171126" }}>
                    <img src={PROJECTS[2].img} alt={PROJECTS[2].label} className="w-full h-full" />
                  </div>
                  <div className="absolute -bottom-3 left-3 right-3 px-3 py-2 rounded-lg text-[0.7rem] font-bold backdrop-blur-xl" style={{ background: "rgba(10,7,22,0.94)", border: "1px solid rgba(168,85,247,0.5)", color: "#c084fc", boxShadow: "0 8px 20px rgba(0,0,0,0.35)" }}>
                    03 · Western Flex
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-12 left-1/4 right-1/4 h-20 pointer-events-none" style={{ background: "rgba(168,85,247,0.18)", filter: "blur(35px)" }} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;