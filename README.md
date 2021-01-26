# @paintable/vue

This package is a complete rewrite of vue-paintable. It's based on this core module: [https://github.com/ph1p/paintable-core](https://github.com/ph1p/paintable-core)

This plugin works with **Vue 3+**

**Demo:** [https://paintable-vue.vercel.app/](https://paintable-vue.vercel.app/)

### How to use?

Follow these three simple steps:

```bash
npm install @paintable/vue
```

**main.js**

```javascript
import { createApp } from 'vue';
import App from './App.vue';
// import the plugin
import Paintable from '@paintable/vue';

const app = createApp(App);

app.use(Paintable);

app.mount('#app');
```

Inside your **\*.vue** file (full example **./src/App.vue**)

```vue
<template>
  <paintable
    ref="paintable"
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
      active: true,
      color: '#000000'
    };
  }
};
</script>
```

### Development

```bash
npm run install
npm run serve
```
