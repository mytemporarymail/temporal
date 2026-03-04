document.addEventListener("DOMContentLoaded", () => {
  // root page is “/” or “/index.html”; everything else is an article
  const p = location.pathname;
  if (p !== "/" && !p.endsWith("/index.html")) {
    document.body.classList.add("page-without-nav");
  }
});
