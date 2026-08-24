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
  legalName: 'SHP Technology LLC',
  shortName: 'SHP.',
  tagline: 'Software Development Company — Build • Automate • Grow',
  subTagline: 'Software Development Company',
  motto: 'Build • Automate • Grow',
  description: 'SHP Technology is a premier software development company specializing in custom enterprise software, cloud architecture, automation pipelines, and modern web applications.',
  founded: '2019',
  headquarters: 'San Francisco, CA & Remote Global',
  email: 'contact@shptechnologies.example.com',
  phone: '+1 (415) 890-2341',
  officeLocation: {
    address: '500 Howard Street, Suite 400',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'United States'
  },
  contact: {
    email: 'contact@shptechnologies.example.com',
    phone: '+1 (415) 890-2341',
    supportEmail: 'support@shptechnologies.example.com',
    responseSLA: '4 business hours'
  },
  socials: {
    linkedin: 'https://linkedin.com/company/shp-technologies',
    github: 'https://github.com/shp-tech',
    twitter: 'https://twitter.com/shptech'
  },
  site: {
    url: 'https://shptechnologies.example.com',
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
