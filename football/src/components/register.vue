<template>
	<div>
		<header id="header">
			<h1 class="mauto textcenter">足球圈－注册</h1>
		</header>
		<section id="contentbar_reg">
			<div class="content mauto">
				<div class="ipt">
					<input type="text" v-model="user.phone" placeholder="手机号">
					<p>{{phoneTxt}}</p>
					<input type="password" v-model="user.pwd" placeholder="密码 （字母开头的6 - 20字符）">
					<p>{{pwdTxt}}</p>
					<input type="password" v-model="user.repwd" placeholder="确认密码">
					<p>{{rpwdTxt}}</p>
					<input type="text" v-model="user.count" placeholder="昵称（6个字符）">
					<p>{{countTxt}}</p>
				</div>
				<div class="submit_btn textcenter" @click="registerFun">注册</div>
			</div>
		</section>
	</div>	
</template>
<script>
	module.exports = {
		data:function () {
			return {
				user:{
					phone:'',
					pwd:'',
					repwd:'',
					count:'',
				}
				
			}
		},
		methods: {
			registerFun: function () {
				if(!this.isRegister){
					this.$http.get('/api/register',{params:this.user}).then(function (req) {
						console.log(req.data);
						if(req.data.code >= 0){
							this.$route.router.go('/login');
						}else {
							console.log('注册失败');
						}
					},function (err) {
						console.log(err);
					});
				}else {
					console.log('注册失败');
				}
			}
		},
		computed:{
			isRegister:{
				get: function () {
					return this.phoneTxt || this.pwdTxt || this.rpwdTxt || this.countTxt;
				}
			},
			phoneTxt:{
				get:function() {
					var regPhone =/^(13)[0-9]{9}$/;
					return regPhone.test(this.user.phone.trim()) || this.user.phone.trim().length < 1  ? '':'请输入正确的手机号';
				}
			},
			pwdTxt:{
				get: function () {
					var regPas =/^[a-z|A-z].{5,19}$/;
					return regPas.test(this.user.pwd.trim()) || this.user.pwd.trim().length < 1 ? '' : '字母开头的6 - 20字符';
				}
			},
			rpwdTxt:{
				get: function () {
					return this.user.pwd.trim() === this.user.repwd.trim() || this.user.repwd.trim().length < 1 ? '' : '两次密码不一致';
				}
			},
			countTxt: {
				get: function () {
					return /^.{6,15}$/.test(this.user.count.trim()) || this.user.count.trim().length < 1? '' : '昵称（6-15个字符）';
				}
			}
		}
	}
</script>
<style>
/*--------------------------*/
#header_reg{width: 100%;background: #0cc440;}
h1{height: .88rem;width: 5.8rem;color:#fff;font-size:.4rem;line-height: .88rem}
/*-content-*/
#contentbar_reg {top:.9rem;position: relative;}
#contentbar_reg .content{width: 5.8rem;}
#contentbar_reg .ipt{margin-top:.29rem;}
#contentbar_reg input::-webkit-input-placeholder {font-size: .3rem;}
#contentbar_reg .ipt input{width: 100%;height: .67rem;border:0;border-bottom:1px solid #ccc; outline: none;}
#contentbar_reg .content p{height: .52rem;line-height: .52rem;font-size:.3rem;color:#F07D7D;}
#contentbar_reg .submit_btn{background: #0cc440;width: 5.8rem;height: .88rem;line-height: .88rem;color:#fff;font-size: .3rem;border-radius:.05rem;margin-top:.4rem;}
</style>