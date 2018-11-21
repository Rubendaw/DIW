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
    incidentegrave:String,
    tip_42_a :String,
    tip_42_b :String,
    tip_42_c :String,
    tip_42_d :String,
    tip_42_e :String,
    tip_42_f :String,
    tip_42_g :String,
    tip_42_h :String,
    tip_42_i :String,
    tip_42_j :String,
    tip_42_k :String,
    tip_42_l :String,
    tip_42_m :String,
    tip_42_n :String,
    tip_42_o :String,
    tip_42_p :String,
    tipoAmonA :Boolean,
    tipoAmonB :Boolean,
    tipoAmonC :Boolean,
    tipoAmonD :Boolean,
    tipoAmonE :Boolean,
    dies:String,
    tasques:String,
    tasque:String,
    dies1:String,
    horari:String,
    extracolars: String,
    tipoAmonH:Boolean,
    suspensio:String,
    tipoAmonI:Boolean,
    assistencia:String,
    desde:String,
    fina:String,
    incidente:String,
    tip_35_a: String,
    tip_35_b: String,
    tip_35_c: String,
    tip_35_d: String,
    tip_35_e: String,
    tip_35_f: String,
    tip_35_g: String,
    tip_35_h: String,
    tip_35_i: String,
    tip_35_j: String,
    tip_35_k: String,
    tip_35_l: String,
    tip_35_m: String,
    tip_35_n: String,
    tip_35_o: String,
    tip_35_p: String,
    tip_35_q: String,
    tip_35_r: String,
    tip_35_s: String,
    telefon:String,
    paiporta:String,
    de:String,
    anio:String,
    director:String,
},{
    timestamps:true
});


module.exports = mongoose.model('Incidencia',IncidenciaSchema);