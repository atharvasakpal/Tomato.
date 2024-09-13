
const Order = require('../models/orderModel');
const User = require('../models/userModel');
const Stripe = require('stripe');


const stripe = new Stripe("sk_test_51PyFeI2NQ8EPjLSU4TQsizNmgrc1ib4HnDXbmr36rYEJ5veZ2QhfpRtW5FmORU0SKeKbVKuTxBMkQrz31D4ZiMW300UzffBUXl");

// import {loadStripe} fr om '@stripe/stripe-js';

// const stripe = await loadStripe(process.env.STRIPE_KEY);


//placing user order for the frontend
const placeOrder = async(req,res)=>{
    try{

        const frontend_url = 'http://localhost:3000';

        const newOrder = new Order({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save();
        await User.findByIdAndUpdate(req.body.userId,{cartData:{}});



        const line_items = req.body.items.map((item)=>({
            price_data: {
                currency:'usd',
                product_data: {
                    name:item.name
                },
                unit_amount: item.price*100
            },
            quantity: item.quantity
        }))


        line_items.push({
            price_data:{
                currency:'usd',
                product_data:{
                    name: 'Delivery Charges'
                },
                unit_amount: 2*100
            }
            ,quantity: 1
        })

       
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url : `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url : `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
    
    



        res.json({success:true, session_url:session.url})

        

    }
    catch(err)
    {
        console.log(err);
        res.json({success:false, message: 'ERROR'})

    }
  
}

const verifyOrder = async(req,res)=>{
    const {success, orderId} = req.body;
    try{
        if(success== 'true')
        {
            await Order.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:'Paid'});
        }
        else
        {
            await Order.findByIdAndDelete(orderId);
            res.json({success:false,message:'Not Paid'});
        }
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false,message:err});
    }
}


//user order for the frontend
const userOrders = async(req,res)=>{
    try{
        const orders = await Order.find({userId:req.body.userId});
        res.json({success:true, data:orders});
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false, message:err});
    }
} 

const listOrders = async(req,res)=>{
        try{
            const orders = await Order.find({});
            res.json({success:true,data: orders});

        }
        catch(err)
        {
            console.log(err);
            res.json({success:false, message:err})
        }

}


//api for updating order status
const updateStatus = async(req,res)=>{
    try{
        await Order.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true, message: 'Status Updated!'});
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false, message: err});
    }
}


module.exports = {placeOrder,verifyOrder,userOrders,listOrders,updateStatus};