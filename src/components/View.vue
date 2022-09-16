<script setup lang="ts">
defineProps<{
  element: string;
  ariaLabel?: string;
  isDisabled?: boolean;
}>();
</script>

<template>
  
  <component 
    :is="element" 
    :aria-label="ariaLabel" 
    :disabled="isDisabled"
  >
    <slot></slot>
    <h3>Obv wrong</h3>
  </component>
</template>