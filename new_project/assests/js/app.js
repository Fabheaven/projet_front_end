document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const videos = document.querySelectorAll('.carousel-video');
  const preButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  function showVideo(index) {
    videos.forEach((videos, i)) => {
        videos.classList.toggle('active', i === index);
    };
  }

  preButton.addEventListener('click', () => {
    currentIndex = (currentIndex -1 + videos.length) % videos.length;
    showVideo(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % videos.length;
    showVideo(currentIndex);
  });
  showVideo(currentIndex);
});
