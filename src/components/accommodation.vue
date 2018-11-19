<template>
    <div class="accommodation">
        <div class="routerTitle"><span>Accommodation</span></div>
        <div class="content">
            <div class="title"><span>华农快捷酒店</span></div>
            <div class="address"><a :href="address">https://www.baidu.com</a></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            address:'https://www.baidu.com'
        }
    }
}
</script>

<style scoped>
    .content .title{
        padding-left: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 400;
        color: black;
    }
    .content .address{
        padding-left: 20px;
    }
</style>
