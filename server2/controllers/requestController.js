var Request = require('../models/request');
var Sale = require('../models/sale');

module.exports = {
  makeRequest : function(req, res){
    var newRequest = new Request();
    newRequest.category = req.body.category;
    newRequest.user = req.decoded.id;
    newRequest.professional = req.body.professional;
    newRequest.description = req.body.description;
    newRequest.save(function(err){
      if(err){
        res.json({success: false});
      }else{
        res.json({success: true});
      }
    });
  },
  getOpenRequest : function(req, res){
    Request.find({closed: false, professional: req.decoded.id}, function(err, request){
      if(err){
        res.json({success: error});
      }else{
        res.json(request);
      }
    })
  },
  acceptRequest : function(req, res){
    Request.update({_id : req.body.request}, {$set : {closed : true}},{upsert: true}, function(err){
      if(err){
        res.json({success: false})
      }else{
        var myNewSale = new Sale();
        myNewSale.amount = req.body.amount;
        myNewSale.request = req.body.request;
        if(req.body.rating){
          myNewSale.rating = req.body.rating;
        }
        if(req.body.review){
          myNewSale.review = req.body.review;
        }
        myNewSale.save(function(err){
          if(err){
            res.json({success: false});
          }else{
            res.json({success: true});
          }
        })
      }
    });
  },
  invalidateSale : function(req, res){
    Sale.update({_id : req.body.sale}, {$set: { invalidate: true}}, function(err){
      if(err){
        res.json({success: false});
      }else{
        res.json({success: true})
      }
    });
  }
}
