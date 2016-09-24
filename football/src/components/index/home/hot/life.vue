<template>	
	<section id="contentbar_life">
		<div class="content mauto">
			<dl v-for="item in msgs">
				<dt><img :src="item.imgsrc" alt="pic"></dt>
				<dd>{{item.msg}}</dd>
			</dl>
		</div>
	</section>
</template>
<script>
	module.exports = {
		data: function () {
			return {
				msgs:[]
			}
		},
		route:{
			activate:function (transition) {
				console.log('life active');
				transition.next();
			},
			data: function (transition) {
				this.$http.post('/api/life',{}).then(function (req) {
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
/*-content-*/
#contentbar_life{width: 100%;position:relative;top:1.5rem;margin-bottom: .9rem}
#contentbar_life .content{width: 6.4rem;}
#contentbar_life .content{display: flex;align-content: space-between;flex-wrap: wrap;}
#contentbar_life .content dl{margin:.1rem 0;font-size:.4rem;padding-top:.1rem;}
#contentbar_life .content  dl dt{width: 3.15rem;border:1px solid #f1f1f1;}
#contentbar_life .content dl dt img{width: 100%;}
#contentbar_life .content dl dd{width: 3.15rem;font-size:.3rem;border:1px solid #f1f1f1;box-sizing:border-box;padding:.1rem 0 0 .2rem;}
</style>