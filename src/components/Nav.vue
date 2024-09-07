<template>
  <header class="p-0 pt-lg-8 pb-lg-4 position-sticky top-0 z-3">
    <nav class="navbar navbar-expand-lg p-0">
      <div class="container-xl bg-white px-lg-8 py-3 py-lg-4 rounded-lg-pill position-relative">
        <a class="navbar-brand me-auto me-lg-6" href="#">
          <h1>
            <img class="logo" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/logo.png?raw=true" alt="logo">
          </h1>
        </a>
        <div class="p-2 me-4 cursor-pointer dropdown order-lg-2">
          <i class="bi bi-bell position-relative fs-5" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            <span v-if="fakeToken" class="position-absolute top-0 start-100 translate-middle-x p-1 bg-primary-100 border-0 rounded-circle">
              <span class="visually-hidden">New alerts</span>
            </span>
          </i>
          <ul class="dropdown-menu dropdown-tip-menu py-0">
            <li class="d-flex justify-content-end align-items-center py-3 px-4">
              <div class="blue-circle">
                <i class="bi bi-check-lg text-white"></i>
              </div>
              <p class="mb-0 text-primary-100 fs-8">全部標記為已讀</p>
            </li>
            <li class="d-flex justify-content-end align-items-center py-3 px-4 border-top border-neutral-40 bg-neutral-10">
              <div class="shallow-circle bg-primary-10">
                <span class="material-symbols-outlined text-info-100">campaign</span>
              </div>
              <div>
                <p class="mb-2">系統通知：6 月 30 日 02:00 網站系統排程更新</p>
                <span class="text-neutral-60 fs-8">4 天前</span>
              </div>
            </li>
            <li class="d-flex justify-content-end align-items-center py-3 px-4 border-top border-neutral-40">
              <div class="shallow-circle bg-error-10">
                <span class="material-symbols-outlined text-error-100">notifications_active</span>
              </div>
              <div>
                <p class="mb-2">募資開課：您購買的募資課程已成功開課！將於 3 天後公布課綱！</p>
                <span class="text-neutral-60 fs-8">7 天前</span>
              </div>
            </li>
            <li class="d-flex justify-content-end align-items-center py-3 px-4 border-top border-neutral-40 bg-neutral-10">
              <div class="shallow-circle bg-error-10">
                <span class="material-symbols-outlined text-error-100">notifications_active</span>
              </div>
              <div>
                <p class="mb-2">募資開課：您購買的募資課程已成功開課！將於 3 天後公布課綱！</p>
                <span class="text-neutral-60 fs-8">7 天前</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="p-2 me-4 cursor-pointer order-lg-3">
          <i class="bi bi-cart3 position-relative fs-5">
            <span v-if="fakeToken" class="cart-count">2</span>
          </i>
        </div>
        <button class="navbar-toggler" type="button" 
         data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item dropdown position-static">
              <a class="nav-link dropdown-toggle text-neutral-80" role="button"  data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                探索
              </a>
              <div class="dropdown-search-menu dropdown-menu py-0 start-50">
                <div class="d-flex">
                  <!-- 第一層 -->
                  <ul class="table-dropdown-menu list-unstyled bg-neutral-10 border-1 border-neutral-40 pt-5">
                    <li class="px-3 mb-2"><h6 class="dropdown-header px-6 py-3 text-neutral-80">探索全部</h6>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      音樂<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      攝影<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3">
                      <a class="dropdown-item d-flex justify-content-between px-6 py-3 active">
                      程式<span class="material-symbols-outlined">chevron_right</span>
                    </a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      程式<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      藝術<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      人文<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      行銷<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      投資理財<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      心靈成長<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      職場技能<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      生活品味<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                  </ul>
                  <!-- 第二層 -->
                  <ul class="table-dropdown-menu list-unstyled bg-neutral-10 border-1 border-neutral-40 bg-white pt-5 border-start border-end">
                    <li class="px-3 mb-2"><h6 class="dropdown-header px-6 py-3 text-neutral-80">所有程式</h6>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      程式入門<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 active">
                      網頁前端<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      網頁後端<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      網站架設<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      資訊安全<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      程式語言<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      遊戲開發<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      資料科學<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      人工智慧<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                    <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
                      量化分析<span class="material-symbols-outlined">chevron_right</span></a>
                    </li>
                  </ul>
                  <!-- 第三層 -->
                  <div class="table-dropdown-menu pt-3 px-6">
                    <h2 class="fs-7 pb-4 mb-0 fw-bold d-flex align-items-center"><img class="me-2" src="../../public/ic_fire.svg" alt="fire">
                      熱門網頁前端課程
                    </h2>
                    <ul class="list-unstyled">
                      <li class="pt-4 pb-6 border-top border-neutral-40 cursor-pointer course">
                        <div class="d-flex">
                          <div class="dropdown-image me-2 flex-shrink-0 position-relative">
                            <img class="w-100 h-100 object-fit-cover rounded-5" src="https://s3-alpha-sig.figma.com/img/8c74/9e49/9aa55ae4566f73ffadf74f7e0863fa79?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LpLsTK6O2uJ1UrbaU~dLc5hs6akLq3KoW7OcHEYUNls-dHh2Bn4Dh75DIUBjpxQgdGJwi~BgrLVdOwddryPkC~ZbZIBLYAP-4t4cLxNS9F80Aqtf6K~V7uhNKVoDFCNBoH~yBA9pw59hI0XI8YfoCv~K3NQ9AaUcET~ZoZmAbvTAIM39m3LBM00eKQQJW1wY2WE1J5O1GEJUKY0Ens9zp-65Ku1OVW-SbMh2Ou1DcGleKeTg6DOYTI6m2sXaFw5yNwEKKHTUYANaxcz3cS2yIZuStmkhA6a7KFlE5TFp16shzFLaSUo8cM56vT9qMp65fiVALesDeaXvoDcx3YxHdw__" alt="">
                            <div class="tag">8折</div>
                          </div>
                          <div class="d-flex flex-column justify-content-between">
                            <h2 class="fs-7 fw-bold text-black mb-4">小白也會！從零開始學習 Python 程式設計</h2>
                            <div class="d-flex justify-content-between align-items-center pb-2 border-bottom border-neutral-40">
                              <div class="d-flex align-items-center">
                                <div class="avatar me-2">
                                  <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true" alt="avatar">
                                </div>
                                <span>Kelly Hsu</span>
                              </div>
                              <div class="d-flex flex-column text-end">
                                <span class="text-primary-100 fw-bold">NT$ 2,480</span>
                                <span class="origin-price">NT$ 3,200</span>
                              </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center py-2">
                              <p class="mb-0 fs-8">已有 420 位同學加入</p>
                              <p class="mb-0 d-flex align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <span class="star-amount mx-1">4.0</span>
                                <span class="star-text">(333)</span>
                              </p>
                            </div>
                          </div>
                        </div>     
                      </li>
                      <li class="pt-4 pb-6 border-top border-neutral-40 cursor-pointer course">
                        <div class="d-flex">
                          <div class="dropdown-image me-2 flex-shrink-0 position-relative">
                            <img class="w-100 h-100 object-fit-cover rounded-5" src="https://s3-alpha-sig.figma.com/img/8c74/9e49/9aa55ae4566f73ffadf74f7e0863fa79?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LpLsTK6O2uJ1UrbaU~dLc5hs6akLq3KoW7OcHEYUNls-dHh2Bn4Dh75DIUBjpxQgdGJwi~BgrLVdOwddryPkC~ZbZIBLYAP-4t4cLxNS9F80Aqtf6K~V7uhNKVoDFCNBoH~yBA9pw59hI0XI8YfoCv~K3NQ9AaUcET~ZoZmAbvTAIM39m3LBM00eKQQJW1wY2WE1J5O1GEJUKY0Ens9zp-65Ku1OVW-SbMh2Ou1DcGleKeTg6DOYTI6m2sXaFw5yNwEKKHTUYANaxcz3cS2yIZuStmkhA6a7KFlE5TFp16shzFLaSUo8cM56vT9qMp65fiVALesDeaXvoDcx3YxHdw__" alt="">
                            <div class="tag">8折</div>
                          </div>
                          <div class="d-flex flex-column justify-content-between">
                            <h2 class="fs-7 fw-bold text-black mb-4">小白也會！從零開始學習 Python 程式設計</h2>
                            <div class="d-flex justify-content-between align-items-center pb-2 border-bottom border-neutral-40">
                              <div class="d-flex align-items-center">
                                <div class="avatar me-2">
                                  <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true" alt="avatar">
                                </div>
                                <span>Kelly Hsu</span>
                              </div>
                              <div class="d-flex flex-column text-end">
                                <span class="text-neutral-60 fw-bold">已購買</span>
                                <span class="origin-price">NT$ 3,200</span>
                              </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center py-2">
                              <p class="mb-0 fs-8">已有 420 位同學加入</p>
                              <p class="mb-0 d-flex align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <span class="star-amount mx-1">4.0</span>
                                <span class="star-text">(333)</span>
                              </p>
                            </div>
                          </div>
                        </div>     
                      </li>
                      <li class="pt-4 pb-6 border-top border-neutral-40 cursor-pointer course">
                        <div class="d-flex">
                          <div class="dropdown-image me-2 flex-shrink-0 position-relative">
                            <img class="w-100 h-100 object-fit-cover rounded-5" src="https://s3-alpha-sig.figma.com/img/8c74/9e49/9aa55ae4566f73ffadf74f7e0863fa79?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LpLsTK6O2uJ1UrbaU~dLc5hs6akLq3KoW7OcHEYUNls-dHh2Bn4Dh75DIUBjpxQgdGJwi~BgrLVdOwddryPkC~ZbZIBLYAP-4t4cLxNS9F80Aqtf6K~V7uhNKVoDFCNBoH~yBA9pw59hI0XI8YfoCv~K3NQ9AaUcET~ZoZmAbvTAIM39m3LBM00eKQQJW1wY2WE1J5O1GEJUKY0Ens9zp-65Ku1OVW-SbMh2Ou1DcGleKeTg6DOYTI6m2sXaFw5yNwEKKHTUYANaxcz3cS2yIZuStmkhA6a7KFlE5TFp16shzFLaSUo8cM56vT9qMp65fiVALesDeaXvoDcx3YxHdw__" alt="">
                            <div class="tag">8折</div>
                          </div>
                          <div class="d-flex flex-column justify-content-between">
                            <h2 class="fs-7 fw-bold text-black mb-4">小白也會！從零開始學習 Python 程式設計</h2>
                            <div class="d-flex justify-content-between align-items-center pb-2 border-bottom border-neutral-40">
                              <div class="d-flex align-items-center">
                                <div class="avatar me-2">
                                  <img class="img-fluid object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true" alt="avatar">
                                </div>
                                <span>Kelly Hsu</span>
                              </div>
                              <div class="d-flex flex-column text-end">
                                <span class="text-primary-100 fw-bold">NT$ 2,480</span>
                                <span class="origin-price">NT$ 3,200</span>
                              </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center py-2">
                              <p class="mb-0 fs-8">已有 420 位同學加入</p>
                              <p class="mb-0 d-flex align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <span class="star-amount mx-1">4.0</span>
                                <span class="star-text">(333)</span>
                              </p>
                            </div>
                          </div>
                        </div>     
                      </li>
                    </ul>
                  </div>
                </div>
              </div>              
            </li>
          </ul>
          <form class="d-flex position-relative ms-4" role="search">
            <span class="material-symbols-outlined position-absolute top-50 translate-middle-y ms-2">search</span>
            <input class="form-control rounded-5 py-5 px-8" type="search" placeholder="搜尋各種音樂、數學、程式及設計課程" aria-label="Search">
            <button class="btn btn-primary-100 position-absolute top-50 translate-middle-y end-0 me-2 py-3 px-4" type="submit">搜尋</button>
          </form>
        </div>

        <button v-if="!fakeToken"  class="btn btn-primary-100 py-4 px-7 rounded-3 fw-semibold">登入 / 註冊</button>
        <div v-else class="dropdown position-static d-none d-lg-block order-4">
          <div class=" cursor-pointer d-flex align-items-center" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            <div class="avatar-md">
              <img class="w-100 h-100 object-fit-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-1.png?raw=true" alt="avatar">
            </div>
            <p class="mb-0 ms-2">Jessica</p>
            <div class="dropdown-menu dropdown-user-menu end-0 px-3 py-6 border-0 rounded-5">
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
              <ul class="mb-0 ps-0 pt-4">
                <li class="dropdown-item d-flex align-items-center px-6 py-3">
                  <span class="material-symbols-outlined text-neutral-60">logout</span>
                  <p class="mb-0 ms-2">登出</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- modal -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body px-0 py-0 position-relative">
      <ul v-if="allAppToggle" class="list-unstyled border-1 border-neutral-40 pt-5 px-3">
        <li class="px-3 mb-2"><h6 class="dropdown-header px-6 py-3 text-neutral-80">探索全部</h6>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          音樂<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          攝影<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
        <li class="px-3" @click="allAppToggle = false">
          <a class="dropdown-item d-flex justify-content-between px-6 py-3 active">
          程式<span class="material-symbols-outlined">chevron_right</span>
        </a>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          程式<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          藝術<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          人文<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          行銷<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          投資理財<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          心靈成長<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          職場技能<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
        <li class="px-3"><a class="dropdown-item d-flex justify-content-between px-6 py-3 text-neutral-80">
          生活品味<span class="material-symbols-outlined">chevron_right</span></a>
        </li>
      </ul>
      <div v-else>
        <div class="d-flex border-neutral-40 border-bottom">
          <div :class="{'tab-toggle': navToggle, tab: true}" @click="navToggle = true">探索</div>
          <div :class="{'tab-toggle': !navToggle, tab: true}" @click="navToggle = false">我的會員</div>
        </div>
        <NavLeft v-if="navToggle" @updateAllAppToggle="allAppToggle = true" />
        <NavRight v-else />
      </div>
      <div v-if="allAppToggle" class="position-absolute bottom-0 w-100 border-top border-neutral-40 py-3 px-6">
        <button class="btn btn-primary-100 w-100 py-4 rounded-4">登入 / 註冊</button>
      </div>
      <div v-else-if="!allAppToggle && !navToggle" class="position-absolute bottom-0 w-100 border-top border-neutral-40 py-3 px-6">
        <ul class="mb-0 ps-0 pt-4">
          <li class="dropdown-item d-flex align-items-center px-6 py-3">
            <span class="material-symbols-outlined text-neutral-60">logout</span>
            <p class="mb-0 ms-2">登出</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from "vue";
  import NavLeft from "@/components/NavLeft.vue";
  import NavRight from "@/components/NavRight.vue";
  const fakeToken = ref<boolean>(true); 
  const dropdownEvent = computed(() => fakeToken.value? "" : "none" )
  const allAppToggle = ref(false);
  const navToggle = ref(true);
</script>

<style lang="scss" scoped>

header {
  nav {
    .container-xl {
      box-shadow: 0px 2px 40px rgba(0, 104, 255, 0.1);
      
      .form-control {
        width: 425px;
      }
    }
    .logo {
      width: 200px;
      height: 32px;
    }
    .dropdown-toggle {
      display: flex;
      align-items: center;
    }
    .dropdown-toggle::after {
      content: "\e313";
      font-family: "material symbols outlined";
      border: none;
    }
    .table-dropdown-menu {
      max-height: calc(100vh - 200px);
      height: 500px;
      overflow-y: auto;
      min-width: 238px;
    }
    .dropdown-search-menu {
      max-width: 863px;
      width: 100%;
    }
    .dropdown-menu[data-bs-popper] {
      left: auto;
    }
    .dropdown-search-menu[data-bs-popper] {
      left: 50%;
      transform: translate(-50%, 8px);
    }
    .dropdown-item {
      width: 200px;
      &.active {
        border-radius: 12px;
      }
      &:hover {
        border-radius: 12px;
        background-color: #0068FF;
        color: #ffffff;
      }
    }
    .dropdown-image {
      width: 100px;
      height: 100px;
      .tag {
        font-size: 14px;
        color: #FF3A55;
        position: absolute;
        top: 4px;
        left: 4px;
        background-color: #FFE0D7;
        border-radius: 100px;
        padding: 4px 8px;
      }
    }
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .origin-price {
      color: #808080;
      font-size: 12px;
      text-decoration: line-through;
    }   
    .bi-star-fill {
      color: #F6BD2B;
      font-size: 12px;
    }
    .star-amount {
      color: #180000;
      font-size: 14px;
    }
    .star-text {
      color: #808080;
      font-size: 14px;
    }
    .course:hover {
      opacity: .5;
    }
    .cart-count {
      background-color: #0068FF;
      width: 16px;
      height: 16px;
      font-size: 12px;
      padding-right: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 100%;
      transform: translate(-50%, -25%);
    }
    .dropdown-tip-menu[data-bs-popper] {
      width: 320px;
      transform: translate(-40%, calc(5% + 8px));
    }
    .blue-circle {
      background-color: #0068FF;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: .5rem;
    }
    .bi-bell {
      pointer-events: v-bind(dropdownEvent);
    }
    .bi-check-lg {
      padding-top: .1rem;
    }
    .shallow-circle {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 1rem;
      flex-shrink: 0;
    }
    .dropdown-user-menu[data-bs-popper] {
      width: 237px;
      right: 0;
      transform: translateY(8px);
      box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.12);
    }
  }
}
.avatar-md {
  width: 44px;
  height: 44px;
  border-radius: 50%;
}
.fill-icon{
  font-variation-settings:
  'FILL' 1,
  'wght' 300,
  'GRAD' 0,
  'opsz' 24
}
@media (max-width: 999px) {
  header {
    nav {
      .container-xl {
        justify-content: start;
      }
      .logo {
        width: 125px;
        height: 20px;
    }
      .dropdown-tip-menu[data-bs-popper] {
        transform: translate(-50%, calc(5% + 8px));
      }
    }  
  }
  .offcanvas-body {
    .active {
      border-radius: 12px;
      background-color: #0068FF;
      color: #ffffff;
    }
    .dropdown-item {
      cursor: pointer;
      &.active {
        border-radius: 12px;
      }
      &:hover {
        border-radius: 12px;
        background-color: #0068FF;
        color: #ffffff;
      }
    }
    
    .tab {
      flex-grow: 1;
      text-align: center;
      position: relative;
      color: #909090;
      font-weight: 600;
      padding: 1rem 0;
    }
    .tab-toggle {
      color: #0068FF;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #0068FF;
        height: 3px;
        width: 25px;  
      }
    }
        
      
    
  }
}
@media (max-width: 375px) {
  header {
    nav {
      .dropdown-tip-menu[data-bs-popper] {
        transform: translate(-48%, calc(5% + 8px));
      }
    }
  }
}
</style>
