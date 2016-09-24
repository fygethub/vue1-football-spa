<template>
<div>
	<router-view keep-alive transition="fade" transition-mode="out-in"></router-view>
	<footer id="footer" >
		<ul class="mauto textcenter">
			<li >
				<dl @click="clickIndex"  v-link="{path:'/index/home/'}" activeClass>
					<dt class="iconfont">&#xe604;</dt>
					<dd>首页</dd>
				</dl>
			</li>
			<li>
				<dl v-link="{path:'/index/find'}" @click="clickFind" activeClass>
					<dt class="iconfont">&#xe600;</dt>
					<dd>发现</dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt class="iconfont camara" >&#xe603;</dt>
				</dl>
			</li>
			<li>
				<dl v-link="{path:'/index/mine',activeClass:'v-link-active'}" @click="clickMine">
					<dt class="iconfont">&#xe602;</dt>
					<dd>我的</dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt class="iconfont">&#xe601;</dt>
					<dd>退出</dd>
				</dl>
			</li>
		</ul>
	</footer>
</div>
</template>
<script>
	module.exports = {
		data:function () {
			return {
			}
		},
		methods: {
			clickHot: function () {
				
			},
			clickFocus: function () {
				
			},
			clickFind: function () {

			},
			clickIndex: function () {
				
			},
			clickMine: function () {
			}
		}
	}
</script>
<style>
	/* 动画 */

	/*切换动画*/
	.fade-transition {
	    transition: opacity 0.5s ease;
	}
	.fade-enter,
	.fade-leave {
	    opacity: 0;
	}

	.slip-transition {
		transition:.5s ease;
	}
	.slip-enter,
	.slip-leave {
		height:0;
	}

	/*----------header----------------*/
	.v-link-active{color:#63d985;border-bottom:.05rem solid #63d985;box-sizing:border-box;}
</style>