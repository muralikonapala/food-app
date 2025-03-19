const RestaurantCard = ({ resData }) => {
  return (
    <div className="restaurant-card">
      <div id="restaurant-img">
        <img src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="restaurant" />
      </div>
      <div className="restaurant-info">
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.avgRating} Rating</h4>
        <h4>{resData.data.costForTwo}</h4>
      </div>
    </div>
  )

}

export default RestaurantCard;