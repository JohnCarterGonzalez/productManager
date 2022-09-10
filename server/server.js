const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded( { extended: true } )); //allows json objs w/strings and arrays

require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(8000, () =>{
	console.log("listening at port 8000")
})
