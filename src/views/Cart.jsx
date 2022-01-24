import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { deleteItemFromCart } from "../store/actions/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const removeFromCart = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div>
      <div className="flex gap-x-4 p-5 bg-white">
        {items.map(
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
            <div
              className="flex flex-col p-5 bg-white rounded-sm shadow-md"
              key={_id}
            >
              <Link to={`/products/${_id}`}>
                <div>
                  <img src={productImage} alt={name} />
                </div>
                <div>{name}</div>
                <div className="text-gray-600 pt-4 pb-2">{brandName}</div>
              </Link>

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

              <div className="pt-3">
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => removeFromCart(_id)}
                >
                  Remove from cart
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cart;
