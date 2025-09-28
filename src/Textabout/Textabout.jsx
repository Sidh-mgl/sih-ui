import React, { useState, useEffect, useRef } from "react";
import "./Textabout.css";

export default function Textabout() {
  const secondBlockRef = useRef(null);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    // Use IntersectionObserver to detect when the 2nd text block enters view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowSecondImage(entry.isIntersecting);
        });
      },
      { threshold: 0.4 } // adjust: how much of the block must be visible
    );

    if (secondBlockRef.current) {
      observer.observe(secondBlockRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="textabout mt-50 mb-50">
      <div className="text-section">
        <div className="mt-30">
          <h1 className=" capitalize">Turn corporate sustainability into a fun, measurable journey</h1>
          <p>
            Powered by <strong>artificial intelligence</strong>, AWorld’s
            platform enhances <strong>stakeholder engagement</strong> through a{" "}
            <strong>personalized gamification system</strong> and
            community-driven dynamics that build deep, values-based connections
            between people.
          </p>
        </div>

        <div className="mt-90" ref={secondBlockRef}>
          <h1 className="mt-50 capitalize">
            A tailored journey with Impact Engagement Intelligence
          </h1>
          <p>
            Each user experiences a <strong>personalized path</strong>: daily,
            weekly, and monthly missions guide them toward specific goals, while
            leaderboards and challenges turn the journey into a{" "}
            <strong>“competition for good.”</strong> Thanks to{" "}
            <strong>AI-driven adaptability</strong>, the experience evolves with
            your needs — rewarding both the individual and the community.
          </p>

    
        </div>
      </div>

      <div className="image-section">
        <div className="image-wrapper">
          <img
            src="/text1.webp"
            alt="illustration1"
            className={`image first ${showSecondImage ? "hide" : "show"}`}
          />
          <img
            src="/text2.webp"
            alt="illustration2"
            className={`image second ${showSecondImage ? "show" : "hide"}`}
          />
        </div>
      </div>
    </section>
  );
}
