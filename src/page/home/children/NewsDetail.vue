/**
* Created by Administrator on 2017/12/5.
*/
<template>

</template>

<script>
    import apiConfig from '../../../server/apiConfig';

    export default{
        //状态值
        data(){
            return {}
        },
        methods:{
            getNewsDetail: function(newsId){
                const url = apiConfig.companyServer + apiConfig.newsDetailData + '?newsId=' + newsId + '&r=' + Math.random();
            }
        }
    }
</script>
