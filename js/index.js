let addMenu = false;
let searchMenu = false;

const addContainer = document.querySelector('.add-container');
const searchContainer = document.querySelector('.search-container');

document.addEventListener('DOMContentLoaded', loadAllVehicles)

document.querySelector('#adding').addEventListener('click', () => {
    addMenu = !addMenu;
    if (addMenu) {
        searchMenu = false;
        searchContainer.style.display = 'none';
        addContainer.style.display = 'block';
    }
    else {
        addContainer.style.display = 'none';
    }
})

document.querySelector('#searching').addEventListener('click', () => {
    searchMenu = !searchMenu;
    if (searchMenu) {
        addMenu = false;
        addContainer.style.display = 'none';
        searchContainer.style.display = 'block';
    }
    else {
        searchContainer.style.display = 'none';
    }
})

document.querySelector('.add-vehicle').addEventListener('submit', e => {
    e.preventDefault();
    addVehicle(e);
    e.target.reset();
});
document.querySelector('.search-vehicle').addEventListener('submit', e => {
    e.preventDefault();
    searchVehicle(e);
    e.target.reset();
});

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

function addVehicle(e) {
    fetch('http://localhost:3000/vehicles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'year': document.querySelectorAll('.input-text')[0].value,
            'make': document.querySelectorAll('.input-text')[1].value,
            'model': document.querySelectorAll('.input-text')[2].value,
            'miles': document.querySelectorAll('.input-text')[3].value,
            'vin': document.querySelectorAll('.input-text')[4].value
        })
    })
    .then(resp => resp.json())
    .then(json => createCard(json))
}

function handleDelete(id) {
    fetch(`http://localhost:3000/vehicles/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}