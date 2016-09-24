var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

//登录
var user = [{},{}],
    lives = [{imgsrc:'/static/img/pic1.jpg',msg:'小丸子啊小丸子'},{imgsrc:'/static/img/pic2.jpg',msg:'我家住在黄土高坡'},{imgsrc:'/static/img/sub_pic1.jpg',msg:'门前大桥下油锅一群鸭'},{imgsrc:'/static/img/live_pic2.jpg',msg:'千山鸟飞绝'},{imgsrc:'/static/img/pic2.jpg',msg:'我家住在黄土高坡'},{imgsrc:'/static/img/sub_pic1.jpg',msg:'门前大桥下油锅一群鸭'},{imgsrc:'/static/img/pic2.jpg',msg:'我家住在黄土高坡'},{imgsrc:'/static/img/sub_pic1.jpg',msg:'门前大桥下油锅一群鸭'},{imgsrc:'/static/img/pic2.jpg',msg:'我家住在黄土高坡'},{imgsrc:'/static/img/sub_pic1.jpg',msg:'门前大桥下油锅一群鸭'},{imgsrc:'/static/img/pic2.jpg',msg:'我家住在黄土高坡'},{imgsrc:'/static/img/sub_pic1.jpg',msg:'门前大桥下油锅一群鸭'},{imgsrc:'/static/img/pic2.jpg',msg:'我家住在黄土高坡'},{imgsrc:'/static/img/sub_pic1.jpg',msg:'门前大桥下油锅一群鸭'},{imgsrc:'/static/img/pic2.jpg',msg:'我家住在黄土高坡'},{imgsrc:'/static/img/sub_pic1.jpg',msg:'门前大桥下油锅一群鸭'},{imgsrc:'/static/img/pic2.jpg',msg:'我家住在黄土高坡'},{imgsrc:'/static/img/sub_pic1.jpg',msg:'门前大桥下油锅一群鸭'},{imgsrc:'/static/img/pic2.jpg',msg:'我家住在黄土高坡'},{imgsrc:'/static/img/sub_pic1.jpg',msg:'门前大桥下油锅一群鸭'}];
app.get('/api/login',function(req,res){
  var user = req.query;
  console.log(user);
  res.json({code:0,msg:'密码错误'});
})

//注册
app.get('/api/register',function (req,res) {
  var user = req.query;
  console.log(user);
  var num = Math.random() - 0.5;
  res.json({'code':num});
})

//读取live页面的数据
app.post('/api/live',function (req,res) {
  console.log('live---数据已发送',lives);
  res.json(lives);
})

//读取足球页面

app.post('/api/life',function (req,res) {
  var lives = [];
  var msgs = ["1片2片3、4片","5片6片7、8片","9片十片十一片","飞入草丛都不见","锄禾日当午","汗滴禾下土","谁知盘中餐","粒粒皆辛苦","好诗好诗"];
  for (var i = 2; i< 9; i++) {
      var live = {};
      live.imgsrc = '/static/img/'+ i +'.jpg';
      live.msg = msgs[i];
      lives.push(live);
  }
  console.log(lives);
   res.json(lives);
})
//美女
app.post('/api/girl',function (req,res) {
  var lives = [];
  var msgs = ["1片2片3、4片","5片6片7、8片","9片十片十一片","飞入草丛都不见","锄禾日当午","汗滴禾下土","谁知盘中餐","粒粒皆辛苦","好诗好诗"];
  for (var i = 0; i< 9; i++) {
      var live = {};
      live.imgsrc = '/static/img/'+ i+' (2).jpg';
      live.msg = msgs[i];
      lives.push(live);
  }
  console.log(lives);
   res.json(lives);
})

//发现
  var findlives = [];
  var findmsgs = ["1片2片3、4片","5片6片7、8片","9片十片十一片","飞入草丛都不见","锄禾日当午","汗滴禾下土","谁知盘中餐","粒粒皆辛苦","好诗好诗"];
//准备后台数据
 function ready_data(findlives) {
    for (var i = 0; i< 9; i++) {
        var live = {};
        live.imgsrc = '/static/img/'+ i+' (2).jpg';
        live.msg = findmsgs[i];
        live.name = findmsgs[i];//Math.random().toString(36).substring(2, 11);
        findlives.push(live);
    }
    console.log(findlives);
 }
  ready_data(findlives);
  
  
app.post('/api/find',function (req,res) {
  !findlives.length && ready_data(findlives);
   res.json(findlives);
})

//点击关注按钮
app.get('/api/find/focus',function(req,res) {
    console.log(req.query);
    findlives.splice(req.query.index-0,1);
    res.json(findlives);
})

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
