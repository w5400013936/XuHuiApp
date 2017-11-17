<template>
    <div>
        <HeaderBar title="人员选择" :showBackBtn="true"></HeaderBar>
        <BodyContent>
            <div slot="content">
                <search placeholder="输入搜索人员姓名"></search>
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
            actList:null,
        }
    },
    methods:{
        goBack(){
            console.log(1111)
            this.$router.push({name:'FlowCheck',query:{actList:this.actList}});
        }
    },
    beforeMount(){
        this.actList = this.$route.query.actList;
        console.log(this.actList)
    },
    components:{
        HeaderBar,
        BodyContent,
        Search,
    }
}
</script>

