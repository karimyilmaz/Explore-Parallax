gsap.registerPlugin(ScrollTrigger)

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.wrapper',
      start: 'top top',
      scrub: 0.5,
      pin: '.wrapper',
    },
  })
  .to('#girl', { yPercent: -90, duration: 2 })
  .to('#rock', { yPercent: -80, duration: 2 }, '-=2')
  .to('.content', { top: '0%', duration: 1 }, '-=2')
// .to('#bg', { yPercent: 5, duration: 15 }, '-=2')
