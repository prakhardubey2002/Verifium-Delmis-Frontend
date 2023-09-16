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
  labels: ['Monthly Activity', 'Active POAPS', 'Minted Credential', 'Notification', 'Todo Items', 'Requests'],
  datasets: [
    {
      label: ' ',
      data: [7, 9, 5, 1, 8, 6],
      backgroundColor: 'rgb(250,226,147)',
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
              <p>
            Invest yourself and take the first step towards achiving your dream
          </p>
            </div>
          <Lottie className='useranimation' animationData={Ani} loop={true} />
          </h2>
          
        </div>
        <div className="radarchart">
          <Radar data={data} />
        </div>
      </div>
      <div className="bottom">

      </div>
    </div>
  )
}

export default Dashboard