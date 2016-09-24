<template>
	<div>
		<header id="header_reg">
    <h1 class="mauto textcenter">足球圈－登录</h1>
    </header>
    <section id="contentbar_login">
      <div class="content mauto">
        <div class="ipt">
          <input type="text" placeholder="手机号" class="phone" v-model="user.phone">
          <input type="password" class="password" placeholder="密码" v-model="user.pwd">
        </div>
        <p>
          <span>还没有账号? 点击此处立即 <a href="#" v-link="{path:'./register'}">注册</a></span>
        </p>
        <div class="submit textcenter mauto" @click="goLogin">登录</div>
      </div>
    </section>
	</div>
</template>

<script>
	module.exports={
       data:function () {
           return {
           	   user:{
           	   	 phone:'',
                 pwd:''
           	   }
           }
       },
       methods:{
           goLogin:function(){
            var regPhone = /^(13)[0-9]{9}$/,
                regPas = /^[a-z|A-z].{5,19}/;
                //判断用户名密码是否,为空
           	  if (!regPhone.test(this.user.phone.trim()) && !regPas.test(this.user.pwd.trim())) {
                 alert('用户名密码,格式不对呀!');
           	  }else{
                //在localstorage里面查找是否有用户 比较密码
                  if(localStorage.getItem('phone') === this.user.phone){
                    if(localStorage.getItem('pwd') === this.user.pwd){
                      this.$route.router.go('/index/home/hot/live');
                      return ;
                    }
                     else 
                      return ;
                  }
                  console.log('发送请求');
           	  	  this.$http.get('/api/login',{params:this.user}).then(function({data}){
                     if (!data.code) {
                      localStorage.setItem('phone',this.user.phone);
                      localStorage.setItem('pwd',this.user.pwd);
                      sessionStorage.setItem('username',this.user.phone);
                      this.$route.router.go('/index/home/hot/live');
                     }else{
                      alert('用户名密码不对!');
                     };
                  },function(err){

                  });
           	  };
           }
       },

	}
</script>

<style scoped>
/*--------------------------*/
#header_reg{width: 100%;background: #0cc440;}
h1{height: .88rem;width: 5.8rem;color:#fff;font-size:.4rem;line-height: .88rem}
/*-content-*/
#contentbar_login {position: relative;top:.9rem;}
#contentbar_login .content{width: 5.8rem;}
#contentbar_login .ipt{margin-top:.29rem;}
#contentbar_login input::-webkit-input-placeholder {font-size: .3rem;}
#contentbar_login .ipt input{width: 100%;height: .67rem;border:0;border-bottom:1px solid #ccc;outline: none;}
#contentbar_login .ipt input[type='password']{margin-top:.57rem;}
#contentbar_login .content p{height: 1.32rem;line-height: 1.32rem;font-size:.3rem;color:#ccc;}
#contentbar_login .content p a{color:#8fe2a4;text-decoration:underline;}
#contentbar_login .submit{background: #0cc440;width: 5.8rem;height: .88rem;line-height: .88rem;color:#fff;font-size: .3rem;border-radius:.05rem;}
</style>