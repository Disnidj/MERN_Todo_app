# MERN Stack To-Do List Application
This is a simple To-Do List application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features
* Display a list of tasks with the ability to add, edit, and delete tasks.
* Search option to search by the todo.
* Implement task filtering options (e.g., All, Pending, Completed).
* Provide a checkbox to mark tasks as completed.
* Include a clear button to remove completed tasks.

## Prerequisites
Before you begin, ensure you have met the following requirements:
* Node.js installed on your machine.
* MongoDB installed and running locally or access to a MongoDB database.

## Installation
1. Clone the repository:   
 ```git clone https://github.com/yourusername/MERN_Todo_app.git ```

3. Navigate to the backend directory:
   ```cd MERN_Todo_app```
   -> ```cd backend```
   
5. Install server dependencies:
  ``` npm install```

6. Navigate to the frontend directory:
   ```cd MERN_Todo_app```
   -> ```cd frontend```

8. Install server dependencies:
  ``` npm install```

## Configuration
Create a .env file in the root directory:
```MONGODB_URI=your_mongodb_connection_string ```
Replace your_mongodb_connection_string with your MongoDB connection string.

## Usage
1. start backend server
   ```npm start```
2. start frontend
   ```npm start```

Open the web browser by ctrl+link(display on the frontend terminal)
     
## API Endpoints
* GET ``` /GetAllTodos``` : Get all tasks.
* POST ``` /TodoList/Save``` : Create a new task.
* PUT ``` /UpdateTodo/:id``` : Update a task.
* DELETE ``` /DeleteTodo/:id``` : Delete a task.
* UPDATE2  ``` /UpdateTodocheck/:id``` : Check box update
* DELETE2 ``` /DeleteCheckedTodos``` : Clear completed tasks

## Technologies Used
* Front-end: React.js
* Back-end: Node.js, Express.js
* Database: MongoDB
* Other: Axios, Bootstrap, React Router
