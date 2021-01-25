import PaintableComponent from './Paintable.vue';
import { Paintable } from '@paintable/core';
import { App } from 'vue';

export interface Options {
  setItem: (key: string, value: any) => void;
  getItem: (key: string) => any;
  removeItem: (key: string) => void;
}

export type PaintableRef = typeof PaintableComponent.methods;

const PaintablePlugin = {
  install(app: App, options: Options) {
    const paintableInstance = new Paintable();

    app.config.globalProperties.$paintable = paintableInstance;

    if (options && options.setItem) {
      paintableInstance.setItem = options.setItem;
    }

    if (options && options.getItem) {
      paintableInstance.getItem = options.getItem;
    }

    if (options && options.removeItem) {
      paintableInstance.removeItem = options.removeItem;
    }

    app.component('paintable', PaintableComponent);
  }
};

export default PaintablePlugin;
