<template>
    <div>
        <headerbar title="项目"></headerbar>
        <div class="search-box">
            <mt-search
            cancel-text="取消"
            placeholder="搜索">
            </mt-search>
        </div>
        <div class="container">
            <div class="proj-box">
                <div class="box-title">厦门</div>
                <mt-cell title="255地块项目" is-link></mt-cell>
                <mt-cell title="255地块项目" is-link></mt-cell>
                <mt-cell title="255地块项目" is-link></mt-cell>
            </div>
            <div class="proj-box">
                <div class="box-title">厦门</div>
                <mt-cell title="255地块项目" is-link></mt-cell>
                <mt-cell title="255地块项目" is-link></mt-cell>
                <mt-cell title="255地块项目" is-link></mt-cell>
            </div><div class="proj-box">
                <div class="box-title">厦门</div>
                <mt-cell title="255地块项目" is-link></mt-cell>
                <mt-cell title="255地块项目" is-link></mt-cell>
                <mt-cell title="255地块项目" is-link></mt-cell>
            </div>
        </div>
        
    </div>
</template>

<script>
import headerbar from '@/components/header/header'
import apiConfig from '../../server/apiConfig';
import axios from 'axios';
export default {
    data(){
        return {
            projList:[],
        }
    },
    methods:{
        getProjData(){
            
        }
    },
    beforeMount(){
        // this.getProjData();
    },
    components:{
        headerbar
    }
}
</script>

<style>
    .search-box .mint-search{
        height: 100%;
        margin-bottom: 0.5rem;
    }
    .search-box .mint-searchbar{
        z-index: 0;
    }
    .proj-box .box-title{
        text-align: left;
        padding: 0.5rem;
    }
    .proj-box .mint-cell-wrapper{
        text-align: left;
        padding-left: 1rem;
        background-image: none;
    }
</style>
