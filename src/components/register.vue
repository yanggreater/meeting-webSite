<template>
    <div class="register">
        <div class="routerTitle"><span>Registration</span></div>
        <div class="content">
            <p>Participants are requested to register and log in to view their own information.</p>
            <el-button type="primary" @click="register" size="small">register</el-button>
            <el-button type="primary" @click="login" size="small">login</el-button>
            <el-dialog
                title="login"
                :visible.sync="dialogVisible1"
                width="25%">
                <el-form label-width="70px" :model="formLabelAlign" size="mini">
                    <el-form-item label="Account" size="mini">
                        <el-input v-model="formLabelAlign.account"></el-input>
                    </el-form-item>
                    <el-form-item label="Password">
                        <el-input v-model="formLabelAlign.password" type="password"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible1 = false" size="small">Canel</el-button>
                    <el-button type="primary" @click="handleLogin" size="small">Confirm</el-button>
                </span>
            </el-dialog>
            <el-dialog
                title="Registration"
                :visible.sync="dialogVisible2"
                width="28%">
                <el-form label-width="95px" :model="formRegister" size="mini" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
                    <el-form-item label="Account" size="mini" prop="account"> 
                        <el-input v-model="formRegister.account" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" size="mini" prop="password">
                        <el-input type="password" v-model="formRegister.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="ConfirmPass" size="mini" prop="checkPass">
                        <el-input type="password" v-model="formRegister.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Name" size="mini" prop="name">
                        <el-input v-model="formRegister.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Email" size="mini" prop="Email">
                        <el-input v-model="formRegister.Email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Telephone" size="mini" prop="phone">
                        <el-input v-model="formRegister.phone" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="College" size="mini" prop="college">
                        <el-input v-model="formRegister.college" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Address" size="mini" prop="Address">
                        <el-input v-model="formRegister.Address" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible2 = false" size="small">Canel</el-button>
                    <el-button type="primary" @click="handleRegister('ruleForm2')" size="small">Confirm</el-button>
                </span>
            </el-dialog>
        </div>
        
    </div>
</template>

<script>
import $ from '../libs/util.js'
export default {
    data(){
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input your password again.'));
            } else if (value !== this.formRegister.password) {
                callback(new Error('Two inconsistent passwords!'));
            } else {
                callback();
            }
        };
        return{
            dialogVisible1:false,
            dialogVisible2:false,
            
            formLabelAlign:{
                account:'',
                password:''
            },
            formRegister:{
                checkPass:'',
                account:'',
                password:'',
                name:'',
                Email:'',
                phone:'',
                college:'',
                Address:''
            },
            
            rules2: {
                account: [
                    {required:true,message:'Please input your account number.',trigger:['blur','change']}
                    // { validator: checkAcc, trigger: 'blur' }
                ],
                password: [
                    {required:true,message:'Please input a password',trigger:['blur','change']},
                ],
                checkPass: [
                    { required:true,validator: validatePass2, trigger: ['blur','change'] }
                ],
                name:[
                    {required:true,message:'Please input your name',trigger:['blur','change']}
                ],
                Email:[
                    { required: true, message: 'Please input your email', trigger: ['blur','change'] },
                    { type: 'email', message: 'Please input the correct email', trigger: ['blur', 'change'] }
                ],
                phone:[
                    {required:true,message:'Please input your phone ',trigger:['blur','change']}
                ],
                college:[
                    {required:true,message:'Please input College Information',trigger:['blur','change']}
                ],
                Address:[
                    {required:true,message:'Please input your address',trigger:['blur','change']}
                ]
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
                            message:'Login successfully!',
                            type:'success'
                        });
                        this.$router.push('/personal/'+this.formLabelAlign.account);
                    }else{
                        this.$message.warning('Account does not exist or password error!');
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        handleRegister(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    delete this.formRegister.checkPass;
                    //console.log(this.formRegister);
                     $.ajax.post('/register',this.$qs.stringify(this.formRegister)).then((res) => {
                            console.log(res);
                            if(res.status === 200){
                                if(res.data === 1){
                                    this.dialogVisible2 = false;
                                    this.$message.success('register successfully!');
                                }else{
                                    this.$message.error('User already exists, please try again!');
                                }
                            }
                        })
                        .catch(error => {
                            console.log(error);
                    })
                    
                } else {
                    this.$message.warning({
                        message:'Please improve the information',
                        showClose:true
                    });
                    //console.log('error submit!!');
                    return false;
                }
            });
           
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

<style scoped>
    .content{
        margin: 15px 0 0 25px;
    }
    .content p{
        margin-bottom: 10px;
    }
</style>
