import { useParams } from 'react-router-dom';
import { productData } from '../components/Tables/TableTwo';
import { SalesHeatmap } from '../components/Charts/SalesHeatmap';
import { MonthlySalesChart } from '../components/Charts/AvgChart';
import { TopCustomersChart } from '../components/Charts/CustomerChart';
import {
  CategoryDistribution,
  CustomerSegmentation,
} from '../components/Charts/Pie';
import { TopCustomersSales } from '../components/Charts/TopCustomer';
function Details() {
  const { id } = useParams();

  const product = productData.find((p) => p.id === parseInt(id as string, 10));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <div className="p-6 space-y-8">
        {/* <h1 className="text-2xl font-bold">{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className="my-4 w-full max-w-md rounded-lg"
        />
        <p className="text-lg">Category: {product.category}</p>
        <p className="text-lg">Price: ${product.price}</p>
        <p className="text-lg">Sold: {product.sold}</p>
        <p className="text-lg">Profit: ${product.profit}</p> */}
        <MonthlySalesChart pname={product.name} />
        <SalesHeatmap />
        <TopCustomersChart pname={product.name} />
        <CategoryDistribution />
        <CustomerSegmentation />
        <TopCustomersSales />
      </div>
    </div>
  );
}

export default Details;
