var rubyCtx = document.getElementById("ruby");
var jsCtx = document.getElementById("javascript");
var jqCtx = document.getElementById("jquery");
var tddCtx = document.getElementById("tdd");
var angularCtx = document.getElementById("angular");
var htmlCtx = document.getElementById("html");
var wpCtx = document.getElementById("wordpress");
var bsCtx = document.getElementById("bootstrap");

var ruby = new Chart(rubyCtx, {
 type: 'doughnut',
 data: {
   labels: [
     "watermelon",
     "teal"
   ],
   datasets: [
     {
       data: [300, 500],
       backgroundColor: [
         "#FF6A5C",
         "#056571"
       ]
     }]
 }
});

var javascript = new Chart(jsCtx, {
 type: 'doughnut',
 data: {
   labels: [
     "watermelon",
     "teal"
   ],
   datasets: [
     {
       data: [300, 500],
       backgroundColor: [
         "#FF6A5C",
         "#056571"
       ]
     }]
 }
});

var angular = new Chart(angularCtx, {
 type: 'doughnut',
 data: {
   labels: [
     "watermelon",
     "teal"
   ],
   datasets: [
     {
       data: [300, 500],
       backgroundColor: [
         "#FF6A5C",
         "#056571"
       ]
     }]
 }
});

var html = new Chart(htmlCtx, {
 type: 'doughnut',
 data: {
   labels: [
     "watermelon",
     "teal"
   ],
   datasets: [
     {
       data: [300, 500],
       backgroundColor: [
         "#FF6A5C",
         "#056571"
       ]
     }]
 }
});

var wordpress = new Chart(wpCtx, {
 type: 'doughnut',
 data: {
   labels: [
     "watermelon",
     "teal"
   ],
   datasets: [
     {
       data: [300, 500],
       backgroundColor: [
         "#FF6A5C",
         "#056571"
       ]
     }]
 }
});

var bootstrap = new Chart(bsCtx, {
 type: 'doughnut',
 data: {
   labels: [
     "watermelon",
     "teal"
   ],
   datasets: [
     {
       data: [300, 500],
       backgroundColor: [
         "#FF6A5C",
         "#056571"
       ]
     }]
 }
});

var jquery = new Chart(jqCtx, {
 type: 'doughnut',
 data: {
   labels: [
     "watermelon",
     "teal"
   ],
   datasets: [
     {
       data: [300, 500],
       backgroundColor: [
         "#FF6A5C",
         "#056571"
       ]
     }]
 }
});

var tdd = new Chart(tddCtx, {
 type: 'doughnut',
 data: {
   labels: [
     "watermelon",
     "teal"
   ],
   datasets: [
     {
       data: [300, 500],
       backgroundColor: [
         "#FF6A5C",
         "#056571"
       ]
     }]
 }
});
