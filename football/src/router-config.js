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
                                'live': {component:require('components/index/home/hot/live.vue')},
                                'life': {component:require('components/index/home/hot/life.vue')},
                                'girl': {component:require('components/index/home/hot/girl.vue')}
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
}