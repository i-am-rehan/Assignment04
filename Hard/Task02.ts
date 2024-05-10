// Define a type for the to-do list item
type ToDoItem = {
  task: string;
  completed: boolean;
};

// Define the to-do list array
const toDoList: ToDoItem[] = [
  { task: "Buy groceries", completed: false },
  { task: "Clean the house", completed: true },
  { task: "Finish homework", completed: false },
  { task: "Exercise", completed: false },
];

// Define a function to log only the tasks that are not yet completed
function logIncompleteTasks(toDoList: ToDoItem[]): void {
  console.log("Tasks to be completed:");
  toDoList.forEach((item) => {
    if (!item.completed) {
      console.log(item.task);
    }
  });
}

// Call the function to log incomplete tasks
logIncompleteTasks(toDoList);
