const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/local',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const User = mongoose.model('users', {
  id: Number,
  username: String,
  password: String,
  cart: [{
    productId: Number,
    numberOfProducts: Number,
  }],
  orders: [
      {
          orderNumber: String,
          items: [
              {
                  productId: Number,
                  numberOfProducts: Number,
              },
          ],
          orderedDate: String,
      },
  ],
});

  const Product = mongoose.model('products',{
    products: Array,
    total:Number,
    skip:Number,
    limit:Number,
  })
  module.exports = {
    mongoose,
    User,     
    Product
  };