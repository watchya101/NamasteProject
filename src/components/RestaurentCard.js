import { CDN_URL } from "../utils/constant";

const StyleCard = {
  //Inline style
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;

  return (
    //style takes a JS object but i can directly pass the js object by using {} style={{ backgroundColor: "#f0f0f0"}}
    // outer bracket to notify that theres js piece of code inside.
    <div className="flexm-4 p-4 w-[300px] overflow-hidden bg-gray-100 hover:bg-gray-400" >
      <img
        className="rounded-xl"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(",")} </h4>

      <h4> {costForTwo}</h4>
      <h4>{avgRating}stars</h4>
    </div>

    //Higher Order Component
    // input- RestaurantCard => RestaurantCardPromoted reutrned
    
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  //we are returning the restaurantcard component here 
  return(props) => {
    //returning jsx here
    return (
      <div>
        <label className="absolute bg-black text-white m-2 ,-2">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
