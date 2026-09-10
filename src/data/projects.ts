export interface Project {
  start: string; // 'YYYY-MM' or 'YYYY'
  end: string | 'present';
  title: string;
  summary: string;
  tags?: string[];
  href?: string; // related output, e.g. a paper
  hrefLabel?: string;
}

// Reverse-chronological. Content derived from the CV's research projects.
export const projects: Project[] = [
  {
    start: '2025-03',
    end: 'present',
    title: 'Sample-free population synthesis with LLMs',
    summary:
      'A framework for generating synthetic population data without survey samples, using large language models under probabilistic constraints. Implemented a data generation and validation pipeline in Python to improve demographic realism in urban simulations. Published in PLOS ONE.',
    tags: ['Python', 'LLMs', 'Synthetic populations'],
    href: 'https://doi.org/10.1371/journal.pone.0341704',
    hrefLabel: 'Read the paper',
  },
  {
    start: '2025-02',
    end: '2025-03',
    title: 'LLM-driven behavioural modelling for evacuation',
    summary:
      'A prototype integrating large language models as decision modules within agent-based models, replacing predefined behavioural rules. Demonstrated a functional link between GPT-based decision logic and simulation agents — the basis for the behavioural layer of the PhD evacuation model.',
    tags: ['LLMs', 'Agent-based modelling', 'GPT'],
  },
  {
    start: '2025-04',
    end: '2025-04',
    title: 'Housing submarket identification',
    summary:
      'A collaborative project using principal component analysis and clustering to identify urban housing submarkets. Combined spatial, demographic and building-attribute data to reveal structural patterns across neighbourhoods.',
    tags: ['Python', 'PCA', 'Clustering'],
  },
];
