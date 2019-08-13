<template>
	<div id="z_top">
		<div class="left">
			<img src="../../static/images/lddt.png" alt="">
			<p class="title">垫窝窝后台管理系统</p>
		</div>
		<div class="right">
			<div class="to">
				<div class="name">
					<i style="margin-right: 5px;" class="ys">欢迎</i>
					<span class="ys" v-bind:title="name">{{name}}</span>
				</div>
				<div class="sx"></div>
				<div class="off" v-on:click='tc'>退出系统</div>
			</div>
			<div class="to">
				<!-- {{time | formatDate}} -->
				{{date}}
			</div>
		</div>
	</div>
</template>

<script>
export default{
	'name':'top',
	data(){
		return{
			name:'垫窝窝',
			time:Date.parse(new Date()),
			date:'',
		}
	},
	//实例创建以前
	created(){
		this.timer=setInterval(this.Time,1000);
	},
	//真实Dom已经存在
	mounted(){

	},
	//实例销毁以前
	beforeDestroy(){
		if (this.timer) {
      		clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    	}
	},
	//过滤器
	filters:{
		formatDate:function(value){
				let date = new Date(value);
    			let y = date.getFullYear();
    			let MM = date.getMonth() + 1;
    			MM = MM < 10 ? (0 + MM) : MM;
    			let d = date.getDate();
    			d = d < 10 ? (0 + d) : d;
    			let h = date.getHours();
    			h = h < 10 ? (0 + h) : h;
    			let m = date.getMinutes();
    			m = m < 10 ? (0 + m) : m;
    			let s = date.getSeconds();
    			s = s < 10 ? (0 + s) : s;
    			return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
		}
	},
	methods:{
		//时间方法
		Time:function(){
			let sj=new Date();
			let n=sj.getFullYear();//年
			let y=sj.getMonth()+1;//月
			let r=sj.getDate();//日
			let x=sj.getDay();// 星期
			let s=sj.getHours()+':'+sj.getMinutes()+':'+sj.getSeconds();//小时
			this.date=n+'-'+y+'-'+r+' '+s;
		},
		//退出
		tc:function(){
			sessionStorage.removeItem('usertitle');//删除账号
			sessionStorage.removeItem('userpassword');//删除密码
			sessionStorage.removeItem('ID');//删除左侧列表点击ID
			this.$router.replace({
				path:'/login'
			});
		}
	}
}
</script>

<style scoped>
	#z_top{
		width:100%;
		height: 100%;
		background: #313133;
		/*background: url(../../static/images/top.png) no-repeat;*/
		background-size: 100% 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.left{
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-left: 30px;
	}
	.left img{
		width:50px;
		height:50px;
	}
	.left p {
    	font-size: 30px;
    	letter-spacing: 8px;
    	margin-left: 10px;
        background: linear-gradient(90deg,#FFF1EB, #ACE0F9);
    	-webkit-background-clip: text;
    	color: transparent;
	}
	.right{
		width:260px;
		height:70px;
		margin-right: 30px;
	}
	.to{
		width:100%;
		height: 50%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 16px;
		color:#fff;
	}
	.name{
		width:45%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.sx{
		width:2px;
		height:60%;
		background:#fff;
	}
	.off{
		width: 45%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		letter-spacing: 2px;
		color:#fff;
		transition:transform 0.5s;
		cursor:default;
	}
	.ys{
		font-size: 16px;
		color: #fff;
		overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	width: 63px;
    	text-align: center;
	}
	.off:hover{
		transform: scale(1.1,1.1);
	}
</style>