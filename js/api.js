const API_URL = "http://localhost:3000/api/cars";

// Obtener todos los productos
export const getAllCars = async () => {
const response = await fetch(API_URL);
return response.json
};

// Obtener producto por ID
export const getCarsById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

// Crear un Producto
export const addCars = async (product) => {
    const respone = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
    return respone.json();
  };

// Actualizar un producto
export const updateCars = async(id, cars) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cars)
    });
    return response.json();
};

// Eliminar un product
export const deleteCars = async(id) => {
    return fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
};