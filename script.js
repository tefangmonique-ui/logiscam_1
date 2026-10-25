// ==========================================
// MENU MOBILE
// ==========================================

function ouvrirMenu() {
    const menu = document.querySelector(".nav-links");
    if (menu) {
        menu.classList.toggle("active");
    }
}

document.querySelectorAll(".nav-links a").forEach(function (lien) {
    lien.addEventListener("click", function () {
        const menu = document.querySelector(".nav-links");
        if (menu) {
            menu.classList.remove("active");
        }
    });
});


// ==========================================
// OUTILS
// ==========================================

function formaterPrix(prix) {
    return String(prix).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " FCFA / mois";
}

function pluriel(n, mot) {
    return n + " " + mot + (n > 1 ? "s" : "");
}

function lienDetails(logement) {
    return logement.lien;
}


// ==========================================
// AFFICHAGE DES CARTES
// ==========================================

function creerCarte(l) {

    let caracteristiques =
        "🛏️ " + pluriel(l.chambres, "chambre") + " &nbsp; " +
        "🚿 " + pluriel(l.sdb, "salle") + " de bain &nbsp; " +
        "🍳 1 cuisine";

    if (l.salon > 0) {
        caracteristiques += " &nbsp; 🛋️ " + pluriel(l.salon, "salon");
    }

    if (l.jardin) {
        caracteristiques += " &nbsp; 🌳 1 jardin";
    }

    return `
        <article class="card">
            <div class="image">
                <img src="${l.image}" alt="${l.titre}" loading="lazy"
                     onerror="this.onerror=null;this.src=PLACEHOLDER;">
                <span>Disponible</span>
            </div>

            <div class="card-content">
                <h3>${l.titre}</h3>
                <p>📍 ${l.quartier}, ${l.ville}</p>
                <p class="type-tag">🏠 ${l.type} · 📐 ${l.superficie} m²</p>
                <p>${caracteristiques}</p>

                <div class="card-bottom">
                    <strong>${formaterPrix(l.prix)}</strong>
                    <a href="${lienDetails(l)}" class="details-btn">Voir détails</a>
                </div>
            </div>
        </article>
    `;
}

function afficherLogements(liste, filtreActif) {

    const conteneur = document.getElementById("cards");
    const info = document.getElementById("resultats-info");

    if (!conteneur) {
        return;
    }

    if (liste.length === 0) {
        conteneur.innerHTML = `
            <div class="aucun-resultat">
                <h3>😕 Aucun logement trouvé</h3>
                <p>Essayez de modifier vos critères (ville, type ou budget).</p>
                <button class="btn-reset" onclick="reinitialiser()">Voir tous les logements</button>
            </div>
        `;
    } else {
        conteneur.innerHTML = liste.map(creerCarte).join("");
    }

    if (info) {
        if (filtreActif) {
            info.innerHTML = "🔎 <strong>" + pluriel(liste.length, "logement") +
                "</strong> trouvé" + (liste.length > 1 ? "s" : "") +
                ' &nbsp; <button class="btn-reset" onclick="reinitialiser()">✖ Effacer les filtres</button>';
        } else {
            info.textContent = "Découvrez nos " + liste.length + " logements disponibles";
        }
    }
}


// ==========================================
// RECHERCHE AUTOMATIQUE
// ==========================================

function filtrerLogements() {

    const ville = document.getElementById("ville").value;
    const type = document.getElementById("type").value;
    const prix = document.getElementById("prix").value;

    const resultat = LOGEMENTS.filter(function (l) {
        return (ville === "" || l.ville === ville) &&
               (type === "" || l.type === type) &&
               (prix === "" || l.prix <= Number(prix));
    });

    // Du moins cher au plus cher
    resultat.sort(function (a, b) { return a.prix - b.prix; });

    afficherLogements(resultat, ville !== "" || type !== "" || prix !== "");
}

// Bouton "Rechercher" : filtre puis descend vers les résultats
function rechercher() {

    filtrerLogements();

    const section = document.getElementById("logements");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function reinitialiser() {
    ["ville", "type", "prix"].forEach(function (id) {
        document.getElementById(id).value = "";
    });
    filtrerLogements();
}

// Les résultats se mettent à jour dès qu'un critère change
["ville", "type", "prix"].forEach(function (id) {
    const champ = document.getElementById(id);
    if (champ) {
        champ.addEventListener("change", filtrerLogements);
    }
});

// Affichage initial
if (document.getElementById("cards")) {
    filtrerLogements();
}


// ==========================================
// BOUTON CONTACT / RETOUR EN HAUT
// ==========================================

function contacter() {
    const contact = document.getElementById("contact");
    if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
    }
}

window.addEventListener("scroll", function () {
    const boutonHaut = document.getElementById("boutonHaut");
    if (!boutonHaut) {
        return;
    }
    boutonHaut.style.display = window.scrollY > 300 ? "block" : "none";
});

function retourEnHaut() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// ==========================================
// CLIC SUR UNE VILLE (section "Explorez par ville")
// ==========================================

function choisirVille(nom) {
    document.getElementById("ville").value = nom;
    rechercher();
}
