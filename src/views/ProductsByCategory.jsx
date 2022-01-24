import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../store/actions/products";
import { Link, useParams } from "react-router-dom";

const ProductsByCategory = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductsByCategory(categoryId));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex gap-x-4 p-5 bg-white">
          {products.map(
            ({
              _id,
              name,
              brandName,
              productImage,
              avgRating,
              sellPrice,
              mrp,
              isPrime,
            }) => (
              <Link
                to={`/products/${_id}`}
                key={_id}
                className="rounded-sm shadow-md"
              >
                <div className="flex flex-col p-5 bg-white">
                  <div>
                    <img src={productImage} alt={name} />
                  </div>
                  <div>{name}</div>
                  <div className="text-gray-600 pt-4 pb-2">{brandName}</div>
                  <div>
                    ₹<span className="font-bold text-xl">{sellPrice}</span>{" "}
                    <span className="line-through text-xs text-gray-600">
                      ₹{mrp}
                    </span>
                  </div>
                  <div>Rating: {avgRating}</div>
                  {isPrime && (
                    <div className="text-gray-700 text-xs font-bold">Prime</div>
                  )}
                </div>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsByCategory;
