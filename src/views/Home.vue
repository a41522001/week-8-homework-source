<template>
  <Nav />
  <div class="banner swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide banner-item">
        <img class="banner-img" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/hero-2.png?raw=true" alt="banner">
        <div class="banner-tag">
          <p class="mb-0">探索感興趣的課程，今天立即上課</p>
          <span class="material-symbols-outlined fs-7 fs-md-2 ms-4">arrow_forward</span>
        </div>
        <div class="piano-tag">
          <p class="mb-0 me-2 text-primary-100 fs-8 py-2 px-3 bg-primary-10 rounded-pill text-nowrap">熱銷課程 🔥</p>
          <p class="mb-0 text-black fs-8 fs-md-6 fw-bold">給成人的鋼琴入門課，一小時教你彈奏上手！</p>
        </div>
      </div>
      <div class="swiper-slide banner-item">
        <img class="banner-img" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/hero-3.png?raw=true" alt="banner">
        <div class="banner-tag">
          <p class="mb-0">探索感興趣的課程，今天立即上課</p>
          <span class="material-symbols-outlined fs-7 fs-md-2 ms-4">arrow_forward</span>
        </div>
      </div>
      <div class="swiper-slide banner-item">
        <img class="banner-img" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/hero-4.png?raw=true" alt="banner">
        <div class="banner-tag">
          <p class="mb-0">探索感興趣的課程，今天立即上課</p>
          <span class="material-symbols-outlined fs-7 fs-md-2 ms-4">arrow_forward</span>
        </div>
      </div>
      <div class="swiper-slide banner-item">
        <img class="banner-img" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/hero-5.png?raw=true" alt="banner">
        <div class="banner-tag">
          <p class="mb-0">探索感興趣的課程，今天立即上課</p>
          <span class="material-symbols-outlined fs-7 fs-md-2 ms-4">arrow_forward</span>
        </div>
      </div>
      <div class="swiper-slide banner-item">
        <img class="banner-img" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/hero-1.png?raw=true" alt="banner">
        <div class="banner-tag">
          <p class="mb-0">探索感興趣的課程，今天立即上課</p>
          <span class="material-symbols-outlined fs-7 fs-md-2 ms-4">arrow_forward</span>
        </div>
      </div>
    </div>
  </div>
  <div class="hot-course py-12 py-md-14 position-relative">
    <img class="flower-decoration" src="../../public/Deco1.svg" alt="decoration">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-4">
          <h2 class="mb-2 text-black fs-1">火熱募資課程</h2>
          <p class="mb-8">現在購買最優惠</p>
          <div class="swiper hot-course-list mb-6">
            <ul class="swiper-wrapper list-unstyled d-flex flex-lg-wrap">
              <li class="swiper-slide hot-course-tag bg-primary-100 py-3 px-4 me-3 mt-3 text-white rounded-4 border border-neutral-40"><p class="mb-0">全部</p></li>
              <li class="swiper-slide hot-course-tag py-3 px-4 me-3 mt-3 rounded-4 border border-neutral-40"><p class="mb-0">🍽️ 烹飪料理</p></li>
              <li class="swiper-slide hot-course-tag py-3 px-4 me-3 mt-3 rounded-4 border border-neutral-40"><p class="mb-0">📊 數據分析</p></li>
              <li class="swiper-slide hot-course-tag py-3 px-4 me-3 mt-3 rounded-4 border border-neutral-40"><p class="mb-0">🎼 音樂製作</p></li>
              <li class="swiper-slide hot-course-tag py-3 px-4 me-3 mt-3 rounded-4 border border-neutral-40"><p class="mb-0">📝 創意寫作</p></li>
              <li class="swiper-slide hot-course-tag py-3 px-4 me-3 mt-3 rounded-4 border border-neutral-40"><p class="mb-0">💬 語言學習</p></li>
              <li class="swiper-slide hot-course-tag py-3 px-4 me-3 mt-3 rounded-4 border border-neutral-40"><p class="mb-0">🖌️ 藝術創作</p></li>
            </ul>
          </div> 
          <button class="btn btn-primary-100 py-4 px-7 rounded-4 d-none d-xl-block" @click="changePageCourseList">更多募資課程</button>        
        </div>
        <!-- 熱門課程swiper -->
        <div class="col-xl-8">
          <div class="swiper hot-course-swiper">
            <div class="swiper-wrapper flex-nowrap flex-md-wrap">
              <div class="swiper-slide col-sm-6 mb-6 px-md-3">
                <div class="rounded-4 shadow position-relative d-flex flex-column h-100">
                  <img class="w-100 img-fluid rounded-top-4 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-4.png?raw=true" alt="hot-course">
                  <div class="py-6 px-4 d-flex flex-column">
                    <h3 class="mb-2 text-black fs-6 fw-bold">創意寫作工坊：從靈感到出版的全過程</h3>
                    <div class="d-flex align-items-center mb-6 mt-auto">
                      <div class="avatar-md me-2">
                        <img class="w-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true" alt="avatar">
                      </div>
                      <p class="mb-0">Kelly Hsu</p>
                    </div>
                    <div>
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="text-primary-100 fw-bold">募資進度81%</span>
                        <span class="fs-8">已有521位同學加入</span>
                      </div>
                      <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 81%"></div>
                      </div>
                      <span class="text-black fs-6 fw-bold me-2">NT$ 2,480</span>
                      <span class="fs-8" style="color: #808080; text-decoration: line-through;">NT$ 3,200</span>
                    </div>
                  </div>
                  <div class="hot-course-sale-tag">優惠倒數 10 天</div>
                </div>
              </div>
              <div class="swiper-slide col-sm-6 mb-6 px-md-3">
                <div class="rounded-4 shadow position-relative d-flex flex-column h-100">
                  <img class="w-100 img-fluid rounded-top-4 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-1.png?raw=true" alt="hot-course">
                  <div class="py-6 px-4 d-flex flex-column">
                    <h3 class="mb-2 text-black fs-6 fw-bold">健康廚房：營養均衡的素食料理指南</h3>
                    <div class="d-flex align-items-center mb-6 mt-auto">
                      <div class="avatar-md me-2">
                        <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-4.png?raw=true" alt="avatar">
                      </div>
                      <p class="mb-0">希姐帶你吃</p>
                    </div>
                    <div>
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="text-primary-100 fw-bold">募資進度281%</span>
                        <span class="fs-8">已有1,397位同學加入</span>
                      </div>
                      <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 100%"></div>
                      </div>
                      <span class="text-black fs-6 fw-bold me-2">NT$1,680</span>
                      <span class="fs-8" style="color: #808080; text-decoration: line-through;">NT$ 2,080</span>
                    </div>     
                  </div>
                  <div class="hot-course-sale-tag">優惠倒數 17 天</div>
                </div>
              </div>
              <div class="swiper-slide col-sm-6 px-md-3 ">
                <div class="rounded-4 shadow position-relative d-flex flex-column h-100">
                  <img class="w-100 img-fluid rounded-top-4 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-2.png?raw=true" alt="hot-course">
                  <div class="py-6 px-4 d-flex flex-column">
                    <h3 class="mb-2 text-black fs-6 fw-bold">音樂製作入門：從零開始創作你的音樂</h3>
                    <div class="d-flex align-items-center mb-6 mt-auto">
                      <div class="avatar-md me-2">
                        <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-3.png?raw=true" alt="avatar">
                      </div>
                      <p class="mb-0">K.Dee</p>
                    </div>
                    <div>
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="text-primary-100 fw-bold">募資進度76%</span>
                        <span class="fs-8">已有420位同學加入</span>
                      </div>
                      <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 76%"></div>
                      </div>
                      <span class="text-black fs-6 fw-bold me-2">NT$2,680</span>
                      <span class="fs-8" style="color: #808080; text-decoration: line-through;">NT$ 3,200</span>
                    </div>                
                  </div>
                  <div class="hot-course-sale-tag">優惠倒數 9 天</div>
                </div>
              </div>
              <div class="swiper-slide col-sm-6 px-md-3 ">
                <div class="rounded-4 shadow position-relative d-flex flex-column h-100">
                  <img class="w-100 img-fluid rounded-top-4 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-3.png?raw=true" alt="hot-course">
                  <div class="py-6 px-4 d-flex flex-column">
                    <h3 class="mb-2 text-black fs-6 fw-bold">掌握商業攝影：打造你的專業攝影事業</h3>
                    <div class="d-flex align-items-center mb-6 mt-auto">
                      <div class="avatar-md me-2">
                        <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-4.png?raw=true" alt="avatar">
                      </div>
                      <p class="mb-0">Mikeeee</p>
                    </div>
                    <div>
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="text-primary-100 fw-bold">募資進度98%</span>
                        <span class="fs-8">已有290位同學加入</span>
                      </div>
                      <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 98%"></div>
                      </div>
                      <span class="text-black fs-6 fw-bold me-2">NT$1,980</span>
                      <span class="fs-8" style="color: #808080; text-decoration: line-through;">NT$ 3,200</span>
                    </div>
                  </div>
                  <div class="hot-course-sale-tag">優惠倒數 1 天</div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-primary-100 py-4 px-7 rounded-4 d-block d-xl-none mt-10 w-100 w-sm-auto" @click="changePageCourseList">更多募資課程</button>   
        </div>
      </div>
    </div>
  </div>

  <section class="course py-12 py-md-14 bg-gradient">    
    <h2 class="mb-2 fw-bold fs-1 text-black px-3 text-sm-center">看看大家都買了什麼</h2>
    <p class="fs-6 mb-6 mb-sm-8 px-3 text-sm-center">熱銷課程一次看！✨</p>
    <div class="container swiper course-swiper py-5">
      <div class="swiper-wrapper flex-nowrap">
        <div class="course-card col-3 swiper-slide">
          <div class="course-card-item shadow rounded-4 position-relative">
            <img class="w-100 img-fluid object-fit-cover rounded-top-4" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-4.png?raw=true" alt="course">
            <div class="p-4">
              <h3 class="course-card-title fs-6 fw-bold text-black mb-4">創意寫作工坊：從靈感到出版的全過程</h3>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="avatar-sm">
                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true" alt="avatar">
                  </div>
                  <p class="mb-0 ms-2">Kelly Hsu</p> 
                </div>
                <div>
                  <p class="text-primary-100 fs-6 fw-bold mb-0">NT$ 2,480</p>
                  <p class="mb-0 fs-8" style="color: #808080; text-decoration: line-through;">NT$ 3,200</p>
                </div>
              </div>
            </div>
            <div class="p-4 border-top border-neutral-40 d-flex align-items-center justify-content-between">
              <div>
                <span class="fs-8 bg-neutral-40 py-1 px-3 rounded-pill mb-1 d-inline-block">中文創作</span>
                <p class="mb-0 fs-8">已有 420 位同學加入</p>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-star-fill"></i>
                <span class="fs-8 mx-1" style="#180000">4.0</span>
                <span class="fs-8" style="#808080">(333)</span>
              </div>
            </div>
            <p class="course-card-tag mb-0">限時 8 折 🔥</p>
          </div>
        </div>
        <div class="course-card col-3 swiper-slide">
          <div class="course-card-item shadow rounded-4 position-relative">
            <img class="w-100 img-fluid object-fit-cover rounded-top-4" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true" alt="course">
            <div class="p-4">
              <h3 class="course-card-title fs-6 fw-bold text-black mb-4">小白也會！從零開始學習 Python 程式設計</h3>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="avatar-sm">
                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true" alt="avatar">
                  </div>
                  <p class="mb-0 ms-2">Kelly Hsu</p> 
                </div>
                <div>
                  <p class="text-primary-100 fs-6 fw-bold mb-0">NT$ 2,480</p>
                  <p class="mb-0 fs-8" style="color: #808080; text-decoration: line-through;">NT$ 3,200</p>
                </div>
              </div>
            </div>
            <div class="p-4 border-top border-neutral-40 d-flex align-items-center justify-content-between">
              <div>
                <span class="fs-8 bg-neutral-40 py-1 px-3 rounded-pill mb-1 d-inline-block">中文創作</span>
                <p class="mb-0 fs-8">已有 420 位同學加入</p>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-star-fill"></i>
                <span class="fs-8 mx-1" style="#180000">4.0</span>
                <span class="fs-8" style="#808080">(333)</span>
              </div>
            </div>
            <p class="course-card-tag mb-0">限時 8 折 🔥</p>
          </div>
        </div>
        <div class="course-card col-3 swiper-slide">
          <div class="course-card-item shadow rounded-4 position-relative">
            <img class="w-100 img-fluid object-fit-cover rounded-top-4" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true" alt="course">
            <div class="p-4">
              <h3 class="course-card-title fs-6 fw-bold text-black mb-4">全面掌握 JavaScript 開發技術</h3>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="avatar-sm">
                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true" alt="avatar">
                  </div>
                  <p class="mb-0 ms-2">Kelly Hsu</p> 
                </div>
                <div>
                  <p class="text-primary-100 fs-6 fw-bold mb-0">NT$ 2,480</p>
                  <p class="mb-0 fs-8" style="color: #808080; text-decoration: line-through;">NT$ 3,200</p>
                </div>
              </div>
            </div>
            <div class="p-4 border-top border-neutral-40 d-flex align-items-center justify-content-between">
              <div>
                <span class="fs-8 bg-neutral-40 py-1 px-3 rounded-pill mb-1 d-inline-block">中文創作</span>
                <p class="mb-0 fs-8">已有 420 位同學加入</p>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-star-fill"></i>
                <span class="fs-8 mx-1" style="#180000">4.0</span>
                <span class="fs-8" style="#808080">(333)</span>
              </div>
            </div>
            <p class="course-card-tag mb-0">限時 8 折 🔥</p>
          </div>
        </div>
        <div class="course-card col-3 swiper-slide">
          <div class="course-card-item shadow rounded-4 position-relative">
            <img class="w-100 img-fluid object-fit-cover rounded-top-4" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true" alt="course">
            <div class="p-4">
              <h3 class="course-card-title fs-6 fw-bold text-black mb-4">HTML & CSS 網頁設計基礎教程</h3>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="avatar-sm">
                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true" alt="avatar">
                  </div>
                  <p class="mb-0 ms-2">Kelly Hsu</p> 
                </div>
                <div>
                  <p class="text-primary-100 fs-6 fw-bold mb-0">NT$ 2,480</p>
                  <p class="mb-0 fs-8" style="color: #808080; text-decoration: line-through;">NT$ 3,200</p>
                </div>
              </div>
            </div>
            <div class="p-4 border-top border-neutral-40 d-flex align-items-center justify-content-between">
              <div>
                <span class="fs-8 bg-neutral-40 py-1 px-3 rounded-pill mb-1 d-inline-block">中文創作</span>
                <p class="mb-0 fs-8">已有 420 位同學加入</p>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-star-fill"></i>
                <span class="fs-8 mx-1" style="#180000">4.0</span>
                <span class="fs-8" style="#808080">(333)</span>
              </div>
            </div>
            <p class="course-card-tag mb-0">限時 8 折 🔥</p>
          </div>
        </div>
        <div class="course-card col-3 swiper-slide">
          <div class="course-card-item shadow rounded-4 position-relative">
            <img class="w-100 img-fluid object-fit-cover rounded-top-4" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true" alt="course">
            <div class="p-4">
              <h3 class="course-card-title fs-6 fw-bold text-black mb-4">更進一步！深入學習 Node.js 與後端開發</h3>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="avatar-sm">
                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true" alt="avatar">
                  </div>
                  <p class="mb-0 ms-2">Kelly Hsu</p> 
                </div>
                <div>
                  <p class="text-primary-100 fs-6 fw-bold mb-0">NT$ 2,480</p>
                  <p class="mb-0 fs-8" style="color: #808080; text-decoration: line-through;">NT$ 3,200</p>
                </div>
              </div>
            </div>
            <div class="p-4 border-top border-neutral-40 d-flex align-items-center justify-content-between">
              <div>
                <span class="fs-8 bg-neutral-40 py-1 px-3 rounded-pill mb-1 d-inline-block">中文創作</span>
                <p class="mb-0 fs-8">已有 420 位同學加入</p>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-star-fill"></i>
                <span class="fs-8 mx-1" style="#180000">4.0</span>
                <span class="fs-8" style="#808080">(333)</span>
              </div>
            </div>
            <p class="course-card-tag mb-0">限時 8 折 🔥</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="course-list py-12 py-md-14 d-flex align-items-center justify-content-center">
    <div class="course-list-container">
      <div class="container">
        <div class="row flex-column-reverse flex-lg-row align-items-center">
          <div class="col-lg-6 swiper course-list-swiper">
            <ul class="swiper-wrapper  ps-0 mb-0">
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

  <section class="teacher py-12 py-md-14">
    <h2 class="text-center fs-1 fw-bold text-black mb-2 position-relative">頂尖講師帶你飛
      <img class="teacher-decoration" src="../../public/Asterisk 1.svg" alt="decoration">
    </h2>
    <p class="mb-8 text-center">超真實學員評價，這些講師你絕對不能錯過！</p>
    <div class="container teacher-swiper swiper p-5">
      <div class="swiper-wrapper">
        <div class="swiper-slide d-flex flex-column">
          <div class="d-flex flex-column position-relative z-2 h-100">
            <img class="ms-auto img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/teacher-3.png?raw=true" alt="teacher">
            <div class="teacher-card p-7 pe-7 d-flex flex-column">
              <div class="shadow teacher-card-item bg-white p-6 d-flex flex-column">
                <h3 class="text-black fs-6 fw-bold mb-6">Mr. Robert</h3>
                <div>
                  <span class="d-inline-block fs-8 fw-bold bg-neutral-40 py-2 px-3 me-2 rounded-pill">音樂創作</span>
                  <i class="bi bi-star-fill"></i>
                  <span class="fs-8 mx-1" style="#180000">4.0</span>
                  <span class="fs-8" style="#808080">(333)</span>
                </div>
                <p class="mt-2 mb-6 fs-8 fs-lg-7">Robert 的線上課程深受學生喜愛。他的教學方法生動有趣，能夠深入淺出地講解複雜的音樂理論，並結合實際演奏技巧，使學生能夠快速進步。</p>
                <button class="btn btn-primary-100 w-100 py-4 rounded-4 fs-8 fs-sm-7 mt-auto" @click="changeTeacherPage">探索 Mr. Robert 的教學課程</button>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide d-flex flex-column">
          <div class="d-flex flex-column position-relative z-2 h-100">
            <img class="ms-auto img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/teacher-1.png?raw=true" alt="teacher">
            <div class="teacher-card p-7 pe-7 d-flex flex-column">
              <div class="shadow teacher-card-item bg-white p-6 d-flex flex-column">
                <h3 class="text-black fs-6 fw-bold mb-6">Kelly Beck</h3>
                <div>
                  <span class="d-inline-block fs-8 fw-bold bg-neutral-40 py-2 px-3 me-2 rounded-pill">英文寫作</span>
                  <i class="bi bi-star-fill"></i>
                  <span class="fs-8 mx-1" style="#180000">4.8</span>
                  <span class="fs-8" style="#808080">(281)</span>
                </div>
                <p class="mt-2 mb-6 fs-8 fs-lg-7">Robert Kelly 的教學方式靈活且富有創意，能夠有效提升學生的寫作技巧和自信心。Kelly 注重實用性，針對學生的需求量身打造教學內容，並提供具體的反饋和建議。</p>
                <button class="btn btn-primary-100 w-100 py-4 rounded-4 fs-8 fs-sm-7 mt-auto" @click="changeTeacherPage">探索 Kelly Beck 的教學課程</button>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide d-flex flex-column">
          <div class="d-flex flex-column position-relative z-2 h-100">
            <img class="ms-auto img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/teacher-2.png?raw=true" alt="teacher">
            <div class="teacher-card p-7 pe-7 d-flex flex-column">
              <div class="shadow teacher-card-item bg-white p-6 d-flex flex-column">
                <h3 class="text-black fs-6 fw-bold mb-6">K. Lee</h3>
                <div>
                  <span class="d-inline-block fs-8 fw-bold bg-neutral-40 py-2 px-3 me-2 rounded-pill">音樂創作</span>
                  <i class="bi bi-star-fill"></i>
                  <span class="fs-8 mx-1" style="#180000">4.8</span>
                  <span class="fs-8" style="#808080">(1245)</span>
                </div>
                <p class="mt-2 mb-6 fs-8 fs-lg-7">Robert K. Lee 的教學風格親切且耐心，能夠循序漸進地引導學生進入樂團的世界。學生們紛紛表示，K. Lee 的課程讓他們對音樂產生了濃厚的興趣！</p>
                <button class="btn btn-primary-100 w-100 py-4 rounded-4 fs-8 fs-sm-7 mt-auto" @click="changeTeacherPage">探索 K. Lee 的教學課程</button>
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
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import Swiper from 'swiper';
  import { Autoplay, Grid } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/grid';
  import 'swiper/css/bundle';
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";
  const router = useRouter();
  onMounted(() => {
    //swiper配置
    const swiper = new Swiper(".banner", {
      modules: [ Autoplay ],
      autoplay: {
        delay: 3000, // 設定為每 3000 毫秒（3秒）自動切換一次
      },
      direction: "horizontal",
      simulateTouch: true,
      loop: true,
      // slidesPerView: 1, 
    })
    const hotCourseList = new Swiper(".hot-course-list", {
      breakpoints: {
        320: {
          // loop: true,
          allowTouchMove: true,
          slidesPerView: 'auto',
        },
        1199: {
          allowTouchMove: false,
          slidesPerView: 'auto',
        }
      }    
    })
      const hotCourseSwiper = new Swiper(".hot-course-swiper", {
      breakpoints: {
        767: {
          slidesPerView: 2,
          simulateTouch: false,
          loop: false,
          allowTouchMove: false,
        },
        320: { 
          slidesPerView: 1,
          simulateTouch: true,
          loop: true,
          allowTouchMove: true,
        },
      },  
    })
    const courseSwiper = new Swiper('.course-swiper', {
      breakpoints: {
        320: {
          simulateTouch: true,
          loop: true,
          slidesPerView: 1
        },
        767: {
          simulateTouch: true,
          loop: true,
          slidesPerView: 2
        },
        1199: {
          simulateTouch: true,
          loop: true,
          slidesPerView: 4
        }
      }
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
    const teacherSwiper = new Swiper('.teacher-swiper', {
      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        767: {
          slidesPerView: 2,
          centeredSlides: true,
          loop: true,
        },
        1200: {
          slidesPerView: 3,
          allowTouchMove: false,
        }
      }
    })
  })
  const changeTeacherPage = () => {
    router.push("/teacherIntroduction");
  }
  const changePageCourseList = () => {
    router.push("/courseList")
  }
</script>

<style lang="scss" scoped>
  .banner {
    max-width: 1600px;
    width: 100%;
    height: 800px;
    margin: auto;
    padding-bottom: 72px;
  }
  .banner-item{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .banner-img {
    width: 100%;
    height: 100%;
    border-radius: 80px;
    object-fit: cover;
  }
  .banner-tag {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #0068FF;
    color: #fff;
    font-size: 2.5rem;
    border-bottom-left-radius: 80px;
    border-top-right-radius: 100px;
    text-align: center;
    padding: 32px 120px;
    display: flex;
    align-items: center;
  }
  .piano-tag {
    border-radius: 100px;
    background-color: #fff;
    padding: 16px 16px;
    position: absolute;
    left: 40px;
    bottom: 0;
    margin-bottom: 150px;
    display: flex;
    align-items: center;
  }
  .avatar-md {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
  .shadow {
    box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.12);
  }
  .hot-course-tag {
    width: auto;
  }
  .hot-course-swiper {
    padding: 24px 0;
    .swiper-wrapper {
      width: 100% !important;
      display: flex;
      align-items: stretch;
      .swiper-slide {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .hot-course-sale-tag {
    color: #0068FF;
    background-color: #E5F4FF;
    border-radius: 100px;
    padding: 8px 12px;
    top: 16px;
    left: 16px;
    position: absolute;
    font-size: 14px;
    font-weight: 600;
  }
  .avatar-sm {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .course-swiper {
    .course-card {
      width: 100%;
      padding: 0 12px;
    }
  }
  .course-card-item {
    overflow: hidden;
  }
  .course-card-title {
    height: 3rem;
  }
  .course-card-tag {
    position: absolute;
    left: 16px;
    top: 16px;
    color: #FF3A55;
    background-color: #FFE0D7;
    padding: 6px 12px 8px 16px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 100px;
    line-height: normal;
    vertical-align: middle;
  }
  .flower-decoration {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transform: translateX(-30%);
  }
  .bi-star-fill {
    color: #F6BD2B;
    font-size: 12px;
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
  .teacher {
    background: 
      url("../../public/Deco\ for\ bg.svg")
      no-repeat
      center center;
  }
  .teacher-decoration {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(-150px);
    z-index: -1;
  }
  .teacher-swiper {
    .swiper-wrapper {
      .swiper-slide {
        padding: 0 12px;
      }
    }
  }
  .teacher-card {
    position: relative;
    z-index: 2;
    transform: translate(1px, -100px);
  }
  .teacher-card-item {
    border-radius: 20px;
    height: 350px;
  }
  @media (max-width: 991px) {
    .banner-img {
      border-radius: 0px;
    }
    .banner-tag {
      width: 100%;
      border-radius: 0;
      justify-content: center;
      font-size: 1.5rem;
      padding: 16px 0;
    }
    .piano-tag {
      margin-bottom: 100px;
    }
  }
  @media (max-width: 767px) {
    .banner {
      height: 400px;
    }
    .banner-tag {
      font-size: 14px;
    }
    .piano-tag {
      left: 0;
      padding: 8px;
    }
    .banner {
      padding-bottom: 0;
    }
    .flower-decoration {
      width: 200px;
      height: 200px;
      transform: translateX(-50%);
    }
    .course-list-container {
      border-radius: 40px;
    }
  }
</style>
