export interface FaqItem {
  id: number | string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What technology stack does SHP Technology specialize in?",
    answer: "We specialize in modern web technologies including Next.js, React, Vue.js, Node.js, Python/Django, Cloud Architecture (AWS/GCP), and AI workflow automation.",
    category: "General",
    order: 1
  },
  {
    id: 2,
    question: "How long does a custom software development project take?",
    answer: "Typical projects range from 2 to 12 weeks depending on scope, complexity, and integrations. We follow an agile development methodology with bi-weekly sprint deliverables.",
    category: "Process",
    order: 2
  },
  {
    id: 3,
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we offer ongoing enterprise maintenance, security monitoring, infrastructure scaling, and feature updates under flexible SLA agreements.",
    category: "Support",
    order: 3
  },
  {
    id: 4,
    question: "Can SHP Technology integrate AI into our existing business workflows?",
    answer: "Absolutely. We build custom LLM agents, RAG pipeline integrations, database chat tools, and automated document processing systems to streamline enterprise operations.",
    category: "Services",
    order: 4
  }
];
