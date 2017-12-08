/**
 * Created by Administrator on 2017/11/9.
 */
'use strict';
const useStaticData = false;
const serverDebug = 'http://192.168.1.19:8000/';
const serverRelease = 'http://192.168.1.178:9012/';
// const companyServer = 'https://bird.ioliu.cn/v1/?url=http://des.cifi.com.cn:8033/';
const companyServer = '/api';
const webViewServer = 'http://192.168.1.159:9029/';
export default {
    companyServer,
    webViewServer,
    // 登录
    login: '/Account/AjaxMobileLogin',
    // 首页
    homeIndexData: '/home/HomeIndexJson', // 首页图片及新闻数据
    newsDetailData: '/home/NewsDetailsJson', // 新闻详情
    brideList: '/home/EmpListJson', // 新人列表
    allNewsList: '/home/NewsListJson', // 完整新闻列表
    SupplierList: '/Home/DesignSupplierJson', // 供应商列表 type current pageSize
    SupplierDetail: '/Home/SupplierDetailsJson', // 供应商详情 supplierId

    // 项目列表数据
    projectData: {
        pageKey: 'projectData',
        pageUrl: useStaticData?serverDebug+'appData/indexData.json':'/home/CityEngList',
    },
    projectInfoPageUrl: '/home/EngineerInfo',
    projectSummaryUrl: '/home/ProjectSummaryJson', // 项目概要 参数（projId，userId）
    projectIntroduce: '/home/ProjectIntroduceJson',  // 项目简介 参数（projId，userId）
    projectDesigner: '/home/ProjectDesignerJson',

    // 审批
    flowData:{
        historyFlowKey: 'historyFlowKey',
        currentFlowKey: 'currentFlowKey',
        pageUrl: '/home/GetApprovalList', // 获取审批列表（1 已审 2 待审 3 已发 4 待发）
    },
    flowContent:{
        pageKey: 'flowContent',
        pageUrl: '/home/GetCommonPeddingInstance', // 查看流程详情（包含各个操作接口）
    },
    commonApproveLogUrl: '/home/GetApproveLog', // 查看审批意见 参数　flowInstanceId
    SelectUserPage: {
        pageKey: 'SelectUserPage',
        pageUrl: '/home/CityEnglish',
    },
    selectUserGroup: '/Home/GetFlowPosition', // 参数 flowInstanceId
    searchSysUser: '/home/SearchSysUserList', // 参数 keyWord  GET请求

    doAction:'/Home/DoAction', // 部分操作接口 attitude: 1,  动作的属性值：1（已阅2，通过1，不通过0）
    ForceCompleteInstance:'/Home/ForceCompleteInstance', // 终止流程
    AddCounterSignStep:'/Home/AddCounterSignStep', // 当前会签
    AddAuditStep:'/Home/AddAuditStep', // 加签
    TurnOnToUser:'/Home/TurnOnToUser/', // 转办
    BackSpaceAction:'/Home/BackSpaceAction', // 回退
    CirculateToUser:'/Home/CirculateToUser/', // 知会
    // 知会 参数
    // flowId: this.props.auditData.flowId,
    // givenUserIds: Object.keys(this.state.selectedUsers.toObject()).join(','),
    // grantUserId: GlobalData.user.userId,
    // remark: this.state.remark,

    // 设置
    changeUserPwdData: '/home/ChangeAppUserPwd', // 修改密码
}
