export const profiles = async(info)=>{
    let plantilla = "";
    for (let i = 0; i < info.length; i++){
        plantilla += /*html*/`
        <article id="MainSeccionPersonas" class="main__article">
        <section class="section">
            <div  class="section__front_page">
            <img src="${info[i].avatar}" alt="img">
            </div>
            <div class="data__user">
                <h5>${info[i].name_full}</h5>
                <small>${info[i].description}</small>
            </div>
        </section>
    </article>

       `;
    }
    return plantilla;
};