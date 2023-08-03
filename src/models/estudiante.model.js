import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.config.js";
import { Curso } from "../models/curso.model.js";
import { Comuna } from "../models/comuna.model.js";

const Estudiante = sequelize.define('Estudiante', {
    id_estudiante: {
        type: DataTypes.INTEGER,
        primaryKey: true    
    },
    rut:{
        type: DataTypes.STRING(15)
    },
    nombre: {
        type: DataTypes.STRING(30)
    },
    apellido_pat:{
        type: DataTypes.STRING(30)
    },
    apellido_mat: {
        type: DataTypes.STRING(30)
    },
    direccion: {
        type: DataTypes.STRING(100)
    },
    codigo_comuna: {
        type: DataTypes.INTEGER
    },
    codigo_curso: {
        type: DataTypes.STRING(30)
    }
},{
    tableName: 'estudiante',
    createdAt: false,
    updatedAt: false
});

Estudiante.belongsTo(Curso, {
    foreignKey: 'codigo_curso',
    targetKey: 'codigo_curso'
});

Curso.hasMany(Estudiante, {
    foreignKey: 'codigo_curso',
    sourceKey: 'codigo_curso'
});

Estudiante.belongsTo(Comuna, {
    foreignKey: 'codigo_comuna',
    targetKey: 'codigo_comuna'
});

Comuna.hasMany(Estudiante, {
    foreignKey: 'codigo_comuna',
    sourceKey: 'codigo_comuna'
});

export{
    Estudiante
}