var Category = require('../models/category');
module.exports = {
  getCategories : function(req, res){
    var query = Category.find({});
    query.select('name');
    query.exec(function(err, categories){
      if(err){
        res.json({success: false, messsage: 'Try later'});
      }else{
        res.json(categories);
      }
    })
  },
  createCategory : function(req, res){
    var newCategory = new Category();
    newCategory.name = req.body.name;
    newCategory.save(function(err){
      if(err){
        res.json({success: false});
      }else{
        res.json({success: true});
      }
    });
  },
  getCategory : function(req, res){
    Category.findById(req.params.categoryID, function(err, category){
      if(err){
        res.json(err);
      }else{
        res.json(category);
      }
    });
  }
}
