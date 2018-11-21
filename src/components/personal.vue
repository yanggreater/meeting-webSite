<template>
    <div class="personal">
        <h2 class="routerTitle"><span>个人资料</span></h2>
        <div class="content">
            <a class="change" @click="change">修改资料>></a>
            <div class="info">账户:{{account}}</div>
            <div class="info">邮箱:{{personal[0].Email}}</div>
            <div class="info">学院:{{personal[0].college}}</div>
        </div>
        <el-dialog
            title="修改资料"
            :visible.sync="dialogVisible"
            width="25%">
            <el-form label-width="40px" :model="personal[0]" size="mini">
                <el-form-item label="账号" size="mini" >
                    <el-input v-model="personal[0].account" disabled></el-input>
                </el-form-item>
                <el-form-item label="密码" size="mini" >
                    <el-input v-model="personal[0].password" disabled></el-input>
                </el-form-item>
                <el-form-item label="邮箱" size="mini">
                    <el-input v-model="personal[0].Email"></el-input>
                </el-form-item>
                <el-form-item label="学院" size="mini">
                    <el-input v-model="personal[0].college"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handleChange" size="small">确 定</el-button>
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
            alert('修改')
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
</style>
