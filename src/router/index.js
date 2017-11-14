import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Flow from '@/page/flow/flow'
import Project from '@/page/project/project'
import Setting from '@/page/setting/setting'
import ProjectInfo from '@/page/project/projectInfo'

Vue.use(Router)

 const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // }
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Flow',
      name: 'Flow',
      component: Flow
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/Project/:name/:engId',
      name:'ProjectInfo',
      component: ProjectInfo
    },
  ]
})
router.push('Home')
export default router
