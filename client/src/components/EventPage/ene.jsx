<div>
      <h2 className="text-xl font-bold mb-4">Events</h2>
      <Link to="/events/create" className="mb-4 inline-block bg-blue-500 text-white p-2 rounded">Create Event</Link>
      <div className="bg-white p-4 rounded shadow-md w-fit">
  <div style={{ height: "200px" ,width:"300px"}}> {/* Adjust the height as needed */}
    <img
      className="w-full h-full object-cover rounded"
      alt="event"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PoWmbPELmiwlrvUv9Oqu2HSuSVrWpJLmZbeMRFU4ZQ&s" // Replace with a placeholder image URL
    />
  </div>
  <h1 className="text-2xl font-medium mt-2"></h1>
  <p className="text-gray-600 text-sm mt-1"></p>
  <div className="flex mt-2">
    <p className="text-gray-700 text-sm pr-4">Type: </p>
    <p className="text-gray-700 text-sm">Audience: </p>
  </div>
  <div className="mt-4">
    <button
      className="bg-[#f02e65] text-white py-2 px-4 rounded mr-2"
      onClick={() => {
        // Handle registration
        // console.log(`Register for ${event.eventname}`);
      }}
    >
      Register
    </button>
    {/* {event.created === 'user1' && ( */}
      <div className="mt-2">
        <button
          className="bg-gray-100 text-gray-700 py-2 px-4 rounded mr-2"
          onClick={() => {
            // Handle view registrations
            // console.log(`View registrations for ${event.eventname}`);
          }}
        >
          View Registrations
        </button>
        <button
          className="bg-gray-100 text-gray-700 py-2 px-4 rounded"
          onClick={() => {
            // Handle delete event
            // console.log(`Delete ${event.eventname}`);
          }}
        >
          Delete Event
        </button>
      </div>
    {/* )} */}
  </div>
</div>
</div>


