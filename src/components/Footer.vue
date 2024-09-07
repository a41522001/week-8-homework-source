<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-8 mb-md-4 d-flex justify-content-between flex-column flex-md-row">
          <img class="footer-logo mb-8 mb-md-0" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/logo-white.png?raw=true" alt="logo">
          <ul class="m-0 d-flex list-unstyled flex-column flex-md-row">
            <li class="me-7 mb-6 mb-md-0"><a class="link-light text-decoration-none fs-8" href="#">常見問題</a></li>
            <li class="me-7 mb-6 mb-md-0"><a class="link-light text-decoration-none fs-8" href="#">關於我們</a></li>
            <li class="me-7 mb-6 mb-md-0"><a class="link-light text-decoration-none fs-8" href="#">隱私權政策</a></li>
            <li><a class="link-light text-decoration-none fs-8"href="#">使用者條款</a></li>
          </ul>
        </div>
        <div class="col-12 d-flex justify-content-between align-items-md-end flex-column-reverse flex-md-row">
          <p class="footer-text mb-0 fs-8">copyright © 2024 LEARNING 課程網站 All Rights Reserved.</p>
          <ul class="d-flex list-unstyled m-md-0 p-0 mb-7">
            <li class="me-4"><img src="../../public/btn_line.svg" alt="line"></li>
            <li class="me-4"><img src="../../public/btn_yt.svg" alt="youtube"></li>
            <li><img src="../../public/btn_fb.svg" alt="facebook"></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .footer {
    padding: 100px 0;
    background-color: #282828;
    border-radius: 80px 80px 0 0;
  }
  .footer-logo {
    width: 200px;
    height: 32px;
  }
  .footer-text {
    color: #d4d4d4;
  }
  @media (max-width: 767px) {
    .footer {
      padding: 48px 12px;
      border-radius: 48px 48px 0 0;
    }
  }
</style>
