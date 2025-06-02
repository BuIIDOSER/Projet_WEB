// Menu mobile : affichage/masquage
document.getElementById('menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});

// Données des régions métropolitaines
const regionData = {
    "hauts-de-france": {
        name: "Hauts-de-France",
        description: "Région côtière du nord de la France, avec la Manche et la mer du Nord, des estuaires importants et de nombreux étangs.",
        ecosystems: ["Estuaires", "Zones humides", "Mer du Nord", "Manche"],
        species: ["Phoque veau-marin", "Bar commun", "Sole", "Moule commune"]
    },
    "grand-est": {
        name: "Grand Est",
        description: "Région traversée par de grands fleuves comme le Rhin et la Moselle, avec de nombreux lacs et étangs.",
        ecosystems: ["Fleuves", "Lacs", "Étangs", "Zones humides"],
        species: ["Brochet", "Sandre", "Écrevisse à pattes rouges", "Truite fario"]
    },
    "normandie": {
        name: "Normandie",
        description: "Région côtière avec des falaises, des estuaires importants comme celui de la Seine, et des zones humides.",
        ecosystems: ["Estuaires", "Manche", "Zones humides", "Marais"],
        species: ["Huître plate", "Coquille Saint-Jacques", "Maquereau", "Saumon atlantique"]
    },
    "ile-de-france": {
        name: "Île-de-France",
        description: "Région traversée par la Seine et la Marne, avec de nombreux étangs et lacs artificiels.",
        ecosystems: ["Rivières", "Étangs", "Lacs artificiels"],
        species: ["Perche", "Gardon", "Brème", "Silure"]
    },
    "bretagne": {
        name: "Bretagne",
        description: "Péninsule avec un littoral très découpé, des rias, des îles et une biodiversité marine exceptionnelle.",
        ecosystems: ["Océan Atlantique", "Manche", "Estuaires", "Rias"],
        species: ["Homard européen", "Lieu jaune", "Sardine", "Ormeaux"]
    },
    "pays-de-la-loire": {
        name: "Pays de la Loire",
        description: "Région traversée par la Loire et ses affluents, avec des zones humides importantes comme le Marais poitevin.",
        ecosystems: ["Estuaire de la Loire", "Marais", "Océan Atlantique", "Zones humides"],
        species: ["Anguille européenne", "Alose", "Lamproie marine", "Mulet"]
    },
    "centre-val-de-loire": {
        name: "Centre-Val de Loire",
        description: "Région traversée par la Loire et ses affluents, avec de nombreux étangs notamment en Sologne.",
        ecosystems: ["Loire", "Étangs", "Zones humides"],
        species: ["Castor d'Europe", "Brochet", "Carpe", "Écrevisse à pattes blanches"]
    },
    "bourgogne-franche-comte": {
        name: "Bourgogne-Franche-Comté",
        description: "Région traversée par la Saône, avec de nombreux lacs, étangs et rivières.",
        ecosystems: ["Rivières", "Lacs", "Étangs"],
        species: ["Truite", "Ombre commun", "Apron du Rhône", "Écrevisse à pieds blancs"]
    },
    "nouvelle-aquitaine": {
        name: "Nouvelle-Aquitaine",
        description: "Région avec un long littoral atlantique, des estuaires importants comme celui de la Gironde, et de nombreux lacs.",
        ecosystems: ["Océan Atlantique", "Estuaires", "Lacs côtiers", "Marais"],
        species: ["Bar", "Dorade royale", "Huître de Marennes-Oléron", "Lamproie"]
    },
    "auvergne-rhone-alpes": {
        name: "Auvergne-Rhône-Alpes",
        description: "Région avec de nombreux lacs alpins, des rivières de montagne et le Rhône.",
        ecosystems: ["Lacs alpins", "Rivières de montagne", "Rhône"],
        species: ["Omble chevalier", "Truite lacustre", "Chabot", "Ombre commun"]
    },
    "occitanie": {
        name: "Occitanie",
        description: "Région avec un littoral méditerranéen, des lagunes côtières et des rivières.",
        ecosystems: ["Mer Méditerranée", "Lagunes", "Rivières", "Étangs côtiers"],
        species: ["Loup", "Daurade", "Anguille", "Hippocampe moucheté"]
    },
    "provence-alpes-cote-d-azur": {
        name: "Provence-Alpes-Côte d'Azur",
        description: "Région méditerranéenne avec un littoral varié, des calanques, des îles et une riche biodiversité marine.",
        ecosystems: ["Mer Méditerranée", "Calanques", "Îles", "Rivières alpines"],
        species: ["Mérou brun", "Corb", "Posidonie", "Gorgone rouge"]
    },
    "corse": {
        name: "Corse",
        description: "Île méditerranéenne avec un littoral préservé, des rivières et torrents de montagne.",
        ecosystems: ["Mer Méditerranée", "Rivières", "Torrents"],
        species: ["Corail rouge", "Patelle géante", "Truite macrostigma", "Grande nacre"]
    }
};

function showRegionInfo(regionId) {
    const infoBox = document.getElementById("region-info");

    const region = regionData[regionId];

    if (!region) {
        infoBox.innerHTML = `
            <h3 class="text-2xl font-bold text-sky-800 mb-4">Région inconnue</h3>
            <p class="text-gray-700">Aucune donnée disponible pour cette région.</p>
        `;
        return;
    }

    const ecosystemList = region.ecosystems.map(e => `<li>${e}</li>`).join("");
    const speciesList = region.species.map(s => `<li>${s}</li>`).join("");

    infoBox.innerHTML = `
        <h3 class="text-2xl font-bold text-sky-800 mb-4">${region.name.toUpperCase()}</h3>
        <p class="text-gray-700 mb-4">${region.description}</p>
        <div class="mb-4">
            <h4 class="text-sky-700 font-semibold mb-2">Écosystèmes :</h4>
            <ul class="list-disc list-inside text-gray-700">${ecosystemList}</ul>
        </div>
        <div>
            <h4 class="text-sky-700 font-semibold mb-2">Espèces emblématiques :</h4>
            <ul class="list-disc list-inside text-gray-700">${speciesList}</ul>
        </div>
    `;
}

// Données des territoires d'outre-mer
const outremerData = {
    "guadeloupe": {
        name: "Guadeloupe",
        description: "Archipel des Caraïbes composé de deux îles principales et de plusieurs îles plus petites, entouré de récifs coralliens et de mangroves.",
        ecosystems: ["Récifs coralliens", "Mangroves", "Herbiers marins", "Lagons"],
        species: ["Tortue imbriquée", "Lamantin", "Mérou de Nassau", "Langouste blanche"],
        threats: ["Blanchissement des coraux", "Pollution", "Surpêche", "Espèces invasives"],
        conservation: "La Guadeloupe abrite le Parc National de la Guadeloupe et le Grand Cul-de-Sac Marin, une réserve de biosphère UNESCO qui protège les écosystèmes marins."
    },
    "martinique": {
        name: "Martinique",
        description: "Île volcanique des Caraïbes avec des écosystèmes marins diversifiés, des mangroves et des récifs coralliens.",
        ecosystems: ["Récifs coralliens", "Mangroves", "Herbiers marins", "Baies"],
        species: ["Tortue verte", "Dauphin tacheté pantropical", "Poisson-lion (invasif)", "Oursin blanc"],
        threats: ["Urbanisation côtière", "Pollution agricole", "Espèces invasives", "Changement climatique"],
        conservation: "La Martinique possède plusieurs aires marines protégées, dont la Réserve Naturelle Marine du Prêcheur."
    },
    "guyane": {
        name: "Guyane",
        description: "Territoire d'Amérique du Sud avec une façade atlantique, de grands fleuves et des zones humides.",
        ecosystems: ["Mangroves", "Estuaires", "Fleuves", "Marais"],
        species: ["Caïman noir", "Mérou géant", "Dauphin de Guyane", "Tortue luth"],
        threats: ["Orpaillage illégal", "Déforestation", "Pollution des eaux", "Pêche non réglementée"],
        conservation: "La Réserve Naturelle de l'Amana protège les sites de ponte des tortues marines sur le littoral guyanais."
    },
    "reunion": {
        name: "La Réunion",
        description: "Île volcanique de l'océan Indien avec des récifs coralliens, des lagons et une faune marine diversifiée.",
        ecosystems: ["Récifs coralliens", "Lagons", "Côtes rocheuses", "Ravines"],
        species: ["Baleine à bosse", "Tortue verte", "Poisson-clown", "Corail corne de cerf"],
        threats: ["Urbanisation côtière", "Ruissellement et sédimentation", "Surfréquentation touristique", "Changement climatique"],
        conservation: "La Réserve Naturelle Marine de La Réunion protège les récifs coralliens de la côte ouest de l'île."
    },
    "mayotte": {
        name: "Mayotte",
        description: "Île de l'archipel des Comores abritant l'un des plus grands lagons fermés du monde et une biodiversité marine exceptionnelle.",
        ecosystems: ["Lagon", "Récifs coralliens", "Mangroves", "Herbiers marins"],
        species: ["Dugong", "Tortue verte", "Raie manta", "Baleine à bosse"],
        threats: ["Sédimentation", "Pollution", "Pêche illégale", "Urbanisation côtière"],
        conservation: "Le Parc Naturel Marin de Mayotte, créé en 2010, est le premier parc naturel marin d'outre-mer."
    },
    "polynesie": {
        name: "Polynésie française",
        description: "Vaste archipel du Pacifique Sud composé de 118 îles réparties en cinq archipels, avec des atolls, des lagons et une biodiversité marine exceptionnelle.",
        ecosystems: ["Récifs coralliens", "Lagons", "Atolls", "Passes océaniques"],
        species: ["Raie manta", "Requin pointe noire", "Napoléon", "Bénitier géant"],
        threats: ["Changement climatique", "Acidification des océans", "Tourisme non durable", "Surpêche"],
        conservation: "La Polynésie française a créé Tainui Atea, une aire marine protégée de 5 millions de km², la plus grande au monde."
    }
};

// Interaction avec les régions métropolitaines
document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('click', function() {
        const regionId = this.id;
        const data = regionData[regionId];
                
        // Retire la classe active de toutes les régions
        document.querySelectorAll('.region').forEach(r => {
            r.classList.remove('region-active');
        });
                
        // Ajoute la classe active à la région sélectionnée
        this.classList.add('region-active');
                
        // Affiche les infos dans le panneau
        const infoPanel = document.getElementById('region-info');
        infoPanel.innerHTML = `
            <h3 class="text-2xl font-bold text-sky-800 mb-4">${data.name}</h3>
            <p class="text-gray-700 mb-4">${data.description}</p>
            <div class="mb-4">
                <h4 class="font-bold text-sky-700 mb-2">Écosystèmes principaux :</h4>
                <ul class="list-disc pl-5 text-gray-700">
                    ${data.ecosystems.map(eco => `<li>${eco}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-sky-700 mb-2">Espèces emblématiques :</h4>
                <ul class="list-disc pl-5 text-gray-700">
                    ${data.species.map(species => `<li>${species}</li>`).join('')}
                </ul>
            </div>
        `;
    });
});

// Affichage de la modale pour les territoires d'outre-mer
function showOutremerInfo(territoryId) {
    const data = outremerData[territoryId];
    const modal = document.getElementById('outremer-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
            
    // Mise à jour du contenu
    title.textContent = data.name;
    content.innerHTML = `
        <p class="text-gray-700 mb-4">${data.description}</p>
                
        <div class="mb-4">
            <h4 class="font-bold text-sky-700 mb-2">Écosystèmes principaux :</h4>
            <ul class="list-disc pl-5 text-gray-700">
                ${data.ecosystems.map(eco => `<li>${eco}</li>`).join('')}
            </ul>
        </div>
                
        <div class="mb-4">
            <h4 class="font-bold text-sky-700 mb-2">Espèces emblématiques :</h4>
            <ul class="list-disc pl-5 text-gray-700">
                ${data.species.map(species => `<li>${species}</li>`).join('')}
            </ul>
        </div>
                
        <div class="mb-4">
            <h4 class="font-bold text-sky-700 mb-2">Menaces principales :</h4>
            <ul class="list-disc pl-5 text-gray-700">
                ${data.threats.map(threat => `<li>${threat}</li>`).join('')}
            </ul>
        </div>
                
        <div>
            <h4 class="font-bold text-sky-700 mb-2">Conservation :</h4>
            <p class="text-gray-700">${data.conservation}</p>
        </div>
                
        <div class="mt-6">
            <a href="especes.html#${territoryId}" class="inline-block bg-sky-600 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 transition duration-300">Voir les espèces de ce territoire</a>
        </div>
    `;
            
    // Affiche la modale
    modal.classList.remove('hidden');
}

// Fermeture de la modale
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('outremer-modal').classList.add('hidden');
});

console.log("scriptProj1.js chargé"); // Pour vérifier que le fichier est bien chargé

document.addEventListener('DOMContentLoaded', () => {
      console.log("DOM prêt !");
      fetch('../data/especes.json')
        .then(response => {
          if (!response.ok) throw new Error('JSON non trouvé !');
          return response.json();
        })
        .then(data => {
          console.log("JSON récupéré :", data);
          afficherEspeces(data);
        })
        .catch(error => console.error('Erreur fetch :', error));
    });

    function afficherEspeces(especes) {
      const tableBody = document.getElementById('species-table-body');
      tableBody.innerHTML = '';
      especes.forEach(espece => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${espece.nom}</td>
          <td>${espece.groupe}</td>
          <td>${espece.region}</td>
          <td>${espece.habitat}</td>
          <td>${espece.statut}</td>
        `;
        tableBody.appendChild(row);
      });
    }