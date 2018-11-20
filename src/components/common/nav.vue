<template>
    <div class="nav">
        <el-menu 
            :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="/index">Home</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/org">Organizers</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/speakers">Speakers</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/register">Registrations</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/index">Program</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="/travel">Travel</router-link></el-menu-item>
            <el-menu-item index="7"><router-link to="/accommodation">Accommodation</router-link></el-menu-item>
            <el-menu-item index="8"><router-link to="/abstract">Abstract Award</router-link></el-menu-item>
            <el-menu-item index="9"><router-link to="/contact">Contact</router-link></el-menu-item>
            <el-menu-item index="10"><router-link to="/index">Download</router-link></el-menu-item>

        </el-menu>
        <!-- <ul>
            <li><router-link to="/index">Home</router-link></li>
            <li><router-link to="/org">Home</router-link></li>
            <li><router-link to="/speakers">Home</router-link></li>
            <li><router-link to="/index">Home</router-link></li>
            <li><router-link to="/index">Home</router-link></li>
            <li><router-link to="/index">Home</router-link></li>
            <li><router-link to="/index">Home</router-link></li>
            <li><router-link to="/index">Home</router-link></li>
            <li><router-link to="/index">Home</router-link></li>
            <li><router-link to="/index">Home</router-link></li>
            <li><router-link to="/index">Home</router-link></li>
            <li><router-link to="/index">Home</router-link></li>
        </ul> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex:'1'
        }
    }
}
</script>

<style scoped>
    /* .nav ul li{
        float: left;
        list-style:none;
    }
    .nav ul li a{
        padding: 20px 25px 20px 25px;
        background: #545c64;
        color: #fff;    
        display: inline-block;
        text-decoration: none;
        border: 
    } */
</style>
