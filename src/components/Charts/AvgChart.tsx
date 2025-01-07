import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

interface props {
  pname: string;
}

export const MonthlySalesChart = ({ pname }: props) => {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    colors: ['#3C50E0'],
  };

  const series = [
    {
      name: 'Average Sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 80, 75, 85],
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
        Monthly Average Sale of {pname}
      </h4>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};
