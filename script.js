document.addEventListener("DOMContentLoaded", function () {
  const ghButton = document.getElementById("ghbutton");
  const lkButton = document.getElementById("lkbutton");
  const cvButton = document.getElementById("cvbutton");

  ghButton.addEventListener("click", () => {
    window.open("https://github.com/bnour1", "_blank");
  });

  ghButton.addEventListener("mouseover", () => {
    ghbutton.classList.add("pointer");
  });

  cvButton.addEventListener("click", () => {
    window.open("https://google.com/", "_blank");
  });

  cvButton.addEventListener("mouseover", () => {
    cvbutton.classList.add("pointer");
  });

  lkButton.addEventListener("click", () => {
    window.open(
      "https://www.linkedin.com/in/bruno-teodosio-78045222a/",
      "_blank"
    );
  });

  lkButton.addEventListener("mouseover", () => {
    lkbutton.classList.add("pointer");
  });

  var infoBox;
  var navItems = document.querySelectorAll('nav li');

  // Adiciona um event listener para cada item da navbar
  navItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      // Adiciona a classe "active" ao info-box quando o mouse passar sobre o item
      if(item == document.getElementById("litwitter")){
        infoBox = document.getElementById("info-box-twitter");
      }else if (item == document.getElementById("limail")){
        infoBox = document.getElementById("info-box-mail");
      }else if (item == document.getElementById("lirabbit")){
        infoBox = document.getElementById("info-box-rabbit");
      }else if (item == document.getElementById("lidiscord")){
        infoBox = document.getElementById("info-box-discord");
      }else{
        infoBox = document.getElementById("info-box-instagram");
      }
      item.classList.add("pointer");
      infoBox.classList.add("active");

    });

    item.addEventListener("click", function () {
      if (item == document.getElementById("litwitter")) {
        window.open("https://twitter.com/1brunows", "_blank");
      } else if (item == document.getElementById("limail")) {
        window.open("https://brunowashingtong@gmail.com", "_blank");
      } else if (item == document.getElementById("lirabbit")) {
        window.open("https://www.youtube.com/watch?v=kGKMVXxyXXY&t=108s", "_blank");
      } else if (item == document.getElementById("lidiscord")) {
        window.open("https://discord.com", "_blank");
      } else {
        window.open("https://www.instagram.com/bruno.washin", "_blank");
      }
    });

    item.addEventListener("mouseout", function () {
      // Remove a classe "active" do info-box quando o mouse sair do item
      infoBox.classList.remove("active");
    });
  });
  
});
