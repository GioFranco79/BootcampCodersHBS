import { Router } from "express";
import { listado } from "../controllers/estudiantes.controller.js";


const routerEstudiantes = Router();

routerEstudiantes.get('/', listado);
routerEstudiantes.get('/listarfiltro', listado);


export{
    routerEstudiantes
}