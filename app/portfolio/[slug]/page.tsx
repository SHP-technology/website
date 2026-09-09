import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { portfolioData } from '@/src/data/portfolio';
import { BaseBadge } from '@/components/common/BaseBadge';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { ArrowLeft, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return portfolioData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolioData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Case Study Not Found' };

  return {
    title: `${project.title} | Case Study & Live Application`,
    description: project.summary
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to All Case Studies</span>
        </Link>

        {/* Case Study Banner Header */}
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl mb-12 relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <BaseBadge variant="amber" className="text-[10px]">
              {project.industry}
            </BaseBadge>
            <span className="text-xs text-slate-300 font-semibold">Client: {project.client}</span>
            <span className="text-xs text-slate-400 font-semibold">• Delivered {project.completionYear}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl font-normal">
            {project.summary}
          </p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Launch Live Demo / GitHub Repo 🚀</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-rose-400" />
              The Challenge
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Our Technical Solution
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Results & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Results & Metrics Delivered</h3>
            <div className="grid grid-cols-2 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
                  <span className="text-2xl font-extrabold text-amber-400 block">{res.metric}</span>
                  <span className="text-xs text-slate-300 font-semibold">{res.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Technology Stack Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
