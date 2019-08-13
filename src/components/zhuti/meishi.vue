<template>
	<div id="meishi">
		<ul id="top">
			<li v-for="(list,index) in info_list">
				<div class="wrap">
					<p class="val">{{list.val}}</p>
					<p class="til">{{list.til}}</p>
				</div>
				<div class="bottom_box">
					<div class="con_box">{{list.con_box}}</div>
					<div class="operation_box">
						<router-link :to="list.dyto" @click.native='list.function'>
							{{list.dy}}
						</router-link>	
						<span class="divide">{{list.ds}}</span>
						<router-link :to="list.deto">{{list.de}}</router-link>	
					</div>
				</div>
			</li>
		</ul>
		<div id="content">
			<ul id="nairong">
				<li v-on:mouseenter='enter' v-on:mouseleave='leave' @click='tianjia'>
					<i class="icon iconfont" :style='{color:color,}'>&#xe660;</i>
				</li>
				<li class="Li" v-for="(tj,index) in tjdata">
					<div id="li_main">
						<p class="li_title">
							<img :src="tj.Img" alt="">{{tj.mc}}
						</p>
						<div class="li_dz">
							<h1>访问地址</h1>
							<router-link :to='tj.ym'>{{tj.ym}}</router-link>
							<!-- <span></span> -->
						</div>
						<div class="li_dz">
							<h1>内网主机</h1>
							<span>{{tj.zj}}</span>
						</div>
						<div class="li_dz">
							<h1><a @click='bj(tj,index)'>编辑</a></h1>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div id="mask" v-show="flag" >
			<div class="oui-mask animated bounceInDown">
				<div class="mask_title">
					<p>配置清单</p>
					<i class="icon iconfont" @click='off_click'>&#xe639;</i>
				</div>
				<div class="oui_list" v-for="(list,index) in pzqd">
					<div class="list_left">
						<span class="list_title">{{list.title1}}</span>
						<span>{{list.data1}}</span>
					</div>
					<div class="list_left">
						<span class="list_title">{{list.title2}}</span>
						<span>{{list.data2}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	'name':'meishi',
	data(){
		return{
			//top数据
			'info_list':[
				{
					'val':'体验版（内网穿透）',
					'til':'服务级别',
					'con_box':'',
					'dy':'配置清单',
					'dyto':'',
					'function':this.mask_click,
					'de':'升级',
					'deto':'/login',
					'ds':'|',
				},
				{
					'val':'0M',
					'til':'带宽升级',
					'con_box':'已分配0M,待分配0M',
					'dy':'',
					'dyto':'',
					'function':'',
					'de':'升级',
					'deto':'/login',
					'ds':'',
				},
				{
					'val':'2条',
					'til':'映射数',
					'con_box':'每日凌晨自动清除30天无流量映射',
					'dy':'',
					'dyto':'',
					'function':'',
					'de':'新增数量',
					'deto':'/login',
					'ds':'',
				},
				{
					'val':'1GB',
					'til':'流量',
					'con_box':'已使用7MB,待使用1017MB',
					'dy':'清单',
					'dyto':'',
					'function':'',
					'de':'不限流量',
					'deto':'/login',
					'ds':'|',
				},
			],
			flag:false,//遮罩
			color:'',//加号
			//配置清单数据
			'pzqd':[
				{
					'title1':'服务器集群',
					'data1':'15台',
					'title2':'并发连接数',
					'data2':'50个',
				},
				{
					'title1':'服务器线路',
					'data1':'1条',
					'title2':'机房线路',
					'data2':'单线',
				},
				{
					'title1':'等待重连',
					'data1':'60秒',
					'title2':'端口映射',
					'data2':'2条',
				},
				{
					'title1':'售后顾问',
					'data1':'-',
					'title2':'带宽速度',
					'data2':'1M',
				},
				{
					'title1':'内网穿透',
					'data1':'支持',
					'title2':'花生壳流量',
					'data2':'1G/月',
				},
			],
			//添加的数据
			'tjdata':'',
		}
	},
	//实例创建成功对数据能进行操作
	created(){
		this.sy_load();
		this.hq_data();
	},
	//所有的方法
	methods:{
		//遮罩点击方法
		mask_click:function(){
			this.flag=!this.flag;
		},
		//关闭遮罩方法
		off_click:function(){
			this.flag=false;
		},
		//空函数
		null_click:function(){

		},
		//适应点击方法
		sy_load:function(){
			this.info_list[3].function=this.null_click;
		},
		//添加滑入事件
		enter:function(){
			this.color='rgb(255, 0, 66)';
		},
		leave:function(){
			this.color='';
		},
		//添加
		tianjia:function(){
			this.$router.replace({
				path:'/tianjia'
			});
		},
		//获取添加页面数据
		hq_data:function(){
			let hqData=JSON.parse(localStorage.getItem('key'));
			this.tjdata=hqData;
			localStorage.setItem('key',JSON.stringify(this.tjdata));
		},
		//编辑
		bj:function(data,index){
			let hqData=JSON.parse(localStorage.getItem('key'));
			this.$router.push({
				path:'/tianjia',
				query:{
					'index':index
				}
			});
		}
	}
}
</script>

<style scoped>
	#meishi{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	#top{
		width:100%;
		height: 160px;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #545557;
	}
	#top li{
		width:24%;
		height:100%;
		position: relative;
	}
	#top li:after{
		content: '';
		position:absolute;
		right:0;
		top:0;
		bottom:0;
		width:1px;
		background: #4a4b4d;
	}
	.wrap{
		width:100%;
		height:125px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 24px;
	}
	.val{
		width:225px;
		height:34px;
		color: #e6e6e6;
		margin-bottom: 8px;
	}
	.til{
		width:225px;
		height:18px;
		font-size: 16px;
		
		color:#999;
	}
	.bottom_box{
		width:95%;
		height:18px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin:0 auto;
	}
	.con_box{
		width:60%;
		height:100%;
		color:#999;
		line-height: 18px;
		font-size: 12px;
		overflow: hidden;
	}
	.operation_box{
		width:40%;
		height:100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.operation_box a{
		color:#d1d1d1;
		font-size: 12px;
	}
	.operation_box span{
		color:#999;
		font-size: 12px;
	}
	#content{
		flex: 1;
		overflow: auto;
	}
	#mask{
		width:100%;
		height:100%;
		background: rgba(0,0,0.1,0.5);
		position: absolute;
		top:0;
		left:0;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.oui-mask{
		width:546px;
		height: auto;
		background: #fff;
    	border-radius: 4px;
    	padding-bottom: 20px;
	}
	.mask_title{
		width:90%;
		height:50px;
		margin:0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.mask_title p{
		font-size: 18px;
		color:#000;
		font-weight: bold;
	}
	.mask_title i{
		cursor:default;
	}
	.oui_list{
		width:85%;
		height:45px;
		margin:0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.list_left{
		width:180px;
		height:40px;
		display: flex;
		align-items: center;
	}
	.list_title{
		margin-right: 20px;
		margin-left: 20px;
		width:80px;
		display: flex;
		justify-content : flex-end;
	}
	.oui_list:nth-child(2n){
		background: #f5f5f5;
	}
	#nairong{
		width:98%;
		margin:0 auto;
		margin-top: 10px;
	}
	#nairong li{
		width:30%;
		height:220px;
		box-shadow: 0 5px 30px rgba(51,51,51,0.25);
		float: left;
		margin-right: 35px;
		margin-bottom: 10px;
	}
	#nairong li:nth-child(1){
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#nairong li:nth-child(1) i{
		font-size: 50px;
		color:#999;
	}
	.Li{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#li_main{
		width:90%;
		height:90%;
	}
	.li_title{
		width:100%;
		height:40px;
		display: flex;
		align-items: center;
		font-size: 18px;
		color:#666;
		margin-bottom: 20px;
	}
	.li_title img{
		width:30px;
		height:30px;
		margin-right: 15px;
	}
	.li_dz{
		width:100%;
		height:auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.li_dz h1{
		width:100%;
		height:28px;
		font-size: 14px;
		color:#999;
		line-height: 20px;
	}
	.li_dz a{
		width:100%;
		height: 28px;
		color:blue;
		font-size: 14px;
		line-height: 20px;
	}
</style>