import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.config.js";
import { Curso } from "../models/curso.model.js";

const PlanFormativo = sequelize.define('PlanFormativo', {
    codigo_plan_formativo: {
        type: DataTypes.INTEGER,
        primaryKey: true    
    },
    descripcion:{
        type: DataTypes.STRING(30)
    },
    duracion_horas:{
        type: DataTypes.INTEGER
    }
},{
    tableName: 'plan_formativo',
    createdAt: false,
    updatedAt: false
});

PlanFormativo.hasMany(Curso, {
    foreignKey: 'codigo_plan_formativo',
    sourceKey: 'codigo_plan_formativo'
});

Curso.belongsTo(PlanFormativo, {
    foreignKey: 'codigo_plan_formativo',
    targetKey: 'codigo_plan_formativo'
});

export{
    PlanFormativo
}