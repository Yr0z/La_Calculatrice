// Fonction additionner
function addition(nombreA, nombreB) {

    return nombreA + nombreB;
}

// Fonction multiplier
function multiplication(nombreA, nombreB) {

    return nombreA * nombreB; 
}

// Fonction Soustraire
function soustraction(nombreA, nombreB) {
    
    return nombreA - nombreB;
}

// Fonction Diviser
function division(nombreA, nombreB) {
    if (nombreB == 0) {
        throw new Error ("Impossible de diviser par 0.");
    }

    return nombreA / nombreB;
}

// Boucle Principale 
let restart = false; // Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons pas un calcul.

do {
    // Demande un choix
    let choix;

    do {

        choix = Number(prompt("Quelle opération mathématique souhaitez-vous réaliser\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));

    }while( choix != 1 && choix != 2 && choix != 3 && choix != 4 )

    // Demande deux nombres
    let premierNombre;
    let deuxiemeNombre;

    do {

        premierNombre = Number(prompt("Entrez le premier nombre :\n"));
        deuxiemeNombre = Number(prompt("Entrez le deuxième nombre :\n"));

    }while( isNaN(premierNombre) || isNaN(deuxiemeNombre))

    // Appelle de la fonction choisie.
    try {

        let resultat;

        switch (choix) {

            case 1 :
                resultat = addition(premierNombre, deuxiemeNombre);
                break;

            case 2 :
                resultat = multiplication(premierNombre, deuxiemeNombre);
                break;

            case 3 : 
                resultat = soustraction(premierNombre, deuxiemeNombre);
                break;

            case 4 :
                resultat = division(premierNombre, deuxiemeNombre);
                break;

            default:
                throw new Error("Une erreur est survenue.");
        }
        // Affiche le résultat.
        alert("le résultat de votre opération est : " + resultat);  
    }
    catch (error){
        alert(error); // Si une erreur est survenue, on affiche celle-ci.
    }

    restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boite de dialogue confirm() si l'utilisateur veut recommencer.

} while (restart)



