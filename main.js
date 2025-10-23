/** Swiper */
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true, 
    scrollbar: {
      el: '.service-docs-slider-scrollbar', // элемент скроллбара
      draggable: true,        
      hide: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
    zoom: true,
    speed: 600, // скорость перехода в миллисекундах
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const servicesSlider = new Swiper('.services-cycle .mySwiper', {
    slidesPerView: 2, // по умолчанию на десктопе
    spaceBetween: 30,
    navigation: {
      nextEl: '.services-cycle .swiper-button-next',
      prevEl: '.services-cycle .swiper-button-prev',
    },
    breakpoints: {
      992: { // от 992px и выше
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30
      },
      0: { // от 0 до 992px
        slidesPerView: 1,
        centeredSlides: true, // центрируем карточку
        spaceBetween: 20
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('open');
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("cert-full");
  const closeBtn = document.querySelector(".cert-modal .close");

  // Все сертификаты внутри слайдера
  const certs = document.querySelectorAll(".service-docs-slider img");

  certs.forEach(img => {
    img.style.cursor = "zoom-in"; // курсор увеличения
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});




  // new Swiper(".mySwiper", {
  //   slidesPerView: "auto",
  //   spaceBetween: 12,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     // ≤ 640px: один слайд, центрирование, компактные отступы
  //     0: {
  //       slidesPerView: 1,
  //       centeredSlides: true,
  //       spaceBetween: 8,
  //     },
  //     // 641–992px: авто, но компактнее
  //     641: {
  //       slidesPerView: "auto",
  //       centeredSlides: false,
  //       spaceBetween: 10,
  //     },
  //     // ≥ 993px: авто, стандартные отступы
  //     993: {
  //       slidesPerView: "auto",
  //       spaceBetween: 12,
  //     },
  //   },
  // });