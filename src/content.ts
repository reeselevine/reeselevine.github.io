import aboutSource from './site-content/about.md?raw';
import cvPdf from '../assets/pdf/cv.pdf';
import gpuharborPdf from '../assets/pdf/gpuharbor.pdf';
import mcMutantsPdf from '../assets/pdf/mc_mutants.pdf';
import saferacePdf from '../assets/pdf/saferace.pdf';
import yarchPdf from '../assets/pdf/yarch_pmcs.pdf';
import profileImage from '../assets/img/us.jpg';
import { rawNewsItems } from './site-content/news';
import { rawPublications } from './site-content/publications';

export type NewsItem = {
  slug: string;
  date: string;
  body: string;
};

export type Publication = {
  key: string;
  kind: string;
  abbr?: string;
  title: string;
  author?: string;
  year?: string;
  venue?: string;
  publisher?: string;
  pdf?: string;
  blog?: string;
  arxiv?: string;
  note?: string;
};

const pdfAssets: Record<string, string> = {
  'cv.pdf': cvPdf,
  'gpuharbor.pdf': gpuharborPdf,
  'mc_mutants.pdf': mcMutantsPdf,
  'saferace.pdf': saferacePdf,
  'yarch_pmcs.pdf': yarchPdf,
};

const normalizeDate = (value: string) => {
  const [year, month, day] = value.split('-').map((part) => Number(part));
  const utcValue = Date.UTC(year, month - 1, day);
  return new Date(utcValue).toISOString();
};

const parseNewsItems = (): NewsItem[] =>
  rawNewsItems
    .map((item) => ({
      slug: item.slug,
      date: normalizeDate(item.date),
      body: item.body,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));

const parsePublications = (): Publication[] => {
  return rawPublications.map((publication) => ({
    ...publication,
    pdf: publication.pdf
      ? publication.pdf.startsWith('http')
        ? publication.pdf
        : pdfAssets[publication.pdf]
      : undefined,
    arxiv: publication.arxiv ? `https://arxiv.org/abs/${publication.arxiv}` : undefined,
  }));
};

export const siteContent = {
  about: {
    title: 'Reese Levine',
    subtitle: 'PhD Candidate in Computer Science at UC Santa Cruz',
    location: 'Santa Cruz, CA',
    body: aboutSource.trim(),
    imagePath: profileImage,
  },
  news: {
    title: 'News',
    items: parseNewsItems(),
  },
  publications: {
    title: 'Publications',
    items: parsePublications(),
  },
  cv: {
    title: 'CV',
    pdfPath: pdfAssets['cv.pdf'],
  },
} as const;
