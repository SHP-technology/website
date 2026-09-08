import { siteConfig } from '@/src/config/site.config';
import { faqs as fallbackFaqs } from '@/src/data/faqs';
import { testimonialsData as fallbackTestimonials } from '@/src/data/testimonials';
import { servicesData as fallbackServices } from '@/src/data/services';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://shptech.onrender.com/api'
    : 'http://127.0.0.1:8000/api');

export interface ApiFaq {
  id: number | string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface ApiTeamMember {
  id: number | string;
  name: string;
  initials?: string;
  role: string;
  bio: string;
  photo_url?: string;
  linkedin_url?: string;
  github_url?: string;
  order: number;
}

export interface ApiTestimonial {
  id: number | string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  rating: number;
  order: number | string;
}

export interface ApiService {
  id: number | string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  price?: string;
  order?: number;
}

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 3000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      next: { revalidate: 60 } // Next.js ISR cache for 60s
    });
    return response;
  } finally {
    clearTimeout(id);
  }
}

export async function fetchFaqs(): Promise<ApiFaq[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/faqs/`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    console.warn('Django API unavailable for FAQs, using fallback data:', err);
  }
  return fallbackFaqs as ApiFaq[];
}

export async function fetchTeamMembers(): Promise<ApiTeamMember[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/team/`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    console.warn('Django API unavailable for Team, using siteConfig fallback:', err);
  }
  return siteConfig.team as ApiTeamMember[];
}

export async function fetchTestimonials(): Promise<ApiTestimonial[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/testimonials/`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    console.warn('Django API unavailable for Testimonials, using fallback data:', err);
  }
  return fallbackTestimonials as unknown as ApiTestimonial[];
}

export async function fetchServices(): Promise<ApiService[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/services/`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    console.warn('Django API unavailable for Services, using fallback data:', err);
  }
  return fallbackServices as unknown as ApiService[];
}
