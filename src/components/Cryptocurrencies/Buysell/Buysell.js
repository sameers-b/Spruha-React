import React, { Fragment } from "react";
import Searchable from "react-searchable-dropdown";
import { Tab, Nav, TabContent, Row, Breadcrumb, Col, Card, Form, Button, InputGroup } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
 import * as buysell from "../../../data/crypotocurriencies/BuyingsellingOders";
import { Link } from "react-router-dom";
import { BuyingsellingOrders, } from "../../../data/crypotocurriencies/BuyingsellingOders";

function Buysell() {
  const selectoptionsdata = [
    { label: "BTC", value: "btc" },
    { label: "LTC", value: "ltc" },
    { label: "NEO", value: "neo" },
    { label: "DASH", value: "dash" },
    { label: " XRP", value: "xrp " },
    { label: " ETH", value: "eth " },
  
  ]
  const selectoptionsdata2 = [
    { label: "USD", value: "usd" },
    { label: "AED", value: "aed" },
    { label: "AUD", value: "aud" },
    { label: "ARS", value: "ars" },
    { label: "AZN", value: "azn " },
    { label: "BGN", value: "bng" },
    { label: "BRL", value: "brl" },
  
  ]
   const BuyCurrencyselectoption =[
    { label: "USD", value: "usd", },
    { label: "AED", value: "aed" },
    { label: "AUD", value: "aud" },
    { label: "ARS", value: "ars" },
    { label: "AZN", value: "azn " },
    { label: "BGN", value: "bng" },
    { label: "BRL", value: "brl" },
  
  ]
  const BuyCurrencyselectoption2 =[
    { label: "BTC", value: "btc" },
    { label: "LTC", value: "ltc" },
    { label: "NEO", value: "neo" },
    { label: "DASH", value: "dash" },
    { label: " XRP", value: "xrp " },
    { label: " ETH", value: "eth " },
  
  ]
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Crypto Currencies</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Crypto Currencies</Breadcrumb.Item>
            <Breadcrumb.Item active> BuySell</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white"
              type="button"
              className="btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              variant="white"
              type="button"
              className="btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button
              variant="primary"
              type="button"
              className=" my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}
      {/* <!-- Row--> */}
      <Row className="row-sm">
        <Col md={12}>
          <Card className="custom-card overflow-hidden">
            <div className="d-flex mb-3 p-3 border-bottom">
              <div className="align-items-center">
                <h4 className="d-flex">
                  Bitcoin
                  <span className="text-muted tx-13 ms-2 my-auto">BTC</span>
                </h4>
              </div>
              <Button
                variant="primary" className="btn ms-auto">Buy Bitcoin</Button>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Card.Body className="">
                <div className="d-sm-flex mb-0">
                  <div>
                    <p className="tx-13 text-muted mb-2">
                      Bitcoin [BTC] Price Chart
                    </p>
                    <h3>
                      $3468.42
                      <span className="text-success tx-15 ms-2">
                        <i className="fas fas fa-dollar-sign"></i> 23.5
                      </span>
                    </h3>
                  </div>
                  <div className="ms-auto">
                    <Nav variant="pills">
                      <Nav.Item className="border-0" title="1m">
                        <Nav.Link eventKey="first">1m</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="border-0 ">
                        <Nav.Link eventKey="second">1h</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="border-0">
                        <Nav.Link eventKey="third">1d</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                <Row>
                  <Col lg={9} xl={10} md={8}>
                    <TabContent>
                      <Tab.Pane eventKey="first">
                        <div>
                          <div>
                            <ReactApexChart
                              options={buysell.Bullsell.options}
                              series={buysell.Bullsell.series}
                              type="area"
                              height={350}
                            />
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div>
                          <div></div>
                          <ReactApexChart
                            options={buysell.Bullsell.options}
                            series={buysell.Bullsell.series}
                            type="area"
                            height={350}
                            className="tab-content"
                          />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div>
                          <div>
                            <ReactApexChart
                              options={buysell.chartbitcoin3.options}
                              series={buysell.chartbitcoin3.series}
                              type="area"
                              height={350}
                              className="tab-content"
                            />
                          </div>
                        </div>
                      </Tab.Pane>
                    </TabContent>
                  </Col>
                  <Col lg={3} xl={2} md={4}>
                    <Card className="bg-light custom-card">
                      <Card.Body>
                        <Card.Text className="text-muted tx-13">
                          <b>BNB</b> / BUSD
                        </Card.Text>
                        <h5 className="my-1">29.83267</h5>
                        <span className="text-danger">-0.04%</span>
                      </Card.Body>
                    </Card>
                    <Card className=" bg-light custom-card">
                      <Card.Body>
                        <Card.Text className="text-muted tx-13">
                          <b>ETH</b> / BUSD
                        </Card.Text>
                        <h5 className="my-1">34.25356</h5>
                        <span className="text-success">+0.03%</span>
                      </Card.Body>
                    </Card>
                    <Card className=" bg-light custom-card mb-0">
                      <Card.Body>
                        <span className="text-muted tx-13">
                          <b>EOS</b> / BUSD
                        </span>
                        <h5 className="my-1">22.32315</h5>
                        <span className="text-danger">-0.02%</span>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Tab.Container>
          </Card>
        </Col>
        <Col lg={12} xl={6} md={12}>
          <Card className="custom-card overflow-hidden crypto-buysell-card">
            <Card.Body>
              <Card.Header className=" border-bottom-0 ps-0 pt-0">
                <label className="main-content-label my-auto">
                  Buy Currency
                </label>
              </Card.Header>
              <div className="d-flex mt-3 mb-3">
                <div className="">
                  <p className="tx-16 text-muted mb-2">1 USDT is roughly</p>
                  <h3>
                    5.47<span className="text-success tx-15 ms-2">CNY</span>
                  </h3>
                </div>
                <div className="ms-auto my-auto">
                  <span className="claim me-2">
                    Claim
                    <span className="font-weight-bold text-success mx-2">20</span>
                    Free Bitcoin
                  </span>
                </div>
              </div>
              <Form.Group className="form-group">

                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Spend 32 - 6500"
                    aria-label="Spend 32 - 6500"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text className="wd-xl-30p p-0">

                  <Searchable className=" h-100 flex-1"
          value="test"
          placeholder="BTC" // by default "Search"
          notFoundText="No result found" // by default "No result found"
          noInput
          options={selectoptionsdata}
          onSelect={(value) => {
            console.log(value);
          }}
          listMaxHeight={140} //by default 140
        />
      
                  </InputGroup.Text>
                </InputGroup>


              </Form.Group>
              <Form.Group className="form-group">
                <InputGroup>
                  <Form.Control
                    type="text"
                    className="input-lg wd-80p"
                    defaultValue="Buy"
                  />
                  <InputGroup.Text className="p-0 wd-xl-30p">
                    <Searchable className=" h-100 flex-1"
          value="test"
          placeholder="USD" // by default "Search"
          notFoundText="No result found" // by default "No result found"
          noInput
          options={selectoptionsdata2}
          onSelect={(value) => {
            console.log(value);
          }}
          listMaxHeight={140} //by default 140
        />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="fs-14">
                <Form.Control
                  className="input-lg"
                  type="text"
                  placeholder="498fd7c42932070ff3ec30"
                />
              </Form.Group>
              <Form.Label className="main-content-label mt-4 mb-4">
                Select payment method
              </Form.Label>
              <Form className="payment-form form">
                <div className="payment-type d-flex">
                  <Form.Control name="radio3" type="radio" id="credit" className="form-check-input" value="credit" defaultChecked />
                  <Form.Label
                    className="credit-label payment-cards four ms-0 col"
                    htmlFor="credit"
                  >
                    <span className="d-none d-md-block">New card</span>
                    <img
                      src={require("../../../assets/img/visa.png")}
                      alt="visa"
                    />
                  </Form.Label>
                  <Form.Control type="radio" name="radio3" id="debit" className="form-check-input" defaultValue="debit" />
                  <label
                    className="debit-label payment-cards four col"
                    htmlFor="debit"
                  >
                    <span className="d-none d-md-block">Debit Card</span>
                    <img
                      src={require("../../../assets/img/mastercard.png")}
                      alt="Debitcard"
                    />
                  </label>
                  <Form.Control
                    type="radio"
                    name="radio3"
                    id="paypal"
                    defaultValue="paypal"
                  />
                  <label
                    className="paypal-label payment-cards four col"
                    htmlFor="paypal"
                  >
                    <span className="d-none d-md-block">Paypal</span>
                    <img
                      src={require("../../../assets/img/paypal.png")}
                      alt="paypal"
                    />
                  </label>
                  <Form.Control
                    type="radio"
                    name="radio3"
                    id="amex"
                    defaultValue="amex"
                  />
                  <label
                    className="amex-label payment-cards four col"
                    htmlFor="amex"
                  >
                    <span className="d-none d-md-block">Amex</span>
                    <img
                      src={require("../../../assets/img/amex.png")}
                      alt="amexg1096"
                    />
                  </label>
                </div>
                <Link to="#" className="btn btn-primary btn-lg btn-block mt-4">
                  Buy Now
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} xl={6} md={12}>
          <Card className=" custom-card  crypto-buysell-card">
            <Card.Body>
              <div className="card-header border-bottom-0 ps-0 pt-0">
                <label className="main-content-label my-auto">
                  Sell Currency
                </label>
              </div>
              <div className="form-group">
                <label className="font-weight-semibold tx-16 mt-3 mb-2">
                  Sell From
                </label>
                <div className="p-3 border d-flex">
                  <div className="d-flex">
                    <span className="crypto-icon bg-primary-transparent me-3">
                      <i className="cf cf-btc text-primary"></i>
                    </span>
                    <span className="my-auto tx-18 font-weight-semibold">
                      Bitcoin BTC
                    </span>
                  </div>
                  <div className="d-flex ms-auto">
                    <div className="card-item-stat d-none d-md-block">
                      <h4 className="font-weight-semibold mb-0 tx-15">
                        0.374648545 BTC
                      </h4>
                      <small className="tx-13 float-end text-end text-muted">
                        $5,634.65
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="font-weight-semibold tx-16 mt-2 mb-2">
                  Deposit to
                </label>
                <div className="p-3 border d-flex">
                  <span className="crypto-icon bg-primary-transparent">
                    <i className="fa fa-bank text-primary"></i>
                  </span>
                  <div className="my-auto ms-3">
                    <div className="d-flex my-auto tx-16 font-weight-semibold">
                      Banking
                    </div>
                    <small className="tx-13 text-muted">Checking</small>
                  </div>
                </div>
              </div>
              <label className="font-weight-semibold tx-16 mt-2 mb-2">
                Amount
              </label>
              <hr className="my-2" />
              <div className="d-flex mt-3 mb-3">
                <p className="tx-16 mb-0 text-muted">Weekly bank limit</p>
                <div className="ms-auto my-auto">
                  <span className="tx-16 text-muted">$10,000.00 remaining</span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-xl-5 col-lg-12 col-md-12 mb-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control input-lg wd-80p"
                      defaultValue="0.041323"
                    />
                    <div className="input-group-text p-0 wd-xl-40p">
          
                    <Searchable className=" h-100 flex-1"
          value="test"
          placeholder="BTC" // by default "Search"
          notFoundText="No result found" // by default "No result found"
          noInput
          options ={BuyCurrencyselectoption}
          onSelect={(value) => {
            console.log(value);
          }}
          listMaxHeight={140} //by default 140
        />
                    </div>
                  </div>
                </div>
                <Col xl={2} lg={12} md={12} className="form-group text-center my-auto">
                  <i className="pe-7s-repeat my-3 mt-xl-0 mb-xl-0 tx-26"></i>
                </Col>
                <Col xl={5} lg={12} md={12} className="form-group mb-0">
                  <InputGroup className="input-group">
                    <input
                      type="text"
                      className="form-control input-lg wd-80p"
                      defaultValue="500"
                    />
                    <InputGroup.Text className=" input-group-text p-0  wd-xl-40p">
    
                      
                      <Searchable className=" h-100 flex-1"
          value="test"
          placeholder="BTC" // by default "Search"
          notFoundText="No result found" // by default "No result found"
          noInput
          options={BuyCurrencyselectoption2}
          onSelect={(value) => {
            console.log(value);
          }}
          listMaxHeight={140} //by default 140
        />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </div>
              <Link to="#" className="btn btn-primary btn-lg btn-block mt-4">
                Sell Bitcoin
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- Row End --> */}

      {/* <!-- Row--> */}
      <div className="row row-sm">
        <div className="col-xl-12">
          <div className="card custom-card">
            <div className="card-header border-bottom-0">
              <label className="main-content-label my-auto pt-2">
                Recent Buying & selling Orders
              </label>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table card-table text-nowrap table-bordered border-top">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Remaining</th>
                      <th>Price</th>
                      <th>USD</th>
                      <th>Fee (%)</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BuyingsellingOrders.map((list, index) => (
                      <tr key={index} data-index={index}>
                        <td>{list.ID}</td>
                        <td>
                          <span className={`text-${list.typeinfo}`}>
                            {list.Type}
                          </span>
                        </td>
                        <td>{list.Amount}</td>
                        <td>{list.Remaining}</td>
                        <td>{list.Price}</td>
                        <td>{list.Usd}</td>
                        <td>{list.Fee}</td>
                        <td>
                          <span
                            className={`badge bg-${list.Status}-light bg-pill`}
                          >
                            {list.statustext}
                          </span>
                        </td>
                        <td>{list.Date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Row End --> */}
    </Fragment>
  );
}

Buysell.propTypes = {};

Buysell.defaultProps = {};

export default Buysell;
