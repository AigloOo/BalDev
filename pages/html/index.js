
const searchInput = document.getElementById('searchInput');
const propertyList = document.getElementById('propertyList');
const propertyDetails = document.getElementById('propertyDetails');



fetch('/storage.json')
    .then(response => response.json())
    .then(properties => {
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

        generatePropertyList(properties);

        function showPropertyDetails(property) {
            propertyDetails.innerHTML = `
                <h2>${property.name}</h2>
                <p>${property.description}</p>
                <h3>Exemple d'utilisation :</h3>
                <p>${property.exampleDescription}</p>
                <pre><code>${property.example}</code></pre>
            `;
        }

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredProperties = properties.filter(property => property.name.toLowerCase().includes(searchTerm) || property.description.toLowerCase().includes(searchTerm));
            generatePropertyList(filteredProperties);
        });
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement des propriétés :', error);
    });
