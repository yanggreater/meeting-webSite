<template>
    <div class="organizers">
        <div class="routerTitle"><span>Organizers</span></div>
        <div class="content">
            <template v-for="(message,index) in messages">
                <div class="name" :key="index+1"><span>{{message.name}}</span></div>
                <div class="introduce" :key="-index-1"><span>{{message.introduce}}</span></div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            messages:[
                {name:'yanggreater',introduce:'来自华中农业大学计算机科学技术专业'},
                {name:'yanggreater',introduce:'来自华中农业大学计算机科学技术专业'},
                {name:'yanggreater',introduce:'来自华中农业大学计算机科学技术专业'}
            ]
        }
    }
}
</script>

<style scoped>
    .content .name{
        padding-left: 20px;
        margin-top: 20px;
        font-size: 20px;
        font-weight: 400;
        color: black;
    }
    .introduce{
        color: #606266;
        padding-left: 20px;
    }
    /* .content introduce{

    } */
</style>
