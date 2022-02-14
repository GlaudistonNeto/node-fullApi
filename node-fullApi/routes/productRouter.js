// import controllers
const productController = require('../controllers/productController');
const reviewController = require('../controllers/reviewController');

// router
const router = require('express').Router();

// use controller
router.post('/addProduct', productController.addProduct);

router.get('/allProducts', productController.getAllProducts);

router.get('/published', productController.getPublishedProduct);

// Review URL and Controller
router.post('/addReview', reviewController.addReview);

router.get('/allReviews', reviewController.getAllReviews);

// get a product Reviews
router.get('/getProductReviews', reviewController.getProductReviews);


router.get('/:id', productController.getOneProduct);

router.patch('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
