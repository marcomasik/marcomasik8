declare module 'react-textfit' {
  import { ReactNode } from 'react';
  
  interface TextfitProps {
    mode?: 'single' | 'multi';
    min?: number;
    max?: number;
    throttle?: number;
    onReady?: () => void;
    children: ReactNode;
    style?: React.CSSProperties;
    className?: string;
  }
  
  export const Textfit: React.FC<TextfitProps>;
}
