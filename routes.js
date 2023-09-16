const express = require('express');
const router = express.Router();
const {User} = require('./db');
const {Product} = require('./db')

router.post('/api/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username, password});
      

    if (user) {

        res.send({status: 'success', username: user.username});
    } else {
        res.send('Login failed');
    }
});
router.post('/api/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username, password});
        if(user){
            return res.status(400).json({ error: 'Username is already taken' });
        }
        const id = Math.floor(100000 + Math.random() * 900000);
        const newUser = new User({ id , username, password });

await newUser.save();

    // Registration successful
    res.status(201).json({ status: 'success' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});


router.get('/api/products', async (req, res) => {

    try {
        const result = await Product.findOne({}, {products: 1}); // Exclude _id and include only products field
        res.json(result.products);
    console.log(result.products)

    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred while fetching products.'});
    }

});


router.post('/api/cart', async (req, res) => {
    const {username, cart} = req.body;

  

      try {
        const filter = { username, 'cart.productId': cart.productId };
        const update = {
            $inc: {
                'cart.$.numberOfProducts': 1
            }
        };
        const options = {
            new: true, // Return the updated document
        };

        const user = await User.findOneAndUpdate(filter, update, options);
        if (!user) {
          // If the product doesn't exist in the cart, add it with numberOfProducts set to 1
          const newUser = await User.findOneAndUpdate(
              { username },
              { $push: { cart: cart } },
              { new: true }
          );
          return res.status(200).json({ status: 'success', user: newUser });
      }
        console.log(user)

        return res.status(200).json({status: 'success', user});
    } catch (error) {
        console.error('Error adding product to cart:', error);
        return res.status(500).json({error: 'An error occurred while adding the product to the cart'});
    }
});


module.exports = router;
