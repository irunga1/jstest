import ModelRickmorty from "../model/ModelRickMorty.js";
import ViewRickMorty from "../view/ViewRickMorty.js";
class ControllerRickMorty {
    constructor(firstProp  =null) {
        this.firstProp = firstProp
        console.log("Iniciando Controlador");
        this.Model = new ModelRickmorty(); 
        this.View = new ViewRickMorty();
        this.info = null;
    }
    fillSelect  = async ()=>{
        let data = await this.Model.getData(0);
        console.log(data);
        let idName =[];  
        data.results.map((it)=>{
            // console.log(it.name);
            let tmp = {"id":it.id,"name":it.name,"image":it.image};            
            idName.push(tmp);
        });
        this.info = idName;
        let a = await this.View.fillSelect(idName);        
        console.log("data");
        console.log(idName);
    }
    setClick = ()=>{
        const mostrarModalBtn = document.getElementById('mostrarModal');
        const modal = document.getElementById('myModal');
        const cerrarModalBtn = document.getElementById('cerrarModal');
        mostrarModalBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            let id = document.getElementById("chars").value;
            for(let i in this.info){
                console.log(this.info[i].name);
                if(this.info[i].id == id){
                    document.getElementById("charImg").src = this.info[i].image;
                }
            }
        });

        cerrarModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';

            }
        });
    }
}
export default ControllerRickMorty;