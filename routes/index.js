// 页面渲染的路由
const express = require('express');
const router = express.Router();


// 首页路由 - http://localhost:3000/
router.get('/',(req, res) => {
    res.render('index') // 渲染到views下面的index.ejs文件
})


// banner图页面的路由
router.get('/banner.html',function(req, res){
    res.render('banner') // 渲染到views下面的banner,ejs文件
})

module.exports = router;