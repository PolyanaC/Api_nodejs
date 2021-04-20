import {Router} from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e buscas
 * Body Params => Parametros que vem do corpo da requisição
 */
//embuscadoproximonivel
routes.post("/settings", settingsController.create);

export { routes }