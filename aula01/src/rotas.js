import http from 'node:http'
/*
 - rotas são pontos de entrada
 - criação, edição, exclusão e listagem
 - metodo e a url
*/
const server = http.createServer((request, response) =>{
    const {method, url} = request
    console.log(method, url)
    return response.end('Server is running now!')
})

server.listen(3333)