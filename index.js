const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");

bars.addEventListener("click", ()=>{
  sidebar.classlist.toggle('show-sidebar');
})
closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});