const resultat = document.getElementById("resultat");
const scoreElement = document.getElementById("score");

let score = 0;

function jouer(choixJoueur) {

    const choixOrdinateur = choixAleatoire();

    if (choixJoueur === choixOrdinateur) {

        resultat.textContent =
        "Égalité ! L'ordinateur a choisi " + choixOrdinateur;

    }

    else if (

        (choixJoueur === "pierre" && choixOrdinateur === "ciseaux") ||

        (choixJoueur === "papier" && choixOrdinateur === "pierre") ||

        (choixJoueur === "ciseaux" && choixOrdinateur === "papier")

    ) {

        score++;

        resultat.textContent =
        "Tu as gagné ! L'ordinateur a choisi " + choixOrdinateur;

    }

    else {

        resultat.textContent =
        "Tu as perdu ! L'ordinateur a choisi " + choixOrdinateur;

    }

    scoreElement.textContent = "Score : " + score;
}

function choixAleatoire() {

    const choix = ["pierre", "papier", "ciseaux"];

    const nombreAleatoire =
    Math.floor(Math.random() * 3);

    return choix[nombreAleatoire];
}
