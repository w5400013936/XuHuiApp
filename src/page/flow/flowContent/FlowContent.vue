<template>
    <div>
        <FlowTemplate>
            <div slot="flowInfo">2222</div>
        </FlowTemplate>
    </div>
</template>
<script>
import FlowTemplate from '@/components/FlowTemplate/FlowTemplate'
import apiConfig from '../../../server/apiConfig'
import axios from 'axios'
import globalData from '../../../server/globalData'
export default {
    data(){
        return{

        }
    },
    beforeMount(){
        console.log(this.$route.query.type)
    },
    components:{
        FlowTemplate,
    }
}
</script>

