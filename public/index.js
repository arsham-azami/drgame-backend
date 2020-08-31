const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

require('dotenv').config();
const { urlencoded } = require('express');
const ProductRouter = require('./router/products');
const LoginRouter = require('./router/login');
const LogupRouter = require('./router/logup');

app.get('/', (req, res) => {
	res.render('index.html');
});

app.set('views', './views');
app.use(express.json());
app.use(express.static('public'));
app.use('/api/products', ProductRouter);
app.use('/api/login', LoginRouter);
app.use('/api/logup', LogupRouter);

if (process.env.NODE_ENV == 'development') {
	console.log('you are in development enviroment');
}
if (process.env.NODE_ENV == 'production') {
	console.log('you are in production enviroment');
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Hello i am Dr.game which listening to port ${PORT}`);
});
//connecting to the database
async function connecting() {
	try {
		await mongoose.connect('mongodb://localhost/gaming');
		console.log('connected to mongodb...');
	} catch (e) {
		console.error('not connected to mongodb...', e);
	}
}
connecting()
