import express from 'express';
import hbs from 'hbs'; /* Para agregar helpers */
import { routerEstudiantes } from '../routes/estudiantes.routes.js';

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.set('view engine', 'hbs');
        /************* para agregar helpers ************************/
        hbs.registerHelper('equals', function(a, b, opts) {
            if (a == b) {
                return opts.fn(this)
            } else {
                return opts.inverse(this)
            }
        });      
        /****************** Eso es todo ************************/

        /*this.app.use(express.static('public'));*/
        this.app.use(express.json());
        /*hbs.registerPartials(__dirname + '/views/partials');*/
    }

    routes() {
        this.app.use('/', routerEstudiantes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
}