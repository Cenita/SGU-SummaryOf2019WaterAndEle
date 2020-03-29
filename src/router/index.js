import Vue from 'vue'
import Router from 'vue-router'
const SetId = () => import('@/components/SetId');
const loading = () => import('@/components/loading');
const Result = () => import('@/components/Result');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SetId',
      component: SetId
    },
    {
      path: '/ld',
      name: 'loading',
      component: loading
    },
    {
      path: '/re',
      name: 'Result',
      component: Result
    }
  ]
})
