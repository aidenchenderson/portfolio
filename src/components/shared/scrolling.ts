export const scrollSections: string[] = [
  'experience',
  'projects',
  'skills',
  'about'
];

export const scrollToSection = (section: string) => {
  const element: HTMLElement | null = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}