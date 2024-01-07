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
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);


    const [searchText, setSearchText] = useState([]);
//whenever state variable updates, react triggers a reconciallation cycle
    useEffect(() => {
        fetchData();
        
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9981729&lng=72.8274691&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
            const pathTest = json?.data?.cards?.filter((rest)=> rest.card?.card?.id === "restaurant_grid_listing");
            const betterPath = pathTest[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const fullpath = json?.data?.cards?.filter((rest)=> rest.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            //const resPath = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(fullpath);
        setListOfRestaurant(betterPath);
        setFilteredRestaurant(betterPath);
    };

    //conditional rendering
   

    return listOfRestaurant.length == 0? <Shimmer/> : (
            <div className="Body">
             <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                     value={searchText}
                     onChange = {(e) => {
                        setSearchText(e.target.value);
                     }}
                     />
                    <button onClick={()=> {
                        //Filter the restaurent cards and update the UI
                        //searchText
                        
                        const filteredRestaurantList = listOfRestaurant.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurantList)
                        console.log(searchText)
                    }}>
                     Search   
                    </button>
                </div>
                <button
                className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (RESTAURANT) => RESTAURANT.info.avgRating > 4.3
                    );
                    setFilteredRestaurant(filteredList);

                }} 
                >
                Top Rated Restaurant
                </button>
                </div>
             <div className="RestaurantContainer">
                  {
                  filteredRestaurant.map(RESTAURANT => <RestaurantCard key = {RESTAURANT.info.id} resData = {RESTAURANT}/>)
                  }
                   
                   
             </div>
            </div>
    );
};

export default Body;