const Socio = require('../models/socio');
const socioCtrl = {};

//Para crear un nuevo socio
socioCtrl.createSocio = async (req, res) => {
    try {
        const nuevoSocio = await Socio.create(req.body);
        res.status(201).json({
            status: 'Socio guardado con éxito',
            data: nuevoSocio
        });
    } catch (error) {
        res.status(400).json({ error: 'Error al dar de alta el socio', detalle: error.message });
    }
}

//Para obtener todos los socios
socioCtrl.getSocios = async (req, res) => {
    try{
        const socios = await Socio.findAll();
        res.json(socios);
    } catch (error){
        res.status(500).json({ error: 'Error al obtener los socios'});
    }
}

//Para obtener socios activos
socioCtrl.getSociosActivos = async (req, res) => {
    try{
        const sociosActivos = await Socio.findAll({ where: { activo: true } });
        res.json(sociosActivos);
    } catch (error){
        res.status(500).json({ error: 'Error al obtener los socios activos'});
    }
}

//Para editar un socio
socioCtrl.updateSocio = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Socio.update(req.body, { where: { id: id } });

        if(updated === 0) {
            return res.status(404).json({ message: 'Socio no encontrado' });
        }
        const socioActualizado = await Socio.findByPk(id);
        res.json({
            status: 'Socio actualizado con éxito',
            data: socioActualizado
        });
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el socio', detalle: error.message });
    }   
}

//Eliminar un socio 
socioCtrl.deleteSocio = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Socio.destroy({ where: { id: id } });

        if(!deleted) {
            return res.status(404).json({ message: 'Socio no encontrado' });
        }
        res.json({ status: 'Socio eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el socio' });
    }
}

module.exports = socioCtrl;