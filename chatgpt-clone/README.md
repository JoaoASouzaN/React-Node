# Clone ChatGpt

Esse projeto tem fins educativos, nele estou usando node.js para desenvolver um pequeno servidor, o qual servira como comunicação entre o frontend feito em react.js e a API da OpenIA.

Ao colocar o servidor em execução, iniciar a aplicação web e tentar enviar algum prompt, ocorre um erro. Até o momento não consegui identificar o motivo desse erro.

Acredito, que o servidor node, deveria ficar observando a porta 5555 ou 3000 e a aplicação web enviaria as requisições para uma dessas respectivas portas. Mesmo fazendo algumas alterações no codigo, em buusca de uma resolução, não consegui encontrar o foco do problema para poder resolver.

Link do repositorio original do desafio: <a>https://github.com/felipeAguiarCode/node-react-chatgpt-clone</a>

ERROR

# Network Error
```
AxiosError: Network Error

    at XMLHttpRequest.handleError (http://localhost:3001/static/js/bundle.js:42375:14)
    at Axios.request (http://localhost:3001/static/js/bundle.js:42813:41)
    at async makeRequest (http://localhost:3001/static/js/bundle.js:179:7)
    at async handleSubmit (http://localhost:3001/static/js/bundle.js:45:20)

```
