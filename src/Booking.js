import React, { useState } from "react";

const initialData = {
  name: "",
  phone: "",
  checkin: "",
  checkout: "",
};

const Booking = ({guest, setguest}) => {
  const [data, setData] = useState(initialData);

  const clickHandler = (e) => {
    e.preventDefault();
    const newData = data;
    setguest([...guest, newData]);
    // console.log(`Data:`, data);
  };

  const updateFormValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(e);
  };
  console.log(`guest:`, guest);

  return (
    <div>
      <h1>Booking</h1>
      <form onSubmit={clickHandler}>
        <input
          type="text"
          placeholder="NAME"
          name="name"
          value={data.name}
          onChange={updateFormValue}
        />
        <input
          type="number"
          placeholder="PHONE"
          name="phone"
          value={data.phone}
          onChange={updateFormValue}
        />
        <input
          type="date"
          placeholder="checkin"
          name="checkin"
          value={data.checkin}
          onChange={updateFormValue}
        />
        <input
          type="date"
          placeholder="checkaout"
          name="checkout"
          value={data.checkout}
          onChange={updateFormValue}
        />
        <button>Filter Data</button>
      </form>
    </div>
  );
};

export default Booking;
