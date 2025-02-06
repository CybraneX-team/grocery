import { Product } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const productData: Product[] = [
  {
    id: 1,
    image: ProductOne,
    name: 'Apple Watch Series 7',
    category: 'Electronics',
    price: 296,
    sold: 22,
    profit: 45,
    btn: 'view more',
  },
  {
    id: 2,
    image: ProductTwo,
    name: 'Macbook Pro M1',
    category: 'Electronics',
    price: 546,
    sold: 12,
    profit: 125,
    btn: 'view more',
  },
  {
    id: 3,
    image: ProductThree,
    name: 'Dell Inspiron 15',
    category: 'Electronics',
    price: 443,
    sold: 64,
    profit: 247,
    btn: 'view more',
  },
  {
    id: 4,
    image: ProductFour,
    name: 'HP Probook 450',
    category: 'Electronics',
    price: 499,
    sold: 72,
    profit: 103,
    btn: 'view more',
  },
];

interface Products {
  Item: string;
  AvgPricePerUnit: number;
  HighestBuyingCustomer: string;
  TotalQty: number;
}

const TableTwo = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Products[]>([]);

  const handleViewMore = (id: number) => {
    navigate(`/p-details/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'http://127.0.0.1:5000/api/product-metrics',
      );
      setProducts(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-[38rem] overflow-hidden">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Highest Buying Customer</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Quantity</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
      </div>

      <div className="overflow-y-scroll h-full">
        {products.map((product, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <img src="" alt="Product" />
                </div>
                <p className="text-sm text-black dark:text-white">
                  {product.Item}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {product.HighestBuyingCustomer}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-meta-3">$58</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {product.TotalQty}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              {/* <p className="text-sm text-meta-3">$58</p> */}
              <p className="text-sm text-black dark:text-white">
                ${product.AvgPricePerUnit}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <button
                // onClick={() => handleViewMore(product.id)}
                className="text-sm text-meta-3"
              >
                view more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableTwo;
