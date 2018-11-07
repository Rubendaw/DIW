const Incidencia = require('../models/incidencia.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Investigador
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Investigador Vacio..." 
        });
    }

    const incidencia = new Incidencia({
        alumne: req.body.alumne || "Sin Nombre",
        profesor: req.body.profesor || "Sin profesion",
        lloc: req.body.lloc || "Sin lugar",
        data: req.body.data || "Sin data",
        grupo: req.body.grupo || "Sin grupo",
        horario: req.body.horario || "Sin horario",
        hora: req.body.hora || "Sin hora",
        cambio: req.body.cambio || "Sin cambio",
        incidenteLeve: req.body.incidenteLeve || "Sin incidenteLeve",
        dies: req.body.dies || "Sin dies",
        tasques: req.body.tasques || "Sin tasques",
        tasque: req.body.tasque || "Sin tasque",
        dies1: req.body.dies1 || "Sin dies1",
        horari: req.body.horari || "Sin horari",
        extracolars: req.body.extracolars || "Sin extracolars",
        suspensio: req.body.suspensio || "Sin suspensio",
        assistencia: req.body.assistencia || "Sin assistencia",
        desde: req.body.desde || "Sin desde",
        fina: req.body.fina || "Sin fina",
        incidente: req.body.incidente || "Sin incidente",
        telefon: req.body.telefon || "Sin telefon",
        paiporta: req.body.paiporta || "Sin paiporta",
        de: req.body.de || "Sin de",
        anio: req.body.anio || "Sin anio",
        director: req.body.director || "Sin director"
        




        
    })

    incidencia.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating Incidencia"
        });
    });
};



// Obtener todos los investigadores
exports.findAll = (req,res) => {

        Incidencias.find().then(incidencias=>{
            res.send(incidencias);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un investigador por Id
exports.findOne = (req,res) => {
    Investigador.findById(req.params.investigadorId)
    .then(investigador=>{
        if (!investigador){
            return res.status(404).send({
                message: "Investigador NOT FOUND con ID " +req.params.investigadorId
            });
            }
            res.send(investigador);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Investigador no encontrado con ese id :" +req.params.investigadorId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.investigadorId
             });
        });
    };




// Actualizar un investigador
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Investigador vacio"
        });
    }

    // Find note and update it with the request body
    Investigador.findByIdAndUpdate(req.params.investigadorId, {
        nombre: req.body.nombre|| "Sin nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.puntosVida || 0,
        puntosCordura: req.body.puntosCordura || 0
    }, {new: true})
    .then(investigador => {
        if(!investigador) {
            return res.status(404).send({
                message: "Investigador not found with id " + req.params.investigadorId
            });
        }
        res.send(investigador);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Investigador not found with id " + req.params.investigadorId
            });                
        }
        return res.status(500).send({
            message: "Error updating Investigador with id " + req.params.investigadorId
        });
    });
};

// Borrar un investigador 
exports.delete = (req,res)=>{
    Investigador.findByIdAndRemove(req.params.investigadorId)
    .then(investigador => {
        if(!investigador) {
            return res.status(404).send({
                message: "Investigador no encontrado " + req.params.investigadorId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Investigador not found with id " + req.params.investigadorId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese Investigador with id " + req.params.investigadorId
        });
    });
};