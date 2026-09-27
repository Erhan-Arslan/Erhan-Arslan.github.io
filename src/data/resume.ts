import {
  BrainCircuit,
  Cable,
  CodeXml,
  Component,
  Database,
  Droplets,
  Fingerprint,
  GitBranch,
  Glasses,
  Languages,
  LayoutDashboard,
  LayoutTemplate,
  LineChart,
  Lock,
  Mail,
  Navigation,
  Phone,
  QrCode,
  Route,
  Scale,
  ShieldCheck,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export interface Profile {
  name: string;
  role: string;
  location: string;
  summary: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: { label: string; href: string };
  github: { label: string; href: string };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface ArchitectureStep {
  title: string;
  detail: string;
  icon: LucideIcon;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  problem: string;
  approach: string;
  result: string;
}

export interface Challenge {
  title: string;
  challenge: string;
  solution: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProjectItem {
  /** Also used as the `?project=` deep-link slug and the screenshot folder name. */
  id: string;
  title: string;
  platform: string;
  /** Dates as written in the résumé; omitted when the résumé gives none. */
  period?: string;
  status?: string;
  summary: string;
  bullets: string[];
  stack: string[];
  /** Building blocks of the project. */
  architecture: ArchitectureStep[];
  /** Set for group work, e.g. "Team project · 8 contributors". */
  team?: string;
  /** Your position on the project, e.g. "Lead Frontend Developer". */
  role?: string;
  roleSummary?: string;
  caseStudy?: CaseStudy;
  metrics?: Metric[];
  challenges?: Challenge[];
  /** Extra libraries worth naming, shown under the main stack in the dialog only. */
  libraries?: string[];
  links?: ProjectLink[];
  icon: LucideIcon;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  label: string;
  icon: LucideIcon;
  items: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  affiliation: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon | 'github' | 'linkedin';
  external: boolean;
}

export const profile: Profile = {
  name: 'Erhan Arslan',
  role: 'Front-End, Web & Mobile Developer',
  location: 'Istanbul, Turkey',
  summary:
    'Results-driven Computer Engineering graduate specializing in Front-End, Web, and Mobile Development. Proven expertise in building scalable, user-centric applications using React, React Native, and TypeScript, backed by hands-on internship and project experience.',
  email: 'erhanarslan.oney@gmail.com',
  phone: '+90 533 163 55 44',
  phoneHref: '+905331635544',
  linkedin: { label: 'linkedin.com/in/arslan-erhan', href: 'https://www.linkedin.com/in/arslan-erhan' },
  github: { label: 'github.com/Erhan-Arslan', href: 'https://github.com/Erhan-Arslan' },
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export const education: EducationItem = {
  school: 'Istanbul Kultur University',
  degree: 'B.Sc. in Computer Engineering',
  location: 'Istanbul, Turkey',
  period: '2021 – June 2026',
  affiliation: 'Huawei Student Developers (HSD) – Active Member',
};

export const experience: ExperienceItem[] = [
  {
    id: 'microsoft',
    role: 'AI Project Intern',
    company: 'Microsoft (Remote)',
    location: 'Istanbul, Turkey',
    period: 'June 2026 – August 2026',
    bullets: [
      'Developing an independent AI project utilizing Microsoft Foundry Local, SQLite, and RAG architectures within a structured remote program.',
      'Participating in weekly technical alignment meetings and collaborative peer-support networks.',
      'Preparing to deliver the final capstone project and presentation to earn the program completion certificate.',
    ],
  },
  {
    id: 'bagcilar',
    role: 'Project & Software Support Intern',
    company: 'Bagcilar Municipality',
    location: 'Istanbul, Turkey',
    period: 'June 2025 – Aug 2025',
    bullets: [
      'Prepared reports and project documentation.',
      'Supported software and digitalization processes.',
      'Collaborated with the team to improve project workflows.',
    ],
  },
  {
    id: 'erpa',
    role: 'Production & Software Support Intern',
    company: 'ERPA Technology',
    location: 'Istanbul, Turkey',
    period: 'Nov 2024 – Dec 2024',
    bullets: [
      'Provided software support for production systems.',
      'Troubleshot software issues and improved reliability.',
      'Maintained technical documentation and tracked updates.',
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'pisp',
    title: 'PISP',
    platform: 'Mobile app',
    period: 'Feb 2026 – June 2026',
    summary: 'Privacy-preserving mobile application for secure local data storage and peer-to-peer data sharing.',
    bullets: [
      'Developed a local-first serverless mobile application using React Native.',
      'Implemented peer-to-peer encrypted data exchange with EdDSA QR codes.',
      'Developed an AES-256 encrypted vault with biometric authentication.',
      'Integrated an ODRL/DPV-based minimum disclosure policy engine.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'AES-256', 'EdDSA'],
    libraries: ['ODRL / DPV', 'expo-camera', 'expo-local-authentication', 'react-native-qrcode-svg', 'AppState'],
    role: 'Lead Frontend Developer',
    roleSummary:
      'Beyond developing the project, I served as Lead Frontend Developer — responsible for designing the React Native/Expo interfaces, the client-side security flows, complex state management and client performance optimization.',
    caseStudy: {
      problem:
        'Digital services keep personal data on central servers, which leads to data leaks, unauthorized profiling and privacy violations. Existing systems also do not technically enforce the principles of data minimization and purpose limitation at the application layer.',
      approach:
        'Built with React Native and Expo, PISP stores data in an AES-256 encrypted vault on the device instead of the cloud. It offers attribute-level permission management across 14 thematic domains and uses an EdDSA-signed, QR-based peer-to-peer protocol that shares only the minimum required information — with no central server.',
      result:
        'The system passed all unit tests and static-analysis checks with zero errors. Cryptographic operations complete in under 500 ms, giving users full data sovereignty and achieving full technical compliance with GDPR and KVKK.',
    },
    metrics: [
      { value: '14', label: 'Thematic data domains with attribute-level consent' },
      { value: '< 500 ms', label: 'Cryptographic operations' },
      { value: '60 FPS', label: 'UI while vault writes run in the background' },
      { value: '0', label: 'Errors in unit tests and static analysis' },
    ],
    challenges: [
      {
        title: 'Performance & state management',
        challenge:
          'Instant changes to hundreds of fields and consent toggles across 14 domains could slow down the UI thread.',
        solution:
          'Adopted optimistic UI patterns and moved vault writes to the background with a 350 ms debounce, keeping the interface at a fluid 60 FPS.',
      },
      {
        title: 'Sensitive data & security interfaces',
        challenge:
          'Sensitive data covered by GDPR Article 9, such as health and biometric data, risked being shared by accident.',
        solution:
          'These fields are off by default, and two-step confirmation modals were built into the interface.',
      },
      {
        title: 'QR flow & transparency',
        challenge:
          'Incoming QR requests received through expo-camera had to be validated, and a response generated instantly after approval (react-native-qrcode-svg).',
        solution:
          'Separated the Share and Scan modules and designed a Disclosure Preview screen where users can clearly see what they are about to share.',
      },
      {
        title: 'Session security (app lifecycle)',
        challenge: 'When the app was sent to the background, data risked staying exposed.',
        solution:
          "Listened to React Native's AppState to auto-lock the app when it moves to the background, and required biometric unlock via expo-local-authentication when it returns to the foreground.",
      },
    ],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Erhan-Arslan/PISP' }],
    architecture: [
      {
        title: 'Local-first vault',
        detail: 'Data stays on the device in an AES-256 encrypted vault — no central server involved.',
        icon: Lock,
      },
      {
        title: 'Consent & disclosure',
        detail:
          'Attribute-level permissions across 14 domains; sensitive fields are off by default and confirmed in two steps, with a Disclosure Preview before sharing.',
        icon: Scale,
      },
      {
        title: 'Peer-to-peer QR sharing',
        detail: 'An EdDSA-signed, QR-based protocol shares only the minimum required information.',
        icon: QrCode,
      },
      {
        title: 'Session security',
        detail: 'Auto-lock when the app goes to the background; biometric unlock when it returns.',
        icon: Fingerprint,
      },
    ],
    icon: ShieldCheck,
    featured: true,
  },
  {
    id: 'optical-store',
    title: 'Optical Store Website',
    platform: 'Web app',
    status: 'In Development',
    summary: 'Responsive React-based e-commerce interface for product browsing and management.',
    bullets: [
      'Developing a responsive e-commerce web application using React.',
      'Building reusable React components using Hooks and state management.',
      'Applying responsive UI design principles.',
    ],
    stack: ['React', 'Tailwind CSS', 'React Router', 'REST APIs'],
    architecture: [
      {
        title: 'Components & state',
        detail: 'Reusable React components built with Hooks and state management.',
        icon: Component,
      },
      {
        title: 'Routing',
        detail: 'React Router handles navigation across the storefront.',
        icon: Route,
      },
      {
        title: 'Data layer',
        detail: 'Product data is consumed through REST APIs.',
        icon: Cable,
      },
      {
        title: 'Responsive UI',
        detail: 'Responsive layouts styled with Tailwind CSS.',
        icon: LayoutTemplate,
      },
    ],
    icon: Glasses,
  },
  {
    id: 'blood-donation',
    title: 'BloodConnect',
    platform: 'Android app',
    period: 'January 2025 – May 2025',
    team: 'Team project · 8 contributors',
    summary: 'Android application connecting blood donors, hospitals and recipients.',
    bullets: [
      'Developed an Android application connecting blood donors and recipients.',
      'Designed user interfaces using XML layouts.',
      'Implemented activity navigation and user input handling.',
    ],
    stack: ['Kotlin', 'Android Studio', 'Firebase', 'Figma'],
    libraries: ['Jetpack Navigation', 'ViewModel', 'LiveData', 'RecyclerView', 'Firestore SnapshotListener'],
    role: 'UI/UX Designer & Frontend Developer',
    roleSummary:
      'I designed all screen flows of the mobile app — both the donor and the hospital interfaces — in Figma. I then coded those interfaces in Android Studio using Kotlin/Jetpack components, RecyclerView, ViewModel and LiveData, and I was responsible for optimizing the user-experience flows.',
    caseStudy: {
      problem:
        'In emergencies, matching patients with blood donors is slow, the nearest donors and hospitals cannot be found efficiently, and traditional methods lack real-time tracking and data security.',
      approach:
        'A hybrid ecosystem that bridges donors, hospitals and recipients: a Kotlin (Android Studio) mobile app, a hospital interface and a web platform. Firebase Firestore and Authentication provide scalable real-time data management on the back end, while donor prioritization is supported by a TensorFlow-based AI/machine-learning model.',
      result:
        "Emergency notifications are faster, hospitals' blood stock and request processes are digitized, and role-based access control makes for a secure, interactive donor community.",
    },
    metrics: [
      { value: '8', label: 'Team members, working in Scrum with weekly sprints' },
      { value: '4', label: 'Components: donor app, hospital app, web platform, AI module' },
      { value: '2', label: 'User roles: donor and verified hospital' },
    ],
    challenges: [
      {
        title: 'Role-based navigation & complex flows',
        challenge:
          'Donors and verified hospitals share the same infrastructure but must be routed to completely different interfaces.',
        solution:
          'Built with Android Jetpack Navigation components and conditional-destination logic, so users land on the dashboard for their role (donor or hospital) the moment they log in.',
      },
      {
        title: 'Real-time data sync & UI performance',
        challenge:
          'Listing blood requests on the hospital panel and scanning donor lists by efficiency score could create a heavy data load.',
        solution:
          'Integrated Firestore SnapshotListener and RecyclerAdapter structures so the interface stays in sync with the data in the background, automatically and without delay.',
      },
      {
        title: 'UI/UX consistency & usability',
        challenge:
          'In emergency scenarios — such as urgent notifications and request-creation screens — users had to act quickly without getting confused.',
        solution:
          'Built prototypes from Figma wireframes, strengthened form validation with Kotlin extension functions, and conveyed error states intuitively with Toast messages and AlertDialogs.',
      },
    ],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Erhan-Arslan/BloodConnect' }],
    architecture: [
      {
        title: 'Role-based entry',
        detail:
          'Login checks the donor or hospital collection — hospitals get in only when verified — and routes each role to its own dashboard.',
        icon: Navigation,
      },
      {
        title: 'Donor & hospital apps',
        detail:
          'Kotlin screens for requests, donor lists, blood inventory, donation logging, maps, donation history and emergency notifications.',
        icon: LayoutTemplate,
      },
      {
        title: 'Firebase back end',
        detail: 'Firestore collections for donors, hospitals, blood requests and donations, with real-time updates and security rules.',
        icon: Database,
      },
      {
        title: 'AI donor scoring',
        detail: 'A TensorFlow model scores donors; those above a threshold are picked for emergency notifications.',
        icon: BrainCircuit,
      },
    ],
    icon: Droplets,
  },
  {
    id: 'stock-forecasting',
    title: 'Stock Price Forecasting',
    platform: 'Machine Learning project',
    summary:
      'A PyTorch time-series project comparing LSTM and GRU networks — and a naive baseline — for next-day stock price forecasting.',
    bullets: [
      'Built PyTorch LSTM and GRU regressors for one-step-ahead, next-day closing-price forecasting, benchmarked against a naive last-value baseline.',
      'Prevented data leakage with chronological (non-random) train/validation/test splits and a scaler fit only on the training prices.',
      'Built a local, real-time Chart.js dashboard to launch experiments, stream logs, and compare model metrics and predictions interactively.',
      'Added pytest coverage, ruff linting, a GitHub Actions CI workflow, and a runnable Jupyter notebook with an offline fast mode.',
    ],
    stack: ['PyTorch', 'Python', 'scikit-learn', 'yfinance'],
    libraries: ['Chart.js', 'pytest', 'ruff', 'GitHub Actions', 'Jupyter'],
    caseStudy: {
      problem:
        'Portfolio time-series projects often leak future information into training — through random splits or scaling on the full series — and skip comparing against a real baseline, which makes results look more meaningful than they are.',
      approach:
        'Built a leakage-safe pipeline with chronological splits and train-only scaling, then trained a PyTorch LSTM and GRU on real AMZN daily closing prices (2010–2025), benchmarking both against a naive last-value baseline across RMSE, MAE, MAPE, R², and directional accuracy.',
      result:
        "On raw closing prices, both neural models actually scored worse than the naive baseline (test RMSE: naive 3.75 vs. LSTM 20.26 vs. GRU 13.51), with directional accuracy near chance. Switching the target to a log-return removed the \"copy yesterday's price\" shortcut and let both models edge past the baseline for the first time, with directional accuracy rising to about 53%.",
    },
    metrics: [
      { value: '3', label: 'Models compared: LSTM, GRU, and a naive baseline' },
      { value: '2010–2025', label: 'Years of real AMZN daily closing prices used' },
      { value: '~53%', label: 'Directional accuracy after switching to a log-return target' },
      { value: '0', label: 'Leakage — scaler fit only on the training split' },
    ],
    challenges: [
      {
        title: 'Data leakage in time-series splits',
        challenge:
          'Randomly splitting time-series data, or fitting the scaler on the full series, leaks future information into training and makes results look better than they really are.',
        solution:
          'Used chronological, non-random train/validation/test splits and fit the scaler only on the training prices before transforming the rest of the series.',
      },
      {
        title: 'Neural networks losing to a naive baseline',
        challenge:
          "Trained on raw closing prices, both the LSTM and GRU scored worse than a naive \"tomorrow equals today\" baseline, and directional accuracy stayed near chance.",
        solution:
          'Diagnosed the cause — daily prices are highly autocorrelated, so the models were mostly learning to copy the last value — and added a log-return target transform, which removed that shortcut and let both models edge past the baseline.',
      },
      {
        title: 'Making the pipeline reproducible & trustworthy',
        challenge: 'Beginner ML portfolio projects are easy to run once and hard to trust or reproduce.',
        solution:
          'Added automated tests for sequence alignment, split integrity, metrics and the smoke pipeline, a lint step, a CI workflow, deterministic offline demo data, and a local dashboard for inspecting every run.',
      },
    ],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Erhan-Arslan/stock-price-forecasting-pytorch' }],
    architecture: [
      {
        title: 'Chronological data split',
        detail: 'Train/validation/test windows are split by date, never randomly, with the scaler fit only on training prices.',
        icon: GitBranch,
      },
      {
        title: 'LSTM & GRU training',
        detail: 'PyTorch LSTM and GRU regressors are trained under matching conditions and checkpointed on validation loss.',
        icon: BrainCircuit,
      },
      {
        title: 'Baseline benchmarking',
        detail: 'Both models are benchmarked against a naive last-value baseline using RMSE, MAE, MAPE, R², and directional accuracy.',
        icon: Scale,
      },
      {
        title: 'Interactive dashboard',
        detail: 'A local Chart.js dashboard runs experiments, streams logs, and visualizes metrics and predictions for every run.',
        icon: LayoutDashboard,
      },
    ],
    icon: LineChart,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: CodeXml,
    items: ['JavaScript (ES6+)', 'TypeScript', 'React', 'React Router', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    icon: Smartphone,
    items: ['React Native', 'Expo', 'Kotlin', 'Android Studio'],
  },
  {
    id: 'ai',
    label: 'AI & Database',
    icon: BrainCircuit,
    items: ['RAG', 'Microsoft Foundry Local', 'SQLite'],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    icon: Wrench,
    items: ['Git/GitHub', 'App Store Connect', 'Figma', 'OOP', 'REST APIs', 'Cryptography (AES, EdDSA)', 'C++'],
  },
  {
    id: 'languages',
    label: 'Spoken Languages',
    icon: Languages,
    items: ['Turkish (Native)', 'English (B2)'],
  },
];

export const certificates: CertificateItem[] = [
  { id: 'microsoft-ai-innovators', title: 'Microsoft AI Innovators Internships', issuer: 'Microsoft', date: 'Aug 2026' },
  { id: 'qnb-101', title: 'QNB 101 Online Staj Programı', issuer: 'QNB', date: 'Aug 2026' },
  { id: 'react', title: 'React', issuer: 'Turkcell Geleceği Yazanlar', date: 'Nov 2024' },
  { id: 'web', title: 'Web Development', issuer: 'Udemy Modern Web Development', date: 'Sep 2024' },
  { id: 'html-css', title: 'HTML & CSS', issuer: 'Turkcell Geleceği Yazanlar', date: 'Sep 2024' },
];

export const contactChannels: ContactChannel[] = [
  { id: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  { id: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}`, icon: Phone, external: false },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: profile.linkedin.label,
    href: profile.linkedin.href,
    icon: 'linkedin',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: profile.github.label,
    href: profile.github.href,
    icon: 'github',
    external: true,
  },
];
