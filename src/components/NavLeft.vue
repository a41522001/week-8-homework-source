<template>
  <div class="py-4 px-6">
    <div class="d-flex position-relative pt-3 mb-5" @click="emits('updateAllAppToggle')">
      <span class="material-symbols-outlined position-absolute ms-6">arrow_back_ios</span>
      <span class="d-block text-center flex-grow-1">所有程式</span>
    </div>
    <ul class="list-unstyled">
      <li class="py-3 px-6">
        <p class="mb-0">程式入門</p>
      </li>
      <li class="py-3 px-6">
        <p class="mb-0">網頁前端</p>
      </li>
      <li class="py-3 px-6">
        <p class="mb-0">網頁後端</p>
      </li>
      <li class="py-3 px-6">
        <p class="mb-0">網站架設</p>
      </li>
      <li class="py-3 px-6">
        <p class="mb-0">資訊安全</p>
      </li>
      <li class="py-3 px-6">
        <p class="mb-0">程式語言</p>
      </li>
      <li class="py-3 px-6">
        <p class="mb-0">遊戲開發</p>
      </li>
      <li class="py-3 px-6">
        <p class="mb-0">資料科學</p>
      </li>
      <li class="py-3 px-6">
        <p class="mb-0">人工智慧</p>
      </li>
      <li class="py-3 px-6">
        <p class="mb-0">量化分析</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const emits = defineEmits(['updateAllAppToggle'])
</script>

<style lang="scss" scoped>

</style>
