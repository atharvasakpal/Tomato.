import React, {useState} from "react";
import './Home.css'
import Header from "../../components/header/header";
import ExploreMenu from "../../components/exploremenu/exploremenu";
import FoodDisplay from "../../components/fooddisplay/fooddisplay";
import Appdownload from "../../components/appdownload/appdownload";


const Home  = ()=>{

    const [category,setCategory] = useState("All");

    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <Appdownload/>
            
        </div>
    )
};

export default Home
