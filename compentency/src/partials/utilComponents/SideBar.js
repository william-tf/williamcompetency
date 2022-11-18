import React, { useState } from "react";
import { motion } from "framer-motion";
export default function SideBar({}) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="top-0 z-50 flex flex-nowrap flex-row bg-lightShade">
      <motion.div className="flex ">
      <i class="ml-10 fa-solid fa-arrow-right-from-line text-3xl text-darkShade"></i>
      </motion.div>
    </nav>
  );
}
