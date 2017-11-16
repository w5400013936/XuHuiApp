<template>
    <div>
        <HeaderBar :title="'附件：'+ filename + fileext" :showBackBtn="true"></HeaderBar>
        <BodyContent>
            <div slot="content">
                <iframe style="margin-top:0.5rem;" src="http://img1.3lian.com/2015/a1/84/d/95.jpg" frameborder="0"></iframe>
            </div>
        </BodyContent>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header'
import BodyContent from "@/components/content/BodyContent"
export default {
    data(){
        return{
            filename:null,
            fileext:null,
        }
    },
    beforeMount(){
        this.filename = this.$route.query.filename;
        this.fileext = this.$route.query.fileext;
    },
    components:{
        HeaderBar,
        BodyContent,
    }
}
</script>

