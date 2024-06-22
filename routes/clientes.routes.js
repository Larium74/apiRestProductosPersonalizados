import {Router} from "express"
import { cel, mostrarCelularesMarca, mostrarTodosProductos } from "../controllers/controllers.clientes.js"

let clientesRouter = Router ()

clientesRouter.get ("/celulares", mostrarTodosProductos)
clientesRouter.get ("/celulares/:marca", mostrarCelularesMarca)
clientesRouter.get ("/cel", cel)


export default clientesRouter;