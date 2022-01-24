import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { getProduct } from "../store/actions/products";
import { addItemToCart } from "../store/actions/cart";

const ProductDetails = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { isLoading, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 p-5 gap-x-4 bg-white">
          <div>
            <img src={product.productImage} alt={product.name} />
          </div>
          <div className="flex flex-col">
            <div>{product.name}</div>
            <div className="text-gray-600 pt-4 pb-2">{product.brandName}</div>
            <div className="font-bold text-sm py-2">
              {product.reviewCount} Reviews
            </div>
            <div className="text-gray-600">{product.sellerName}</div>
            <div>Rating: {product.avgRating}</div>
            <div className="pt-2">
              ₹<span className="font-bold text-xl">{product.sellPrice}</span>{" "}
              <span className="line-through text-xs text-gray-600">
                ₹{product.mrp}
              </span>
            </div>
            {product.isPrime && (
              <div className="text-gray-700 text-xs font-bold">Prime</div>
            )}
            <div className="py-3">
              {product.currentStock == 0 ? (
                <div className="text-xl text-red-700">Out of stock</div>
              ) : (
                <div>
                  <div className="text-xl text-green-800 pb-2">In stock</div>
                  <div className="w-52">
                    <Button variant="contained" fullWidth onClick={addToCart}>
                      Add to cart
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="text-sm py-2">
              Delivery Charges: ₹{product.deliveryCharge}
            </div>
            <div className="py-3">
              <div className="font-bold">About this item:</div>
              <div>{product.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
