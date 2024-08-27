import React, {useState} from "react";
import { assets } from "../../frontend_assets/assets";
import './fooditem.css'
const FoodItem = ({_id,name, category,description, image,price})=>{

    const [itemCount, setItemCount] = useState(0);

    return(
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={image}  alt="" className="food-item-img" />
                {!itemCount
                        ?<img className="add" onClick={()=>{setItemCount(prev=>prev+1)}} src={assets.add_icon_white} alt="" />:
                        <div className="food-item-counter">
                            <img onClick={()=>{setItemCount(prev=>prev-1)}} src={assets.remove_icon_red} alt="" />
                            <p>{itemCount}</p>
                            <img onClick={()=>{setItemCount(prev=>prev+1)}} src={assets.add_icon_green} alt="" />
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