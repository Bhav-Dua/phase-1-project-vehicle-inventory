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

document.querySelector('#searching').addEventListener('click', () => {
    searchVehicle = !searchVehicle;
    if (searchVehicle) {
        addVehicle = false;
        addContainer.style.display = 'none';
        searchContainer.style.display = 'block';
    }
    else {
        searchContainer.style.display = 'none';
    }
})