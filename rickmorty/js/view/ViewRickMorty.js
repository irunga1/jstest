class ViewRickMorty {
    constructor(firstProp = null) {
        this.firstProp = firstProp
    }
    fillSelect = (data)=>{
        let str ="";
        data.map((it)=>{
            str+="<option value ="+it.id+">"+it.name+"</option>";
        });
        document.getElementById("chars").innerHTML = str;
        return  true;
    }
}
export default ViewRickMorty;