<template>
  <span :class="['tag', `tag-${tagStyle}`, 'mx-1']">
    <slot></slot>
  </span>
</template>

<script>
const tagStyles = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
]
export default {
  props: ['tag', 'slug'],
  computed: {
    tagStyle() {
      return tagStyles[Math.floor(Math.random() * tagStyles.length)]
    }
  }
};
</script>
