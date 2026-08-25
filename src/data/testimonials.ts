export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'SHP Technology delivered our payment processing microservice months ahead of schedule. Their focus on high-availability architecture and automated testing saved us from major outage risks during Black Friday.',
    author: 'Elena Rostova',
    role: 'VP of Engineering',
    company: 'PayFlow Global',
    avatar: 'ER'
  },
  {
    id: 't-2',
    quote: 'The HIPAA-compliant RAG AI solution built by SHP Technology transformed how our medical staff interacts with clinical records. The performance, security, and developer craftsmanship were unmatched.',
    author: 'Dr. Marcus Vance',
    role: 'Chief Medical Information Officer',
    company: 'Apex Health Systems',
    avatar: 'MV'
  },
  {
    id: 't-3',
    quote: 'Working with SHP Technology feels like having a senior in-house core architecture team. They take full ownership of complex cloud infrastructure challenges and explain every decision clearly.',
    author: 'David Chen',
    role: 'CTO',
    company: 'TransWorld Logistics',
    avatar: 'DC'
  }
];
