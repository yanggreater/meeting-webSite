<template>
    <div class="organizers">
        <div class="routerTitle"><span>Organizers</span></div>
        <div class="content">
            <div v-for="(message,index) in messages1" :key="index" class="english">
                <div class="name"><span>{{message.name}}</span></div>
                <div class="introduce"><span>{{message.introduce}}</span></div>
            </div>
            <p class="tip">Commitee Members</p>
            <div class="chinese" v-for="(message,index) in messages2" :key="index">
                <div class="name"><span>{{message.name}}</span></div>
                <div class="introduce"><span>{{message.introduce}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            messages1:[
                {name:'Jianbing Yan',introduce:'Huazhong Agricultural University'},
                {name:'David Jackson',introduce:'Cold Spring Harbor Laboratory'},
            ],
            messages2:[
                {name:"Liang Guo",introduce:'Huazhong Agricultural University'},
                {name:"Kabin Xie",introduce:'Huazhong Agricultural University'},
                {name:"Lin Li",introduce:'Huazhong Agricultural University'},
                {name:"Wei Chen",introduce:'Huazhong Agricultural University'},
                {name:"Shuangxia Jin",introduce:'Huazhong Agricultural University'},
                {name:'Weibo Xie',introduce:'Huazhong Agricultural University'},
                {name:'Jianxiao Liu',introduce:'Huazhong Agricultural University'}
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
        color: rgb(41, 41, 41);
    }
    .content .tip{
        margin: 30px 0 0 20px;
        /* border-left: 3px solid #409EFF; */
        font-size: 20px;
        font-weight: 500;
        color: black;
    }
    .content .chinese{
        margin-left: 7px;
    }
    .introduce{
        color: #606266;
        padding-left: 20px;
    }
    /* .content introduce{

    } */
</style>
