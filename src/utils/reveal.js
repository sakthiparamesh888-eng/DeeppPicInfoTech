export const initReveal = () => {
  const els = document.querySelectorAll(".reveal");

  const reveal = () => {
    const windowHeight = window.innerHeight;

    els.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 60) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
};
