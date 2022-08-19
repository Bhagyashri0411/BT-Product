$(document).ready(function () {
  $("#frontdiv").load("/templates/frontdiv.html");
  $("#Footerdiv").load("/templates/Footer.html");
  $('#homepage').load('/templates/fronthome.html')
  $("#nav").load("/templates/nav.html");
  $("#service").load("/templates/service.html");
  $("#slideshow").load("/templates/slideshow.html");
  $("#modalinquiry").load("/Modal/inquiry.html");
  $("#modallogin").load("/Modal/Login.html");
  $("#clients").load("/templates/client.html");
});


// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
//   document.addEventListener('click', function handleClickOutsideBox(event) {
//     const box = document.getElementById('box');

//     if (!box.contains(event.target)) {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     }
//   });
// }

// function myFunction1() {
//   var dots = document.getElementById("dots1");
//   var moreText = document.getElementById("more1");
//   var btnText = document.getElementById("myBtn1");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
//   document.addEventListener('click', function handleClickOutsideBox(event) {
//     const box = document.getElementById('box1');

//     if (!box.contains(event.target)) {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     }
//   });
// }

// function myFunction2() {
//   var dots = document.getElementById("dots2");
//   var moreText = document.getElementById("more2");
//   var btnText = document.getElementById("myBtn2");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
//   document.addEventListener('click', function handleClickOutsideBox(event) {
//     const box = document.getElementById('box2');

//     if (!box.contains(event.target)) {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     }
//   });
// }
