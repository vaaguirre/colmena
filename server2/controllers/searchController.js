var Professional = require('../models/professional');

module.exports = {
  searchProfessionals : function(req, res){
    var category = req.params.categoryID;
    Professional.find({active: false, categories : { $in : [category]}}, function(err, professionals){
      if(err){
        res.json({success: false})
      }else{
        res.json(professionals);
      }
    })
  }
}
