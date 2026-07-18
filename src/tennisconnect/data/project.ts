import type { Project } from './types';

// The TennisConnect case-study project (ported from the old portfolio).
export const project: Project = {
  id: 2,
  slug: 'tennisconnect',
  layoutType: 'case',
  title: 'TennisConnect',
  description:
    'A web platform that replaced a manual, Excel-based tennis ranking system at Clube Paladino with a real-time, accessible digital product — currently live and in testing.',
  context: 'Personal Project · Paladino Tennis Club',
  role: 'Product Designer',
  theme: 'Sports · Digital Product',
  featured: false,
  tags: ['UX Research', 'Product Design', 'Design System', 'Prototyping'],
  coverImage: '/inicio.png',
  steps: [
    {
      id: 1,
      slug: 'step-01',
      title: 'Research',
      subtitle: 'Discovering the real problem behind the Excel-based ranking process through contextual research and an in-depth interview.',
      tags: ['In-depth Interview', 'Contextual Research', 'Double Diamond'],
    },
    {
      id: 2,
      slug: 'step-02',
      title: 'Problem Definition',
      subtitle: 'Mapping the user journey, identifying pain points, and writing a problem statement that guided every subsequent decision.',
      tags: ['User Journey', 'Problem Statement', 'Opportunity Mapping'],
    },
    {
      id: 3,
      slug: 'step-03',
      title: 'Ideation',
      subtitle: 'Using an Opportunity Solution Tree, user flow and inspired research to scope the solution space before committing to any screen.',
      tags: ['Opportunity Solution Tree', 'User Flow', 'Benchmark', 'Scope Definition'],
    },
    {
      id: 4,
      slug: 'step-04',
      title: 'Design System',
      subtitle: 'Building the visual foundation — typography, color, and components — before designing any screen.',
      tags: ['Design System', 'Figma', 'Visual Identity'],
    },
    {
      id: 5,
      slug: 'step-05',
      title: 'Prototyping',
      subtitle: 'From lo-fi sketches to high-fidelity screens across all four delivery phases: Login, Games Table, Rankings, and Profile.',
      tags: ['Lo-Fi', 'Hi-Fi', 'Figma', 'User Flows'],
    },
    {
      id: 6,
      slug: 'step-06',
      title: 'Dev Collaboration & Delivery',
      subtitle: 'Working hand-in-hand with the developer through four structured deliveries to bring the design intent into a live product.',
      tags: ['Handoff', 'Agile', 'React', '.NET'],
    },
  ],
  outcomes: [
    {
      id: 1,
      title: 'Live Product',
      description: 'A fully functional web application currently in testing at Clube Paladino, replacing Excel entirely for ranking and game management.',
    },
    {
      id: 2,
      title: 'Design System',
      description: 'A reusable component library built in Figma, ensuring visual consistency and enabling faster future iterations.',
    },
    {
      id: 3,
      title: 'Decentralized Access',
      description: 'Any club administrator can now manage rankings and draws independently — removing the single point of failure the old process had.',
    },
    {
      id: 4,
      title: 'Foundation for Growth',
      description: 'A defined backlog of future features — player profiles, H2H stats, historical data — structured as modular expansions ready to be built.',
    },
  ],
};
