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
    quote: 'SHP Technologies built a custom CRM system tailored specifically for Bima Gurukul. It has completely transformed our lead tracking, client management, and sales operations with incredible speed and reliability.',
    author: 'Sumit Srivastav',
    role: 'Founder',
    company: 'Bima Gurukul',
    avatar: 'SS'
  },
  {
    id: 't-2',
    quote: 'SHP Technologies developed dedicated hostel management software for Rooms Hostel. It streamlined our room allocations, tenant records, and automated billing, making daily hostel administration effortless.',
    author: 'Arun Sahu',
    role: 'Owner',
    company: 'Rooms Hostel',
    avatar: 'AS'
  },
  {
    id: 't-3',
    quote: 'SHP Technologies helped ASP Association build a custom Chrome extension to organize and manage workspace browser tabs. Their team delivered a lightweight, lightning-fast tool that greatly boosted our team productivity.',
    author: 'Astitv Pratap Singh Tomar',
    role: 'Owner',
    company: 'ASP Association',
    avatar: 'AT'
  }
];
