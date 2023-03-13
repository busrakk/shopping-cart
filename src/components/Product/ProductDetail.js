import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
// import useDelayCallback from "../helpers/useDelayCallback";
import { productFindApi } from "../../service/serviceApi";
import { useBasket } from "../../contexts/BasketContext";

const ProductDetail = () => {
  const params = useParams();

  const [product, setProduct] = useState({});
  // const [isLoading, setIsLoading] = (true)

  const { addToBasket, items } = useBasket()
  const findBasketItem = items.find((item) => item.id === params.id)

  useEffect(() => {
    getProduct();
  });

  const getProduct = () => {
    productFindApi(params.id).then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          //setIsLoading(false)
          setProduct(res.data.data);
        }
      } else {
        setProduct([]);
      }
    });
  };

  // console.log(product?.['user']?.name)

  return (
    <>
      {product && (
        <>
          <div className="container py-4 flex items-center gap-3 mt-24">
            <Link to="/" className="text-primary text-base">
              <AiOutlineHome />
            </Link>
            <span className="text-sm text-gray-400">
              <AiOutlineRight />
            </span>
            <p className="text-gray-600 font-medium">Product</p>
          </div>
          <div className="container grid grid-cols-2 gap-16 rounded-lg">
            <div>
              <img
                src={product.image1}
                alt={product.name}
                className="w-full h-[500px] rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-xl font-medium uppercase mb-2">
                {product.name}
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                eius eum reprehenderit dolore vel mollitia optio consequatur hic
                asperiores inventore suscipit,
              </p>
              <div className="flex items-baseline mb-1 space-x-6 mt-4">
                <p className="text-3xl text-primary font-semibold">
                  ${product.price}
                </p>
                <p className="text-2xl text-gray-400 line-through">
                  ${product.special_price}
                </p>
                {product.in_stock ? (
                  <span className="text-green-600 font-medium">Stokta</span>
                ) : (
                  <span className="text-red-600 font-medium">Tükendi</span>
                )}
              </div>
              <div className="space-y-2 mt-4">
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Satıcı: </span>
                  <span className="text-gray-600">
                    {product?.["user"]?.name}
                  </span>
                </p>
              </div>

              <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <Link href="#">
                  <button onClick={() => addToBasket(product, findBasketItem)}>
                    {
                      findBasketItem ? 
                      <div className="text-white bg-gray-500 hover:bg-gray-600 flex ml-auto border-0 py-2 px-6 focus:outline-nonerounded">
                        Sepetten Sil
                      </div> : 
                      <div className="text-white bg-indigo-500 hover:bg-indigo-600 flex ml-auto border-0 py-2 px-6 focus:outline-nonerounded">
                        Sepete Ekle
                      </div>
                    }
                  </button>
                </Link>
                <Link href="#">
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </Link>
              </div>

              <div className="flex gap-3 mt-4">
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <BsFacebook />
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <BsTwitter />
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <BsInstagram />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
