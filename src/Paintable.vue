<template>
  <div class="paintable">
    <canvas
      v-if="!hide"
      class="paintable"
      ref="canvas"
      :width="width"
      :height="height"
      :style="{
        pointerEvents: !active ? 'none' : 'all',
        display: !canvasIsEmpty || active ? 'block' : 'none'
      }"
      :class="{ active: active || alwaysOnTop }"
    ></canvas>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paintable',
  props: {
    alwaysOnTop: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: window.innerWidth
    },
    height: {
      type: Number,
      default: window.innerHeight
    },
    hide: {
      type: Boolean,
      default: false
    },
    threshold: {
      type: Number,
      default: 0
    },
    showUndoRedo: {
      type: Boolean,
      default: true
    },
    showLineWidth: {
      type: Boolean,
      default: true
    },
    lineWidth: {
      type: Number,
      default: 5
    },
    colors: {
      type: Array,
      default: () => [
        'black',
        '#f00',
        '#4481c7',
        'rgba(255, 235, 59, 0.4)',
        '#999',
        'green'
      ]
    },
    horizontalNavigation: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  mounted() {
    this.$paintable.setCanvas(this.$refs.canvas);
  },
  watch: {
    hide: {
      immediate: true,
      handler(name) {
        this.$nextTick(() => {
          if (this.$refs.canvas) {
            this.$paintable.setCanvas(this.$refs.canvas);
          }
        });
      }
    },
    name: {
      immediate: true,
      handler(name) {
        this.$paintable.setName(name);
      }
    },
    active: {
      immediate: true,
      handler(active) {
        this.$paintable.setActive(active);
      }
    },
    color: {
      immediate: true,
      handler(color) {
        this.$paintable.setColor(color);
      }
    },
    lineWidth: {
      immediate: true,
      handler(lineWidth) {
        this.$paintable.setLineWidth(lineWidth);
      }
    }
  },
  computed: {
    canvasIsEmpty() {
      return this.$paintable.canvasIsEmpty;
    }
  },
  methods: {
    undo() {
      this.$paintable.undo();
    },
    redo() {
      this.$paintable.redo();
    },
    cancel() {
      this.$paintable.cancel();
    },
    save() {
      this.$paintable.save();
    },
    clear(keepHistory = false) {
      this.$paintable.clear(keepHistory);
    }
  }
  // setup(props) {
  //   const { paintable, canvas } = usePaintable();
  //   console.log(canvas, paintable);
  //   // const isActive = ref(false);

  //   watch(
  //     () => props.active,
  //     active => {
  //       paintable.setActive(active);
  //     }
  //   );

  //   return {
  //     canvas
  //   };
  // }
};
</script>

<style>
body {
  position: fixed;
}
.paintable {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  transform: scale(1);
}
.paintable.active {
  z-index: 0;
}
.paintable .canvas {
  position: relative;
  background-color: transparent;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  touch-action: none;
}
.paintable .canvas.active {
  z-index: 1000;
}
.paintable .canvas.active.back {
  z-index: 999;
}
</style>
