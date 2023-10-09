import ModelRickmorty from "../model/ModelRickMorty.js";
import ViewRickMorty from "../view/ViewRickMorty.js";
class ControllerRickMorty {
    constructor(firstProp  =null) {
        this.firstProp = firstProp
        console.log("Iniciando Controlador");
        this.Model = new ModelRickmorty(); 
        this.View = new ViewRickMorty();
    }
    fillSelect  = async ()=>{
        let data = await this.Model.getData(0);
        let idName =[];  
        data.results.map((it)=>{
            // console.log(it.name);
            let tmp = {"id":it.id,"name":it.name};
            idName.push(tmp);
        });
        let a = await this.View.fillSelect(idName);        
        console.log("data");
        console.log(idName);
    }
}
export default ControllerRickMorty;