import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import Home from '@/page/home/home'
import Flow from '@/page/flow/flow'
import Project from '@/page/project/project'
import Setting from '@/page/setting/setting'
import ProjectInfo from '@/page/project/projectInfo'
import mix from '@/page/home/children/mix'
import news from '@/page/home/children/news'
import rookies from '@/page/home/children/rookies'

Vue.use(Router)

 const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // }
    {
      path: '/Index',
      name: 'Index',
      component: index,
      children:[{
        path: 'Home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'Flow',
        name: 'Flow',
        component: Flow
      },
      {
        path: 'Project',
        name: 'Project',
        component: Project
      },
      {
        path: 'Setting',
        name: 'Setting',
        component: Setting
      },]
    },
    {
      path: '/Project/:name/:engId',
      name:'ProjectInfo',
      component: ProjectInfo
    },
    {
      path: '/Mix',
      name: 'Mix',
      component: mix,
      children:[{
        path:'News/:name',
        name:'News',
        component: news
      },
      {
        path:'Rookies/:name',
        name:'Rookies',
        component: rookies
      }]
    },
    
  ]
})
router.push('Index/Home')
export default router
