import React, { useState } from "react";
import { motion } from "framer-motion";

const NeubrutalButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const shapeVariants = {
    hovered: {
      x: 6,
      y: 6,
      transition: { duration: 0.1 }
    },
    unhovered: {
      x: 0,
      y: 0,
      transition: { duration: 0.1 }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="neubrutal-shape"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="foreground-layer"
        variants={shapeVariants}
        initial="unhovered"
        animate={isHovered ? "hovered" : "unhovered"}
      ></motion.div>
      <div className="background-layer"></div>
    </div>
  );
};

  export default NeubrutalButton;