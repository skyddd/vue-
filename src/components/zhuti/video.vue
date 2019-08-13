<template>
	<div id="Videos" >
		<!-- <div class="sb" v-for="(item,index) in sp"  :key="index">
			<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions[index]" >
			</video-player>		
		</div> -->
		<div id="main">
			<div id="left">
				<video-player  class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions" >
				</video-player>		
			</div>
			<div id="right">
				<div id="title">
					<span>视频目录</span>
					<div class="sousuo">
						<input type="text" name="" value="" ref='video_name' @keyup.enter='sousuo_click'>
						<div class="dj" @click='sousuo_click'>
							<i class="icon iconfont" @click='sousuo_click'>&#xe62a;</i>
							<i class="icon iconfont" @click='breaks'>&#xe63a;</i>
						</div>
					</div>
				</div>
				<ul>
					<li v-for='(list,index) in sp1' :style='{color:list.color,}' v-on:click='video_click(index,list)' >{{list.title}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>	

<script>
	export default{
		'name':'videos',
		data(){
			return{
				sp1:[],//显示数据
				sp2:[],//搜索出来的数据
				sp:[//原始数据
					{
						'v':'../../static/videos/tlbb.mp4',
						'Img':'../../static/images/sds.jpg',
						'title':'扫地僧的一生',
						'color':'rgb(255, 0, 66)',
					},
					{
						'v':'../../static/videos/me.mp4',
						'Img':'../../static/images/pg.jpg',
						'title':'我愿意平凡陪在你身边',
						'color':'',
					},
					{
						'v':'../../static/videos/sh.mp4',
						'Img':'../../static/images/bp.jpg',
						'title':'北漂生活',
						'color':'',
					},
					{
						'v':'../../static/videos/dy.mp4',
						'Img':'../../static/images/dy.jpg',
						'title':'Tony lgy-Astronomia',
						'color':'',
					},
					{
						'v':'../../static/videos/zx.mp4',
						'Img':'../../static/images/zx.jpg',
						'title':'诛仙-胡歌',
						'color':'',
					},
					{
						'v':'../../static/videos/ldj.mp4',
						'Img':'../../static/images/ldj.jpg',
						'title':'梦回鹿鼎记',
						'color':'',	
					},
					{
						'v':'../../static/videos/tlbb.mp4',
						'Img':'../../static/images/sds.jpg',
						'title':'扫地僧的一生',
						'color':'',
					},
					{
						'v':'../../static/videos/me.mp4',
						'Img':'../../static/images/pg.jpg',
						'title':'我愿意平凡陪在你身边',
						'color':'',
					},
					{
						'v':'../../static/videos/sh.mp4',
						'Img':'../../static/images/bp.jpg',
						'title':'北漂生活',
						'color':'',
					},
					{
						'v':'../../static/videos/dy.mp4',
						'Img':'../../static/images/dy.jpg',
						'title':'Tony lgy-Astronomia',
						'color':'',
					},
					{
						'v':'../../static/videos/zx.mp4',
						'Img':'../../static/images/zx.jpg',
						'title':'诛仙-胡歌',
						'color':'',
					},
					{
						'v':'../../static/videos/tlbb.mp4',
						'Img':'../../static/images/sds.jpg',
						'title':'扫地僧的一生',
						'color':'',
					},
					{
						'v':'../../static/videos/me.mp4',
						'Img':'../../static/images/pg.jpg',
						'title':'我愿意平凡陪在你身边',
						'color':'',
					},
					{
						'v':'../../static/videos/sh.mp4',
						'Img':'../../static/images/bp.jpg',
						'title':'北漂生活',
						'color':'',
					},
					{
						'v':'../../static/videos/dy.mp4',
						'Img':'../../static/images/dy.jpg',
						'title':'Tony lgy-Astronomia',
						'color':'',
					},
					{
						'v':'../../static/videos/zx.mp4',
						'Img':'../../static/images/zx.jpg',
						'title':'诛仙-胡歌',
						'color':'',
					},
					{
						'v':'../../static/videos/tlbb.mp4',
						'Img':'../../static/images/sds.jpg',
						'title':'扫地僧的一生',
						'color':'',
					},
					{
						'v':'../../static/videos/me.mp4',
						'Img':'../../static/images/pg.jpg',
						'title':'我愿意平凡陪在你身边',
						'color':'',
					},
					{
						'v':'../../static/videos/sh.mp4',
						'Img':'../../static/images/bp.jpg',
						'title':'北漂生活',
						'color':'',
					},
					{
						'v':'../../static/videos/dy.mp4',
						'Img':'../../static/images/dy.jpg',
						'title':'Tony lgy-Astronomia',
						'color':'',
					},
					{
						'v':'../../static/videos/zx.mp4',
						'Img':'../../static/images/zx.jpg',
						'title':'诛仙-胡歌',
						'color':'',
					},
				],
				playerOptions:'',//视频对象
				styles:new Array(0),//记录点击的id

			}
		},
		created(){
			this.sp1=this.sp;
			// this.vid();//遍历创建多个视频对象
			this.csh();//初始化视频数据
			this.styles.push(0);//加载时初始化点击id
		},
		mounted(){
			// this.vid();
		},
		watch:{
			//初始化搜索视频
			sp1:function(){
				this.sp1[0].color='rgb(255, 0, 66)';
				// this.styles.push(0);
				this.playerOptions={
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
 					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [
						{
							src:this.sp1[0].v,  // 路径
							type: 'video/mp4'  // 类型
						},
					],
					poster:this.sp1[0].Img, //你的封面地址
					// width: document.documentElement.clientWidth,
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.						js无法播放媒体源时显示的默认信息。
					controlBar: {
					  timeDivider: true,
					  durationDisplay: true,
					  remainingTimeDisplay: false,
					  fullscreenToggle: true  //全屏按钮
					}
				}
			},
		},
		//方法
		methods:{
			//初始化视频
			csh:function(){
				this.playerOptions={
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
 					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [
						{
							src:this.sp[0].v,  // 路径
							type: 'video/mp4'  // 类型
						},
					],
					poster:this.sp[0].Img, //你的封面地址
					// width: document.documentElement.clientWidth,
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.						js无法播放媒体源时显示的默认信息。
					controlBar: {
					  timeDivider: true,
					  durationDisplay: true,
					  remainingTimeDisplay: false,
					  fullscreenToggle: true  //全屏按钮
					}
				}
			},
			//点击为视频赋值
			video_click:function(index,list){
				this.styles.splice(0,1,index);//点击当前元素将当前元素下标存入到数组中
				for(let i=0;i<this.sp1.length;i++){
					if(this.sp1[i].color=='rgb(255, 0, 66)'){
						this.sp1[i].color='';
					}
				}
				list.color='rgb(255, 0, 66)';
				this.playerOptions={
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
 					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [
						{
							src:list.v,  // 路径
							type: 'video/mp4'  // 类型
						},
					],
					poster:list.Img, //你的封面地址
					// width: document.documentElement.clientWidth,
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.						js无法播放媒体源时显示的默认信息。
					controlBar: {
					  timeDivider: true,
					  durationDisplay: true,
					  remainingTimeDisplay: false,
					  fullscreenToggle: true  //全屏按钮
					}
				}
			},
			//鼠标划入事件
			enter:function(list,index){
				list.color='rgb(255, 0, 66)';
			},
			//鼠标划出事件
			leave:function(list,index){
				list.color='';
				//划出时数组中记录的下表赋值
				this.sp1[this.styles[0]].color='rgb(255, 0, 66)';
			},
			//视频搜索
			sousuo_click:function(){
				this.sp2=[];
				let V_name=this.$refs.video_name.value;
				for(let i=0;i<this.sp.length;i++){
					if(this.sp[i].title.indexOf(V_name)!=-1){
						this.sp2.push(this.sp[i]);
					}
				}
				if(this.sp2.length!=0){
					this.sp1='';
					this.sp1=this.sp2;
				}else{
					alert('您搜索的没有');
				}
			},
			//刷新视频列表
			breaks:function(){
				this.$refs.video_name.value='';
				if(this.$refs.video_name.value==''){
					for(let i=0;i<this.sp.length;i++){
						this.sp[i].color='';
					}
					this.sp[0].color='rgb(255, 0, 66)';
					this.sp1=this.sp;
				}
			},
			vid:function(){
				for(var i=0;i<this.sp1.length;i++){
					let arrStr={
						playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
	 					autoplay: false, //如果true,浏览器准备好时开始回放。
						muted: false, // 默认情况下将会消除任何音频。
						loop: false, // 导致视频一结束就重新开始。
						preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
						language: 'zh-CN',
						aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
						fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
						sources: [
							{
								src:this.sp1[i].v,  // 路径
								type: 'video/mp4'  // 类型
							},
						],
						poster: this.sp1[i].Img, //你的封面地址
						// width: document.documentElement.clientWidth,
						notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.						js无法播放媒体源时显示的默认信息。
						controlBar: {
						  timeDivider: true,
						  durationDisplay: true,
						  remainingTimeDisplay: false,
						  fullscreenToggle: true  //全屏按钮
						}
					}
					this.playerOptions.push(arrStr);
				}
			},
		}
	}
</script>

<style scoped>
	#Videos{
		width:100%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: auto;
		background: #b5adad;
	}
	#main{
		width:98%;
		height:98%;
		display: flex;
		justify-content: space-between;
	}
	#left{
		width:73%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items:center;
		background: #666;
	}
	.video-player{
		width:93%;
		height:93%;
	}
	#right{
		width:25%;
		height:100%;
		background: #666;
		position: relative;
		overflow: hidden;
	}
	#title{
		width:100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom:1px solid #b5adad;
		position:absolute;
		top:0;
		left:0; 
	}
	#title span{
		width:30%;
		height:100%;
		font-size: 18px;
		color:rgb(255, 0, 66);
		line-height: 50px;
		text-align: center;
	}
	.sousuo{
		width:70%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.sousuo input{
		width:65%;
		height:28px;
		border:none;
		/*border:1px solid #b5adad;*/
		border-radius: 20px 0 0 20px;
		background: #b5adad;
		padding-left: 10px;
		outline: 0;
		color:#fff;
	}
	.sousuo .dj{
		width:30%;
		height:28px;
		background: #b5adad;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-weight: bold;
		/*color:#fff;*/
		border-radius: 0 20px 20px 0;
	}
	.dj i{
		font-size: 20px;
		cursor:pointer;
	}
	.dj i:hover{
		color:rgb(255, 0, 66);
	}
	input::placeholder{
		color:rgb(255, 0, 66);
		font-size: 14px;
	}
	#right ul{
		width:100%;
		height: 90%;
		margin:0 auto;
		margin-top: 50px;
		position: absolute;
		right:-18px;
		/*overflow: auto;*/
		overflow-x: hidden;
		overflow-y: scroll;
		padding-top: 10px;
	}
	#right ul li{
		width:100%;
		height:30px;
		font-size: 16px;
		color:#000;
		margin-bottom: 5px;
		line-height: 30px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		cursor:pointer;
	}
	#right ul li:hover{
		color:rgb(255, 0, 66);
	}
	.sb{
		width:33.3%;
		height:300px;
		display: flex;
		justify-content: center;
		align-items: center;
		float: left;
	}
	
</style>