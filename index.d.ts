declare module '@paintable/vue' {
  export interface PaintableRef {
    undo(): void;
    redo(): void;
    cancel(): void;
    save(): void;
    clear(keepHistory?: boolean): void;
  }
}