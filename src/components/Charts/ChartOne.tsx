import { ApexOptions } from 'apexcharts';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#FF5733', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2, 2],
    curve: 'straight',
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3C50E0', '#FF5733', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}
type ChartData = {
  totalSales: number[];
  totalTaxAmount: number[];
  totalTaxableAmount: number[];
  months: string[];
};

const ChartOne: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    totalSales: [],
    totalTaxAmount: [],
    totalTaxableAmount: [],
    months: [],
  });
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Total Sales',
        data: [],
      },
      {
        name: 'Tax Amount',
        data: [],
      },
      {
        name: 'Taxable Amount',
        data: [],
      },
    ],
  });
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:5000/api/monthly-sales',
      );
      const data = response.data;

      const totalSales = data.map((item: any) => Math.floor(item.TotalSales));
      const totalTaxAmount = data.map((item: any) =>
        Math.floor(item.TotalTaxAmount),
      );
      const totalTaxableAmount = data.map((item: any) =>
        Math.floor(item.TotalTaxableAmount),
      );
      const months = data.map((item: any) => item.YearMonth);

      setChartData({
        totalSales,
        totalTaxAmount,
        totalTaxableAmount,
        months,
      });

      setState({
        series: [
          {
            name: 'Total Sales',
            data: totalSales,
          },
          {
            name: 'Taxable Amount',
            data: totalTaxableAmount,
          },
          {
            name: 'Tax Amount',
            data: totalTaxAmount,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleReset = () => {
  //   setState((prevState) => ({
  //     ...prevState,
  //   }));
  // };
  // handleReset;
  const updatedOptions = {
    ...options,
    xaxis: {
      ...options.xaxis,
      categories: chartData.months,
    },
    // Remove the yaxis max limit since your values are much larger
    yaxis: {
      ...options.yaxis,
      min: 0,
      max: undefined,
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-2 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Total Sales</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span
              className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border"
              style={{ borderColor: '#FF5733' }}
            >
              <span
                className="block h-2.5 w-full max-w-2.5 rounded-full"
                style={{ backgroundColor: '#FF5733' }}
              ></span>
            </span>
            <div className="w-full">
              <p className="font-semibold" style={{ color: '#FF5733' }}>
                Taxable Amount
              </p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary"> Total Tax </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={updatedOptions}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
