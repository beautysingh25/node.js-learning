import http from 'http'


// create servar and check running on which port.
// const server = http.createServer();
// const port = 2000;
// server.listen(port, ()=>console.log(`server is running on port ${port}`))


// request - req, response - res
const server = http.createServer((req, res) => {
    res.end("you requested for somthing");
});
const port = 2000;
server.listen(port, ()=>console.log(`server is running on port ${port}`))
