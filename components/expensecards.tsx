import {
  Beef,
  EllipsisVertical,
  Info,
  PlaneTakeoff,
  Popcorn,
  ShoppingCart,
} from "lucide-react";
import React from "react";

function ExpenseCards() {
  return (
    <div className="px-4 md:px-10 ">
      <div>
        {/* Cards */}

        <div className="mt-2 flex flex-wrap gap-3  ">
          <div className="bg-red-500 w-[150px] h-[160px] md:w-[400px] md:h-[160px] rounded-md px-2 mt-4">
            <div className="flex justify-between ">
              <Beef className="w-8 h-8 bg-red-400 rounded-md p-2 mt-2 text-white" />
              <EllipsisVertical className="w-6 h-6 mt-2 text-white " />
            </div>

            <div className="mt-2">
              <p className="font-bold text-white">Groceries</p>
            </div>

            <div>
              <p className="font-bold text-xl text-white">GHc 2,000</p>

              <small className="text-white font-bold ">
                <div className="flex mt-2 gap-2">
                  <Info className="w-4 h-4" />
                  <p> This is estimated</p>
                </div>
              </small>
            </div>
          </div>
          <div className="bg-red-500 w-[150px] h-[160px] md:w-[400px] md:h-[160px]  rounded-md px-2 mt-4">
            <div className="flex justify-between ">
              <PlaneTakeoff className="w-8 h-8 bg-red-400 rounded-md p-2 mt-2 text-white" />
              <EllipsisVertical className="w-6 h-6 mt-2 text-white " />
            </div>

            <div className="mt-2">
              <p className="font-bold text-white">Travel</p>
            </div>

            <div>
              <p className="font-bold text-xl text-white">GHc 32,000</p>

              <small className="text-white font-bold ">
                <div className="flex mt-2 gap-2">
                  <Info className="w-4 h-4" />
                  <p> This is estimated</p>
                </div>
              </small>
            </div>
          </div>
          <div className="bg-red-500 w-[150px] h-[160px] md:w-[400px] md:h-[160px] rounded-md px-2 mt-4">
            <div className="flex justify-between ">
              <ShoppingCart className="w-8 h-8 bg-red-400 rounded-md p-2 mt-2 text-white" />
              <EllipsisVertical className="w-6 h-6 mt-2 text-white " />
            </div>

            <div className="mt-2">
              <p className="font-bold text-white">Shopping</p>
            </div>

            <div>
              <p className="font-bold text-xl text-white">GHc 10,000</p>

              <small className="text-white font-bold ">
                <div className="flex mt-2 gap-2">
                  <Info className="w-4 h-4" />
                  <p> This is estimated</p>
                </div>
              </small>
            </div>
          </div>
          <div className="bg-red-500 w-[150px] h-[160px] md:w-[400px] md:h-[160px] rounded-md px-2 mt-4">
            <div className="flex justify-between ">
              <Popcorn className="w-8 h-8 bg-red-400 rounded-md p-2 mt-2 text-white" />
              <EllipsisVertical className="w-6 h-6 mt-2 text-white " />
            </div>

            <div className="mt-2">
              <p className="font-bold text-white">Entertainment</p>
            </div>

            <div>
              <p className="font-bold text-xl text-white">GHc 10,000</p>

              <small className="text-white font-bold ">
                <div className="flex mt-2 gap-2">
                  <Info className="w-4 h-4" />
                  <p> This is estimated</p>
                </div>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCards;
