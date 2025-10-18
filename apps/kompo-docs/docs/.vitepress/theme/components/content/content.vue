<template>
  <div v-html="rendered" />
</template>

<script setup>
import { computed } from "vue";
import { marked } from "marked";

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});

const rendered = computed(() => marked(props.content));
</script>
