<template>
  <div class="paintable">
    <canvas
      v-if="!hide"
      class="paintable"
      ref="canvas"
      :width="width"
      :height="height"
      :style="{
        pointerEvents: !active ? 'none' : 'all'
      }"
      :class="{ active: active || alwaysOnTop }"
    ></canvas>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Paintable } from '@paintable/core';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'paintable',
  data() {
    return {
      paintable: new Paintable()
    };
  },
  props: {
    alwaysOnTop: {
      type: Boolean,
      default: true
    },
    scope: {
      type: String,
      required: true
    },
    accuracy: {
      type: Number,
      default: 4
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
    lineWidth: {
      type: Number,
      default: 5
    },
    active: {
      type: Boolean,
      default: false
    },
    isEraser: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  mounted() {
    this.paintable.setCanvas(this.$refs.canvas as HTMLCanvasElement);
  },
  watch: {
    hide: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          if (this.$refs.canvas) {
            this.paintable.setCanvas(this.$refs.canvas as HTMLCanvasElement);
          }
        });
      }
    },
    scope: {
      immediate: true,
      handler(scope) {
        this.paintable.setScope(scope);
      }
    },
    accuracy: {
      immediate: true,
      handler(accuracy) {
        this.paintable.setAccuracy(accuracy);
      }
    },
    active: {
      immediate: true,
      handler(active) {
        this.paintable.setActive(active);
      }
    },
    color: {
      immediate: true,
      handler(color) {
        this.paintable.setColor(color);
      }
    },
    lineWidth: {
      immediate: true,
      handler(lineWidth) {
        this.paintable.setLineWidth(lineWidth);
      }
    },
    isEraser: {
      immediate: true,
      handler(isEraser) {
        this.paintable.setEraser(isEraser);
      }
    }
  },
  methods: {
    undo() {
      this.paintable.undo();
    },
    redo() {
      this.paintable.redo();
    },
    cancel() {
      this.paintable.cancel();
    },
    save() {
      this.paintable.save();
    },
    clear(keepHistory = false) {
      this.paintable.clear(keepHistory);
    }
  }
});
</script>

<style scoped>
body {
  position: fixed;
}
.paintable {
  display: block;
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
