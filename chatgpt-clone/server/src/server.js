const app = require("./app")                    // importa as configuracoes do app
const port = process.env.PORT || 3000           // porta de acesso

app.listen(port, ()=> {
    console.log(`Server listening on port${port}`)
})