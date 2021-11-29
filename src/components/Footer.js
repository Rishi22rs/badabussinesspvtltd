import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ background: "#1F1F1F" }}
      className="page-footer font-small blue pt-4"
    >
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase" style={{ color: "white" }}>
              Join Us
            </h5>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdzCFzjC4HBWn_q5fpeAAk4Xt66N9Q5s9adKmxEFwiiVHfxoA/viewform?embedded=true"
              width="100%"
              style={{ overflow: "hidden" }}
              height="1000px"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
            {/* <div className="d-flex">
              <form action="mailto:rishisrivastava22rs@gmail.com" method="POST" enctype="multipart/form-data" className="form p-5" style={{background:'#FEFAED'}}>
                <input type="text" name="name" placeholder="Name" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <input type="text" name="phone" placeholder="Contact Number" required/>
                <input type="text" name="city" placeholder="City" required/>
                <button type="submit" className="btn">Submit</button>
              </form>
            </div> */}
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 style={{ color: "white" }} className="text-uppercase">
              Contact Us
            </h5>

            <ul className="list-unstyled">
              <li>
                <a
                  href="tel:+91-7007912931"
                  className="col-md-3"
                  style={{ color: "white" }}
                >
                  Sales: +91-7007912931
                </a>
              </li>
              <li>
                <a
                  href="tel:+91-8299093967"
                  className="col-md-3"
                  style={{ color: "white" }}
                >
                  Sales: +91-8299093967
                </a>
              </li>
              <li>
                <a
                  href="mailto:ebs@badabussinesspvtltd.com"
                  className="col-md-3"
                  style={{ color: "white" }}
                >
                  Sales: ebs@badabussinesspvtltd.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 style={{ color: "white" }} className="text-uppercase">
              Links
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          ]
        </div>
      </div>

      <div
        style={{ color: "white" }}
        className="footer-copyright text-center py-3"
      >
        © 2020 Copyright:
        <a href="https://badabusinesspvtltd.com/"> badabusinesspvtltd.com</a>
      </div>
    </footer>
  );
};

export default Footer;
