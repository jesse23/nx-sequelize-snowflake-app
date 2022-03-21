import React, { useEffect, useState } from 'react';
import ReactHighcharts from 'react-highcharts';
import { getForecast } from './user-view.service';

export const ForecastChart = ({
  zipCode,
}: {
  zipCode: string;
}): JSX.Element => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (zipCode) {
      const load = async () => {
        const forecastData = await getForecast(zipCode);

        setChartOptions({
          chart: {
            marginBottom: 110,
          },
          title: {
            text: `Forecast to ${zipCode}`,
          },

          subtitle: {
            text: 'Source: Weather Source, LLC from Snowflake Marketplace',
          },

          yAxis: {
            title: {
              text: 'Temperature (F)',
            },
          },

          xAxis: {
            categories: forecastData.map(f => f.date.toLocaleDateString('en-US')),
          },

          credits: {
            enabled: false,
          },

          legend: {
            layout: 'horizontal',
            align: 'middle',
            verticalAlign: 'bottom',
          },

          plotOptions: {
            series: {
              animation: false
            }
          },

          series: [
            {
              name: 'Min Temperature',
              data: forecastData.map(f => f.minTemp),
            },
            {
              name: 'Avg Temperature',
              data: forecastData.map(f => f.avgTemp),
            },
            {
              name: 'Max Temperature',
              data: forecastData.map(f => f.maxTemp),
            },
          ],

          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 500,
                },
                chartOptions: {
                  legend: {
                    layout: 'horizontal',
                    align: 'middle',
                    verticalAlign: 'bottom',
                  },
                },
              },
            ],
          },
        });
      };
      load();
    }
  }, [zipCode]);

  return (
    <div>
      <ReactHighcharts config={chartOptions}></ReactHighcharts>
    </div>
  );
};
