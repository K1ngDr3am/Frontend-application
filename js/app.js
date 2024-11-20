// Importar los metodos del api.js
import { getAllCars , getCarsById , updateCars , deleteCars } from "./api";

document.addEventListener ("DOMContentLoaded", async () => {
    const carsList = document.getElementById("cars-list")

    const cars = await getAllCars();
    carsList.innerHTML = cars.map(car => `
        <div class="col-xs-12 col-sm-6 col-md-3 card">
          <div class="card-body d-flex flex-column justify-content-end">
            <h5 class="card-title">${car.name}</h5>
            <p class="card-text">${car.price}</p>
            <a onclick="viewCar(${car.id})" class="btn btn-primary">Ver más</a>
          </div>
        </div>
        `).join("");
});

// Metodo para ver los detalles del producto cuando damos click en el boton ver mas
window.viewCar = async (id) => {
const car = await getCarsById(id);

const carsDetails = `
    <div class="col">
        <h3>${car.name}</h3>
        <p>${car.description}</p>
        <p>Precio: ${car.price}</p>
        <button class="btn btn-warning" onclick="enableEdit"(${car.id})">Editar</button>
        <button class="btn btn-danger" onclick="deleteCars"(${car.id})">Eliminar</button>
    </div>
`;
document.getElementById("cars-list").innerHTML = carsDetails;
};

// Vista para editar la informacion
window.enableEdit = async (id) => {
    const car = await getCarsById(id);

    const editForm = `
    <div class="row gap-3">
        <input type="text" id="name" value="${car.name}">
        >textarea id="description">${car.description}</textarea>
        <input type="number" id="price" value="${car.price}">
        <button class="btn btn-success" onclick="saveEdit(${id})">Guardar</button>
    </div>
    `;
    document.getElementById("cars-list").innerHTML = editForm
};

// Guardar la informacion actualizada
window.saveEdit = async (id) => {
    const updateCar = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: parseFloat(document.getElementById("price").value),
    };
    await updateCars(id, updateCar);
    location.reload(); // Recarga la página para ver los cambios
};

// Borrar el producto seleccionado
window.deleteCars = async (id) => {
    await deleteCars(id);
    location.reload(); // Recarga la página para ver los cambios
}