
//comment create a list of tasks

let tasks = ["Work", "Shopping", "Meeting"];




let addTask = (task) =>{
    tasks.push(task);
    console.log("Task " + task + " has been added to the list")
    return tasks.length;
}



//comment list all tasks in the list
let listAllTasks = () => {
    tasks.forEach((element) => {
        console.log(element);
    });
};
//comment add taask gym to the list 
addTask("Gym");
listAllTasks();


//comment remove task from the list
let removeTask = (task) =>{
    let index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("Task " + task + " has been removed from the list");
    }
};