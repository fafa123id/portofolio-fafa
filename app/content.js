
import {
  FaVuejs,
  FaLaravel,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaDocker,
  FaJenkins,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import Image from "next/image";

export const content = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      education: "Pendidikan",
      certifications: "Sertifikasi",
      skills: "Keahlian",
      contact: "Kontak",
    },

    hero: {
      profileImage:
        "/images/profile.png",
      greeting: "Halo, saya",
      name: "Ahmad Fauzan Roziqin",
      title: "Software Engineer | Fresh Graduate Teknik Informatika",
      description:
        "Lulusan Teknik Informatika Universitas Brawijaya dengan IPK 3.86/4.00. Memiliki pengalaman profesional sebagai Backend Developer di Minilemon Technology serta pengalaman mengembangkan aplikasi berbasis web melalui proyek akademis dan pengembangan sistem. Berkomitmen untuk membangun solusi perangkat lunak yang andal dan memberikan dampak nyata.",
      button: "Hubungi Saya",
      cvUrl:
        "https://1drv.ms/b/c/5f14395ce2292809/IQB3AvH_Xj1fSZ66Hlmm1kTxARUYlH1kCb775UUHm8kmDjY?e=duQPwW",
    },

    about: {
      title: "Tentang Saya",
      description:
        "Saya merupakan lulusan Teknik Informatika Universitas Brawijaya dengan minat pada rekayasa perangkat lunak dan pengembangan aplikasi. Memiliki pengalaman magang sebagai Backend Developer di Minilemon Technology serta mengembangkan sistem aplikasi manajemen keuangan koperasi sebagai proyek skripsi. Pengalaman tersebut membentuk kemampuan saya dalam menganalisis kebutuhan, mengembangkan solusi, dan berkolaborasi untuk menghasilkan perangkat lunak yang fungsional serta mudah dipelihara.",
    },
    certifications: {
      title: "Sertifikasi Profesional",
      list: [
        {
          title: "Perekayasa Perangkat Lunak",
          subtitle: "Software Engineer",
          issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
          category: "Teknologi Informasi dan Komunikasi (TIK)",
          year: "2026",
          description:
            "Sertifikasi kompetensi profesional yang memvalidasi kemampuan dalam bidang rekayasa perangkat lunak, dengan fokus pada perancangan software.",
          credentialId: "62019 2513 0 0000102 2026",
          registrationNumber: "TIK.00006 2026",
        },
      ],
    },
    experience: {
      title: "Pengalaman Profesional",

      tabs: ["Work Experience", "Proyek", "Organisasi", "Volunteer"],
      work: [
        {
          title: "Backend Developer Intern — Minilemon Technology",
          role: "Backend Developer",
          year: "2025 - 2026",
          description:
            "Berkontribusi dalam pengembangan dan pemeliharaan Minilemon Media, portal berita berbasis web. Berfokus pada penyempurnaan fitur backend, pengelolaan artikel dan kategori, integrasi media, serta perbaikan alur dan fungsionalitas API selama periode magang 15 September 2025 hingga 23 Januari 2026.",
        },
      ],
      projects: [
        {
          title: "Skripsi — Sistem Aplikasi Manajemen Keuangan Koperasi",
          role: "Software Engineer",
          year: "2026",
          description:
            "Mengembangkan sistem aplikasi manajemen keuangan Koperasi Guru SMPN 1 Grogol Kabupaten Kediri untuk meningkatkan efisiensi pencatatan keuangan. Bertanggung jawab atas seluruh proses pengembangan, mulai dari analisis kebutuhan, perancangan sistem, implementasi, integrasi, hingga pengujian aplikasi. Sistem mencakup pengelolaan simpanan, pinjaman, laporan keuangan, dan perhitungan SHU menggunakan metode Waterfall dengan Laravel, Vue.js, dan PostgreSQL.",
        },
        {
          title: "Proyek UBMager API",
          role: "Back-End Developer",
          year: "2025",
          description:
            "Mengembangkan prototipe back-end untuk aplikasi e-commerce jastip menggunakan Laravel API dengan database MySQL. Mengimplementasikan fitur-fitur seperti add to cart, checkout, dan integrasi payment gateway Midtrans Snap (sandbox).",
        },
        {
          title: "Proyek Jokominto Game",
          role: "Software Developer",
          year: "2025",
          description:
            "Mengembangkan antarmuka dan logika permainan untuk game virtual pet 'Jokominto'. Mengimplementasikan fitur-fitur seperti makan, tidur, mandi, dan bermain menggunakan HTML, CSS, dan JavaScript native dengan library XState.",
        },
        {
          title: "Proyek Tokoman",
          role: "Full Stack Developer",
          year: "2024",
          description:
            "Merancang, mengembangkan, dan memelihara fungsionalitas front-end dan back-end. Membangun aplikasi MVC Laravel yang dilengkapi antarmuka ramah pengguna yang dibuat dengan Tailwind CSS. Berkontribusi dalam proses review kode, pengujian, dan penyebaran.",
        },
        {
          title: "Proyek LibHub",
          role: "Front-End Developer",
          year: "2023",
          description:
            "Merancang dan mengembangkan antarmuka pengguna (UI) yang intuitif dan responsif. Mengimplementasikan desain fungsional menggunakan HTML, CSS, dan JavaScript, serta bekerja sama dengan tim untuk integrasi dan pengujian.",
        },
      ],

      organizations: [
        {
          title: "K-Risma - Universitas Brawijaya",
          role: "Staff DKV (Desain Komunikasi Visual)",
          year: "2023-2024",
          description:
            "Bertanggung jawab merancang materi visual untuk promosi acara, seperti poster, banner, dan grafis media sosial. Berkolaborasi dalam tim untuk mengembangkan konsep kreatif yang sesuai dengan identitas acara.",
        },
      ],

      volunteers: [
        {
          title: "Program Kerja HOLOGY 7.0 - BEM Filkom UB",
          role: "Staff Equipment",
          year: "2024",
          description:
            "Menyediakan dan mengelola peralatan yang dibutuhkan selama acara. Menyusun inventaris dan berkoordinasi dengan tim untuk memastikan penggunaan peralatan yang efisien.",
        },
        {
          title: "Program Kerja Code 2023 - KRISMA, UB",
          role: "Staff DDM (Dokumentasi, Dekorasi, Multimedia)",
          year: "2023",
          description:
            "Bertanggung jawab dalam dokumentasi seluruh rangkaian program kerja dan mengembangkan konsep kreatif untuk materi desain foto dan video publikasi.",
        },
      ],
    },

    education: {
      title: "Pendidikan",
      institution: "Universitas Brawijaya",
      major: "Teknik Informatika",
      year: "2022 - 2026",
      gpa: "IPK: 3.86 / 4.00",
    },

    skills: {
      title: "Kompetensi Inti",

      hard: {
        title: "Keahlian Teknis",

        list: [
          { name: "HTML5", icon: FaHtml5 },
          { name: "CSS3", icon: FaCss3Alt },
          { name: "JavaScript", icon: FaJsSquare },

          { name: "PHP", icon: FaPhp },
          { name: "Laravel", icon: FaLaravel },
          { name: "Vue.js", icon: FaVuejs },
          { name: "MySQL", icon: GrMysql },
          { name: "PostgreSQL", icon: BiLogoPostgresql },
          { name: "Java", icon: FaJava },

          { name: "Docker", icon: FaDocker },
          { name: "Jenkins", icon: FaJenkins },
        ],
      },

      soft: {
        title: "Keahlian Interpersonal",
        list: [
          "Pemecahan Masalah",
          "Pemikiran Kritis",
          "Kerja Sama Tim",
          "Komunikasi Efektif",
        ],
      },
    },

    contact: {
      title: "Mari Terhubung",
      description:
        "Saya terbuka untuk diskusi, kolaborasi, atau peluang kerja. Jangan ragu untuk menghubungi saya.",
      email: "ahmadfauzanroziqin@gmail.com",
      phone: "+6287805985892",
    },

    footer: "Ahmad Fauzan Roziqin",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      skills: "Skills",
      contact: "Contact",
    },

    hero: {
      profileImage: "/images/profile.png",
      greeting: "Hello, I'm",
      name: "Ahmad Fauzan Roziqin",
      title: "Software Engineer | Informatics Engineering Graduate",
      description:
        "Informatics Engineering graduate from Brawijaya University with a 3.86/4.00 GPA. Experienced as a Backend Developer at Minilemon Technology and in developing web-based applications through academic and software engineering projects. Committed to building reliable software solutions that address real-world needs.",
      button: "Contact Me",
      cvUrl:
        "https://1drv.ms/b/c/5f14395ce2292809/IQCAYouf3_9_RZKswT6qocUAAXpvCBaMVWY8cdZRHqM2ou8?e=6g1uBi",
    },

    about: {
      title: "About Me",
      description:
        "I am an Informatics Engineering graduate from Brawijaya University with a strong interest in software engineering and application development. I gained professional experience as a Backend Developer intern at Minilemon Technology and developed a cooperative financial management application as my undergraduate thesis. These experiences strengthened my ability to analyze requirements, build practical solutions, and collaborate to deliver functional, maintainable software.",
    },
    certifications: {
      title: "Professional Certifications",
      list: [
        {
          title: "Software Engineer",
          subtitle: "Perekayasa Perangkat Lunak",
          issuer: "National Professional Certification Agency (BNSP)",
          category: "Information and Communication Technology (ICT)",
          year: "2026",
          description:
            "Professional competency certification validating skills in software engineering, with a focus on software design.",
          credentialId: "62019 2513 0 0000102 2026",
          registrationNumber: "TIK.00006 2026",
        },
      ],
    },
    experience: {
      title: "Professional Experience",

      tabs: ["Work Experience", "Projects", "Organizations", "Volunteer"],
      work: [
        {
          title: "Backend Developer Intern — Minilemon Technology",
          role: "Backend Developer",
          year: "2025 - 2026",
          description:
            "Contributed to the development and maintenance of Minilemon Media, a web-based news portal. Focused on improving backend features, managing articles and categories, integrating media uploads, and refining API workflows and functionality during the internship from September 15, 2025 to January 23, 2026.",
        },
      ],
      projects: [
        {
          title:
            "Undergraduate Thesis — Cooperative Financial Management Application",
          role: "Software Engineer",
          year: "2026",
          description:
            "Developed a cooperative financial management application for the Teachers' Cooperative of SMPN 1 Grogol, Kediri Regency, to improve financial record-keeping efficiency. Responsible for the entire development process, from requirements analysis and system design to implementation, integration, and application testing. The system covers savings, loans, financial reporting, and profit-sharing (SHU), using the Waterfall methodology with Laravel, Vue.js, and PostgreSQL",
        },
        {
          title: "UBMager API Project",
          role: "Back-End Developer",
          year: "2025",
          description:
            "Developed a back-end prototype for a 'jastip' e-commerce application using Laravel API with a MySQL database. Implemented features like add to cart, checkout, and Midtrans Snap payment gateway integration (sandbox).",
        },
        {
          title: "Jokominto Game Project",
          role: "Software Developer",
          year: "2025",
          description:
            "Developed the interface and game logic for the 'Jokominto' virtual pet game. Implemented features such as eat, sleep, bath, and play using native HTML, CSS, and JavaScript with the XState library for state management.",
        },
        {
          title: "Tokoman Project",
          role: "Full Stack Developer",
          year: "2024",
          description:
            "Designed, developed, and maintained both front-end and back-end functionalities. Built a Laravel MVC application with a user-friendly interface created with Tailwind CSS. Contributed to code reviews, testing, and deployment processes.",
        },
        {
          title: "LibHub Project",
          role: "Front-End Developer",
          year: "2023",
          description:
            "Designed and developed an intuitive and responsive user interface (UI). Implemented functional designs using HTML, CSS, and JavaScript, and collaborated with the team for integration and testing.",
        },
      ],

      organizations: [
        {
          title: "K-Risma - Brawijaya University",
          role: "Visual Communication Design Staff",
          year: "2023-2024",
          description:
            "Responsible for designing visual materials for event promotion (posters, banners, social media graphics). Collaborated with the team to develop creative concepts aligned with the event's identity.",
        },
      ],

      volunteers: [
        {
          title: "HOLOGY 7.0 Work Program - BEM Filkom UB",
          role: "Equipment Staff",
          year: "2024",
          description:
            "Provided and managed the necessary equipment during the event. Compiled an equipment inventory and coordinated with the team to ensure efficient usage.",
        },
        {
          title: "Code 2023 Work Program - KRISMA, UB",
          role: "Documentation, Decoration, Multimedia Staff",
          year: "2023",
          description:
            "Responsible for documenting the entire work program and developing creative concepts for photo and video publication materials.",
        },
      ],
    },

    education: {
      title: "Education",
      institution: "Brawijaya University",
      major: "Informatics Engineering",
      year: "2022 - 2026",
      gpa: "GPA: 3.86 / 4.00",
    },

    skills: {
      title: "Core Competencies",

      hard: {
        title: "Technical Skills",

        list: [
          { name: "HTML5", icon: FaHtml5 },
          { name: "CSS3", icon: FaCss3Alt },
          { name: "JavaScript", icon: FaJsSquare },

          { name: "PHP", icon: FaPhp },
          { name: "Laravel", icon: FaLaravel },
          { name: "Vue.js", icon: FaVuejs },
          { name: "MySQL", icon: GrMysql },
          { name: "PostgreSQL", icon: BiLogoPostgresql },
          { name: "Java", icon: FaJava },

          { name: "Docker", icon: FaDocker },
          { name: "Jenkins", icon: FaJenkins },
        ],
      },

      soft: {
        title: "Soft Skills",
        list: [
          "Problem Solving",
          "Critical Thinking",
          "Teamwork",
          "Effective Communication",
        ],
      },
    },

    contact: {
      title: "Let's Get In Touch",
      description:
        "I'm open to discussions, collaborations, or job opportunities. Feel free to reach out to me.",
      email: "ahmadfauzanroziqin@gmail.com",
      phone: "+62 823 3476 3809",
    },

    footer: "Ahmad Fauzan Roziqin",
  },
};