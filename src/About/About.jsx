import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
  const cardsData = [
    {
      id: 1,
      title: "Overview",
      description: "Our PWA transforms sustainability education in Indian schools and colleges. It offers AI-personalized, gamified quests with real-world applications, boosting student engagement and environmental awareness. Aligned with NEP 2020 and SDGs, our platform makes eco-learning exciting, memorable, and impactful.",
      image: "/3.jpg"
   
    },
    {
      id: 2,
      title: "Key Features",
      description: "Our platform uses AI to create personalized learning paths based on student location (e.g., Chandigarh's air quality). It features gamified eco-challenges like quizzes, photo-verified tasks (waste segregation), and Web AR (virtual tree planting), rewarding students with eco-points, badges, and leaderboard rankings. Smart tools include peer forums, performance dashboards, offline mode, and a carbon footprint calculator.",
      image: "/2.jpg"
    },
    {
      id: 3,
      title: "Rewards & Recognition",
      description: "Students earn digital badges and certificates as rewards for completing challenges, which they can share within the community or with partner NGOs to showcase their environmental contributions. The platform is built using a modern web-only tech stack, ensuring fast, responsive, and accessible experiences across devices.",
      image: "1.jpg"
    },
    {
      id: 4,
      title: "User Interface ",
      description: "Our platform features a vibrant, eco-themed design with a green and blue palette, an interactive India map dashboard, swipeable challenge cards, and animated progress indicators. Built mobile-first and fully responsive, it is highly accessible with support for both Hindi and English, dark mode, and voice commands. Engaging micro-interactions, like confetti animations for earning rewards, create a gamified experience designed to boost student engagement. This combination of a polished, interactive, and accessible user interface makes our platform a standout solution for competitions like SIH.",
      image: "3.jpg"
    }
  ];

  return (
    <div className="about-container">
      <div className="space-top" />
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card 
            key={card.id}
            card={card}
            index={index}
            totalCards={cardsData.length}
          />
        ))}
      </div>
      <div className="space-bottom" />
    </div>
  );
};

const Card = ({ card, index, totalCards }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });
  
  // Calculate scale based on card position
  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  
  // Calculate brightness for overlay effect
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  // Calculate offset for stacking
  const offsetTop = 15 + index * 15;
  
  return (
    <div 
      ref={cardRef}
      className="card"
      style={{ 
        paddingTop: `${offsetTop}px`,
        position: 'sticky',
        top: '0px'
      }}
    >
      <motion.div 
        className="card-inner"
        style={{ 
          scale: scale,
          filter: `brightness(${brightness})`
        }}
      >
        <div className="card-image-container">
          <img
            className="card-image"
            src={card.image}
            alt={card.title}
          />
        </div>
        <div className="card-content">
          <h1 className="card-title">{card.title}</h1>
          <p className="card-description">{card.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
