<template>
    <div class="download">
        <div class="routerTitle"><span>Download</span></div>
        <div class="content">
            <!-- <div class="file" v-for="(file,index) in files" :key="index">
                <a :href="file.url">{{file.name}}</a>
            </div> -->
            <span>To be determined</span>
        </div>
    </div>
</template>

<script>
import $ from '../libs/util.js'
export default {
    name:'download',
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
                json.url = 'http://139.199.230.213/TestDB/public/files/'+this.file[item];
                items.push(json);
            }
            return items;
        }
    },
    created(){
        //获取后台信息
        $.ajax.get('/files/').then(res => {
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
    // mounted(){
    //     console.log(this.files);
        
    // }
    
}
</script>

<style scoped>
    .content{
        margin: 15px 25px 0 25px;
    }
    .file{
        padding: 15px 0;
        border-bottom: 1px solid rgb(213, 217, 226);
    }
    .file a{
        padding-left: 10px;
    }
</style>
