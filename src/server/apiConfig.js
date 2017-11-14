/**
 * Created by Administrator on 2017/11/9.
 */
'use strict';
const useStaticData = false;
const serverDebug = 'http://192.168.1.19:8000/';
const serverRelease = 'http://192.168.1.178:9012/';
//const companyServer = 'https://bird.ioliu.cn/v1/?url=http://des.cifi.com.cn:8033/';
const companyServer = '/api';
export default {
    companyServer,
    // 登录
    login: '/Account/AjaxMobileLogin',
    // 首页
    homeIndexData: '/home/HomeIndexJson', // 首页图片及新闻数据
    newsDetailData: '/home/NewsDetailsJson', // 新闻详情
    brideList: '/home/EmpListJson', // 新人列表
    allNewsList: '/home/NewsListJson', // 完整新闻列表

    // 项目列表数据
    projectData: {
        pageKey: 'projectData',
        pageUrl: useStaticData?serverDebug+'appData/indexData.json':'/home/CityEngList',
    },
    projectInfoPageUrl: '/home/EngineerInfo',
    projectSummaryUrl: '/home/ProjectSummaryJson',
    projectIntroduce: '/home/ProjectIndxSummaryJson',
    projectDesigner: '/home/ProjectDesignerJson',

    // 审批
    flowData:{
        historyFlowKey: 'historyFlowKey',
        currentFlowKey: 'currentFlowKey',
        pageUrl: '/home/GetApprovalList',
    },
    flowContent:{
        pageKey: 'flowContent',
        pageUrl: '/home/GetCommonPeddingInstance',
    },
    commonApproveLogUrl: '/home/GetApproveLog',
    SelectUserPage: {
        pageKey: 'SelectUserPage',
        pageUrl: '/home/CityEnglish',
    },
    // 设置
    changeUserPwdData: '/home/ChangeAppUserPwd',
}
