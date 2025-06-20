function searchbarclick() {
    document.getElementById('searchbar').style.backgroundColor = "#222";
    document.getElementById('searchbtn').style.backgroundColor = "#222";
}

function searchbarclick1() {
    document.getElementById('searchbar').style.backgroundColor = "#111";
    document.getElementById('searchbtn').style.backgroundColor = "#111";
}



// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*
// chatgpt
var dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
});
*/

function modal() {
  var x = document.getElementById('prijava').style.display
}


// otvara sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.getElementById("main").style.marginLeft = "260px";
  document.getAnimations("footer").style.marginLeft = "260px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getAnimations("footer").style.marginLeft = "0";
}


// otvara sidenav preko responsive topnav-a
function openNav2() {
  document.getElementById("mySidenav").style.width = "100%";
}


// chatgpt
function openContact() {
  var contactModal = document.getElementById("contact-modal");
  contactModal.style.display = "block";
  setTimeout(function() {
    contactModal.querySelector(".contact-modal-content").classList.add("show");
  }, 100);
}

function closeContact() {
  var contactModal = document.getElementById("contact-modal");
  contactModal.querySelector(".contact-modal-content").classList.add("hide");
  setTimeout(function() {
    contactModal.style.display = "none";
    contactModal.querySelector(".contact-modal-content").classList.remove("hide");
  }, 300);
}


    // chat gpt
    // loading
    window.onload = function() {
      var loadingScreen = document.getElementById("loading-screen");
      loadingScreen.style.display = "none";
    };