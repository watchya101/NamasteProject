import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
const RestaurantMenu =  () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId)
    

    useEffect(() => {
        fetchMenu();
    }, []);
        const fetchMenu = async () => {
            try{
            const data = await fetch(MENU_URL + resId);
            const json = await data.json();

           // console.log(json);
            setResInfo(json.data);
            console.log(resInfo);
            
        }catch {
            console.error("Error fetching Menu:", error.message);
        }
        
    }
   
        
        
          //GraphQL deals with overfetching and underfetching
          
    if (!resInfo) return (<Shimmer/>); 
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    
        const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
        
        return(
        <div className="menu">
            <h1>{name}</h1>
            <h3><p>{cuisines.join(", ")}</p></h3>
            <h3>{costForTwoMessage}</h3>
            <h2><p>Menu</p></h2>
            <ul>
                {/* whenever using map try to use key */}
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs.{(item.card.info.price/100)}</li>)}  
                <li>{itemCards[0].card?.info?.name}</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;