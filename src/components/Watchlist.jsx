import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import {
  faExternalLinkAlt,
  faSortUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Fibonacci,
  AdvanceFibonacci,
  blacksholes,
  PivotCalculate,
  Developing,
  broker1,
  broker2,
  broker3,
  broker4,
  broker5,
} from "../images/Images";
import Slider from "react-slick";

const Watchlist = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1700,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="watchlist_container">
        <div className="container">
          <h2 className="Portal_main_heading mt-5 fw-bold fs-33 text-center">Watchlist</h2>
          <h4 className="portal_main_subheading fs-16 fw-normal text-center">
            Track all your stocks in one place.
          </h4>
          <div className="card-main-container d-block">
            <Slider {...settings}>
              <div>
                <div className="card-items">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between ">
                      <h5 className="text-uppercase fs-16 fw-500">
                      network18
                      </h5>
                      <span className="">
                        <FontAwesomeIcon
                          className="share_alt"
                          icon={faExternalLinkAlt}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row vol">
                    <span className="text-capitalize text-left fs-13 fw-500">vol 1,17,27,216</span>
                  </div>
                  <div className="row">
                    <h3 className="fw-bold pt-3 fs-2">78.75</h3>
                    <p className="fw-normal fs-13">
                      <FontAwesomeIcon icon={faSortUp} /> 9.80(14.21%)
                    </p>
                  </div>
                  <button className="watchlistbtn btn mt-5 mb-1 fs-13 fw-normal text-capitalize">
                    <FontAwesomeIcon icon={faStar} /> add to watchlist
                  </button>
                </div>
              </div>
              <div>
                <div className="card-items">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between ">
                    <h5 className="text-uppercase fs-16 fw-500">
                      network18
                      </h5>
                      <span className="">
                        <FontAwesomeIcon
                          className="share_alt"
                          icon={faExternalLinkAlt}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row vol">
                  <span className="text-capitalize text-left fs-13 fw-500">vol 1,17,27,216</span>
                  </div>
                  <div className="row">
                    <h3 className="fw-bold pt-3 fs-2">78.75</h3>
                    <p className="fw-normal fs-13">
                      <FontAwesomeIcon icon={faSortUp} /> 9.80(14.21%)
                    </p>
                  </div>
                  <button className="watchlistbtn btn mt-5 mb-1 fs-13 fw-normal text-capitalize">
                    <FontAwesomeIcon icon={faStar} /> add to watchlist
                  </button>
                </div>
              </div>
              <div>
                <div className="card-items">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between ">
                    <h5 className="text-uppercase fs-16 fw-500">
                      network18
                      </h5>
                      <span className="">
                        <FontAwesomeIcon
                          className="share_alt"
                          icon={faExternalLinkAlt}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row vol">
                  <span className="text-capitalize text-left fs-13 fw-500">vol 1,17,27,216</span>
                  </div>
                  <div className="row">
                    <h3 className="fw-bold pt-3 fs-2">78.75</h3>
                    <p className="fw-normal">
                      <FontAwesomeIcon icon={faSortUp} /> 9.80(14.21%)
                    </p>
                  </div>
                  <button className="watchlistbtn btn mt-5 mb-1 fs-13 fw-normal text-capitalize">
                    <FontAwesomeIcon icon={faStar} /> add to watchlist
                  </button>
                </div>
              </div>
              <div>
                <div className="card-items">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between ">
                    <h5 className="text-uppercase fs-16 fw-500">
                      network18
                      </h5>
                      <span className="">
                        <FontAwesomeIcon
                          className="share_alt"
                          icon={faExternalLinkAlt}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row vol">
                  <span className="text-capitalize text-left fs-13 fw-500">vol 1,17,27,216</span>
                  </div>
                  <div className="row">
                    <h3 className="fw-bold pt-3 fs-2">78.75</h3>
                    <p className="fw-normal">
                      <FontAwesomeIcon icon={faSortUp} /> 9.80(14.21%)
                    </p>
                  </div>
                  <button className="watchlistbtn btn mt-5 mb-1 fs-13 fw-normal text-capitalize">
                    <FontAwesomeIcon icon={faStar} /> add to watchlist
                  </button>
                </div>
              </div>
              <div>
                <div className="card-items">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between ">
                    <h5 className="text-uppercase fs-16 fw-500">
                      network18
                      </h5>
                      <span className="">
                        <FontAwesomeIcon
                          className="share_alt"
                          icon={faExternalLinkAlt}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row vol">
                  <span className="text-capitalize text-left fs-13 fw-500 ">vol 1,17,27,216</span>
                  </div>
                  <div className="row">
                    <h3 className="fw-bold pt-3 fs-2">78.75</h3>
                    <p className="fw-normal">
                      <FontAwesomeIcon icon={faSortUp} /> 9.80(14.21%)
                    </p>
                  </div>
                  <button className="watchlistbtn btn mt-5 mb-1 fs-13 fw-normal text-capitalize">
                    <FontAwesomeIcon icon={faStar} /> add to watchlist
                  </button>
                </div>
              </div>
              <div>
                <div className="card-items">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                    <h5 className="text-uppercase fs-16 fw-500">
                      network18
                      </h5>
                      <span className="">
                        <FontAwesomeIcon
                          className="share_alt"
                          icon={faExternalLinkAlt}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row vol">
                  <span className="text-capitalize text-left fs-13 fw-500">vol 1,17,27,216</span>
                  </div>
                  <div className="row">
                    <h3 className="fw-bold pt-3 fs-2">78.75</h3>
                    <p className="fw-normal">
                      <FontAwesomeIcon icon={faSortUp} /> 9.80(14.21%)
                    </p>
                  </div>
                  <button className="watchlistbtn btn mt-5 mb-1 fs-13 fw-normal text-capitalize">
                    <FontAwesomeIcon icon={faStar} /> add to watchlist
                  </button>
                </div>
              </div>
              <div>
                <div className="card-items">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                    <h5 className="text-uppercase fs-16 fw-500">
                      network18
                      </h5>
                      <span className="">
                        <FontAwesomeIcon
                          className="share_alt"
                          icon={faExternalLinkAlt}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row vol">
                  <span className="text-capitalize text-left fs-13 fw-500">vol 1,17,27,216</span>
                  </div>
                  <div className="row">
                    <h3 className="fw-bold pt-3 fs-2">78.75</h3>
                    <p className="fw-normal">
                      <FontAwesomeIcon icon={faSortUp} /> 9.80(14.21%)
                    </p>
                  </div>
                  <button className="watchlistbtn btn mt-5 mb-1 fs-13 fw-normal text-capitalize">
                    <FontAwesomeIcon icon={faStar} /> add to watchlist
                  </button>
                </div>
              </div>
              <div>
                <div className="card-items">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between ">
                    <h5 className="text-uppercase fs-16 fw-500">
                      network18
                      </h5>
                      <span className="">
                        <FontAwesomeIcon
                          className="share_alt"
                          icon={faExternalLinkAlt}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row vol">
                  <span className="text-capitalize text-left fs-13 fw-500">vol 1,17,27,216</span>
                  </div>
                  <div className="row">
                    <h3 className="fw-bold pt-3 fs-2">78.75</h3>
                    <p className="fw-normal">
                      <FontAwesomeIcon icon={faSortUp} /> 9.80(14.21%)
                    </p>
                  </div>
                  <button className="watchlistbtn btn mt-5 mb-1 fs-13 fw-normal text-capitalize">
                    <FontAwesomeIcon icon={faStar} /> add to watchlist
                  </button>
                </div>
              </div>
              <div>
                <div className="card-items">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between ">
                    <h5 className="text-uppercase fs-16 fw-500">
                      network18
                      </h5>
                      <span className="">
                        <FontAwesomeIcon
                          className="share_alt"
                          icon={faExternalLinkAlt}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row vol">
                  <span className="text-capitalize text-left fs-13 fw-500">vol 1,17,27,216</span>
                  </div>
                  <div className="row">
                    <h3 className="fw-bold pt-3 fs-2">78.75</h3>
                    <p className="fw-normal">
                      <FontAwesomeIcon icon={faSortUp} /> 9.80(14.21%)
                    </p>
                  </div>
                  <button className="watchlistbtn btn mt-5 mb-1 fs-13 fw-normal text-capitalize">
                    <FontAwesomeIcon icon={faStar} /> add to watchlist
                  </button>
                </div>
              </div>
            </Slider>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="search_stocks_btn col-2  btn my-5 text-capitalize">
              Explore watchlist
            </div>
          </div>
        </div>
      </section>

      <div className="Research_analysis_section container-fluid py-4">
        <div className="container Stock-Portal">
          <h1 className="Portal_main_heading mt-5 text-white fw-bold fs-33 text-center">
            Research analysis tools
          </h1>
          <h4 className="portal_main_subheading text-white fs-16 fw-normal text-center">
            Wait, there's Even more for you!
          </h4>
          <div className="row reserch-section my-4 justify-content-center justify-content-md-between justify-content-md-between">
            <div className="col-6 col-md-2 col-lg-2 col-xl-2">
              <div className="reserch-items d-flex flex-column justify-content-center">
                <div className="reserch-icon">
                  <img src={Fibonacci} alt="" />
                </div>
                <h4 className="text-center fs-16 fw-normal text-capitalize">Fibonacci calculator</h4>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2 col-xl-2">
              <div className="reserch-items">
              <div className="reserch-icon">
                <img src={AdvanceFibonacci} alt="" />
              </div>
              <h4 className="text-center fs-16 fw-normal text-capitalize">
                Advance Fibonacci <br /> calculator
              </h4>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2 col-xl-2">
              <div className="reserch-items">
              <div className="reserch-icon">
                <img src={blacksholes} alt="" />
              </div>
              <h4 className="text-center fs-16 fw-normal text-capitalize">
                black scholes <br /> calculator
              </h4>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2 col-xl-2">
            <div className="reserch-items">
              <div className="reserch-icon">
                <img src={PivotCalculate} alt="" />
              </div>
              <h4 className="text-center fs-16 fw-normal text-capitalize">pivot point calculator</h4>
            </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2 col-xl-2">
              <div className="reserch-items ">
              <div className="reserch-icon">
                <img src={Developing} alt="" />
              </div>
              <h4 className="text-center fs-16 fw-normal text-capitalize">developing pivots</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="brokerage_section">
          <h1 className="Portal_main_heading mt-5 fw-bold fs-33 text-center">Top 5 brokers</h1>
          <h4 className="portal_main_subheading fs-16 fw-normal text-center">
            Open account with leading brokers for Indian Stock Market.
          </h4>
          <div className="brokers_list row mt-4 d-flex justify-content-space-around">
            <div className="col-2">
              <img src={broker1} alt="" />
            </div>
            <div className="col-2">
              <img src={broker2} alt="" />
            </div>
            <div className="col-2">
              <img src={broker3} alt="" />
            </div>
            <div className="col-2">
              <img src={broker4} alt="" />
            </div>
            <div className="col-2">
              <img src={broker5} alt="" />
            </div>
          </div>
        </div>
        <div className="row my-5 mx-0">
          <div className="bg-banner1 d-md-flex my-3">
            <div className="bannner-heading col-md-9 py-2 py-lg-4 py-md-3">
              <h4 className="pb-2 pt-3 text-dark fs-28 fw-bold text-left ps-3">Find the right broker</h4>
              <p className="fs-16 fw-normal text-left ps-3">
                Let us help you find the right broker for your specific
                requirements.
              </p>
            </div>
            <div className="col-md-3 my-3">
              <div className="btn help_btn fs-16 text-capitalize">Get Help</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
