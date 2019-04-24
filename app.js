var express = require("express");
var path = require("path");
var app = express();
// var http = require("http");
// var url = require("url");
// var os = require("os");
// var fs = require("fs");

app.use(express.static(path.join(__dirname, "/")));

app.listen(8080, function() {
  console.log("Api serve: http://localhost:8080;");
});

// function getIPv4() {
//   var interfaces = os.networkInterfaces(); //获取网络接口列表
//   var ipv4s = []; //同一接口可能有不止一个IP4v地址，所以用数组存
//   Object.keys(interfaces).forEach(function(key) {
//     interfaces[key].forEach(function(item) {
//       //跳过IPv6 和 '127.0.0.1'
//       if ("IPv4" !== item.family || item.internal !== false) return;
//       ipv4s.push(item.address); //可用的ipv4s加入数组
//       console.log(key + "--" + item.address);
//     });
//   });
//   return ipv4s[0]; //返回一个可用的即可
// }

// var server = http.createServer(function(req, res) {
//   var staticPath = path.join(__dirname, "src/index.html");
//   var pathObj = url.parse(req.url, true);
//   var filePath = path.join(staticPath, pathObj.pathname);

//   //异步读取文件数据
//   fs.readFile(staticPath, "binary", function(err, fileContent) {
//     res.write(fileContent, "binary");
//     res.end();
//   });
// });

// server.listen("4000", function() {
//   console.log(`server start on:${getIPv4()}:4000`);
// });
