<template>
    <div class="tabs">
        <!--命名路由-->
        <ul>
            <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not be reported-->
            <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
            <router-link :to="{name:'Home'}" tag="li" exact>
                <div>
                    <i class="icon iconfont icon-31shouye"></i>
                </div>
                <div>首页</div>
            </router-link>
            <router-link :to="{name:'Brand'}" tag="li">
                <div>
                    <i class="icon iconfont icon-zhubaoshipin"></i>
                </div>
                <div>审批中心</div>
            </router-link>
            <router-link :to="{name:'Member'}" tag="li">
                <div>
                    <i class="icon iconfont icon-huiyuanqia"></i>
                </div>
                <div>项目</div>
            </router-link>
            <router-link :to="{name:'Cart'}" tag="li">
                <div>
                    <i class="icon iconfont icon-gouwucheman"></i>
                </div>
                <div>设置</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
  export default{
      data(){

      }
  }
</script>
