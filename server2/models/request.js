var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
  description : { type: String, required: true },
  category : { type: Schema.Types.ObjectId, ref: 'Category'},
  user : {type: Schema.Types.ObjectId, ref: 'User'},
  professional : {type: Schema.Types.ObjectId, ref: 'Professional'},
  closed: {type: Boolean, required: true, default: false}
});

module.exports = mongoose.model('Request', requestSchema);
