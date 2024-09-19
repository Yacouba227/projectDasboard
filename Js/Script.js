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

/* voirSuivi.forEach(element => {
    element.addEventListener('click', (e) =>{
      nomDossier = element.parentElement.parentElement.parentElement.firstElementChild.textContent;
      console.log('====================================');
      console.log(nomDossier);
      localStorage.setItem('nom', JSON.stringify(nomDossier))
      console.log('====================================');
    })
  }); */

afficher.forEach(element => {
   element.addEventListener("click", (e)=>{
    /* console.log('====================================');
    console.log(e);
    console.log('===================================='); */
    if (e.target) {
        contenu_masquer.style.display = 'block';
    }
})
});

close.addEventListener("click", (e)=>{
   /*  console.log('====================================');
    console.log(e);
    console.log('===================================='); */
    if (e.target) {
        contenu_masquer.style.display = 'none';
    }
})