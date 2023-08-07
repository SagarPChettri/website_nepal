const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = 'block';
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.places-list-title,.todo-list-title,.fes-list-title,.todo-list-title.navbar-container,.sidebar,.left-menu-icon,.toggle"
);
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => {
      page.style.display = 'none';
  });

  // Show the selected page
  
}

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
