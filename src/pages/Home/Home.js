import React from 'react';
import {RiProductHuntLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from './../../components/protect/Hiddenlink';

function Home() {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <RiProductHuntLine size={35} />
        </div>
        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/*    Hero Section */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Hospital & Clinic Management Solution</h2>
          <p>
            System to control and manage Clinic in real timeand
            integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Free Trial 1 Month</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="16K" text="Brand Owners" />
            <NumberText num="28K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>

        <div className="hero-image"></div>
        <img src={heroImg} alt="Inventory" />
      </section>
    </div>
  );
};

const NumberText =({num, text})=>{
  return(
    <div className="--mr">
    <h3 className='--color-white'>{num}</h3>
    <p className='--color-white'>{text}</p>
    </div>
  )
}

export default Home;