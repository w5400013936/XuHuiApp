<template>
    <div>
        <HeaderBar title="人员选择" :showBackBtn="true" ></HeaderBar>
        <BodyContent>
            <div slot="content">
                <search placeholder="输入搜索人员姓名" top="2.9rem" :auto-scroll-to-top="true"></search>
            </div>
        </BodyContent>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header'
import BodyContent from "@/components/content/BodyContent"
import { Search } from 'vux'
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    beforeMount(){
        
    },
    components:{
        HeaderBar,
        BodyContent,
        Search,
    }
}
</script>
<style>
    .vux-search-fixed{
        position: static;

    }
</style>

