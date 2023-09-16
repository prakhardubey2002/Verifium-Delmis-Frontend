import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useGlobalContext} from '../Context/WalletContext'
import axios from "axios";
import Lottie from "lottie-react";
import Ani from '../Lottie animation/load.json'
const Credentials = () => {
  const navigate = useNavigate();
const goBack = () => {
  navigate(-1);
}
  const { isAddress, setIsAddress } = useGlobalContext();
  const xKey = "5Bg8vrE-x6zPYo6S";//enter your x api key here
  const [network, setNetwork] = useState("devnet");
  const [isLoaded, setLoaded] = useState(false);
  const [dataFetched, setDataFetched] = useState();


  const fetchNFTs = (e) => {
      e.preventDefault();
      let nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=devnet&address=${isAddress}`;
      axios({
          url: nftUrl,
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "x-api-key": xKey,
          },
      })
          .then((res) => {
              console.log(res.data);
              setDataFetched(res.data);
              setLoaded(true);
          })
          .catch((err) => {
              console.warn(err);
          });
  };
  return (
      <>
              
          <div className="NfTcontainer">
              <div className="grd-back">
                  <div className="text-center">
                     {/* <button onClick={goBack} style={{marginBottom:"1rem",marginTop:"1rem"}} >
                      go Back
                     </button> */}
                      <button
                          className="button-24"
                          onClick={fetchNFTs}
                      >
                          Click to Show Credentials
                      </button>
                  </div>
                  <div className="row">
                      {!isLoaded && <div class="loadingspinner">
                          <div id="square1"></div>
                          <div id="square2"></div>
                          <div id="square3"></div>
                          <div id="square4"></div>
                          <div id="square5"></div>
                          <Lottie className='useranimation' animationData={Ani} loop={true} />
                      </div>
                      }
                      <div className="listing">
                          {isLoaded &&
                              dataFetched.result.map((item) => (

                                  <div className="NFTlist" key={item.mint}>
                                      <div className="Nftcard">
                                          <div className="card-body">
                                              <a href={`/get-details?token_address=${item.mint}&network=devent`} target="_blank" rel="noreferrer">
                                                  <img className="card-image" src={item.image_uri} alt="img" />
                                              </a>
                                              <a href={`/get-details?token_address=${item.mint}&network=${network}`} target="_blank" rel="noreferrer">
                                                  <h5>NFT Name : {item.name}</h5>
                                                  <h5>NFT Mint : {item.mint.substring(0, 17)}....</h5>
                                                  <h5>NFT Owner : {item.owner.substring(0, 17)}....</h5>
                                              </a>

                                          </div>
                                      </div>
                                  </div>
                              ))}
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};
export default Credentials