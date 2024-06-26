const http = require('http');

// create server obj
// listens on port 5000 for reqs
http.createServer((req,res)=>{
    //when get req write resp
    res.write('Hello World');
    res.end()
}).listen(8000, () => console.log('Server running...'));