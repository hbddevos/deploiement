// ==========================================
// EXERCICES DE MANIPULATION DU DOM
// ==========================================

// SECTION 1 : SÉLECTION D'ÉLÉMENTS
// ==========================================

// Exercice 1.1 : Sélectionner un élément par son ID

let premier_boutton = document.getElementById('button_section1');

console.log(premier_boutton);

premier_boutton.addEventListener('click', function () {
    premier_boutton.innerText = "J'ai été frappé";
})
premier_boutton.addEventListener('mouseenter', function () {
    premier_boutton.innerText = "J'ai été survolé";
})


// 1 - cliquer sur un bouton (evènement)
// 2 - changer le texte d'un paragraphe (Objectif)

//Réflexion : 

let dejaClique = false;
// a- Selectionner le button

let bouton_fufu_mix = document.getElementById("button_fufu_mix")
// b- Selectionner le paragraphe
let plat_fufu = document.getElementById('plat_de_fufu')
// c- ajoute un ecouteur au bouton

bouton_fufu_mix.addEventListener('click', function () {
    // d- Changer le contenu du paragraphe
    if (dejaClique == true) {

        plat_fufu.innerText = "Text a changer"
    } else {
        plat_fufu.innerText = "Fufu prêt !!!!"

    }

    dejaClique = !dejaClique;

    console.log(dejaClique)
})

// Section manipulation des ampoules
// ========================

let estAllume = false;

let ampoule = document.getElementById('ampoule')

let btn_allumage = document.getElementById('btn_allumage')

let btn_eteindre = document.getElementById('btn_eteindre')

let btn_interrupteur = document.getElementById('btn_interrupteur')

btn_allumage.addEventListener("click", function () {
    ampoule.style.backgroundColor = "#ffbf00";
})

btn_eteindre.addEventListener('click', () => {
    ampoule.style.backgroundColor = "#dcdcdc";
})


btn_interrupteur.addEventListener('click', () => {

    if (estAllume == true) {
        ampoule.style.backgroundColor = "#dcdcdc";
    }

    if (estAllume == false) {

        ampoule.style.backgroundColor = "#ffbf00";
    }

    estAllume = !estAllume;
})


// Section manipulation de message
// ========================


let paragraphe_affichage_message = document.querySelector("#affiche_message")

let bouton_recupration = document.querySelector("#recup_message")

bouton_recupration.addEventListener('click', () => {
    let message = prompt("Veuillez entrer votre message", "Vous n'avez rien saisi")

    if (message == null) {

        // paragraphe_affichage_message.innerText = "Action annulée";
        // paragraphe_affichage_message.style.color = "red";
        alert("Vous venez d'annuler votre action")
        return;
    }

    if (message == "") {
        paragraphe_affichage_message.innerText = "Message vide";
        paragraphe_affichage_message.style.color = "orange";

        return;
    }

    paragraphe_affichage_message.innerText = message;
    paragraphe_affichage_message.style.color = "green";


    console.log("Regardez moi")
})



// function exercice1_1() {
//     // getElementById : récupère un élément par son ID (retourne un élément ou null)
//     const element = document.getElementById("texte-simple");

//     if (element) {
//         // Modification du contenu textuel
//         element.textContent = "Le texte a été modifié !";
//         console.log("Élément trouvé et modifié");
//     }
// }

// Exercice 1.2 : Sélectionner des éléments par classe
function exercice1_2() {
    // getElementsByClassName : retourne une collection d'éléments
    const elements = document.getElementsByClassName("section");

    console.log("Nombre de sections : " + elements.length);

    // Parcourir les éléments trouvés
    for (let i = 0; i < elements.length; i++) {
        console.log("Section " + (i + 1) + " : " + elements[i].textContent.substring(0, 30));
    }
}

// SECTION 2 : DIFFERENCE ENTRE innerText ET textContent
// ==========================================

// Exercice 2.1 : Comprendre textContent
function exercice2_1() {
    // textContent retourne TOUT le texte, y compris le texte des éléments enfants
    // IMPORTANT : ne respecte pas la mise en forme CSS (propriétés display, etc.)

    const element = document.getElementById("texte-format");
    const contenu = element.textContent;

    const resultat = document.getElementById("resultat-2");
    resultat.innerHTML = "<strong>textContent :</strong> " + contenu;

    console.log("textContent : " + contenu);
    // Résultat : "Texte en rouge et texte normal"
}

// Exercice 2.2 : Comprendre innerText
function exercice2_2() {
    // innerText retourne uniquement le texte VISIBLE à l'écran
    // IMPORTANT : respecte la mise en forme CSS (display: none sera ignoré)
    // innerText est plus lent que textContent car il calcule le rendu

    const element = document.getElementById("texte-format");
    const contenu = element.innerText;

    const resultat = document.getElementById("resultat-2");
    resultat.innerHTML = "<strong>innerText :</strong> " + contenu;

    console.log("innerText : " + contenu);
    // Résultat : "Texte en rouge et texte normal" (même que textContent dans ce cas)
}

// SECTION 3 : DIFFERENCE ENTRE innerHTML ET outerHTML
// ==========================================

// Exercice 3.1 : Comprendre innerHTML
function exercice3_1() {
    // innerHTML retourne/modifie le contenu HTML INTERIEUR de l'élément
    // N'affecte pas l'élément lui-même, seulement son contenu

    const element = document.getElementById("conteneur-html");

    console.log("innerHTML avant : " + element.innerHTML);
    // Résultat : "<p>Contenu original</p>"

    // Modification
    element.innerHTML = "<p>Nouveau contenu</p><p>Deuxième paragraphe</p>";

    const resultat = document.getElementById("resultat-3");
    resultat.innerHTML = "<strong>innerHTML modifié :</strong> " + element.innerHTML;
}

// Exercice 3.2 : Comprendre outerHTML
function exercice3_2() {
    // outerHTML retourne/modifie l'élément ENTIER, y compris la balise
    // ATTENTION : modifie ou remplace l'élément lui-même

    const element = document.getElementById("conteneur-html");

    console.log("outerHTML avant : " + element.outerHTML);
    // Résultat : "<div id="conteneur-html"><p>Contenu original</p></div>"

    // Modification avec outerHTML (attention : remplace l'élément)
    const resultat = document.getElementById("resultat-3");
    resultat.innerHTML = "<strong>outerHTML REMPLACE l'élément entier</strong>";

    // EXEMPLE : element.outerHTML = "<section id='conteneur-html'>Nouvel élément</section>";
    // Ceci remplacerait le div par une section
}

// SECTION 4 : CRÉER ET AJOUTER DES ÉLÉMENTS
// ==========================================

// Exercice 4.1 : Créer et ajouter un élément
function exercice4_1() {
    // createElement : crée un nouvel élément DOM
    const newElement = document.createElement("p");

    // Ajouter du texte à l'élément
    newElement.textContent = "Élément créé dynamiquement";

    // Ajouter une classe CSS pour le style
    newElement.className = "resultat";

    // appendChild : ajoute l'élément comme dernier enfant
    const conteneur = document.getElementById("conteneur-elements");
    conteneur.appendChild(newElement);

    console.log("Élément créé et ajouté");
}

// Exercice 4.2 : Créer plusieurs éléments avec une boucle
function exercice4_2() {
    const conteneur = document.getElementById("conteneur-elements");

    // Vider le conteneur
    conteneur.innerHTML = "";

    // Créer 5 éléments
    for (let i = 1; i <= 5; i++) {
        // createElement : crée un nouvel élément
        const newDiv = document.createElement("div");

        // Ajouter du contenu
        newDiv.textContent = "Élément " + i;
        newDiv.className = "resultat";
        newDiv.style.marginBottom = "10px";

        // appendChild : ajoute l'élément
        conteneur.appendChild(newDiv);
    }

    console.log("5 éléments créés et ajoutés");
}

// SECTION 5 : GESTION DES CLASSES CSS
// ==========================================

// Exercice 5.1 : Ajouter une classe CSS
function exercice5_1() {
    const element = document.getElementById("element-classe");

    // classList.add : ajoute une classe CSS
    // IMPORTANT : ne remplace pas les classes existantes
    element.classList.add("active");

    console.log("Classe 'active' ajoutée");
}

// Exercice 5.2 : Basculer une classe CSS
function exercice5_2() {
    const element = document.getElementById("element-classe");

    // classList.toggle : ajoute la classe si elle n'existe pas, la retire sinon
    element.classList.toggle("highlight");

    console.log("Classe 'highlight' basculée");

    // Autres méthodes utiles :
    // element.classList.remove("active");  // Retire une classe
    // element.classList.contains("active"); // Vérifie si une classe existe
    // element.classList.replace("active", "inactive"); // Remplace une classe
}

// SECTION 6 : GESTION DES ATTRIBUTS
// ==========================================

// Exercice 6.1 : Modifier un attribut
function exercice6_1() {
    const image = document.getElementById("mon-image");

    // setAttribute : ajoute ou modifie un attribut
    image.setAttribute("alt", "Image modifiée");
    image.setAttribute("title", "Ceci est une image");

    // On peut aussi modifier directement la propriété
    image.src = "https://via.placeholder.com/150";

    const resultat = document.getElementById("resultat-6");
    resultat.textContent = "Attributs modifiés : alt='" + image.alt + "'";
}

// Exercice 6.2 : Récupérer un attribut
function exercice6_2() {
    const image = document.getElementById("mon-image");

    // getAttribute : récupère la valeur d'un attribut
    const alt = image.getAttribute("alt");
    const src = image.getAttribute("src");

    const resultat = document.getElementById("resultat-6");
    resultat.innerHTML = "<strong>Attributs :</strong><br>";
    resultat.innerHTML += "alt : " + alt + "<br>";
    resultat.innerHTML += "src : " + src;
}

// SECTION 7 : MODIFICATION DES STYLES
// ==========================================

// Exercice 7.1 : Modifier une propriété CSS
function exercice7_1() {
    const element = document.getElementById("element-style");

    // Modification via .style : accès direct aux propriétés CSS
    // ATTENTION : les propriétés CSS avec tirets deviennent camelCase
    // Exemple : "background-color" devient "backgroundColor"

    element.style.color = "white";
    element.style.backgroundColor = "blue";
    element.style.padding = "10px";
    element.style.borderRadius = "5px";

    console.log("Style modifié");
}

// Exercice 7.2 : Modifier plusieurs styles à la fois
function exercice7_2() {
    const element = document.getElementById("element-style");

    // Modification directe via cssText
    element.style.cssText = "background-color: green; color: white; font-size: 18px; padding: 15px; border: 2px solid darkgreen; border-radius: 8px;";

    // Alternative : utiliser un objet (méthode Object.assign)
    // Object.assign(element.style, {
    //   backgroundColor: "green",
    //   color: "white",
    //   fontSize: "18px",
    //   padding: "15px"
    // });

    console.log("Plusieurs styles modifiés");
}

// SECTION 8 : NAVIGATION DANS LE DOM
// ==========================================

// Exercice 8.1 : Accéder aux enfants d'un élément
function exercice8_1() {
    const parent = document.getElementById("liste-parent");

    // children : retourne une collection des éléments enfants (uniquement les balises)
    const enfants = parent.children;

    console.log("Nombre d'enfants : " + enfants.length);

    let resultat = "<strong>Enfants de la liste :</strong><br>";

    // Parcourir les enfants
    for (let i = 0; i < enfants.length; i++) {
        resultat += "- " + enfants[i].textContent + "<br>";
    }

    document.getElementById("resultat-8").innerHTML = resultat;

    // Autres méthodes de navigation :
    // parent.childNodes : retourne tous les nœuds (texte, balises, etc.)
    // parent.firstChild : premier enfant (peut être un nœud texte)
    // parent.firstElementChild : premier élément enfant
    // parent.lastElementChild : dernier élément enfant
}

// Exercice 8.2 : Accéder au parent d'un élément
function exercice8_2() {
    const enfant = document.getElementById("deuxieme");

    // parentElement : retourne l'élément parent
    const parent = enfant.parentElement;

    console.log("Parent : " + parent.tagName); // "UL"

    let resultat = "<strong>Navigation vers le parent :</strong><br>";
    resultat += "Élément actuel : " + enfant.textContent + "<br>";
    resultat += "Parent : " + parent.tagName + "<br>";

    // Remonter jusqu'au body
    let currentElement = enfant;
    let niveaux = 0;
    while (currentElement.parentElement) {
        currentElement = currentElement.parentElement;
        niveaux++;
        resultat += "Niveau " + niveaux + " : " + currentElement.tagName + "<br>";
    }

    document.getElementById("resultat-8").innerHTML = resultat;

    // Autres méthodes :
    // enfant.nextElementSibling : frère suivant
    // enfant.previousElementSibling : frère précédent
}