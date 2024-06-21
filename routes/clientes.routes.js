import {Router} from "express"
import { mostrarCelularesMarca, mostrarTodosProductos } from "../controllers/controllers.clientes.js"

let clientesRouter = Router ()

clientesRouter.get ("/celulares", mostrarTodosProductos)
clientesRouter.get ("/celulares/:marca", mostrarCelularesMarca)


export default clientesRouter;