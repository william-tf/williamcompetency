import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import WelcomeSection from "../partials/landingPage/WelcomeSection";
import BioSection from "../partials/landingPage/BioSection";
import TechSection from "../partials/landingPage/TechSection";
import ContactSection from "../partials/landingPage/ContactSection";
import SideBar from "../partials/utilComponents/SideBar";
import VerticalCard from "../partials/landingPage/WelcomeCard";
export default function LandingPage() {
  return (
    <div className="h-full w-full flex-nowrap flex flex-col ">
       <SideBar/>
      <WelcomeSection/>
      <BioSection/>
      <TechSection/>
      <ContactSection/>
    </div>
  );
}
