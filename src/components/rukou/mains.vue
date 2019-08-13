<template>
	<div id="box">
		<div id="top">
			<Top></Top>
		</div>
		<div id="content">
			<div id="left"><Left></Left></div>
			<div id="right"><Right></Right></div>
		</div>
	</div>
</template>

<script>
import Top from '../top.vue'//头部组件
import Left from '../left.vue'//列表组件
import Right from '../right.vue'//主体内容组件
export default {
  name: 'mains',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //组件注册
  components:{
  	Top,Left,Right
  }
}
</script>

<style scoped>
	#box{
		width:100%;
		height:100%;
		position: relative;
	}
	#top{
		width:100%;
		height: 80px;
	}
	#content{
		width:100%;
		position: absolute;
		top:80px;
		left:0;
		bottom:0;
	}
	#left{
		width:245px;
		height: 100%;
		float: left;
		/*background: #f5f5f5;*/
		background-color: #454547;
	}
	#right{
		margin-left: 245px;
		height: 100%;
	}
</style>