<template>
    <div class="progress">
        <div class="routerTitle"><span>会议流程</span></div>
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
    data(){
        return{
             file:[]
        }
    },
    computed:{
        files(){
            let items = [];
            for(let item =0;item<this.file.length;item++){
                let json = {};
                json.name = this.file[item];
                json.url = 'http://139.199.230.213/TestDB/public/program/'+this.file[item];
                items.push(json);
            }
            return items;
        }
    },
    created(){
        //获取后台信息
        $.ajax.get('/program/').then(res => {
            //console.log(res);
            if(res.status === 200){
                this.file = res.data;
                //console.log(res.data);
            }
        })
        .catch(error => {
            console.log(error);
        })
    },
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
