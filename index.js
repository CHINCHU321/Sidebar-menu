const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", ()=>{
  sidebar.classlist.toggle('show-sidebar');
})
