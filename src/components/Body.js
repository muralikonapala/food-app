import RestaurantCard from './RestaurantCard';
import listOfRes from '../utils/data';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(listOfRes);
  const [filteredRestaurants, setFilteredRestaurants] = useState(listOfRes);

  const [inputText, setInputText] = useState("");
  // useEffect(() => {
  //   fetchData();
  // })
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   //optional Chaining
  //   setListOfRestaurants(json?.data?.list);
  //   setFilteredRestaurants(json?.data?.list);

  // };

  // if (listOfRestaurants.length === 0) {
  //   // return <h1>Loading...</h1>
  //   return <Shimmer />
  // }

  return (
    <div className="container">
      <div id="filter-btn">
        <div className="serach">
          <input className="serach-box"
            type="text"
            placeholder="Search Restaurant"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
          }} />
          <button onClick={() => {
            const filteredRes = listOfRestaurants.filter((res) => {
              return res.data.name.toLowerCase().includes(inputText.toLowerCase());
            })
            setFilteredRestaurants(filteredRes);
            
          }}>Search</button>
          
        </div>
        <button onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.data.avgRating > 4 
          );
          setListOfRestaurants(filteredList);
        }}
        >
          Filter Restaurant</button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}
export default Body;