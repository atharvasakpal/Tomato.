const Food = require('../models/FoodModel.js');
const fs = require('fs');


//add food item
const addFoodItem =  async(req,res)=>{
    let image_name = `${req.file.filename}`;

    const food = new Food({
        name:req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image:  image_name
    });

    try{
        await food.save();
        res.json({success:true,message:'Food Added!'});
    }
    catch(err){
        console.log(err); 
        res.json({success:false, message: 'An Error Occured!'});
    }
}


const listFood = async(req,res)=>{
    try{
        const foods = Food.find({});
        console.log(foods);
        // res.json({success:true, message:foods});
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false, message: "AN ERROR OCCURED!"});
    }
}

const removeFood = async(req,res)=>{
    try{
        const foodrem = Food.findById(req.body.id);
        fs.unlink(`uploads/${foodrem.image}`,()=>{});

        await Food.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food removed"})
    }
    catch(err)
    {
        console.log(err);
        res.json({success: false, message:"AN ERROR OCCURED!"});
    }
}


module.exports = {addFoodItem, listFood,removeFood};