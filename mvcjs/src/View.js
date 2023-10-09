class View {
    constructor(firstProp = null) {
        this.firstProp = firstProp
    }
    showInfo(info =[]){
        console.log(info.results[0].name);
    }
}
export default View;