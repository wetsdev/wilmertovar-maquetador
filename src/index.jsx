import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { Introphrase } from "./components/introprhase";
import { GridScrolling } from "./components/gridscrolling";
import { Carousel } from "./components/carousel";
import { Contact } from "./components/contact";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./styles/App.css";

function Locomotive() {
  const ref = useRef(null);
  const options = {
    smooth: true,
  };

  return (
    <main data-scroll-container ref={ref}>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <Header id="header" />
        <Introphrase id="introprhase" />
        <GridScrolling id="gridscrolling" />
        <Carousel id="carousel" />
        <Contact id="contact" />
      </LocomotiveScrollProvider>
    </main>
  );
}

const wrapper = ReactDOM.createRoot(document.getElementById("wrapper"));

wrapper.render(
  <>
    <Locomotive />
  </>
);
