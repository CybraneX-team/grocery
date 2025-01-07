import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface props {
  pname: string;
}

interface Unique {
  Party: string;
  UniqueProducts: number;
}

export const TopCustomersChart = ({ pname }: props) => {
  const [unique, setUnique] = useState<Unique[]>([]);
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
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
      categories: [],
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Unique Products',
      data: [],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:5000/api/top-customers-unique-products',
        );

        // Sort data
        const sortedData = response.data.sort(
          (a: Unique, b: Unique) => b.UniqueProducts - a.UniqueProducts,
        );

        setUnique(sortedData);

        // Update chart
        setChartOptions((prevOptions) => ({
          ...prevOptions,
          xaxis: {
            ...prevOptions.xaxis,
            categories: sortedData.map((item: Unique) =>
              item.Party.toUpperCase(),
            ),
          },
        }));

        // Update series
        setChartSeries([
          {
            name: 'Unique Products',
            data: sortedData.map((item: Unique) => item.UniqueProducts),
          },
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
        Top Customers by Unique Products
      </h4>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={500}
      />
    </div>
  );
};
