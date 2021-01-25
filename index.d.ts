declare module '@paintable/vue' {
  import { App } from 'vue';
  export interface PaintableRef {
    undo(): void;
    redo(): void;
    cancel(): void;
    save(): void;
    clear(keepHistory?: boolean): void;
  }
  export interface PluginOptions {
    setItem: (key: string, value: any) => void;
    getItem: (key: string) => any;
    removeItem: (key: string) => void;
  }

  const PaintablePlugin: {
    install: (app: App, options: PluginOptions) => void;
  };

  export default PaintablePlugin;
}