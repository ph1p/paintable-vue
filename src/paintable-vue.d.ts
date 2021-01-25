import { Paintable } from '@paintable/core';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $paintable: Paintable;
  }
}
