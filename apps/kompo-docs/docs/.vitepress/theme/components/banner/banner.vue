<template>
  <div class="base">
    <div class="puce" />
    <p class="text">New Components: Filed, Input Group, item and more</p>
  </div>
</template>

<style lang="css" scoped>
.base {
  display: flex;
  gap: 0.25rem;
  background-color: oklch(97% 0 0);
  padding: 0 0.5rem;
  align-items: center;
  border-radius: 9999px;
  width: max-content;
  margin: 1rem auto;
}

.puce {
  border-radius: 9999px;
  background-color: #3b82f6;
  width: 0.5rem;
  height: 0.5rem;
}

.text {
  color: black;
  font-size: 0.75rem;
  margin: 0;
  font-weight: 500;
}
</style>
