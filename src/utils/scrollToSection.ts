export const getScrollOffset = (sectionId: string): { mobile: number; desktop: number } => {
  const offsets = {
    'works': { mobile: 60, desktop: 80 },
    'cv': { mobile: 60, desktop: 80 },
    'contact': { mobile: 60, desktop: 80 },
    'start': { mobile: 0, desktop: 0 }
  };
  return offsets[sectionId as keyof typeof offsets] || { mobile: 60, desktop: 80 };
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const isMobile = window.innerWidth <= 767;
  const offset = getScrollOffset(sectionId);
  const scrollOffset = isMobile ? offset.mobile : offset.desktop;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - scrollOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

