import PaintableComponent from './Paintable.vue';
import { App } from 'vue';

const PaintablePlugin = {
  install(app: App) {
    app.component('paintable', PaintableComponent);
  },
};

export default PaintablePlugin;
