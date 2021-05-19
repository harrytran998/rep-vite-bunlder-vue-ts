<template>
  <button
    v-focus
    v-bind="$attrs"
    :about="nativeType === 'reset' ? '' : ''"
    class="
      border
      rounded-md
      outline-noneborder-teal-500
      border-2
      text-white
      align-middle
      bg-pink-500
    "
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ButtonNativeType, ComponentSize } from './types'

export default defineComponent({
  name: 'AButton',
  inheritAttrs: false,
  props: {
    nativeType: {
      default: 'button',
      type: String as PropType<ButtonNativeType>,
      validator: (val: string) => ['button', 'submit', 'reset'].includes(val),
    },
    isDisabled: Boolean,
    isFullWidth: Boolean,
    isLoading: Boolean,
    size: {
      type: String as PropType<ComponentSize>,
      default: 'medium',
      validator: (val: string) => ['small', 'medium', 'large'].includes(val),
    },
  },
  setup(props, ctx) {
    const isMedium = props.size === 'medium'
    return { isMedium }
  },
})
</script>
