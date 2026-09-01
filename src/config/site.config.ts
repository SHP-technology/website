export interface CompanyConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  motto: string;
  description: string;
  founded: string;
  headquarters: string;
  email: string;
  phone: string;
  officeLocation: {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
    supportEmail: string;
    responseSLA: string;
  };
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
    github: string;
    twitter: string;
    indeed: string;
  };
  site: {
    url: string;
    apiUrl: string;
    analyticsId: string;
  };
  metrics: Array<{
    label: string;
    value: string;
    tagline?: string;
    description: string;
  }>;
  team: Array<{
    name: string;
    initials: string;
    role: string;
    bio: string;
  }>;
}

export const siteConfig: CompanyConfig = {
  name: 'SHP Technology',
  legalName: 'SHP Technology Inc.',
  shortName: 'SHP.',
  tagline: 'Software Development Company — Build • Automate • Grow',
  subTagline: 'Software Development Company',
  motto: 'Build • Automate • Grow',
  description: 'SHP Technology is a software development company. We build custom websites, databases, and simple automation tools for your business.',
  founded: '2019',
  headquarters: 'Madan Mahal Station, Jabalpur, MP & Remote Global',
  email: import.meta.env.VITE_SITE_EMAIL || 'founder.shp@gmail.com',
  phone: import.meta.env.VITE_SITE_PHONE || '+91 9301885654',
  officeLocation: {
    address: import.meta.env.VITE_SITE_ADDRESS || '1st floor, SHP Technology, Near Underground Bridge, Madan Mahal Station',
    city: import.meta.env.VITE_SITE_CITY || 'Jabalpur',
    state: import.meta.env.VITE_SITE_STATE || 'Madhya Pradesh',
    zip: import.meta.env.VITE_SITE_ZIP || '482001',
    country: import.meta.env.VITE_SITE_COUNTRY || 'India'
  },
  contact: {
    email: import.meta.env.VITE_SITE_EMAIL || 'founder.shp@gmail.com',
    phone: import.meta.env.VITE_SITE_PHONE || '+91 9301885654',
    supportEmail: import.meta.env.VITE_SITE_SUPPORT_EMAIL || 'founder.shp@gmail.com',
    responseSLA: '4 business hours'
  },
  socials: {
    linkedin: 'https://www.linkedin.com/in/shp-technology-5b8ba1430/?utm_source=linkedin&utm_medium=social&utm_campaign=shp_technology',
    instagram: 'https://www.instagram.com/founder.shp/?utm_source=instagram&utm_medium=social&utm_campaign=shp_technology',
    facebook: 'https://www.facebook.com/profile.php?id=61593774120280&utm_source=facebook&utm_medium=social&utm_campaign=shp_technology',
    github: '',
    twitter: 'https://twitter.com/shptech',
    indeed: 'https://in.indeed.com/job/senior-sales-executive-a12c481dc18fc1c2?utm_source=indeed&utm_medium=job_portal&utm_campaign=shp_recruitment'
  },
  site: {
    url: 'https://www.shptechnology.online/',
    apiUrl: 'https://api.shptechnology.online',
    analyticsId: 'G-SHP12345'
  },
  metrics: [
    { label: 'Clients', value: '150+', tagline: 'Trust', description: 'Trust & Long-Term Client Relationships' },
    { label: 'Projects', value: '80+', tagline: 'Experience', description: 'Delivered Custom Software & Web Platforms' },
    { label: 'Automations', value: '50+', tagline: 'Technical capability', description: 'Workflow & Task Automation Systems' },
    { label: 'Industries', value: '20+', tagline: 'Versatility', description: 'Versatility Across Business Verticals' }
  ],
  team: [
    {
      name: 'Harsh Patel',
      initials: 'HP',
      role: 'Founder',
      bio: 'Founder of the company, focused on business strategy, technology solutions, automation, and overall company growth.'
    },
    {
      name: 'Sandesh Patel',
      initials: 'SP',
      role: 'Co-Founder & Head of Full-Stack Development',
      bio: 'Co-Founder and Head of Full-Stack Development, specializing in building scalable, modern web applications and robust full-stack solutions.'
    },
    {
      name: 'Prachi Dabar',
      initials: 'PD',
      role: 'Sales Manager',
      bio: 'Drives client relations, strategic account management, and business development to align enterprise client goals with SHP Technology engineering solutions.'
    },
    {
      name: 'Shivam Patel',
      initials: 'SP',
      role: 'Full-Stack Developer',
      bio: 'Specializes in building responsive web interfaces, high-performance APIs, and scalable full-stack application components.'
    },
    {
      name: 'Mohit Verma',
      initials: 'MV',
      role: 'Sales Lead',
      bio: 'Leads sales strategy and prospective client engagements, ensuring tailored technical solutions and transparent onboarding for partners.'
    },
    {
      name: 'Aparna Verma',
      initials: 'AV',
      role: 'Operations Manager',
      bio: 'Oversees operational efficiency, project coordination, resource allocation, and team workflows to guarantee seamless project delivery.'
    }
  ]
};
