<template>
	<div>
		<section id="contentbar">
		<div class="content mauto">
			<div class="message">
				<div class="msghead">
					<div class="logo">
						<img src="/static/img/h_pic.jpg" alt="logo">
					</div>
					<div class="intro">
						<h3 class="name">我叫小萌</h3>
						<p>我是小萌我怕谁? 哈哈哈哈!</p>
					</div>
					<div class="zan">
						<p><span>382344</span> <b class="iconfont">&#xe605;</b></p>
					</div>
				</div>
				<dl>
					<dt><img src="/static/img/content_pic1.jpg" alt="img" class="content_img"></dt>
					<dd>小丸子啊小丸子!</dd>
				</dl>
			</div>
			<div class="message">
				<div class="msghead">
					<div class="logo">
						<img src="/static/img/h_pic.jpg" alt="logo">
					</div>
					<div class="intro">
						<h3 class="name">我叫小萌</h3>
						<p>我是小萌我怕谁? 哈哈哈哈!</p>
					</div>
					<div class="zan">
						<span>382344 <b class="iconfont">&#xe605;</b></span>
						
					</div>
				</div>
				<dl>
					<dt><img src="/static/img/content_pic1.jpg" alt="img" class="content_img"></dt>
					<dd>小丸子啊小丸子!</dd>
				</dl>
			</div>
		</div>
	</section>
	</div>
</template>
<script>
	
</script>
<style>
/*-content-*/
#contentbar{width:100%;top:.88rem;position: relative; margin-bottom: .9rem;}
#contentbar .content{width: 6.4rem;background: #f1f1f1;}
#contentbar .content .message{background: #fff;margin-bottom:.1rem;}
#contentbar .content .message .msghead{display: flex;flex-direction: row;}
#contentbar .msghead .logo{width: 1.37rem;height: 1.42rem;}
#contentbar .logo img{width: 100%;height: 100%;}
#contentbar .msghead .intro{flex: 2;}
#contentbar .msghead .intro h3{color:#000;width: 3.6rem;height: .82rem;line-height: .95rem;}
#contentbar .msghead .intro p{height: .6rem;font-size:.25rem;color:#ccc;font-family: '微软雅黑'}
#contentbar .msghead .zan{flex: 1;color:#ccc;padding-top:.25rem;}
#contentbar .msghead .zan b{font-size:.3rem;}
#contentbar .message .content_img{width: 6.4rem;height: 5.7rem;}
#contentbar .message dl dd{padding:.1rem .3rem;font-family: '微软雅黑';font-size: .25rem;border:1px solid #f1f1f1;}
</style>