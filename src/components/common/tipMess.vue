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
                {event:'Registration Open',date:'2018-10-29'},
                {event:'Registration Open',date:'2018-10-29'},
                // {event:'Registration Open',date:'2018-10-29'},
                // {event:'Registration Open',date:'2018-10-29'},
            ],
            organizers:[
                {name:'杨景校',introduce:'华中农业大学-信息系学院-计科1602'},
                {name:'杨景校',introduce:'华中农业大学-信息系学院-计科1602'}
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
