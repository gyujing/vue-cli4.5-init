const routes = [
  {
    path: '/index',
    name:"index",
    component: () => import("@/views/home/index.vue"),
    meta:{
      title:"微警务智能小助手"
    }
  },

]

export default routes
