// 1- iniciando projeto
// console.log('express + typescript!!!')

//2- express init  
import express from 'express'

const app = express()

//3- rota com POST
app.use(express.json())

app. get("/", (req, res) => {
    return res.send("Aplicação rodando com sucesso na porta 3000")
})

//3- rota com POST
app.post("/api/products", (req, res) => {
    console.log(req.body)

    return res.send("Produto adicionado")
})

//4- rotas para todos os verbos
app.all("/api/products/check", (req, res) => {
    //req.method = VERBO HTTP

    if(req.method === "POST") {
        return res.send("Inseriu algum registro!")
    }
    else if(req.method === "GET"){
        return res.send("Leu algum registro!")
    }
    else{
        return res.send("Não foi possível fazer nada!")
    }
})

app.listen(3000, () => {
    console.log("aplicação rodando com sucesso")
})