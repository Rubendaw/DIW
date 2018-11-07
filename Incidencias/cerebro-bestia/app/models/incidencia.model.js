const mongoose= require('mongoose');

const IncidenciaSchema = mongoose.Schema({
    alumne:String,
    profesor:String,
    lloc:String,
    data:Date,
    grupo:String,
    horario:String,
    hora:String,
    cambio:String,
    incidenteLeve:String,
    dies:String,
    tasques:String,
    tasque:String,
    dies1:String,
    horari:String,
    extracolars: String,
    suspensio:String,
    assistencia:String,
    desde:String,
    fina:String,
    incidente:String,
    telefon:String,
    paiporta:String,
    de:String,
    anio:String,
    director:String,
},{
    timestamps:true
});


module.exports = mongoose.model('Incidencia',IncidenciaSchema);