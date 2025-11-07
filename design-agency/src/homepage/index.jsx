import React from "react";
import Header from "../homepage/components/header/header";
import Footer from "../homepage/components/footer/footer";
import Herosection from "../homepage/components/herosection/herosection";
import Provide from "../homepage/components/provide/provide";
import Portfolio from "../homepage/components/portfolio/portfolio";
import Testimonials from "../homepage/components/testimonials/testimonials";
import Subscribe from "../homepage/components/subscribe/subscribe";


const Home = () => {
  return (
    <div className="container-fluid ">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <div className="container-fluid" >
        <Herosection />
      </div>

      {/* Provide Section */}
      <div className="container">
        <Provide />
      </div>

      {/* Portfolio Section */}
      <div className="container" >
        <Portfolio />
      </div>

      {/* Testimonials Section */}
      <div className="container">
        <Testimonials />
      </div>

      {/* Subscribe Section */}
      <div className="container">
        <Subscribe />
      </div>
      
      {/* Footer Section */}
      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
