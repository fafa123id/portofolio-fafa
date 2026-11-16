"use client";

import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
// Pindahkan object `content` lama ke ./content.js dan tambahkan `export` di depannya.
import { content } from "./content";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-mono" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-sans" });

const L = {
  id: { cv: "unduh_cv", cred: "id_kredensial", reg: "no_registrasi", cert: "buka_sertifikat" },
  en: { cv: "download_cv", cred: "credential_id", reg: "registration_no", cert: "open_certificate" },
};
const CERT_URL =
  "https://1drv.ms/b/c/5f14395ce2292809/IQDpA6-jog1zRprGBpFDjWClAV_aa9vZPAO2PgB6j-4Ug1w?e=1lbYhy";

// Urutan section di navbar & halaman (pendidikan sebelum pengalaman)
const ORDER = ["home", "about", "education", "experience", "certifications", "skills", "contact"];
// Animasi section baru jalan setelah intro hero selesai
const Ready = createContext(false);

const AMBER = "text-[#FFB547]";
const CYAN = "text-[#5CE1E6]";
const MUTED = "text-[#8B8F98]";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5CE1E6]";

/* ---------- hooks ---------- */
// Hero: jumlah karakter (pecahan) naik mulus selama `ms` milidetik setelah `delay`.
function useTimed(len, go, ms, delay = 0) {
  const [x, setX] = useState(0);
  useEffect(() => {
    if (!go) return;
    let raf = 0;
    let t0 = 0;
    setX(0);
    const t = setTimeout(() => {
      const tick = (ts) => {
        t0 = t0 || ts;
        const k = Math.min(1, (ts - t0) / ms);
        setX(len * k);
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [len, go, ms, delay]);
  return x;
}

// True begitu elemen pernah terlihat di layar (sekali saja, tidak pernah kembali ke false).
function useSeen(ref) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        o.disconnect();
      }
    });
    o.observe(el);
    return () => o.disconnect();
  }, [ref]);
  return seen;
}

/* ---------- building blocks ---------- */
const Cursor = () => (
  <span aria-hidden className="blink ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-[#FFB547]" />
);

// Satu gaya fade-in untuk SEMUA elemen yang muncul (prompt, nama, jabatan, output section)
const reveal = (on) =>
  `transition-all duration-500 ease-out ${on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`;

// Teks diungkap dengan menganimasikan lebar (satuan ch, font mono), caret = border kanan.
function Prompt({ cmd, chars, caret = "none", innerRef, visible = true }) {
  return (
    <p ref={innerRef} className={`flex whitespace-nowrap text-sm sm:text-base ${reveal(visible)}`}>
      <span className="hidden sm:inline">
        <span className={`${AMBER} font-bold`}>ahmad</span>
        <span className={MUTED}>@</span>
        <span className={CYAN}>portfolio</span>
        <span className={MUTED}>:</span>
      </span>
      <span className={MUTED}>~$&nbsp;</span>
      <span
        aria-label={cmd}
        className={`inline-block overflow-hidden whitespace-pre align-bottom ${caret === "blink" ? "caret-blink" : ""}`}
        style={{
          width: `${chars}ch`,
          borderRight: "3px solid",
          borderColor: caret === "none" ? "transparent" : "#FFB547",
        }}
      >
        {cmd}
      </span>
    </p>
  );
}

// Satu section = satu perintah. Begitu prompt-nya terlihat di layar (di bagian mana pun),
// diketik sekali dengan kecepatan tetap yang pelan, lalu outputnya muncul. Tidak diulang/dihapus.
function Cmd({ id, cmd, title, children }) {
  const ref = useRef(null);
  const ready = useContext(Ready);
  const seen = useSeen(ref);
  const go = seen && ready;
  const x = useTimed(cmd.length, go, Math.max(500, cmd.length * 40), 100);
  const done = go && x >= cmd.length;
  return (
    <section id={id} className="scroll-mt-6 pb-20">
      <Prompt innerRef={ref} cmd={cmd} chars={x} visible={go} caret={go && !done ? (x > 0 ? "solid" : "blink") : "none"} />
      <div className={`mt-6 ${reveal(done)}`}>
        {title && (
          <h2 className="mb-8 border-b border-[#2E3340] pb-3 text-2xl font-bold tracking-tight sm:text-3xl">
            <span aria-hidden className={AMBER}>## </span>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

// Judul sub-section: amber, tebal, dengan garis pemisah
const Sub = ({ children }) => (
  <h3 className={`mb-6 flex items-center gap-3 text-base font-bold sm:text-lg ${AMBER}`}>
    <span aria-hidden className="h-0.5 w-6 shrink-0 bg-[#FFB547]" />
    <span>{children}</span>
    <span aria-hidden className="h-px flex-1 bg-[#2E3340]" />
  </h3>
);

function Log({ items }) {
  return (
    <ol className="ml-1.5 space-y-8 border-l border-[#232733]">
      {items.map((it) => (
        <li key={it.title} className="relative pl-6">
          <span className="absolute -left-[5px] top-[7px] h-[9px] w-[9px] rounded-full bg-[#FFB547] shadow-[0_0_10px_#FFB547]" />
          <div className="flex flex-wrap gap-x-3 text-sm">
            <span className={`${AMBER} tabular-nums`}>{it.year}</span>
            <span className={CYAN}>{it.role}</span>
          </div>
          <h4 className="mt-1 font-bold leading-snug">{it.title}</h4>
          <p className="mt-2 max-w-[68ch] font-[family-name:var(--font-sans)] leading-relaxed text-[#C9C5B8]">
            {it.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- page ---------- */
export default function App() {
  const [lang, setLang] = useState("id");
  const [active, setActive] = useState("home");
  const [clock, setClock] = useState("");
  const c = content[lang];
  const t = L[lang];
  const navKeys = ORDER;

  // hero: dua perintah berurutan
  const cmd1 = "whoami";
  const cmd2 = "cat role.txt";
  const n1 = useTimed(cmd1.length, true, 550, 350);
  const d1 = n1 >= cmd1.length;
  const n2 = useTimed(cmd2.length, d1, 800, 250);
  const d2 = d1 && n2 >= cmd2.length;

  // Refresh selalu kembali ke atas (tanpa lompat ke hash / posisi lama)
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const tick = () =>
      setClock(new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" }).replace(".", ":") + " WIB");
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  // Section aktif dihitung dari posisi scroll (bukan IntersectionObserver),
  // jadi section pendek tidak terlewat dan section terakhir aktif saat mentok bawah.
  const lock = useRef(false);
  const lockTimer = useRef(0);
  const compute = useRef(() => {});

  useEffect(() => {
    compute.current = () => {
      if (lock.current) return;
      const vh = window.innerHeight;
      if (window.scrollY + vh >= document.documentElement.scrollHeight - 4) {
        return setActive(navKeys[navKeys.length - 1]);
      }
      const line = vh * 0.35;
      let cur = navKeys[0];
      for (const k of navKeys) {
        const el = document.getElementById(k);
        if (el && el.getBoundingClientRect().top <= line) cur = k;
      }
      setActive(cur);
    };
    const onScroll = () => {
      if (lock.current) {
        // tunggu smooth-scroll hasil klik selesai sebelum deteksi jalan lagi
        clearTimeout(lockTimer.current);
        lockTimer.current = setTimeout(() => {
          lock.current = false;
          compute.current();
        }, 150);
      } else compute.current();
    };
    compute.current();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(lockTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (k) => {
    setActive(k);
    lock.current = true;
    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      lock.current = false;
      compute.current();
    }, 700);
  };

  return (
    <div className={`${mono.variable} ${sans.variable} min-h-screen bg-[#0A0C10] font-[family-name:var(--font-mono)] text-[#E6E1D3] antialiased`}>
      <div aria-hidden className="scan pointer-events-none fixed inset-0 z-40" />
      <div aria-hidden className="vig pointer-events-none fixed inset-0 z-40" />

      <Ready.Provider value={d2}>
      <main className="mx-auto max-w-4xl px-5 pb-28 pt-12 sm:px-8 sm:pt-20">
        {/* HERO */}
        <section id="home" className="min-h-[78vh] scroll-mt-6 pb-20">
          <div className="mb-10 flex flex-wrap items-end gap-x-6 gap-y-3">
            <div className="relative shrink-0">
              <Image
                src={c.hero.profileImage}
                alt={c.hero.name}
                width={192}
                height={192}
                priority
                className="h-32 w-32 object-cover grayscale contrast-125 sm:h-48 sm:w-48"
              />
              <span aria-hidden className="absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-[#FFB547]" />
              <span aria-hidden className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-[#FFB547]" />
            </div>
            <p className={`text-xs ${MUTED}`}>
              <span className={AMBER}>●</span> available_for_hire = true
            </p>
          </div>

          <Prompt cmd={cmd1} chars={n1} caret={d1 ? "none" : n1 > 0 ? "solid" : "blink"} />
          <h1
            data-text={c.hero.name}
            className={`glitch mt-4 break-words text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl ${reveal(d1)}`}
            style={{ textShadow: "0 0 24px rgba(255,181,71,.25)" }}
            tabIndex={0}
          >
            {c.hero.name}
          </h1>

          <div className="mt-10">
            <Prompt cmd={cmd2} chars={n2} visible={d1} caret={d1 && !d2 ? (n2 > 0 ? "solid" : "blink") : "none"} />
          </div>
          <div className={reveal(d2)}>
            <p className="mt-4 max-w-[60ch] text-lg leading-relaxed sm:text-xl">{c.hero.title}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a href="#contact" className={`bg-[#FFB547] px-5 py-3 font-bold text-[#0A0C10] hover:bg-[#FFC873] ${focus}`}>
                ./{c.hero.button.toLowerCase().replace(/\s+/g, "_")}
              </a>
              <a href={c.hero.cvUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 border border-[#FFB547] px-5 py-3 ${AMBER} hover:bg-[#FFB547]/10 ${focus}`}>
                <Download size={16} aria-hidden /> {t.cv}
              </a>
            </div>
          </div>
        </section>

        <Cmd id="about" cmd="cat about.md" title={c.about.title}>
          <p className="max-w-[64ch] font-[family-name:var(--font-sans)] text-lg leading-relaxed text-[#D8D4C6]">{c.about.description}</p>
        </Cmd>

        <Cmd id="education" cmd="cat education.txt" title={c.education.title}>
          <h3 className="text-xl font-bold">{c.education.institution}</h3>
          <p className={CYAN}>{c.education.major}</p>
          <p className={`mt-1 text-sm ${MUTED}`}>{c.education.year}</p>
          <p className={`mt-3 ${AMBER}`}>{c.education.gpa}</p>
        </Cmd>

        <Cmd id="experience" cmd="git log --stat ~/experience" title={c.experience.title}>
          <div className="space-y-12">
            <div>
              <Sub>{c.experience.tabs[0]}</Sub>
              <Log items={c.experience.work} />
            </div>
            <div>
              <Sub>{c.experience.tabs[1]}</Sub>
              <Log items={c.experience.projects} />
            </div>
            <div>
              <Sub>
                {c.experience.tabs[2]} &amp; {c.experience.tabs[3]}
              </Sub>
              <Log items={[...c.experience.organizations, ...c.experience.volunteers]} />
            </div>
          </div>
        </Cmd>

        <Cmd id="certifications" cmd="ls -l certs/" title={c.certifications.title}>
          {c.certifications.list.map((it) => (
            <div key={it.title} className="border border-[#232733] bg-[#10131A] p-5 sm:p-6">
              <h3 className="text-lg font-bold">
                {it.title} <span className={`text-sm font-normal ${MUTED}`}>({it.subtitle})</span>
              </h3>
              <p className={`mt-1 ${CYAN}`}>{it.issuer}</p>
              <p className="mt-3 max-w-[64ch] font-[family-name:var(--font-sans)] leading-relaxed text-[#C9C5B8]">{it.description}</p>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 text-sm">
                <dt className={MUTED}>year</dt>
                <dd>{it.year}</dd>
                <dt className={MUTED}>{t.cred}</dt>
                <dd className="break-all">{it.credentialId}</dd>
                <dt className={MUTED}>{t.reg}</dt>
                <dd className="break-all">{it.registrationNumber}</dd>
              </dl>
              <a href={CERT_URL} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-block text-sm ${AMBER} underline underline-offset-4 hover:text-[#FFC873] ${focus}`}>
                ./{t.cert}
              </a>
            </div>
          ))}
        </Cmd>

        <Cmd id="skills" cmd="npm ls --depth=0" title={c.skills.title}>
          <Sub>{c.skills.hard.title}</Sub>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
            {c.skills.hard.list.map((s, i, arr) => (
              <li key={s.name} className="flex items-center gap-2">
                <span className={MUTED} aria-hidden>{i === arr.length - 1 ? "└─" : "├─"}</span>
                <s.icon className={`h-4 w-4 shrink-0 ${CYAN}`} aria-hidden />
                {s.name}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Sub>{c.skills.soft.title}</Sub>
            <ul className="flex flex-wrap gap-2 text-sm">
              {c.skills.soft.list.map((s) => (
                <li key={s} className="border border-[#232733] px-3 py-1.5">{s}</li>
              ))}
            </ul>
          </div>
        </Cmd>

        <Cmd id="contact" cmd="./contact.sh --open" title={c.contact.title}>
          <p className="max-w-[60ch] font-[family-name:var(--font-sans)] text-lg leading-relaxed text-[#D8D4C6]">{c.contact.description}</p>
          <ul className="mt-6 space-y-3">
            {[
              { href: `mailto:${c.contact.email}`, icon: Mail, text: c.contact.email, label: "mail" },
              { href: "https://linkedin.com/in/ahmad-fauzan-roziqin", icon: Linkedin, text: "ahmad-fauzan-roziqin", label: "linkedin" },
              { href: "https://github.com/fafa123id", icon: Github, text: "fafa123id", label: "github" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} target={l.label === "mail" ? undefined : "_blank"} rel="noopener noreferrer" className={`group inline-flex flex-wrap items-center gap-x-3 break-all ${focus}`}>
                  <l.icon size={18} className={AMBER} aria-hidden />
                  <span className={MUTED}>{l.label}</span>
                  <span className="underline decoration-[#232733] underline-offset-4 group-hover:decoration-[#FFB547]">{l.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </Cmd>

        <footer className={`text-sm ${MUTED}`}>
          <p>
            <span className={MUTED}>$ </span>echo &quot;{c.footer} © {new Date().getFullYear()}&quot;
            <Cursor />
          </p>
        </footer>
      </main>
      </Ready.Provider>

      {/* status bar ala tmux */}
      <nav aria-label="Main" className="fixed inset-x-0 bottom-0 z-50 flex items-stretch bg-[#FFB547] pb-[env(safe-area-inset-bottom)] text-xs text-[#0A0C10] sm:text-sm">
        <span className="hidden bg-[#0A0C10] px-3 py-2 font-bold text-[#FFB547] sm:block">[portfolio]</span>
        <ul className="flex min-w-0 flex-1 overflow-x-auto">
          {navKeys.map((k, i) => (
            <li key={k} className="shrink-0">
              <a
                href={`#${k}`}
                onClick={() => goTo(k)}
                aria-current={active === k ? "true" : undefined}
                className={`block px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0A0C10] ${
                  active === k ? "bg-[#0A0C10] font-bold text-[#FFB547]" : "hover:bg-[#FFC873]"
                }`}
              >
                {i}:{c.nav[k].toLowerCase()}
                {active === k ? "*" : ""}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-1 px-2">
          {["id", "en"].map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`px-2 py-1 font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0A0C10] ${lang === l ? "bg-[#0A0C10] text-[#FFB547]" : "hover:bg-[#FFC873]"}`}
            >
              {l}
            </button>
          ))}
          <span className="ml-2 hidden tabular-nums md:inline">{clock}</span>
        </div>
      </nav>

      <style jsx global>{`
        html { background: #0a0c10; }
        @media (prefers-reduced-motion: no-preference) {
          html { scroll-behavior: smooth; }
          .blink { animation: blink 1s steps(1) infinite; }
          .caret-blink { animation: caretblink 1s steps(1) infinite; }
          .glitch:hover::before, .glitch:focus-visible::before { animation: gl1 0.5s steps(2) infinite; }
          .glitch:hover::after, .glitch:focus-visible::after { animation: gl2 0.5s steps(2) infinite; }
          .scan { animation: drift 8s linear infinite; }
        }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes caretblink { 50% { border-right-color: transparent; } }
        @keyframes drift { to { background-position-y: 12px; } }
        @keyframes gl1 { 0% { transform: translate(2px, 0); } 50% { transform: translate(-3px, 1px); } }
        @keyframes gl2 { 0% { transform: translate(-2px, 0); } 50% { transform: translate(3px, -1px); } }
        .glitch { position: relative; outline: none; }
        .glitch::before, .glitch::after {
          content: attr(data-text); position: absolute; inset: 0; opacity: 0; pointer-events: none;
        }
        .glitch:hover::before, .glitch:focus-visible::before { opacity: 0.85; color: #5ce1e6; clip-path: inset(0 0 55% 0); }
        .glitch:hover::after, .glitch:focus-visible::after { opacity: 0.85; color: #ff5c7a; clip-path: inset(55% 0 0 0); }
        .scan {
          opacity: 0.05;
          background: repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 4px);
        }
        .vig { background: radial-gradient(ellipse at center, transparent 55%, rgba(0, 0, 0, 0.55)); }
      `}</style>
    </div>
  );
}