const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

// Dar de alta una Transaccion (POST)
transaccionCtrl.createTransaccion = async (req, res) => {
  try {
    const nuevaTransaccion = await Transaccion.create(req.body);
    res.status(201).json({
      status: 'Transacción registrada en el LOG con éxito',
      data: nuevaTransaccion
    });
  } catch (error) {
    res.status(400).json({ error: 'Error al registrar la transacción', detalle: error.message });
  }
};

// Recuperar todas las Transacciones Registradas (GET)
transaccionCtrl.getTransacciones = async (req, res) => {
  try {
    const transacciones = await Transaccion.findAll();
    res.json(transacciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar el historial completo' });
  }
};

// Recuperar el histórico de transacciones de un determinado cliente por EMAIL (GET)
transaccionCtrl.getTransaccionesPorCliente = async (req, res) => {
  try {
    const { email } = req.params;
    const historico = await Transaccion.findAll({
      where: { emailCliente: email }
    });
    res.json(historico);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial del cliente' });
  }
};

// Recuperar Transacciones por idiomas de origen y destino usando PARAMS (GET)
transaccionCtrl.getTransaccionesPorIdiomas = async (req, res) => {
  try {
    const { origen, destino } = req.params; 
    const resultados = await Transaccion.findAll({
      where: {
        idiomaOrigen: origen,
        idiomaDestino: destino
      }
    });
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: 'Error al filtrar por idiomas' });
  }
};

module.exports = transaccionCtrl;
