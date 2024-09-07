import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import PaymentSuccess from "@/views/PaymentSuccess.vue";
import TeacherIntroduction from "@/views/TeacherIntroduction.vue";
import CourseList from "@/views/CourseList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/paymentSuccess",
    name: "paymentSuccess",
    component: PaymentSuccess
  },
  {
    path: "/teacherIntroduction",
    name: "teacherIntroduction",
    component: TeacherIntroduction
  },
  {
    path: "/courseList",
    name: "courseList",
    component: CourseList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
export default router
