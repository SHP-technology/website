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
    linkedin: 'https://www.linkedin.com/in/shp-technology-5b8ba1430/?utm_source=linkedin&utm_medium=social&utm_campaign=shp_technology',
    instagram: 'https://www.instagram.com/founder.shp/?utm_source=instagram&utm_medium=social&utm_campaign=shp_technology',
    facebook: 'https://www.facebook.com/profile.php?id=61593774120280&utm_source=facebook&utm_medium=social&utm_campaign=shp_technology',
    github: 'https://github.com/sandeshPatel06',
    twitter: 'https://twitter.com/shptech',
    indeed: 'https://in.indeed.com/job/senior-sales-executive-a12c481dc18fc1c2?utm_source=indeed&utm_medium=job_portal&utm_campaign=shp_recruitment'
  },
  site: {
    url: 'https://shptech.vercel.app/',
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
