var RequestController = require('../controllers/requestController');

module.exports = function(express){
  var requestRouter = express.Router();

  requestRouter.post('/request', RequestController.makeRequest);
  requestRouter.post('/request', RequestController.acceptRequest);
  requestRouter.get('/request', RequestController.getOpenRequest);

  return requestRouter;

}
