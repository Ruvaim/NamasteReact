import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSubmit = () => {
    const filteredRes = listOfRestaurant.filter((list) => {
      if (list.info.name.toLowerCase().includes(searchText.toLowerCase())) {
        return list;
      }
    });
    setSearchResult(filteredRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const res = await data.json();

    setListOfRestaurant(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchResult(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="searchContainer">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setListOfRestaurant(
                listOfRestaurant.filter((list) => list.info.avgRating > 4.5)
              );
              console.log(listOfRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="resContainer">
        {/* Restaurant Card */}

        {searchResult?.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
