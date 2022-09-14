const ProductController = require('../controllers/product.controllers');

module.exports = (app) => {
	// app.get('/api', ProductController.index);
	app.post('/api/product', ProductController.createProduct);
	app.get('/api/product', ProductController.getAllProduct);
	app.get('/api/product/:id', ProductController.getProduct);
	//update items
	app.put('/api/product/:id', ProductController.updateProduct);
	//delete items, the id here must match the params in the controller
	app.delete('/api/product/:id', ProductController.deleteProduct);
}
