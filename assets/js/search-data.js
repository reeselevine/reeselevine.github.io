// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-presented-our-ongoing-work-on-testing-memory-models-at-ucsc-s-lsd-seminar",
          title: 'I presented our ongoing work on testing memory models at UCSC’s LSD seminar....',
          description: "",
          section: "News",},{id: "news-i-started-an-internship-on-apple-s-gpu-platform-architecture-team",
          title: 'I started an internship on Apple’s GPU Platform Architecture team.',
          description: "",
          section: "News",},{id: "news-our-work-on-evaluating-testing-techniques-for-memory-models-mc-mutants-was-accepted-to-asplos-2023",
          title: 'Our work on evaluating testing techniques for memory models, MC Mutants, was accepted...',
          description: "",
          section: "News",},{id: "news-i-presented-the-mc-mutants-work-at-the-khronos-group-s-f2f-in-phoenix-az",
          title: 'I presented the MC Mutants work at the Khronos Group’s F2F in Phoenix,...',
          description: "",
          section: "News",},{id: "news-i-passed-my-qualifying-examination-and-advanced-to-candidacy-presenting-my-thesis-proposal-testing-and-improving-memory-consistency-specifications",
          title: 'I passed my qualifying examination and advanced to candidacy, presenting my thesis proposal...',
          description: "",
          section: "News",},{id: "news-my-proposal-probabilistic-memory-consistency-specifications-was-accepted-to-yarch-23-a-workshop-at-asplos-2023",
          title: 'My proposal Probabilistic Memory Consistency Specifications was accepted to YArch’23, a workshop at...',
          description: "",
          section: "News",},{id: "news-mc-mutants-won-both-a-distinguished-paper-award-and-a-distinguished-artifact-award-at-asplos-2023-check-out-this-article-from-ucsc-with-more-details-about-our-work",
          title: 'MC Mutants won both a Distinguished Paper Award and a Distinguished Artifact Award...',
          description: "",
          section: "News",},{id: "news-i-was-honored-to-be-awarded-an-ndseg-fellowship",
          title: 'I was honored to be awarded an NDSEG Fellowship.',
          description: "",
          section: "News",},{id: "news-our-experience-paper-on-running-a-large-scale-gpu-memory-model-study-nicknamed-gpuharbor-was-accepted-to-issta-2023",
          title: 'Our experience paper on running a large scale GPU memory model study, nicknamed...',
          description: "",
          section: "News",},{id: "news-i-returned-for-another-summer-internship-at-apple-on-their-gpu-platform-architecture-team",
          title: 'I returned for another summer internship at Apple on their GPU Platform Architecture...',
          description: "",
          section: "News",},{id: "news-i-presented-gpuharbor-at-issta-2023-where-it-won-a-distinguished-artifact-award",
          title: 'I presented GPUHarbor at ISSTA 2023, where it won a Distinguished Artifact Award....',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-testing-memory-consistency-at-imperial-college-london-university-of-kent-cambridge-university-and-bristol-university",
          title: 'I presented our work on testing memory consistency at Imperial College London, University...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-evolving-weak-memory-models-for-evolving-architectures-at-the-future-of-weak-memory-workshop-at-popl-2024",
          title: 'I gave a talk on evolving weak memory models for evolving architectures at...',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-testing-the-vulkan-memory-model-at-vulkanised-2024",
          title: 'I presented our work on testing the Vulkan memory model at Vulkanised 2024....',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-testing-memory-consistency-at-stanford-university",
          title: 'I presented our work on testing memory consistency at Stanford University.',
          description: "",
          section: "News",},{id: "news-our-sigarch-blog-on-finding-memory-model-errors-in-a-recent-gpu-synchronization-paper-was-released-highlighting-opportunties-for-future-research-and-collaboration",
          title: 'Our SIGARCH blog on finding memory model errors in a recent GPU synchronization...',
          description: "",
          section: "News",},{id: "news-our-work-on-assessing-and-addressing-webgpu-memory-safety-in-the-presence-of-data-races-saferace-was-accepted-to-oopsla-2025",
          title: 'Our work on assessing and addressing WebGPU memory safety in the presence of...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%65%65%73%65%6C%65%76%69%6E%65%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/reeselevine", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/reeselevine", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JCm7dFcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
