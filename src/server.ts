import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

/**
 * GET = Buscas
 * Post = Criação
 * Put = Alteração
 * Delete = deletar
 * Patch = Alterar uma informação especifica
 * 
 */

app.listen(3333, () => console.log("Oi eu tô rodando"));