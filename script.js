const scrollContainer = document.getElementById("course-scroll");

function scrollCourses(distance) {
    scrollContainer.scrollBy({
        left: distance,
        behavior: "smooth",
    });
}

// Auto-scroll functionality
let autoScroll = setInterval(() => {
    scrollContainer.scrollBy({
        left: 350,
        behavior: "smooth",
    });
}, 3000);

// Pause auto-scroll on hover and resume on mouse leave
scrollContainer.addEventListener("mouseover", () => clearInterval(autoScroll));
scrollContainer.addEventListener("mouseleave", () => {
    autoScroll = setInterval(() => {
        scrollContainer.scrollBy({
            left: 350,
            behavior: "smooth",
        });
    }, 1000);
});

// JavaScript for fade-in and slide-up animation on page load
window.addEventListener("DOMContentLoaded", function () {
    const courseCards = document.querySelectorAll(".course-box");

    courseCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 500); // Each card appears with a delay (500ms between cards)
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // only run if the element exists on the page
  if (themeToggle) {
    // restore saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark');
      themeToggle.checked = true;
    } else {
      body.classList.remove('dark');
    }

    // toggle handler
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
// simple, robust menu toggle functions used by your onclick attributes
function showMenu() {
  const nav = document.getElementById('navlinks');
  if (!nav) return;
  nav.classList.add('show');
}

function hideMenu() {
  const nav = document.getElementById('navlinks');
  if (!nav) return;
  nav.classList.remove('show');
}

// Optional: close the mobile menu when user clicks outside or on a link (nice UX)
document.addEventListener('click', (e) => {
  const nav = document.getElementById('navlinks');
  if (!nav) return;
  // if clicked a link inside nav, close
  if (e.target.closest('.navlinks a')) {
    nav.classList.remove('show');
  }
});







