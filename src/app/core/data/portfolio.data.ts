import { PortfolioData } from '../models/portfolio.models';

/**
 * Single source of truth for all resume-derived content.
 * Edit this file to update the portfolio — no template changes required.
 *
 * To change the profile photo: drop your image at
 * `public/assets/img/profile.png` (square, ideally 800x800 or larger).
 * Nothing else needs to change.
 */
export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Dheeraj Kumar Singh',
  initials: 'DS',
  role: 'Software Developer',
  headline: {
    lead: 'Building fast, reliable',
    accent: 'full-stack',
    trail: 'products for the web.',
  },
  tagline:
    'Software Developer focused on responsive, scalable applications with Angular, React and .NET — shipping clean, production-ready code in Agile teams.',
  location: 'Bengaluru, Karnataka, India',
  email: 'dheeraj25122002@gmail.com',
  phone: '+91-7296030779',
  resumeUrl: 'assets/resume/Dheeraj_Kumar_Singh_Resume.pdf',
  availability: 'Open to new opportunities',
  profile: {
    src: 'assets/img/profile.png',
    alt: 'Portrait of Dheeraj Kumar Singh',
  },
  summary:
    'Software Developer with experience building responsive, scalable full-stack web applications using Angular, React.js, Node.js, and .NET. Skilled in API development, cloud fundamentals (AWS), testing, debugging, and bug fixing, with a strong foundation in Java and Data Structures and Algorithms (DSA). Proven problem-solver contributing to high-quality software delivery in Agile, collaborative teams.',
  marquee: [
    'Angular',
    'TypeScript',
    'React.js',
    '.NET',
    'C#',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'REST APIs',
    'AWS',
    'Java',
    'Tailwind CSS',
    'Angular Material',
    'DevExtreme',
    'Git',
    'Testing',
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/Dheeraj25km', icon: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dheeraj-kumar-singh-812a29227/',
      icon: 'linkedin',
    },
    { label: 'Email', url: 'mailto:dheeraj25122002@gmail.com', icon: 'mail' },
  ],
  experience: [
    {
      role: 'Software Developer',
      company: 'Arabian Infotech',
      duration: 'Mar 2026 — Present',
      location: 'Bengaluru, Karnataka',
      current: true,
      summary:
        'Building and maintaining production web applications end to end, with an eye on performance and long-term maintainability.',
      highlights: [
        'Develop, build, and maintain responsive, scalable web applications, ensuring performance, reliability, and cross-browser compatibility.',
        'Collaborate with cross-functional teams to design, develop, and deploy new features and enhancements to existing applications.',
        'Maintain and optimize existing codebases, identify and resolve bugs, and improve overall application stability and performance.',
      ],
      stack: ['Angular', 'TypeScript', 'REST APIs', 'Git'],
    },
    {
      role: 'SDE Trainee, Software Developer',
      company: 'Vyshnavi Information Technologies (Intellibuddies)',
      duration: 'Mar 2025 — Feb 2026',
      location: 'Bengaluru, Karnataka',
      current: false,
      summary:
        'Worked across the stack on an enterprise automation product — UI components on the front, C#/.NET services behind them.',
      highlights: [
        'Developed responsive, scalable UI components using Angular, TypeScript, Angular Material, and DevExtreme, following clean, reusable architecture.',
        'Contributed to backend development using C# and .NET Framework, implementing APIs, data validation, and scalable data processing workflows.',
        'Performed unit testing, debugging, and bug fixing; collaborated with QA in an Agile environment across sprint planning, stand-ups, and code reviews.',
      ],
      stack: ['Angular', 'C#', '.NET Framework', 'Angular Material', 'DevExtreme'],
    },
  ],
  projects: [
    {
  name: 'TastyGo',
  tagline: 'Full-stack food delivery platform',

  description:
    'Designed and developed a full-stack Food Delivery application using the MERN stack with a dynamic, responsive UI. Built RESTful APIs for authentication, order processing, and product management, with JWT-based security, MongoDB integration, and a secure payment gateway.',

  outcomes: [
    'Dynamic and responsive UI developed using React.js',
    'RESTful APIs built using Node.js and Express.js',
    'JWT-based authentication and authorization',
    'User authentication, order processing, and product management',
    'MongoDB database integration and data management',
    'Complete food ordering experience from menu browsing to checkout and order tracking',
    'Role-based access for secure user and admin operations',
  ],
  

  stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],

  githubUrl: 'https://github.com/Dheeraj25km/Food-Delivery-MERN-',

  featured: true,
  year: '2025',
  icon: 'server',
},
    {
      name: 'Portfolio',
      tagline: 'This site — Angular, from scratch',
      description:
        'A component-driven personal site built on standalone Angular components, signals and a token-based design system, with a single data file driving every section.',
      outcomes: [
        'Signal-based state, zero third-party UI libs',
        'Dark/light theming via CSS custom properties',
        'Accessible, responsive and motion-safe',
      ],
      stack: ['Angular', 'TypeScript', 'SCSS'],
      githubUrl: 'https://github.com/Dheeraj25km',
      featured: true,
      year: '2026',
      icon: 'layout',
    },
    {
      name: 'DocFusion',
      tagline: 'Word to PDF conversion service',
      description:
        'A document conversion tool with an upload pipeline that validates file types and sizes, streams conversions, and reports failures clearly instead of silently dropping them.',
      outcomes: [
        'Robust file validation and error handling',
        'Efficient server-side document processing',
        'Clean, responsive upload interface',
      ],
      stack: ['Node.js', 'Express.js', 'React.js'],
      githubUrl: 'https://github.com/Dheeraj25km/Word-to-PDF-converter',
      featured: false,
      year: '2024',
      icon: 'code',
    },

    {
  name: 'MelodyStream',
  tagline: 'Responsive music streaming web application',
  description:
    'A responsive music streaming interface built with HTML, CSS, and JavaScript, featuring interactive audio playback controls and a user-friendly listening experience.',
  outcomes: [
    'Responsive and modern music streaming interface',
    'Interactive audio playback with track controls',
    'Smooth track progress and volume management',
  ],
  stack: ['HTML', 'CSS', 'JavaScript'],
  githubUrl: 'https://github.com/Dheeraj25km/MelodyStream',
  featured: false,
  year: '2024',
  icon: 'music',
},
  ],
  skills: [
    {
      label: 'Languages',
      icon: 'code',
      blurb: 'Typed, object-oriented foundations I write production code in every day.',
      items: ['Java', 'JavaScript', 'TypeScript', 'C#'],
    },
    {
      label: 'Frontend',
      icon: 'layout',
      blurb: 'Component architecture, responsive layout and design systems.',
      items: [
        'Angular',
        'React.js',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Tailwind CSS',
        'Angular Material',
        'DevExtreme',
      ],
    },
    {
      label: 'Backend & Data',
      icon: 'server',
      blurb: 'REST API design, validation, and both relational and document stores.',
      items: ['.NET', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'SQL'],
    },
    {
      label: 'Cloud & Tools',
      icon: 'cloud',
      blurb: 'Cloud fundamentals plus the everyday toolchain around shipping.',
      items: ['AWS', 'Git', 'GitHub', 'VS Code', 'Claude (AI-assisted dev)'],
    },
    {
      label: 'Core Concepts',
      icon: 'cpu',
      blurb: 'The fundamentals behind the frameworks — 400+ problems solved.',
      items: ['Data Structures & Algorithms', 'OOP', 'Problem-Solving'],
    },
  ],
   education: [
    {
      degree: 'Bachelor of Technology, Computer Science',
      institution: 'Radharaman Institute of Technology & Science, Bhopal, MP',
      duration: '2021 — 2025',
      detail: 'CGPA: 8.19',
    },
    {
      degree: '12th (BSEB)',
      institution: 'Bihar School Examination Board',
      duration: '',
      detail: '75.6%',
    },
    {
      degree: '10th (BSEB)',
      institution: 'Bihar School Examination Board',
      duration: '',
      detail: '78%',
    },
  ],
  certifications: [
    'Foundation of Cybersecurity',
    'Generative AI (Microsoft & LinkedIn)',
    'Soft Skills',
  ],
  principles: [
    {
      title: 'Components that survive change',
      detail: 'Small, reusable pieces with clear inputs — so features are added, not bolted on.',
      icon: 'layout',
    },
    {
      title: 'APIs designed before they are built',
      detail: 'Predictable contracts, real validation, and errors that say what actually broke.',
      icon: 'server',
    },
    {
      title: 'Fundamentals over frameworks',
      detail: 'DSA and OOP underneath, so the right structure is picked before the library is.',
      icon: 'cpu',
    },
    {
      title: 'Shipped, reviewed, maintained',
      detail: 'Agile rhythm: sprint planning, code review, testing, and fixing what I ship.',
      icon: 'check',
    },
  ],
  stats: [
    { label: 'Coding problems solved', value: '400+' },
    { label: 'Years building production apps', value: '1+' },
    { label: 'Projects shipped end to end', value: '4' },
    { label: 'Core languages', value: '4' },
  ],
};
