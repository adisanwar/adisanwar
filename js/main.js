// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
//       })

//     }
//   })
// }


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        // Hilangkan kelas "active" dari semua tautan
        navLinks.forEach(link => link.classList.remove("active"));

        // Tambahkan kelas "active" ke tautan yang diklik
        this.classList.add("active");

        // Scroll ke elemen yang sesuai dengan ID yang sesuai dengan href tautan
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Tampilkan/maskikan tombol scroll to top berdasarkan posisi scroll
window.addEventListener("scroll", function() {
  const scrollToTopButton = document.getElementById("scrollToTop");
  if (window.scrollY > 100) {
      scrollToTopButton.style.display = "block";
  } else {
      scrollToTopButton.style.display = "none";
  }
});

// Animasi scroll ke atas ketika tombol scroll to top diklik
document.getElementById("scrollToTop").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// Script untuk menambahkan kelas animasi pada bagian yang muncul dalam tampilan
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
          }
      });
  }, { threshold: 0.5 }); // Sesuaikan nilai threshold sesuai kebutuhan

  sections.forEach(section => {
      observer.observe(section);
  });
});
