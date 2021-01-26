# @paintable/vue

This package is a complete rewrite of vue-paintable and currently under development (:

This plugin works with **Vue 3+**

**Demo:** [https://paintable-vue.vercel.app/](https://paintable-vue.vercel.app/)

### How to use?

```bash
npm install @paintable/vue
```

_main.js_

```javascript
import { createApp } from 'vue';
import App from './App.vue';
// import the plugin
import Paintable from '@paintable/vue';

const app = createApp(App);

app.use(Paintable);

app.mount('#app');
```
