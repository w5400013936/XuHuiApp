<template>
    <mt-header class="header" fixed :title="title"></mt-header>
</template>
<script>
export default {
    props:['title'],
    data(){
        return{
            
        }
    }
}
</script>
<style>
    .header{
        height: 3.8rem;
        font-size: 1.2rem;
    }
    .mint-header-title{
        color: #fff;
    }
</style>
