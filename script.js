let scoreJoueur = 0;
let scoreOrdi = 0;
let manche = 0;

function jouer(choixJoueur){

    const choix = ["Pierre", "Papier", "Ciseaux"];

    let choixOrdi =
    choix[Math.floor(Math.random() * 3)];

    manche++;

    document.getElementById("manche").textContent = manche;
    document.getElementById("choixJoueur").textContent = choixJoueur;
    document.getElementById("choixOrdi").textContent = choixOrdi;

    let resultat = "";

    if(choixJoueur === choixOrdi){
        resultat = "Égalité";
    }

    else if(
        (choixJoueur === "Pierre" && choixOrdi === "Ciseaux") ||
        (choixJoueur === "Papier" && choixOrdi === "Pierre") ||
        (choixJoueur === "Ciseaux" && choixOrdi === "Papier")
    ){
        resultat = "Vous gagnez 🎉 !";
        scoreJoueur++;
    }

    else{
        resultat = "Vous perdez 😣 !";
        scoreOrdi++;
    }

    document.getElementById("resultat").textContent = resultat;
    document.getElementById("scoreJoueur").textContent = scoreJoueur;
    document.getElementById("scoreOrdi").textContent = scoreOrdi;
}
