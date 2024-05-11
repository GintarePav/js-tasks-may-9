import addNewItem from "./modules/addNewItem";
import saveGallery from "./modules/saveGallery";

document.getElementById("save-btn").addEventListener("click", (e) => {
  e.preventDefault();
  addNewItem();
  saveGallery();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".gallery").innerHTML =
    localStorage.getItem("gallery");
});
