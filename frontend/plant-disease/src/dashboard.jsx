import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [data, setData] = useState(null);
  const { user } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      if (user?.email) {
        try {
          const res = await axios.post('http://localhost:3000/getData', {
            email: user.email
          });
          setData(res.data.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, [user]);

  const processData = (data) => {
    const labels = [
      'Potato Early Blight',
      'Potato Late Blight',
      'Potato Healthy',
      'Tomato Bacterial Spot',
      'Tomato Early Blight',
      'Tomato Late Blight',
      'Tomato Leaf Mold',
      'Tomato Septoria Leaf Spot',
      'Tomato Spider Mites',
      'Tomato Target Spot',
      'Tomato Yellow Leaf Curl Virus',
      'Tomato Mosaic Virus',
      'Tomato Healthy',
      'Pepper Bacterial Spot',
      'Pepper Healthy'
    ];

    const dataKeys = [
      'Potato_Early_Blight',
      'Potato_Late_Blight',
      'Potato_Healthy',
      'Tomato_Bacterial_spot',
      'Tomato_Early_blight',
      'Tomato_Late_blight',
      'Tomato_Leaf_Mold',
      'Tomato_Septoria_leaf_spot',
      'Tomato_Spider_mites_Two_spotted_spider_mite',
      'Tomato__Target_Spot',
      'Tomato__Tomato_YellowLeaf__Curl_Virus',
      'Tomato__Tomato_mosaic_virus',
      'Tomato_healthy',
      'Pepper__bell___Bacterial_spot',
      'Pepper__bell___healthy'
    ];

    const chartData = dataKeys.map((key, index) => {
      return {
        label: labels[index],
        value: data[key]
      };
    });

    return {
      labels: chartData.map(item => item.label),
      datasets: [
        {
          label: 'Disease Counts',
          data: chartData.map(item => item.value),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 4,
        },
      ],
    };
  };

  let chartData;
  if (data) {
    chartData = processData(data);
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Disease Distribution for User',
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          autoSkip: false,
          stepSize: 1
        }
      },
      y: {
        grid: {
          display: true
        },
        ticks: {
          beginAtZero: false, // Adjust if you want the y-axis to start from 0 or 1
          stepSize: 1,
          precision: 0
        }
      }
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
      }
    }
  };

  const navbarHeight = 129.13; // Adjust this to match your actual navbar height

  return (
    <div className="chart-container" style={{ width: '100vw', height: `calc(100vh - ${navbarHeight}px)`, display: 'flex', justifyContent: 'center', paddingTop:100 }}>
      {data ? <Bar style={{ width: '90vw' }} data={chartData} options={options} /> : <div>No data to display</div>}
    </div>
  );
};

export default BarChart;
