// about.jsx
import React, { useEffect } from "react";
import "./about.css";
import initSwipe from "./swipeLogic.js";

export default function About() {
  useEffect(() => {
    const cleanup = initSwipe(); // initialize GSAP + ScrollTrigger
    return () => {
      if (typeof cleanup === "function") cleanup(); // cleanup on unmount
    };
  }, []);

  return (
    <div className="swipe-section">
      <div className="description panel">
        <div>
          <h1 className = "text-8xl capitalize">What you can do with us</h1>
          
        </div>
      </div>

      <section className="panel light x-100 bg-red-300">
        <h2 className="panel__number text-3xl">2</h2>
      </section>

      <section className="panel x-100 bg-blue-300">
        <h2 className="panel__number text-3xl">3</h2>
      </section>

      <section className="panel light x-100 bg-pink-300">
        <h2 className="panel__number text-3xl">4</h2>
      </section>
    </div>
  );
}
