const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? 'https://shptech.onrender.com/api' : 'http://127.0.0.1:8000/api');

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

export async function fetchFaqs(fallback: ApiFaq[]): Promise<ApiFaq[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/faqs/`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data && data.length > 0 ? data : fallback;
  } catch (err) {
    console.warn('Backend API unavailable, using fallback FAQs:', err);
    return fallback;
  }
}

export async function fetchTeamMembers(fallback: ApiTeamMember[]): Promise<ApiTeamMember[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/team/`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data && data.length > 0 ? data : fallback;
  } catch (err) {
    console.warn('Backend API unavailable, using fallback Team Members:', err);
    return fallback;
  }
}

export async function fetchTestimonials(fallback: ApiTestimonial[]): Promise<ApiTestimonial[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials/`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data && data.length > 0 ? data : fallback;
  } catch (err) {
    console.warn('Backend API unavailable, using fallback Testimonials:', err);
    return fallback;
  }
}
