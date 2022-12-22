const http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        console.log("hello i am req /page");
        res.writeHead(200, { content: "appliation/text" })
        res.end("hello World")
    } else if (req.url === '/student') {
        res.writeHead(200, { content: "appliation/jSON" })
        res.end(JSON.stringify({ name: "Bhanu", id: "17001A0428" }))
    }
    else {
        res.writeHead(200, { content: "appliation/JSON" })
        res.end("404 file not found")
    }
})
server.listen(5000)