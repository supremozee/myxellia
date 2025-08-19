"use client";
import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
interface MetricProps {
  hot: string;
  description: string;
  image: string[];
}
const metric: MetricProps[] = [
  {
    hot: "MOST CLICKED",
    description: "Urban Prime Plaza Premiere",
    image: ["/listing.svg", "/procurement-2.jpg"],
  },
  {
    hot: "MOST WATCHLISTED",
    description: "Urban Prime Plaza Premiere",
    image: [
      "/watchlisted.svg",
      "/procurement-3.png",
      "/listing.svg"
    ],
  },
  {
    hot: "HOTTEST LISTING",
    description: "Urban Prime Plaza Premiere",
    image: [
      "/procurement-3.webp",
      "/listing.svg",
      "/watchlisted.svg",


    ],
  },
];
const Metric = () => {
  return (
    <section className="flex gap-[15px]">
      {metric.map((item) => {
        return (
          <Carousel
            key={item.hot}
            showDots={item.image.length > 0}
            image={item.image}
            description={item.description}
            hot={item.hot}
          />
        );
      })}
    </section>
  );
};

export default Metric;
