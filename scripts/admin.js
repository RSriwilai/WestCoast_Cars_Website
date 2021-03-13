"use strict";

const vehicleTable = document.querySelector('#vehicle-list');
const searchButton = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const addVehicleButton = document.querySelector('#addNewVehicle');
const addVehicleView = document.querySelector('#addVehicle-container')
const tableView = document.querySelector('#tableView');
const saveButton = document.querySelector('#save');
const vehicleIdInput = document.querySelector('#vehicleIdInput')
const regNoInput = document.querySelector('#regNoInput');
const makeInput = document.querySelector('#makeInput');
const modelInput = document.querySelector('#modelInput');
const modelYearInput = document.querySelector('#modelYearInput');
const mileageInput = document.querySelector('#mileageInput');
const valueInput = document.querySelector('#valueInput');
const addNewButton = document.querySelector('#addNewVehicle');

const addVehicle = () => {
    const vehicle = {
        id: vehicleIdInput.value,
        registrationNo: regNoInput.value,
        make: makeInput.value,
        model: modelInput.value,
        modelYear: modelYearInput.value,
        mileage: mileageInput.value,
        value: valueInput.value,
    };

    vehicles.push(vehicle);
    createTable(vehicles);
}

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
    
});

addVehicleButton.addEventListener('click', (e) => {
    e.preventDefault();
    addVehicleView.classList.remove('hidden')
    tableView.classList.add('hidden')
});

saveButton.addEventListener('click', (e) => {
    e.preventDefault();

    addVehicle();

    addVehicleView.classList.add('hidden');
    tableView.classList.remove('hidden');
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

