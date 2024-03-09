import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
  //   resInfo?.cards[0]?.card?.card?.info;

  // const { carousel } =
  //   resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <ul>
        {/* {carousel?.map((item) => (
          <li key={item?.dish?.info?.id}>
            {item?.dish?.info?.name} - Rs.{item?.dish?.info?.price / 100}
          </li>
        ))} */}
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
