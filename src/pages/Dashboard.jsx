import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import Lottie from "lottie-react";
import Ani from '../Lottie animation/usertop.json'

import { Radar } from 'react-chartjs-2';
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
export const data = {
  labels: ['Monthly Activity', 'Active POAPS', 'Minted Credential', 'Notification', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: 'User Details',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(217,242,126)',
      borderWidth: 1,
    },
  ],
};
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top">
        <div className="text">
          <h2>
            <div>

              <span> Hi,</span>Prakhar!
              What do you want
              to <span>Learn </span> Today?
            </div>
          <Lottie className='useranimation' animationData={Ani} loop={true} />
          </h2>
          <p>
            invest yourself and take the first step towards achiving your dream
          </p>
        </div>
        <div className="radarchart">
          <Radar data={data} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard