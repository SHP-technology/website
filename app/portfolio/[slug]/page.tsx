import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { portfolioData } from '@/src/data/portfolio';
import { BaseBadge } from '@/components/common/BaseBadge';
import { BaseButton } from '@/components/common/BaseButton';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';

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
    title: `${project.title} | Case Study`,
    description: project.summary
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-5xl">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Case Study Banner */}
        <div className="glass-card p-8 md:p-12 rounded-3xl mb-12 relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <BaseBadge variant="blue" className="text-[10px]">
              {project.industry}
            </BaseBadge>
            <span className="text-xs text-slate-400 font-semibold">Client: {project.client}</span>
            <span className="text-xs text-slate-400 font-semibold">• {project.completionYear}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
            {project.summary}
          </p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-colors"
            >
              <span>Visit Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Challenge</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Technical Solution</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Results & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Results & Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-center">
                  <span className="text-2xl font-extrabold text-amber-500 block">{res.metric}</span>
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{res.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold"
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
