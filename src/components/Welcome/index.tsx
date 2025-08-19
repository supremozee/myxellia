"use client"
import React from "react";
import Container from "../Container";
import { ReactTyped } from "react-typed";

const Welcome = () => {
  return (
    <Container>
      <h3 className="font-[600] text-[20px] font-[#191919]">
        <ReactTyped
        showCursor={false}
        strings={["Welcome, Ahmed"]}
        typeSpeed={40}
        />
      </h3>
    </Container>
  );
};

export default Welcome;
