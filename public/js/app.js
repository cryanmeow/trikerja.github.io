function resizeScreen() {
  let width = window.innerWidth;
  let imageDesktop = document.querySelectorAll(".hero-desktop");
  let imageMobile = document.querySelectorAll(".hero-mobile");
  let cover = document.querySelectorAll(".header-cover");

  if (width < 768) {
    imageMobile.forEach((item, index) => {
      item.classList.remove("d-none");
      imageDesktop[index].classList.add("d-none");
    });
  } else {
    imageDesktop.forEach((item, index) => {
      item.classList.remove("d-none");
      imageMobile[index].classList.add("d-none");
    });
  }
}
resizeScreen();
window.onresize = resizeScreen;
