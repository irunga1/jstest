class ModelRickmorty {
    constructor(firstProp = null) {
        this.firstProp = firstProp
        console.log("start");
    }
    getData = async(number =0)=>{
        let  type=["character","location","episode"];
        const api =await fetch(`https://rickandmortyapi.com/api/${type[number]}`);
        let chars =  await api.json();
        // console.log(chars);
        return await chars;
    }
}

export default ModelRickmorty;