import React, {useContext, useState} from "react";
import { assets } from "../../frontend_assets/assets";
import './fooditem.css'
import { StoreContext } from "../../context/StoreContext";


const FoodItem = ({id,name, category,description, image,price})=>{


    const {cartItems, addToCart, removeFromCart,url} = useContext(StoreContext)


    return(
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={url+'/images/'+image}  alt="" className="food-item-img" />
                {!cartItems[id]
                        ?<img className="add" onClick={()=>{addToCart(id)}} src={assets.add_icon_white} alt="" />:
                        <div className="food-item-counter">
                            <img onClick={()=>{removeFromCart(id)}} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[id]}</p>
                            <img onClick={()=>{addToCart(id )}} src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <div className="food-item-desc-price">
                    <p className="desc">{description}</p>
                    <p className="price">${price}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodItem;