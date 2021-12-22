import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Socialicon1,
  Socialicon2,
  Socialicon3,
  Socialicon4,
  Socialicon5,
  PlayStore,
  AppleStore,
  Qrcode,
  MobileApp,
} from "../images/Images";

const Counter = () => {
  return (
    <>
      <div className="watchlist_container">
        <div className="container mb-5">
          <h2 className="Portal_main_heading mt-4 fw-bold fs-33 text-center">
            You have helped us reach here
          </h2>
          <h4 className="portal_main_subheading mb-4 fs-16 fw-normal text-center">
            And we are committed to helping you achieve your financial goals.
          </h4>
          <div className="card-main-container py-4">
            <div className="row"> 
            <div className="col px-xl-4 px-lg-3">
            <div className="card-items2 mb-3">
              <div className="row">
                <div className="social-icon">
                <img src={Socialicon1} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="Subscribers"> 
                <h4 className="fs-30 fw-bold text-center">10K</h4>
                <h6 className="fs-16 fw-normal text-center">Daily view time</h6>
                </div>
                </div>
              </div>
            </div>
            <div className="col px-xl-4 px-lg-3">
              <div className="card-items2 mb-3">
              <div className="row">
                <div className="social-icon">
                <img src={Socialicon2} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="Subscribers"> 
                <h4 className="fs-30 fw-bold text-center">400K+</h4>
                <h6 className="fs-16 fw-normal text-center">Playstore downloads</h6>
              </div>
              </div>
            </div>
            </div>
            <div className="col px-xl-4 px-lg-3">
            <div className="card-items2 mb-3 p-3">
              <div className="row">
                <div className="social-icon">
                <img src={Socialicon3} alt="" />
                </div>
              </div>
              <div className="row">
              <div className="Subscribers">
                <h4 className="fs-30 fw-bold text-center">90K+</h4>
                <h6 className="fs-16 fw-normal text-center">Daily visitors</h6>
              </div>
              </div>
            </div>
            </div>
            <div className="col px-xl-4 px-lg-3">
              <div className="card-items2 mb-3 p-3">
              <div className="row">
              <div className="social-icon">
                <img src={Socialicon4} alt="" />
              </div>
              </div>
              <div className="row">
                <div className="Subscribers">
                <h4 className="fs-30 fw-bold text-center">4500K+</h4>
                <h6 className="fs-16 fw-normal text-center">Youtube Subscribers</h6>
                </div>
              </div>
            </div>
            </div>
            <div className="col px-xl-4 px-lg-3">
            <div className="card-items2 mb-3 p-3">
              <div className="row">
                <div className="social-icon"> 
                <img src={Socialicon5} alt="" />
              </div>
              </div>
              <div className="row">
                <div className="Subscribers">
                <h4 className="fs-30 fw-bold text-center">800K+</h4>
                <h6 className="fs-16 fw-normal text-center">Monthly platform users</h6>
              </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container Stock-Portal my-5">
        <h1 className="Portal_main_heading fs-33 fw-bold text-center">
          Ready to get started start your journey
        </h1>
        <h4 className="portal_main_subheading fs-16 fw-normal text-center mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br />
          diam nonumy eirmod tempor
        </h4>
        <div className="row d-flex justify-content-center">
          <div className="search_stocks_btn col-2  btn my-4">
            Sign up now <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div className="watchlist_container container-fluid">
        <div className="container d-flex">
          <div className="col-12 col-md-6">
            <h2 className="Portal_main_heading2 text-lg-start mt-5 flex-row fs-45 fw-bold mb-3">
              Download our <br /> mobile app
            </h2>
            <h4 className="portal_main_subheading2 fs-18 text-lg-start mt-2">
              NiftyTrader Stock Screener, NSE BSE Market Pulse, <br /> Stock
              Analysis
            </h4>
            <div className="col-12 col-md-6 col-lg-6 d-flex align-items-between">
            <div className="col-4">
              <div className="download-sorce mt-5"> 
              <button className="border-0 mb-3"><img src={PlayStore} alt="" /></button>
               <button className="border-0"><img src={AppleStore} alt="" /></button>
            </div>
            </div>
            <div className="col-4 px-4 mt-5">
              <div className="Qrscan px-4"> 
                <button className="border-0"><img src={Qrcode} alt="/"/></button>
              </div>
            </div>
            </div>
            <div className="col-11 col-lg-6 col-md-6 px-1">
            <div className="downlaod_btn_here text-center px-0">
              <h3 className="py-2 text-uppercase fs-15 fw-500 text-center">Over 200k+ Downloads in India</h3></div>
        </div>
        </div>
          <div className="col-md-5 mobile_img">
              <img src={MobileApp} style={{width:'100%'}} alt="" />
          </div>
          </div>
      </div>
    </>
  );
};

export default Counter;
