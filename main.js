// Landing GSAP Animations
gsap.from(".glass", { opacity: 0, y: 50, duration: 1.4, ease: "power3.out" });
gsap.from(".glass h1", { opacity: 0, y: 40, delay: 0.5, duration: 1.2, ease: "power3.out" });
gsap.from(".glass p", { opacity: 0, y: 30, delay: 0.8, duration: 1.2, ease: "power3.out" });
gsap.from(".btn", { opacity: 0, scale: 0.8, delay: 1.1, duration: 0.8, ease: "back.out(1.7)",
  onComplete: () => {
    document.querySelectorAll(".btn").forEach(btn => {
      btn.style.opacity = "1";
      btn.style.visibility = "visible";
    });
  }
});

// Hover shadow on glass
const glass = document.querySelector(".glass");
glass.addEventListener("mouseenter", () => {
  gsap.to(glass, { boxShadow: "0 0 40px rgba(255,180,0,0.7)", scale: 1.03, duration: 0.4, ease: "power2.out" });
});
glass.addEventListener("mouseleave", () => {
  gsap.to(glass, { boxShadow: "0 0 40px rgba(0,0,0,0.5)", scale: 1, duration: 0.4, ease: "power2.inOut" });
});

// Hero Section GSAP
gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1 });
gsap.from(".hero-sub", { y: 40, opacity: 0, duration: 1, delay: 0.3 });
gsap.from(".hero .btn", { y: 20, opacity: 0, duration: 1, delay: 0.6,
  onComplete: () => {
    document.querySelectorAll(".hero .btn").forEach(btn => {
      btn.style.opacity = "1";
      btn.style.visibility = "visible";
    });
  }
});

// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
