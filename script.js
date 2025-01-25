const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// Contador para enumerar los elementos de la lista
let itemCount = 0;

// Agregar elemento a la lista
addButton.addEventListener('click', () => {
    itemCount++;
    const listItem = document.createElement('li');
    listItem.textContent = `Elemento ${itemCount}`;
    listItem.addEventListener('click', () => {
        listItem.remove(); // Eliminar elemento al hacer clic
    });
    itemList.appendChild(listItem);
});
