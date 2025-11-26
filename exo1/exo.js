let premier_paragraphe = document.querySelector("#premier_paragraphe")

let premier_button = document.querySelector("#premier_button")

premier_button.addEventListener("click", () => {
    let ageUtilisateur = prompt("Veuillez saisir votre âge")

    if (ageUtilisateur == null) {
        premier_paragraphe.innerText = "Vous avez annulé votre demande";
        premier_paragraphe.style.color = "red";

        return;
    }
    if (ageUtilisateur == "") {
        premier_paragraphe.innerText = "Veuillez renseigner ce champ";
        premier_paragraphe.style.color = "orange";
        return;
    }

console.log(parseInt(ageUtilisateur))

    if (parseInt(ageUtilisateur) !== NaN && parseInt(ageUtilisateur)  < 18 ) {
        
        premier_paragraphe.innerText = `❌ Vous avez ${ageUtilisateur} ans : Interdit aux mineurs`;

        premier_paragraphe.style.color = "red";
        
        
    } else if(parseInt(ageUtilisateur) !== NaN && parseInt(ageUtilisateur)  >= 18) {
        premier_paragraphe.innerText = `❇️ Vous avez ${ageUtilisateur} ans : Tout est gratuit quand vous êtes majeurs et vaccinés`;
        premier_paragraphe.style.color = "green";
        
    }else{
        premier_paragraphe.innerText = `❌ Vous tapé (${ageUtilisateur} ) qui est du texte ! \n Recommencer svp !!`;

        premier_paragraphe.style.color = "red";
        
    }
    


})


//================= Calendrier exo 1 , n°3 ============"

let troisieme_paragraphe = document.querySelector("#troisieme_paragraphe")

let troisieme_button = document.querySelector("#troisieme_button")


troisieme_button.addEventListener('click', ()=>{
    let moisSaisi = prompt("Veuillez saisir le nombre du mois")

    let listeDesMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    if (parseInt(moisSaisi) !== NaN && parseInt(moisSaisi) > 0 && parseInt(moisSaisi) <= 12) {
        let indice = moisSaisi-1;

        troisieme_paragraphe.innerText = listeDesMois[indice]
        troisieme_paragraphe.style.color = "green";
        
        
    } 
    

})