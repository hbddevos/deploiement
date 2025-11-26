console.log("Bienvenu dans kla console où nous allons pratiquer du JS")
let nomDeFamille = "ABALO";
let nom_de_famille = "AFI";


let phrase = 'Bienvenue dans l\'émission ';


mot = "Bienvenue dans l'école";

console.log(mot);

console.log("=========================== Pause =========================");

let route = "N1";
let carrefour = "Shell1";

if (carrefour == "Shell1" && route == "N16") {
    console.log("Je prends la route de Kétao")
} else {

    console.log("Je prends la route de Bijoulie")
}

if (route == "N1") {
    console.log("Je prends la route de Shell 2")
}


console.log("======================== Boucles / for, while, do----while ===========================")

for (let index = 1; index <= 10; index++) {
    console.log(`Table de 2 :: 2 * ${index} = ${index * 2}`)
}


console.log("=================Boucle while============")


let nombre_de_vie = 3;

while (nombre_de_vie >= 3 && nombre_de_vie <= 10) {
    console.log(`Nombre de vie actuel :::: ${nombre_de_vie}`);
    nombre_de_vie++;
}



console.log("=================Boucle for pour les listes ============")


let noms = ["Manda", "Antaro", "Joël", "Patrice", "Richard", "Noël", "Kondo", "Jean", "Olivier"];


for (let index = 0; index < noms.length; index++) {
    console.log(noms[index])
}


console.log("=================Boucle for of============")
for (const nom of noms) {
    console.log(nom)
}

console.log("=================Boucle foreach ============")
noms.forEach(nom => {

    console.log(nom)
});


console.log("\n================= \n Fonctions \n ============\n");

function tabelParDeux() {
    for (let index = 1; index <= 10; index++) {
        console.log(`Table de 2 :: 2 * ${index} = ${index * 2}`)
    }
}


tabelParDeux()


console.log("\n================= \n Table par N \n =================\n");

function tabelParN(nbre) {
    for (let index = 1; index <= 10; index++) {
        console.log(`Table de ${nbre} :: ${nbre} * ${index} = ${index * nbre}`)
    }
}

tabelParN(8)
console.log("\n================= \n Table par 9 \n =================\n");
tabelParN(9)

console.log("\n================= \n Table par N * N \n =================\n");
function tabelParNParN(nbre, taille) {

    for (let index = 1; index <= taille; index++) {
        console.log(`Table de ${nbre} :: ${nbre} * ${index} = ${index * nbre}`)
    }
}

tabelParNParN(7, 70)


console.log("\n================= \n Fonction calcul aire d'un recatangle \n =================\n");


function calculAireRectangle(longeur, largeur){
    return longeur * largeur;
}


let aireRectangle = calculAireRectangle(7, 7)

console.log(`Aires du rectangle est : ${aireRectangle} Cm²`)


console.log("\n================= \n Fonction calcul aire d'un recatangle \n =================\n");

