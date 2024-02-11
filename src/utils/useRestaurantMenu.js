import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  //fetchData
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  // you can add try catch method here to aviod running into major issues
  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      setResInfo(json.data);
      console.log(resInfo);
    } catch {
      console.error("Error fetching Menu:", error.message);
    }
  };
  return resInfo;
};
export default useRestaurantMenu;
