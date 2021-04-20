import express from "express";

const app = express();

/**
 * GET = Buscas
 * Post = Criação
 * Put = Alteração
 * Delete = deletar
 * Patch = Alterar uma informação especifica
 * 
 */

app.get("/", (request, response) => {
    return response.json({ mensagem: "Oi eu sou uma rota get"});
});

app.post("/users", (request, response) => {
    return response.json({mensagem : "Usuário cadastrado com sucesso"});
});

app.listen(3333, () => console.log("Oi eu tô rodando"));