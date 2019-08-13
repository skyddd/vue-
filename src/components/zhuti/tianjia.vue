<template>
	<div id="tianjia">
		<div id="main">
			<div id="title">
				<router-link to="/meishi">
					<span class="icon iconfont" style="color:#ff0042;font-size: 28px;">&#xe63a;</span>
					内网映射
				</router-link>
			</div>
			<div id="ts">
				<p>1、用于微信推广的映射，请使用已经备案的顶级域名（推荐：花生壳铂金版，送顶级域名（含备案），一站式解决方案）</p>
				<p>2、若顶级域名需使用内网穿透功能，NS管理必须选择“Oray DNS解析”，48小时后生效即可使用</p>
			</div>
			<form id="bd" action="">
				<div class="list">
					<h1>应用名称:</h1>
					<input type="text" name="" id="" value="" class="wb" placeholder="例如：OA系统" ref="mc">
				</div>
				<div class="list">
					<h1>应用图标:</h1>
					<div class="yytb">
						<div class="radio" v-for="(ico,index) in yytb" @click='yytb_click(ico,index)' >
							<span :class="ico.Class" v-show='ico.flag'></span>
							<img :src="ico.Img" alt="">
						</div>
					</div>
				</div>
				<div class="list">
					<h1>选择域名:</h1>
					<select name="" id="ym" class="wb" style="height: 40px;width: 485px;" ref="ym">
						<option value="0">请选择</option>
						<option value="http://2603e46g83.qicp.vip">2603e46g83.qicp.vip</option>
					</select>
				</div>
				<div class="list">
					<h1>内网主机:</h1>
					<input type="text" name="" id="" placeholder="内网主机的IP地址" class="wb" ref="zj">
				</div>
				<div class="list">
					<h1>内网端口:</h1>
					<input type="text" name="" id="" placeholder="内网主机的端口号" class="wb" ref='dk'> 
				</div>
				<div class="list">
					<div id="sxx" @click='qd_click'>确定</div>
					<div class=""></div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default{
		'name':'tianjia',
		data(){
			return{
				//应用图标
				'yytb':[
					{
						'Class':'radio-btn',
						'flag':false,
						'Img':'../../../static/images/app_logo1.png',
					},
					{
						'Class':'radio-btn',
						'flag':false,
						'Img':'../../../static/images/app_logo2.png',
					},
					{
						'Class':'radio-btn',
						'flag':false,
						'Img':'../../../static/images/app_logo3.png',
					},
					{
						'Class':'radio-btn',
						'flag':false,
						'Img':'../../../static/images/app_logo4.png',
					},
					{
						'Class':'radio-btn',
						'flag':false,
						'Img':'../../../static/images/app_logo5.png',
					},
					{
						'Class':'radio-btn',
						'flag':false,
						'Img':'../../../static/images/app_logo6.png',
					},
				],
				//放表单提交数据
				'ico_data':[],//放应用图标
				'form_data':[],//文本框数据
				'imgs':'',
			}
		},
		//实例创建成功
		created(){
			
		},
		mounted(){
			console.log(this.$route.query.index);
			if(this.$route.query.index==undefined){
				return;
			}
			if(this.$route.query.index!=null ||this.$route.query.index!=''){
				let hqData=JSON.parse(localStorage.getItem('key'));
				this.$refs.mc.value=hqData[this.$route.query.index].mc;
				this.$refs.ym.value=hqData[this.$route.query.index].ym;
				this.$refs.zj.value=hqData[this.$route.query.index].zj;
				this.$refs.dk.value=hqData[this.$route.query.index].dk;
				for(let i=0;i<this.yytb.length;i++){
					if(this.yytb[i].Img==hqData[this.$route.query.index].Img){
						this.yytb[i].flag=true;
					}
				}
			}
		},
		//方法
		methods:{
			//应用图标
			yytb_click:function(ico,index){
				for(let i=0;i<this.yytb.length;i++){
					if(this.yytb[i].flag==true){
						this.yytb[i].flag=false;
					}
				}
				ico.flag=true;
				if(ico.flag==true){
					let Img={'Img':ico.Img}
					this.imgs=ico.Img;
				}
			},
			//文本框
			splicename:function(e){
				var val={'val':e.target.value};
			},
			//确定提交
			qd_click:function(){
				// var sb=this.ico_data.concat(this.form_data);
				let mc=this.$refs.mc.value;
				let Img=this.imgs;
				let ym=this.$refs.ym.value;
				let zj=this.$refs.zj.value;
				let dk=this.$refs.dk.value;
				let sb={
					'mc':mc,
					'Img':Img,
					'ym':ym,
					'zj':zj,
					'dk':dk
				}
				//否则
				let hqData=JSON.parse(localStorage.getItem('key'));//获取存入在localStorage中的数据
				if(this.$route.query.index!=null || this.$route.query.index!=undefined ){
					hqData.splice(this.$route.query.index,1,sb);
					localStorage.setItem('key',JSON.stringify(hqData));
					this.$router.push('/meishi');
					return;
				}
				this.form_data.push(sb);//把内容添加到数组中
				if(hqData==null){
					//如果localStorage中的数据等于null的话，就像localStorage里存入this.form_data
					localStorage.setItem('key',JSON.stringify(this.form_data));//
				}else{
						var ss=this.form_data.concat(hqData);
						localStorage.setItem('key',JSON.stringify(ss));
				}
				// localStorage.setItem('key',JSON.stringify(this.form_data));
				this.$router.push('/meishi');
			},
		},
	}
</script>

<style scoped>
	#tianjia{
		width:100%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #f5f5f5;
		overflow: auto;
	}
	#main{
		width:95%;
		height:95%;
		background: #fff;
	}
	#title{
		width:100%;
		height:80px;
		display: flex;
		align-items: center;
		font-size: 20px;
	}
	#title a{
		margin-left: 20px;
	}
	#ts{
		width:100%;
		height: auto;
		background: #ebeef7;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px 0 20px 0;
	}
	#ts p{
		width:90%;
		height:25px;
		font-size: 14px;
		color: #6a6a6a;
	}
	#bd{
		width:90%;
		height:auto;
		margin:0 auto;
		margin-top: 20px;
	}
	.list{
		width:100%;
		height:70px;
		display: flex;
		align-items: center;
	}
	.list h1{
		width:10%;
		height:100%;
		text-align: center;
		line-height: 70px;
		color:#000;
		font-size: 16px;
	}
	#sxx{
		width:130px;
		height: 40px;
		border-radius: 20px;
		text-align: center;
		line-height: 40px;
		background-color: #ff0042;
		color:#fff;
		font-size: 16px;
		border:none;
	}
	.wb{
		width:447px;
		height:26px;
		border-radius: 20px;
		border: 1px solid #dfdfdf;
		padding: 7px 18px;
    	color: #3a3a3a;
    	outline: 0;
    	font-size: 16px;
	}
	.yytb{
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.radio{
		width:40px;
		height:40px;
		margin-right: 20px;
		position:relative;
	}
	.radio img{
		width:100%;
		height:100%;
	}
	.radio-btn {
	    width: 14px;
	    height: 14px;
	    position: absolute;
	    bottom: 1px;
	    right: 1px;
	    background-color: #53D115;
	    border-color: #53D115;
	}
	.radio-btn:after {
    	content: '';
    	position: absolute;
    	width: 6px;
    	height: 3.5px;
    	left: 3px;
    	top: 3px;
    	border-left: 1px solid #fff;
    	border-bottom: 1px solid #fff;
    	transform: rotate(-45deg);
    	transition: all .2s;
	}

</style>