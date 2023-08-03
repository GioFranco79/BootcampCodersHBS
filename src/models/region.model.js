import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.config.js";
import { Comuna } from "../models/comuna.model.js";

const Region = sequelize.define('Region', {
    codigo_region: {
        type: DataTypes.INTEGER,
        primaryKey: true    
    },
    nombre:{
        type: DataTypes.STRING(30)
    }
},{
    tableName: 'region',
    createdAt: false,
    updatedAt: false
});

Region.hasMany(Comuna, {
    foreignKey: 'codigo_region',
    sourceKey: 'codigo_region'
});

Comuna.belongsTo(Region, {
    foreignKey: 'codigo_region',
    targetKey: 'codigo_region'
});

export{
    Region
}