const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Socio = sequelize.define('Socio', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true // Puede ser null si al principio no sube foto
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Para que no haya dos socios con el mismo DNI
    },
    numeroSocio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true // Por defecto, cuando se crea, el socio está activo
    }
}, {
    tableName: 'socios', // Nombre de la tabla en Postgres
    timestamps: true    // Nos crea automáticamente las columnas createdAt y updatedAt
});

module.exports = Socio;