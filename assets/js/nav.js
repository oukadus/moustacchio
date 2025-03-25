/////////////////////////////////////////////////
//// Add active class to the current menu item
/////////////////////////////////////////////////

let currentLocation = window.location.pathname;
// // console.log(currentLocation);

let menuItems = document.querySelectorAll(".nav-link");
// console.log(menuItems);

menuItems.forEach((link) => {
  //   console.log(link.getAttribute("href"));
  currentLocation = currentLocation.replace("/", ""); // Enlève le dernier slash
  //   console.log(currentLocation);

  if (link.getAttribute("href") === currentLocation) {
    link.classList.add("active"); // Ajoute la classe "active"
  }
  //   else {
  //     console.log("no match");
  //   }
});
