import React from "react";
import Footer from "../components/Footer";
import Poster from "../components/Poster";
import TopNav from "../components/TopNav";

import about from "../assets/about.jpg";

const About = () => {
  return (
    <div style={{background:'black'}}>
      <TopNav />
      <Poster pic={about} />
      <div className="container">
        <h1 className="about-title">Dr. Vivek Bindra</h1>
        <ul className="about-list">
          <li>
            Dr Vivek Bindra is a Revolutionary Entrepreneur, an Internationally
            Acclaimed Motivational Speaker and a Business Coach.
          </li>
          <li>
            Known for Creating Most Sought after Content on Leadership
            Development, which is Helping People across the Globe in achieving
            their Business Goals.
          </li>
          <li>
            Author of 10 High Power Motivational Books, which are available on
            Flipkart and Amazon.
          </li>
        </ul>
        <h3 style={{ color: "#ffc500" }}>Youtube</h3>
        <ul className="about-list">
          <li>
            Owner of World’s Most Subscribed Entrepreneurship YouTube Channel.
          </li>
          <li>
            With 10.1 Million Active Subscribers on YouTube, he is one of the
            World’s Greatest Influencers.
          </li>
          <li>Known for Creating a Free Learning University on YouTube.</li>
        </ul>
        <h3 style={{ color: "#ffc500" }}>Business Coach</h3>
        <ul className="about-list">
          <li>An Acclaimed Executive Coach for over Top 100 CEO’s in India.</li>
          <li>Trusted Advisor for Over 500 Corporate Houses.</li>
          <li>
            Inspired Millions of People across the Globe by Training in more
            than 25 Countries.
          </li>
        </ul>
        <h3 style={{ color: "#ffc500" }}>Awards & Honours</h3>
        <ul className="about-list">
          <li>
            Bestowed with the Honorary Title of ‘Think Tank of Corporate Asia’
            by World Leadership Federation, Dubai.
          </li>
          <li>
            Awarded the Best Leadership Trainer in Asia title by Marshall
            Goldsmith at the World HRD Congress.
          </li>
          <li>
            Awarded with India’s Greatest Brands and Leaders – Pride of the
            Nation Award in a ceremonial function hosted by
            PricewaterhouseCoopers (PwC)
          </li>
          <li>
            Awarded the Best CEO Coach in India by Times of India – Speaking
            Tree.
          </li>
          <li>
            Awarded the Best Corporate Trainer in India by Maruti Suzuki for Two
            Consecutive Years.
          </li>
          <li>
            Holds a place in the Esteemed Golden Book of Records for Training
            the Largest Gathering of HR Professionals under one Roof on - Can HR
            Become a CEO?
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default About;
