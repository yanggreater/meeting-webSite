<template>
    <div class="personal">
        <h2 class="routerTitle"><span>个人资料</span></h2>
        <div class="content">
            <a class="change" @click="change">修改资料>></a>
            <div class="info"><span>account:</span>{{account}}</div>
            <div class="info"><span>name:</span>{{personal[0].name}}</div>
            <div class="info"><span>Email:</span>{{personal[0].Email}}</div>
            <div class="info"><span>telephone:</span>{{personal[0].phone}}</div>
            <div class="info"><span>college:</span>{{personal[0].college}}</div>
        </div>
        <el-dialog
            title="修改资料"
            :visible.sync="dialogVisible"
            width="25%">
            <el-form label-width="75px" :model="personal[0]" size="mini">
                <el-form-item label="account" size="mini" >
                    <el-input v-model="personal[0].account" disabled></el-input>
                </el-form-item>
                <el-form-item label="password" size="mini" >
                    <el-input v-model="personal[0].password"></el-input>
                </el-form-item>
                <el-form-item label="name" size="mini" >
                    <el-input v-model="personal[0].name"></el-input>
                </el-form-item>
                <el-form-item label="Email" size="mini">
                    <el-input v-model="personal[0].Email"></el-input>
                </el-form-item>
                <el-form-item label="telephone" size="mini" >
                    <el-input v-model="personal[0].phone"></el-input>
                </el-form-item>
                <el-form-item label="college" size="mini">
                    <el-input v-model="personal[0].college"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handleChange" size="small">提 交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import $ from '../libs/util.js'
export default {
    name:'personal',
    data(){
        return{
            account:this.$route.params.account,
            personal:[{}],
            dialogVisible:false,
        }
    },
    methods:{
        handleChange(){
            //提交后台
            //alert('修改');
            $.ajax.post('/adjust',this.$qs.stringify(this.personal[0])).then(res => {
                if(res.status === 200){
                    if(res.data === 1){
                        this.$message.success('修改成功');
                    }else{
                        this.$message.error('修改失败!');
                    }
                }
            }) 
            .catch(error => {
                console.log(error);
            })
            this.dialogVisible = false;
        },  
        getPersonal(){
            $.ajax.get('/getInfo?account='+this.account).then(res => {
                console.log(res);
                if(res.status === 200){
                    this.personal = res.data;
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        change(){
           this.dialogVisible = true;
        }
    },
    created(){
        this.getPersonal()
    }
}
</script>

<style scoped>
    .content {
        margin: 15px 20px 0px 40px;
    }
    .content .change{
        float: right;
        color: #409EFF;
        cursor: pointer;
    }
    .content .info{
        margin-bottom: 10px;
    }
    .info span{
        display: inline-block;
        width: 80px;
        text-align: left;
    }
</style>
