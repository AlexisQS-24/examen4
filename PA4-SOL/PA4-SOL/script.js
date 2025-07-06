$(document).ready(function () {
  const images = $(".banner-img");
  let index = 0;

  images.hide();
  images.eq(index).fadeIn(1000);

  setInterval(function () {
    images.eq(index).fadeOut(1000, function () {
      index = (index + 1) % images.length;
      images.eq(index).fadeIn(1000);
    });
  }, 3000);
});
