<template>
    <div class="nav">
        <el-menu 
            :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="/index">Home</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/org">Organizers</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/speakers">Speakers</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/register">Registrations</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/program">Program</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="/travel">Travel</router-link></el-menu-item>
            <el-menu-item index="7"><router-link to="/accommodation">Accommodation</router-link></el-menu-item>
            <el-menu-item index="8"><router-link to="/contact">Contact</router-link></el-menu-item>
            <el-menu-item index="9"><router-link to="/download">Download</router-link></el-menu-item>

        </el-menu>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex:'1'
        }
    },
    methods:{
        
            
        
    }
}
</script>

<style scoped>
    .nav{
        width: 100%;
    }
    .el-menu-demo li{
        padding: 0;
    }
    .el-menu-demo li a{
        padding: 20px 20px
    }
</style>
