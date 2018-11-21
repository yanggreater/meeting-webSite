<template>
    <div class="register">
        <h2>登录说明</h2>
        <p>请管理员进行登录</p>
        <el-button type="primary" @click="register" size="small">注 册</el-button>
        <el-button type="primary" @click="login" size="small">登 录</el-button>
        <el-dialog
            title="登录"
            :visible.sync="dialogVisible1"
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
                <el-button @click="dialogVisible1 = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handleLogin" size="small">确 定</el-button>
            </span>
        </el-dialog>
         <el-dialog
            title="注册"
            :visible.sync="dialogVisible2"
            width="25%">
            <el-form label-width="40px" :model="formRegister" size="mini">
                <el-form-item label="账号" size="mini">
                    <el-input v-model="formRegister.account"></el-input>
                </el-form-item>
                <el-form-item label="密码" size="mini">
                    <el-input v-model="formRegister.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" size="mini">
                    <el-input v-model="formRegister.Email"></el-input>
                </el-form-item>
                <el-form-item label="学院" size="mini">
                    <el-input v-model="formRegister.college"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handleRegister" size="small">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import $ from '../libs/util.js'
export default {
    data(){
        return{
            dialogVisible1:false,
            dialogVisible2:false,
            formLabelAlign:{
                account:'',
                password:''
            },
            formRegister:{
                account:'',
                password:'',
                Email:'',
                college:''
            }
            
        }
    },
    methods:{
        login() {
            this.dialogVisible1 = true;
        },
        register(){
            this.dialogVisible2 = true;
        },
        handleLogin(){
            $.ajax.post('/login',this.$qs.stringify(this.formLabelAlign)).then((res) => {
                console.log(res);
                if(res.status == 200){
                    if(res.data === 1){
                        this.dialogVisible1 = false;
                        this.$message({
                            message:'登录成功!',
                            type:'success'
                        });
                        this.$router.push('/personal/'+this.formLabelAlign.account);
                    }else{
                        this.$message.warning('账户不存在或密码错误!');
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        handleRegister(){
            $.ajax.post('/register',this.$qs.stringify(this.formRegister)).then((res) => {
                console.log(res);
                if(res.status === 200){
                    if(res.data === 1){
                        this.dialogVisible2 = false;
                        this.$message.success('注册成功!');
                    }else{
                        this.$message.error('用户存在,请重试！');
                    }
                }
            })
            .catch(error => {
                this.$message.error(error);
            })
        }
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
