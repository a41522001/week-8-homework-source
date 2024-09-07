<template>
  <div class="py-4 px-6">
    <div class="d-flex align-items-center pb-4">
      <div class="avatar-md me-2">
        <img class="w-100 h-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-1.png?raw=true" alt="avatar">
      </div>
      <div>
        <p class="text-black mb-0">Jessica</p>
        <p class="text-neutral-60 mb-0 fs-8">學習初心者</p>
      </div>
    </div>
    <ul class="mb-0 ps-0 py-4 border-top border-bottom border-neutral-40">
      <li class="dropdown-item d-flex align-items-center px-6 py-3">
        <span class="material-symbols-outlined text-neutral-60">account_circle</span>
        <p class="mb-0 ms-2">個人檔案</p>
      </li>
      <li class="dropdown-item d-flex align-items-center px-6 py-3">
        <span class="material-symbols-outlined fill-icon text-neutral-60">bookmark</span>
        <p class="mb-0 ms-2">我的收藏</p>
      </li>
      <li class="dropdown-item d-flex align-items-center px-6 py-3">
        <span class="material-symbols-outlined text-neutral-60">settings</span>
        <p class="mb-0 ms-2">帳號設定</p>
      </li>
    </ul>
    <ul class="mb-0 ps-0 py-4 border-bottom border-neutral-40">
      <li class="dropdown-item d-flex align-items-center px-6 py-3">
        <span class="material-symbols-outlined text-neutral-60">list_alt</span>
        <p class="mb-0 ms-2">訂單紀錄</p>
      </li>
      <li class="dropdown-item d-flex align-items-center px-6 py-3">
        <span class="material-symbols-outlined fill-icon text-neutral-60">edit</span>
        <p class="mb-0 ms-2">作業成果</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .avatar-md {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
</style>
