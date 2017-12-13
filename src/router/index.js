import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/page/Login'
import Index from '@/page/Index';
import Home from '@/page/home/Home';
import Flow from '@/page/flow/Flow';
import Project from '@/page/project/Project';
import Setting from '@/page/setting/Setting';
import ProjectList from '@/page/project/ProjectList';
import ProjectIndex from '@/page/project/ProjectIndex';
import Mix from '@/page/home/children/Mix';
import News from '@/page/home/children/News';
import Rookies from '@/page/home/children/Rookies';
import FlowContent from '@/page/flow/flowContent/FlowContent';
import FlowOpinion from '@/page/flow/flowContent/FlowOpinion';
import FlowAttachment from '@/page/flow/flowContent/FlowAttachment';
import FlowCheck from '@/page/flow/flowContent/FlowCheck';
import SelectUser from '@/page/flow/flowContent/SelectUser';
import NotifyUser from '@/page/flow/flowContent/NotifyUser';
import FlowSign from '@/page/flow/flowContent/FlowSign';
import FlowComment from '@/page/flow/flowContent/FlowComment';
import ChangePwd from '@/page/setting/ChangePwd';
import Suppliers from '@/page/home/suppliers/SuppliersIndex';
import SupplierDetail from '@/page/home/suppliers/SupplierDetail';
Vue.use(Router);

 const router = new Router({
  routes: [
      { // 登录页
        path:'/Login',
        name:'Login',
        component:Login
      },
      {
          path:'/',     // 路由默认页
          component:Login,
          redirect:'/Login'
      },
      { // 首页
          path: '/Index',
          name: 'Index',
          component: Index,
          children:[{ // 首页
              path: 'Home',
              name: 'Home',
              component: Home,
          },
          { // 审批中心
              path: 'Flow',
              name: 'Flow',
              component: Flow,
              children:[]
          },
          { // 项目
              path: 'Project',
              name: 'Project',
              component: Project
          },
          { // 设置
              path: 'Setting',
              name: 'Setting',
              component: Setting
          },]
      },
      { // 项目详情列表
          path: '/Project/:name/:engId',
          name: 'ProjectList',
          component: ProjectList
      },
      {
          path: '/Project',
          name: 'ProjectIndex',
          component: ProjectIndex
      },
      { // 新人与新闻
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
      {　// 流程详情页
        path: '/FlowContent',
        name: 'FlowContent',
        component: FlowContent
      },
      {  // 审批流程
        path:'/FlowCheck',
        name:'FlowCheck',
        component: FlowCheck
      },
      {  // 查看审批意见
        path: '/FlowOpinion',
        name: 'FlowOpinion',
        component: FlowOpinion
      },
      {  // 查看附件
        path: '/FlowAttachment',
        name: 'FlowAttachment',
        component: FlowAttachment
      },
      {
        path: '/SelectUser',
        name: 'SelectUser',
        component: SelectUser,
      },
      { // 知会
        path: '/NotifyUser',
        name: 'NotifyUser',
        component: NotifyUser,
      },
      { // 会签
        path: '/FlowSign',
        name: 'FlowSign',
        component: FlowSign,
      },
      { // 修改密码
        path: '/ChangePwd',
        name: 'ChangePwd',
        component: ChangePwd,
      },
      { // 供应商列表
        path: '/Suppliers',
        name: 'Suppliers',
        component: Suppliers,
      },
      { // 供应商详情
        path:'/SupplierDetail',
        name:'SupplierDetail',
        component:SupplierDetail,
      }
  ]
});
export default router
