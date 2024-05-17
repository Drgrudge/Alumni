import React from "react";
import UserProfileSummary from "./UserProfileSummary/UserProfileSummary";
import DashBoardEvents from "./DashboardEvents/DashBoardEvents";
import JobBoard from "./JobBoard/JobBoard";
import RecentNews from "./RecentNews/RecentNews";
import DashboardStatistics from "./DasboardStatistics/DashboardStatistics";
import DonationStatistics from "./DonationStatistics/DonationStatistics";

const DashboardPage = () => {
  return (
    <>
      <div className="flex border bg-slate-400 w-full">
        <div className="m-6 w-2/3  ">
          <UserProfileSummary/>
        </div>
        <div className="m-6 ">
        <RecentNews />
        </div>
      </div>

      <div className="mt-4">
    <DashboardStatistics/>
    </div>

      <div className=" flex  justify-around  w-full mt-10  text-gray-500 ">
        {/* Content on the left */}
        <DashBoardEvents />
        <JobBoard />
        {/* <DonationStatistics/> */}


      </div>
    </>
  );
};

export default DashboardPage;
