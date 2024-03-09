import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    // <div className="resCard" style={styleCard}>

    <div className="resCard" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
        className="resLogo"
      />
      {/* {resData?.info?.cuisines.map((cuisine) => (
            <h4>{cuisine}</h4>
          ))} */}
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')} stars</h4>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h6>{sla?.deliveryTime} minutes</h6>
    </div>
  );
};

export default RestaurantCard;
