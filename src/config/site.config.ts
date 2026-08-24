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
    github: string;
    twitter: string;
  };
  site: {
    url: string;
    apiUrl: string;
    analyticsId: string;
  };
  metrics: Array<{
    label: string;
    value: string;
    description: string;
  }>;
}

export const siteConfig: CompanyConfig = {
  name: 'SHP Technology',
  legalName: 'SHP Technology Inc.',
  shortName: 'SHP.',
  tagline: 'Software Development Company — Build • Automate • Grow',
  subTagline: 'Software Development Company',
  motto: 'Build • Automate • Grow',
  description: 'SHP Technology is a premier software development company specializing in custom enterprise software, cloud architecture, automation pipelines, and modern web applications.',
  founded: '2019',
  headquarters: 'Madan Mahal Station, Jabalpur, MP & Remote Global',
  email: import.meta.env.VITE_SITE_EMAIL || 'founder.shp@gmail.com',
  phone: import.meta.env.VITE_SITE_PHONE || '+91 9301885654',
  officeLocation: {
    address: import.meta.env.VITE_SITE_ADDRESS || '1st floor, SHP Technology, Near Underground Bridge, Madan Mahal Station',
    city: 'Jabalpur',
    state: 'Madhya Pradesh',
    zip: '482001',
    country: 'India'
  },
  contact: {
    email: import.meta.env.VITE_SITE_EMAIL || 'founder.shp@gmail.com',
    phone: import.meta.env.VITE_SITE_PHONE || '+91 9301885654',
    supportEmail: import.meta.env.VITE_SITE_EMAIL || 'founder.shp@gmail.com',
    responseSLA: '4 business hours'
  },
  socials: {
    linkedin: 'https://linkedin.com/company/shp-technologies',
    github: 'https://github.com/sandeshPatel06',
    twitter: 'https://twitter.com/shptech'
  },
  site: {
    url: 'https://sandeshpatel06.github.io/website/',
    apiUrl: 'https://api.shptechnologies.example.com',
    analyticsId: 'G-SHP12345'
  },
  metrics: [
    { label: 'Production Releases', value: '140+', description: 'Successfully deployed enterprise software systems' },
    { label: 'Uptime SLA', value: '99.99%', description: 'Proven high availability architecture record' },
    { label: 'Global Engineers', value: '45+', description: 'Senior architects, developers & DevOps specialists' },
    { label: 'Client Retention', value: '96%', description: 'Long-term engineering partnerships' }
  ]
};
