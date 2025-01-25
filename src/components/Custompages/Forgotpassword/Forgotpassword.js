import React, { Fragment } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Customswitcherdata from "../../../data/Switcherdata/Customswitcherdata";
const Forgotpassword = () => (
  <Fragment>
    <div className="page main-signin-wrapper" >
      <div className="d-flex header-setting-icon demo-icon fa-spin" 
      onClick={() => Customswitcherdata.Swicherbutton()}
      >
        <span className="nav-link icon"  >
          <i className="fe fe-settings settings-icon "></i>
        </span>
      </div>
      {/* <!-- Row --> */}
      <Row className="signpages text-center" 
      onClick={() => Customswitcherdata.remove()}
        >
        <Col md={12}>
          <Card>
            <Row className="row-sm">
              <Col
                lg={6}
                xl={5}
                className="d-none d-lg-block text-center bg-primary details"
              >
                <div className="mt-3 pt-3 p-2 pos-absolute">
                  <img
                    src={require("../../../assets/img/brand/logo-light.png")}
                    className="header-brand-img mb-4"
                    alt="logo"
                  />
                  <div className="clearfix"></div>
                  <img
                    src={require("../../../assets/img/svgs/user.svg").default}
                    className="ht-100 mb-0"
                    alt="user"
                  />
                  <h5 className="mt-4 text-white">Reset Your Password</h5>
                  <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                    Signup to create, discover and connect with the global
                    community
                  </span>
                </div>
              </Col>
              <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
                <Container fluid>
                  <Row className=" row-sm">
                    <Card.Body className="card-body mt-2 mb-2">
                      <img
                        src={require("../../../assets/img/brand/logo.png")}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={require("../../../assets/img/brand/logo-light.png")}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                        alt="logo"
                      />
                      <div className="clearfix"></div>
                      <h5 className="text-start mb-2">Forgot Password</h5>
                      <p className="mb-4 text-muted tx-13 ms-0 text-start">
                        It's free to signup and only takes a minute.
                      </p>
                      <Form>
                        <Form.Group
                          className="text-start"
                          controlId="from email"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            className="form-control"
                            placeholder="Enter your email"
                            type="text"
                            defaultValue=""
                          />
                        </Form.Group>
                        <button className="btn ripple btn-main-primary btn-block mt-4">
                          Request reset link
                        </button>
                      </Form>
                      <div className="card-footer border-top-0 ps-0 mt-3 text-start ">
                        <p>Did you remembered your password?</p>
                        <p className="mb-0">
                          Try to
                          <Link
                            to={`${process.env.PUBLIC_URL}/custompages/signin/`}> Signin
                          </Link>
                        </p>
                      </div>
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>

    {/* <!-- End Row --> */}

  </Fragment>
);

Forgotpassword.propTypes = {};

Forgotpassword.defaultProps = {};

export default Forgotpassword;
