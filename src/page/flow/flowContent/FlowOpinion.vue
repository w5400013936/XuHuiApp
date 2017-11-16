<template>
    <div>
        <HeaderBar title="审批意见" :showBackBtn="true"></HeaderBar>
        <BodyContent>
            <div slot="content">
                <timeline>
                    <timeline-item>
                        <h4>【广东】 广州市 已发出</h4>
                        <p>2016-04-17 12:00:00</p>
                    </timeline-item>
                    <timeline-item>
                        <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
                        <p>2016-04-16 10:23:00</p>
                    </timeline-item>
                    <timeline-item>
                        <h4> 商家正在通知快递公司揽件</h4>
                        <p>2016-04-15 9:00:00</p>
                    </timeline-item>
                </timeline>
            </div>
        </BodyContent>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header'
import BodyContent from "@/components/content/BodyContent"
import apiConfig from '../../../server/apiConfig'
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Timeline, TimelineItem } from 'vux'
export default {
    components:{
        HeaderBar,
        BodyContent,
        Timeline,
        TimelineItem,
    }
}
</script>
<style>

</style>


