import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.config.js";

const Comuna = sequelize.define('Comuna', {
    codigo_comuna: {
        type: DataTypes.INTEGER,
        primaryKey: true    
    },
    nombre:{
        type: DataTypes.STRING(30)
    },
    codigo_region:{
        type: DataTypes.INTEGER
    }
},{
    tableName: 'comuna',
    createdAt: false,
    updatedAt: false
});

export{
    Comuna
}