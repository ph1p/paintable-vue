<template>
  <div>
    <div class="navigation">
      <div v-if="active && !hidePaintable">
        {{ dynamicLineWidth }}px<br />
        <input
          type="range"
          @input="dynamicLineWidth = +$event.target.value"
          min="1"
          max="100"
          value="5"
        />
        <input type="color" v-model="color" /><br /><br />
        <button @click="isEraser = !isEraser">
          {{ isEraser ? 'pencil' : 'eraser' }}
        </button>
        <button @click="$refs.paintable.undo">undo</button>
        <button @click="$refs.paintable.redo">redo</button>
        <!-- <button @click="$refs.paintable.clear">clear</button><br /><br /> -->
        <button @click="save">
          save
        </button>
        <button @click="cancel">
          cancel</button
        ><br /><br />
      </div>
      <div v-else>
        <button @click="active = !active" :disabled="hidePaintable">
          start drawing
        </button>
        <button @click="hidePaintable = !hidePaintable">
          {{ hidePaintable ? 'show' : 'hide' }} complete canvas
        </button>
        <button @click="navigate">switch to another paintable</button>
      </div>
    </div>

    <paintable
      :active="active"
      :width="800"
      :height="800"
      :hide="hidePaintable"
      :scope="isFirstPaintable ? 'my-screen' : 'my-second-screen'"
      :lineWidth="dynamicLineWidth"
      :color="color"
      :isEraser="isEraser"
      class="paint"
      ref="paintable"
    >
      <h3>
        Paintable <strong>{{ isFirstPaintable ? '1' : '2' }}</strong>
      </h3>
      <img
        alt="Unsplash Background-Image"
        :src="
          `https://source.unsplash.com/collection/195845/800x80${
            isFirstPaintable ? 0 : 1
          }`
        "
      />
    </paintable>

    <footer>
      <a
        class="github-link"
        _target="blank"
        href="https://github.com/ph1p/paintable-vue"
        >@paintable/vue &middot; on github &middot; v{{ version }}
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import { Paintable } from '@paintable/core';
import { defineComponent } from 'vue';
import { version } from '../package.json';

export default defineComponent({
  name: 'App',
  data() {
    return {
      version,
      isFirstPaintable: true,
      hidePaintable: false,
      dynamicLineWidth: 5,
      active: false,
      isEraser: false,
      color: '#000000'
    };
  },
  methods: {
    navigate() {
      this.isFirstPaintable = !this.isFirstPaintable;
    },
    save() {
      (this.$refs.paintable as Paintable).save();
      this.active = false;
      this.isEraser = false;
    },
    cancel() {
      (this.$refs.paintable as Paintable).cancel();
      this.active = false;
      this.isEraser = false;
    }
  }
});
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  position: initial !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  font-weight: normal;
}
.control {
  margin: 20px;
}
.paint {
  border: 5px solid #000;
  border-radius: 5px;
  margin: 40px auto;
  box-sizing: border-box;
  display: block;
  width: 810px !important;
  height: 810px !important;
  position: relative !important;
  overflow: hidden;
}
footer {
  text-align: center;
}
footer a {
  color: #777;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}
button {
  border: 0;
  margin: 0 10px 0 0;
  font-size: 14px;
  padding: 10px 15px;
  opacity: 0.8;
  background-color: rgb(19, 102, 141);
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  opacity: 1;
}
button:disabled {
  opacity: 0.5;
}
.navigation {
  /* position: fixed; */
  top: 40px;
  left: 40px;
  z-index: 1001;
  background-color: #fff;
}
.navigation .controls {
  margin: 10px 0 0 0;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}
</style>
