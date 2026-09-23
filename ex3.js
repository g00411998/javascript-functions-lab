
//comment create a list of tasks

let tasks = ["Work", "Shopping", "Meeting"];


// add a task to the list
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
 



//delete a task from the list

let deletetask = (task) => {
    let index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("Task " + task + " has been deleted from the list");
    }else{
        console.log("Task " + task + " not found in the list");
    }
        return tasks.length;
    }
// delete shopping task from the list
deletetask("Shopping");
// add gym to the list
addTask("Gym");
listAllTasks();