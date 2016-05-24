var rubyCtx = document.getElementById("ruby");
var jsCtx = document.getElementById("javascript");
var angularCtx = document.getElementById("angular");
var htmlCtx = document.getElementById("html");
var wpCtx = document.getElementById("wordpress");

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
