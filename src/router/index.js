import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'//登陆组件
import Main from '@/components/rukou/mains'//入口组件
import Right from '@/components/right'//右边主体组件
import Meishi from '@/components/zhuti/meishi'//美食组件
import Jiudian from '@/components/zhuti/jiudian'//酒店组件

Vue.use(Router)

var router=new Router({
  routes: [
  	{
  		path:'/login',
  		name:'Login',
  		component:Login
  	},
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta:{//设置登陆权限
      	"dl":true
      },
      children:[
	    {
	    	path:'/meishi',
	    	name:'Meishi',
	    	component:Meishi,
	    	meta:{//设置登陆权限
      			"dl":true
      		},
	    },
	    {
	    	path:'/jiudian',
	    	name:'Jiudian',
	    	component:Jiudian,
	    	meta:{//设置登陆权限
      			"dl":true
      		},
	    }
      ]
    }, 
  ]
});
export default router;
//路由守卫
router.beforeEach(function(to,from,next){
	if(to.meta.dl){// 判断该路由是否需要登录权限
		if(sessionStorage.getItem("usertitle") && sessionStorage.getItem("userpassword")){
			next();
		}else{
		 router.push('/login');
		}
	}
	next();
});
