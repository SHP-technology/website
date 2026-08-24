export interface TechCategory {
  category: string;
  items: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
}

export const techStackData: TechCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'Vue.js 3', description: 'Composition API, Vite, Pinia, Vue Router', icon: 'Code2' },
      { name: 'TypeScript', description: 'Type-safe frontend logic & API interfaces', icon: 'FileCode' },
      { name: 'HTML5 & CSS3', description: 'Semantic markup & modern CSS design tokens', icon: 'Layout' },
      { name: 'Tailwind / Vanilla CSS', description: 'Responsive, accessible design systems', icon: 'Palette' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express', description: 'High-throughput microservices & GraphQL', icon: 'Server' },
      { name: 'Go (Golang)', description: 'Ultra-low latency microservices & CLI engines', icon: 'Zap' },
      { name: 'Python', description: 'FastAPI, asynchronous backend workflows', icon: 'Terminal' },
      { name: 'PostgreSQL', description: 'Relational data models & complex indexing', icon: 'Database' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'Kubernetes (EKS/GKE)', description: 'Container orchestration & auto-scaling', icon: 'Cloud' },
      { name: 'AWS & Google Cloud', description: 'Multi-cloud infrastructure & serverless', icon: 'Globe' },
      { name: 'Terraform', description: 'Declarative Infrastructure as Code (IaC)', icon: 'Cpu' },
      { name: 'Docker', description: 'Containerization & reproducible environments', icon: 'Box' }
    ]
  },
  {
    category: 'AI & Data',
    items: [
      { name: 'LangChain & LlamaIndex', description: 'RAG knowledge engines & LLM agents', icon: 'Sparkles' },
      { name: 'Pinecone / Qdrant', description: 'Vector databases for semantic search', icon: 'Layers' },
      { name: 'PyTorch', description: 'Model evaluation & fine-tuning pipelines', icon: 'Cpu' },
      { name: 'Apache Kafka', description: 'Real-time event streaming & queueing', icon: 'Activity' }
    ]
  }
];
