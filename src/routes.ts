import {Router} from "express";
import { MessageController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessageController();

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e buscas
 * Body Params => Parametros que vem do corpo da requisição
 */
//embuscadoproximonivel
routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showbyUser);

export { routes }