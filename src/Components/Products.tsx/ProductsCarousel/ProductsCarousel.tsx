import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Container, Arrow} from "./styles"

const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 500 : -500,
        opacity: 0,
      };
    },
  };
  
  const images = [
    "https://images.unsplash.com/photo-1648105393411-016dff24c40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1647996091785-c1ec68da320c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    "https://images.unsplash.com/photo-1648073281094-b3f23f04dac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
  ];
  
  const ProductsCarousel: React.FC = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);
  
    const containerRef = useRef<HTMLDivElement>(null);
  
    const paginate = (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    };
  
    //paginate 1 to the right every 3 seconds
  
    useEffect(() => {
      const interval = setInterval(() => {
        //if containerRef is not visible, don't paginate
        if (
          containerRef.current!.getBoundingClientRect().height > window.scrollY
        ) {
          paginate(1);
        } else {
          return;
        }
      }, 3000);
      return () => clearInterval(interval);
    }, [page]);
  
    return (
      <Container ref={containerRef}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2, ease: "easeInOut" },
            }}
          />
        </AnimatePresence>
  
        <Arrow next onClick={() => paginate(1)}>
          <ArrowForwardIosIcon />
        </Arrow>
  
        <Arrow prev onClick={() => paginate(-1)}>
          <ArrowForwardIosIcon />
        </Arrow>
      </Container>
    );
  };
  

export default ProductsCarousel;