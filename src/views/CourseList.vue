<template>
  <Nav></Nav>
  <div class="banner bg-neutral-10 py-8 py-md-12 position-relative z-2 overflow-hidden">
    <div class="container position-relative z-2">
      <nav class="mb-8" aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">所有課程</li>
          <li class="breadcrumb-item">程式課程</li>
        </ol>
      </nav>
      <h2 class="fw-bold text-black fs-1 mb-8">程式課程</h2>
      <div class="swiper banner-swiper">
        <ul class="swiper-wrapper m-0 p-0">
          <li class="swiper-slide bg-primary-100 rounded-4"><p class="mb-0 text-white px-4 py-3">所有程式</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">網頁開發</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">資料科學</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">行動版開發</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">程式語言</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">遊戲開發</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">資料庫設計與開發</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">軟體測試</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">軟體開發工具</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">無程式碼開發</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">網頁前端</p></li>
          <li class="swiper-slide border border-neutral-40 rounded-4"><p class="mb-0 px-4 py-3">網頁後端</p></li>
        </ul>
      </div>
      <img class="banner-decoration3" src="../../public/Vector.svg" alt="decoration">
      <img class="banner-decoration4" src="../../public/Vector.svg" alt="decoration">
    </div>
    <img class="banner-decoration1" src="../../public/Deco1.svg" alt="decoration">
    <img class="banner-decoration2" src="../../public/Deco1.svg" alt="decoration">
    
  </div>
  <main class="main pt-8 pb-md-8">
    <div class="container">
      <ul class="border-bottom border-neutral-40 d-flex p-0 list-unstyled mb-8">
        <li class="main-list py-4 me-7"><p class="mb-0 fw-bold text-primary-100">最熱門</p></li>
        <li class="py-4 me-7"><p class="mb-0 fw-bold">最新課程</p></li>
        <li class="py-4 me-7"><p class="mb-0 fw-bold">話題最高</p></li>
      </ul>
      <div class="main-swiper swiper">
        <div class="swiper-wrapper">
          <div v-for="item in courseMain" class="swiper-slide d-flex flex-column h-100">
            <div class="swiper-item d-flex flex-column h-100">
              <div class="swiper-card d-flex flex-column h-100 flex-grow-1 rounded-4 position-relative">
                <img class="w-100 img-fluid rounded-top-4" :src="item.image" alt="code-course">
                <div class="p-4 border-bottom flex-grow-1 d-flex flex-column">
                  <h3 class="mb-3 fs-6 fw-bold text-black">{{ item.title }}</h3>
                  <div class="d-flex align-items-center mt-auto">
                    <div class="avatar">
                      <img class="w-100 h-100 object-fit-cover" :src="item.avatar" alt="avatar">
                    </div>
                    <p class="mb-0 ms-2">{{ item.name }}</p>
                    <div class="ms-auto text-end">
                      <p class="mb-0 text-primary-100 fs-6 fw-bold">{{ item.offPrice }}</p>
                      <p class="mb-0 fs-8 text-decoration-line-through" style="color: #808080;">{{ item.originalPrice }}</p>
                    </div>
                  </div>
                </div>
                <div class="p-4 d-flex align-items-center justify-content-between">
                  <div>
                    <span class="d-inline-block bg-neutral-40 py-1 px-3 mb-1 rounded-pill fs-8">{{ item.tag }}</span>
                    <span class="fs-8 d-block">{{ item.studentCount }}</span>
                  </div>
                  <div>
                    <i class="bi bi-star-fill"></i>
                    <span class="mx-1 fs-8 fw-bold" style="color: #180000">{{ item.starCount }}</span>
                    <span class="fs-8 fw-semibold" style="color: #808080">{{ item.count }}</span>
                  </div>
                </div>
                <span v-if="item.offText" class="off-text">{{ item.offText }}</span>
              </div>
            </div>       
          </div>
        </div>
      </div>
    </div>
  </main>
  <section class="theme-section pb-12">
    <div class="container pb-md-9">
      <h2 class="mb-8 fw-bold fs-3 text-black">熱門主題</h2>
      <div class="swiper theme-swiper">
        <ul class="swiper-wrapper m-0 p-0 list-unstyled">
          <li v-for="list in themeList" class="swiper-slide border border-neutral-40 bg-white rounded-4">
            <div class="py-6 text-center">
              <h3 class="mb-2 fs-6 text-black fw-bold">{{ list.title }}</h3>
              <p class="mb-0">{{ list.count }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="py-8 py-md-12 bg-neutral-10">
    <div class="container">
      <h2 class="fw-bold mb-8 text-black fs-2 text-center">程式頂尖講師</h2>
      <div class="row">
        <div class="col-md-6 col-xl-3 mb-6">
          <div class="rounded-5 shadow">
            <img class="w-100 img-fluid object-fit-cover rounded-top-5" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/teacher-4.png?raw=true" alt="teacher">
            <div class="p-4 border-bottom text-center">
              <h3 class="text-black mb-1 fw-bold">Devon Lane</h3>
              <p class="mb-0 fs-8">自由接案工程師</p>
            </div>
            <div class="p-4 d-flex justify-content-between">
              <span class="fs-8">3,394 個學生</span>
              <div>
                <i class="bi bi-star-fill"></i>
                <span class="mx-1 fs-8 fw-bold" style="color: #180000">4.0</span>
                <span class="fs-8 fw-semibold" style="color: #808080">(333)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3 mb-6">
          <div class="rounded-5 shadow">
            <img class="w-100 img-fluid object-fit-cover rounded-top-5" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/teacher-5.png?raw=true" alt="teacher">
            <div class="p-4 border-bottom text-center">
              <h3 class="text-black mb-1 fw-bold">Jenny Cooper</h3>
              <p class="mb-0 fs-8">資深全端工程師</p>
            </div>
            <div class="p-4 d-flex justify-content-between">
              <span class="fs-8">3,394 個學生</span>
              <div>
                <i class="bi bi-star-fill"></i>
                <span class="mx-1 fs-8 fw-bold" style="color: #180000">4.0</span>
                <span class="fs-8 fw-semibold" style="color: #808080">(333)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3 mb-6">
          <div class="rounded-5 shadow">
            <img class="w-100 img-fluid object-fit-cover rounded-top-5" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/teacher-6.png?raw=true" alt="teacher">
            <div class="p-4 border-bottom text-center">
              <h3 class="text-black mb-1 fw-bold">Johnny Khan</h3>
              <p class="mb-0 fs-8">矽谷軟體工程師</p>
            </div>
            <div class="p-4 d-flex justify-content-between">
              <span class="fs-8">3,394 個學生</span>
              <div>
                <i class="bi bi-star-fill"></i>
                <span class="mx-1 fs-8 fw-bold" style="color: #180000">4.0</span>
                <span class="fs-8 fw-semibold" style="color: #808080">(333)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3 mb-6">
          <div class="rounded-5 shadow">
            <img class="w-100 img-fluid object-fit-cover rounded-top-5" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/teacher-7.png?raw=true" alt="teacher">
            <div class="p-4 border-bottom text-center">
              <h3 class="text-black mb-1 fw-bold">Annie Lin</h3>
              <p class="mb-0 fs-8">資深前端工程師</p>
            </div>
            <div class="p-4 d-flex justify-content-between">
              <span class="fs-8">3,394 個學生</span>
              <div>
                <i class="bi bi-star-fill"></i>
                <span class="mx-1 fs-8 fw-bold" style="color: #180000">4.0</span>
                <span class="fs-8 fw-semibold" style="color: #808080">(333)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-8 pt-md-12 pb-8">
    <div class="container">
      <div class="d-flex justify-content-between mb-8 align-items-center flex-column flex-lg-row">
        <h2 class="fs-3 fw-bold mb-3 m-lg-0 ">
          <span class="text-black">查看 520 筆與「</span>
          <span class="text-primary-100">程式開發</span>
          <span class="text-black">」的相關課程</span>
        </h2>
        <ul class="m-0 p-0 list-unstyled d-flex">
          <li class="px-4 border-end"><p class="mb-0">最新課程</p></li>
          <li class="px-4 border-end"><p class="mb-0 text-primary-100">最高人氣</p></li>
          <li class="px-4 "><p class="mb-0">最低價格</p></li>
        </ul>
      </div>
      <div class="row">
        <div v-for="item in courseList" class="col-md-6 col-lg-4 col-xl-3 mb-6">
          <div class="d-flex flex-column h-100 rounded-4 shadow position-relative">
            <img class="w-100 img-fluid rounded-top-4" :src="item.image" alt="code-course">
            <div class="p-4 border-bottom flex-grow-1 d-flex flex-column">
              <h3 class="mb-3 fs-6 fw-bold text-black">{{ item.title }}</h3>
              <div class="d-flex align-items-center mt-auto">
                <div class="avatar">
                  <img class="w-100 h-100 object-fit-cover" :src="item.avatar" alt="avatar">
                </div>
                <p class="mb-0 ms-2">{{ item.name }}</p>
                <div class="ms-auto text-end">
                  <p class="mb-0 text-primary-100 fs-6 fw-bold">{{ item.offPrice }}</p>
                  <p class="mb-0 fs-8 text-decoration-line-through" style="color: #808080;">{{ item.originalPrice }}</p>
                </div>
              </div>
            </div>
            <div class="p-4 d-flex align-items-center justify-content-between">
              <div>
                <span class="d-inline-block bg-neutral-40 py-1 px-3 mb-1 rounded-pill fs-8">{{ item.tag }}</span>
                <span class="fs-8 d-block">{{ item.studentCount }}</span>
              </div>
              <div>
                <i class="bi bi-star-fill"></i>
                <span class="mx-1 fs-8 fw-bold" style="color: #180000">{{ item.starCount }}</span>
                <span class="fs-8 fw-semibold" style="color: #808080">{{ item.count }}</span>
              </div>
            </div>
            <span v-if="item.offText" class="off-text">{{ item.offText }}</span>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center justify-content-md-end mb-0">
          <li class="page-item">
            <a class="page-link disabled" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link disabled" href="#"><</a></li>
          <li class="page-item"><a class="page-link bg-primary-100 text-white" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">...</a></li>
          <li class="page-item"><a class="page-link" href="#">10</a></li>
          <li class="page-item"><a class="page-link" href="#">></a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <section class="course-list py-12 py-md-14 d-flex align-items-center justify-content-center">
    <div class="course-list-container">
      <div class="container">
        <div class="row flex-column-reverse flex-lg-row align-items-center">
          <div class="col-lg-6 swiper course-list-swiper">
            <ul class="swiper-wrapper ps-0 mb-0">
              <li class="swiper-slide">
                <div class="course-list-item p-5 d-flex align-items-center bg-white">
                  <div class="course-list-icon-container me-6" style="background-color: #FF994F;">
                    <img src="../../public/MegaphoneSimple.svg" alt="icon">
                  </div>
                  <div>
                    <p class=" course-list-text mb-2">網路行銷</p>
                    <span class="course-list-span mb-0 fs-8">342 門課程</span>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="course-list-item p-5 d-flex align-items-center bg-white">
                  <div class="course-list-icon-container me-6" style="background-color: #5E5E5E;">
                    <img src="../../public/Camera.svg" alt="icon">
                  </div>
                  <div>
                    <p class=" course-list-text mb-2">拍攝剪輯</p>
                    <span class="course-list-span mb-0 fs-8">535 門課程</span>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="course-list-item p-5 d-flex align-items-center bg-white">
                  <div class="course-list-icon-container me-6" style="background-color: #FF9BAD;">
                    <img src="../../public/ChartBarHorizontal.svg" alt="icon">
                  </div>
                  <div>
                    <p class=" course-list-text mb-2">自我成長</p>
                    <span class="course-list-span mb-0 fs-8">490 門課程</span>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="course-list-item p-5 d-flex align-items-center bg-white">
                  <div class="course-list-icon-container me-6" style="background-color: #564FFD;">
                    <img src="../../public/PenNib.svg" alt="icon">
                  </div>
                  <div>
                    <p class=" course-list-text mb-2">藝術設計</p>
                    <span class="course-list-span mb-0 fs-8">230 門課程</span>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="course-list-item p-5 d-flex align-items-center bg-white">
                  <div class="course-list-icon-container me-6" style="background-color: #54DFF2;">
                    <img src="../../public/BugDroid.svg" alt="icon">
                  </div>
                  <div>
                    <p class=" course-list-text mb-2">數據分析</p>
                    <span class="course-list-span mb-0 fs-8">395 門課程</span>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="course-list-item p-5 d-flex align-items-center bg-white">
                  <div class="course-list-icon-container me-6" style="background-color: #52E9BC;">
                    <img src="../../public/CreditCard.svg" alt="icon">
                  </div>
                  <div>
                    <p class=" course-list-text mb-2">投資理財</p>
                    <span class="course-list-span mb-0 fs-8">486 門課程</span>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="course-list-item p-5 d-flex align-items-center bg-white">
                  <div class="course-list-icon-container me-6" style="background-color: #CF93FF;">
                    <img src="../../public/Headphones.svg" alt="icon">
                  </div>
                  <div>
                    <p class=" course-list-text mb-2">音樂創作</p>
                    <span class="course-list-span mb-0 fs-8">283 門課程</span>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="course-list-item p-5 d-flex align-items-center bg-white">
                  <div class="course-list-icon-container me-6 d-flex align-items-center justify-content-center" style="background-color: #0068FF;">
                    <img src="../../public/arrow btn.svg" alt="icon">
                  </div>
                  <div>
                    <p class=" course-list-text mb-2">探索更多</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-5 mb-8 mb-lg-0">
            <div class="d-flex align-items-start">
              <img class="me-2" src="../../public/Deco.svg" alt="decoration">
              <div>
                <h3 class="mb-2 text-white fs-1 fw-bold">想學什麼嗎？</h3>
                <h3 class="mb-2 text-white fs-1 fw-bold">一探究竟</h3>
                <img class="img-fluid" src="../../public/Vector 9.svg" alt="decoration">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
<script setup lang="ts">
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";
  import { ref, onMounted } from "vue";
  import Swiper from 'swiper';
  import { Autoplay, Grid } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/bundle';
  onMounted(() => {
    const bannerSwiper = new Swiper('.banner-swiper', {
      slidesPerView: 'auto',
      allowTouchMove: true,
      spaceBetween: 8,
    })
    const mainSwiper = new Swiper('.main-swiper', {
      breakpoints: {
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
        },
        767: {
          slidesPerView: 2,
          allowTouchMove: true,
          spaceBetween: 12,
        },
        1199: {
          slidesPerView: 4,
          allowTouchMove: false,
          spaceBetween: 12,
        }
      }
    })
    const themeSwiper = new Swiper('.theme-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 24,
    })
    const courseListSwiper = new Swiper('.course-list-swiper', {     
      modules: [ Grid ],
      breakpoints: {
        320: {
          slidesPerView: 1,
          grid: {
            fill: 'row',
            rows: 2,
          },
          allowTouchMove: true
        },
        767: {
          slidesPerView: 2,
          allowTouchMove: false,
          grid: {
            fill: 'row',
            rows: 4,
          },
        }
      }
    })
  })
  const courseMain = [
  {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
      title: "小白也會！從零開始學習 Python 程式設計",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true",
      title: "全面掌握 JavaScript 開發技術",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true",
      title: "HTML & CSS 網頁設計基礎教程",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true",
      title: "更進一步！深入學習 Node.js 與後端開發",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    }
  ]
  const themeList = [
    {
      title: "HTML 5",
      count: "2,103個課程",
    },
    {
      title: "Javascript",
      count: "891 個課程"
    },
    {
      title: "Python",
      count: "1,384 個課程"
    },
    {
      title: "CSS 3",
      count: "240 個課程"
    },
    {
      title: "HTML 5",
      count: "2,103 個課程"
    },
    {
      title: "HTML 5",
      count: "2,103 個課程"
    }
  ]
  const courseList = [
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
      title: "小白也會！從零開始學習 Python 程式設計",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true",
      title: "全面掌握 JavaScript 開發技術",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true",
      title: "HTML & CSS 網頁設計基礎教程",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true",
      title: "更進一步！深入學習 Node.js 與後端開發",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
      title: "小白也會！從零開始學習 Python 程式設計",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true",
      title: "全面掌握 JavaScript 開發技術",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true",
      title: "HTML & CSS 網頁設計基礎教程",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true",
      title: "更進一步！深入學習 Node.js 與後端開發",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
      title: "小白也會！從零開始學習 Python 程式設計",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true",
      title: "全面掌握 JavaScript 開發技術",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true",
      title: "HTML & CSS 網頁設計基礎教程",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true",
      title: "更進一步！深入學習 Node.js 與後端開發",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
      title: "小白也會！從零開始學習 Python 程式設計",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true",
      title: "全面掌握 JavaScript 開發技術",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true",
      title: "HTML & CSS 網頁設計基礎教程",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true",
      title: "更進一步！深入學習 Node.js 與後端開發",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
      title: "小白也會！從零開始學習 Python 程式設計",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true",
      title: "全面掌握 JavaScript 開發技術",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true",
      title: "HTML & CSS 網頁設計基礎教程",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true",
      title: "更進一步！深入學習 Node.js 與後端開發",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
      title: "小白也會！從零開始學習 Python 程式設計",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true",
      title: "全面掌握 JavaScript 開發技術",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)",
      offText: "限時 8 折 🔥"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true",
      title: "HTML & CSS 網頁設計基礎教程",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
    {
      image: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true",
      title: "更進一步！深入學習 Node.js 與後端開發",
      avatar: "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
      name: "Kelly Hsu",
      offPrice: "NT$2,480",
      originalPrice: "NT$ 3,200",
      tag: "程式開發",
      studentCount: "已有 420 位同學加入",
      starCount: "4.0",
      count: "(333)"
    },
  ]
</script>

<style lang="scss" scoped>
  .banner-swiper {
    .swiper-wrapper {
      .swiper-slide {
        width: auto;
      }
    }
  }
  .banner-decoration1 {
    position: absolute;
    z-index: -1;
    bottom: 0;
    transform: translate(-10%, 15%);
  }
  .banner-decoration2 {
    position: absolute;
    z-index: -1;
    right: 0;
    top: 100%;
    transform: translate(-10%, -50%);
  }
  .banner-decoration3 {
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
    transform: translateX(-100%);
  }
  .banner-decoration4 {
    position: absolute;
    z-index: -1;
    bottom: 100%;
    right: 0;
  }
  .main-list {
    position: relative;
    &::after {
      content: "";
      height: 4px;
      width: 32px;
      background-color: #0068FF;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 10px;
    }
  }
  .main-swiper {
    padding: 40px 12px !important;
    margin: 0 -12px;
    .swiper-wrapper {
      display: flex;
      align-items: stretch;
      .swiper-slide {
        display: flex;
        height: 100%;
        border-radius: 12px;
        min-height: 450px;
        .swiper-item {
          padding: 0 12px;
          height: 100%;
          flex-grow: 1;
          .swiper-card {
            flex-grow: 1;
            position: relative;
            background-color: #fff;
            &::after {
              content: '';
              position: absolute;
              box-shadow: 5px 10px 30px -2px rgba(0, 0, 0, .12);
              backdrop-filter: blur(10px);
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              z-index: -1;
              border-radius: 50px;
            }
          }
        }
      }
    }
  }
  .theme-swiper {
    .swiper-wrapper {
      .swiper-slide {
        width: 196px;
      }
    }
  }
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .bi-star-fill {
    color: #F6BD2B;
    font-size: 12px;
  }
  .shadow {
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, .12);
  }
  .off-text {
    position: absolute;
    top: 16px;
    left: 16px;
    background-color: #FFE0D7;
    color: #FF3A55;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 100px;
  }
  .course-list-container {
    max-width: 1656px;
    width: 100%;
    background-color: #0068FF;
    border-radius: 80px;
    padding: 80px 0;
  }
  .course-list-swiper {
    .swiper-wrapper {
      margin-top: -12px;
      margin-bottom: -12px;
    }
    .swiper-slide {
      padding: 0 12px;
      margin: 12px 0;
    }
  }
  .course-list-item {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
  .course-list-icon-container {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    padding: 16px;
  }
  .course-list-text {
    color: #1D2026;
  }
  .course-list-span {
    color: #6E7485;
  }
  @media (max-width: 1399px) {
    .main-swiper {
      .swiper-wrapper {
        .swiper-slide {
          min-height: 420px;
        }
      }
    }
  }
  @media (max-width: 1199px) {
    .banner-decoration1 {
      width: 240px;
      height: 240px;
      top: 50%;
      bottom: 0;
      transform: translate(0%, -50%);
    }
    .banner-decoration2 {
      width: 240px;
      height: 240px;
      top: 50%;
      transform: translate(30%, -50%);
    }
    .main-swiper {
      overflow: hidden;
    }
    .main-swiper {
      .swiper-wrapper {
        .swiper-slide {
          min-height: 450px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .banner-decoration1 {
      display: none;
    }
    .banner-decoration3 {
      transform: translateX(0);
    }
    .banner-decoration4 {
      display: none;
    }
  }
</style>