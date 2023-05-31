const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const closeIcon = document.querySelector(".details .icon");
const previewImg = document.querySelector(".preview-img");
const currentImg = document.querySelector(".current-img");
const totalImg = document.querySelector(".total-img");
const shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i;
    function preview() {
      let selectedImg = gallery[newIndex].querySelector("img").src; // getting user clicked img url
      previewImg.src = selectedImg;
      currentImg.textContent = newIndex + 1;
    }
    gallery[i].onclick = () => {
      shadow.style.display = "block";
      currentImg.textContent = newIndex + 1;
      previewBox.classList.add("show");

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == gallery.length - 1) {
        nextBtn.style.display = "none";
      }
      if (newIndex == 0) {
        prevBtn.style.display = "none";
      }
      nextBtn.addEventListener("click", () => {
        newIndex++;

        if (newIndex == gallery.length) {
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      });

      prevBtn.addEventListener("click", () => {
        newIndex--;
        if (newIndex == -1) {
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      });
      preview();
      closeIcon.addEventListener("click", () => {
        shadow.style.display = "none";
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
      });
    };
  }
};
