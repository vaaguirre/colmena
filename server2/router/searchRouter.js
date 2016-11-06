var SearchController = require('../controllers/searchController');

module.exports = function(express){
  var searchRouter = express.Router();
  searchRouter.get('/search/:categoryID', SearchController.searchProfessionals);

  return searchRouter;
}
