// ==========================================
// BASE DE DONNÉES DES LOGEMENTS
// Pour ajouter un logement : copiez un bloc { ... } et modifiez-le.
// "lien" = fichier HTML de détails du logement (detailsN.html).
// ==========================================

const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#e9ecef"/><text x="50%" y="50%" font-size="40" text-anchor="middle" fill="#888" font-family="Arial">🏠 Photo indisponible</text></svg>'
);

const U = (id) => "https://images.unsplash.com/photo-" + id + "?q=80&w=900&auto=format&fit=crop";

const LOGEMENTS = [
    {
        id: 1, titre: "Appartement moderne", ville: "Douala", quartier: "Bonamoussadi",
        type: "Appartement", prix: 150000, chambres: 1, sdb: 1, salon: 1, superficie: 120,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        lien: "details.html"
    },
    {
        id: 2, titre: "Studio moderne", ville: "Douala", quartier: "Makepe",
        type: "Studio", prix: 80000, chambres: 1, sdb: 1, salon: 0, superficie: 45,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        lien: "details2.html"
    },
    {
        id: 3, titre: "Grande maison familiale", ville: "Yaoundé", quartier: "Bastos",
        type: "Maison", prix: 250000, chambres: 2, sdb: 1, salon: 1, superficie: 250, jardin: true,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        lien: "details3.html"
    },
    {
        id: 4, lien: "details4.html", titre: "Studio étudiant", ville: "Douala", quartier: "Logbessou",
        type: "Studio", prix: 40000, chambres: 1, sdb: 1, salon: 0, superficie: 25,
        photos: [
            { src: U("1502672260266-1c1ef2d93688"), label: "🛋️ Pièce principale" },
            { src: U("1540518614846-7eded433c457"), label: "🛏️ Coin nuit" },
            { src: U("1556020685-ae41abfc9365"), label: "🍳 Coin cuisine" },
            { src: U("1584622650111-993a426fbf0a"), label: "🚿 Douche" }
        ],
        description: "Petit studio simple et propre, idéal pour un étudiant, proche des transports et des commerces.",
        equipements: ["Eau disponible", "Électricité", "Sécurité"],
        proprietaire: { nom: "Paul Mbarga", tel: "+237 677 000 001", email: "paul@gmail.com" }
    },
    {
        id: 5, lien: "details5.html", titre: "Appartement 2 chambres", ville: "Douala", quartier: "Akwa",
        type: "Appartement", prix: 120000, chambres: 2, sdb: 1, salon: 1, superficie: 85,
        photos: [
            { src: U("1560448204-e02f11c3d0e2"), label: "🏢 Vue de l'appartement" },
            { src: U("1618221195710-dd6b41faaea6"), label: "🛋️ Salon" },
            { src: U("1556909114-f6e7ad7d3136"), label: "🍳 Cuisine équipée" },
            { src: U("1616594039964-ae9021a400a0"), label: "🛏️ Chambre" },
            { src: U("1620626011761-996317b8d101"), label: "🚿 Salle de bain" }
        ],
        description: "Appartement lumineux en plein centre d'Akwa, proche des commerces, banques et restaurants.",
        equipements: ["Eau disponible", "Électricité", "Parking", "Sécurité", "Cuisine équipée"],
        proprietaire: { nom: "Sandrine Tchoua", tel: "+237 677 000 002", email: "sandrine@gmail.com" }
    },
    {
        id: 6, lien: "details6.html", titre: "Villa de standing", ville: "Douala", quartier: "Bonapriso",
        type: "Maison", prix: 300000, chambres: 4, sdb: 3, salon: 2, superficie: 320, jardin: true,
        photos: [
            { src: U("1512917774080-9991f1c4c750"), label: "🏡 Façade de la villa" },
            { src: U("1600596542815-ffad4c1539a9"), label: "🌳 Extérieur et jardin" },
            { src: U("1586023492125-27b2c045efd7"), label: "🛋️ Grand salon" },
            { src: U("1556911220-bff31c812dba"), label: "🍳 Cuisine" },
            { src: U("1560448075-bb485b067938"), label: "🛏️ Chambre principale" },
            { src: U("1571508601891-ca5e7a713859"), label: "🚿 Salle de bain" }
        ],
        description: "Belle villa dans le quartier résidentiel de Bonapriso, avec jardin, garage et gardien.",
        equipements: ["Eau disponible", "Électricité", "Parking", "Jardin", "Sécurité", "Grande cuisine"],
        proprietaire: { nom: "Jean-Claude Essomba", tel: "+237 677 000 003", email: "jc@gmail.com" }
    },
    {
        id: 7, lien: "details7.html", titre: "Studio meublé", ville: "Yaoundé", quartier: "Mvan",
        type: "Studio", prix: 60000, chambres: 1, sdb: 1, salon: 0, superficie: 30,
        photos: [
            { src: U("1493809842364-78817add7ffb"), label: "🛋️ Pièce meublée" },
            { src: U("1583847268964-b28dc8f51f92"), label: "🛏️ Coin salon" },
            { src: U("1556912172-45b7abe8b7e1"), label: "🍳 Cuisine" },
            { src: U("1507652313519-d4e9174996dd"), label: "🚿 Douche" }
        ],
        description: "Studio meublé et climatisé, calme, proche de la gare routière de Mvan.",
        equipements: ["Eau disponible", "Électricité", "Meublé", "Sécurité"],
        proprietaire: { nom: "Aline Fouda", tel: "+237 677 000 004", email: "aline@gmail.com" }
    },
    {
        id: 8, lien: "details8.html", titre: "Appartement familial", ville: "Yaoundé", quartier: "Biyem-Assi",
        type: "Appartement", prix: 100000, chambres: 3, sdb: 2, salon: 1, superficie: 110,
        photos: [
            { src: U("1522708323590-d24dbb6b0267"), label: "🏢 Vue de l'appartement" },
            { src: U("1567538096630-e0c55bd6374c"), label: "🛋️ Salon" },
            { src: U("1556228453-efd6c1ff04f6"), label: "🍳 Cuisine" },
            { src: U("1505693416388-ac5ce068fe85"), label: "🛏️ Chambre" },
            { src: U("1584622781564-1d987f7333c1"), label: "🚿 Salle de bain" }
        ],
        description: "Grand appartement familial dans un quartier vivant de Yaoundé, accès facile aux écoles et marchés.",
        equipements: ["Eau disponible", "Électricité", "Parking", "Cuisine équipée", "Sécurité"],
        proprietaire: { nom: "Roger Nkoulou", tel: "+237 677 000 005", email: "roger@gmail.com" }
    },
    {
        id: 9, lien: "details9.html", titre: "Maison avec jardin", ville: "Bafoussam", quartier: "Tamdja",
        type: "Maison", prix: 90000, chambres: 3, sdb: 2, salon: 1, superficie: 180, jardin: true,
        photos: [
            { src: U("1564013799919-ab600027ffc6"), label: "🏡 Façade de la maison" },
            { src: U("1416331108676-a22ccb276e35"), label: "🌳 Jardin" },
            { src: U("1493663284031-b7e3aefcae8e"), label: "🛋️ Salon" },
            { src: U("1484154218962-a197022b5858"), label: "🍳 Cuisine" },
            { src: U("1631049307264-da0ec9d70304"), label: "🛏️ Chambre" }
        ],
        description: "Maison spacieuse avec jardin à Tamdja, dans un environnement calme et sécurisé.",
        equipements: ["Eau disponible", "Électricité", "Jardin", "Parking", "Espace extérieur"],
        proprietaire: { nom: "Clarisse Kamga", tel: "+237 677 000 006", email: "clarisse@gmail.com" }
    },
    {
        id: 10, lien: "details10.html", titre: "Studio économique", ville: "Bafoussam", quartier: "Kamkop",
        type: "Studio", prix: 35000, chambres: 1, sdb: 1, salon: 0, superficie: 22,
        photos: [
            { src: U("1536376072261-38c75010e6c9"), label: "🛋️ Pièce principale" },
            { src: U("1507089947368-19c1da9775ae"), label: "🍳 Coin cuisine" },
            { src: U("1564540586988-aa4e53c3d799"), label: "🚿 Douche" }
        ],
        description: "Studio économique et fonctionnel, proche de l'université et des transports.",
        equipements: ["Eau disponible", "Électricité"],
        proprietaire: { nom: "Hervé Tagne", tel: "+237 677 000 007", email: "herve@gmail.com" }
    },
    {
        id: 11, lien: "details11.html", titre: "Appartement neuf", ville: "Garoua", quartier: "Poumpoumré",
        type: "Appartement", prix: 70000, chambres: 2, sdb: 1, salon: 1, superficie: 75,
        photos: [
            { src: U("1545324418-cc1a3fa10c00"), label: "🏢 Immeuble" },
            { src: U("1555041469-a586c61ea9bc"), label: "🛋️ Salon" },
            { src: U("1556912998-c57cc6b63cd7"), label: "🍳 Cuisine" },
            { src: U("1598928506311-c55ded91a20c"), label: "🛏️ Chambre" }
        ],
        description: "Appartement neuf avec finitions modernes, situé dans un quartier calme de Garoua.",
        equipements: ["Eau disponible", "Électricité", "Parking", "Sécurité"],
        proprietaire: { nom: "Abdou Hamadou", tel: "+237 677 000 008", email: "abdou@gmail.com" }
    },
    {
        id: 12, lien: "details12.html", titre: "Maison traditionnelle rénovée", ville: "Garoua", quartier: "Roumdé Adjia",
        type: "Maison", prix: 55000, chambres: 3, sdb: 1, salon: 1, superficie: 150,
        photos: [
            { src: U("1568605114967-8130f3a36994"), label: "🏡 Façade de la maison" },
            { src: U("1585320806297-9794b3e4eeae"), label: "🌿 Cour" },
            { src: U("1513694203232-719a280e022f"), label: "🛋️ Salon" },
            { src: U("1565183997392-2f6f122e5912"), label: "🍳 Cuisine" },
            { src: U("1560185007-cde436f6a4d0"), label: "🛏️ Chambre" }
        ],
        description: "Maison rénovée avec grande cour, proche du centre-ville de Garoua.",
        equipements: ["Eau disponible", "Électricité", "Espace extérieur", "Sécurité"],
        proprietaire: { nom: "Fatima Bello", tel: "+237 677 000 009", email: "fatima@gmail.com" }
    },
    {
        id: 13, lien: "details13.html", titre: "Appartement économique", ville: "Douala", quartier: "Ndogbong",
        type: "Appartement", prix: 50000, chambres: 1, sdb: 1, salon: 1, superficie: 50,
        photos: [
            { src: U("1505691938895-1758d7feb511"), label: "🛋️ Salon" },
            { src: U("1600489000022-c2086d79f9d4"), label: "🍳 Cuisine" },
            { src: U("1560185127-6ed189bf02f4"), label: "🛏️ Chambre" }
        ],
        description: "Appartement abordable avec salon et chambre, bien desservi par les taxis et motos.",
        equipements: ["Eau disponible", "Électricité", "Sécurité"],
        proprietaire: { nom: "Estelle Ndongo", tel: "+237 677 000 010", email: "estelle@gmail.com" }
    },
    {
        id: 14, lien: "details14.html", titre: "Maison de 3 chambres", ville: "Yaoundé", quartier: "Odza",
        type: "Maison", prix: 130000, chambres: 3, sdb: 2, salon: 1, superficie: 200, jardin: true,
        photos: [
            { src: U("1570129477492-45c003edd2be"), label: "🏡 Façade de la maison" },
            { src: U("1600573472550-8090b5e0745e"), label: "🌿 Cour et parking" },
            { src: U("1616486338812-3dadae4b4ace"), label: "🛋️ Salon" },
            { src: U("1600210492486-724fe5c67fb0"), label: "🛏️ Intérieur" }
        ],
        description: "Maison de 3 chambres avec cour et parking, dans un quartier résidentiel d'Odza.",
        equipements: ["Eau disponible", "Électricité", "Parking", "Jardin", "Sécurité"],
        proprietaire: { nom: "Thierry Manga", tel: "+237 677 000 011", email: "thierry@gmail.com" }
    }
];

// Image de la carte = première photo du logement
LOGEMENTS.forEach(function (l) {
    if (!l.image && l.photos && l.photos.length) {
        l.image = l.photos[0].src;
    }
});
