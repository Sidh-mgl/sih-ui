// swipeLogic.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function swipeLogic() {
  gsap.registerPlugin(ScrollTrigger);

  let currentIndex = -1;
  let animating;
  let swipePanels = gsap.utils.toArray(".swipe-section .panel");

  // set second panel to initial 100%
  gsap.set(".x-100", { xPercent: 100 });

  // set z-index levels for the swipe panels
  gsap.set(swipePanels, {
    zIndex: (i) => i,
  });

  // create an observer and disable it to start
  let intentObserver = ScrollTrigger.observe({
    type: "wheel,touch",
    onUp: () => !animating && gotoPanel(currentIndex + 1, true),
    onDown: () => !animating && gotoPanel(currentIndex - 1, false),
    wheelSpeed: -1,
    tolerance: 10,
    preventDefault: true,
    onPress: (self) => {
      if (ScrollTrigger.isTouch) self.event.preventDefault();
    },
  });
  intentObserver.disable();

  function gotoPanel(index, isScrollingDown) {
    animating = true;

 if (
  (index === swipePanels.length && isScrollingDown) ||
  (index === -1 && !isScrollingDown)
) {
  gsap.to({}, {
    duration: 0.01,
    onComplete: () => {
      animating = false;
      // ❌ don’t disable observer here
    },
  });
  return;
}


    let target = isScrollingDown ? swipePanels[index] : swipePanels[currentIndex];

    gsap.to(target, {
      xPercent: isScrollingDown ? 0 : 100,
      duration: 0.75,
      onComplete: () => {
        animating = false;
      },
    });
    currentIndex = index;
    console.log(index);
  }

  ScrollTrigger.create({
    trigger: ".swipe-section",
    pin: true,
    start: "top top",
    end: "+=1",
    onEnter: () => {
      intentObserver.enable();
      gotoPanel(currentIndex + 1, true);
    },
    onEnterBack: () => {
      intentObserver.enable();
      gotoPanel(currentIndex - 1, false);
    },
  });
}
