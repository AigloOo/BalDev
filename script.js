const properties = [
    {
        name: "id",
        description: "Identifiant unique de l'élément.",
        example: "<div id='monElement'></div>",
        exampleDescription: "Cet exemple crée un élément div avec l'identifiant 'monElement'."
    },
    {
        name: "class",
        description: "Attribut de classe pour le CSS.",
        example: "<div class='mon-style'></div>",
        exampleDescription: "Cet exemple crée un élément div avec la classe 'mon-style'."
    },
    {
        name: "style",
        description: "Styles CSS en ligne pour l'élément.",
        example: "<div style='color: red; font-size: 18px;'></div>",
        exampleDescription: "Cet exemple crée un élément div avec le texte en rouge et une taille de police de 18 pixels."
    },
    {
        name: "href",
        description: "URL de destination pour les liens (ancre, lien hypertexte, etc.).",
        example: "<a href='https://www.example.com'>Lien vers example.com</a>",
        exampleDescription: "Cet exemple crée un lien vers le site example.com."
    },
    {
        name: "src",
        description: "URL de la source de l'image.",
        example: "<img src='image.jpg' alt='Description de l'image'>",
        exampleDescription: "Cet exemple affiche une image nommée image.jpg avec une description alternative."
    },
    {
        name: "alt",
        description: "Texte alternatif pour les images.",
        example: "<img src='image.jpg' alt='Description de l'image'>",
        exampleDescription: "Cet exemple affiche une image nommée image.jpg avec une description alternative."
    },
    {
        name: "title",
        description: "Texte supplémentaire qui apparaît lorsqu'un utilisateur survole l'élément avec la souris.",
        example: "<span title='Information supplémentaire'>Texte</span>",
        exampleDescription: "Cet exemple affiche un texte avec des informations supplémentaires qui apparaissent lorsque l'utilisateur survole l'élément."
    },
    {
        name: "placeholder",
        description: "Texte d'exemple affiché dans un champ de saisie de formulaire.",
        example: "<input type='text' placeholder='Entrez votre nom'>",
        exampleDescription: "Cet exemple crée un champ de saisie de texte avec un texte d'exemple 'Entrez votre nom'."
    },
    {
        name: "disabled",
        description: "Désactive un élément interactif comme un bouton ou un champ de saisie.",
        example: "<button disabled>Non disponible</button>",
        exampleDescription: "Cet exemple crée un bouton qui est désactivé et ne peut pas être cliqué."
    },
    {
        name: "value",
        description: "Valeur par défaut pour les champs de formulaire.",
        example: "<input type='text' value='Initial value'>",
        exampleDescription: "Cet exemple crée un champ de saisie de texte avec une valeur initiale 'Initial value'."
    },
    {
        name: "checked",
        description: "Indique que la case à cocher ou le bouton radio est sélectionné par défaut.",
        example: "<input type='checkbox' checked>",
        exampleDescription: "Cet exemple crée une case à cocher pré-cochée."
    },
    {
        name: "selected",
        description: "Indique que l'option est sélectionnée par défaut dans un menu déroulant.",
        example: "<select><option selected>Choix par défaut</option><option>Autre choix</option></select>",
        exampleDescription: "Cet exemple crée un menu déroulant avec l'option 'Choix par défaut' sélectionnée par défaut."
    },
    {
        name: "maxlength",
        description: "Nombre maximal de caractères autorisé dans un champ de saisie de texte.",
        example: "<input type='text' maxlength='50'>",
        exampleDescription: "Cet exemple crée un champ de saisie de texte qui permet de saisir jusqu'à 50 caractères."
    },
    {
        name: "min",
        description: "Valeur minimale autorisée pour les champs numériques.",
        example: "<input type='number' min='0'>",
        exampleDescription: "Cet exemple crée un champ de saisie numérique avec une valeur minimale de 0."
    },
    {
        name: "max",
        description: "Valeur maximale autorisée pour les champs numériques.",
        example: "<input type='number' max='100'>",
        exampleDescription: "Cet exemple crée un champ de saisie numérique avec une valeur maximale de 100."
    },
    {
        name: "rows",
        description: "Nombre de lignes affichées dans un champ de texte multiligne.",
        example: "<textarea rows='4'></textarea>",
        exampleDescription: "Cet exemple crée un champ de texte multiligne avec 4 lignes visibles."
    },
    {
        name: "cols",
        description: "Nombre de colonnes affichées dans un champ de texte multiligne.",
        example: "<textarea cols='30'></textarea>",
        exampleDescription: "Cet exemple crée un champ de texte multiligne avec 30 colonnes visibles."
    },
    {
        name: "readonly",
        description: "Empêche l'utilisateur de modifier la valeur d'un champ de formulaire.",
        example: "<input type='text' value='Valeur fixe' readonly>",
        exampleDescription: "Cet exemple crée un champ de saisie de texte avec une valeur fixe qui ne peut pas être modifiée par l'utilisateur."
    },
    {
        name: "required",
        description: "Indique que le champ de formulaire doit être rempli avant de soumettre le formulaire.",
        example: "<input type='text' required>",
        exampleDescription: "Cet exemple crée un champ de saisie de texte qui doit être rempli avant de soumettre le formulaire."
    },
    {
        name: "autofocus",
        description: "Définit le champ de formulaire pour recevoir automatiquement le focus lors du chargement de la page.",
        example: "<input type='text' autofocus>",
        exampleDescription: "Cet exemple crée un champ de saisie de texte qui reçoit automatiquement le focus lors du chargement de la page."
    },
    {
        name: "autocomplete",
        description: "Indique si la saisie automatique est activée ou désactivée pour un champ de formulaire.",
        example: "<input type='text' autocomplete='off'>",
        exampleDescription: "Cet exemple crée un champ de saisie de texte avec la saisie automatique désactivée."
    },
    {
        name: "size",
        description: "Taille visible d'un champ de saisie de texte.",
        example: "<input type='text' size='30'>",
        exampleDescription: "Cet exemple crée un champ de saisie de texte avec une taille visible de 30 caractères."
    },
    {
        name: "multiple",
        description: "Indique que plusieurs options peuvent être sélectionnées dans un menu déroulant ou une zone de liste.",
        example: "<select multiple><option>Option 1</option><option>Option 2</option></select>",
        exampleDescription: "Cet exemple crée un menu déroulant qui permet la sélection de plusieurs options."
    },
    {
        name: "autoplay",
        description: "Indique si la lecture automatique est activée pour les éléments multimédias.",
        example: "<video src='video.mp4' autoplay></video>",
        exampleDescription: "Cet exemple crée une vidéo qui démarre automatiquement la lecture dès que la vidéo est chargée."
    },
    {
        name: "controls",
        description: "Indique si les commandes de lecture multimédia doivent être affichées.",
        example: "<video src='video.mp4' controls></video>",
        exampleDescription: "Cet exemple crée une vidéo avec les commandes de lecture affichées."
    },
    {
        name: "loop",
        description: "Indique si la lecture multimédia doit être en boucle.",
        example: "<video src='video.mp4' loop></video>",
        exampleDescription: "Cet exemple crée une vidéo qui se lit en boucle."
    },
    {
        name: "preload",
        description: "Indique comment les données multimédias doivent être chargées lorsque la page est chargée.",
        example: "<video src='video.mp4' preload='auto'></video>",
        exampleDescription: "Cet exemple indique que la vidéo doit être préchargée automatiquement lorsque la page est chargée."
    },
    {
        name: "download",
        description: "Indique que le lien doit être téléchargé lorsqu'il est cliqué.",
        example: "<a href='document.pdf' download>Télécharger le document</a>",
        exampleDescription: "Cet exemple crée un lien qui télécharge un document PDF lorsqu'il est cliqué."
    },
    {
        name: "target",
        description: "Indique où ou comment ouvrir la destination du lien.",
        example: "<a href='https://www.example.com' target='_blank'>Lien vers example.com</a>",
        exampleDescription: "Cet exemple crée un lien vers le site example.com qui s'ouvre dans un nouvel onglet."
    },
    {
        name: "rel",
        description: "Indique la relation entre le document courant et la ressource liée.",
        example: "<a href='styles.css' rel='stylesheet'>Feuille de style</a>",
        exampleDescription: "Cet exemple lie la feuille de style styles.css au document courant."
    },
    {
        name: "charset",
        description: "Définit l'encodage de caractères pour le document HTML.",
        example: "<meta charset='UTF-8'>",
        exampleDescription: "Cet exemple définit l'encodage des caractères du document HTML en UTF-8."
    },
    {
        name: "lang",
        description: "Indique la langue principale du contenu de la page.",
        example: "<html lang='fr'>",
        exampleDescription: "Cet exemple indique que le contenu de la page est en français."
    },
    {
        name: "target",
        description: "Indique où ou comment ouvrir la destination du lien.",
        example: "<a href='https://www.example.com' target='_blank'>Lien vers example.com</a>",
        exampleDescription: "Cet exemple crée un lien vers le site example.com qui s'ouvre dans un nouvel onglet."
    },
    {
        name: "rel",
        description: "Indique la relation entre le document courant et la ressource liée.",
        example: "<a href='styles.css' rel='stylesheet'>Feuille de style</a>",
        exampleDescription: "Cet exemple lie la feuille de style styles.css au document courant."
    },
    {
        name: "charset",
        description: "Définit l'encodage de caractères pour le document HTML.",
        example: "<meta charset='UTF-8'>",
        exampleDescription: "Cet exemple définit l'encodage des caractères du document HTML en UTF-8."
    },
    {
        name: "lang",
        description: "Indique la langue principale du contenu de la page.",
        example: "<html lang='fr'>",
        exampleDescription: "Cet exemple indique que le contenu de la page est en français."
    },
    {
        name: "content",
        description: "Définit le contenu de la balise meta.",
        example: "<meta name='description' content='Ceci est une description'>",
        exampleDescription: "Cet exemple définit une description pour le moteur de recherche."
    },
    {
        name: "http-equiv",
        description: "Fournit une information HTTP-EQUIV au serveur Web.",
        example: "<meta http-equiv='refresh' content='30'>",
        exampleDescription: "Cet exemple actualise la page toutes les 30 secondes."
    },
    {
        name: "name",
        description: "Spécifie le nom de la balise meta.",
        example: "<meta name='keywords' content='HTML, CSS, JavaScript'>",
        exampleDescription: "Cet exemple définit des mots-clés pour le moteur de recherche."
    },
    {
        name: "http-equiv",
        description: "Fournit une information HTTP-EQUIV au serveur Web.",
        example: "<meta http-equiv='refresh' content='30'>",
        exampleDescription: "Cet exemple actualise la page toutes les 30 secondes."
    },
    {
        name: "name",
        description: "Spécifie le nom de la balise meta.",
        example: "<meta name='keywords' content='HTML, CSS, JavaScript'>",
        exampleDescription: "Cet exemple définit des mots-clés pour le moteur de recherche."
    },
    {
        name: "autocomplete",
        description: "Indique si l'autocomplétion des formulaires est activée ou désactivée.",
        example: "<form autocomplete='off'></form>",
        exampleDescription: "Cet exemple désactive l'autocomplétion pour le formulaire."
    },
    {
        name: "target",
        description: "Indique où ou comment ouvrir la destination du lien.",
        example: "<a href='https://www.example.com' target='_blank'>Lien vers example.com</a>",
        exampleDescription: "Cet exemple crée un lien vers le site example.com qui s'ouvre dans un nouvel onglet."
    },
    {
        name: "rel",
        description: "Indique la relation entre le document courant et la ressource liée.",
        example: "<a href='styles.css' rel='stylesheet'>Feuille de style</a>",
        exampleDescription: "Cet exemple lie la feuille de style styles.css au document courant."
    },
    {
        name: "charset",
        description: "Définit l'encodage de caractères pour le document HTML.",
        example: "<meta charset='UTF-8'>",
        exampleDescription: "Cet exemple définit l'encodage des caractères du document HTML en UTF-8."
    },
    {
        name: "lang",
        description: "Indique la langue principale du contenu de la page.",
        example: "<html lang='fr'>",
        exampleDescription: "Cet exemple indique que le contenu de la page est en français."
    },
    {
        name: "content",
        description: "Définit le contenu de la balise meta.",
        example: "<meta name='description' content='Ceci est une description'>",
        exampleDescription: "Cet exemple définit une description pour le moteur de recherche."
    },
    {
        name: "http-equiv",
        description: "Fournit une information HTTP-EQUIV au serveur Web.",
        example: "<meta http-equiv='refresh' content='30'>",
        exampleDescription: "Cet exemple actualise la page toutes les 30 secondes."
    },
    {
        name: "name",
        description: "Spécifie le nom de la balise meta.",
        example: "<meta name='keywords' content='HTML, CSS, JavaScript'>",
        exampleDescription: "Cet exemple définit des mots-clés pour le moteur de recherche."
    },
];

const searchInput = document.getElementById('searchInput');
const propertyList = document.getElementById('propertyList');
const propertyDetails = document.getElementById('propertyDetails');

// Fonction pour générer la liste des propriétés HTML
function generatePropertyList(properties) {
    propertyList.innerHTML = '';
    properties.forEach(property => {
        const propertyItem = document.createElement('div');
        propertyItem.classList.add('property-item');
        propertyItem.innerHTML = `
                    <h2>${property.name}</h2>
                    <p>${property.description}</p>
                `;
        propertyItem.addEventListener('click', () => {
            showPropertyDetails(property);
        });
        propertyList.appendChild(propertyItem);
    });
}

// Fonction pour afficher les détails de la propriété sélectionnée
function showPropertyDetails(property) {
    propertyDetails.innerHTML = `
                <h2>${property.name}</h2>
                <p>${property.description}</p>
                <h3>Exemple d'utilisation :</h3>
                <p>${property.exampleDescription}</p>
                <pre><code>${property.example}</code></pre>
            `;
}

// Écouteur d'événement pour la barre de recherche
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProperties = properties.filter(property => property.name.toLowerCase().includes(searchTerm) || property.description.toLowerCase().includes(searchTerm));
    generatePropertyList(filteredProperties);
});

// Générer la liste initiale des propriétés au chargement de la page
generatePropertyList(properties);
