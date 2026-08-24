export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  category: 'Engineering' | 'Cloud & Infrastructure' | 'AI & Data' | 'Architecture';
  problemSolved: string;
  benefits: string[];
  deliverables: string[];
  technologies: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: '1',
    slug: 'enterprise-software-development',
    title: 'Custom Enterprise Software',
    shortDescription: 'Scalable, maintainable full-stack applications tailored to complex business workflows.',
    fullDescription: 'We design and engineer bespoke web, mobile, and microservices software that modernizes enterprise workflows. Our applications are resilient, type-safe, and built to scale alongside your organization growth.',
    icon: 'Code2',
    category: 'Engineering',
    problemSolved: 'Legacy monolithic software bottlenecks, slow feature velocity, and fragile integration architectures.',
    benefits: [
      'Accelerated release cycles with automated deployment pipelines',
      'High system stability and zero-downtime deployments',
      'Modern, intuitive UI/UX built for employee productivity',
      'Clean modular architecture that lowers long-term maintenance costs'
    ],
    deliverables: [
      'Full-stack Web & API Architecture',
      'Interactive Design System & UI Components',
      'Automated Test Suites & End-to-End CI/CD',
      'Technical Documentation & Engineering Handoff'
    ],
    technologies: ['Vue.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'GraphQL']
  },
  {
    id: '2',
    slug: 'cloud-architecture-devops',
    title: 'Cloud Architecture & DevOps',
    shortDescription: 'High-availability cloud infrastructure, Kubernetes orchestration, and automated CI/CD pipelines.',
    fullDescription: 'Modernize your infrastructure with cloud-native engineering. We build secure, cost-optimized, and self-healing environments across AWS, GCP, and Kubernetes.',
    icon: 'Cloud',
    category: 'Cloud & Infrastructure',
    problemSolved: 'High cloud computing bills, manual deployments, downtime risks, and security compliance gaps.',
    benefits: [
      'Up to 40% reduction in monthly cloud infrastructure expenditure',
      'Automated zero-downtime continuous delivery',
      'Infrastructure as Code (IaC) for reproducible environments',
      'Enterprise security, role-based access, and audit compliance'
    ],
    deliverables: [
      'Terraform Infrastructure as Code Repository',
      'Multi-region Kubernetes Cluster Setup',
      'Automated CI/CD Build & Deployment Pipelines',
      '24/7 Monitoring & Alerting Dashboards'
    ],
    technologies: ['Kubernetes', 'AWS', 'Google Cloud', 'Terraform', 'Docker', 'Prometheus']
  },
  {
    id: '3',
    slug: 'ai-machine-learning-integration',
    title: 'AI & ML System Integration',
    shortDescription: 'Transform enterprise business workflows with LLM integration, predictive analytics, and RAG pipelines.',
    fullDescription: 'Integrate artificial intelligence directly into your core business operations. We build specialized Retrieval-Augmented Generation (RAG) engines, intelligent document processors, and custom predictive models.',
    icon: 'Cpu',
    category: 'AI & Data',
    problemSolved: 'Unstructured enterprise data silos, manual repetitive document tasks, and lack of actionable real-time insights.',
    benefits: [
      'Instant search and natural language Q&A across internal document repositories',
      'Automated classification and processing of complex forms & invoices',
      'Secure on-premise or private cloud LLM deployments preventing data leaks',
      'Predictive analytics engines for operational decision making'
    ],
    deliverables: [
      'Custom LLM & RAG Knowledge Retrieval Pipeline',
      'Vector Database Setup & Semantic Search Engine',
      'AI Microservices APIs & Admin Control Panel',
      'Security & Data Governance Compliance Blueprint'
    ],
    technologies: ['Python', 'LangChain', 'Pinecone', 'PyTorch', 'FastAPI', 'OpenAI / Gemini APIs']
  },
  {
    id: '4',
    slug: 'distributed-systems-modernization',
    title: 'Distributed Systems & API Design',
    shortDescription: 'Robust event-driven architecture, API gateways, and legacy backend refactoring.',
    fullDescription: 'We help growing companies transition from legacy monoliths to resilient microservices architectures built for massive data throughput and real-time processing.',
    icon: 'Network',
    category: 'Architecture',
    problemSolved: 'Database locks during peak traffic, cascading service outages, and slow inter-service communication.',
    benefits: [
      'Sub-millisecond API response latency',
      'Horizontally scalable event-driven messaging queues',
      'Strict API contract management and versioning control',
      'Fault-tolerant failover and rate-limiting safeguards'
    ],
    deliverables: [
      'Event-Driven Messaging Backbone (Kafka / RabbitMQ)',
      'API Gateway Architecture & Service Mesh',
      'Database Sharding & Caching Optimization Strategy',
      'Comprehensive Load Testing & Benchmark Report'
    ],
    technologies: ['Apache Kafka', 'Redis', 'Go', 'Node.js', 'gRPC', 'PostgreSQL']
  },
  {
    id: '5',
    slug: 'cybersecurity-compliance-audit',
    title: 'Security Architecture & Compliance',
    shortDescription: 'End-to-end security audits, threat modeling, RBAC, and SOC 2 / HIPAA compliance readiness.',
    fullDescription: 'Embed security into your software lifecycle from day one. We evaluate your applications, cloud infrastructure, and data storage for vulnerabilities and compliance readiness.',
    icon: 'ShieldCheck',
    category: 'Cloud & Infrastructure',
    problemSolved: 'Security vulnerabilities, unauthorized data exposure, and non-compliance with industry standards.',
    benefits: [
      'Zero-trust security model across cloud workloads',
      'Streamlined path to SOC 2 Type II and ISO 27001 certifications',
      'Proactive identification of OWASP Top 10 vulnerabilities',
      'Continuous security monitoring and secret detection'
    ],
    deliverables: [
      'Comprehensive Security Penetration & Vulnerability Audit',
      'Role-Based Access Control (RBAC) Architecture Plan',
      'Automated Vulnerability Scanner CI Integration',
      'Security Incident Response Playbook'
    ],
    technologies: ['Vault', 'AWS IAM', 'SonarQube', 'Trivy', 'OAuth 2.0 / OIDC']
  },
  {
    id: '6',
    slug: 'ui-ux-design-systems',
    title: 'Product UI/UX & Design Systems',
    shortDescription: 'User-centered product design, responsive UI design systems, and rapid prototyping.',
    fullDescription: 'We turn complex technical requirements into elegant, accessible visual interfaces that users love. Our design systems guarantee UI consistency across multi-platform product suites.',
    icon: 'Layout',
    category: 'Engineering',
    problemSolved: 'Inconsistent UI styling across products, poor accessibility contrast, and friction in user onboarding.',
    benefits: [
      '3x faster frontend component implementation',
      'Full compliance with WCAG 2.1 AA accessibility guidelines',
      'Cohesive visual identity tailored to your brand personality',
      'Interactive Figma & Vue UI component library sync'
    ],
    deliverables: [
      'Comprehensive Figma Component Design System',
      'Vue 3 Production UI Component Library',
      'User Journey & Interactive Prototype Wireframes',
      'WCAG 2.1 Accessibility Audit & Guidelines'
    ],
    technologies: ['Figma', 'Vue 3', 'CSS Modules', 'Storybook', 'WCAG']
  }
];
