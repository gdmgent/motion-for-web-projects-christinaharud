document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* gsap */

gsap.from('nav'&& 'li', {duration: 0.1, x:"-300px", opacity: 0, stagger: 0.2})
gsap.from('.smoke' && '.title-page-text', {delay: 1.5, duration: 2, opacity: 0});
gsap.to('.smoke' && '.title-page-text', {delay: 1.5,duration: 2, opacity: 1});

/* scroll */

const sections = document.querySelectorAll("section");
let main = document.querySelector('main')
sections.forEach((section) => {
  const card = section.querySelector(".card");

  gsap.from(card, {
    x: "100%",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      scroller: main,
      trigger: section,
      start: "top center",
      toggleActions:"play reset play reset"
    },
    ease: "back.out(0.7)"
    });
});