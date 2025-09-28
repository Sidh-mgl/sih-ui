import React from "react";
import "./Quiz.css";

const quizData = [
  {
    title: "Leaderboards & leagues",
    img: "/four.webp", 
    desc: "Compete with others and climb the ranks!",
    bgColor: "#e5f1fc",
    overlayColor: "#1e3a8a" // Darkest version of blue theme
  },
  {
    title: "Points",
    img: "/six.webp",
    desc: "Earn points by completing sustainable actions.", 
    bgColor: "#4A90E2",
    textColor: "white",
    overlayColor: "#1e40af" // Darkest version of blue
  },
  {
    title: "Streaks",
    img: "/five.webp",
    desc: "Keep your streak alive and stay motivated!",
    bgColor: "#2D5A47",
    textColor: "white",
    overlayColor: "#064e3b" // Darkest version of green
  },
  {
    title: "Missions", 
    img: "/three.webp",
    desc: "Complete exciting missions every week.",
    bgColor: "#F3E8FF",
    overlayColor: "#581c87" // Darkest version of purple
  },
  {
    title: "Quizzes",
    img: "/one.webp", 
    desc: "Test your knowledge with fun quizzes.",
    bgColor: "#E8F4FF",
    overlayColor: "#1e3a8a" // Darkest version of blue
  },
  {
    title: "Teams",
    img: "/two.webp",
    desc: "Collaborate with others in teams.",
    bgColor: "#fff3ea",
    overlayColor: "#92400e" // Darkest version of orange/amber
  }
];

const Quiz = () => {
  return (
    <div>
        <h1 className="text-center text-8xl capitalize mt-30 mb-10">what are we offering </h1>
        <div className="quiz-container mt-10">
      {quizData.map((item, index) => (
        <div 
          className="quiz-card" 
          key={index}
          style={{
            backgroundColor: item.bgColor,
            color: item.textColor || '#333'
          }}
        >
          <div 
            className="quiz-card-overlay"
            style={{ backgroundColor: item.overlayColor }}
          >
            <p className="overlay-text">{item.desc}</p>
          </div>
          <div className="quiz-header">
            <h3 className="quiz-title text-center">{item.title}</h3>
          </div>
          <div className="quiz-content">
            <div className="quiz-image-container">
              <img src={item.img} alt={item.title} className="quiz-image" />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Quiz;
