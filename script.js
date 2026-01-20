
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}

function toggleMenu() {
  document.querySelector("nav").classList.toggle("show");
}

// Highlight active navbar link
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

// Page loader
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.classList.add("hidden");
  }
});
// Research Tabs
function openTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn =>
    btn.classList.remove("active")
  );

  document.querySelectorAll(".tab-panel").forEach(panel =>
    panel.classList.remove("active")
  );

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}
