<template>
	<div id="left">
		<div id="left_con" v-for="(list,index) in one_title">
			<div class="title" v-on:click='one_click(list,index)'>
				<div class="zt">
					<span class="icon iconfont">{{list.ico}}</span>
				</div>
				<p>{{list.title}}</p>
				<div class="zt Img">
					<img :src="list.img" alt="">	
				</div>
			</div>
			<div class="two_title" v-for="(two_list,index) in list.two_title" v-show="list.flag" v-on:click='two_click(two_list,index,two_list.id)'>
				<div class="opt">
					<i class="icon iconfont" :style="{fontSize: two_list.fontsize,color:two_list.colors,}">		{{two_list.ico}}
					</i>
					<div class="three_name" :style="{fontSize: two_list.fontsize,color:two_list.colors,}">		{{two_list.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		'name':'left',
		data(){
			return{
				'sh':0,
				'one_title':[
					{
						flag:true,
						'ico':'\ue648',
						'title':'文章发表',
						'img':'../../static/images/jian.png',
						'two_title':[
							{
								'id':0,
								'ico':'\ue60c',
								'name':'添加',
								'fontsize':'26px',
								'colors':'#ff0042',
							},
							{
								'id':1,
								'ico':'\ue6bc',
								'name':'嘲讽',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':2,
								'ico':'\ue694',
								'name':'视频',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':3,
								'ico':'\ue622',
								'name':'音乐',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':4,
								'ico':'\ue635',
								'name':'其它',
								'fontsize':'18px',
								'colors':'',
							},
						],
					},
					{
						flag:false,
						'ico':'\ue612',
						'title':'文章修改',
						'img':'../../static/images/jia.png',
						'two_title':[
							{
								'id':5,
								'ico':'\ue60c',
								'name':'美食',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':6,
								'ico':'\ue6bc',
								'name':'酒店',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':7,
								'ico':'\ue694',
								'name':'休闲娱乐',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':8,
								'ico':'\ue622',
								'name':'导购',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':9,
								'ico':'\ue635',
								'name':'其它',
								'fontsize':'18px',
								'colors':'',
							},
						],
					},
					{
						flag:false,
						'ico':'\ue603',
						'title':'文章审核',
						'img':'../../static/images/jia.png',
						'two_title':[
							{
								'id':10,
								'ico':'\ue60c',
								'name':'美食',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':11,
								'ico':'\ue6bc',
								'name':'酒店',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':12,
								'ico':'\ue694',
								'name':'休闲娱乐',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':13,
								'ico':'\ue622',
								'name':'导购',
								'fontsize':'18px',
								'colors':'',
							},
							{
								'id':14,
								'ico':'\ue635',
								'name':'其它',
								'fontsize':'18px',
								'colors':'',
							},
						],
					},
					{
						flag:false,
						'ico':'\ue694',
						'title':'认证审核',
						'img':'../../static/images/jia.png',
						'two_title':[
							{
								'id':15,
								'ico':'\ue603',
								'name':'实名认证',
								'fontsize':'18px',
								'colors':'',
							},
						],
					},
				],
			}
		},
		created(){
			
		},
		mounted(){
			this.ej_style();
		},
		//放法
		methods:{
			//一级菜单点击方法
			one_click:function(list,index){
				//遍历数据初始化flag
				// this.one_title.forEach(function(item,i,arr){
				// 	if(item.flag!==this.one_title[index].flag){
				// 		item.flag=false;
				// 	}
				// },this);
				if(list.img=='../../static/images/jia.png'){
					list.img='../../static/images/jian.png'
				}else{
					list.img='../../static/images/jia.png'
				}
				//如果flag=false就令其改变为true
				list.flag=!list.flag;
			},
			//二级菜单点击方法
			two_click:function(list,index,id){
				let Id=id;
				sessionStorage.setItem('ID',Id);//存当前点击的id
				//初始化二级菜单字体
				this.one_title.forEach(function(item){
					item.two_title.forEach(function(two_item,i,arr){
							two_item.fontsize='18px';
							two_item.colors='';
					},this)
				});
				if(list.fontsize=='18px' || list.colors==''){
					list.fontsize='26px';
					list.colors='#ff0042';
				}
				if(id==0){
					this.$router.push({
						path:'/meishi'
					});
				}
				if(id==1){
					this.$router.push({
						path:'/jiudian'
					});
				}
				if(id==2){
					this.$router.push({
						path:'/video'
					});
				}
			},
			//刷新不改变二级菜单样式
			ej_style:function(){
				let ses=sessionStorage.getItem('ID');//存密码
				for(let i=0;i<this.one_title.length;i++){
					for(let j=0;j<this.one_title[i].two_title.length;j++){
						this.one_title[i].two_title[j].colors="";
						this.one_title[i].two_title[j].fontsize="18px";
						if(ses==this.one_title[i].two_title[j].id){
							this.one_title[i].two_title[j].colors="#ff0042";
							this.one_title[i].two_title[j].fontsize="26px";
						}
					}
				}
			}
		}
	}
</script>

<style scoped>
	#left{
		width:100%;
		height:100%;
		overflow: auto;
	}
	#left_con{
		width:95%;
		height:auto;
		margin:0 auto;
		margin-top: 10px;
	}
	.title{
		width:100%;
		height:50px;
		margin-bottom: 10px;
		border-radius: 3px;
		/*background: #34acf1;*/
		background-color: #313133;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor:default;
	}
	.zt{
		width:25%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.zt span{
		font-size: 36px;
		color:#f5f5f5;
	}
	.zt img{
		width:20px;
		height: 20px;
	}
	.title p{
		width:50%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		letter-spacing: 3px;
		color:#f5f5f5;
	}
	.two_title{
	    width: 200px;
	    height: auto;
	    margin: 0 auto;
	    margin-top: 10px;
	    cursor: pointer;
	    color: #f5f5f5;
	    font-size: 16px;
	}
	.two_title .opt{
	    width: 100%;
	    height: 40px;
	    display: flex;
	    align-items: center;
	    cursor: pointer;
	    font-size: 20px;
	}
	.two_title .opt i {
	    margin-left: 40px;
	    margin-right: 24px;
	}
	.three_title{
    	color: #34acf1d4;
	}
	.fontSize{
		font-size: 24px;
	}
</style>