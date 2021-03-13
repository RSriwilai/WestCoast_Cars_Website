"use strict";

const vehicleTable = document.querySelector('#vehicle-list');
const searchButton = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

function createTable(vehicleList){
    vehicleTable.innerHTML = '';
    for( let car of vehicleList){
        createRow(car);
    }
}

const searchVehicle = function() {
    if (searchInput !== null){
        if (searchInput.value.length === 0){
            createTable(vehicles);
        }else {
            const found = vehicles.filter(car => car.registrationNo.toUpperCase().
            includes(searchInput.value.toUpperCase()));
            createTable(found);
        }
    }
}
searchButton.addEventListener('click', searchVehicle);

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        searchVehicle();
    }
    
})

function createRow(car){
    vehicleTable.insertAdjacentHTML('beforeend',
    `<tr>
        <td>${car.id}</td>
        <td>${car.registrationNo}</td>
        <td>${car.make}</td>
        <td>${car.model}</td>
        <td>${car.modelYear}</td>
        <td>${car.mileage ==undefined ? "-" : car.mileage}</td>
        <td>${car.value == undefined ? 0 : car.value}</td>
     </tr>`);
}

createTable(vehicles);

