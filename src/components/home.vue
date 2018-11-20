<template>
    <div class="home">
        <div class="welcome">
            <div class="routerTitle"><span>Welcome Message</span></div>
            <div class="content">
                <span>Genome engineering is a truly revolutionary advance in biology, and has opened various new possibilities for other fields of science. We are pleased to announce that “Frontiers in Genome Engineering 2018”  will be held from October 22 to 25, 2018 in Beijing, China. The conference will offer an excellent environment for all participants to share ideas by providing stimulating talks from internationally renowned keynote speakers. Join us to discuss the newest genome engineering technologies and to learn the applications in areas ranging from agriculture to human health.</span>
            </div>
        </div>
        <div class="speakers">
            <div class="routerTitle"><span>Invited Speakers</span></div>
            <div class="person" v-for="(person,index) in persons" :key="index">
                <img :src="person.image"/>
                <span>{{person.name}}</span>
            </div>
        </div>
        <div class="announcements">
            <div class="routerTitle"><span>Announcements</span></div>
            <div class="content">
                <div class="one">
                    <router-link to="/one">第一条公告</router-link>
                    <span>2018-11-18</span>
                </div>
                <div class="two">
                    <router-link to="/two">第二条公告</router-link>
                    <span>2018-11-19</span>
                </div>
            </div>
        </div>
        <div class="Sponsors">
            <div class="routerTitle"><span>Sponsors</span></div>
            <div class="content">
                <span>赞助商1</span>
                <span>赞助商2</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            persons:[
                {image:'http://genomeediting.igdb-conference.cn/Uploads/Picture/2018-08-30/5b87ab3281ae3.jpg',name:'刘建晓'},
                {image:'http://genomeediting.igdb-conference.cn/Uploads/Picture/2018-08-30/5b87ab3281ae3.jpg',name:'杨景校'}
            ]
        }
    }
}
</script>

<style scoped>
    .welcome,.speakers{
        margin-bottom: 20px;
    }
    .welcome .content span{
        display: block;
        padding-left: 20px;
        margin-top: 20px;
        font-size: 17px;
        line-height: 20px;
    }
    .speakers .person{
        width: 110px;
        height: 150px;
        margin: 15px;
        float: left;
        text-align: center;
    }
    .speakers .person img{
        height: 80%;
    }
    .content div{
        margin: 15px;
    }
    .announcements{
        clear: both;
    }
    .announcements .content span{
        display: block;
        float: right;
    }
    .Sponsors .content{
        margin: 15px;
    }
</style>
