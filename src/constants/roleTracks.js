export const ROLE_OPTIONS = [
  { value: 'swe_dsa', label: 'Software Engineer · DSA-heavy' },
  { value: 'web_fullstack', label: 'Web Developer · Full-stack' },
  { value: 'ml_engineer', label: 'ML Engineer' },
  { value: 'data_scientist', label: 'Data Scientist' },
]

export const ROLE_TRACKS = {
  swe_dsa: {
    coreSkills: ['Data structures', 'Algorithms', 'Problem solving', 'System design basics'],
  },
  web_fullstack: {
    coreSkills: ['HTML/CSS/JS', 'React', 'API design', 'Databases'],
  },
  ml_engineer: {
    coreSkills: ['Python', 'ML fundamentals', 'Deep learning', 'MLOps basics'],
  },
  data_scientist: {
    coreSkills: ['Statistics', 'Data analysis', 'ML models', 'Storytelling'],
  },
}
