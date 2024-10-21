import { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { getFoodItems } from "./Helper/apiCall";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    getFoodItems().then((data) => {
      console.log(data);
      setFoodList(data);
    });
  }, []);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              ></FoodItem>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
