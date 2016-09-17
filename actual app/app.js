global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
}

var http = require('http')
var router = rootRequire('router/router.js')

function mainProcess(req, res){
  res.writeHead(200, {'Content-Type' : 'text/plain'})
  router(req, res)
  res.end()
}

http.createServer(mainProcess).listen(process.env.PORT || 8080)
console.log('server is running')