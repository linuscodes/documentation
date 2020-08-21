document.querySelector(".menu-toggle").onclick = function() {
   this.classList.toggle("is-toggled");
   document.querySelector(".sidebar").classList.toggle("is-toggled");
}