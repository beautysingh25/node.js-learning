import http, { createServer } from 'http'

const server = createServer((req, res) => {
    // res.end('<h1>Your request has been accepted</h1>')
    // console.log(req.url);

    if (req.url === '/wdm') {
        res.end("welcome to the node js learning course")
    }else if (req.url === '/srk') {
        res.end("we are not able to show about srk")
    }else{
        res.end("Invalid request");
    }
})
const port = 2000;
server.listen(port, ()=>console.log(`server is running on ${port}`))
