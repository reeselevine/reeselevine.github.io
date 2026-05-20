export type RawNewsItem = {
  slug: string;
  date: string;
  body: string;
};

export const rawNewsItems: RawNewsItem[] = [
  {
    slug: 'memory_disorder',
    date: '2026-1-13',
    body: 'Our paper, [Memory DisOrder](https://arxiv.org/abs/2601.08770), is now on arXiv. Congrats to [Sean](https://seansiddens.github.io/) and [Sanya](https://www.linkedin.com/in/sanyasrivas/) who led this work!',
  },
  {
    slug: 'saferace_acceptance',
    date: '2025-8-15',
    body: 'Our work on assessing and addressing WebGPU memory safety in the presence of data races, [SafeRace](assets/pdf/saferace.pdf), was accepted to [OOPSLA 2025](https://2025.splashcon.org/track/OOPSLA?).',
  },
  {
    slug: 'sigarch',
    date: '2025-6-6',
    body: 'Our [SIGARCH blog](https://www.sigarch.org/gpu-memory-consistency-specifications-testing-and-opportunities-for-performance-tooling/) on finding memory model errors in a recent GPU synchronization paper was released, highlighting opportunties for future research and collaboration.',
  },
  {
    slug: 'stanford_talk',
    date: '2024-10-31',
    body: 'I presented our work on testing memory consistency at Stanford University.',
  },
  {
    slug: 'vulkanized',
    date: '2024-2-12',
    body: 'I presented our work on testing the Vulkan memory model at [Vulkanised 2024](https://vulkan.org/events/vulkanised-2024).',
  },
  {
    slug: 'fowm',
    date: '2024-1-15',
    body: 'I gave a talk on evolving weak memory models for evolving architectures at the [Future of Weak Memory](https://popl24.sigplan.org/home/fowm-2024) workshop at POPL 2024.',
  },
  {
    slug: 'tour_talks',
    date: '2024-1-13',
    body: 'I presented our work on testing memory consistency at Imperial College London, University of Kent, Cambridge University, and Bristol University.',
  },
  {
    slug: 'issta_award',
    date: '2023-6-23',
    body: 'I presented GPUHarbor at ISSTA 2023, where it won a _Distinguished Artifact Award_.',
  },
  {
    slug: 'apple_internship2',
    date: '2023-6-21',
    body: 'I returned for another summer internship at Apple on their GPU Platform Architecture team.',
  },
  {
    slug: 'issta_acceptance',
    date: '2023-4-13',
    body: 'Our experience paper on running a large scale GPU memory model study, nicknamed [GPUHarbor](assets/pdf/gpuharbor.pdf), was accepted to [ISSTA 2023](https://conf.researchr.org/home/issta-2023).',
  },
  {
    slug: 'ndseg',
    date: '2023-4-6',
    body: 'I was honored to be awarded an [NDSEG Fellowship](https://ndseg.org/).',
  },
  {
    slug: 'asplos_awards',
    date: '2023-3-24',
    body: 'MC Mutants won both a _Distinguished Paper Award_ and a _Distinguished Artifact Award_ at ASPLOS 2023. Check out [this](https://news.ucsc.edu/2023/03/sorensen-bugs.html) article from UCSC with more details about our work.',
  },
  {
    slug: 'yarch',
    date: '2023-2-4',
    body: "My proposal [Probabilistic Memory Consistency Specifications](assets/pdf/yarch_pmcs.pdf) was accepted to [YArch'23](https://web.mit.edu/yarch2023/), a workshop at ASPLOS 2023.",
  },
  {
    slug: 'advancement',
    date: '2023-1-16',
    body: 'I passed my qualifying examination and advanced to candidacy, presenting my thesis proposal _Testing and Improving Memory Consistency Specifications_.',
  },
  {
    slug: 'khronos_f2f',
    date: '2022-10-16',
    body: "I presented the MC Mutants work at the [Khronos Group's](https://www.khronos.org/) F2F in Phoenix, AZ.",
  },
  {
    slug: 'asplos_acceptance',
    date: '2022-9-1',
    body: 'Our work on evaluating testing techniques for memory models, [MC Mutants](assets/pdf/mc_mutants.pdf), was accepted to [ASPLOS 2023](https://www.asplos-conference.org/asplos2023/).',
  },
  {
    slug: 'apple_internship',
    date: '2022-7-1',
    body: 'I started an internship on Apple’s GPU Platform Architecture team.',
  },
  {
    slug: 'lsd_seminar',
    date: '2022-1-28',
    body: 'I presented our ongoing work on testing memory models at UCSC’s LSD seminar.',
  },
];
