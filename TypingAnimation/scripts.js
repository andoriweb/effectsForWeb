const tl = new TimelineMax();

tl.fromTo(
  ".type-me",
  5,
  {
    width: "0",
  },
  {
    width: "702px" /* same as text-description width */,
    ease: SteppedEase.config(27),
  },
  0
);
