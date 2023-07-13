import React from 'react';

const CustomerProfile = (props) => {
    const {customers} = props
  // Function to find the number of matches for a customer
  const findMatchedData = (customer) => {
    let count = 0;
    customers.forEach((c) => {
      if (c.username === customer.username && c.password === customer.password) {
        count++;
      }
    });
    return count;
  };

  // Function to assign profile details based on the number of matches
  const assignProfileDetails = (customer) => {
    const matchCount = findMatchedData(customer);

    if (matchCount > 4) {
      return 'regular';
    } else if (matchCount > 2 && matchCount <= 4) {
      return 'occasionally';
    } else {
      return 'new';
    }
  };

  return (
    <div>
      <h2>Customer Profiles</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            <p>Username: {customer.username}</p>
            <p>Password: {customer.password}</p>
            <p>Profile Details: {assignProfileDetails(customer)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerProfile;
