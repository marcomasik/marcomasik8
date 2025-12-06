import { IdealoContent } from './IdealoContent';
import { MilesContent } from './MilesContent';

const contentComponents: Record<string, React.ComponentType> = {
  idealo: IdealoContent,
  miles: MilesContent,
};

export const getWorkItemContent = (id: string) => {
  return contentComponents[id] || null;
};