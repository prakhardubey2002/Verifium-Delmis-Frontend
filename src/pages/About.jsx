import React from 'react'
import Lottie from "lottie-react";
import Ani from '../Lottie animation/about.json'
const About = () => {
  return (
    <div className="about">
      <div className="left">

        <h2>What is Verifium</h2>
        <br />
        <p>Verifium is hybrid Decentralised synchronised architecture in simple term certain amount of data is saved on blockchain(Solana) and certain amount of data is saved of servers(alibaba Polardb)</p>
        <br />
        <h2>What we do?</h2>
        <br />
        <p>This is Secure Credential offering Project. This project enables the organizations to issue tamper-proof badges, certificates, and degrees in the form of non-fungible tokens (NFTs). These digital credentials are backed by a robust verification system(Integrated as Telegram Bot) that allows employers and other institutions to easily verify the authenticity of the credentials. By using our platform, educational organizations can offer their students a secure and reliable way to showcase their achievements and credentials, while also making it easier for employers and other institutions to verify the credentials of their potential hires.</p>
        <br />
        <h2>
          But what is NFT?</h2>
        <br />
        <p>
          NFT stands for "Non-Fungible Token". It is a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content, such as artwork, music, or other types of digital media. NFTs are unique and cannot be replicated or divided into smaller parts, unlike fungible assets such as cryptocurrencies. NFTs are stored on a blockchain, which provides a decentralized and secure way to verify ownership and authenticity. The use of NFTs has gained popularity in recent years, particularly in the art world, where they allow creators to sell unique digital art and collectors to prove ownership of the original digital artwork.
        </p>
      </div>
      <div className="right">
        <Lottie className='useranimation' animationData={Ani} loop={true} />
      </div>
    </div>
  )
}

export default About