tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
};

window.onscroll = function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("bg-black");
    header.classList.add("z-50");
    header.classList.add("bg-opacity-30");
    header.classList.add("backdrop-blur-2xl");
    header.classList.add("transition-all");
  } else {
    header.classList.remove("bg-black");
    header.classList.remove("z-50");
    header.classList.remove("bg-opacity-30");
    header.classList.remove("backdrop-blur-2xl");
  }
};

const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

 document.getElementById("scrollButton").addEventListener("click", function () {
    // Seleciona a próxima seção abaixo da Hero
    const nextSection = document.querySelector("#projetos"); // Altere para o ID da próxima seção

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  
  const heroImage = document.querySelector('img[src="assets/hero-illustration.svg"]');
  const togglePulseButton = document.getElementById('togglePulseButton');

  togglePulseButton.addEventListener('click', function () {
    heroImage.classList.toggle('pulse-animation');
  });