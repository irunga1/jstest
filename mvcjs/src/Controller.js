import Model from "./Model.js";
import View from "./View.js";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }
    showInfo = async()=> {
        let data = await this.model.getData(0);
        this.view.showInfo(data);
        let idName = data.map((item)=>{
            console.log("name "+item.name);
        })
        //   const newItem = this.input.value;
        //   this.model.addData(newItem);
        //   this.view.render(this.model.getData());
        //   this.input.value = '';
    }
}
export default Controller;