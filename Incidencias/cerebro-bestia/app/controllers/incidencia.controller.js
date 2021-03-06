const Incidencia = require('../models/incidencia.model.js');
const path=require('path');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Investigador
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Investigador Vacio..." 
        });
    }

    // Aprovechando que javascript tiene tipado dinamico
    // sobreescribimos el valor de req.body.tipoAmonA que
    // viene como "string" para que sea un booleano.
    if (req.body.tipoAmonA =='marcado'){
        req.body.tipoAmonA = true;
    }else{
        req.body.tipoAmonA = false;
    }

    if (req.body.tipoAmonB =='marcado'){
        req.body.tipoAmonB = true;
    }else{
        req.body.tipoAmonB = false;
    }

    if (req.body.tipoAmonC =='marcado'){
        req.body.tipoAmonC = true;
    }else{
        req.body.tipoAmonC = false;
    }

    if (req.body.tipoAmonD =='marcado'){
        req.body.tipoAmonD = true;
    }else{
        req.body.tipoAmonD = false;
    }

    if (req.body.tipoAmonE =='marcado'){
        req.body.tipoAmonE = true;
    }else{
        req.body.tipoAmonE = false;
    }

    if (req.body.tipoAmonG =='marcado'){
        req.body.tipoAmonG = true;
    }else{
        req.body.tipoAmonG = false;
    }

    if (req.body.tipoAmonH =='marcado'){
        req.body.tipoAmonH = true;
    }else{
        req.body.tipoAmonH = false;
    }

    if (req.body.tipoAmonI =='marcado'){
        req.body.tipoAmonI = true;
    }else{
        req.body.tipoAmonI = false;
    }

    if (req.body.correu =='marcado'){
        req.body.correu = true;
    }else{
        req.body.correu = false;
    }

    if (req.body.alum =='marcado'){
        req.body.alum = true;
    }else{
        req.body.alum = false;
    }

    if (req.body.tutor =='marcado'){
        req.body.tutor = true;
    }else{
        req.body.tutor = false;
    }

    if (req.body.director =='marcado'){
        req.body.director = true;
    }else{
        console.log("Estamos marcando el director");
        req.body.director = false;
    }
    if (req.body.check =='marcado'){
        req.body.check = true;
    }else{
        req.body.check = false;
    }



    const incidencia = new Incidencia({
        alumne: req.body.alumne || "Sin Nombre",
        profesor: req.body.profesor || "Sin profesion",
        lloc: req.body.lloc || "Sin lugar",
        data: req.body.data || "Sin data",
        grupo: req.body.grupo || "Sin grupo",
        horario: req.body.horario || "Sin horario",
        hora: req.body.hora || "Sin hora",
        descripcion:req.body.descripcion || "Sin descripcion",
        check: req.body.check || false,
        incidentegrave: req.body.incidentegrave || "Sin incidentgrave",
        tip_42_a: req.body.tip_42_a || "Sin Incidencia",
        tip_42_b: req.body.tip_42_b || "Sin Incidencia",
        tip_42_c: req.body.tip_42_c || "Sin Incidencia",
        tip_42_d: req.body.tip_42_d || "Sin Incidencia",
        tip_42_e: req.body.tip_42_e || "Sin Incidencia",
        tip_42_f: req.body.tip_42_f || "Sin Incidencia",
        tip_42_g: req.body.tip_42_g || "Sin Incidencia",
        tip_42_h: req.body.tip_42_h || "Sin Incidencia",
        tip_42_i: req.body.tip_42_i || "Sin Incidencia",
        tip_42_j: req.body.tip_42_j || "Sin Incidencia",
        tip_42_k: req.body.tip_42_k || "Sin Incidencia",
        tip_42_l: req.body.tip_42_l || "Sin Incidencia",
        tip_42_m: req.body.tip_42_m || "Sin Incidencia",
        tip_42_n: req.body.tip_42_n || "Sin Incidencia",
        tip_42_o: req.body.tip_42_o || "Sin Incidencia",
        tip_42_p: req.body.tip_42_p || "Sin Incidencia",
        leve: req.body.leve || "Sin falta leve",
        tipoAmonA: req.body.tipoAmonA || false,
        tipoAmonB: req.body.tipoAmonB || false,
        tipoAmonC: req.body.tipoAmonC || false,
        tipoAmonD: req.body.tipoAmonD || false,
        tipoAmonE: req.body.tipoAmonE || false,
        dies: req.body.dies || "",
        tipoAmonG: req.body.tipoAmonG || false,
        tasque: req.body.tasque || "",
        dies1: req.body.dies1 || "",
        horari: req.body.horari || "",
        tipoAmonH: req.body.tipoAmonH || false,
        suspensio: req.body.suspensio || "",
        tipoAmonI: req.body.tipoAmonI || false,
        assistencia: req.body.assistencia || "",
        desde: req.body.desde || "",
        fina: req.body.fina || "",
        incidente: req.body.incidente || "Sin incidente",
        nada: req.body.nada || "campo sin rellenar",
        tip_35_a: req.body.tip_35_a || "Sin Incidencias2",
        tip_35_b: req.body.tip_35_b || "Sin Incidencias2",
        tip_35_c: req.body.tip_35_c || "Sin Incidencias2",
        tip_35_d: req.body.tip_35_d || "Sin Incidencias2",
        tip_35_e: req.body.tip_35_e || "Sin Incidencias2",
        tip_35_f: req.body.tip_35_f || "Sin Incidencias2",
        tip_35_g: req.body.tip_35_g || "Sin Incidencias2",
        tip_35_h: req.body.tip_35_h || "Sin Incidencias2",
        tip_35_i: req.body.tip_35_i || "Sin Incidencias2",
        tip_35_j: req.body.tip_35_j || "Sin Incidencias2",
        tip_35_k: req.body.tip_35_k || "Sin Incidencias2",
        tip_35_l: req.body.tip_35_l || "Sin Incidencias2",
        tip_35_m: req.body.tip_35_m || "Sin Incidencias2",
        tip_35_n: req.body.tip_35_n || "Sin Incidencias2",
        tip_35_o: req.body.tip_35_o || "Sin Incidencias2",
        tip_35_p: req.body.tip_35_p || "Sin Incidencias2",
        tip_35_q: req.body.tip_35_q || "Sin Incidencias2",
        tip_35_r: req.body.tip_35_r || "Sin Incidencias2",
        tip_35_s: req.body.tip_35_s || "Sin Incidencias2",
        telefon: req.body.telefon || "",
        correu: req.body.correu || false,
        alum: req.body.alum || false,
        tutor: req.body.tutor || false,
        conductes: req.body.conductes || "Sin conductes",
        paiporta: req.body.paiporta || "",
        de: req.body.de || "",
        anio: req.body.anio || "",
        director: req.body.director || false
        




        
    })

    incidencia.save().then(data =>{
        res.sendFile(path.join(__dirname,'../../formulario/listar.html'));
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating Incidencia"
        });
    });
};



// Obtener todos los investigadores
exports.findAll = (req,res) => {

        Incidencia.find().then(incidencias=>{
            res.send(incidencias);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un investigador por Id
exports.findOne = (req,res) => {
    Incidencia.findById(req.params.incidenciaId)
    .then(incidencia=>{
        if (!incidencia){
            return res.status(404).send({
                message: "Incidencia NOT FOUND con ID " +req.params.incidenciaId
            });
            }
            res.send(incidencia);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Investigador no encontrado con ese id :" +req.params.incidenciaId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.incidenciaId
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
        alumne: req.body.alumne || "Sin Nombre",
        profesor: req.body.profesor || "Sin profesion",
        lloc: req.body.lloc || "Sin lugar",
        data: req.body.data || "Sin data",
        grupo: req.body.grupo || "Sin grupo",
        horario: req.body.horario || "Sin horario",
        hora: req.body.hora || "Sin hora",
        check: req.body.check || false,
        descripcion:req.body.descripcion || "Sin descripcion",
        incidentegrave: req.body.incidentegrave || "Sin incidentgrave",
        tip_42_a: req.body.tip_42_a || "Sin Incidencia",
        tip_42_b: req.body.tip_42_b || "Sin Incidencia",
        tip_42_c: req.body.tip_42_c || "Sin Incidencia",
        tip_42_d: req.body.tip_42_d || "Sin Incidencia",
        tip_42_e: req.body.tip_42_e || "Sin Incidencia",
        tip_42_f: req.body.tip_42_f || "Sin Incidencia",
        tip_42_g: req.body.tip_42_g || "Sin Incidencia",
        tip_42_h: req.body.tip_42_h || "Sin Incidencia",
        tip_42_i: req.body.tip_42_i || "Sin Incidencia",
        tip_42_j: req.body.tip_42_j || "Sin Incidencia",
        tip_42_k: req.body.tip_42_k || "Sin Incidencia",
        tip_42_l: req.body.tip_42_l || "Sin Incidencia",
        tip_42_m: req.body.tip_42_m || "Sin Incidencia",
        tip_42_n: req.body.tip_42_n || "Sin Incidencia",
        tip_42_o: req.body.tip_42_o || "Sin Incidencia",
        tip_42_p: req.body.tip_42_p || "Sin Incidencia",
        leve: req.body.leve || "Sin ",
        tipoAmonA: req.body.tipoAmonA || false,
        tipoAmonB: req.body.tipoAmonB || false,
        tipoAmonC: req.body.tipoAmonC || false,
        tipoAmonD: req.body.tipoAmonD || false,
        tipoAmonE: req.body.tipoAmonE || false,
        dies: req.body.dies || "",
        tipoAmonG: req.body.tipoAmonG || false,
        tasque: req.body.tasque || "",
        dies1: req.body.dies1 || "",
        horari: req.body.horari || "",
        tipoAmonH: req.body.tipoAmonH || false,
        suspensio: req.body.suspensio || "",
        tipoAmonI: req.body.tipoAmonI || false,
        assistencia: req.body.assistencia || "",
        desde: req.body.desde || "",
        fina: req.body.fina || "",
        incidente: req.body.incidente || "Sin incidente",
        nada: req.body.nada || "campo sin rellenar",
        tip_35_a: req.body.tip_35_a || "Sin Nombre",
        tip_35_b: req.body.tip_35_b || "Sin Nombre",
        tip_35_c: req.body.tip_35_c || "Sin Nombre",
        tip_35_d: req.body.tip_35_d || "Sin Nombre",
        tip_35_e: req.body.tip_35_e || "Sin Nombre",
        tip_35_f: req.body.tip_35_f || "Sin Nombre",
        tip_35_g: req.body.tip_35_g || "Sin Nombre",
        tip_35_h: req.body.tip_35_h || "Sin Nombre",
        tip_35_i: req.body.tip_35_i || "Sin Nombre",
        tip_35_j: req.body.tip_35_j || "Sin Nombre",
        tip_35_k: req.body.tip_35_k || "Sin Nombre",
        tip_35_l: req.body.tip_35_l || "Sin Nombre",
        tip_35_m: req.body.tip_35_m || "Sin Nombre",
        tip_35_n: req.body.tip_35_n || "Sin Nombre",
        tip_35_o: req.body.tip_35_o || "Sin Nombre",
        tip_35_p: req.body.tip_35_p || "Sin Nombre",
        tip_35_q: req.body.tip_35_q || "Sin Nombre",
        tip_35_r: req.body.tip_35_r || "Sin Nombre",
        tip_35_s: req.body.tip_35_s || "Sin Nombre",
        telefon: req.body.telefon || "",
        correu: req.body.correu || "Sin Nombre",
        alum: req.body.alum || "Sin Nombre",
        tutor: req.body.tutor || "Sin Nombre",
        conductes: req.body.conductes || "Sin Nombre",
        paiporta: req.body.paiporta || "",
        de: req.body.de || "",
        anio: req.body.anio || "",
        director: req.body.director || false
    },
    
    {new: true})
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