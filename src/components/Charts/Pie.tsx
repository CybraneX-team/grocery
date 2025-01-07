import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
export const CustomerSegmentation = () => {
  const options: ApexOptions = {
    chart: {
      type: 'donut',
      toolbar: { show: false },
    },
    labels: ['High', 'Medium', 'Low'],
    colors: ['#3C50E0', '#80CAEE', '#8FD0EF'],
  };

  const series = [35, 45, 20];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
        Purchase Frequency Segmentation
      </h4>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={350}
      />
    </div>
  );
};

export const CategoryDistribution = () => {
  const options: ApexOptions = {
    chart: {
      type: 'pie',
      toolbar: { show: false },
    },
    labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Sports'],
    colors: ['#3C50E0', '#80CAEE', '#8FD0EF', '#0FADCF', '#6577F3'],
  };

  const series = [44, 55, 41, 17, 15];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
        Customer Distribution by Category
      </h4>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={350}
      />
    </div>
  );
};
