// Importar los metodos del api.js
import { getAllCars , getCarsById , updateCars , deleteCars } from "./api.js";

document.addEventListener ("DOMContentLoaded", async () => {
    const carsList = document.getElementById("cars-list")

    const cars = await getAllCars();
    carsList.innerHTML = cars.map(cars => `
        <div class="col-xs-12 col-sm-6 col-md-3 card">
          <div class="card-body d-flex flex-column justify-content-end">
            <h5 class="card-title">${cars.name}</h5>
            <p class="card-text">${cars.price}</p>
            <a onclick="viewCar(${cars.id})" class="btn btn-primary">Ver más</a>
          </div>
        </div>
        `).join("");
});

// Metodo para ver los detalles del producto cuando damos click en el boton ver mas
window.viewCars = async (id) => {
const cars = await getCarsById(id);

const carsDetails = `
    <div class="col">
        <h3>${cars.type}</h3>
        <p>${cars.description}</p>
        <p>Precio: ${cars.price}</p>
        <button class="btn btn-warning" onclick="enableEdit"(${cars.id})">Editar</button>
        <button class="btn btn-danger" onclick="deleteCars"(${cars.id})">Eliminar</button>
    </div>
`;
document.getElementById("cars-list").innerHTML = carsDetails;
};

// Vista para editar la informacion
window.enableEdit = async (id) => {
    const cars = await getCarsById(id);

    const editForm = `
    <div class="row gap-3">
        <input type="text" id="type" value="${cars.type}">
        >textarea id="description">${cars.description}</textarea>
        <input type="number" id="price" value="${cars.price}">
        <button class="btn btn-success" onclick="saveEdit(${id})">Guardar</button>
    </div>
    `;
    document.getElementById("cars-list").innerHTML = editForm
};

// Guardar la informacion actualizada
window.saveEdit = async (id) => {
    const updatecars = {
        type: document.getElementById("type").value,
        description: document.getElementById("description").value,
        price: parseFloat(document.getElementById("price").value),
    };
    await updatecars(id, updateCars);
    location.reload(); // Recarga la página para ver los cambios
};

// Borrar el producto seleccionado
window.deleteCars = async (id) => {
    await deleteCars(id);
    location.reload(); // Recarga la página para ver los cambios
}