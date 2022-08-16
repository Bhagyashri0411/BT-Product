$(document).ready(function () {
  $("#frontdiv").load("./templates/dashboard/frontdiv.html");
  $("#Footerdiv").load("./templates/dashboard/Footer.html");
  $('#homepage').load('./templates/dashboard/fronthome.html')
  $("#nav").load("./templates/dashboard/nav.html");
  $("#service").load("./templates/dashboard/service.html");
  $("#slideshow").load("./templates/dashboard/slideshow.html");

});
function opendiv() {
  document.getElementById('openmodel').style.display = "block";
}
function closediv() {
  document.getElementById('openmodel').style.display = "none";
}

function openserverdiv() {
  document.getElementById('openservermodel').style.display = "block";
}
function closeserverdiv() {
  document.getElementById('openservermodel').style.display = "none";
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
function showdivdrop() {
  document.getElementById('showdropdiv').style.display = 'block'

}
function usersubdata() {
  console.log('hii');
  var usertext = $('#usertextfield').val();
  var usermail = $('#usermailfield').val();
  var usermobile = $('#usermobilefield').val();
  var usermes = $('#usermesfield').val();

  if (usertext == '', usermail == '', usermobile == '', usermes == '') {
    document.getElementById('messages').innerText = "Please Enter The Values";
    document.getElementById('messhow').style.display = 'block';
  }
  else {
    var myData = { 'id': null, 'user_name': usertext, 'mail': usermail, 'mob_no': usermobile, 'message': usermes }

    $.ajax({
      type: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(myData),
      url: "http://192.168.46.105:8090/enq/books",
      success: function (msg) {
        if (msg == "Inserted Sucessfully") {
          document.getElementById('messages').innerText = "Successful";
          document.getElementById('messhow').style.display = 'block';
          // document.getElementById('openmodel').style.display = "none";
          document.getElementById('resetourdata').reset();

        }
        else {
          document.getElementById('messages').innerText = "Sucessfull Failed";
        }
      }
    })

  }

  $
}