let addVehicle = false;
let searchVehicle = false;

const addContainer = document.querySelector('.add-container');
const searchContainer = document.querySelector('.search-container');

document.addEventListener('DOMContentLoaded', loadAllVehicles)

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

function loadAllVehicles() {
    fetch('http://localhost:3000/vehicles')
    .then(resp => resp.json())
    .then(json => json.forEach(vehicle => createCard(vehicle)));
}

function createCard(vehicle) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    div.classList.add('card');
    h2.textContent = vehicle.make;
    h3.textContent = vehicle.model;
    p.textContent = vehicle.vin;
    btn.textContent = 'Remove';
    btn.addEventListener('click', () => {
        handleDelete(vehicle.id);
        div.remove();
    });

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btn);
    document.querySelector('#vehicle-collection').appendChild(div);
}

function handleDelete(id) {
    fetch(`http://localhost:3000/vehicles/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}