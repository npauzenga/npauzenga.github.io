var elements = document.getElementsByTagName('script')

Array.prototype.forEach.call(elements, function(element) {
  if (element.type.indexOf('math/tex') != -1) {
     // Extract math markdown
     var textToRender = element.innerText || element.textContent;

     // Create span for KaTeX
     var katexElement = document.createElement('span');

     // Support inline and display math
     if (element.type.indexOf('mode=display') != -1){
       katexElement.className += "math-display";
       textToRender = '\\displaystyle {' + textToRender + '}';
     } else {
       katexElement.className += "math-inline";
     }

     katex.render(textToRender, katexElement);
     element.parentNode.insertBefore(katexElement, element);
  }
});

/*
 * Nav stuff
 */
var siteNav = document.getElementsByClassName("site-nav")[0];
var header = document.getElementsByClassName("main-page-header")[0];
var siteTitle = document.getElementsByClassName("nav-title")[0];

var headerHeight = header.offsetHeight;
var sp = 0; // scroll position
var ticking = false;

// adjust the nav if we've scrolled passed the header
// if we're at the top of the page make the nav absolute with no bg color
function moveNav() {
  if (sp > headerHeight) {
    siteNav.style.position = "fixed";
    siteNav.style.backgroundColor = "#414141";
    siteTitle.style.display = "inline-block";
  } else {
    siteNav.style.position = "absolute";
    siteNav.style.backgroundColor = "transparent";
    siteTitle.style.display = "none";
  }
}

 window.addEventListener("scroll", function(e) {
   sp = window.scrollY;

   if (!ticking) {
     window.requestAnimationFrame(function() {
       moveNav();
       ticking = false;
     });
   }
   ticking = true;
 });
