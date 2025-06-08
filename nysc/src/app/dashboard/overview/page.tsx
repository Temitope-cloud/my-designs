import DashboardSidebar from "@/components/DashboardSidebar";
import { Sidebar } from "@/components/ui/sidebar";
import React from "react";

const Overview = () => {
  return (
    <>
      <div className="flex mt-10 px-5 gap-5">
        <div className="flex-2">
          <div className="flex justify-between shadow items-center border p-10 rounded-md">
            <div>
              <h1 className="text-2xl font-semibold">Hello, Over Here</h1>
              <p>
                You are strictly advised not to travel at night. Break your
                journey, once it is 6pm Ensure you board vehicles from
                designated parks and not by the road side. You must be security
                concious
              </p>
              <button className=" bg-green-900 px-5 py-2 rounded text-green-10 font-semibold text-white mt-5">
                Know More <i className="bx bx-link-external"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1/10">
          <div className="flex gap-2 shadow p-5 h-fit items-center rounded-md">
            <div>
              <img
                src="/passport.webp"
                alt=""
                className="w-30 h-30 rounded-2xl object-cover border-green-950 p-3 border"
              />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-800">
                Name: Balogun T.
              </h2>
              <h2 className="text-sm font-semibold text-gray-700">
                Email: topebalogun14@gmail.com
              </h2>
              <h2 className="text-sm font-semibold text-gray-700">
                Batch: A, 2022
              </h2>
              <h2 className="text-sm font-semibold text-gray-700">
                Callup No: NYSC/UIO/2025/393
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
