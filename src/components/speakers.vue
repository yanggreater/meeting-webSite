<template>
    <div class="speakers">
        <div class="routerTitle"><span>Plenary Speakers</span></div>
        <div class="content">
            <template v-for="(person,index) in persons">
                <div :key="index"><person :value="person"></person></div>
            </template>
        </div>
    </div>
</template>

<script>
import $ from '../libs/util.js'
import Person from './common/person.vue'
export default {
    data() {
        return{
            persons:[
                {name:'杨景校',college:'HZAU',introduce:'信息学院计算机专业-沸点工作室web组'},
                {name:'杨景校',college:'HZAU',introduce:'信息学院计算机专业-沸点工作室web组'},
                
            ]
        }
    },
    components:{
        Person
    },
    created(){
        $.ajax.get('/speakers').then((res) => {
            this.persons = res;
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>
