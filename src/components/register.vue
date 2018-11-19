<template>
    <div class="register">
        <h2>登录说明</h2>
        <p>请管理员进行登录</p>
        <el-button type="primary" @click="login" size="small">Login</el-button>
        <el-dialog
            title="登录"
            :visible.sync="dialogVisible"
            width="25%">
            <el-form label-width="40px" :model="formLabelAlign" size="mini">
                <el-form-item label="账号" size="mini">
                    <el-input v-model="formLabelAlign.account"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formLabelAlign.password"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handleLogin" size="small">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import $ from '../libs/util.js'
export default {
    data(){
        return{
            dialogVisible:false,
            formLabelAlign:{
                account:'',
                password:''
            },
            
        }
    },
    methods:{
        login() {
            this.dialogVisible = true;
        },
        handleLogin(){
            $.ajax.post('/login',this.$qs.stringify(this.formLabelAlign)).then((res) => {
                if(res.status == 200){
                    if(res.data.status === 1){
                        this.dialogVisible = false;
                        this.$message({
                            message:'登录成功!',
                            type:'success'
                        })
                    }else{
                        this.$message.warning('账户不存在或密码错误!');
                    }
                }
            })
            .then((error) => {
                this.$message({
                    message:error,
                    type:'error'
                })
            })
        },
        // handleClose(done) {
        //     this.$confirm('确认关闭？')
        //     .then(_ => {
        //         done();
        //     })
        //     .catch(_ => {});
        // }
    }
}
</script>

<style>

</style>
