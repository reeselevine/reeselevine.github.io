export type RawPublication = {
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

export const rawPublications: RawPublication[] = [
  {
    key: 'behind-bars',
    kind: 'conference',
    abbr: 'USENIX Security',
    author: 'Gu, Cheng and Levine, Reese and Zhang, Zhenkai and Sorensen, Tyler and Guo, Yanan',
    title: 'Behind Bars: A Side-Channel Attack on NVIDIA MIG Cache Partitioning Using Memory Barriers',
    year: '2026',
    venue: 'USENIX Security Symposium',
    pdf: 'https://www.usenix.org/system/files/conference/usenixsecurity26/sec26_prepub_gu-cheng.pdf',
  },
  {
    key: 'memory-disorder',
    kind: 'articles',
    abbr: 'arXiv',
    author: 'Siddens, Sean and Srivastava, Sanya and Levine, Reese and Dykstra, Josiah and Sorensen, Tyler',
    title: 'Memory DisOrder: Memory Re-orderings as a Timerless Side-channel',
    year: '2026',
    venue: 'arXiv preprint arXiv:2601.08770',
    arxiv: '2601.08770',
  },
  {
    key: 'saferace',
    kind: 'conference',
    abbr: 'OOPSLA',
    author: 'Levine, Reese and Lee, Ashley and Abbas, Neha and Little, Kyle and Sorensen, Tyler',
    title: 'SafeRace: Assessing and Addressing WebGPU Memory Safety in the Presence of Data Races',
    year: '2025',
    venue: 'OOPSLA2 issue of the Proceedings of the ACM on Programming Languages',
    publisher: 'ACM',
    pdf: 'saferace.pdf',
  },
  {
    key: 'sigarch-blog',
    kind: 'articles',
    abbr: 'SIGARCH',
    author: 'Basu, Arkaprava and Gavrilenko, Natalia and Heljanko, Keijo and Levine, Reese and Ashok Nayak, Ajay and Ponce de León, Hernán and Sorensen, Tyler and Tong, Haining',
    title: 'GPU Memory Consistency: Specifications, Testing, and Opportunities for Performance Tooling',
    year: '2025',
    venue: 'SIGARCH Blog',
    publisher: 'ACM',
    blog: 'https://www.sigarch.org/gpu-memory-consistency-specifications-testing-and-opportunities-for-performance-tooling/',
  },
  {
    key: 'gpuharbor',
    kind: 'conference',
    abbr: 'ISSTA',
    author: 'Levine, Reese and Cho, Mingun and McKee, Devon and Quinn, Andi and Sorensen, Tyler',
    title: 'GPUHarbor: Testing GPU Memory Consistency at Large (Experience Paper)',
    year: '2023',
    venue: 'International Symposium on Software Testing and Analysis (ISSTA)',
    publisher: 'ACM',
    pdf: 'gpuharbor.pdf',
    note: '<b>Distinguished Artifact</b>',
  },
  {
    key: 'mc-mutants',
    kind: 'conference',
    abbr: 'ASPLOS',
    author: 'Levine, Reese and Guo, Tianhao and Cho, Mingun and Baker, Alan and Levien, Raph and Neto, David and Quinn, Andi and Sorensen, Tyler',
    title: 'MC Mutants: Evaluating and Improving Testing for Memory Consistency Specifications',
    year: '2023',
    venue: 'Architectural Support for Programming Languages and Operating Systems (ASPLOS)',
    publisher: 'ACM',
    pdf: 'mc_mutants.pdf',
    note: '<b>Distinguished Paper, Distinguished Artifact</b>',
  },
  {
    key: 'yarch',
    kind: 'workshop',
    abbr: 'YArch',
    author: 'Levine, Reese and Sorensen, Tyler',
    title: 'Probabilistic Memory Consistency Specifications',
    year: '2023',
    venue: 'Young Architect Workshop',
    publisher: 'ACM',
    pdf: 'yarch_pmcs.pdf',
  },
];
