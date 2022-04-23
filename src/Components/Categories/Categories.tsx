import React, { useRef, useEffect } from "react";
import styles from "./Categories.module.scss";

import Card from "../Card/Card";

const Categories: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  let num = true;
  const scroll = () => {
    //scroll container to the right
    container.current!.scrollBy({
      top: 0,
      left: 0.5,
      behavior: "smooth",
    });
    if (num === true) {
      setTimeout(scroll, 50);
      //check if scroll is at the end of the container
      if (
        container.current!.scrollLeft + 5 >=
        container.current!.scrollWidth - container.current!.offsetWidth
      ) {
        console.log("end");
        //reset scroll
        container.current!.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    scroll();
  }, []);

  const stop = () => {
    num = false;
  };

  const start = () => {
    num = true;
    scroll();
  };

  return (
    <>
      <div
        ref={container}
        onMouseEnter={stop}
        onMouseLeave={start}
        onPointerEnter={stop}
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
