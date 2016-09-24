<template>
<div>
	<section id="contentbar_live">
		<div class="content mauto">
			<div class="group mauto">
				<dl v-for="item in msgs">
					<dt><img :src="item.imgsrc" alt="小丸子"></dt>
					<dd>{{item.msg}}</dd>
				</dl>
			</div>
			
		</div>
	</section>
</div>
</template>

<script>
	module.exports = {
		data:function () {
			return {
				msgs:[]	
			}
		},
		route:{
			activate:function (transition) {
				console.log('live active');
				transition.next();
			},
			data: function (transition) {
				this.$http.post('/api/live',{}).then(function (req) {
					console.log(req.data);
					this.msgs = req.data;
					transition.next();
				}, function (error) {
					console.log(error);
				})
			}
		}
	}
</script>
<style>
/*-content-*/
#contentbar_live{width: 100%;top:1.5rem;position: relative;margin-bottom: .9rem;}
#contentbar_live .content{width: 100%;}
#contentbar_live .group{width: 6.4rem;display: flex;align-content:space-between;flex-wrap: wrap;}
#contentbar_live .group dl{margin:.1rem 0;font-size:.4rem;}
#contentbar_live .group  dl dt{width: 3.15rem;border:1px solid #f1f1f1;height: 3.2rem;}
#contentbar_live .group dl dt img{width: 100%;height: 100%;}
#contentbar_live .group dl dd{width: 3.15rem;height: .6rem;border:1px solid #f1f1f1;line-height:.6rem;font-size: .3rem;}

</style>