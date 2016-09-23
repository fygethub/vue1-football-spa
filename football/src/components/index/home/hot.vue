<template>
	<div>
		<nav id="nav">
			<ul class="nav clearfix">
				<li v-link="{path:'/index/home/hot/live',activeClass:'nav-click'}">足球现场</li>
				<li v-link="{path:'/index/home/hot/life',activeClass:'nav-click'}">足球生活</li>
				<li v-link="{path:'/index/home/hot/girl',activeClass:'nav-click'}">足球美女</li>
			</ul>
		</nav>
		<router-view keep-alive></router-view>
	</div>
</template>
<script>
	
</script>
<style>
#nav{width: 100%;background:#fff;position: fixed;top:.88rem;z-index: 10 }
#nav .nav{width: 6.4rem;margin:0 auto;display: flex;justify-content: space-between;}
.nav li{flex: 1;color:#656565;box-sizing: border-box;text-align:center;height: .71rem;line-height: .71rem;font-size:.3rem;padding:0 .1rem;width: 2rem;border-bottom:1px solid #f1f1f1;font-weight: bold;}
#nav .nav-click{color:#63d985;border-bottom:.05rem solid #63d985;}
</style>