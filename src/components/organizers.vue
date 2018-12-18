<template>
    <div class="organizers">
        <div class="routerTitle"><span>Organizers</span></div>
        <div class="content">
            <template v-for="(message,index) in messages">
                <div class="name" :key="index+1"><span>{{message.name}}</span></div>
                <div class="introduce" :key="-index-1"><span>{{message.introduce}}</span></div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            messages:[
                {name:'Jianbing Yan',introduce:'Huazhong Agricultural University'},
                {name:'David Jackson',introduce:'Cold Spring Harbor Laboratory'},
                {name:"郭亮",introduce:'Huazhong Agricultural University'},
                {name:"谢卡斌",introduce:'Huazhong Agricultural University'},
                {name:"李林",introduce:'Huazhong Agricultural University'},
                {name:"陈伟",introduce:'Huazhong Agricultural University'},
                {name:"金双侠",introduce:'Huazhong Agricultural University'},
                {name:'谢为博',introduce:'Huazhong Agricultural University'}
            ]
        }
    }
}
</script>

<style scoped>
    .content .name{
        padding-left: 20px;
        margin-top: 20px;
        font-size: 20px;
        font-weight: 400;
        color: black;
    }
    .introduce{
        color: #606266;
        padding-left: 20px;
    }
    /* .content introduce{

    } */
</style>
