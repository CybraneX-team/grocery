import { BRAND } from '../../types/brand';
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import UserFour from '../../images/user/user-04.png';
import UserFive from '../../images/user/user-05.png';
import { useNavigate } from 'react-router-dom';

export const customerData: BRAND[] = [
  {
    id: 1,
    logo: UserOne,
    name: 'Abcd',
    visitors: 3.5,
    revenues: '6,768',
    sales: 590,
    conversion: 4.8,
    btn: 'view more',
  },
  {
    id: 2,
    logo: UserTwo,
    name: 'Abcd',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
    btn: 'view more',
  },
  {
    id: 3,
    logo: UserThree,
    name: 'Abcd',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
    btn: 'view more',
  },
  {
    id: 4,
    logo: UserFour,
    name: 'Abcd',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
    btn: 'view more',
  },
  {
    id: 5,
    logo: UserFive,
    name: 'Abcd',
    visitors: 3.5,
    revenues: '3,,000',
    sales: 390,
    conversion: 2.5,
    btn: 'view more',
  },
];

const TableOne = () => {
  const navigate = useNavigate();

  const handleView = (id: number) => {
    navigate(`/c-details/${id}`);
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Customers
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Customers
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visited
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Max Purchased
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>

        {customerData.map((customer, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === customerData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={customer.id}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={customer.logo} alt="customer" className="size-15" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {customer.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{customer.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${customer.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{customer.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{customer.conversion}%</p>
            </div>

            <div className="col-span-1 flex items-center">
              <button
                onClick={() => handleView(customer.id)}
                className="text-sm text-meta-3"
              >
                {customer.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
