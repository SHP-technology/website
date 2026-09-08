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

async function fetchWithRetry(url: string, retries = 2, delayMs = 1500): Promise<any> {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      if (i === retries) throw err;
    }
    await new Promise((r) => setTimeout(r, delayMs));
  }
  throw new Error(`Failed to fetch ${url} after retries`);
}

export async function fetchFaqs(fallback: ApiFaq[]): Promise<ApiFaq[]> {
  try {
    const data = await fetchWithRetry(`${API_BASE_URL}/faqs/`);
    return data && data.length > 0 ? data : fallback;
  } catch (err) {
    console.warn('Backend API unavailable, using fallback FAQs:', err);
    return fallback;
  }
}

export async function fetchTeamMembers(fallback: ApiTeamMember[]): Promise<ApiTeamMember[]> {
  try {
    const data = await fetchWithRetry(`${API_BASE_URL}/team/`);
    return data && data.length > 0 ? data : fallback;
  } catch (err) {
    console.warn('Backend API unavailable, using fallback Team Members:', err);
    return fallback;
  }
}

export async function fetchTestimonials(fallback: ApiTestimonial[]): Promise<ApiTestimonial[]> {
  try {
    const data = await fetchWithRetry(`${API_BASE_URL}/testimonials/`);
    return data && data.length > 0 ? data : fallback;
  } catch (err) {
    console.warn('Backend API unavailable, using fallback Testimonials:', err);
    return fallback;
  }
}
