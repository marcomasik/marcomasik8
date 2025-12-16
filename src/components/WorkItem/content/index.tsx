import { IdealoContent } from './IdealoContent';
import { MilesContent } from './MilesContent';
import { MuskinnContent } from './MuskinnContent';
import { SwarmContent } from './SwarmContent';
import { KMonitorContent } from './KMonitorContent';
import { BorneoContent } from './BorneoContent';

const contentComponents: Record<string, React.ComponentType> = {
  idealo: IdealoContent,
  miles: MilesContent,
  muskinn: MuskinnContent,
  swarm: SwarmContent,
  kmonitor: KMonitorContent,
  borneo: BorneoContent,
};

export const getWorkItemContent = (id: string) => {
  return contentComponents[id] || null;
};