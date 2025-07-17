"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Users, Award, Code, Brain } from 'lucide-react';
import { FaLaravel, FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import Image from 'next/image';

// Data Konten (Content Data)
const content = {
  id: {
    nav: { home: "Beranda", about: "Tentang", experience: "Pengalaman", education: "Pendidikan", skills: "Keahlian", contact: "Kontak" },
    hero: { profileImage: "https://ubmagerbucket.s3.ap-southeast-1.amazonaws.com/images/Untitled+design+(8).png", greeting: "Halo, saya", name: "Ahmad Fauzan Roziqin", title: "Pengembang Web & Mahasiswa Teknik Informatika", description: "Mahasiswa semester 7 di Universitas Brawijaya dengan IPK 3.79. Berpengalaman dalam pengembangan perangkat lunak dengan fokus pada aplikasi web fungsional dan intuitif.", button: "Hubungi Saya" },
    about: { title: "Tentang Saya", description: "Saya adalah mahasiswa Teknik Informatika di Universitas Brawijaya yang bersemangat tentang pengembangan perangkat lunak, terutama dalam pembuatan website. Melalui berbagai proyek akademis, saya telah mengasah kemampuan untuk berkolaborasi dalam tim untuk menciptakan aplikasi web yang tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang baik. Saya selalu antusias untuk belajar teknologi baru dan menerapkan keterampilan saya untuk memecahkan masalah di dunia nyata." },
    experience: {
      title: "Pengalaman Profesional",
      tabs: ["Proyek", "Organisasi", "Volunteer"],
      projects: [ { title: "Proyek UBMager API", role: "Back-End Developer", year: "2025", description: "Mengembangkan prototipe back-end untuk aplikasi e-commerce jastip menggunakan Laravel API dengan database MySQL. Mengimplementasikan fitur-fitur seperti add to cart, checkout, dan integrasi payment gateway Midtrans Snap (sandbox)." }, { title: "Proyek Tokoman", role: "Full Stack Developer", year: "2024", description: "Merancang, mengembangkan, dan memelihara fungsionalitas front-end dan back-end. Membangun aplikasi MVC Laravel yang dilengkapi antarmuka ramah pengguna yang dibuat dengan Tailwind CSS. Berkontribusi dalam proses review kode, pengujian, dan penyebaran." }, { title: "Proyek Jokominto Game", role: "Developer", year: "2025", description: "Mengembangkan antarmuka dan logika permainan untuk game virtual pet 'Jokominto'. Mengimplementasikan fitur-fitur seperti makan, tidur, mandi, dan bermain menggunakan HTML, CSS, dan JavaScript native dengan library XState." }, { title: "Proyek LibHub", role: "Front-End Developer", year: "2023", description: "Merancang dan mengembangkan antarmuka pengguna (UI) yang intuitif dan responsif. Mengimplementasikan desain fungsional menggunakan HTML, CSS, dan JavaScript, serta bekerja sama dengan tim untuk integrasi dan pengujian." } ],
      organizations: [ { title: "K-Risma - Universitas Brawijaya", role: "Staff DKV (Desain Komunikasi Visual)", year: "2023-2024", description: "Bertanggung jawab merancang materi visual untuk promosi acara, seperti poster, banner, dan grafis media sosial. Berkolaborasi dalam tim untuk mengembangkan konsep kreatif yang sesuai dengan identitas acara." } ],
      volunteers: [ { title: "Program Kerja HOLOGY 7.0 - BEM Filkom UB", role: "Staff Equipment", year: "2024", description: "Menyediakan dan mengelola peralatan yang dibutuhkan selama acara. Menyusun inventaris dan berkoordinasi dengan tim untuk memastikan penggunaan peralatan yang efisien." }, { title: "Program Kerja Code 2023 - KRISMA, UB", role: "Staff DDM (Dokumentasi, Dekorasi, Multimedia)", year: "2023", description: "Bertanggung jawab dalam dokumentasi seluruh rangkaian program kerja dan mengembangkan konsep kreatif untuk materi desain foto dan video publikasi." } ]
    },
    education: { title: "Pendidikan", institution: "Universitas Brawijaya", major: "Teknik Informatika", year: "2022 - Sekarang", gpa: "IPK: 3.79 / 4.00" },
    skills: {
      title: "Kompetensi Inti",
      hard: {
        title: "Keahlian Teknis",
        list: [
          { name: "HTML5", icon: FaHtml5 }, { name: "CSS3", icon: FaCss3Alt }, { name: "JavaScript", icon: FaJsSquare},
          { name: "PHP", icon: FaPhp }, { name: "Laravel", icon: FaLaravel }, { name: "MySQL", icon: GrMysql}, { name: "Java", icon: FaJava}
        ]
      },
      soft: { title: "Keahlian Interpersonal", list: ["Pemecahan Masalah", "Pemikiran Kritis", "Kerja Sama Tim", "Komunikasi Efektif"] }
    },
    contact: { title: "Mari Terhubung", description: "Saya terbuka untuk diskusi, kolaborasi, atau peluang kerja. Jangan ragu untuk menghubungi saya.", email: "ahmadfauzanroziqin@gmail.com", phone: "+62 823 3476 3809" },
    footer: "Dibuat dengan ❤️ oleh Ahmad Fauzan Roziqin"
  },
  en: {
    nav: { home: "Home", about: "About", experience: "Experience", education: "Education", skills: "Skills", contact: "Contact" },
    hero: { profileImage: "https://ubmagerbucket.s3.ap-southeast-1.amazonaws.com/images/Untitled+design+(8).png", greeting: "Hello, I'm", name: "Ahmad Fauzan Roziqin", title: "Web Developer & Informatics Engineering Student", description: "7th-semester student at Brawijaya University with a 3.79 GPA. Experienced in software development with a focus on functional and intuitive web applications.", button: "Contact Me" },
    about: { title: "About Me", description: "I am an Informatics Engineering student at Brawijaya University, passionate about software development, especially in web creation. Through various academic projects, I have honed my ability to collaborate in a team to create web applications that are not only functional but also provide a great user experience. I am always enthusiastic about learning new technologies and applying my skills to solve real-world problems." },
    experience: {
      title: "Professional Experience",
      tabs: ["Projects", "Organizations", "Volunteer"],
      projects: [ { title: "UBMager API Project", role: "Back-End Developer", year: "2025", description: "Developed a back-end prototype for a 'jastip' e-commerce application using Laravel API with a MySQL database. Implemented features like add to cart, checkout, and Midtrans Snap payment gateway integration (sandbox)." }, { title: "Tokoman Project", role: "Full Stack Developer", year: "2024", description: "Designed, developed, and maintained both front-end and back-end functionalities. Built a Laravel MVC application with a user-friendly interface created with Tailwind CSS. Contributed to code reviews, testing, and deployment processes." }, { title: "Jokominto Game Project", role: "Developer", year: "2025", description: "Developed the interface and game logic for the 'Jokominto' virtual pet game. Implemented features such as eat, sleep, bath, and play using native HTML, CSS, and JavaScript with the XState library for state management." }, { title: "LibHub Project", role: "Front-End Developer", year: "2023", description: "Designed and developed an intuitive and responsive user interface (UI). Implemented functional designs using HTML, CSS, and JavaScript, and collaborated with the team for integration and testing." } ],
      organizations: [ { title: "K-Risma - Brawijaya University", role: "Visual Communication Design Staff", year: "2023-2024", description: "Responsible for designing visual materials for event promotion (posters, banners, social media graphics). Collaborated with the team to develop creative concepts aligned with the event's identity." } ],
      volunteers: [ { title: "HOLOGY 7.0 Work Program - BEM Filkom UB", role: "Equipment Staff", year: "2024", description: "Provided and managed the necessary equipment during the event. Compiled an equipment inventory and coordinated with the team to ensure efficient usage." }, { title: "Code 2023 Work Program - KRISMA, UB", role: "Documentation, Decoration, Multimedia Staff", year: "2023", description: "Responsible for documenting the entire work program and developing creative concepts for photo and video publication materials." } ]
    },
    education: { title: "Education", institution: "Brawijaya University", major: "Informatics Engineering", year: "2022 - Present", gpa: "GPA: 3.79 / 4.00" },
    skills: {
      title: "Core Competencies",
      hard: {
        title: "Technical Skills",
        list: [
          { name: "HTML5", icon: FaHtml5 }, { name: "CSS3", icon: FaCss3Alt }, { name: "JavaScript", icon: FaJsSquare},
          { name: "PHP", icon: FaPhp }, { name: "Laravel", icon: FaLaravel }, { name: "MySQL", icon: GrMysql}, { name: "Java", icon: FaJava}
        ]
      },
      soft: { title: "Soft Skills", list: ["Problem Solving", "Critical Thinking", "Teamwork", "Effective Communication"] }
    },
    contact: { title: "Let's Get In Touch", description: "I'm open to discussions, collaborations, or job opportunities. Feel free to reach out to me.", email: "ahmadfauzanroziqin@gmail.com", phone: "+62 823 3476 3809" },
    footer: "Crafted with ❤️ by Ahmad Fauzan Roziqin"
  }
};

// Komponen Header
const Header = ({ lang, setLang, content, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll event for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ sectionKey, children }) => (
    <a
      href={`#${sectionKey}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(sectionKey)?.scrollIntoView({ behavior: 'smooth' });
        if (isMenuOpen) setIsMenuOpen(false);
      }}
      className={`transition-colors duration-300 relative group ${activeSection === sectionKey ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${activeSection === sectionKey ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-2xl font-bold text-white transition-transform duration-300 hover:scale-110">A.F.R.</a>
        <div className="hidden md:flex items-center space-x-8">
          {Object.entries(content.nav).map(([key, value]) => (
            <NavLink key={key} sectionKey={key}>{value}</NavLink>
          ))}
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-2 mr-4">
            <button onClick={() => setLang('en')} className={`px-3 py-1 text-sm rounded-md transition-all duration-300 ${lang === 'en' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>EN</button>
            <button onClick={() => setLang('id')} className={`px-3 py-1 text-sm rounded-md transition-all duration-300 ${lang === 'id' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>ID</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-6 py-6">
            {Object.entries(content.nav).map(([key, value]) => (
              <NavLink key={key} sectionKey={key}>{value}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// --- Section Components ---

// SectionWrapper: Animasi transisi yang lebih halus dan tegas
const SectionWrapper = ({ id, children, className = '' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Memicu animasi hanya jika elemen masuk ke viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // Memicu animasi saat 20% bagian terlihat
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            id={id}
            ref={ref}
            className={`min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden ${className}`}
        >
            <div className={`transition-all duration-1000 ease-out w-full ${isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-95 blur-sm'}`}>
                {children}
            </div>
        </section>
    );
};


const Hero = ({ content }) => (
    <SectionWrapper id="home" className="h-screen"> {/* Hero can remain h-screen for full viewport intro */}
        <div className="text-center container mx-auto z-10">
            <Image
                src={content.profileImage} 
                alt="Foto Profil Ahmad Fauzan Roziqin" 
                width={160}
                height={160}
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-gray-700 shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/30 hover:border-purple-500/50"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/160x160/1a202c/a0aec0?text=AFR'; }}
            />
            <h2 className="text-2xl md:text-3xl text-cyan-400 font-light">{content.greeting}</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold my-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">{content.name}</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">{content.title}</p>
            <p className="text-md md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{content.description}</p>
            <div className="mt-10">
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-block bg-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1"
                >
                    {content.button}
                </a>
            </div>
        </div>
    </SectionWrapper>
);

const About = ({ content }) => (
  <SectionWrapper id="about" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">{content.title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">{content.description}</p>
    </div>
  </SectionWrapper>
);

const Experience = ({ content }) => {
  const [activeTab, setActiveTab] = useState(0);
  const icons = [<Briefcase size={20}/>, <Users size={20}/>, <Award size={20}/>];

  const renderContent = () => {
    const data = [content.projects, content.organizations, content.volunteers][activeTab];
    return data.map((item, index) => (
      <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
          <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
          <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full whitespace-nowrap">{item.year}</span>
        </div>
        <p className="text-md font-semibold text-white mb-3">{item.role}</p>
        <p className="text-gray-300">{item.description}</p>
      </div>
    ));
  };

  return (
    <SectionWrapper id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">{content.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
        <div className="flex justify-center mb-8 border-b border-gray-700">
          {content.tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-4 md:px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 focus:outline-none ${activeTab === index ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-t-md'}`}
            >
              {icons[index]}
              <span>{tab}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderContent()}
        </div>
      </div>
    </SectionWrapper>
  );
};

const Education = ({ content }) => (
  <SectionWrapper id="education" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">{content.title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
      <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 text-center shadow-lg transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-500/50 transform hover:-translate-y-2">
        <GraduationCap className="mx-auto text-cyan-400 mb-4" size={48} />
        <h3 className="text-2xl font-bold text-white">{content.institution}</h3>
        <p className="text-xl text-cyan-400 mt-1">{content.major}</p>
        <p className="text-gray-400 mt-2">{content.year}</p>
        <p className="text-gray-300 font-semibold mt-4 text-lg">{content.gpa}</p>
      </div>
    </div>
  </SectionWrapper>
);

const Skills = ({ content }) => (
  <SectionWrapper id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">{content.title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><Code className="mr-3 text-cyan-400" /> {content.hard.title}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-center">
            {content.hard.list.map((skill) => (
              <div key={skill.name} className="group flex flex-col items-center p-4 bg-gray-700/50 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-2">
                <skill.icon />
                <p className="mt-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><Brain className="mr-3 text-cyan-400" /> {content.soft.title}</h3>
          <ul className="space-y-4">
            {content.soft.list.map((skill, i) => (
              <li key={i} className="flex items-center text-gray-300 text-lg group">
                <span className="h-2 w-2 bg-cyan-500 rounded-full mr-4"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

const Contact = ({ content }) => (
  <SectionWrapper id="contact" className="py-24">
    <div className="container mx-auto px-6 text-center flex-grow flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mb-4">{content.title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">{content.description}</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <a href={`mailto:${content.email}`} className="text-lg text-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-3 group transform hover:scale-105">
          <Mail className="group-hover:text-cyan-400 transition-colors duration-300"/>
          <span>{content.email}</span>
        </a>
        <a href="https://linkedin.com/in/ahmad-fauzan-roziqin" target="_blank" rel="noopener noreferrer" className="text-lg text-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-3 group transform hover:scale-105">
          <Linkedin className="group-hover:text-cyan-400 transition-colors duration-300"/>
          <span>ahmad-fauzan-roziqin</span>
        </a>
        <a href="https://github.com/fafa123id" target="_blank" rel="noopener noreferrer" className="text-lg text-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-3 group transform hover:scale-105">
          <Github className="group-hover:text-cyan-400 transition-colors duration-300"/>
          <span>fafa123id</span>
        </a>
      </div>
    </div>
    <footer className="w-full text-center py-6 mt-24">
        <p className="text-gray-500">{content.footer} &copy; {new Date().getFullYear()}</p>
    </footer>
  </SectionWrapper>
);


// Komponen Utama App
export default function App() {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const currentContent = content[language];
  const isNavigating = useRef(false);
  const scrollTimeout = useRef(null); 
  // Effect to scroll to top on page refresh
  useEffect(() => {
    // This forces the page to scroll to the top on refresh
    window.history.scrollRestoration = 'manual';
  }, []);

  // Effect to track which section is active in the viewport
   useEffect(() => {
    const handleIntersection = (entries) => {
      // Jika kita sedang navigasi via klik, JANGAN lakukan apa-apa
      if (isNavigating.current) {
        return;
      }
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Zona aktivasi sedikit diperlebar
      threshold: 0,
    });

    const sections = Object.keys(currentContent.nav).map(id => document.getElementById(id));
    
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [currentContent.nav]);

  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-tight text-white">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <Header lang={language} setLang={setLanguage} content={currentContent} activeSection={activeSection} setActiveSection={setActiveSection} isNavigating={isNavigating} scrollTimeout={scrollTimeout} />
      
      {/* Main content area is now a simple relative container */}
      <main className="relative z-10">
        <Hero content={currentContent.hero} />
        <About content={currentContent.about} />
        <Experience content={currentContent.experience} />
        <Education content={currentContent.education} />
        <Skills content={currentContent.skills} />
        <Contact content={currentContent.contact} />
      </main>

      <style jsx global>{`
          /* Allow body to scroll naturally */
          html {
            scroll-behavior: smooth;
          }
          .bg-grid-pattern {
            background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 2rem 2rem;
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-4000 {
            animation-delay: -4s;
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}</style>
    </div>
  );
}
