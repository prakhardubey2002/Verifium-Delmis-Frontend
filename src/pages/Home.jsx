import React from 'react'
import Lottie from "lottie-react"
import home from '../Lottie animation/main.json'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context/WalletContext';
import Button from '../components/Button'
import ExploreIcon from '@mui/icons-material/Explore';
import InfoIcon from '@mui/icons-material/Info';
const vid = require("../assets/pexels.mp4");
const Home = () => {
  const { isAddress } = useGlobalContext();
  const notification = () => {
    if (isAddress !== "user") {
      console.log("User Connected Succesfully")
    } else {
      toast(`Connect wallet beforehand to explore ${isAddress}`)
    }
  }
  return (
    <div className="home">
      <div className="left">
        <div className="heading">
          <h2>Unlocking Academic Excellence: One-Stop Decentralized Credentials, Badges, POAPs, and Meetings</h2>

        </div>
        <div className="content">
          <br />
          <p>
            "Shifting Paradigms of Academic DNA: From Centralization to Decentralization in Academia"
          </p>
          <br />
        </div >
        <br />
        <div className='buttonflex' onClick={notification} >
          {isAddress !== "user" ? (
            <NavLink className="buttonlink" key={isAddress} to={`user/${isAddress}`}>
              <button className='homebutton' >
                <ExploreIcon/>
                Explore
              </button>
            </NavLink>
          ) : (
            // <Button word={"Explore"} disabled />
            <button className='homebutton' >
              <ExploreIcon/>
              Explore
            </button>
          )}
           <NavLink className="buttonlink" key={isAddress} to={`about`}>
              <button className='homebutton' >
                <InfoIcon/>
                About
              </button>
            </NavLink>
        </div>
      </div>
      <div className="right">
        <div className="card">
          <video width="600" autoPlay loop muted>
            <source src={vid} type="video/mp4" />
            {/* You can add additional <source> elements for different video formats */}
            Your browser does not support the video tag.
          </video>
          {/* <Lottie className='art' animationData={home} loop={true} /> */}
        </div>
      </div>
    </div>
  )
}

export default Home