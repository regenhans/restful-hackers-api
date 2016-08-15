//dependencies
var restful = require('node-restful'),
    mongoose = restful.mongoose;


var productSchema = new mongoose.Schema({
   name: String,
   surname: String,
   adress: String,
   creation_date:{
      type: Date,
      default: Date.now
   },
   active: Boolean
});

//return model
module.exports = restful.model('Miembros', productSchema)
