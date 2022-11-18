import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WelcomeCard from "./WelcomeCard";
export default function WelcomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  let test = false;
  console.log("isinview", isInView);
  
  const cardArray = [
    {
      id:1,
      getIcon:"file-lines",
      title:'Good Question...',
      text:'This is my take on a portfolio website.  Something that shows off what I am capable of from a developer and personal aspect.'
    },
    {
      id:2,
      getIcon:"square-code",
      title:'Why not a resume?',
      text:'A resume can only go so far, I want to have this as proof that I can create something singlehandedly.'
    },
    {
      id:3,
      getIcon:"code-branch",
      title:'Who is this for?',
      text:'Potential employers, friends, anyone who is willing to give me feedback and critique my code.'
    },
    
  ]
  return (
    <section
      className="h-screen w-full flex flex-col items-center bg-lightShade "
      ref={ref}
    >
      <motion.div
        className=" mt-24 h-1/5 w-full flex justify-center"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="text-7xl text-darkShade font-bold font-baskerville ">
         What is this website?
        </span>
      </motion.div>
      <div 
      className="w-full h-1/2 flex flex-row items-center justify-center"
      >
       {
        cardArray.map(card => {
          return <WelcomeCard icon={card.getIcon} title={card.title} text={card.text} key={card.id}/>
        })
       }
       
      </div>
    
    </section>
  );
}
