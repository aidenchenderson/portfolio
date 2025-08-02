export const scrollSections: string[] = [
  'experience',
  'projects',
  'skills',
  'about',
  'desc'
];

export const scrollToSection = (section: string) => {
  const element: HTMLElement | null = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}