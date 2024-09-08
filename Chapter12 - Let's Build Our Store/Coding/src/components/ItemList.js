import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //   console.log('Items', items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info.name}</span>
              <span> - ₹ {item?.card?.info.price / 100}</span>
            </div>
            <p className="text-sm">{item?.card?.info.description}</p>
          </div>
          {item?.card?.info?.imageId && (
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className="p-2 mx-6 mt-16 rounded-lg bg-white shadow-lg  m-auto"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt="Item Image"
                className="w-full"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
