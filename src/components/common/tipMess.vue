<template>
    <div class="tipMess">
        <div class="date">
            <div class="title">
                <span>Important Dates</span>
            </div>
            <div class="content">
                <div v-for="(tip,index) in tips" :key="index">
                    <div class="event">{{tip.event}}</div>
                    <div class="date">{{tip.date}}</div>
                </div>
            </div>
        </div>
        <div class="organizers">
            <div class="title">
                <span>Organizers</span>
            </div>
            <div class="content">
                <div v-for="(organizer,index) in organizers" :key="index">
                    <div class="name">{{organizer.name}}</div>
                    <div class="introduce">{{organizer.introduce}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tips:[
                {event:'Meeting time',date:'2019-06-02~2019-06-05'},
                // {event:'Meeting time',date:'2019-6-29'},
            ],
            organizers:[
                {name:'Jianbing Yan',introduce:'Huazhong Agricultural University'},
                {name:'David Jackson',introduce:'Cold Spring Harbor Laboratory'},
            ]
        }
    }
}
</script>

<style scoped>
    .date{
        margin-bottom: 20px;
    }
    .title{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #409EFF; 
        color: #fff;
        font-size: 22px;
    }
    .title span{
        padding-left: 20px;
    }
    .content{
        padding-left: 20px;
    }
    .content .name,.content .event{
        color: black;
        font-weight: 300;
        font-size: 17px;
        margin-top: 20px;
    }
    .content .date,.content .introduce{
        margin-top: 5px;
    }
</style>
