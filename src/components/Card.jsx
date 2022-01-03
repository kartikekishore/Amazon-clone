import React from "react";

function Card() {
  return (
    <div className="p-4 bg-white rounded-md shadow-lg ">
      {/* 4pic card 4cols in a row */}
      <div className="font-bold text-xl p-2">
        Professional tools, testing &amp; more
      </div>
      <div className="flex-col flex gap-4">
        <div className="flex gap-4">
          <div>
            <img src="/card_4_1/1.jpg" alt="" />
          </div>
          <div>
            <img src="/card_4_1/2.jpg" alt="" />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <img src="/card_4_1/3.jpg" alt="" />
          </div>
          <div>
            <img src="/card_4_1/4.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="text-sm text-blue-800 p-2 ">See More</div>
    </div>
  );
}

export default Card;
