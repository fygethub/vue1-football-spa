<template>
	<div>
		<header id="header_mine">
			<h1 class="mauto textcenter">个人中心</h1>
		</header>
		<section id="contentbar_mine">
			<div class="content mauto">
				<div class="msghead">
					<div class="logo">
						<img src="/static/img/h_pic.jpg" alt="logo">
					</div>
					<div class="intro">
						<h3 class="name">我叫小萌</h3>
						<p>我是小萌我怕谁? 哈哈哈哈!</p>
					</div>
				</div>
				<ul class="subnav">
					<li class="now">照片 ( 1 )</li>
					<li>关注 ( 3 )</li>
					<li>粉丝 ( 8 )</li>
				</ul>
			</div>
			<router-view></router-view>
			<!-- <ul class="sun_content">
				<li><img src="/static/img/sub_pic1.jpg" alt="">
				<img src="/static/img/sub_pic1.jpg" alt=""></li>
				<li></li>
				<li></li>
			</ul> -->
		</section>
	</div>
</template>
<script>
	
</script>
<style>
/*--------------------------*/
#header_mine{width: 100%;background: #0cc440;position: fixed;z-index: 10}
h1{height: .88rem;width: 5.8rem;color:#fff;font-size:.4rem;line-height: .88rem}
/*-content-*/
#contentbar_mine{background: #f1f1f1;padding-top:.1rem;top:.9rem;position: relative;margin-bottom: .9rem;}
#contentbar_mine .content{width: 6.4rem;position: fixed;z-index: 9;top:.88rem;}

#contentbar_mine .content .msghead{background: #fff;display: flex;flex-direction: row;}
#contentbar_mine .msghead .logo{width: 1.37rem;height: 1.42rem;}
#contentbar_mine .logo img{width: 100%;height: 100%;}
#contentbar_mine .msghead .intro{flex: 2;}
#contentbar_mine .msghead .intro h3{color:#000;width: 3.6rem;height: .82rem;line-height: .95rem;}
#contentbar_mine .msghead .intro p{height: .6rem;font-size:.25rem;color:#ccc;font-family: '微软雅黑'}
#contentbar_mine .msghead .zan{flex: 1;color:#ccc;padding-top:.25rem;}
#contentbar_mine .msghead .zan b{font-size:.3rem;}
#contentbar_mine .msghead .zan p{width: .75rem;height: .35rem;text-align:center;font-size: .25rem;font-family: '#contentbar_mine 微软雅黑';border-radius: .05rem;margin-top:.3rem;padding:.02rem;margin-left:.4rem;background: #e5e5e5;color:#fff;}
#contentbar_mine .msghead .zan .click{background: #0cc440;color:#fff;}

#contentbar_mine .content .subnav{display: flex;align-content: space-around;background: #fff;}
#contentbar_mine .subnav li{padding:.02rem 0;box-sizing: border-box;flex: 1;text-align:center;font-family: '微软雅黑';color:#b1b1b1;}
#contentbar_mine .subnav li.now{color:#0cc440;border-bottom:.05rem solid #0cc440;}
#contentbar_mine .sun_content{position: relative;top:1.8rem;margin-bottom: .9rem;}
</style>