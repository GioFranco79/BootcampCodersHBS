import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.config.js";


const Curso = sequelize.define('Curso', {
    codigo_curso: {
        type: DataTypes.INTEGER,
        primaryKey: true    
    },
    fecha_inicio:{
        type: DataTypes.DATE
    },
    fecha_termno: {
        type: DataTypes.DATE
    },
    codigo_plan_formativo:{
        type: DataTypes.INTEGER
    }
},{
    tableName: 'curso',
    createdAt: false,
    updatedAt: false
});

export{
    Curso
}
