$(document).ready(function () {
  $("#frontdiv").load("./templates/dashboard/frontdiv.html");
  $("#Footerdiv").load("./templates/dashboard/Footer.html");
  $('#homepage').load('./templates/dashboard/fronthome.html')
$("#nav").load("./templates/dashboard/nav.html"); 
});
function opendiv() {
  document.getElementById('openmodel').style.display = "block";
}
function closediv() {
  document.getElementById('openmodel').style.display = "none";
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
  document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('box');
  
    if (!box.contains(event.target)) {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
  });
}

function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
  document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('box1');
  
    if (!box.contains(event.target)) {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
  });
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
  document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('box2');
  
    if (!box.contains(event.target)) {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
  });
}

