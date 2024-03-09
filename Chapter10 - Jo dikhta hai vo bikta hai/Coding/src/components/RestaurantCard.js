import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    // <div className="resCard" style={styleCard}>

    <div className="m-2 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200 hover:border-black hover:border-[1px]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
        className="rounded-lg"
      />
      {/* {resData?.info?.cuisines.map((cuisine) => (
            <h4>{cuisine}</h4>
          ))} */}
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')} stars</h4>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h6>{sla?.deliveryTime} minutes</h6>
    </div>
  );
};

export default RestaurantCard;
