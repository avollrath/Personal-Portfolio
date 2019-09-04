(function() {
  var hamburger = {
    navToggle: document.querySelector(".nav-toggle"),
    nav: document.querySelector("nav"),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle("expanded");
      this.nav.classList.toggle("expanded");
    }
  };

  hamburger.navToggle.addEventListener("click", function(e) {
    hamburger.doToggle(e);
  });
  hamburger.nav.addEventListener("click", function(e) {
    hamburger.doToggle(e);
  });
})();

TweenMax.from(".home__text", 1, {
  y: 200,
  opacity: 0,
  ease: Power4.easeOut,
  delay: 2
});

TweenMax.from(".nav-toggle", 2, {
    x: -1400,
    ease: Power4.easeOut,
    delay: 3
  });

  TweenMax.from(".home__arrow-container", 0.2, {
    opacity: 0,
    ease: Power4.easeOut,
    delay: 6
  });




 


let coreImgTween = TweenMax.staggerFrom(
  ".coreskills__img",
  1,
  { scale: 0.01, rotation: 200, ease: Power3.easeInOut },
  0.2
);
let coreHeadlineTween = TweenMax.staggerFrom(
  ".coreskills__headline",
  1,
  { scale: 0.01, ease: Power3.easeInOut, delay: 0.2 },
  0.2
);

let coreParagraphTween = TweenMax.staggerFrom(
  ".coreskills__paragraph",
  1,
  { opacity:0, ease: Power4.easeInOut, delay: 0.2},
  0.3
);

let companiesTween = TweenMax.staggerFrom(
  ".companies__logo",
  0.4,
  { scale: 0, ease: Power1.easeInOut, delay: 0.2 },
  0.08
);

let aboutTween = TweenMax.from(".about-me__background, .about-me__text", 1, {
  x: -1000,
  ease: Power4.easeOut,
  delay: 0.1
});
let skillsTween = TweenMax.from(".about-me__skills", 0.8, {
  x: 1000,
  ease: Power4.easeOut,
  delay: 0.6
});

let skillsTL = new TimelineMax();
  
skillsTL.add(skillsTween).from(".about-me__skills", 0.5, {scale:0.6, ease: Power2.easeOut, delay: -0.3})


let projectsTween = TweenMax.staggerFrom(
    ".projects__project",
    0.6,
    { scale: 0.5, ease: Power2.easeInOut, delay: 0.1 }
  );

  let cableLeftTween = TweenMax.from("#cable-left", 0.3, {
    x: -1000,
    ease: Power3.easeOut,
    delay: 0.4
  });

  let cableRightTween = TweenMax.from("#cable-right", 0.3, {
    x: 1000,
    ease: Power3.easeOut,
    delay: 0
  });


  let contactTween = TweenMax.from(".contact__form", 0.4, {
    opacity: 0, scale: 0.1,
    ease: Power4.easeOut,
    delay: 0.1
  });

  let contactTL = new TimelineMax();
  
contactTL
.add(cableLeftTween)
.add(cableRightTween)
.add(contactTween)
.to("#cable-left", 0.2, {y:0,x:-100, ease: Power2.easeOut, delay: 0.2})
.to("#cable-right", 0.2, {y:0,x:100, ease: Power2.easeOut, delay: -0.4})
.from(".contact__form", 0.4, {y:300, ease: Power4.easeOut, delay: 0.2})
.to("#cable-left, #cable-right", 0.2, {y:0,x:0, ease: Power4.easeOut, delay: 0.3})
.to(".contact__form", 1, {css: { 'filter': 'grayscale(0%)','-webkit-filter': 'grayscale(0%)' } , ease: Power4.easeOut, delay: -0.2})









let controller = new ScrollMagic.Controller();

let coreHeadlineScene = new ScrollMagic.Scene({
  triggerElement: ".core-skills"
}).setTween(coreHeadlineTween);

let coreImgScene = new ScrollMagic.Scene({
  triggerElement: ".core-skills"
}).setTween(coreImgTween);

let coreParagraphScene = new ScrollMagic.Scene({
  triggerElement: ".core-skills"
}).setTween(coreParagraphTween);

let companiesScene = new ScrollMagic.Scene({
  triggerElement: ".companies"
}).setTween(companiesTween);

let aboutScene = new ScrollMagic.Scene({
  triggerElement: ".about-me"
}).setTween(aboutTween);

let skillsScene = new ScrollMagic.Scene({
  triggerElement: ".about-me"
}).setTween(skillsTL);

let projectsScene = new ScrollMagic.Scene({
    triggerElement: ".projects"
  }).setTween(projectsTween);


  let contactScene = new ScrollMagic.Scene({
    triggerElement: ".contact"
  }).setTween(contactTL);


controller.addScene([
  aboutScene,
  skillsScene,
  companiesScene,
  coreImgScene,
  coreHeadlineScene,
  coreParagraphScene,
  projectsScene,
  contactScene
]);