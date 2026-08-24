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
}

export const portfolioData: CaseStudyItem[] = [
  {
    id: 'cs-1',
    slug: 'fintech-realtime-payment-engine',
    title: 'High-Throughput Global Payment Engine Modernization',
    client: 'PayFlow Global (FinTech)',
    industry: 'Financial Technology',
    summary: 'Refactored a legacy payment processing system to handle over 10,000 transactions per second with 99.999% reliability.',
    challenge: 'PayFlow Global was experiencing peak-hour latency spikes and occasional database transaction deadlocks, causing payment processing delays during global holiday shopping spikes.',
    solution: 'Engineered an event-driven microservices processing engine utilizing Apache Kafka message queues, Go microservices, and Redis distributed caching on AWS EKS.',
    results: [
      { metric: '10,000+', label: 'Transactions per second throughput' },
      { metric: '99.999%', label: 'Uptime SLA maintained over 18 months' },
      { metric: '85ms', label: 'Average global API execution latency' }
    ],
    technologies: ['Go', 'Apache Kafka', 'Redis', 'AWS EKS', 'PostgreSQL', 'Terraform'],
    featured: true,
    completionYear: '2025'
  },
  {
    id: 'cs-2',
    slug: 'healthcare-rag-knowledge-platform',
    title: 'HIPAA-Compliant AI Knowledge Retrieval System',
    client: 'Apex Health Systems',
    industry: 'Healthcare Analytics',
    summary: 'Developed a secure RAG vector search engine enabling medical staff to instantly query 2M+ clinical documentation records.',
    challenge: 'Clinical researchers lost hours manually searching through unstructured PDF diagnostic records across disparate hospital archives.',
    solution: 'Built an encrypted, HIPAA-compliant Retrieval-Augmented Generation pipeline using specialized vector embeddings, private LLM endpoints, and fine-grained role-based access control.',
    results: [
      { metric: '92%', label: 'Reduction in document search time for physicians' },
      { metric: '2M+', label: 'Clinical records indexed with semantic embeddings' },
      { metric: '100%', label: 'HIPAA & SOC 2 compliance verification passed' }
    ],
    technologies: ['Python', 'FastAPI', 'Pinecone', 'LangChain', 'Vue 3', 'Docker'],
    featured: true,
    completionYear: '2025'
  },
  {
    id: 'cs-3',
    slug: 'logistics-iot-fleet-management',
    title: 'Real-Time Telemetry & Fleet Operations Platform',
    client: 'TransWorld Logistics',
    industry: 'Supply Chain & Logistics',
    summary: 'Created a centralized cloud telemetry platform tracking 15,000+ IoT-connected freight vehicles in real time.',
    challenge: 'TransWorld struggled with delayed location updates and inefficient route assignments due to fragmented GPS provider integrations.',
    solution: 'Designed a unified cloud telemetry ingestion pipeline with real-time web socket dashboards, predictive maintenance notifications, and automated route optimization algorithms.',
    results: [
      { metric: '15,000+', label: 'Active freight vehicles monitored concurrently' },
      { metric: '18%', label: 'Reduction in fleet fuel consumption' },
      { metric: '<500ms', label: 'Telemetry data update latency to dispatcher UI' }
    ],
    technologies: ['Vue.js', 'Node.js', 'TimescaleDB', 'MQTT', 'Google Cloud', 'Kubernetes'],
    featured: true,
    completionYear: '2024'
  },
  {
    id: 'cs-4',
    slug: 'ecommerce-omnichannel-design-system',
    title: 'Omnichannel Enterprise E-Commerce Platform & Design System',
    client: 'Luminary Retail Tech',
    industry: 'E-Commerce',
    summary: 'Architected a headless e-commerce storefront with a unified design system serving 3M+ active monthly shoppers.',
    challenge: 'Monolithic legacy storefront was slow on mobile devices, difficult to localize, and required weeks of developer effort for minor UI tweaks.',
    solution: 'Built a decoupled, ultra-fast Vue 3 / Nuxt frontend backed by a centralized UI component design system and headless GraphQL content APIs.',
    results: [
      { metric: '3.4x', label: 'Increase in mobile page load speed' },
      { metric: '28%', label: 'Improvement in checkout conversion rate' },
      { metric: '100%', label: 'WCAG 2.1 AA Accessibility rating' }
    ],
    technologies: ['Vue 3', 'TypeScript', 'GraphQL', 'Vite', 'CSS Modules', 'AWS CloudFront'],
    featured: false,
    completionYear: '2024'
  }
];
