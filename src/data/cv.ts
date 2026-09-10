export interface CvEntry {
  start: string; // 'YYYY-MM' or 'YYYY'
  end: string | 'present'; // same format
  title: string;
  org: string;
  orgHref?: string;
  location?: string;
  summary?: string; // one paragraph, plain prose
  points?: string[]; // optional bullets, max 4
  tags?: string[]; // technologies, rendered as small muted chips
}

export interface CvSection {
  id: string; // anchor target, e.g. 'experience'
  heading: string;
  intro?: string;
  entries: CvEntry[];
}

/** 'YYYY-MM' — controls the "Last updated" subline. */
export const lastUpdated = '2026-09';

export const profile: string[] = [
  'I work on simulation and software for emergency response. My PhD at Newcastle University investigates how large language models can improve agent-based evacuation modelling — both for generating realistic synthetic populations and for driving the behavioural decisions of individual agents. Alongside it I build production software at Evolution Risk Assurance, where the same problems appear as fire safety compliance, incident management, and consequence modelling for industrial sites.',
  'My background is in physics and mathematics. I’m most interested in work where a model has to survive contact with a real operational decision.',
];

export const experience: CvEntry[] = [
  {
    start: '2020',
    end: 'present',
    title: 'Software Engineer',
    org: 'Evolution Risk Assurance',
    location: 'Hartlepool',
    summary:
      'Full-stack development of EROMS, a SaaS platform for fire safety compliance and emergency incident management. Built LLM-based systems using retrieval-augmented generation to analyse user input and site documents and produce context-specific response guidance, and automated the generation of pre-incident and business continuity plans. Developed consequence modelling for industrial fires with GIS-based visualisation of flame area, heat flux and lethality contours.',
    points: [
      'Integrated third-party dispersion modelling (Gexcon EFFECTS) into the platform’s consequence-modelling capability',
      'Migrated identity and access management from Auth0 to Keycloak, including a Python migration path across both providers’ APIs',
      'Authored the platform’s data processing statement to support GDPR compliance for an enterprise client, covering sub-processors and disclosed compliance gaps',
      'Maintained Azure Container Apps deployment pipelines and internationalised the Angular front end',
    ],
    tags: ['Angular', 'TypeScript', 'C#', '.NET', 'MongoDB', 'Azure', 'Python'],
  },
  {
    start: '2022-06',
    end: '2022-11',
    title: 'Software Development Consultant',
    org: 'Softwayre',
    location: 'Newcastle',
    summary:
      'Built data extraction and visualisation systems to automate document processing and analytics workflows. Developed REST APIs and web applications for operational data management using Node.js, React, TypeScript, and AWS.',
  },
  {
    start: '2022-02',
    end: '2022-06',
    title: 'Software Engineer',
    org: 'Leslie',
    location: 'London',
    summary:
      'Contributed to a fintech mobile platform built with Flutter and Firebase. Implemented access control, usage analytics, and continuous deployment pipelines. Collaborated with designers and product teams to ensure production reliability.',
  },
];

export const education: CvEntry[] = [
  {
    start: '2024',
    end: '2027',
    title: 'PhD Engineering — EPSRC CDT in Geospatial Systems',
    org: 'Newcastle University',
    summary:
      'Investigating how large language models can enhance agent-based evacuation simulation. The work is structured in three parts: a review of behavioural representation in evacuation models; a framework for sample-free synthetic population generation using LLMs under probabilistic constraints; and an evacuation model coupling SUMO with JuPedSim, in which LLM-driven decision modules replace predefined behavioural rules. The primary case study is Monument Metro Station, Newcastle, validated against Proulx’s 1991 empirical evacuation data, in collaboration with Nexus, the Tyne and Wear Metro operator. Supervised by Jon Mills, Richard Dawson and Helen Hinds. Funded by EPSRC grant EP/S023577/1.',
    tags: ['SUMO', 'JuPedSim', 'Python', 'LLMs', 'Agent-based modelling'],
  },
  {
    start: '2023',
    end: '2024',
    title: 'MRes Geospatial Data Science',
    org: 'Newcastle University',
    summary:
      'Modules: Geospatial Data, Analytics and AI; Engineering for AI; Machine Learning.',
  },
  {
    start: '2021',
    end: '2023',
    title: 'BSc Mathematics, First Class Honours',
    org: 'Open University',
  },
  {
    start: '2017',
    end: '2019',
    title: 'Coursework towards MPhys Physics',
    org: 'University of Oxford',
  },
  {
    start: '2015',
    end: '2017',
    title: 'A Levels — Maths, Further Maths, Physics, Chemistry, Biology (A*A*A*A*A*)',
    org: 'Hartlepool Sixth Form College',
  },
  {
    start: '2010',
    end: '2015',
    title: 'GCSEs — 10 A*, including English and Maths',
    org: 'High Tunstall College of Science',
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: 'Programming', items: ['Python', 'C#', 'TypeScript'] },
  {
    label: 'AI / ML',
    items: ['LLMs', 'Retrieval-Augmented Generation', 'scikit-learn'],
  },
  {
    label: 'Web / Cloud',
    items: ['Angular', '.NET', 'Flutter', 'Azure', 'MongoDB'],
  },
];

export interface Publication {
  date: string; // 'YYYY-MM'
  title: string;
  venue?: string;
  href?: string;
}

// Reverse-chronological.
export const publications: Publication[] = [
  {
    date: '2026-07',
    title: 'Modelling the Effects of Behavioural Heterogeneity in Urban Evacuation',
    venue: 'Social Simulation Conference, Delft',
  },
  {
    date: '2026-06',
    title: 'Sample-free population synthesis with large language models',
    venue: 'PLOS ONE',
    href: 'https://doi.org/10.1371/journal.pone.0341704',
  },
  {
    date: '2026-06',
    title: 'Presentation, SUMO User Conference, Berlin',
  },
];

export const volunteering: CvEntry[] = [
  {
    start: '2019',
    end: 'present',
    title: 'Run Director',
    org: 'parkrun',
    location: 'Hartlepool',
  },
  {
    start: '2017',
    end: '2018',
    title: 'Mathematics Tutor',
    org: 'Oxford Hub',
    location: 'Oxford',
  },
  {
    start: '2014',
    end: '2017',
    title: 'Support Staff',
    org: 'Hartlepool Special Needs Support Group',
    location: 'Hartlepool',
  },
];
