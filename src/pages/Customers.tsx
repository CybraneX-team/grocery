import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CustomerTable from '../components/Tables/CustomerTable';

function Customers() {
  return (
    <div>
      <Breadcrumb pageName="Customers" />

      <div className="flex flex-col gap-10">
        <CustomerTable />
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        {/* <TableThree /> */}
        {/* <ChatCard /> */}
      </div>
    </div>
  );
}

export default Customers;
