import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
 
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    let test = false;
    console.log("isinview", isInView);
    const variants = {
      inView: {
        transform: "none",
        opacity: 1,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      },
      outOfView: {
        transform: "translateX(-200px)",
        opacity: 1,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      },
    };
    return (
      <section
        className="h-screen w-full  flex flex-col items-start"
        ref={ref}
      >
        <motion.div
          className="ml-56 mt-24"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <span className="text-7xl font-bold font-inter ">
            Generic Title Header
          </span>
        </motion.div>
        <motion.div
          className="w-1/2 ml-48"
          style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
        >
          <span className="font-sans text-2xl font-semibold">
            This is my take on a portfolio website. My goal isn't to completely
            blow your mind with state of the art tech, but to prove that I am more
            than capable of maintaining or creating a website for your personal
            and business needs. I am not a copy writer so I'm not here to write a
            perfect essay detailing my life. If you are interested in finding out
            more then keep scrolling and feel free to contact me at the bottom.
          </span>
        </motion.div>
      </section>
    )
}
