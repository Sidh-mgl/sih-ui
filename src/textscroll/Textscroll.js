const initSlider = () => {
  // Check if elements exist before proceeding
  const slides = document.querySelectorAll(".slide");
  const navPrev = document.querySelector(".js-prev");
  const navNext = document.querySelector(".js-next");
  const slidesContainer = document.querySelector(".slides");

  if (!slides.length || !navPrev || !navNext || !slidesContainer) {
    console.warn("Slider elements not found");
    return () => {}; // Return empty cleanup function
  }

  const settings = {
    delta: 0,
    currentSlideIndex: 0,
    scrollThreshold: 40,
    slides,
    numSlides: slides.length,
    navPrev,
    navNext,
    slidesContainer,
  };

  const showSlide = () => {
    settings.delta = 0;

    if (settings.slidesContainer.classList.contains("is-sliding")) return;

    settings.slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === settings.currentSlideIndex);
      slide.classList.toggle("is-prev", i === settings.currentSlideIndex - 1);
      slide.classList.toggle("is-next", i === settings.currentSlideIndex + 1);
    });

    // Add sliding class to slides container, not body
    settings.slidesContainer.classList.add("is-sliding");
    setTimeout(() => {
      settings.slidesContainer.classList.remove("is-sliding");
    }, 1000);
  };

  const prevSlide = () => {
    if (settings.currentSlideIndex <= 0) {
      settings.currentSlideIndex = settings.numSlides - 1;
    } else {
      settings.currentSlideIndex--;
    }
    showSlide();
  };

  const nextSlide = () => {
    settings.currentSlideIndex++;
    if (settings.currentSlideIndex >= settings.numSlides) {
      settings.currentSlideIndex = 0;
    }
    showSlide();
  };

  const handleScroll = (e) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      settings.delta--;
      if (Math.abs(settings.delta) >= settings.scrollThreshold) prevSlide();
    } else {
      settings.delta++;
      if (settings.delta >= settings.scrollThreshold) nextSlide();
    }
    return false;
  };

  const handleKeyUp = (e) => {
    if (e.which === 37 || e.which === 38) prevSlide(); // Left or Up arrow
    if (e.which === 39 || e.which === 40) nextSlide(); // Right or Down arrow
  };

  const bindEvents = () => {
    // Bind scroll events to each slide
    settings.slides.forEach((slide) => {
      slide.addEventListener("wheel", handleScroll, { passive: false });
    });

    // Bind navigation button events
    settings.navPrev.addEventListener("click", prevSlide);
    settings.navNext.addEventListener("click", nextSlide);

    // Bind keyboard events
    document.addEventListener("keyup", handleKeyUp);
  };

  // Initialize events
  bindEvents();

  // Return proper cleanup function
  return () => {
    // Remove all event listeners
    settings.slides.forEach((slide) => {
      slide.removeEventListener("wheel", handleScroll);
    });
    
    settings.navPrev.removeEventListener("click", prevSlide);
    settings.navNext.removeEventListener("click", nextSlide);
    document.removeEventListener("keyup", handleKeyUp);
    
    // Clean up any remaining classes
    settings.slidesContainer.classList.remove("is-sliding");
  };
};

export default initSlider;
