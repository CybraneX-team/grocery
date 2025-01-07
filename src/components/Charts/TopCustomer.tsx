import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
export const TopCustomersSales = () => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    colors: ['#3C50E0'],
    xaxis: {
      categories: [
        'John Doe',
        'Jane Smith',
        'Bob Johnson',
        'Alice Brown',
        'Tom Wilson',
      ],
    },
  };

  const series = [
    {
      name: 'Total Sales ($)',
      data: [12500, 11200, 10800, 9500, 8900],
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
        Top Customers by Sales
      </h4>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};
