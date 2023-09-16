import React, { useEffect, useState } from 'react'
import { PhantomButton } from 'wallet-connect-buttons';

import '../css/Components.css'
import { useGlobalContext } from '../Context/WalletContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react"
import logox from '../Lottie animation/Navlogo.json'
import { redirect } from 'react-router-dom';
const Navbar = () => {
    const { isAddress, setIsAddress } = useGlobalContext();
    // const [publicKey, setPublicKey] = useState('');
    const [isVisible, setVisibility] = useState(true);
    useEffect(() => {

        const handleSubmit = () => {
            // event.preventDefault();
            const arx = [];
            fetch('http://localhost:3000/ali', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(
                    data => {
                        // console.log(data.address);

                        data.data.map((item, index) =>
                            // console.log(index,item.address);
                            // {index}
                            // {item.address}
                            arx.push(item.address)

                        )
                    }
                )
            console.log("d")
            console.log(arx)
            console.log(isAddress);
            if (arx.includes(isAddress)) {
                console.log("val")
            }

            if (isAddress !== "user") {

                fetch('http://localhost:3000/ali/createwallet', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ isAddress })
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        // console.log(JSON.stringify({ isAddress }));
                        // setAddress('');
                    })
                    .catch(error => console.error(error));
            }
        };

        handleSubmit();
    }, [isAddress])

    const logout=()=>{
        setIsAddress("user")
        toast("Wallet Logged out");
        window.location.href = '/';
    }

    const toggleVisibility = () => {
        setVisibility(!isVisible);
        toast("Wallet connected")
    }
    const tos = () => {
        toast(`Hi ${isAddress.substring(0, 17)}... `)
    }
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img src={logo} alt="Verifium" /> */}
                <Lottie className='artlogo' animationData={logox} loop={true} />
                <p> <span>V</span>erifium</p>
            </div>
            <div className="list">
                {/* <Link to="/">Home</Link>
                <Link to="/About">About us</Link>
                <Link to="/Guide">Guide</Link>
                <Link to="/Admin">Admin</Link> */}
                {isAddress === "user" ? <div className="box" onClick={toggleVisibility} >
                    <PhantomButton borderRadius="2rem" backgroundColor="#fff" color="black" setPublicKey={setIsAddress} />
                </div>
                    :
                    <div className="key-box" onClick={tos}  >

                        {isAddress.substring(0, 8)}...
                    </div>}
                {
                    isAddress !== "user" ? <button className='logoutbutton' onClick={() => { logout() }} >Logout </button> : ""
                }



                {/* {isVisible ?
                    <div className="box" onClick={toggleVisibility} >
                        <PhantomButton borderRadius="2rem" backgroundColor="#fff" color="black" setPublicKey={setIsAddress} />
                    </div>
                    :
                    <div className="key-box" onClick={tos}  >

                        {isAddress.substring(0, 8)}...
                    </div>
                } */}
            </div>

        </div>

    )
}

export default Navbar