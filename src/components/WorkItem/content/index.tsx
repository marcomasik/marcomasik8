import { IdealoContent } from './IdealoContent';

const contentComponents: Record<string, React.ComponentType> = {
  idealo: IdealoContent,
  // miles: MilesContent,     // Add later
  // freelance1: Freelance1Content,  // Add later
};

export const getWorkItemContent = (id: string) => {
  return contentComponents[id] || null;
};