// import { ApexOptions } from 'apexcharts';
// import ReactApexChart from 'react-apexcharts';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface SalesData {
//   State: string;
//   TotalAmt: number;
// }

// export const SalesHeatmap = () => {
//   const [stateData, setStateData] = useState<SalesData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'http://127.0.0.1:5000/api/sales-by-state',
//         );
//         // Sort data by TotalAmt in descending order and take top 8 states
//         const sortedData = response.data
//           .sort((a: SalesData, b: SalesData) => b.TotalAmt - a.TotalAmt)
//           .slice(0, 8);

//         // Clean state names by removing trailing commas
//         const cleanedData = sortedData.map((item: SalesData) => ({
//           ...item,
//           State: item.State.replace(',', ''),
//         }));

//         setStateData(cleanedData);
//       } catch (error) {
//         console.error('Error fetching sales data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const options: ApexOptions = {
//     chart: {
//       type: 'heatmap',
//       toolbar: { show: false },
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function (val) {
//         return Math.floor(val as number).toLocaleString();
//       },
//       style: {
//         fontSize: '12px',
//         colors: ['#ffffff'], // Making data labels white for better visibility
//       },
//     },
//     colors: ['#3C50E0', '#80CAEE', '#FF5733'],
//     xaxis: {
//       categories: stateData.map((item) => item.State),
//       labels: {
//         style: {
//           fontSize: '12px',
//         },
//         rotate: -45,
//       },
//     },
//     tooltip: {
//       y: {
//         formatter: function (value) {
//           return Math.floor(value).toLocaleString();
//         },
//       },
//     },
//     plotOptions: {
//       heatmap: {
//         colorScale: {
//           ranges: [
//             {
//               from: 0,
//               to: 1000000,
//               color: '#3C50E0', // Low range - Dark Blue
//             },
//             {
//               from: 1000001,
//               to: 10000000,
//               color: '#80CAEE', // Medium range - Light Blue
//             },
//             {
//               from: 10000001,
//               to: 1000000000,
//               color: '#FF5733', // High range - Orange
//             },
//           ],
//         },
//       },
//     },
//   };

//   const generateSeries = () => {
//     const monthNames = ['Q1', 'Q2', 'Q3', 'Q4'];
//     return monthNames.map((month) => ({
//       name: month,
//       data: stateData.map((state) => {
//         // Generate a random percentage (between 0.2 and 0.3) of the total amount for each quarter
//         const randomFactor = 0.2 + Math.random() * 0.1;
//         return Math.floor(state.TotalAmt * randomFactor);
//       }),
//     }));
//   };

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
//       <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
//         <h4 className="text-xl font-semibold text-black dark:text-white">
//           Sales by State
//         </h4>
//         <div className="flex items-center gap-3">
//           <div className="flex items-center gap-1">
//             <span className="h-3 w-3 rounded-full bg-[#3C50E0]"></span>
//             <span className="text-sm font-medium">Low</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <span className="h-3 w-3 rounded-full bg-[#80CAEE]"></span>
//             <span className="text-sm font-medium">Medium</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <span className="h-3 w-3 rounded-full bg-[#FF5733]"></span>
//             <span className="text-sm font-medium">High</span>
//           </div>
//         </div>
//       </div>
//       {stateData.length > 0 && (
//         <ReactApexChart
//           options={options}
//           series={generateSeries()}
//           type="heatmap"
//           height={350}
//         />
//       )}
//     </div>
//   );
// };

import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface SalesData {
  State: string;
  TotalAmt: number;
}

export const SalesHeatmap = () => {
  const [stateData, setStateData] = useState<SalesData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:5000/api/sales-by-state',
        );
        // Sort data by TotalAmt in descending order and take top 8 states
        const sortedData = response.data.sort(
          (a: SalesData, b: SalesData) => b.TotalAmt - a.TotalAmt,
        );

        // Clean state names by removing trailing commas
        const cleanedData = sortedData.map((item: SalesData) => ({
          ...item,
          State: item.State.replace(',', ''),
        }));

        setStateData(cleanedData);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchData();
  }, []);

  const options: ApexOptions = {
    chart: {
      type: 'heatmap',
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Math.floor(val as number).toLocaleString();
      },
      style: {
        fontSize: '12px',
        colors: ['#ffffff'],
      },
    },
    colors: ['#4C35DE'], // Base color adjusted to match theme
    xaxis: {
      categories: stateData.map((item) => item.State),
      labels: {
        style: {
          fontSize: '12px',
        },
        rotate: -45,
      },
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return Math.floor(value).toLocaleString();
        },
      },
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 1000000,
              color: '#4169E1', // Royal Blue
            },
            {
              from: 1000001,
              to: 10000000,
              color: '#4B0082', // Indigo
            },
            {
              from: 10000001,
              to: 50000000,
              color: '#483D8B', // Dark Slate Blue
            },
            {
              from: 50000001,
              to: 1000000000,
              color: '#3C1361', // Deep Purple
            },
          ],
        },
      },
    },
  };

  const series = [
    {
      name: 'Total Sales',
      data: stateData.map((state) => Math.floor(state.TotalAmt)),
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Sales by State
        </h4>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-[#4169E1]"></span>
            <span className="text-sm font-medium">Low</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-[#483D8B]"></span>
            <span className="text-sm font-medium">Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-[#3C1361]"></span>
            <span className="text-sm font-medium">High</span>
          </div>
        </div>
      </div>
      {stateData.length > 0 && (
        <ReactApexChart
          options={options}
          series={series}
          type="heatmap"
          height={350}
        />
      )}
    </div>
  );
};
