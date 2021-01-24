<template>
  <div>
    <div class="custom-navigation">
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
        <button @click="$refs.paintable.undo">undo</button>
        <button @click="$refs.paintable.redo">redo</button>
        <button @click="$refs.paintable.clear(true)">clear</button><br /><br />
        <button
          @click="
            $refs.paintable.save();
            active = false;
          "
        >
          save
        </button>
        <button
          @click="
            $refs.paintable.cancel();
            active = false;
          "
        >
          cancel</button
        ><br /><br />
      </div>
      <div v-else>
        <button @click="active = !active" v-if="!hidePaintable">
          start drawing
        </button>
        <button @click="hidePaintable = !hidePaintable">show/hide</button>
        <button @click="navigate">switch to another paintable</button>
      </div>
    </div>

    <paintable
      :active="active"
      :width="800"
      :height="800"
      :disableNavigation="disableNavigation"
      :hide="hidePaintable"
      :horizontalNavigation="true"
      :name="isFirstPaintable ? 'my-screen' : 'my-second-screen'"
      :lineWidth="dynamicLineWidth"
      :color="color"
      class="paint"
      ref="paintable"
      @toggle-paintable="toggledPaintable"
    >
      <h3>
        Paintable <strong>{{ isFirstPaintable ? '1' : '2' }}</strong>
      </h3>
      <img
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
        href="https://github.com/ph1p/vue-paintable"
        >on github</a
      >
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFirstPaintable: true,
      hidePaintable: false,
      disableNavigation: false,
      dynamicLineWidth: 5,
      active: false,
      color: '#000'
    };
  },
  methods: {
    navigate() {
      this.isFirstPaintable = !this.isFirstPaintable;
    },
    hide() {
      this.$hidePaintableNavigation();
    },
    show() {
      this.$showPaintableNavigation();
    },
    toggledPaintable(active) {
      this.active = active;
    }
  }
};
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
  text-transform: uppercase;
  text-decoration: none;
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
.custom-navigation {
  /* position: fixed; */
  top: 40px;
  left: 40px;
  z-index: 1001;
  background-color: #fff;
}
.custom-navigation .controls {
  margin: 10px 0 0 0;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}
</style>
