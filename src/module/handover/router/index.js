/**
 * Created by Administrator on 2017/6/21.
 */
import Vue from 'vue'
import Router from 'vue-router'
import handover from '../component/handover'
import handoverList from '../component/handoverList'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path:'/handover',
      component:handover
    },
    {
      path:'/handoverList',
      component: handoverList
    }
  ],
  linkActiveClass: 'active'
});
export default router
