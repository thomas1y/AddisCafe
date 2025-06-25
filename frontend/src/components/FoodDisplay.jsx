import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = () => {
  const store = useContext(StoreContext);
  const food_list = store?.foodList || [];
 // Prevent crash if undefined

  return (
    <div className='food-display' id='menu'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.length === 0 ? (
          <p style={{ color: '#aaa' }}>No food items available.</p>
        ) : (
          food_list.map((item) => (
            <FoodItem
              key={item._id || item.name} // Prefer unique key
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
