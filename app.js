//Incluindo uma biblioteca
const http = require('http')
const queryString = require('query-string')
const url = require('url')
const fs = require('fs')

//Definição de endereço / URL
const hostname = '127.0.0.1' //localhost
const port = 3000

//Implementação da regra de negócio
const server = http.createServer((req, res) => {
  let resposta
  const urlparse = url.parse(req.url, true)

  const params = queryString.parse(urlparse.search)
  // Criar um usuario - Atualizar um usuário
  if (urlparse.pathname == '/criar-atualizar-usuario') {
    //Receber infomações do usuario

    console.log(params)
    //Salvar as informacoes
    fs.writeFile(
      //salva/atualiza info
      'users/' + params.id + '.txt',
      JSON.stringify(params), //transforma em texto
      function (err) {
        if (err) throw err
        console.log('Saved!')

        resposta = 'Usuario criado/atualizado com sucesso'

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(resposta)
      }
    )
  }

  //Selecionar usuario
  else if (urlparse.pathname == '/selecionar-usuario') {
    fs.readFile('users/' + params.id + '.txt', function (err, data) {
      resposta = data

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(resposta)
    })
  }

  //Remover usuario
  else if (urlparse.pathname == '/remover-usuario') {
    fs.unlink('users/' + params.id + '.txt', function (err) {
      console.log('File deleted')

      resposta = err ? 'Usuario nao encontrado' : 'Usuario removido.'

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(resposta)
    })
  }
})

//Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

//http://localhost:3000/criar-atualizar-usuario?nome=AlineSoliman&idade=80&id=1
//http://localhost:3000/criar-atualizar-usuario?nome=AlineSoliman&idade=32&id=1
//http://localhost:3000/selecionar-usuario?id=1
//http://localhost:3000/remover-usuario?id=1
