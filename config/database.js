const { Sequelize } = require('sequelize');

// Conectamos a 'tpbacked' con las credenciales que acabamos de configurar adentro de psql
const sequelize = new Sequelize('tpbacked', 'postgres', 'admin123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, 
});

// Probar y levantar la conexión
sequelize.authenticate()
  .then(() => console.log('DB is connected to PostgreSQL'))
  .catch(err => console.error('Error al conectar a PostgreSQL:', err));

module.exports = sequelize;