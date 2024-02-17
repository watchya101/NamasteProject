import { useEffect, useState } from "react";

const useRestaurantInfo = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]); 

    const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9981729&lng=72.8274691&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json = await data.json();
        const pathTest = json?.data?.cards?.filter(
          (rest) => rest.card?.card?.id === "restaurant_grid_listing"
        );
        const betterPath =
          pathTest[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        //const resPath = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("Body Rendered");
        setListOfRestaurant(betterPath);
      };
      return listOfRestaurant;
}

export default useRestaurantInfo;