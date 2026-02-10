document.addEventListener('DOMContentLoaded', () => {
    // --- Translation Data ---
    const translations = {
        en: {
            nav: { architecture: 'Architecture', experience: 'Experience', credentials: 'Credentials', projects: 'Projects', contact: 'Contact', downloadCV: 'Download CV' },
            hero: {
                available: 'AVAILABLE FOR HIRE',
                title1: 'Architecting',
                title2: 'Resilient',
                title3: 'Systems.',
                subtitle: 'Full Stack Engineer specializing in Java/Spring Boot ecosystems, Angular frontends, and DevSecOps. I engineer scalable, secure infrastructure, not just code.',
                viewWork: 'View Work',
                resume: 'Resume'
            },
            architecture: {
                title: 'System',
                titleHighlight: 'Architecture',
                subtitle: 'High-level overview of the tech stack and paradigms.',
                cards: [
                    { title: "Backend Core", desc: "Java 17, Spring Boot, Microservices, Resilience4j, Hibernate" },
                    { title: "Frontend Arch", desc: "Angular, TypeScript, RxJS, Tailwind, WebGL" },
                    { title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes, Jenkins, GitLab CI, Ansible" },
                    { title: "Data & AI", desc: "PostgreSQL, MySQL, Pinecone Vector DB, RAG Systems, LangChain" },
                    { title: "Shift-Left Security", desc: "SAST/DAST, OWASP, Secret Detection, GDPR Compliance" }
                ]
            },
            experience: {
                title: 'Mission',
                titleHighlight: 'Log',
                subtitle: 'Comprehensive professional history from 2008 to present.'
            },
            credentials: {
                title: 'System',
                titleHighlight: 'Credentials',
                subtitle: 'Education, certifications, and language protocols.',
                education: 'Education',
                certifications: 'Certifications',
                languages: 'Language Protocols',
                communication: 'Communication standards',
                native: 'NATIVE FLUENCY',
                intermediate: 'B2 INTERMEDIATE',
                linuxFoundation: 'LINUX FOUNDATION CERTIFICATES'
            },
            projects: {
                title: 'Deployed',
                titleHighlight: 'Systems',
                subtitle: 'Selected case studies of high-performance applications.'
            },
            contact: {
                title1: 'Ready to',
                titleHighlight: 'connect?',
                subtitle: "I'm currently available for senior engineering roles, architecture consulting, or freelance system design.",
                footer: 'All systems operational.'
            },
            bootBox: [
                "INITIALIZING KERNEL V2.5...",
                "LOADING MODULES: [JAVA] [SPRING] [REACT] [AWS]...",
                "VERIFYING SECURITY CERTIFICATES... [PASS]",
                "MOUNTING PORTFOLIO ASSETS...",
                "OPTIMIZING FOR REKRUTIER EXPERIENCE...",
                "ACCESS GRANTED."
            ]
        },
        de: {
            nav: { architecture: 'Architektur', experience: 'Erfahrung', credentials: 'Qualifikationen', projects: 'Projekte', contact: 'Kontakt', downloadCV: 'Lebenslauf' },
            hero: {
                available: 'VERFÜGBAR FÜR PROJEKTE',
                title1: 'Resiliente',
                title2: 'Systeme',
                title3: 'Entwickeln.',
                subtitle: 'Full-Stack-Ingenieur mit Spezialisierung auf Java/Spring Boot-Ökosysteme, Angular-Frontends und DevSecOps. Ich entwickle skalierbare, sichere Infrastruktur, nicht nur Code.',
                viewWork: 'Arbeit Ansehen',
                resume: 'Lebenslauf'
            },
            architecture: {
                title: 'System',
                titleHighlight: 'Architektur',
                subtitle: 'Überblick über den Technologie-Stack und Paradigmen.',
                cards: [
                    { title: "Backend Kern", desc: "Java 17, Spring Boot, Microservices, Resilience4j, Hibernate" },
                    { title: "Frontend Arch", desc: "Angular, TypeScript, RxJS, Tailwind, WebGL" },
                    { title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes, Jenkins, GitLab CI, Ansible" },
                    { title: "Daten & KI", desc: "PostgreSQL, MySQL, Pinecone Vector DB, RAG Systems, LangChain" },
                    { title: "Shift-Left Security", desc: "SAST/DAST, OWASP, Secret Detection, GDPR Compliance" }
                ]
            },
            experience: {
                title: 'Beruflicher',
                titleHighlight: 'Werdegang',
                subtitle: 'Umfassende Berufserfahrung von 2008 bis heute.'
            },
            credentials: {
                title: 'System',
                titleHighlight: 'Qualifikationen',
                subtitle: 'Ausbildung, Zertifizierungen und Sprachkenntnisse.',
                education: 'Ausbildung',
                certifications: 'Zertifizierungen',
                languages: 'Sprachprotokolle',
                communication: 'Kommunikationsstandards',
                native: 'MUTTERSPRACHE',
                intermediate: 'B2 FORTGESCHRITTEN',
                linuxFoundation: 'LINUX FOUNDATION ZERTIFIKATE'
            },
            projects: {
                title: 'Implementierte',
                titleHighlight: 'Systeme',
                subtitle: 'Ausgewählte Fallstudien leistungsstarker Anwendungen.'
            },
            contact: {
                title1: 'Bereit zum',
                titleHighlight: 'Kontakt?',
                subtitle: "Ich bin aktuell verfügbar für Senior-Engineering-Rollen, Architekturberatung oder Freelance-Systemdesign.",
                footer: 'Alle Systeme operativ.'
            },
            bootBox: [
                "KERNEL V2.5 WIRD INITIALISIERT...",
                "MODULE WERDEN GELADEN: [JAVA] [SPRING] [REACT] [AWS]...",
                "SICHERHEITSZERTIFIKATE WERDEN ÜBERPRÜFT... [OK]",
                "PORTFOLIO-ASSETS WERDEN GELADEN...",
                "OPTIMIERUNG FÜR REKRUTIERER...",
                "ZUGRIFF GEWÄHRT."
            ]
        }
    };

    let currentLang = 'en';

    // --- Dynamic Content Data ---
    const architectureCardsData = [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>', col: "md:col-span-2", color: "border-cyan-500/30", titleKey: 0 },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>', col: "md:col-span-1", color: "border-purple-500/30", titleKey: 1 },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>', col: "md:col-span-1", color: "border-orange-500/30", titleKey: 2 },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>', col: "md:col-span-2", color: "border-emerald-500/30", titleKey: 3 },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>', col: "md:col-span-1", color: "border-red-500/30", titleKey: 4 },
    ];

    const jobsData = [
        {
            role: "Independent Software Engineer",
            company: "Self-Employed / SaaS Founder",
            date: "2024 - Present",
            desc: "Architected 'PDFChatten', an AI-powered SaaS using Next.js, RAG (LangChain/Pinecone), and Stripe. Full ownership of CI/CD, AWS infra, and product lifecycle.",
            tags: ["Next.js", "AI/RAG", "Stripe", "AWS"]
        },
        {
            role: "Software Developer / Systems Engineer",
            company: "ATOSS CSD Software GmbH",
            date: "2023 - 2024",
            desc: "Maintained mission-critical workforce management platforms. Migrated monolithic structures to microservices. Implemented hardened Docker builds and GitLab CI pipelines.",
            tags: ["Java 11", "Spring Boot", "SOAP/REST", "PostgreSQL"]
        },
        {
            role: "Software Developer & Support Engineer",
            company: "Martin Care GmbH",
            date: "2021 - 2023",
            desc: "Full-stack development for healthcare solutions. Integrated BLE/RFID asset tracking. Optimized backend performance via Hibernate & Ehcache tuning.",
            tags: ["Angular", "Flutter", "Java", "DevOps"]
        },
        {
            role: "Full Stack Developer",
            company: "EQS Group AG",
            date: "2017 - 2021",
            desc: "Modernized legacy Perl systems to Java/Spring Boot & Angular. Established TDD practices and automated deployment pipelines using Jenkins/Ansible.",
            tags: ["Perl", "Java", "Angular", "CI/CD"]
        },
        {
            role: "Senior Software Technical Support Developer",
            company: "Xchanging Solutions, Singapore",
            date: "2011 - 2016",
            desc: "Led development for IES, GIAS, Sing-Re, CIMB Bank. Full-stack apps using ASP.NET WebForms, Web APIs, SQL Server 2012. Implemented SAST/DAST security with HP Fortify. Managed deployments via TFS and IIS. Agile/Scrum lead for Motorola-DHL Packaging System.",
            tags: ["ASP.NET", "SQL Server", "HP Fortify", "Agile/Scrum", "DevOps"]
        },
        {
            role: "Product Testing Specialist / Silverlight-WPF Developer",
            company: "Lenovo (Japan & USA)",
            date: "2011 - 2012",
            desc: "Developed Silverlight Web App for Remote Execution of Test Scripts (WCF/C#, SQL Server 2008). Created Usability Testing Software (WinForms) for HCI Department in USA. Writing PowerShell & Appium Test Scripts for hardware testing.",
            tags: ["Silverlight", "WPF", "PowerShell", "Appium", "HCI"]
        },
        {
            role: "Full Stack Software Developer + Support Engineer",
            company: "Print MIS",
            date: "2009 - 2011",
            desc: "Led development of 'e-Pro' (Printing Estimation System) using VB.NET, ADO.NET, MS SQL Server 2008. Developed 'e-Flo' Web-to-Print application using ASP.NET Forms and Silverlight interface.",
            tags: ["VB.NET", "ASP.NET", "Silverlight", "Crystal Reports"]
        },
        {
            role: "Full Stack Software Engineer",
            company: "The IT Valley",
            date: "2008 - 2010",
            desc: "Designed 'Surf Alert' (Family Watchdog) - a Windows utility for parental monitoring using C#, SOAP Web Services, Family Watchdog APIs. Integrated email alerts for safety threats.",
            tags: ["C#", "SOAP", "Windows Server", "IIS 6"]
        }
    ];

    // --- i18n & DOM Update Logic ---

    // Function to render dynamic content (Architecture & Experience) based on language
    const renderDynamicContent = (lang) => {
        const t = translations[lang];

        // Architecture Grid
        const gridContainer = document.getElementById('architecture-grid');
        gridContainer.innerHTML = architectureCardsData.map((card, idx) => `
            <div class="${card.col} bg-slate-900/50 backdrop-blur-sm border ${card.color} p-8 rounded-2xl group hover:bg-slate-800/50 transition-all duration-300 fade-in-section" style="transition-delay: ${idx * 100}ms">
                <div class="mb-4 text-slate-300 group-hover:text-cyan-400 transition-colors">${card.icon}</div>
                <h3 class="text-xl font-bold mb-2 text-slate-100">${t.architecture.cards[card.titleKey].title}</h3>
                <p class="text-slate-400 text-sm leading-relaxed">${t.architecture.cards[card.titleKey].desc}</p>
            </div>
        `).join('');

        // Experience List
        const experienceContainer = document.getElementById('experience-list');
        // Note: For now, jobsData is static in English. If translation is needed for job descriptions, 
        // we would need a parallel structure in translations.de.experience.jobs 
        // OR simply rely on the English descriptions as they are technical. 
        // *Decision*: Keep job descriptions in English for now as commonly accepted in tech, 
        // update headers if keys exist.

        experienceContainer.innerHTML = jobsData.map((job, idx) => `
            <div class="relative pl-8 md:pl-12 fade-in-section" style="transition-delay: ${idx * 50}ms">
                <div class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-900 shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 class="text-xl font-bold text-slate-200">${job.role}</h3>
                    <span class="text-sm font-mono text-cyan-500">${job.date}</span>
                </div>
                <div class="text-slate-400 font-medium mb-3">${job.company}</div>
                <p class="text-slate-500 mb-4 leading-relaxed">${job.desc}</p>
                <div class="flex flex-wrap gap-2">
                    ${job.tags.map(tag => `<span class="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');

        // Re-attach observers to new elements
        observeFadeSections();
    };

    const updateLanguage = (lang) => {
        currentLang = lang;
        const t = translations[lang];

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let val = t;
            keys.forEach(k => { val = val ? val[k] : null; });
            if (val) el.textContent = val;
        });

        // Update Toggle Button Text
        document.getElementById('lang-toggle').textContent = lang.toUpperCase();

        // Re-render complex dynamic sections
        renderDynamicContent(lang);
    };

    // --- Boot Sequence Logic ---
    const runBootSequence = () => {
        const bootContainer = document.getElementById('boot-sequence');
        const linesContainer = document.getElementById('boot-lines');
        const mainContent = document.getElementById('main-content');

        // Use English lines for initial boot or strictly stick to currentLang
        // Since boot runs once on load, we default to 'en' or browser lang if you prefer.
        // For simplicity, let's stick to the currentLang (default 'en').
        const lines = translations[currentLang].bootBox;

        let delay = 0;
        lines.forEach((line, index) => {
            delay += Math.random() * 300 + 100; // Random delay between 100-400ms
            setTimeout(() => {
                const p = document.createElement('div');
                p.className = "mb-2 text-sm md:text-base opacity-0 animate-[fadeIn_0.5s_forwards]";
                p.innerHTML = `<span class="text-slate-600 mr-3">[${index + 1}]</span> ${line}`;

                // Add cursor to last line
                if (index === lines.length - 1) {
                    p.innerHTML += `<span class="animate-pulse ml-2">_</span>`;
                } else {
                    // Remove cursor from previous line if any (logic simplified here)
                }

                linesContainer.appendChild(p);

                // Scroll to bottom
                // linesContainer.scrollTop = linesContainer.scrollHeight;
            }, delay);
        });

        // Finish boot sequence
        setTimeout(() => {
            bootContainer.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            bootContainer.style.opacity = "0";
            bootContainer.style.transform = "translateY(-20px)";

            // Show main content
            mainContent.classList.remove('opacity-0');

            // Allow pointer events on main content
            setTimeout(() => {
                bootContainer.remove();
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }, 800);

        }, delay + 1000);
    };

    // --- Navbar Scroll Logic ---
    const initNavbarScroll = () => {
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-slate-950/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
                nav.classList.remove('bg-transparent', 'py-6');
            } else {
                nav.classList.remove('bg-slate-950/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
                nav.classList.add('bg-transparent', 'py-6');
            }
        });
    };

    // --- Intersection Observer for Animations ---
    const observeFadeSections = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });
    };

    // --- Event Listeners ---
    document.getElementById('lang-toggle').addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'de' : 'en';
        updateLanguage(newLang);
    });

    // --- Initialization ---
    // Disable scrolling during boot
    document.body.style.overflow = 'hidden';

    // Initial Render
    renderDynamicContent('en');

    // Start Boot Sequence
    runBootSequence();

    // Init Navbar Scroll listener
    initNavbarScroll();
});

// Add keyframes for fadeIn manually if not in CSS
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
}
`;
document.head.appendChild(style);
