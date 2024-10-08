import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import resList from '../utils/mockData';
import { useContext, useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useListOfRestaurant from '../utils/useListOfRestaurant';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
const Body = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  const listOfRestaurant = useListOfRestaurant(setSearchResult);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { setUserName,loggedInUser } = useContext(UserContext);

  // console.log('List', listOfRestaurant);

  const handleSubmit = () => {
    const filteredRes = listOfRestaurant.filter((list) => {
      if (list.info.name.toLowerCase().includes(searchText.toLowerCase())) {
        return list;
      }
    });
    setSearchResult(filteredRes);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks Like You're Offline! <br />
        Please Check your internet connection
      </h1>
    );

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 bg-green-100 m-4 rounded-lg"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>

        {/* <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              // setListOfRestaurant(
                // listOfRestaurant.filter((list) => list.info.avgRating > 4.5)
              // );
              useListOfRestaurant(listOfRestaurant.filter((list) => list.info.avgRating > 4.5))
              console.log(listOfRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div> */}
        <div className="m-4 p-4 flex items-center">
          <label>Username: </label>
          <input
            type="text"
            className="border border-black px-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* Restaurant Card */}

        {searchResult?.map((res) => (
          <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
            {res.info.isOpen ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
