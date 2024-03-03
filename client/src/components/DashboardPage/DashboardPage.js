import React from 'react';

const DashboardPage = () => {
    return (
      <>
      <div className='flex'>
      <div className="w-full py-10">
  <div className="px-6 flex items-start justify-center">
    {/* Card code block start */}
    <div className="flex   bg-white dark:bg-gray-800 shadow rounded">
      <div className=" lg:w-1/2  flex flex-col items-center py-10">
        <div className="w-24 h-24  p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <img role="img" className="w-full h-full overflow-hidden object-cover rounded-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png" alt="avatar" />
        </div>
        <a tabIndex="0" className="focus:outline-none focus:opacity-75 hover:opacity-75 text-gray-800 dark:text-gray-100 cursor-pointer focus:underline"><h2 className="text-xl tracking-normal font-medium mb-1">Timothy Jon Oliphant</h2></a>
        <a tabIndex="0" className="cursor-pointer hover:text-indigo-700 focus:underline focus:outline-none focus:text-indigo-70cd0 flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
          <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg1.svg" alt="icon"/>
          </span>
          Las Vegas, Nevada
        </a>
        <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">The more I deal with the work as something that is my own, as something that is personal, the more successful it is.</p>
        <div className="flex items-start">
          <div>
            <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">82</h2>
            <a tabIndex="0" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"><p className="dark:text-gray-100 text-sm leading-5">Reviews</p></a>
          </div>
          <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
            <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">28</h2>
            <a tabIndex="0" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"><p className="dark:text-gray-100 text-sm leading-5">Projects</p></a>
          </div>
          <div>
            <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">42</h2>
            <a tabIndex="0" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"><p className="dark:text-gray-100 text-sm leading-5">Approved</p></a>
          </div>
        </div>
      </div>
    </div>
    {/* Card code block end */}
  </div>
</div>



    <div className="flex items-center justify-center py-8 px-4">
      <div className="md:w-96 rounded-md shadow-lg p-5 dark:bg-gray-800 bg-white">
        <h1 className="pt-2 pb-7 text-gray-800 dark:text-gray-100 font-bold text-lg">Recent Updates</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-200">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg1.svg" alt="cart"/>
            </div>
            <a href="javascript:void(0)" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 hover:text-gray-500"><p className="text-sm font-medium pl-3">Order# IDO-214-152</p></a>
          </div>
          <p className="text-sm font-medium text-indigo-700">$145</p>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-200">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg2.svg" alt="message"/>
            </div>
            <a href="javascript:void(0)" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 hover:text-gray-500"> <p className="text-sm font-medium pl-3">New message from <span className="text-blue-700">@Kelly190</span></p></a>
          </div>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-200">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg1.svg" alt="cart"/>
            </div>
            <a href="javascript:void(0)" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 hover:text-gray-500"><p className="text-sm font-medium pl-3">Order# IDO-325-664</p></a>
          </div>
          <p className="text-sm font-medium text-indigo-700">$205</p>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-200">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg3.svg" alt="text"/>
            </div>
            <a href="javascript:void(0)" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 hover:text-gray-500"><p className="text-sm font-medium pl-3">Invoice generated</p></a>
          </div>
          <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 rounded-md focus:text-indigo-800 hover:text-indigo-800 text-indigo-700" >
            <p className="text-sm font-medium cursor-pointer">View</p>
          </a>
        </div>
      </div>
    </div>
    </div>




 <div className="flex flex-col-reverse lg:flex-row w-full bg-white dark:bg-gray-800 shadow rounded">
      {/* Content on the left */}
      <div className="w-full lg:w-1/2">
        <div aria-label="card" className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
          <div className="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
            <h4 className="text-base text-indigo-700 dark:text-indigo-600 tracking-normal leading-4">12:00pm</h4>
            <h4 className="lg:mt-3 text-gray-600 dark:text-gray-400 text-base font-normal">23 December, Sunday</h4>
          </div>
          <a tabIndex="0" className="focus:outline-none focus:underline focus:text-gray-500 hover:text-gray-500 cursor-pointer text-gray-800 dark:text-gray-100" ><h2 className="mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold">CES - The Global Stage for Innovation</h2></a> 
          <p className="mb-6 font-normal text-gray-600 dark:text-gray-400 text-sm tracking-normal w-11/12 lg:w-9/12">The Consumer Technology Association’s CES 2020 will take place on 7-10 January at the Las Vegas Convention Center in Nevada. It will bring together over 150,000 delegates and 4,500 exhibitors to explore the business of consumer technologies.</p>
          <div className="flex lg:items-center items-start flex-col lg:flex-row">
            <div className="flex items-center">
              <div className="border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg" alt="avatar" />
              </div>
              {/* Add more avatar images as needed */}
              <a tabIndex="0" className="cursor-pointer text-gray-600 focus:outline-none focus:underline focus:text-gray-400 hover:text-gray-500"><p className="dark:text-gray-400 text-xs font-normal ml-1">+12 Attendees</p></a>
            </div>
            <button className="text-gray-600 dark:text-gray-400 focus:outline-none hover:text-indigo-700 focus:text-indigo-700 mt-4 lg:mt-0 ml-0 lg:ml-12 flex items-end">
              <span className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                </svg>
              </span>
              <p className="text-sm tracking-normal font-normal text-center">Las Vegas, Nevada</p>
            </button>
          </div>
        </div>
        <div className="px-5 lg:px-5 md:px-10 py-3 lg:py-4 flex flex-row items-center justify-between border-t border-gray-300">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="id1" checked type="radio" name="radio" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-black dark:border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <p id="id1" className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Going</p>
            </div>
            <div className="flex items-center ml-6">
              <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="id2" type="radio" name="radio" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-black dark:border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <p id="id2" className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Not Going</p>
            </div>
          </div>
          <div className="flex items-center">
            <button aria-label="save" className="focus:outline-none focus:text-gray-400 hover:text-gray-500 text-gray-600 dark:text-gray-400 cursor-pointer mr-4">
              <svg className="feather feather-bookmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
            <button aria-label="share" className="text-indigo-700 dark:text-indigo-600 hover:text-indigo-500 focus:outline-none focus:text-indigo-500 cursor-pointer">
              <svg className="feather feather-share-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Image on the right */}
      <div className="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
        <img className="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png" alt="banner" />
      </div>
      {/* Additional styles */}
      <style>
        {`
          .checkbox:checked {
            border: none;
          }
          .checkbox:checked + .check-icon {
            display: flex;
          }
        `}
      </style>
      <div className="flex items-center justify-center py-8 px-4">
      <div className="md:w-96 rounded shadow-lg py-4 px-5 bg-white dark:bg-gray-800">
        <a tabIndex="0" role="link" className="focus:outline-none focus:text-indigo-700 focus:underline hover:text-indigo-700 hover:underline text-lg font-bold leading-4 text-gray-800 dark:text-gray-100">UX optimization and UI design</a>
        <h2 className="pt-2 text-xs leading-3 dark:text-gray-400 text-gray-600 dark:text-gray-500">Client: Imaginary Company LLC</h2>
        <p className="pt-4 text-xs leading-4 text-gray-600 dark:text-gray-500">Join Tailwind UI Kit’s discord community and kickstart your next project with beautiful, accessible user interfaces.</p>
        <div className="flex items-center pt-4">
          <div className="w-6 h-6 mr-1 shadow rounded-full">
            <img alt="img-1" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="w-full h-full object-cover object-center rounded-full" />
          </div>
          {/* Add more avatar images as needed */}
          <div className="w-6 h-6 mr-1 border-dashed border flex items-center justify-center cursor-pointer rounded-full">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card8-svg1.svg" alt="plus"/>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm font-semibold text-indigo-700 leading-none text-right pb-1">73%</p>
        </div>
        <div className="w-full h-2 relative bg-gray-200 rounded-full">
          <div className="h-2 w-60 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 rounded-full"></div>
        </div>
        <button className="focus:outline-none focus:bg-opacity-50 focus:text-black hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-indigo-700 hover:bg-opacity-50 bg-gray-100 text-sm font-medium py-3 w-full rounded mt-5">View Project Details</button>
      </div>
    </div>



    </div>
    </>
    )
};

export default DashboardPage;
