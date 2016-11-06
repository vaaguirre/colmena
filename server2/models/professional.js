var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var professionalSchema = new Schema({
  name : {type: String, required: true},
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true, select: false},
  skills : [{type: String}],
  categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
  active: {type: Boolean, required: true, default: false},
  contact: {type: String, required: true}
});

professionalSchema.pre('save', function(next) {
	var professional = this;
	//Hashing the password only if the password has been changed or user is new
	if (!professional.isModified('password')) return next();
	//Generate the hash
	bcrypt.hash(professional.password, null, null, function(err, hash) {
		if (err) return next(err);
		//Change the password to the hashed version
		professional.password = hash;
		next();
	});
});

professionalSchema.methods.comparePassword = function(password) {
	var professionalSchema = this;
	return bcrypt.compareSync(password, professionalSchema.password);
};

module.exports = mongoose.model('Professional', professionalSchema);
