import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";
import "./style.css";
import "./form.css";

const Contact =()=>{
    return <><header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <img src={Logo} alt="React" className="logo"/>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item"><NavLink to="/"><h6 className="menu-item">Home</h6></NavLink></li>
        <li className="nav-item"><NavLink to="/about"><h6 className="menu-item">About US</h6></NavLink></li>
        <li className="nav-item"><NavLink to="/service"><h6 className="menu-item">Services</h6></NavLink></li>
        <li className="nav-item"><NavLink to="/contact"><h6 className="menu-item">Contact US</h6></NavLink></li> 
        <li className="nav-item"><NavLink to="/help"><h6 className="menu-item">Help</h6></NavLink></li>
        <li className="nav-item"><button type="button" className="btn btn-light">Sign In</button></li>
        <li className="nav-item"><button type="button" className="btn btn-dark">Register</button></li>
    </ul>
    </div>
    </nav>
    </header>

<section className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row form">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="fullname"
              />
              <label htmlfor="floatingInput" id="lbl">Full Name</label>           
              
            </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="contact number"
              />
              <label htmlfor="floatingInput" id="lbl">Contact Number</label>           
              
            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="email"
              />
              <label htmlfor="floatingInput" id="lbl">Email</label>           
              
            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                    <div className="form-floating">
  <textarea className="form-control" placeholder="subject" id="floatingTextarea"></textarea>
  <label htmlfor="floatingTextarea">Subject</label>
</div>

                    </div>
                </div>
            </form>
            <div className=" btn-sub text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>//Address</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>//Phone no</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>//email id</p>
                </li>
            </ul>
        </div>
    </div>
</section>
<footer className="text-center text-lg-start bg-white text-muted" id="footer-style">
  <section className=" social d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-facebook"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-google"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-github"></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>TIPP
          </h6>
          <p>
            TIPP is a technical interview preparation platform that helps students in there preparation of technical interviews through which they will be able to crack a wonderful job with higher packages.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
          <NavLink to="/"><h6 className="menu-item">Home</h6></NavLink>
          </p>
          <p>
          <NavLink to="/about"><h6 className="menu-item">About us</h6></NavLink>
          </p>
          <p>
          <NavLink to="/contact"><h6 className="menu-item">Contact US</h6></NavLink>
          </p>
          <p>
          <NavLink to="/service"><h6 className="menu-item">Service</h6></NavLink>
          </p>
          <p>
          <NavLink to="/help"><h6 className="menu-item">Help</h6></NavLink>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            FEATURES
          </h6>
          <p>
            <a href="#!" className="text-reset"></a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
          <NavLink to="/help"><h6 className="menu-item">Help</h6></NavLink>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> UCER, Praygraj</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="http://google.com/">Website Address</a>
  </div>
</footer>
</>
};

export default Contact;