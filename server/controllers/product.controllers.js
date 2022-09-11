const Product = require('../models/product.model.js'); //import model


module.exports.index = (req, res) => {
	res.json( { message: "Hello, JC" });
}

module.exports.createProduct = (req, res) => {
	Product.create(req.body)
		.then(product => res.json(product))
		.catch(err => res.json(err));
}

module.exports.getAllProduct = (req, res) => {
	//mongoose method for finding all product entries into the db
	Product.find({})
		.then(product => {
			console.log(product);
			res.json(product);
		})
}

module.exports.getProduct = (req, res) => {
	Product.findOne({_id:req.params.id})
		.then(product => res.json(product))
		.catch(err => res.json(err))
}
	
