<template>
    <div class="allPersons">
        <div class="routerTitle"><span>会议参与人员细则</span></div>
        <div class="content">
                <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="140">
                    </el-table-column>
                    <el-table-column
                        prop="Email"
                        label="邮箱"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="phone"
                        label="电话">
                    </el-table-column>
                     <el-table-column
                        prop="college"
                        label="学院">
                    </el-table-column>
                    <el-table-column
                        prop="Address"
                        label="地址">
                    </el-table-column>
                </el-table>
        </div>
    </div>
    
</template>

<script>
import $ from '../libs/util.js'
export default {
    data(){
        return{
            tableData:[
                // {name:'杨景校',Email:'110@qq.com',phone:'123132213',college:'信息学院'},
                // {name:'杨景校',Email:'110@qq.com',phone:'123132213',college:'信息学院'},
                // {name:'杨景校',Email:'110@qq.com',phone:'123132213',college:'信息学院'},
                // {name:'杨景校',Email:'110@qq.com',phone:'123132213',college:'信息学院'},
            ]
        }
    },
    created(){
        $.ajax.get('/persons').then(res => {
            if(res.status === 200){
                this.tableData = res.data;
            }else{
                this.$message.error('加载失败,请重试!');
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<style scoped>
    .content{
        margin: 15px 25px 0 25px;
    }
</style>
