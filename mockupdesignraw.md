<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shakil Jansberg | System Architect</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background-color: #020617;
            color: #e2e8f0;
            overflow-x: hidden;
            margin: 0;
        }

        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }

        .noise-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 9999; opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .glow-text { text-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
        .glow-box { box-shadow: 0 0 30px -5px rgba(34, 211, 238, 0.15); }
    </style>
</head>
<body>
    <div id="root">Loading System...</div>
    <div class="noise-overlay"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;
        const { motion, AnimatePresence } = window.Motion;

        // --- Translation Data ---
        const translations = {
            en: {
                nav: { architecture: 'Architecture', experience: 'Experience', credentials: 'Credentials', contact: 'Contact', downloadCV: 'Download CV' },
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
                }
            },
            de: {
                nav: { architecture: 'Architektur', experience: 'Erfahrung', credentials: 'Qualifikationen', contact: 'Kontakt', downloadCV: 'Lebenslauf' },
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
                }
            }
        };

        // --- Inline SVG Icon Components ---
        const Icon = ({ type, className = "w-6 h-6" }) => {
            const icons = {
                terminal: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
                code: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
                cpu: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
                database: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
                cloud: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>,
                lock: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
                mail: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
                chevronRight: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"></polyline></svg>,
                download: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
                external: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
                layers: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
                shield: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
                github: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
                linkedin: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
                award: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
                globe: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
                briefcase: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            };
            return icons[type] || null;
        };

        // --- Certification Logo Components ---
        const AWSLogo = () => (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.863.279a2.01 2.01 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36.39-.096.795-.143 1.214-.143.926 0 1.606.216 2.053.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.503.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.295.838.295zm6.41.862c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
            </svg>
        );

        const SalesforceLogo = () => (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.552 2.238a5.11 5.11 0 0 1 2.448-.622c2.823 0 5.112 2.288 5.112 5.111 0 2.823-2.289 5.112-5.112 5.112a5.138 5.138 0 0 1-2.448-.622 4.187 4.187 0 0 1-3.552 2.238 4.195 4.195 0 0 1-3.045-1.306 5.06 5.06 0 0 1-1.306 3.045 4.195 4.195 0 0 1-3.045 1.306c-1.56 0-2.954-.9-3.552-2.238a5.11 5.11 0 0 1-2.448.622C2.288 20.223 0 17.935 0 15.112c0-2.823 2.288-5.111 5.111-5.111.873 0 1.694.22 2.448.622a4.187 4.187 0 0 1 3.552-2.238c1.137 0 2.17.453 2.923 1.188l.028-.028-.056.028z"/>
            </svg>
        );

        const OracleLogo = () => (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M16.412 4.412H7.588v15.176h8.824V4.412zm-7.765.882h6.706v13.412H8.647V5.294zm7.765 15.176h-8.824v.882h8.824v-.882zM12 10.059c-1.46 0-2.647 1.186-2.647 2.647 0 1.46 1.186 2.647 2.647 2.647 1.46 0 2.647-1.186 2.647-2.647 0-1.46-1.186-2.647-2.647-2.647zm0 4.412a1.766 1.766 0 1 1 0-3.53 1.766 1.766 0 0 1 0 3.53z"/>
            </svg>
        );

        const LinuxLogo = () => (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 0 0-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 0 1-.004-.021l-.004-.024a1.807 1.807 0 0 1-.15.706.953.953 0 0 1-.213.335.71.71 0 0 0-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 0 0-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 0 0-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 0 0-.205.334 1.18 1.18 0 0 0-.09.41v.019c.002.089.008.179.037.268.041.158.135.294.24.388a.82.82 0 0 1-.227.066c-.087.028-.176.06-.266.134a.515.515 0 0 0-.1.068.62.62 0 0 1-.218-.335 1.697 1.697 0 0 1-.157-.707v-.023c.006-.2.06-.398.166-.66a1.13 1.13 0 0 1 .438-.535c.188-.135.371-.197.584-.197zM8.063 13.5c.088 0 .176.004.266.01.29.016.58.058.862.12.277.06.546.14.802.24.254.098.496.216.72.35.223.135.427.287.606.458.18.17.333.36.46.565.125.205.224.426.294.658.07.23.11.473.12.72.01.247-.02.494-.086.732-.067.24-.168.466-.3.675-.135.21-.3.398-.494.56-.193.163-.414.3-.657.406-.242.107-.505.18-.778.22-.274.04-.555.046-.83.02a3.02 3.02 0 0 1-.788-.16 2.784 2.784 0 0 1-.704-.353 2.692 2.692 0 0 1-.548-.52 2.545 2.545 0 0 1-.388-.644 2.472 2.472 0 0 1-.2-.733 2.585 2.585 0 0 1 .02-.753c.055-.25.147-.49.274-.713.127-.222.286-.426.473-.606.187-.18.4-.336.635-.46.234-.123.486-.213.75-.267.264-.054.536-.07.806-.05zm7.868.1c.266 0 .53.02.786.067.256.046.502.12.732.218.23.1.44.22.628.364.188.145.352.313.49.503.136.19.246.398.326.62.08.22.13.453.147.69.018.237-.006.476-.07.706-.063.23-.164.446-.298.644-.134.197-.3.375-.494.527-.193.152-.413.277-.653.37-.24.095-.497.157-.76.186-.264.028-.53.024-.79-.014a3.053 3.053 0 0 1-.752-.19 2.836 2.836 0 0 1-.662-.354 2.642 2.642 0 0 1-.532-.51 2.445 2.445 0 0 1-.374-.63 2.328 2.328 0 0 1-.176-.71 2.44 2.44 0 0 1 .042-.74c.06-.246.156-.482.285-.7.13-.22.292-.418.483-.59.19-.172.408-.318.648-.434.24-.115.5-.2.77-.25.27-.05.546-.065.82-.046z"/>
            </svg>
        );

        // --- Components ---

        const BootSequence = ({ onComplete, lang }) => {
            const [lines, setLines] = useState([]);
            const bootText = lang === 'de' ? [
                "KERNEL V2.5 WIRD INITIALISIERT...",
                "MODULE WERDEN GELADEN: [JAVA] [SPRING] [REACT] [AWS]...",
                "SICHERHEITSZERTIFIKATE WERDEN ÜBERPRÜFT... [OK]",
                "PORTFOLIO-ASSETS WERDEN GELADEN...",
                "OPTIMIERUNG FÜR REKRUTIERER...",
                "ZUGRIFF GEWÄHRT."
            ] : [
                "INITIALIZING KERNEL V2.5...",
                "LOADING MODULES: [JAVA] [SPRING] [REACT] [AWS]...",
                "VERIFYING SECURITY CERTIFICATES... [PASS]",
                "MOUNTING PORTFOLIO ASSETS...",
                "OPTIMIZING FOR RECRUITER EXPERIENCE...",
                "ACCESS GRANTED."
            ];

            useEffect(() => {
                let delay = 0;
                bootText.forEach((line, index) => {
                    delay += Math.random() * 400 + 200;
                    setTimeout(() => {
                        setLines(prev => [...prev, line]);
                        if (index === bootText.length - 1) setTimeout(onComplete, 800);
                    }, delay);
                });
            }, []);

            return (
                <motion.div 
                    className="fixed inset-0 bg-black z-50 flex items-center justify-center font-mono text-emerald-500 p-8"
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.8 } }}
                >
                    <div className="w-full max-w-2xl">
                        {lines.map((line, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-2 text-sm md:text-base">
                                <span className="text-slate-600 mr-3">[{i+1}]</span>
                                {line}
                                {i === lines.length - 1 && <span className="animate-pulse ml-2">_</span>}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            );
        };

        const Navbar = ({ lang, setLang, t }) => {
            const [scrolled, setScrolled] = useState(false);
            useEffect(() => {
                const handleScroll = () => setScrolled(window.scrollY > 50);
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            return (
                <motion.nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`} initial={{ y: -100 }} animate={{ y: 0 }}>
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                        <div className="text-xl font-bold tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                            SJ<span className="text-cyan-400">.</span>
                        </div>
                        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                            {['architecture', 'experience', 'credentials', 'contact'].map((item) => (
                                <button key={item} onClick={() => document.getElementById(item).scrollIntoView({behavior: 'smooth'})} className="hover:text-cyan-400 transition-colors">
                                    {t.nav[item]}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
                                className="text-slate-400 hover:text-white text-sm font-mono"
                            >
                                {lang.toUpperCase()}
                            </button>
                            <a 
                                href="#"
                                download
                                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-xs font-mono rounded hover:bg-cyan-500/20 transition-all flex items-center gap-2"
                            >
                                <Icon type="download" className="w-3 h-3" />
                                {t.nav.downloadCV}
                            </a>
                        </div>
                    </div>
                </motion.nav>
            );
        };

        const Hero = ({ t }) => {
            return (
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
                    
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-6">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                {t.hero.available}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                                {t.hero.title1} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 glow-text">{t.hero.title2}</span> <br />
                                {t.hero.title3}
                            </h1>
                            <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                                {t.hero.subtitle}
                            </p>
                            <div className="flex gap-4">
                                <button onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})} className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded transition-all flex items-center gap-2">
                                    {t.hero.viewWork} <Icon type="chevronRight" className="w-4 h-4" />
                                </button>
                                <a 
                                    href="#"
                                    download
                                    className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded transition-all border border-slate-700 flex items-center gap-2"
                                >
                                    <Icon type="download" className="w-4 h-4" /> {t.hero.resume}
                                </a>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden md:block">
                            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-lg p-6 shadow-2xl glow-box transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="flex gap-2 mb-4 border-b border-slate-700 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="font-mono text-sm text-slate-300 space-y-2">
                                    <p><span className="text-purple-400">public class</span> <span className="text-yellow-300">Architect</span> {'{'}</p>
                                    <p className="pl-4"><span className="text-purple-400">private final</span> Stack stack = <span className="text-purple-400">new</span> Stack();</p>
                                    <p className="pl-4 text-slate-500">// Initializing Core Competencies</p>
                                    <p className="pl-4">stack.push(<span className="text-green-400">"Resilience4j"</span>);</p>
                                    <p className="pl-4">stack.push(<span className="text-green-400">"Spring Boot"</span>);</p>
                                    <p className="pl-4">stack.push(<span className="text-green-400">"Angular"</span>);</p>
                                    <p className="pl-4"><span className="text-cyan-400">return</span> Production.<span className="text-yellow-300">ready</span>();</p>
                                    <p>{'}'}</p>
                                </div>
                            </div>
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-600 p-4 rounded-lg shadow-xl flex items-center gap-3">
                                <div className="bg-emerald-500/20 p-2 rounded text-emerald-400"><Icon type="shield" className="w-6 h-6" /></div>
                                <div>
                                    <div className="text-xs text-slate-400">Security Level</div>
                                    <div className="font-bold text-sm">DevSecOps</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            );
        };

        const BentoGrid = ({ t }) => {
            const cards = [
                { titleKey: 0, icon: "cpu", col: "md:col-span-2", color: "border-cyan-500/30" },
                { titleKey: 1, icon: "code", col: "md:col-span-1", color: "border-purple-500/30" },
                { titleKey: 2, icon: "cloud", col: "md:col-span-1", color: "border-orange-500/30" },
                { titleKey: 3, icon: "database", col: "md:col-span-2", color: "border-emerald-500/30" },
                { titleKey: 4, icon: "lock", col: "md:col-span-1", color: "border-red-500/30" },
            ];

            return (
                <section id="architecture" className="py-24 bg-slate-950 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.architecture.title} <span className="text-cyan-400">{t.architecture.titleHighlight}</span></h2>
                            <p className="text-slate-400 max-w-2xl">{t.architecture.subtitle}</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {cards.map((card, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5 }} className={`${card.col} bg-slate-900/50 backdrop-blur-sm border ${card.color} p-8 rounded-2xl group hover:bg-slate-800/50 transition-all duration-300`}>
                                    <div className="mb-4 text-slate-300 group-hover:text-cyan-400 transition-colors"><Icon type={card.icon} className="w-8 h-8" /></div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-100">{t.architecture.cards[card.titleKey].title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{t.architecture.cards[card.titleKey].desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

        const Experience = ({ t }) => {
            const jobs = [
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

            return (
                <section id="experience" className="py-24 bg-slate-900/30">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title} <span className="text-emerald-400">{t.experience.titleHighlight}</span></h2>
                            <p className="text-slate-400">{t.experience.subtitle}</p>
                        </motion.div>

                        <div className="relative border-l border-slate-800 ml-3 space-y-12">
                            {jobs.map((job, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-900 shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                        <h3 className="text-xl font-bold text-slate-200">{job.role}</h3>
                                        <span className="text-sm font-mono text-cyan-500">{job.date}</span>
                                    </div>
                                    <div className="text-slate-400 font-medium mb-3">{job.company}</div>
                                    <p className="text-slate-500 mb-4 leading-relaxed">{job.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {job.tags.map(tag => <span key={tag} className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700">{tag}</span>)}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

        const Credentials = ({ t }) => {
            return (
                <section id="credentials" className="py-24 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.credentials.title} <span className="text-purple-400">{t.credentials.titleHighlight}</span></h2>
                            <p className="text-slate-400">{t.credentials.subtitle}</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Education */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/50 border border-slate-700 p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <Icon type="award" className="w-8 h-8 text-cyan-400" />
                                    <h3 className="text-xl font-bold text-white">{t.credentials.education}</h3>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <div className="font-bold text-slate-200">Master of Science in Computer Science (MSCS)</div>
                                        <div className="text-cyan-400 text-sm">University of the Punjab (PUCIT), Lahore</div>
                                        <div className="text-slate-500 text-sm mt-1">Software Engineering, AI, OOP, Data Communication & Networks</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-200">Bachelor of Science in Computer Science (BSCS)</div>
                                        <div className="text-cyan-400 text-sm">University of the Punjab (PUCIT), Lahore</div>
                                        <div className="text-slate-500 text-sm mt-1">Data Structures & Algorithms, OS, Computer Architecture</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-200">HSSC (Pre-Engineering)</div>
                                        <div className="text-cyan-400 text-sm">Government MAO College, Lahore</div>
                                        <div className="text-slate-500 text-sm mt-1">Mathematics, Physics</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Certifications */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900/50 border border-slate-700 p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <Icon type="shield" className="w-8 h-8 text-emerald-400" />
                                    <h3 className="text-xl font-bold text-white">{t.credentials.certifications}</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-3 bg-slate-800/50 rounded border border-slate-700 flex items-center gap-3">
                                        <OracleLogo />
                                        <div className="font-bold text-slate-200 text-sm">Oracle Certified Professional: Java SE 17 Developer</div>
                                    </div>
                                    <div className="p-3 bg-slate-800/50 rounded border border-slate-700 flex items-center gap-3">
                                        <AWSLogo />
                                        <div className="font-bold text-slate-200 text-sm">AWS Certified Solutions Architect – Associate</div>
                                    </div>
                                    <div className="p-3 bg-slate-800/50 rounded border border-slate-700 flex items-center gap-3">
                                        <AWSLogo />
                                        <div className="font-bold text-slate-200 text-sm">AWS Certified Cloud Practitioner</div>
                                    </div>
                                    <div className="p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded border border-blue-500/30 flex items-center gap-3">
                                        <SalesforceLogo />
                                        <div className="font-bold text-blue-200 text-sm">Salesforce Certified Developer I & II</div>
                                    </div>
                                    <div className="p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded border border-blue-500/30 flex items-center gap-3">
                                        <SalesforceLogo />
                                        <div className="font-bold text-blue-200 text-sm">Salesforce Certified Administrator</div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-700">
                                        <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-2">
                                            <LinuxLogo />
                                            {t.credentials.linuxFoundation}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {['LFS111 (Node.js)', 'LFS151 (Cloud)', 'LFS158 (Kubernetes)', 'LFS167 (Jenkins)', 'LFS180 (DevSecOps)', 'SKF100 (OWASP)'].map(cert => (
                                                <span key={cert} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">{cert}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Languages */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-2 bg-gradient-to-r from-slate-900/50 to-slate-800/30 border border-slate-700 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center">
                                <div className="flex items-center gap-3 mb-4 md:mb-0">
                                    <Icon type="globe" className="w-8 h-8 text-orange-400" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{t.credentials.languages}</h3>
                                        <p className="text-slate-400 text-sm">{t.credentials.communication}</p>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">English</div>
                                        <div className="text-xs text-emerald-400 font-mono">{t.credentials.native}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">Deutsch</div>
                                        <div className="text-xs text-cyan-400 font-mono">{t.credentials.intermediate}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            );
        };

        const Projects = ({ t }) => {
            const projects = [
                { title: "PDFChatten", subtitle: "AI SaaS Platform", desc: "Production-grade AI app enabling conversational interaction with PDFs. Features real-time streaming, vector search (RAG), and Stripe monetization.", stack: ["Next.js 14", "LangChain", "Pinecone", "Stripe", "Neon"], color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30" },
                { title: "WorkForce OS", subtitle: "Enterprise Management", desc: "Microservices architecture for workforce time-tracking. Implemented circuit breakers (Resilience4j) and distributed tracing for high availability.", stack: ["Spring Boot", "Docker", "GitLab CI", "PostgreSQL"], color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/30" }
            ];

            return (
                <section id="projects" className="py-24 bg-slate-900/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title} <span className="text-purple-400">{t.projects.titleHighlight}</span></h2>
                            <p className="text-slate-400">{t.projects.subtitle}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((proj, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`group relative bg-slate-900 rounded-2xl border ${proj.border} overflow-hidden hover:shadow-2xl transition-all duration-500`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <div className="relative p-8 h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-slate-800 rounded-lg text-white"><Icon type="layers" className="w-6 h-6" /></div>
                                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Icon type="external" className="w-5 h-5" /></button>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-1 text-white">{proj.title}</h3>
                                        <div className="text-sm text-cyan-400 mb-4 font-mono">{proj.subtitle}</div>
                                        <p className="text-slate-400 mb-8 flex-grow">{proj.desc}</p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {proj.stack.map(s => <span key={s} className="text-xs font-mono text-slate-300 bg-slate-950/50 px-2 py-1 rounded border border-slate-700">{s}</span>)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

        const Contact = ({ t }) => {
            return (
                <section id="contact" className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-slate-950"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.contact.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">{t.contact.titleHighlight}</span></h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">{t.contact.subtitle}</p>
                            
                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <a href="mailto:shakil.jansberg@gmail.com" className="group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded overflow-hidden">
                                    <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <span className="relative flex items-center justify-center gap-2"><Icon type="mail" className="w-5 h-5" /> shakil.jansberg@gmail.com</span>
                                </a>
                                <div className="flex gap-4 justify-center">
                                    <a href="#" className="p-4 bg-slate-800 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700"><Icon type="linkedin" className="w-6 h-6" /></a>
                                    <a href="#" className="p-4 bg-slate-800 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700"><Icon type="github" className="w-6 h-6" /></a>
                                </div>
                            </div>
                        </motion.div>
                        
                        <footer className="mt-24 pt-8 border-t border-slate-800 text-slate-600 text-sm font-mono flex flex-col md:flex-row justify-between items-center">
                            <p>© 2025 Shakil Jansberg. {t.contact.footer}</p>
                            <p className="mt-2 md:mt-0">Built with React & Tailwind</p>
                        </footer>
                    </div>
                </section>
            );
        };

        const App = () => {
            const [loading, setLoading] = useState(true);
            const [lang, setLang] = useState('en');
            const t = translations[lang];

            return (
                <div className="bg-slate-950 min-h-screen selection:bg-cyan-500/30">
                    <AnimatePresence>
                        {loading && <BootSequence onComplete={() => setLoading(false)} lang={lang} />}
                    </AnimatePresence>
                    {!loading && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                            <Navbar lang={lang} setLang={setLang} t={t} />
                            <Hero t={t} />
                            <BentoGrid t={t} />
                            <Experience t={t} />
                            <Credentials t={t} />
                            <Projects t={t} />
                            <Contact t={t} />
                        </motion.div>
                    )}
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>