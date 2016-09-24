module.exports=function(router){
    router.map({
    	'/login':{
             component:require('components/login.vue')
    	 },
         '/register': {
            component:require('components/register.vue')
         },
    	 '/index':{
    	 	component:require('components/index.vue'),
    	 	subRoutes: {
    	 		'/home': {
    	 			component:require('components/index/home.vue'),
                    subRoutes: {
                       '/hot':{
                            component:require('components/index/home/hot.vue'),
                            subRoutes: {
                                'live': {
                                    component:require('components/index/home/hot/live.vue'),
                                    auth:true
                                },
                                'life': {
                                    component:require('components/index/home/hot/life.vue'),
                                    auth:true
                                },
                                'girl': {
                                    component:require('components/index/home/hot/girl.vue'),
                                    auth:true
                                }
                            }
                        },
                        '/focus': {
                            component:require('components/index/home/focus.vue')
                        }
                    }
    	 	   	},
          '/find': {
              component:require('components/index/find.vue')
          },
          '/mine': {
              component:require('components/index/mine.vue')
          }
    	 	}
    	}
 
    });

    router.redirect({
    	'/':'/login',
    })
    router.beforeEach(function (transition) {
        console.log('验证登录!');
        var reglogin = /login$/,
            reregister = /register$/;
       if(reglogin.test(transition.to.path) || reregister.test(transition.to.path)){
            transition.next();
       }else{
          var sessionName = sessionStorage.getItem('username');
          if (!sessionName) 
              transition.redirect('/login');
          transition.next();
       }
       
    })
}