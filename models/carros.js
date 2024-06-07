const mongoose = require('mongoose'); 

const carrosSchema = new mongoose.Schema({ 

nome: { 
type: String,
rured: true, 
},
 
marca: { 
type: String, 
required: true, 
},

modelo: { 
type: String, 
required: true, 
},

ano: {
type: Float64Array,
required: true,
},

tipo: { 
type: String, 
required: true, 
}, 

foto: { 
type: String, 
required: true, 
}, 
}); 

const carros = mongoose.model('carro', carrosSchema);

module.exports = carros; 