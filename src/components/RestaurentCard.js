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
    <div className="res-card" style={StyleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")} </h4>

      <h4> {costForTwo}</h4>
      <h4>{avgRating}stars</h4>
    </div>
  );
};

export default RestaurantCard;
