import http from 'node:http'

const server = http.createServer((request, response) =>{
    console.log("Server is running")
    return response.end('Hello World again')
})

server.listen(3333)