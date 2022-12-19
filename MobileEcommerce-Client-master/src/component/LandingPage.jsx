import React from "react";
import './landing.css';


import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="landing-page">
        <div className="navbar-container">
          <nav className="navbar-container">
            <div><img className="logoimg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRsNhL3GuNWxIdJXyotvCLNPeMeVf1KEL4g&usqp=CAU' alt=""/> </div>
            <div className="navlist-container">
             
              <Link to="/user/login" style={{textDecoration:'none'}}>
              <div ><img className="loginaction" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrAZ-4LY4PUV992QkJ8p1nPw7ab-dnHDjOw&usqp=CAU' alt=""/></div> <div>User</div>
              </Link>
           
              <Link to="/admin/login" style={{textDecoration:'none'}}>
              <div><img className="loginaction" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkmpxa41SDqTH1fkEuYMdIl-rHQtuxulBqQ&usqp=CAU' alt=""/></div>
              <div >Admin </div>
              </Link>
            </div>
          </nav>
        </div>
       
        <div className="headliner-container">
          <img className="banner" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGM_4LdvBZ1M-5hd4m48jA-vv5QV89L4wgjQ&usqp=CAU' alt=""/>
        </div>
        <div className="crm_content">
          <div  className='main_content' >
            <h1>
            Connect with your <br/>customers <br/> wherever they are
            </h1>
            </div>
          <div className="side_content" style={{margin:'90px', marginLeft:'70px'}}>
            <ul>
              <li>Reach customers across every channel: telephone, email, live chat, and social media</li>
              <li>Get real-time notifications when customers interact with your business</li>
              <li>Measure the effectiveness of your customer communication and find the best time and channel to reach out to your customers</li>
            </ul>
          </div>
        </div>
        <footer>
          Copyrights @ <span style={{color:'blue', fontWeight:'bold'}}>Mobile Store</span> 2022
        </footer>
       
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
