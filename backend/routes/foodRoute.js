const express = require('express');
const {addFoodItem, listFood,removeFood} = require('../controllers/foodContoller');
const multer = require('multer');



//multer middleware
const upload = multer({ dest: 'uploads/' })


const router = express.Router();

router.post('/add',upload.single ('image'),addFoodItem); //using controllers, look at web dev notes

router.get('/list', listFood);

router.post('/remove',removeFood)

module.exports = router;