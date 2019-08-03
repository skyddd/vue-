<template>
	<div id="meishi">
		<div id="top">
			<span>美食</span>
		</div>
		<div id="content">
			
		</div>
	</div>
</template>

<script>
export default{
	'name':'meishi',
	date(){
		return{

		}
	},
	//实例创建成功对数据能进行操作
	created(){

	},
	//所有的方法
	methodes:{

	}
}
</script>

<style scoped>
	#meishi{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
	}
	#top{
		width:100%;
		height: 50px;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	#top span{
		margin-left: 20px;
		color: #34acf1;
	    font-weight: bolder;
	    font-size: 20px;
	    letter-spacing: 2px;
	}
	#content{
		flex: 1;
	}
</style>