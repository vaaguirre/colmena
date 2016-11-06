var CategoryController = require('../controllers/categoryController');
module.exports = function(express){
  var categoryRouter = express.Router();

  categoryRouter.get('/category/:categoryID', CategoryController.getCategory);

  categoryRouter.route('/category')
  .get(CategoryController.getCategories)
  .post(CategoryController.createCategory);

  return categoryRouter;
}
