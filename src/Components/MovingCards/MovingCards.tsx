import React, { useRef, useEffect, useState } from "react";
import { Heading, Container } from "./style";

import Card from "../Card/Card";

import { MovingCardData } from "../../types";

const Categories: React.FC<{ heading: String }> = ({ heading }) => {
  const [scrolling, setScrolling] = useState(true);
  const [cardData, setCardData] = useState<MovingCardData[]>([]);

  const container = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    //scroll container to the right
    container.current!.scrollBy({
      top: 0,
      left: 1,
      behavior: "smooth",
    });
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

  //function to stop scrolling
  const stopScrolling = () => {
    setScrolling(false);
  };

  //function to start scrolling
  const startScrolling = () => {
    setScrolling(true);
  };

  useEffect(() => {
    //should call only for specific products related to sales, something for future
    if (cardData.length === 0) {
      //load data from db
      fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          credentials: "include",
        },
        body: JSON.stringify({
          page: 3,
          limit: 20,
        }),
      })
        .then((res) => res.json())
        .then((data: MovingCardData[]) => {
          setCardData(data);
        });
    }
    // keep scrolling every 50ms if scrolling is true and reset scroll if at the end of the container
    if (scrolling === true) {
      const interval = setInterval(handleScroll, 50);
      return () => clearInterval(interval);
    }
  }, [scrolling]);

  return (
    <>
      <Heading>{heading}</Heading>

      <Container
        ref={container}
        onClick={stopScrolling}
        onMouseEnter={stopScrolling}
        onMouseLeave={startScrolling}
        onPointerEnter={stopScrolling}
      >
        {cardData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
