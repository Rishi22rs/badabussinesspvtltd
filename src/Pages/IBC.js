import React from "react";
import Footer from "../components/Footer";
import Poster from "../components/Poster";
import TopNav from "../components/TopNav";

import IBCPoster from "../assets/ibcposter.jpg";

import c1p1 from "../assets/c1p1.png";
import c1p2 from "../assets/c1p2.png";
import c1p3 from "../assets/c1p3.png";
import c1p4 from "../assets/c1p4.png";
import c1p5 from "../assets/c1p5.png";
import c1p6 from "../assets/c1p6.png";
import c1p7 from "../assets/c1p7.png";
import TableHolder from "../components/TableHolder";

const data = [
  {
    pic: c1p1,
    desc: "Opportunity To Earn 1 To 10 Lakhs Per Month",
  },
  {
    pic: c1p2,
    desc: "Opportunity To Be Recognised In Dr Vivek Bindra’s World Record Creating Mass Digital Webinars And Youtube Videos",
  },
  {
    pic: c1p3,
    desc: "Market Relevant & Most Affordable Entrepreneurship Product Basket (EAE, PSC & LTM)",
  },
  {
    pic: c1p4,
    desc: "High Revenue Earning Product For Sales - Case Studies And White-Labelled Learning Management System For Educational Institutions And Businesses",
  },
  {
    pic: c1p5,
    desc: "Periodic Webinar By Dr Vivek Bindra.",
  },
  {
    pic: c1p6,
    desc: "Personalised Micro Website Creating Digital Identity To Facilitate Sales",
  },
  {
    pic: c1p7,
    desc: "Digital POS (Point Of Sale) For Taking Payment, Tracking Sales Leads, Generating Payment Links For Customers & Viewing All Account Related Details",
  },
  {
    pic: c1p4,
    desc: "Learning Management System For All Product Information, Marketing Collaterals And Growth Through Self-Learning",
  },
  {
    pic: c1p5,
    desc: "Complaint Management System (CMS) To Raise Requests & Complaints Or To Give Suggestions",
  },
  {
    pic: c1p6,
    desc: "Dedicated IBC Managers To Train On Product & Sales Techniques - How To Generate (Through Digital Marketing Or Other Techniques), Nurture And Close Leads",
  },
];

const IBC = () => {
  return (
    <div style={{background:'black'}}>
      <TopNav />
      <Poster pic={IBCPoster} />
      <div className="container" >
        <TableHolder data={data} title="IBC BENEFITS" />
      </div>
      <Footer />
    </div>
  );
};

export default IBC;
