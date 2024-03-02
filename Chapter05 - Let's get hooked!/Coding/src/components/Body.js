import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  const [searchText, setSearchText] = useState('');

  const handleSubmit = () => {
    if (searchText === '') {
      setListOfRestaurant(listOfRestaurant);
      // return;
    } else {
      const filteredRes = listOfRestaurant.filter((list) => {
        if (list.info.name.toLowerCase().includes(searchText)) {
          return list;
        }
      });
      setListOfRestaurant(filteredRes);
    }
  };

  return (
    <div className="body">
      <div className="searchContainer">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
          <div>{searchText}</div>
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
        {console.log(resList)}
        {listOfRestaurant.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
