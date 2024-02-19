import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  

  //GraphQL deals with overfetching and underfetching

  if (!resInfo) return <Shimmer />;
  //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const path =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const path2 =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(path2);
  // console.log(itemCards);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu p-5">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h3>
        <p>{cuisines.join(", ")}</p>
      </h3>
      <h3>{costForTwoMessage}</h3>
      <h2>
        <p className="pb-5">Menu</p>
      </h2>
      <ul>
        {/* whenever using map try to use key */}
        {path.hasOwnProperty("itemCards")
          ? path.itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {item.card.info.price / 100 || item.card.info.defaultPrice}
              </li>
            ))
          : path2.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {item.card.info.price / 100 || item.card.info.defaultPrice}
              </li>
            ))}
        {/* {itemCards.map((item) => <li key={item.card.info.id}>
                    {item.card.info.name} -
                 Rs.{val = (item.card.info.price/100)||(item.card.info.defaultPrice)} </li>)}  
                 <li>{itemCards[1].card?.info?.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
