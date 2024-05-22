import React from "react";
import UserProfileSummary from "./UserProfileSummary/UserProfileSummary";
import DashBoardEvents from "./DashboardEvents/DashBoardEvents";
import JobBoard from "./JobBoard/JobBoard";
import RecentNews from "./RecentNews/RecentNews";
import DashboardStatistics from "./DasboardStatistics/DashboardStatistics";
import DonationStatistics from "./DonationStatistics/DonationStatistics";
import Highlights from "./Highlights/Highlights";

const DashboardPage = () => {
  return (
    <>
      <div className="">
        <div className="flex border bg-slate-400 w-full">
          <div className="m-6 w-2/3  ">
            <UserProfileSummary />
          </div>
          <div className="m-6 ">
            <RecentNews />
          </div>
        </div>

        <div className="mt-4">
          <DashboardStatistics />
        </div>
        <Highlights />

        <div className="flex w-full h-full mt-10  text-gray-500 ">
          {/* Content on the left */}
          <div className="flex flex-row justify-around  w-full h-full border-2 bg-indigo-600 rounded-lg">
            <DashBoardEvents />
            <JobBoard />
          </div>

          <div className="ml-4 w-1/3  rounded-lg border-2 ">
            <DonationStatistics />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
