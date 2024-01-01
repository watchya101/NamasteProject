import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
// Local State Variable useState returns array can be also written as,
// const arr = useState(resList);
// const [listOfRestaurant, setListOfRestaurant] = arr;
// same as const listOfRestaurant = arr[0] and const setListOfRestaurant = arr[1];
    const [listOfRestaurant , setListOfRestaurant] = useState(resList); //here we are using destructureing


    return(
            <div className="Body">
             <div className="filter">
                <button
                className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (RESTAURANT) => RESTAURANT.info.avgRating > 4.3
                    );
                    setListOfRestaurant(filteredList);

                }} 
                >
                Top Rated Restaurant
                </button>
                </div>
             <div className="RestaurantContainer">
                  {
                  listOfRestaurant.map(RESTAURANT => <RestaurantCard key = {RESTAURANT.info.id} resData = {RESTAURANT}/>)
                  }
                   
                   
             </div>
            </div>
    );
};

export default Body;