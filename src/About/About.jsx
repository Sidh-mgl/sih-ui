import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
  const cardsData = [
    {
      id: 1,
      title: "Creative Solutions",
      description: "Innovative approaches to modern web development challenges. We focus on user-centric design and cutting-edge technologies to deliver exceptional digital experiences.",
      image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
    },
    {
      id: 2,
      title: "Digital Innovation",
      description: "Transforming ideas into reality through advanced technology stacks. Our expertise spans across multiple frameworks and platforms for comprehensive solutions.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
    },
    {
      id: 3,
      title: "User Experience",
      description: "Crafting intuitive interfaces that prioritize accessibility and engagement. Every interaction is designed to provide seamless and meaningful user journeys.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
    },
    {
      id: 4,
      title: "Future Vision",
      description: "Building tomorrow's digital landscape today. We embrace emerging technologies and methodologies to stay ahead of the curve in rapid technological evolution.",
      image: "https://images.unsplash.com/photo-1518709268805-72e93fbc5057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
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
