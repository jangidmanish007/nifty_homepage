import React from "react";
import {
  StockScreener,
  Marketscreener,
  StockAnalysis,
  ChainAnalysis,
  Watchlists,
  LiveAnalytics,
} from "../images/Images";

const StockPortal = () => {
  return (
    <section className="stockPortal_container mb-5">
      <div className="container Stock-Portal">
        <h1 className="Portal_main_heading mt-5 fw-bold fs-33 text-center">
          Stock Market at your Fingertips!
        </h1>
        <p className="portal_main_subheading fs-16 fw-normal text-center">
          Most comprehensive stock market portal in india.
        </p>
        <div className="portal_Main_card row mt-4 d-flex justify-content-between mt-5 py-2">
          <div className="col-12 col-sm-6 col-lg-4 col-md-6 mt-sm-2">
            <div className="portal_card p-3">
              <img src={StockScreener} alt="" />
              <div className="Portal_Card_heading row">
                <h4 className="fs-18 fw-bold text-capitalize">advanced Stock screener</h4>
              </div>
              <div className="Portal_Card_desc row">
                <p className="fs-16  fw-normal">For your daily research after the market closes.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-md-6 mt-sm-2">
            <div className="portal_card p-3">
              <img src={Marketscreener} alt="" />
              <div className="Portal_Card_heading row">
                <h4 className="fs-18 fw-bold text-capitalize">Live Market screener</h4>
              </div>
              <div className="Portal_Card_desc row">
                <p className="fs-16  fw-normal">For real time signals on stocks.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-md-6 mt-sm-2">
            <div className="portal_card p-3">
              <img src={StockAnalysis} alt="" />
              <div className="Portal_Card_heading row">
                <h4 className="fs-18 fw-bold text-capitalize">stocks analysis</h4>
              </div>
              <div className="Portal_Card_desc row">
                <p className="fs-16  fw-normal">real time stock research & stock technical with an edge</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-md-6 mt-sm-2">
            <div className="portal_card p-3">
              <img src={ChainAnalysis} alt="" />
              <div className="Portal_Card_heading row">
                <h4 className="fs-18 fw-bold text-capitalize">option chain analysis</h4>
              </div>
              <div className="Portal_Card_desc row">
                <p className="fs-16  fw-normal">For your daily research after the market closes</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-md-6 mt-sm-2">
            <div className="portal_card p-3">
              <img src={Watchlists} alt="" />
              <div className="Portal_Card_heading row">
                <h4 className="fs-18 fw-bold text-capitalize">watchlists & alerts</h4>
              </div>
              <div className="Portal_Card_desc row">
                <p className="fs-16  fw-normal">simplify following stock prices</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-md-6 mt-sm-2">
            <div className="portal_card p-3">
              <img src={LiveAnalytics} alt="" />
              <div className="Portal_Card_heading row">
                <h4 className="fs-18 fw-bold text-capitalize">Live analytics</h4>
              </div>
              <div className="Portal_Card_desc row">
                <p className="fs-16  fw-normal">technical analysis dashbord for nifty &bank nifty</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="bg-banner d-md-flex">
            <div className="col-md-9 my-2 py-2 py-lg-4 py-md-3">
              <div className="bannner-heading">
                <h4 className="pb-2 pt-3 fs-28 fw-bold text-left">
                  Are you ready to experience the best?
                </h4>
                <p className="fs-16 fw-normal text-left">get teh best of niftyTrader with annual prime membership.</p>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <button className="btn btn-light fs-16 text-capitalize">unlock!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockPortal;
