import React from "react";

import Hero from "../components/Hero/Hero";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import WorkProcess from "../components/WorkProcess/WorkProcess";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid";
import Testimonials from "../components/Testimonials/Testimonials";
import PricingTable from "../components/PricingTable/PricingTable";
import Stats from "../components/Stats/Stats";
import CTA from "../components/CTA/CTA";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div id="home">

      <Hero />

  
      <ServicesSection />


      <WorkProcess />

     
      <PortfolioGrid />

      <Testimonials />

    
      <PricingTable />

  
      <Stats />

  
      <CTA />

      <ContactForm />

    
      <Footer />
    </div>
  );
};

export default Home;
