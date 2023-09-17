import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Timing from './Timing';
import Credentials from './Credentials';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import MintCredentials from './MintCredentials';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import EncryptCredetials from './EncryptCredetials';
const User = () => {

  return (
    <div className="user-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="top">
          <div className="profilebox">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt="" />
            <div className="head">
              <h3>Prakhar Dubey </h3>
              <KeyboardArrowDownIcon/>
            </div>
            <p>Jabalpur MP,India</p>
          </div>
          <ul>
            <li>
              <Link to="dashboard"> <DashboardIcon/> Dashboard</Link>
            </li>
            <li>
              <Link to="timing"> <AccessTimeIcon/>  Meet Timing</Link>
            </li>
            <li>
              <Link to="credentials"> <CardMembershipIcon/> Credentials</Link>
            </li>
            <li>
              <Link to="listcredentials"> <ClearAllIcon /> See Credentials</Link>
            </li>
            <li>
              <Link to="cryptcredentials"> <EnhancedEncryptionIcon /> Encrypt credentials</Link>
            </li>
            {/* Add more sidebar options here */}
          </ul>
        </div>
        <div className="bottom">
          <div className="help">
            < QuestionMarkIcon className='iconpos'/>
            <h2>Help Center</h2>
            <p>Have a problem</p>
            <p>Send us a Meassage</p>
            <button >Go to help Center</button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="user-content">
        {/* Route configuration for nested routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="timing" element={<Timing />} />
          <Route path="credentials" element={<MintCredentials />} />
          <Route path="listcredentials" element={<Credentials />} />
          <Route path="cryptcredentials" element={<EncryptCredetials/>} />
          {/* Add more nested routes here */}
        </Routes>
      </div>
    </div>
  )
}

export default User