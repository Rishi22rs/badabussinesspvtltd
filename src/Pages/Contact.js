import React from "react";
import Footer from "../components/Footer";
import Poster from "../components/Poster";
import TopNav from "../components/TopNav";

import contact_us from "../assets/contact_us.jpg";

const Contact = () => {
  return (
    <div>
      <TopNav />
      <Poster pic={contact_us} />
      <div className="container" style={{ padding: "40px" }}>
        <h3 className="contact-title">Get in Touch</h3>
        <hr className="my-hr" />
        <ul>
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
      <Footer />
    </div>
  );
};

export default Contact;
