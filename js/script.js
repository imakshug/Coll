// popup

function openPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.style.display = navbar.style.display === "none" ? "flex" : "none";
  }
  