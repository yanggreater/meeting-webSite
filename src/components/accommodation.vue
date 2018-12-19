<template>
    <div class="accommodation">
        <div class="routerTitle"><span>Accommodation</span></div>
        <div class="content">
            <div>
                <p class="title">International Academic Exchanging Center</p>
                <p>Type and Price of Building No.1:Standard room 320 yuan / room, three room 400 yuan / room</p>
                <p>Type and Price of Building No.2:Single room 300 yuan per room</p>
                <p>Type and Price of Building No.3:Standard room 248 yuan/room</p>
                <p>Telphone:+86-27-87280142</p>
                <p>WebSite: <a :href="address">http://hotels.ctrip.com/hotel/437818.html</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            address:'http://hotels.ctrip.com/hotel/437818.html'
        }
    }
}
</script>

<style scoped>
    .content{
        margin: 15px 0 0 25px;
    }
    .content p{
        margin-bottom: 15px;
    }
    .content .title{
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 400;
        color: black;
    }
    .content .address{
        padding-left: 20px;
    }
</style>
