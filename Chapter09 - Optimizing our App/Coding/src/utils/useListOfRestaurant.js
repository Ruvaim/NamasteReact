import React, { useEffect, useState } from 'react';

const useListOfRestaurant = (setSearchResult) => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

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

  return listOfRestaurant;
};

export default useListOfRestaurant;
