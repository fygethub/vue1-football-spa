<template>
<div>
	<header id="header_find">
		<h1 class="mauto textcenter">发现</h1>
		<div class="search">
			<input type="text" placeholder="请输入查询项" v-model="searchVal" debounce="500">
			<span @click="searchStart">搜索</span>
		</div>
	</header>
	<section id="contentbar_find">
		<div class="content mauto">
			<div class="msghead" v-for="item in msgs">
				<div class="logo">
					<img :src="item.imgsrc" alt="logo">
				</div>
				<div class="intro">
					<h3 class="name">{{item.name}}</h3>
					<p>{{item.msg}}</p>
				</div>
				<div class="zan">
					<p @click="focusFun($event,$index,item.name)">关注</p>
				</div>
			</div>
		</div>
	</section>
</div>
</template>
<script>
	module.exports = {
		data: function () {
			return {
				msgs:[],
				searchVal:''
			}
		},
		methods: {
			focusFun: function (event,index,name) {
				//向后台发起关注的请求
				this.$http.get('/api/find/focus',{params:{'index':index,'name':name}}).then(function (req) {
					event.target.parentNode.parentNode.className = 'bounceInDown';
					setTimeout(function () {
						console.log(req.data);
						this.msgs = req.data;
					}.bind(this),700);
				},function (error) {
					console.error(error);
				});
			},
			searchStart : function () {
				this.$http.get('/api/find/searchstart',{params:{'name':name}}).then(function (req) {
					this.msgs = req.data;
				},function (error) {
					console.error(error);
				});
			},
		},
		route:{
			activate:function (transition) {
				console.log('find active');
				transition.next();
			},//请求数据
			data: function (transition) {
				this.$http.post('/api/find',{}).then(function (req) {
					console.log(req.data);
					this.msgs = req.data;
					transition.next();
				}, function (error) {
					console.error(error);
				});
			}
		}
	}
</script>
<style>
/*-------------------------------*/
#header_find{width: 100%;background: #0cc440;position: fixed;z-index: 10}
h1{height: .88rem;width: 5.8rem;color:#fff;font-size:.4rem;line-height: .88rem}
#header_find .search{width: 6.4rem;height: .65rem;border-bottom:1px solid #e1e1e1;margin: 0 auto;background: #fff;display: flex;justify-content: space-around;align-items: center;}
#header_find .search input{width: 5.18rem;height: .45rem;border-radius: .05rem;display: block;outline: none;border:0;border-bottom: 1px solid #e1e1e1}
#header_find .search span{width: .90rem;height: .46rem;background: #0cc440;display: block;text-align: center;font-family: '微软雅黑';color:#fff;border-radius: .05rem;font-size: .3rem;}
/*-content-*/
#contentbar_find{background: #fff;padding-top:.1rem;top:1.45rem;position: relative;margin-bottom: .9rem;}
#contentbar_find .content{width: 6.4rem;}

#contentbar_find .content .msghead{background: #fff;display: flex;flex-direction: row;border-bottom:1px solid #e1e1e1;}
#contentbar_find .msghead .logo{width: 1.37rem;height: 1.42rem;border-radius: .9rem;overflow: hidden;margin: .05rem;}
#contentbar_find .logo img{width: 1.37rem;height:  1.42rem;}
#contentbar_find .msghead .intro{flex: 2;}
#contentbar_find .msghead .intro h3{color:#041F4D;width: 3.6rem;height: .82rem;line-height: .95rem;padding-left:.3rem;box-sizing: border-box;}
#contentbar_find .msghead .intro p{height: .6rem;color:#ccc;font-family: '微软雅黑';padding-left: .3rem;line-height: .6rem;box-sizing: border-box;}
#contentbar_find .msghead .zan{flex: 1;color:#ccc;padding-top:.25rem;}
#contentbar_find .msghead .zan b{font-size:.3rem;}
#contentbar_find .msghead .zan p{width: .75rem;height: .35rem;text-align:center;font-family:  '微软雅黑';border-radius: .05rem;padding:.05rem .03rem;margin-left:.4rem;background: #d9d9d5;color:#fff;line-height: .35rem;}
#contentbar_find .msghead .zan .click{background: #0cc440;color:#fff;}

.bounceInDown{animation:bounceOutDown .7s ease both; }


@-webkit-keyframes bounceOutDown {
  20% {
    transform: translate3d(0, 0, 0) rotateX(20deg);
  }

  45% {
    opacity: 1;
    transform: translate3d(1.5rem, -.5rem, 0) rotateX(20deg);
  }

  to {
    opacity: 0;
    transform: translate3d(4rem,10rem, 0) rotateX(45deg);
  }
}
</style>