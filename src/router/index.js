import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/Index';
import Home from '@/page/home/Home';
import Flow from '@/page/flow/Flow';
import Project from '@/page/project/Project';
import Setting from '@/page/setting/Setting';
import ProjectInfo from '@/page/project/ProjectInfo';
import Mix from '@/page/home/children/Mix';
import News from '@/page/home/children/News';
import Rookies from '@/page/home/children/Rookies';

Vue.use(Router);

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
      component: Index,
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
      component: Mix,
      children:[{
        path:'News/:name',
        name:'News',
        component: News
      },
      {
        path:'Rookies/:name',
        name:'Rookies',
        component: Rookies
      }]
    },

  ]
});
router.push('Index/Home');
export default router
