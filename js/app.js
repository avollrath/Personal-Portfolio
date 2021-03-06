const myAge = () => {
  let myBirthday = new Date("11/28/1985");
  let presentDate = new Date();
  return (
    (presentDate.getTime() - myBirthday.getTime()) /
    (1000 * 3600 * 24) /
    365
  ).toFixed(2);
};

document.querySelector(".age").innerHTML = myAge();
document.querySelector(".footer-year").innerHTML = new Date().getFullYear();
document.querySelector("#graphic-design").innerHTML = new Date().getFullYear() - 2013;
document.querySelector("#photography").innerHTML = new Date().getFullYear() - 2008;
document.querySelector("#development").innerHTML = new Date().getFullYear() - 2019;

let designAnimation = bodymovin.loadAnimation({
  container: document.getElementById('design-ani'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '../assets/json/graphicdesign.json'
})

let developAnimation = bodymovin.loadAnimation({
  container: document.getElementById('develop-ani'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '../assets/json/development.json'
})


let photoAnimation = bodymovin.loadAnimation({
  container: document.getElementById('photo-ani'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '../assets/json/photography.json'
})



const hiTL = new TimelineMax({repeat:0});
hiTL.from(".home__hi-box", 1.3, {scale: 0, ease: Elastic.easeOut.config(0.2, 0.1), delay: 0.4 })
.to(".home__hi-box h1", 0.6, {rotation: 720, autoAlpha: 0, ease: Sine.easeIn })
.fromTo(".home__hi-box h2", 2, {scale: 0, rotation: -1080, autoAlpha: 0.5,ease: Sine.easeIn},{scale: 1, rotation: 0, autoAlpha: 1,ease: Elastic.easeOut.config(0.2, 0.25), delay: -0.4})




const homeTL = new TimelineMax({repeat:-1, delay:3});
homeTL.to(".home__headline-second", 2, {text:"a designer who loves to code.", ease:Linear.easeNone, yoyo:true,repeat:1, repeatDelay:2})
.to(".home__headline-second", 2, {text:"a coder who loves to design.", ease:Linear.easeNone, yoyo:true,repeat:1, repeatDelay:4})



const toggle = document.querySelector(".toggle input");
const menu = document.querySelector(".menu");

document.querySelector(".toggle").addEventListener("click", () => {
  toggle.checked = !toggle.checked;
});


TweenMax.set(menu, {
  x: menu.offsetWidth,
  autoAlpha: 0
});

let menuState = 0;

const menuFunction = () => {

document.querySelector(".menu").style.right = "0px";


 if (menuState == 0) {

    TweenMax.set(menu, {
      autoAlpha: 0,
      x: menu.offsetWidth
    });

    TweenMax.set(menu, {
      autoAlpha: 1
    });
    
    TweenMax.to(menu, 0.1, {
      x: 0,
      ease: Power4.easeOut
    });

    TweenMax.set(".toggle", {
      backgroundColor: "transparent"
    });

    TweenMax.to(".toggle", 0.5, {
      x: -300,
      ease: Power1.easeInOut
    });

    TweenMax.from(".toggle", 0.6, {
      rotation: -360,
      delay: 0.1
    });

    menuState = 1;

    TweenMax.set(".menu-item", {
      scale: 1
    });

    TweenMax.staggerFrom(
      ".menu-item",
      0.6,
      {
        scale: 0,
        delay: 0.4,
        ease: Power4.easeOut
      },
      0.2
    );
  } else {
    menuState = 0;

    TweenMax.to(menu, 0.2, {
      x: menu.offsetWidth,
      ease: Power1.easeIn,
      delay: .3
    });

    TweenMax.to(menu, 0.2, {
      autoAlpha: 0,
      ease: Power1.easeIn,
      delay: .6
    });
   

    TweenMax.staggerTo(
      ".menu-item",
      0.1,
      {
        scale: 0
      },
      -0.1
    );

    setTimeout(function() {
      TweenMax.to(".toggle", 0.4, {
        x: 0
      });

      TweenMax.from(".toggle", 0.6, {
        rotation: 360,
        delay: 0.1
      });

      menu.classList.toggle("menu-active");
    }, 500);

    setTimeout(function() {
      TweenMax.set(".toggle", {
        backgroundColor: "#fff"
      });
    }, 1000);
  }

}




toggle.addEventListener("click", menuFunction);

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => menuItem.addEventListener("click", function () 

{
  menuFunction();
  toggle.checked = !toggle.checked;}));


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
  delay: 9
});

let coreImgTL = new TimelineMax();


  
let coreHeadlineTween = TweenMax.staggerFrom(
  ".coreskills__headline",
  1,
  { scale: 0.01, ease: Power3.easeInOut, delay: 0.2 },
  0.2
);

let coreParagraphTween = TweenMax.staggerFrom(
  ".coreskills__paragraph",
  1,
  { opacity: 0, ease: Power4.easeInOut, delay: 0.2 },
  0.3
);

let companiesTween = TweenMax.staggerFrom(
  ".companies__logo",
  0.4,
  { scale: 0, ease: Power1.easeInOut, delay: 0.2, force3D: false },
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

skillsTL
  .add(skillsTween)

  .from(".about-me__skills", 0.5, {
    scale: 0.6,
    ease: Power2.easeOut,
    delay: -0.3
  })
  .from(".about-me__skills", 0.3, {
y: 30,
    ease: Power2.easOut,
    delay: 0.2
  });


  let projectsTween = TweenMax.from(
    "#projects-headline",
    0.4,
    { y: 50, autoAlpha: 0, scale: 0.6,force3D:true, ease: Power3.easeOut }
  );


let janneTween = TweenMax.from(
  ".janne",
  0.3,
  { x: -300, scale: 0.5, force3D:true, ease: Power1.easeIn }
);

let sushiTween = TweenMax.from(
  ".sushi",
  0.3,
  { x: 300, scale: 0.5, force3D:true, ease: Power1.easeIn }
);

let portfolioTween = TweenMax.from(
  ".portfolio",
  0.3,
  { x: -300, scale: 0.5, force3D:true,ease: Power1.easeIn }
);

let ttuTween = TweenMax.from(
  ".ttu",
  0.3,
  { x: 300, scale: 0.5,force3D:true, ease: Power1.easeIn }
);

let colorgenTween = TweenMax.from(
  ".colorgen",
  0.3,
  { x: -300, scale: 0.5,force3D:true,ease: Power1.easeIn }
);

let countriesTween = TweenMax.from(
  ".countries",
  0.3,
  { x: 300, scale: 0.5,force3D:true, ease: Power1.easeIn }
);

let rokotinTween = TweenMax.from(
  ".rokotin",
  0.3,
  { x: -300, scale: 0.5,force3D:true, ease: Power1.easeIn }
);


let moneytrackerTween = TweenMax.from(
  ".moneytracker",
  0.3,
  { x: 300, scale: 0.5, force3D:true,ease: Power1.easeIn }
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
  opacity: 0,
  scale: 0.1,
  ease: Power4.easeOut,
  delay: 0.1
});

let contactTL = new TimelineMax();

contactTL
  .add(cableLeftTween)
  .add(cableRightTween)
  .add(contactTween)
  .to("#cable-left", 0.2, { y: 0, x: -100, ease: Power2.easeOut, delay: 0.2 })
  .to("#cable-right", 0.2, { y: 0, x: 100, ease: Power2.easeOut, delay: -0.4 })
  .from(".contact__form", 0.4, { y: 300, ease: Power4.easeOut, delay: 0.2 })
  .to("#cable-left, #cable-right", 0.2, {
    y: 0,
    x: 0,
    ease: Power4.easeOut,
    delay: 0.3
  })
  .to(".contact__form", 1, {
    css: { filter: "grayscale(0%)", "-webkit-filter": "grayscale(0%)" },
    ease: Power4.easeOut,
    delay: -0.2
  });

let controller = new ScrollMagic.Controller();

let coreHeadlineScene = new ScrollMagic.Scene({
  triggerElement: ".core-skills"
}).setTween(coreHeadlineTween);

let coreImgScene = new ScrollMagic.Scene({
  triggerElement: ".core-skills"
}).on('start', function () {
  designAnimation.goToAndPlay(0, true);
  developAnimation.goToAndStop(0, true);
  photoAnimation.goToAndStop(0, true);
  setTimeout(function(){ developAnimation.play(); }, 800);
  setTimeout(function(){ photoAnimation.play(); }, 1600);

})

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
  triggerElement: ".projects", 
  offset: 200
}).setTween(projectsTween);


let janneScene = new ScrollMagic.Scene({
  triggerElement: ".janne", 
}).setTween(janneTween);

let sushiScene = new ScrollMagic.Scene({
  triggerElement: ".sushi", 
}).setTween(sushiTween);

let portfolioScene = new ScrollMagic.Scene({
  triggerElement: ".portfolio", 
}).setTween(portfolioTween);

let ttuScene = new ScrollMagic.Scene({
  triggerElement: ".ttu", 

}).setTween(ttuTween);

let colorgenScene = new ScrollMagic.Scene({
  triggerElement: ".colorgen", 

}).setTween(colorgenTween);

let countriesScene = new ScrollMagic.Scene({
  triggerElement: ".countries", 

}).setTween(countriesTween);

let rokotinScene = new ScrollMagic.Scene({
  triggerElement: ".rokotin", 
 
}).setTween(rokotinTween);

let moneytrackerScene = new ScrollMagic.Scene({
  triggerElement: ".moneytracker", 

}).setTween(moneytrackerTween);



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
  janneScene,
  sushiScene,
  portfolioScene,
  ttuScene,
  colorgenScene,
  countriesScene,
  rokotinScene,
  moneytrackerScene,
  contactScene
]);
