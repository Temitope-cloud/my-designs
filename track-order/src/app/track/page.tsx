import React from "react";

const TrackOrder = () => {
  const PARCEL_NUMBER = "PN-843UHDBUD8";
  const ADDRESS = "123 Maple Street, Lagos Island, Lagos, Nigeria.";
  interface TrackingDetails {
    status: string;
    description: string;
    time: number;
    icon: string;
  }

  const trackingDetails: TrackingDetails[] = [
    {
      status: "Order Placed",
      description: "Your order has been placed successfully",
      time: 1623209200,
      icon: "bx bx-cart",
    },
    {
      status: "Processing",
      description: "Your order is being processed at the warehouse",
      time: 1623259200,
      icon: "bx bx-cog",
    },
    {
      status: "Shipped",
      description: "Your package has been shipped from the warehouse",
      time: 1623309200,
      icon: "bx bx-send",
    },
    {
      status: "In Transit",
      description: "Package is on its way to the sorting center",
      time: 1623359200,
      icon: "bx bx-package",
    },
    {
      status: "Out for Delivery",
      description: "Your package is out for delivery",
      time: 1623409200,
      icon: "bx bxs-truck",
    },
    // {
    //   status: "EDA",
    //   description: "Estimated delivery between June 1st - June 12th",
    //   time: 1623509200,
    //   icon: "bx bx-calendar",
    // },
  ];
  return (
    <>
      <div className="p-5">
        <div className="bg-slate-200 px-10 py-5 rounded">
          <p className="text-xl text-black font-medium">Track your package</p>
          <p className="text-sm text-gray-400">
            Kindly enter your tracking number below
          </p>

          {/* Form */}
          <div className="flex w-full items-center mt-2 shadow rounded">
            <input
              type="text"
              name=""
              id=""
              placeholder="Parcel Number"
              defaultValue={` ${PARCEL_NUMBER} `}
              className="bg-white text-slate-800 text-sm py-2 rounded-tl rounded-bl w-full placeholder:text-slate-400 placeholder:text-sm px-2 outline-none"
            />
            <p className="bg-slate-800 py-2 text-center w-fit px-2 text-sm rounded-tr rounded-br flex gap-2 items-center">
              Track <i className="bx bx-cycling"></i>
            </p>
          </div>
        </div>

        {/* Track details */}
        <div className="mt-4">
          <div className="flex">
            <p className="text-slate-950">
              {" "}
              <span className="font-bold">EDA:</span>{" "}
              <span className="tracking-tighter font-medium">
                June 1st - June 12th
              </span>
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col-reverse gap-5 mt-3">
            {trackingDetails.map((t, index) => {
              const isLast = index === trackingDetails.length - 1;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 ${isLast ? "text-slate-900" : "text-slate-900 opacity-50"}`}
                >
                  <div
                    className={`text-white px-2 py-1  border-green-200 border-2 border-l rounded-full ${isLast ? "bg-green-400 animate-pulse" : "bg-slate-700"}`}
                  >
                    <i className={` ${t.icon} `}></i>
                  </div>

                  <div className={`w-[80%]   `}>
                    <p className="font-bold"> {t.status} </p>
                    <p className="truncate"> {t.description} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-start gap-2 text-slate-800 shadow p-5 rounded-md border-2 border-slate-200">
            <i className="bx bx-home text-3xl text-slate-600 "></i>

            <div className="">
              <p className="font-bold">Delivery Address</p>
              <p>Home, Work & Other Address</p>
              <p> {ADDRESS} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
