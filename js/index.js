let addVehicle = false;
let searchVehicle = false;

const addContainer = document.querySelector('.add-container');
const searchContainer = document.querySelector('.search-container');

document.querySelector('#adding').addEventListener('click', () => {
    addVehicle = !addVehicle;
    if (addVehicle) {
        searchVehicle = false;
        searchContainer.style.display = 'none';
        addContainer.style.display = 'block';
    }
    else {
        addContainer.style.display = 'none';
    }
})