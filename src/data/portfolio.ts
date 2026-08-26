export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    label: string;
  }>;
  technologies: string[];
  featured: boolean;
  completionYear: string;
  url: string;
}

export const portfolioData: CaseStudyItem[] = [
  {
    id: 'file-share',
    slug: 'file-share',
    title: 'Collaborative Notes & File Sharing Vault',
    client: 'Open Source Community',
    industry: 'Developer Tools',
    summary: 'A real-time collaborative notes and secure file sharing vault featuring password-protected workspaces and a live Markdown editor.',
    challenge: 'Developers and small teams lack simple, instant ways to securely collaborate on Markdown documentation and share assets without high-friction sign-ups.',
    solution: 'Designed and built a fast, client-side encrypted workspace platform using TypeScript and modern web protocols for zero-config team collaboration.',
    results: [
      { metric: 'Live', label: 'Real-time Markdown sync' },
      { metric: '100%', label: 'Workspaces password protected' }
    ],
    technologies: ['TypeScript', 'Vue 3', 'Markdown', 'Web Storage APIs', 'Vite'],
    featured: true,
    completionYear: '2026',
    url: 'https://github.com/sandeshPatel06/file-share'
  },
  {
    id: 'jarvis-chat-app',
    slug: 'jarvis-chat-app',
    title: 'Conversational AI Assistant Frontend Portal',
    client: 'Jarvis AI Open Source',
    industry: 'Artificial Intelligence',
    summary: 'A beautiful, feature-rich conversational AI assistant web frontend designed with a responsive chat interface and native dark mode support.',
    challenge: 'AI chat interfaces are often slow, bulky, or poorly optimized for mobile screens, degrading the user experience during quick prompt cycles.',
    solution: 'Engineered a highly responsive frontend portal with local storage session caching, markdown streaming rendering, and layout transitions.',
    results: [
      { metric: 'Instant', label: 'Message streaming rendering' },
      { metric: '<100ms', label: 'Interface action response time' }
    ],
    technologies: ['TypeScript', 'Vue 3', 'TailwindCSS', 'Vite', 'LocalStorage'],
    featured: true,
    completionYear: '2026',
    url: 'https://github.com/sandeshPatel06/jarvis-chat-app'
  },
  {
    id: 'mini-tracker',
    slug: 'mini-tracker',
    title: 'Privacy-First Linux Productivity Tracker',
    client: 'Productivity Systems',
    industry: 'Developer Tools',
    summary: 'A lightweight Linux application tracking work sessions, offering automatic local Gemini AI batch analysis and multi-tenant team stats.',
    challenge: 'Commercial trackers violate user privacy by capturing screenshots and sending raw keystrokes to third-party servers.',
    solution: 'Programmed a local-first system utility in Go that parses active processes and calls Gemini AI to build anonymized hourly work logs.',
    results: [
      { metric: 'Go-Based', label: 'Runs with zero background lag' },
      { metric: 'Local AI', label: 'Gemini batch analysis' }
    ],
    technologies: ['Go', 'Gemini AI API', 'SQLite', 'Linux APIs', 'Multi-tenant Dashboard'],
    featured: true,
    completionYear: '2025',
    url: 'https://github.com/sandeshPatel06/mini-tracker'
  },
  {
    id: 'jarvis-ai',
    slug: 'jarvis-ai',
    title: 'Jarvis Virtual Assistant Orchestration Backend',
    client: 'Jarvis AI Core',
    industry: 'Artificial Intelligence',
    summary: 'The main AI core engine and automation orchestrator handling prompt engineering, tool usage, and background system controls.',
    challenge: 'AI assistants require flexible integrations with system shells, browsers, and automation APIs without leaking authentication tokens.',
    solution: 'Architected a backend engine in TypeScript to manage session state, execute sandboxed system scripts, and integrate AI models.',
    results: [
      { metric: 'Sandbox', label: 'Safe local command execution' },
      { metric: 'Dynamic', label: 'Agent tool-calling workflow' }
    ],
    technologies: ['TypeScript', 'Node.js', 'LLM Tool Calling', 'CLI Integrations'],
    featured: true,
    completionYear: '2025',
    url: 'https://github.com/sandeshPatel06/jarvis-ai'
  },
  {
    id: 'voice-assistant',
    slug: 'voice-assistant',
    title: 'Desktop AI Speech Recognition Assistant',
    client: 'Personal Automation Project',
    industry: 'Artificial Intelligence',
    summary: 'A Python-powered desktop voice assistant implementing local speech recognition, text-to-speech feedback, and desktop control commands.',
    challenge: 'Standard cloud voice assistants require constant internet connection and suffer from high network round-trip latency.',
    solution: 'Implemented offline-first speech recognition and local synthesis APIs, creating a responsive hands-free desktop control pipeline.',
    results: [
      { metric: 'Offline', label: 'Speech-to-text recognition' },
      { metric: 'Hands-Free', label: 'Desktop control scripting' }
    ],
    technologies: ['Python', 'SpeechRecognition', 'pyttsx3', 'Desktop OS APIs'],
    featured: false,
    completionYear: '2024',
    url: 'https://github.com/sandeshPatel06/voice-assistant'
  }
];
