import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { AiFillEye, AiFillMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
// import moment from "moment";
import { useBasket } from "../../contexts/BasketContext";

const ProductItem = ({ item }) => {

  const { addToBasket, items } = useBasket()
  const findBasketItem = items.find((basketItem) => basketItem.id === item.id)

  //console.log(item)

  return (
    <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-25 py-28 px-10 flex justify-center items-center">
      <img
        className="group-hover:opacity-60 w-[200px] h-[150px] transition duration-500"
        src={item.image1}
        alt={item.name}
      />
      <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
        <div>
          <p className="group-hover:opacity-60 transition duration-500 text-lg leading-5 text-gray-600">
           {item.name} - {item.user.name}
           {/* {moment(item.created_at).format("DD/MM/YYYY")} */}
          </p>
        </div>
        <div>
          <p className="group-hover:opacity-60 transition duration-500 text-md font-semibold leading-5 text-gray-800">
            $ {item.price}
          </p>
        </div>
      </div>
      <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
        <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
        <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
      </div>
      <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
        <button onClick={() => addToBasket(item, findBasketItem)}>
          {
            findBasketItem ? <AiFillMinusCircle size={21} /> : <MdAddCircle size={21} />
          }
        </button>
        <Link to={`/product/${item.id}`}>
          <AiFillEye size={21} />
        </Link>
        <button>
          <FaHeart size={21} />
        </button>
      </div>
      <div className="absolute top-4 right-6">
        {/* <p className="text-base leading-4 pb-0.5 text-gray-600 border-b-2 border-gray-600">
          New
        </p> */}
      </div>
    </div>
  );
};

export default ProductItem;
