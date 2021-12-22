import React from "react";
import { faSortUp, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, Tabs } from "react-bootstrap";

const DatabaseTable = () => {
  const [key, setKey] = useState("topgainers");

  return (
    <div className="container my-4 mb-5">
      <h3 className="market_action_heading text-center fs-33 fw-bold mb-4 mt-4">
        Market Action
      </h3>
      <Tabs
        id="DatabaseTable"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="topgainers" title="top gainers">
        <div className="table-responsive">  
        <table className="table mt-3 table-hover">
          <thead className="bg-light">
            <tr>
              <th scope="col">symbol</th>
              <th scope="col">Current price</th>
              <th scope="col">Today L/h</th>
              <th scope="col">change(%)</th>
              <th>prev. close</th>
              <th>volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-uppercase" scope="row">
                Network
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV}  className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                fiemind
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV}  className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                mstcltd
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV}  className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                irctc
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV}  className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                nlcindia
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                beml
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table> 
        </div>
        </Tab>
        <Tab eventKey="toplosers" title="top losers">
        <div className="table-responsive"><table className="table mt-3 table-hover">
          <thead className="bg-light">
            <tr>
              <th scope="col">symbol</th>
              <th scope="col">Current price</th>
              <th scope="col">Today L/h</th>
              <th scope="col">change(%)</th>
              <th>prev. close</th>
              <th>volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <th className="text-uppercase" scope="row">
                beml
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
            <th className="text-uppercase" scope="row">
                fiemind
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                mstcltd
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                irctc
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                Network
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                nlcindia
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table></div>
        </Tab>
        <Tab eventKey="sameopen&low" title="same open & low">
          <div className="table-responsive">
          <table className="table mt-3 table-hover">
          <thead className="bg-light">
            <tr>
              <th scope="col">symbol</th>
              <th scope="col">Current price</th>
              <th scope="col">Today L/h</th>
              <th scope="col">change(%)</th>
              <th>prev. close</th>
              <th>volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-uppercase" scope="row">
                Network
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                fiemind
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                mstcltd
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                irctc
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                nlcindia
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                beml
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </Tab>
        <Tab eventKey="sameopen&high" title="same open & high">
          <div className="table-responsive">
          <table className="table mt-3 table-hover">
          <thead className="bg-light">
            <tr>
              <th scope="col">symbol</th>
              <th scope="col">Current price</th>
              <th scope="col">Today L/h</th>
              <th scope="col">change(%)</th>
              <th>prev. close</th>
              <th>volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-uppercase" scope="row">
                Network
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                fiemind
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                mstcltd
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                irctc
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                nlcindia
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                beml
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </Tab>
        <Tab eventKey="gapup" title="gap up">
          <div className="table-responsive">
          <table className="table mt-3 table-hover">
          <thead className="bg-light">
            <tr>
              <th scope="col">symbol</th>
              <th scope="col">Current price</th>
              <th scope="col">Today L/h</th>
              <th scope="col">change(%)</th>
              <th>prev. close</th>
              <th>volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-uppercase" scope="row">
                Network
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                fiemind
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                mstcltd
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                irctc
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                nlcindia
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                beml
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </Tab>
        <Tab eventKey="gapdown" title="gap down">
          <div className="table-responsive">
          <table className="table mt-3 table-hover">
          <thead className="bg-light">
            <tr>
              <th scope="col">symbol</th>
              <th scope="col">Current price</th>
              <th scope="col">Today L/h</th>
              <th scope="col">change(%)</th>
              <th>prev. close</th>
              <th>volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-uppercase" scope="row">
                Network
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                fiemind
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                mstcltd
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV}  className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                irctc
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                nlcindia
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase" scope="row">
                beml
              </th>
              <td>78.75</td>
              <td>69.00</td>
              <td>
                <div className="col-12 d-flex">
                  {" "}
                  <div className="col-1 ">
                    <FontAwesomeIcon
                      className="shortdown_icon"
                      icon={faSortUp}
                    />
                  </div>{" "}
                  <div className="col-11"> 9.80(14.21%)</div>
                </div>
              </td>
              <td>68.95</td>
              <td>1,17,27,216</td>
              <td>
                <button className="border rounded bg-transparent btn shadow-none py-1">
                  <FontAwesomeIcon icon={faEllipsisV} className="text-black-50"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </Tab>
      </Tabs>
      <div className="view_more row justify-content-end">
        <div className="col-1">
        <a href="/" className="text-end">
          View more
        </a>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="search_stocks_btn col-2  btn mt-3 fs-16 fw-500 text-center">Search Stocks</div>
      </div>
      <div className="row my-5 mx-0">
        <div className="bg-banner1 d-md-flex my-2">
        <div className="col-md-9 py-2 py-lg-4 py-md-3">
          <div className="bannner-heading"> 
          <h4 className="pb-2 pt-3 text-dark fs-28 fw-bold text-left ps-3">
            Want to open a Demart Account?
          </h4>
          <p className="fs-16 fw-normal text-left ps-3">Not happy with your broker / new to trading</p>
          </div>
        </div>
        <div className="col-md-3 my-2">
          <div className="btn help_btn fs-16 text-capitalize">Let Us Help!</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DatabaseTable;
