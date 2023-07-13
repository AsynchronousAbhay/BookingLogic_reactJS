import React, { useState } from "react";
import Booking from "./Booking";
import Checkin from "./Checkin";
import Checkout from "./Checkout";
import Data from "./Data";
import CustomersDetails from "./MatchedData/CustomersDetails";

const App = () => {
  const [guest, setguest] = useState([]);
  const [DB, setDB] = useState([])

  // checkInFilteredData
  const checkInFilteredData = guest.filter((e) => {
    //
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    var day = currentDate.getDate().toString().padStart(2, "0");
    var formattedDate = year + "-" + month + "-" + day;
    console.log(formattedDate);
    //
    return (
      (e.checkin <= formattedDate || e.checkin >= formattedDate) &&
      e.checkout !== formattedDate
    );
  });
  // console.log("checkInFilteredData:", checkInFilteredData);

  // checkOutFilteredData
  const checkOutFilteredData = guest.filter((e) => {
    // Get the current date
    var currentDate = new Date();
    // Extract the year, month, and date
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to the month since it's zero-based
    var day = currentDate.getDate().toString().padStart(2, "0");
    // Format the date as "year-month-day"
    var formattedDate = year + "-" + month + "-" + day;
    console.log(formattedDate); // Output: "2023-07-06"
    // console.log(currentDate);
    return e.checkout === formattedDate;
  });
  // console.log("checkOutFilteredData:", checkOutFilteredData);

  return (
    <div>
      {/* <Booking guest={guest} setguest={setguest} />
      <Checkin checkInFilteredData={checkInFilteredData} />
      <Checkout checkOutFilteredData={checkOutFilteredData} /> */}
      {/* Data */}
      {/* <Data setDB={setDB} DB={DB}/> */}
      {/* details */}
      <CustomersDetails/>
    </div>
  );
};

export default App;
