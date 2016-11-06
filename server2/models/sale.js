var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var saleSchema = new Schema({
  request: {type: Schema.Types.ObjectId, ref: 'Request'},
  amount : {type: Number, required: true},
  invalidate: {type: Boolean, required: true, default: false},
  rating: {type: Number},
  review: {type: String}
});

module.exports = mongoose.model('Sale', saleSchema);
