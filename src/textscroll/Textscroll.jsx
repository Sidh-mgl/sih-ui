import React, { useState, useEffect, useRef } from "react";
import "./Textscroll.css";

const Textscroll = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [delta, setDelta] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  // Trigger initial animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);
  
  const slidesRef = useRef([]);
  const slidesContainerRef = useRef(null);
  const scrollThreshold = 40;
  
  const slides = [
    {
      id: 1,
      image: "https://source.unsplash.com/nfTA8pdaq9A/2000x1100",
      title: ["Click, Key", "Or Scroll Fool"]
    },
    {
      id: 2,
      image: "https://source.unsplash.com/okmtVMuBzkQ/2000x1100",
      title: ["Slide Two", "Dood Mood"]
    },
    {
      id: 3,
      image: "https://source.unsplash.com/WuQME0I_oZA/2000x1100",
      title: ["This Right", "Here Makes Three"]
    },
    {
      id: 4,
      image: "https://source.unsplash.com/NsWcRlBT_74/2000x1100",
      title: ["How Now", "Part Four More"]
    }
  ];

  // Add body class on mount, remove on unmount
  useEffect(() => {
    document.body.classList.add('slide-view');
    return () => {
      document.body.classList.remove('slide-view');
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.which === 37 || e.which === 38) { // Left or Up arrow
        prevSlide();
      }
      if (e.which === 39 || e.which === 40) { // Right or Down arrow
        nextSlide();
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [currentSlideIndex]); // Include dependency to get latest state

  // Show slide with animation
  const showSlide = (newIndex) => {
    if (isSliding) return;
    
    setCurrentSlideIndex(newIndex);
    setIsSliding(true);
    setDelta(0);
    
    // Add sliding class to container
    if (slidesContainerRef.current) {
      slidesContainerRef.current.classList.add("is-sliding");
    }
    
    setTimeout(() => {
      setIsSliding(false);
      if (slidesContainerRef.current) {
        slidesContainerRef.current.classList.remove("is-sliding");
      }
    }, 1000);
  };

  // Navigate to previous slide
  const prevSlide = () => {
    const newIndex = currentSlideIndex <= 0 ? slides.length - 1 : currentSlideIndex - 1;
    showSlide(newIndex);
  };

  // Navigate to next slide
  const nextSlide = () => {
    const newIndex = currentSlideIndex >= slides.length - 1 ? 0 : currentSlideIndex + 1;
    showSlide(newIndex);
  };

  // Handle mouse wheel scroll
  const handleScroll = (e) => {
    e.preventDefault();
    
    if (e.deltaY < 0) {
      setDelta(prev => {
        const newDelta = prev - 1;
        if (Math.abs(newDelta) >= scrollThreshold) {
          prevSlide();
          return 0;
        }
        return newDelta;
      });
    } else {
      setDelta(prev => {
        const newDelta = prev + 1;
        if (newDelta >= scrollThreshold) {
          nextSlide();
          return 0;
        }
        return newDelta;
      });
    }
    return false;
  };

  // Get slide classes
  const getSlideClasses = (index) => {
    let classes = "slide";
    if (index === currentSlideIndex && isMounted) {
      console.log('is-active applied to slide', index);
      classes += " is-active";
    }
    if (index === currentSlideIndex - 1) classes += " is-prev";
    if (index === currentSlideIndex + 1) classes += " is-next";
    return classes;
  };

  return (
    <section className="slides" ref={slidesContainerRef}>
      <section className="slides-nav">
        <nav className="slides-nav__nav">
          <button 
            className="slides-nav__prev js-prev"
            onClick={prevSlide}
            disabled={isSliding}
          >
            Prev
          </button>
          <button 
            className="slides-nav__next js-next"
            onClick={nextSlide}
            disabled={isSliding}
          >
            Next
          </button>
        </nav>
      </section>

      {slides.map((slide, index) => (
        <section
          key={slide.id}
          className={getSlideClasses(index)}
          onWheel={handleScroll}
          ref={el => slidesRef.current[index] = el}
        >
          <div className="slide__content">
            <figure className="slide__figure">
              <div
                className="slide__img"
                style={{
                  backgroundImage: `url(${slide.image})`
                }}
              />
            </figure>
            <header className="slide__header">
              <h2 className="slide__title">
                {slide.title.map((line, lineIndex) => (
                  <span key={lineIndex} className="title-line">
                    <span>{line}</span>
                  </span>
                ))}
              </h2>
            </header>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Textscroll;
