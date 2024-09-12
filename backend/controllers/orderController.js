const Order = require('../models/orderModel');
const User = require('../models/userModel');
const Stripe = require('stripe');


const stripe = new Stripe(process.env.STRIPE_SECRET);

// import {loadStripe} fr om '@stripe/stripe-js';

// const stripe = await loadStripe(process.env.STRIPE_KEY);


//placing user order for the frontend
const placeOrder = async(req,res)=>{
    try{

        const frontend_url = 'https://localhost:3000';

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
                currency:'inr',
                product_data: {
                    name:item.name
                },
                unit_amount: item.price *100 * 80
            },
            quantity: item.quantity
        }))


        line_items.push({
            price_data:{
                currency:'inr',
                product_data:{
                    name: 'Delivery Charges'
                },
                unit_amount: 2*100*80
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


module.exports = {placeOrder};