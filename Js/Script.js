let Navigation = document.querySelector(".Navigation");
let Main = document.querySelector(".Main");
let Toggle = document.querySelector(".Toggle");
const afficher = document.querySelectorAll("#afficher");
const contenu_masquer  = document.querySelector(".contenu-masquer");
const close = document.getElementById('close')

Toggle.onclick = () => {
    Navigation.classList.toggle("active");
    Main.classList.toggle("active");
}

afficher.forEach(element => {
   element.addEventListener("click", (e)=>{
    if (e.target) {
        contenu_masquer.style.display = 'block';
    }
})
});

close.addEventListener("click", (e)=>{
    if (e.target) {
        contenu_masquer.style.display = 'none';
    }
})