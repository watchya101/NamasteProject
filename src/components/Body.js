import RestaurantCard from "./RestaurentCard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
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
        console.log("Body Rendered");
        setListOfRestaurant(betterPath);
        setFilteredRestaurant(betterPath);
    };


    // fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     mode: "cors", // no-cors, *cors, same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //       "Content-Type": "application/json",
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: "follow", // manual, *follow, error
    //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     body: JSON.stringify({
    //     filters: {},
    //     lat: 18.9981729,
    //     lng: 72.8274691,
    //     nextOffset: "COVCELQ4KIDAsr6zh6jofjCnEzgC",
    //     page_type: "DESKTOP_WEB_LISTING",
        
    //     seoParams: {
    //         apiName: "FoodHomePage",
    //         pageType: "FOOD_HOMEPAGE",
    //         seoUrl: "https://www.swiggy.com/",
    //     },
    //     widgetOffset: {
    //         NewListingView_Topical_Fullbleed: "",
    //         NewListingView_Topical_Version2: "",
    //         NewListingView_category_bar_chicletranking_TwoRows: "",
    //         NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
    //         Restaurant_Group_WebView_SEO_PB_Theme: "",
    //         collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
    //         inlineFacetFilter: "",
    //         restaurantCountWidget: ""
    //     }, 
    //     _csrf: "VGkZZIMGFROF-6vCoVxLsllhGGiAW_VkgamtaSYY",
    //     }) // body data type must match "Content-Type" header
    // }).then((response)=> response.json()).then((json)=>console.log(json)).catch(rejected => {
    //     console.log("rejected");
    // });


    
    // async function postData(url = "", data = {}) {
    //   // Default options are marked with *
    //   const response = await fetch(url, {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     mode: "cors", // no-cors, *cors, same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //       "Content-Type": "application/json",
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: "follow", // manual, *follow, error
    //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     body: JSON.stringify({
    //         filters: {},
    //         lat: 18.9981729,
    //         lng: 72.8274691,
    //         nextOffset: "COVCELQ4KIDAsr6zh6jofjCnEzgC",
    //         page_type: "DESKTOP_WEB_LISTING",
            
    //         seoParams: {
    //             apiName: "FoodHomePage",
    //             pageType: "FOOD_HOMEPAGE",
    //             seoUrl: "https://www.swiggy.com/",
    //         },
    //         widgetOffset: {
    //             NewListingView_Topical_Fullbleed: "",
    //             NewListingView_Topical_Version2: "",
    //             NewListingView_category_bar_chicletranking_TwoRows: "",
    //             NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
    //             Restaurant_Group_WebView_SEO_PB_Theme: "",
    //             collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
    //             inlineFacetFilter: "",
    //             restaurantCountWidget: ""
    //         }, 
    //         _csrf: "VGkZZIMGFROF-6vCoVxLsllhGGiAW_VkgamtaSYY",
    //     }) // body data type must match "Content-Type" header
    //   });
    //   return response.json(); // parses JSON response into native JavaScript objects
    // }
    
    // setTimeout(() => {
    //     postData("https://www.swiggy.com/dapi/restaurants/list/update").then((data) => {
    //                     console.log(data); // JSON data parsed by `data.json()` call
    //                   });
    // }, 1000);

    // conditional rendering
   

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
                        // Filter the restaurent cards and update the UI
                        const filteredRestaurantList = listOfRestaurant.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                       
                        setFilteredRestaurant(filteredRestaurantList);
                        console.log(searchText);
                        
                    }}>
                     Search   
                    </button>
                </div>
                <button
                className="filter-btn" 
                onClick={() => {
                    // postData("https://www.swiggy.com/dapi/restaurants/list/update", { answer: 42 }).then((data) => {
                    //     console.log(data); // JSON data parsed by `data.json()` call
                    //   });
    
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
                  filteredRestaurant.map(RESTAURANT => 
                  <Link key = {RESTAURANT.info.id} to={'restaurants/'+RESTAURANT.info.id}>
                    <RestaurantCard  resData = {RESTAURANT}/>
                  </Link>
                  )
                  }
                   
                   
             </div>
            </div>
    );
};

export default Body;