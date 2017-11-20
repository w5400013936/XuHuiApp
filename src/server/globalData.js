/**
 * Created by Administrator on 2017/11/13.
 */
/****系统全局数据****/
export default {
    isLogin: false,
    user:{
        // houbo
        // guid:"582b063a5e492108dcb26339",
        // userId: 847, // 用户Id
        // name: 'houbo',  // 用户名
        // avatar: null,  //头像
        // admin
        guid:"5406bebbb0909c60e47752df",
        userId: 1, // 用户Id
        name: 'admin',  // 用户名
        avatar: null,  //头像
    },
    tabSelected:0,
    flow:{
        actList:null, // 流程操作列表，例如：通过，驳回，加签...
        FlowId:null,
        FlowInstanceId:null,
        stepId:null,
        actId:null,
    },
    
    getUrlKey:function(name){
        return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
    },
}
