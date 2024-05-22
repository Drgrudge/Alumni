import React from "react";

const DashboardStatistics = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className="border-2 rounded-lg h-20 w-1/5 bg-rose-500 flex items-center justify-center">
        <h2 className="text-xl text-center text-gray-200 font-bold ">
          Registered Users
        </h2>
      </div>
      <div className="border-2 rounded-lg h-20 w-1/5 flex items-center bg-orange-500 justify-center">
      <h2 className="text-xl text-center text-gray-200 font-bold ">Events</h2>
      </div>
        <div className="border-2 rounded-lg h-20 w-1/5 flex items-center bg-yellow-500 justify-center">
          <h2 className="text-xl text-center text-gray-200 font-bold ">
            Donations
          </h2>
        </div>
      <div className="border-2 rounded-lg h-20 w-1/5 flex items-center bg-green-500 justify-center">
        <h2 className="text-xl text-center text-gray-200 font-bold ">
          JobPostings
        </h2>
      </div>
    </div>
  );
};

export default DashboardStatistics;
