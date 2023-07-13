import React from 'react';
import CustomerProfile from './CustomerProfile';

const CustomersDetails = () => {
  const customers = [
    { username: 'john', password: 'pass123' },
    { username: 'mary', password: 'pass456' },
    { username: 'john', password: 'pass123' },
    { username: 'john', password: 'pass123' },
    { username: 'john', password: 'pass123' },
    { username: 'john', password: 'pass123' },
    { username: 'mary', password: 'pass456' },
    { username: 'mary', password: 'pass456' },
    { username: 'mary', password: 'pass456' },
    { username: 'mary', password: 'pass456' },
    { username: 'jack', password: 'pass789' },
  ];

  return (
    <div>
      <CustomerProfile customers={customers} />
    </div>
  );
};

export default CustomersDetails;
