<template>
    <div class="download">
        <div class="routerTitle"><span>Download</span></div>
        <div class="content">
            <div class="file" v-for="(file,index) in files" :key="index">
                <a :href="file.url">{{file.name}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import $ from '../libs/util.js'
export default {
    name:'downoad',
    data(){
        return{
            files:[
                {name:'参与证明',url:'http://genomeediting.igdb-conference.cn/Uploads/Picture/2018-10-18/5bc8417843244.pdf'}
            ]
        }
    },
    created(){
        //获取后台信息
    }
}
</script>

<style scoped>
    .content{
        margin: 15px 25px 0 25px;
    }
    .file{
        padding: 15px 0;
        border-bottom: 1px solid #EBEEF5;
    }
    .file a{
        padding-left: 10px;
    }
</style>
