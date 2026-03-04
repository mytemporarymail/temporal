// root page is "/" or "/index.html"; everything else is an article
const p = window.location.pathname;
console.log("Current pathname:", p);
if (p !== "/" && !p.endsWith("/index.html")) {
  document.body.classList.add("page-without-nav");
  console.log("Added page-without-nav class");
} else {
  console.log("Not adding class - this is root page");
}
