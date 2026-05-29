const resultat = document.getElementById("resultat");
const scoreElement = document.getElementById("score");
const manchesElement = document.getElementById("manches");
const joueurChoix =
document.getElementById("joueurChoix");
const ordiChoix =
document.getElementById("ordiChoix");

let score = 0;

let manches = 0;

function jouer(choixJoueur) {

    manches++;

    manchesElement.textContent = manches;

    const choixOrdinateur =
    choixAleatoire();

    joueurChoix.textContent =
    choixJoueur;

    ordiChoix.textContent =
    choixOrdinateur;

    if (choixJoueur === choixOrdinateur) {

        resultat.textContent =
        "Égalité 🤝";

        resultat.style.color = "white";
    }

    else if (

        (choixJoueur === "pierre" &&
        choixOrdinateur === "ciseaux")

        ||

        (choixJoueur === "papier" &&
        choixOrdinateur === "pierre")

        ||

        (choixJoueur === "ciseaux" &&
        choixOrdinateur === "papier")

    ) {

        score++;

        resultat.textContent =
        "Tu as gagné 🎉";

        resultat.style.color =
        "lightgreen";
    }

    else {

        resultat.textContent =
        "Tu as perdu 😢";

        resultat.style.color =
        "red";
    }

    scoreElement.textContent = score;

    resultat.style.animation = "none";

    setTimeout(() => {

        resultat.style.animation =
        "pulse 0.5s";

    }, 10);
}

function choixAleatoire() {

    const choix = [

        "pierre",

        "papier",

        "ciseaux"
    ];

    const nombreAleatoire =
    Math.floor(Math.random() * 3);

    return choix[nombreAleatoire];
}


       
   
