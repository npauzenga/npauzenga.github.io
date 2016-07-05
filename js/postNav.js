var siteNav = document.getElementsByClassName("site-nav")[0];
var myName = document.getElementsByClassName("my-name")[0];
var sp = 0;

siteNav.style.opacity = "1";
siteNav.style.transition = "all 0.2s linear";
siteNav.style.boxShadow = "none";
siteNav.style.height = "100px";

myName.style.color = "#056571"

window.addEventListener("scroll", function(e) {
  sp = window.scrollY;

  if (sp <= 10) {
    siteNav.style.borderBottom = "1px solid hsla(0,0%,87%,0)";
    siteNav.style.height = "100px";
  } else {
    siteNav.style.borderBottomColor = "#dedede";
    siteNav.style.height = "50px";
  }
});
