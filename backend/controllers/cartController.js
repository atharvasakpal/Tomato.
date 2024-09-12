
const User = require('../models/userModel');

//add items to cart
const addToCart=  async(req,res)=>{
    try{
        let userData = await User.findOne({_id: req.body.userId})
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] =1;
        }
        else{
            cartData[req.body.itemId] +=1;
        }

        await User.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:'Added to Cart!'});
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false,message:'Error!'}); 
    }
}

//remove items from cart

const removeFromCart = async(req,res)=>{
    try{
        let userData = await User.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0)
        {
            cartData[req.body.itemId] -=1;
        }
        await User.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:'Removed from cart!'});
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false,message:"Error!"})
    }
}

//fetch user cart data
const getCart = async(req,res)=>{
     try{
        let userData = await User.findById(req.body.userId)
        let cartData = await userData.cartData;
        res.json({success:true, message:cartData})
     }
     catch(err){
        console.log(err);
        res.json({success:false, message:'Error!'})
     }
}

module.exports= {addToCart, removeFromCart,getCart};