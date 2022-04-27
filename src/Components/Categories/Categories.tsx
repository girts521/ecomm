import React, { useRef, useEffect, useState } from "react";
import styles from "./Categories.module.scss";

import Card from "../Card/Card";

const Categories: React.FC = () => {

  const [scrolling, setScrolling] = useState(true);
  const container = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrolling === true) {
      //scroll container to the right
      container.current!.scrollBy({
        top: 0,
        left: 0.5,
        behavior: "smooth",
      });
    }
    //check if scroll is at the end of the container
    if (
      container.current!.scrollLeft + 5 >=
      container.current!.scrollWidth - container.current!.offsetWidth
    ) {
      //reset scroll
      container.current!.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  };

  // keep scrolling every 50ms if scrolling is true and reset scroll if at the end of the container
  useEffect(() => {
    if (scrolling === true) {
      const interval = setInterval(handleScroll, 50);
      return () => clearInterval(interval);
    }
  }, [scrolling]);

  const stopScrolling = () => {
    setScrolling(false);
  };

  return (
    <>
      <div
        ref={container}
        onClick={stopScrolling}
        onMouseEnter={stopScrolling}
        onPointerEnter={stopScrolling}
        className={styles.container}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Categories;
