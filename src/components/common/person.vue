<template>
    <div class="person-item" @mouseover='change()' @mouseout='back()'>

		<div class ="left-image">
			<img src="../../assets/logo.png" id="img" ref="img">
		</div>

		<div class="right">
			<h2>{{value.name}}</h2>
            <p>{{value.college}}</p>
			<p>{{value.introduce}}</p>
		</div>
		
	</div>
</template>

<script>
export default {
    props:{
        value:{
            type:Object
        }
    },
    methods:{
        change:function(){
            var oimg=this.$refs.img;
            oimg.style.transform='scale('+1.1+')';
        },
        back:function(){
            var oimg=this.$refs.img;
            oimg.style.transform='scale('+1+')';
        }
    }
}
</script>

<style scoped>
    .person-item{  
		height: 120px;
		color: #b1adaa;
		padding: 15px;
		transition: box-shadow 1s ease;
		border-bottom: 1px solid #b1adaa;
	}

	.person-item:hover{
		 box-shadow: 2px 2px 30px 5px #888888;
	}
	.person-item .left-image{
		float: left;
		overflow: hidden;
		width: 90px;
		height: 110px;
	}
	.person-item .left-image #img{
		transition: transform 0.6s
	}   
	.person-item .right{
		float: left;
		font-size: 15px;
		width: 540px;
        height: 150px;
        margin-left: 20px;
        margin-top: 10px;
		overflow: hidden;
    }
    .right p{
        margin-top: 5px;
    }
    .right h2{
        color: #303133;
    }
</style>