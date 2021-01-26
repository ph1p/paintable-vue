# @paintable/vue

This package is a complete rewrite of vue-paintable. It's based on this core module: [https://github.com/ph1p/paintable-core](https://github.com/ph1p/paintable-core)

This plugin works with **Vue 3+**

**Demo:** [https://paintable-vue.vercel.app/](https://paintable-vue.vercel.app/)

### How to use?

Follow these three simple steps:

```bash
npm install @paintable/vue
```

**main.js\_**

```javascript
import { createApp } from 'vue';
import App from './App.vue';
// import the plugin
import Paintable from '@paintable/vue';

const app = createApp(App);

app.use(Paintable);

app.mount('#app');
```

Inside you **\*.vue** file

```vue
<template>
  <paintable
    :active="active"
    :width="800"
    :height="800"
    :hide="hidePaintable"
    :name="isFirstPaintable ? 'my-screen' : 'my-second-screen'"
    :lineWidth="lineWidth"
    :color="color"
  >
    <h1>Content</h1>
  </paintable>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isFirstPaintable: true,
      hidePaintable: false,
      lineWidth: 5,
      active: false,
      color: '#000000'
    };
  },
  methods: {
    navigate() {
      this.isFirstPaintable = !this.isFirstPaintable;
    },
    toggledPaintable(active: boolean) {
      this.active = active;
    }
  }
};
</script>
```

### Development

```bash
npm run install
npm run dev
```
