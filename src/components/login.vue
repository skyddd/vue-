<template>
	<div id="login"> 
		<div id="top">
			<div id="top_left">
				<img src="../../static/images/logo.png" alt="">
			</div>
			<div id="top_right">
				<div class="right" v-for="(list,index) in title" v-on:mouseenter="enter(list,index)" v-on:mouseleave='leave(list,index)' :style="{color:list.colors,}" v-on:click="js(list.url)">
					{{list.name}}
				</div>
				<div class="ewm" v-show="flag" v-on:mouseenter="enter" v-on:mouseleave="leave">
					<img src="../../static/images/ewm.png" alt="">
				</div>
			</div>
		</div>
		<div id="content">
			<div  id="tj">
				<div class="title">垫窝窝DSB</div>
				<input type="text" name="xm" id="xm" ref='title' placeholder="用户名">
				<input type="password" name="Password" id="Password" ref='Password' placeholder="密码">
				<button class="dl" v-on:click='login_click'>登录</button>
			</div>
		</div>
		<div id="bottom">
			<div class="bottom_top" style="font-size: 14px">
				<a href="">幸吧官网</a>
				<span style="margin: 0 10px;">|</span>
				<a href="">帮助中心</a>
			</div>
			<div class="bottom_top" >
				增值电信业务经营许可证：沪B2-20100004 网站备案： 沪B2-20100004-1    Copyright © 2002-2019 Oray. All Rights Reserved.
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		'name':'login',
		data(){
			return{
				flag:false,
				title:[
					{
						'name':'手机版幸吧管理',
						'colors':'',
						'url':''
					},
					{
						'name':'幸吧助手',
						'colors':'',
						'url':'https://www.jianshu.com/'
					}
				],
			}
		},
		//方法
		methods:{
			//登陆方法
			login_click:function(){
				if(this.$refs.title.value==''){
					alert('账户不能为空');
					return;
				}
				if(this.$refs.Password.value==''){
					alert('密码不能为空');
					return;
				}
				let title=this.$refs.title.value;
				let password=this.$refs.Password.value;
				sessionStorage.setItem('usertitle',title);//存账户
				sessionStorage.setItem('userpassword',password);//存密码
				if(this.$refs.title.value!=='' && this.$refs.Password.value!==''){
					this.$router.replace({
						path:'/meishi'
					});
				}
			},
			//浏览器后退按钮点击事件
			onBrowserBack:function() {
				this.$router.replace({
						path:'/login'
					});
  			},
  			//鼠标滑入方法
  			enter:function(list,index){
  					if(index!==1){
  						this.flag=true;
  					}
  					list.colors='#317ee0';
  			},
  			//鼠标划出
  			leave:function(list,index){
  				this.flag=false;
  				list.colors='';
  			},
  			js:function(url){
  				window.location.href = url;
  			}
		},
		//真实都dom已经存在
		mounted() {
		  // 按需使用：A→B→C就需要页面一进来的时候，就添加一个历史记录
		  window.history.pushState(null, null, document.URL);
		  // 给window添加一个popstate事件，拦截返回键，执行this.onBrowserBack事件，addEventListener需要指向一个方法
		  window.addEventListener("popstate", this.onBrowserBack, false);
		  this.$refs.title.focus();
		},
	}
</script>

<style scoped>
	#login{
		width:100%;
		height: 100%;
		/*background: url(../../static/images/login.jpg) no-repeat;*/
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
	}
	#top{
		width:100%;
		height:100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	#top_left{
		width:200px;
		height:46px;
		margin-left: 50px;
	}
	#top_left img{
		width:100%;
		height:100%;
	}
	#top_right{
		width: 300px;
		height:40px;
		margin-right: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

	}
	.ewm{
		position: absolute;
		bottom:-150px;
		left:0;
		width:150px;
		height:150px;
	}
	.ewm img{
		width:100%;
		height:100%;
	}
	.right{
		width:45%;
		height:100%;
		color: #6a6a6a;
		font-size: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.fg{
		width:1px;
		height:50%;
		background: #e1e1e1;
	}
	#content{
		flex: 1;
	}
	#tj{
		width:500px;
		height:300px;
		margin:0 auto;
		margin-top:80px;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0 5px 30px rgba(51,51,51,0.25);
	}
	.title{
		width:100%;
		height:70px;
		text-align: center;
		line-height: 70px;
		font-size: 26px;
		color:#0da6d6;
		font-weight: bold;
		letter-spacing: 5px;
	}
	#tj input{
		width:90%;
		height:45px;
		/*border-radius: 5px;*/
		border:none;
		border-bottom:1px solid #e0e0e0;
		text-align: center;
		margin-bottom: 25px;
		color:#0da6d6;
		font-size: 18px;
		letter-spacing: 3px;
		outline: 0;
	}
	.dl{
	    width: 300px;
	    height: 50px;
	   	background: #ff0042;
	    font-size: 18px;
	    color:#fff;
	    letter-spacing: 3px;
	    border-radius: 5px;
	    border:none;
	}
	#bottom{
		width:100%;
		height: 60px;
	}
	.bottom_top{
		width:100%;
		height:50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		color:#999999;
	}
</style>