<template>
	<div>
		<header id="header">
			<h1 class="mauto textcenter">
				<div class="headtitle mauto">
					<span class="hot textcenter" v-link="{path:'/index/home/hot/',activeClass:'opc'}">热点</span><span class="focus textcenter" v-link="{path:'/index/home/focus',activeClass:'opc'}">关注</span>
				</div>
			</h1>
		</header>
		<router-view transition=""  keep-alive ></router-view>
	</div>
</template>
<script>
	
</script>
<style>
/*----------header----------------*/
#header{position: fixed;top:0;z-index: 10}
.opc{opacity: .7}
h1>.headtitle{width: 2.36rem;margin-top:.02rem;}
.headtitle span{width: 1.18rem;height: .49rem;line-height: .49rem;font-size: .3rem;background: #63d985;display:inline-block;font-weight:normal;}
.headtitle .hot{border-radius: .25rem 0 0 .25rem;}
.headtitle .focus{border-radius: 0 .25rem .25rem 0;}

.rotate-transition{
	animation-duration: .8s;
  	animation-fill-mode: both;
  	animation-name: rotateIn;
}
.rotate-enter{
  -webkit-animation-name: rotateIn;
  animation-timing-function: ease-out;
}
.rotate-leave{
  -webkit-animation-name: rotateOut;
  animation-timing-function: ease-out;
}


@-webkit-keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
@-webkit-keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

</style>