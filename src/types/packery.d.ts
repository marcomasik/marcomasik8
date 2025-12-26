declare module 'packery' {
  interface PackeryOptions {
    itemSelector?: string;
    gutter?: number;
    columnWidth?: number;
    rowHeight?: number;
    transitionDuration?: string | number;
    stagger?: number;
    initLayout?: boolean;
    originLeft?: boolean;
    originTop?: boolean;
    containerStyle?: Record<string, string>;
    percentPosition?: boolean;
    stamp?: string | HTMLElement | HTMLElement[];
  }

  class Packery {
    constructor(element: string | HTMLElement, options?: PackeryOptions);
    layout(): void;
    layoutItems(items: any[], isStill?: boolean): void;
    shiftLayout(): void;
    fit(element: HTMLElement, x?: number, y?: number): void;
    stamp(elements: HTMLElement | HTMLElement[]): void;
    unstamp(elements: HTMLElement | HTMLElement[]): void;
    appended(elements: HTMLElement | HTMLElement[]): void;
    prepended(elements: HTMLElement | HTMLElement[]): void;
    addItems(elements: HTMLElement | HTMLElement[]): void;
    remove(elements: HTMLElement | HTMLElement[]): void;
    reloadItems(): void;
    destroy(): void;
    getItemElements(): HTMLElement[];
    items: any[];
  }

  export default Packery;
}

