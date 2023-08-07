class tasker{
    constructor (){
        console.log("helloworld");
    }
    setDate =()=>{
        var dateNumber = document.getElementById("dateNumber");
        var dateText = document.getElementById("dateText");
        var dateMonth = document.getElementById("dateMonth");
        var dateYear = document.getElementById("dateYear");
        const date1 = new Date();
        dateNumber.textContent = date1.getDate();
        dateMonth.textContent = date1.getMonth()+1;
        dateYear.textContent = date1.getFullYear();
        
    }
    addTask = (event)=>{
        event.preventDefault();
        console.log("it works");
		if(typeof event.target.taskText.value !== "undefined"){
			var value = event.target.taskText.value;
		}
		else{
			var value = false;
		}
        console.log(value);
        if(value ){
            console.log("entro");
            console.log(value);
            var task = document.createElement("div");
            task.classList.add('task', 'roundBorder');
            task.textContent = value;
            tasksContainer.prepend(task);
            task.addEventListener('click', this.changeTaskState);
            this.saveInfo();            
            event.target.reset();
        }
        
    }
    changeTaskState = (event)=>{
        event.target.classList.toggle('done');
        this.saveInfo();        
    }
    order =()=>{
        const done = [];
        const toDo = [];
        tasksContainer.childNodes.forEach(
            (el) => {
                el.classList.contains('done') ? done.push(el) : toDo.push(el)
            }
        );
        this.saveInfo();
        return [...toDo, ...done];
    }
    renderOrderedTasks = () => {
        this.order().forEach(el => tasksContainer.appendChild(el))
    }
	saveInfo = ()=>{
		document.getElementById("message").innerHTML = "Actualizando..."
        setInterval(this.clearActualizando, 2000);
		
		var content =  document.getElementById("tasksContainer").innerHTML;
		localStorage.setItem("task",content);
		
	}
	getInfo = ()=>{
		document.getElementById("tasksContainer").innerHTML = localStorage.getItem("task");				
	}
	clear = ()=>{
		document.getElementById("tasksContainer").innerHTML =""
		localStorage.removeItem("task")
	}
	clearMessage = ()=>{
		document.getElementById("message").innerHTML = ""
	}
    clearActualizando (){
        document.getElementById("message").innerHTML = ""        
    }
}
