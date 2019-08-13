<template>
	<div id="jiudian">
		<div id="con" ref='con'>
			 <!-- <p v-for='(x,index) in c' :id="x.ref" :style='{background: x.bg,}' :ref='x.ref' @click='dj(x,index)'></p> -->
		</div>
	</div>
</template>

<script>
	export default{
		'name':'jiudian',
		data(){
			return{
				'c':[],
				'str':'大SB你好啊！',
				'i':0,
			}
		},
		//实例创建成功 可以操作数据 dom未存在
		created(){
			// this.cj();
			console.log(this.str.length);
		},
		mounted(){
			// this.cj();
			// this.timer=setInterval(this.dj,100);
			this.sb=setInterval(this.hs,500);
		},
		//实例销毁以前
		beforeDestroy(){
			if (this.timer) {
      			clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    		}
    		if(this.sb){
    			clearInterval(this.sb);
    		}
		},
		//方法
		methods:{
			hs:function(){
				this.i++;
				this.$refs.con.innerHTML=this.str.slice(0,this.i)+'_';
				if(this.i>=this.str.length){
					this.i=0;
				}
			},
			//取随机颜色，并赋值给对应Dom
			cj:function(){
				for(let i=0;i<101;i++){
					let r, g, b;
					r = Math.floor(Math.random() * 256);
					g = Math.floor(Math.random() * 256);
					b = Math.floor(Math.random() * 256);
					var sb={
						'ref':'d'+i+'',
						'bg':"rgb(" +r + ',' +g+ ',' +b+ ")",
					}
					this.c.push(sb);
				}
			},
			//点击其他所有Dom变色
			dj:function(x,index){
				for(let i=0;i<this.c.length;i++){
					let r, g, b;
					r = Math.floor(Math.random() * 256);
					g = Math.floor(Math.random() * 256);
					b = Math.floor(Math.random() * 256);
					this.c[i].bg="rgb(" +r + ',' +g+ ',' +b+ ")";
				}
			}
		}
	}
</script>

<style scoped>
	#jiudian{
		width:100%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #000;
	}
	#con{
		width:95%;
		height:90%;
		border:5px solid #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 50px;
		color:#fff;
		letter-spacing: 3px;
		overflow: auto;
	}
	#con p{
		width:100%;
		height:50px;
	}
</style>