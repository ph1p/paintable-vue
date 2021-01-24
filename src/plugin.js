import PaintableComponent from './Paintable.vue';
import { Paintable } from '@paintable/core';

const PaintablePlugin = {
  install(app, options) {
    const paintableInstance = new Paintable();

    if (app.version && app.version.startsWith('3')) {
      app.config.globalProperties.$paintable = paintableInstance;
    } else {
      app.prototype.$paintable = paintableInstance;
    }

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
