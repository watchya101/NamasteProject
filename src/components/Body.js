import RestaurantCard from "./RestaurentCard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
const Body = () => {
// Local State Variable useState returns array can be also written as,
// const arr = useState(resList);
// const [listOfRestaurant, setListOfRestaurant] = arr;
// same as const listOfRestaurant = arr[0] and const setListOfRestaurant = arr[1];
    const [listOfRestaurant , setListOfRestaurant] = useState([]); //here we are using destructureing

    useEffect(() => {
        fetchData();
        
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9981729&lng=72.8274691&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
            const resPath = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(resPath);
        setListOfRestaurant(resPath);
    };

    //conditional rendering
    if(listOfRestaurant.length == 0){
        return <Shimmer/>;
    }

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