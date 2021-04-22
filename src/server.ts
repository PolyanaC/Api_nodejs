import { http} from "./http";
import "./websocket/client";

/**
 * GET = Buscas
 * Post = Criação
 * Put = Alteração
 * Delete = deletar
 * Patch = Alterar uma informação especifica
 * 
 */

http.listen(3333, () => console.log("Oi eu tô rodando"));