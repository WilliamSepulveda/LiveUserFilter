import { getAllInfoPeople } from "./module/app.js";
import { profiles } from "./components/gallery.js";

// selecciono los elemetos del DOM 
let input__search = document.querySelector("#input__search");
let MainSeccionPersonas = document.querySelector(".main");

addEventListener("DOMContentLoaded", async () => {
    // Obtengo la información inicial de las personas
    let info = await getAllInfoPeople();
    console.log(info); 

    // muestro los perfiles por defecto en la sección principal
    MainSeccionPersonas.innerHTML = await profiles(info);

    input__search.addEventListener("input", async e => {
        // Obtener el valor del input y convertirlo a minúsculas y sin tildes
        const searchTerm = e.target.value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        //  se Filtra los perfiles basados en el término de búsqueda
        const filteredProfiles = info.filter(person => {
            return person.name_full.toLowerCase().includes(searchTerm) || person.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchTerm);
        });

        // Actualizar la sección principal con los perfiles filtrados
        MainSeccionPersonas.innerHTML = await profiles(filteredProfiles);
    });
});
