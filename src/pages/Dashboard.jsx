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
import DeleteIcon from '@mui/icons-material/Delete';
import { Radar } from 'react-chartjs-2';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
        <div className="todolist">
          <h2>To do list</h2>

          <div className="list">
            <div className="task">
              <div className="top">

                <h2>
                  Complete assigments by 28 Aug
                </h2>
                <button>
                  High
                </button>
              </div>
              <br />
              <div className="down">
                <button>Assigment</button>
                <p>
                  David Wilson
                </p>
              </div>
            </div>
            <div className="task">
              <div className="top">

                <h2>
                  Request POAPS to coordianator
                </h2>
                <button>
                  Low
                </button>
              </div>
              <br />
              <div className="down">
                <button>Assigment</button>
                <p>
                  David Wilson
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="sidesection">
          <div className="notification">
            <h2>Notification</h2>
              <div className="notify">
                <div className="head">
                  <h4>Upcoming Event</h4>
                  <DeleteIcon/>
                </div>
                <br />
                <div className="down">
                  <div className='date' >
                  <CalendarMonthIcon/>
                  <p>Wed,20 Apr</p>
                  </ div>
                  <div className='time' >
                  <AccessTimeIcon />
                  <p>11AM - 11:45 AM</p>
                  </ div>
                </div>
              </div>
              <div className="notify">
                <div className="head">
                  <h4>Javascript Seminar</h4>
                  <DeleteIcon/>
                </div>
                <br />
                <div className="down">
                  <div className='date' >
                  <CalendarMonthIcon/>
                  <p>Wed,20 Apr</p>
                  </ div>
                  <div className='time' >
                  <AccessTimeIcon />
                  <p>2PM - 4:45 PM</p>
                  </ div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard