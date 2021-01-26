declare module '@paintable/vue' {
  import { App } from 'vue';
  export interface PaintableRef {
    undo(): void;
    redo(): void;
    cancel(): void;
    save(): void;
    clear(keepHistory?: boolean): void;
  }

  const PaintablePlugin: {
    install: (app: App) => void;
  };

  export default PaintablePlugin;
}