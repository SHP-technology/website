export interface JobItem {
  id: string;
  slug: string;
  title: string;
  department: 'Engineering' | 'DevOps' | 'Product' | 'Data & AI';
  location: string;
  employmentType: 'Full-time' | 'Contract' | 'Remote';
  experienceLevel: string;
  shortDescription: string;
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export const jobsData: JobItem[] = [
  {
    id: 'job-1',
    slug: 'staff-fullstack-engineer-vue-node',
    title: 'Staff Full-Stack Engineer (Vue.js & Node.js)',
    department: 'Engineering',
    location: 'San Francisco, CA / Remote (US/EU)',
    employmentType: 'Full-time',
    experienceLevel: '6+ Years',
    shortDescription: 'Lead the architecture and implementation of enterprise web applications using Vue 3, TypeScript, and modern Node.js backends.',
    fullDescription: 'As a Staff Full-Stack Engineer at Nexus Technologies, you will lead high-impact engineering projects for top-tier enterprise clients. You will design scalable web applications, mentor mid-level developers, and drive technical excellence across our engineering teams.',
    responsibilities: [
      'Architect robust, responsive frontend applications in Vue 3 (Composition API, TypeScript)',
      'Design clean RESTful and GraphQL APIs in Node.js and PostgreSQL',
      'Collaborate directly with client CTOs and engineering directors on technical decisions',
      'Conduct rigorous code reviews and foster engineering best practices',
      'Optimize application performance, accessibility, and automated test coverage'
    ],
    requirements: [
      '6+ years of professional experience building web software at scale',
      'Deep mastery of modern JavaScript/TypeScript, Vue 3, HTML5, and CSS architecture',
      'Proven track record with Node.js, Express/Fastify, and relational databases (PostgreSQL)',
      'Experience with Docker containerization and CI/CD pipelines',
      'Strong communication skills and passion for high-quality software craftsmanship'
    ],
    niceToHave: [
      'Experience with Nuxt.js or server-side rendering (SSR)',
      'Knowledge of AWS or GCP cloud services',
      'Open source contributions to frontend toolchains'
    ]
  },
  {
    id: 'job-2',
    slug: 'senior-cloud-devops-architect',
    title: 'Senior Cloud & DevOps Architect',
    department: 'DevOps',
    location: 'Remote Global',
    employmentType: 'Full-time',
    experienceLevel: '5+ Years',
    shortDescription: 'Design, deploy, and maintain zero-downtime Kubernetes infrastructure and IaC automation on AWS & GCP.',
    fullDescription: 'We are seeking a Senior Cloud & DevOps Architect to build resilient, self-healing cloud infrastructure for mission-critical client workloads. You will spearhead our Infrastructure as Code (IaC) initiatives and automate secure deployment pipelines.',
    responsibilities: [
      'Design multi-cloud infrastructure blueprints on AWS and Google Cloud Platform',
      'Manage production Kubernetes clusters (EKS/GKE), ingress controllers, and service meshes',
      'Write reusable, modular Terraform and Helm configurations',
      'Implement zero-downtime CI/CD continuous deployment workflows (GitHub Actions, ArgoCD)',
      'Establish 24/7 observability, logging, and security alerting standards (Prometheus, Datadog)'
    ],
    requirements: [
      '5+ years in DevOps, Site Reliability Engineering, or Cloud Architecture',
      'Hands-on mastery of Kubernetes production administration and network security',
      'Expert level proficiency with Terraform, Docker, and Shell scripting',
      'Deep understanding of cloud network security (VPC, IAM, TLS, Firewalls)',
      'Proven experience with automated zero-downtime deployment strategies'
    ],
    niceToHave: [
      'AWS Certified Solutions Architect or CKA (Certified Kubernetes Administrator)',
      'Experience with FinOps and cloud cost optimization strategies'
    ]
  },
  {
    id: 'job-3',
    slug: 'senior-ai-ml-systems-engineer',
    title: 'Senior AI & ML Systems Engineer',
    department: 'Data & AI',
    location: 'Remote (US/EU)',
    employmentType: 'Full-time',
    experienceLevel: '4+ Years',
    shortDescription: 'Build enterprise RAG engines, vector database pipelines, and integrate LLM microservices into core applications.',
    fullDescription: 'Join our AI & Data team to build practical, production-ready AI solutions for enterprise clients. You will develop custom Retrieval-Augmented Generation engines, fine-tune models, and deploy scalable ML APIs.',
    responsibilities: [
      'Design and deploy RAG vector retrieval pipelines using Python, Pinecone, and Qdrant',
      'Build secure microservices wrapper APIs around LLMs (OpenAI, Gemini, Llama)',
      'Implement data preprocessing, chunking, and semantic embedding algorithms',
      'Evaluate model accuracy, latency, and hallucination safeguards in production',
      'Collaborate with product teams to embed AI intelligence into existing client software'
    ],
    requirements: [
      '4+ years software engineering experience with strong focus on Python and AI/ML systems',
      'Hands-on experience building RAG architectures and working with Vector Databases',
      'Proficiency with FastAPI, PyTorch, LangChain/LlamaIndex',
      'Solid understanding of data structures, vector math, and API security',
      'Experience running local/private LLM inferences'
    ],
    niceToHave: [
      'Published research or open source tools in machine learning',
      'Experience with fine-tuning open source weights (vLLM, Ollama)'
    ]
  }
];

export const hiringProcessSteps = [
  { step: '01', title: 'Application', description: 'Submit your profile or application form for initial review by our engineering team.' },
  { step: '02', title: 'Initial Review', description: 'Our technical recruiter conducts a 30-minute intro video conversation.' },
  { step: '03', title: 'Role Discussion', description: 'Technical deep-dive with an engineering lead to discuss past projects and architecture.' },
  { step: '04', title: 'Practical Assessment', description: 'Short, real-world practical challenge matching actual day-to-day work (no algorithmic tricks).' },
  { step: '05', title: 'Final Discussion', description: 'Meet with executive leadership to discuss culture alignment, expectations, and compensation.' },
  { step: '06', title: 'Official Offer', description: 'Formal offer package extended with flexible remote benefits and competitive pay.' }
];

export const companyCultureValues = [
  {
    title: 'Autonomy & Ownership',
    description: 'We trust our team members to solve complex problems with freedom and responsibility.'
  },
  {
    title: 'Pragmatic Engineering',
    description: 'We favor clean, reliable, and testable code over hyper-clever over-engineering.'
  },
  {
    title: 'Continuous Growth',
    description: 'Annual learning stipend, conference budgets, and weekly internal engineering tech talks.'
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible work hours, true remote culture, and unlimited paid time off with mandatory minimums.'
  }
];
