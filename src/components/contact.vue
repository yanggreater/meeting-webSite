<template>
    <div class="contact">
        <div class="routerTitle"><span>Contact</span></div>
        <div class="content">
            <template v-for="message in messages">
                <div class="name"><span>{{message.name}}</span></div>
                <div><span>TEL: {{message.tel}}</span></div>
                <div><span>Email: {{message.Email}}</span></div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            messages:[
                {name:'李林',tel:'027-87658491',Email:'hzaulilin@mail.hzau.edu.cn'},
                // {name:'杨景校',tel:'15207157721',Email:'915759631@qq.com'},
                // {name:'杨景校',tel:'15207157721',Email:'915759631@qq.com'},
                // {name:'杨景校',tel:'15207157721',Email:'915759631@qq.com'},
            ]
        }
    }
}
</script>

<style scoped>
    .content {
        margin: 15px 0 0 35px;
    }
    .content div{
        margin-bottom: 10px;
    }
    .content .name{
        margin-top: 20px;
        font-size: 18px;
        font-weight: 300;
    }
</style>
