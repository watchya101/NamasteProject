import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
// Local State Variable 
    const [listOfRestaurent , setListOfRestaurent] = useState([{
        "info": {
          "id": "8249",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Star Mall Dadar",
          "areaName": "Dadar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.3,
          "parentId": "166",
          "avgRatingString": "4.3",
        }
       
      },
      {
        "info": {
          "id": "239071",
          "name": "McDonald's",
          "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
          "locality": "Kohinoor corne",
          "areaName": "Prabhadevi",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "630",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
        }
      },
      {
        "info": {
          "id": "24486",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "gmj4uvsgcc5j3apqygpv",
          
          "areaName": "Lower Parel",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4,
          "avgRatingString": "4.0",
         
  
        }
      }]);

   

    return(
            <div className="Body">
             <div className="filter">
                <button
                className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurent.filter(
                        (RESTAURANT) => RESTAURANT.info.avgRating > 4
                    );
                    setListOfRestaurent(filteredList);

                }} 
                >
                Top Rated Restaurant
                </button>
                </div>
             <div className="RestaurentContainer">
                  {
                  listOfRestaurent.map(RESTAURANT => <RestaurentCard key = {RESTAURANT.info.id} resData = {RESTAURANT}/>)
                  }
                   
                   
             </div>
            </div>
    );
};

export default Body;