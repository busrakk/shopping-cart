import React from "react";
import { useBasket } from "../../contexts/BasketContext";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Basket = () => {
  const { items, removeFromBasket } = useBasket();

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  // console.log(items)

  return (
    <div className="mt-28 container">
      {items.length < 1 && (
        <div className="flex w-full max-w-full overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-center w-12 bg-yellow-400">
            <AiOutlineInfoCircle className="text-white" size={24} />
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-yellow-400">Uyarı</span>
              <p className="text-sm text-gray-600">
                Sepetinizde ürün bulunmamaktadır!
              </p>
            </div>
          </div>
        </div>
      )}

      {items.length > 0 && (
        <>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/product/${item.id}`}>
                {item.name} - {item.price}
                <img src={item.image1} alt={item.name} className="w-24" />
              </Link>

              <button
                onClick={() => removeFromBasket(item.id)}
                className="text-white bg-gray-500 hover:bg-gray-600 flex ml-auto border-0 py-2 px-6 focus:outline-nonerounded"
              >
                Sepetten Sil
              </button>
            </li>
          ))}

          <div>Total: {total}</div>
        </>
      )}
      
    </div>
  );
};

export default Basket;
