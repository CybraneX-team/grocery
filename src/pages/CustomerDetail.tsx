import { useParams } from 'react-router-dom';
import { customerData } from '../components/Tables/CustomerTable';
import { SalesHeatmap } from '../components/Charts/SalesHeatmap';
import { MonthlySalesChart } from '../components/Charts/AvgChart';
import { TopCustomersChart } from '../components/Charts/CustomerChart';
import {
  CategoryDistribution,
  CustomerSegmentation,
} from '../components/Charts/Pie';
import { TopCustomersSales } from '../components/Charts/TopCustomer';
function CustomerDetails() {
  const { id } = useParams();

  const customer = customerData.find(
    (c) => c.id === parseInt(id as string, 10),
  );

  if (!customer) {
    return <div>Customer not found</div>;
  }
  return (
    <div>
      <div className="p-6 space-y-8">
        {/* <h1 className="text-2xl font-bold">{customer.name}</h1>
        <img
          src={customer.image}
          alt={customer.name}
          className="my-4 w-full max-w-md rounded-lg"
        />
        <p className="text-lg">Category: {customer.category}</p>
        <p className="text-lg">Price: ${customer.price}</p>
        <p className="text-lg">Sold: {customer.sold}</p>
        <p className="text-lg">Profit: ${customer.profit}</p> */}
        <MonthlySalesChart pname={customer.name} />
        <SalesHeatmap />
        <TopCustomersChart pname={customer.name} />
        <CategoryDistribution />
        <CustomerSegmentation />
        <TopCustomersSales />
      </div>
    </div>
  );
}

export default CustomerDetails;
