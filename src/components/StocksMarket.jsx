import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Arrow,
  AngelBroking,
  TraderSmart,
  Upstox,
  Compare,
  IIFL,
} from "../images/Images";
import zerodhaImage from "../images/zerodha.png";

const StockMarket = () => {
  return (
    <div className="container second py-3">
      <div className="row mb-md-md-3 mt-4">
        <div className="col-xl-4 col-lg-4 col-md-12 mb-lg-0 mb-3">
          <div className="first bg-white rounded-3 border cursor-pointer">
            <div className="p-3">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 me-4">
                  <span className="nifty-heading fs-15 text-uppercase fw-500">
                    nifty 50
                  </span>
                </h5>
                <span className="nifty-Inc fw-normal fs-13 text-danger mt-1">
                  +176.05 +(0.97 %)
                </span>
              </div>
              <div className="d-flex justify-content-between mt-2 align-items-center">
                <div className="value_up fs-25 fw-bold">
                  <img src={Arrow} alt="" />
                  <span className="ps-1 "> 18338.55</span>
                </div>
                <div className="d-flex">
                  <div className="text-danger me-4">
                    <span className="High fs-13 text-capitalize">high</span>
                    <div className="High_value fs-13">8912.40</div>
                  </div>
                  <div className="">
                    <spna className="Low fs-13 fw-normal text-capitalize">low</spna>
                    <div className="text-danger">
                      <span className="Low_value fs-13 fw-normal">9112.05</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="refresh border-top text-capitlize">
              <ul className="list-unstyled d-flex m-0 align-items-center p-1 fw-normal">
                <li className="px-2">
                  <a className="text-decoration-none fs-13" href="/" title="Contributors">
                    Contributors
                  </a>
                </li>
                <li className="p-0">|</li>
                <li className="px-2">
                  <a className="text-decoration-none fs-13" href="/" title="Live Analytics">
                    Live Analytics
                  </a>
                </li>
                <li className="p-0">|</li>
                <li className="px-2">
                  <a className="text-decoration-none fs-13" href="/" title="Options">
                    options
                  </a>
                </li>
                <li className="p-0">|</li>
                <li className="px-2">
                  <a className="text-decoration-none fs-13" href="/" title="PCR">
                    PCR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-12 mb-lg-0 mb-3">
          <div className="first rounded border">
            <div className="p-3">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 me-4">
                  <span className="nifty-heading fs-15 text-uppercase fw-500">
                    SGX NIFTY
                  </span>
                </h5>
                <span className="nifty-Inc fw-normal fs-13 text-danger mt-1">
                  +176.80 +(0.97 %)
                </span>
              </div>
              <div className="d-flex justify-content-between mt-2 align-items-center">
                <div className="value_up fw-bold fs-25">
                  <img src={Arrow} alt="" />
                  <span className="ps-1"> 18391.50</span>
                </div>
                <div className="d-flex">
                  <div className="text-danger me-4">
                    <span className="High fs-13 text-capitalize">high</span>
                    <div className="High_value fs-13">8912.40</div>
                  </div>
                  <div className="">
                    <spna className="Low fs-13 fw-normal text-capitalize">low</spna>
                    <div className="text-danger">
                      <span className="Low_value fs-13 fw-normal">9112.05</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="refresh border-top text-capitlize">
              <ul className="list-unstyled d-flex m-0 align-items-center p-1 fw-normal">
                <li className="px-2">
                  <a className="text-decoration-none" href="/" title="auto refresh">
                    <FontAwesomeIcon icon={faRedo} /> auto refresh
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 mb-lg-0 mb-3">
          <div className="first rounded border">
            <div className="p-3">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 me-4">
                  <span className="nifty-heading fs-15 text-uppercase fw-500">
                    NIFTY BANK
                  </span>
                </h5>
                <span className="nifty-Inc mb-0 fs-13 text-danger mt-1">
                  705.15 (1.83 %)
                </span>
              </div>
              <div className="d-flex justify-content-between mt-2 align-items-center">
                <div className="value_up fs-25 fw-bold">
                  <img src={Arrow} alt="" />
                  <span className="ps-1"> 39340.90</span>
                  
                </div>
                <div className="d-flex">
                  <div className="text-danger me-4">
                    <span className="High fs-13 text-capitalize">high</span>
                    <div className="High_value fs-13">8912.40</div>
                  </div>
                  <div className="">
                    <spna className="Low fs-13 fw-normal text-capitalize">low</spna>
                    <div className="text-danger">
                      <span className="Low_value fs-13 fw-normal">9112.05</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="refresh border-top text-capitlize">
              <ul className="list-unstyled d-flex m-0 align-items-center p-1 fw-normal">
                <li className="px-2">
                  <a className="text-decoration-none" href="/" title="Live Analytics">
                    Live Analytics
                  </a>
                </li>
                <li className="p-0">|</li>
                <li className="px-2">
                  <a className="text-decoration-none" href="/" title="options">
                    options
                  </a>
                </li>
                <li className="p-0">|</li>
                <li className="px-2">
                  <a className="text-decoration-none" href="/" title="PCR">
                    PCR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-lg-between jsutify-content-sm-center my-3">
          <div className="col-6 col-lg-2 py-2">
          <div className="traders d-flex">
            <div className="brandlogo px-2">
              <img src={zerodhaImage} alt="" />
            </div>
            <div className="d-flex flex-column my-2">
              <span className="Company_name fs-14 fw-500">Zerodha</span>
              <span className="trade-detail fs-12">(₹20/trade) Open A/C</span>
            </div>
          </div>
          </div>
          <div className="col-6 col-lg-2 py-2 px-sm-3">
          <div className="traders d-flex px-2">
            <div className="brandlogo px-2">
              <img src={AngelBroking} alt="" />
            </div>
            <div className="d-flex flex-column my-2">
              <span className="Company_name fs-14 fw-500">Angle Broking</span>
              <span className="trade-detail fs-12">Flat ₹20 per trade</span>
            </div>
          </div>
          </div>
          <div className="col-6 col-lg-2 py-2 px-sm-3">
          <div className="traders d-flex px-2">
            <div className="brandlogo px-2">
              <img src={IIFL} alt="" />
            </div>
            <div className="d-flex flex-column my-2">
              <span className="Company_name fs-14 fw-500">IIFL</span>
              <span className="trade-detail fs-12">Flat ₹20/trade</span>
            </div>
          </div>
          </div>
          <div className="col-6 col-lg-2 py-2 px-sm-3">
          <div className="traders d-flex px-2">
            <div className="brandlogo px-2">
              <img src={TraderSmart} alt="" />
            </div>
            <div className="d-flex flex-column my-2">
              <span className="Company_name fs-14 fw-500">Trader Smart</span>
              <span className="trade-detail fs-12">Flat ₹20/trade</span>
            </div>
          </div>
          </div>
          <div className="col-6 col-lg-2 py-2 px-sm-3">
          <div className="traders d-flex px-2">
            <div className="brandlogo px-2">
              <img src={Upstox} alt="" />
            </div>
            <div className="d-flex flex-column my-2">
              <span className="Company_name fs-14 fw-500">Upstox</span>
              <span className="trade-detail fs-12">₹15 per trade</span>
            </div>
          </div>
          </div>
          <div className="col-6 col-lg-2 py-2 px-sm-3">
          <div className="traders d-flex px-2">
            <div className="brandlogo px-2">
              <img src={Compare} alt="" />
            </div>
            <div className="d-flex flex-column my-2">
              <span className="Company_name fs-14 fw-500">Compare</span>
              <span className="trade-detail fs-12 fw-normal">All top brokers</span>
            </div>
          </div>
          </div>
          </div>
          </div>
  );
};

export default StockMarket;
