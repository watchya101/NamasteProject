import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
const Body = () => {
    return(
            <div className="Body">
             <div className="search"> Search  </div>
             <div className="RestaurentContainer">
                  {
                  resList.map(RESTAURANT => <RestaurentCard resData = {RESTAURANT}/>)
                  }
                   
                   
             </div>
            </div>
    );
};

export default Body;