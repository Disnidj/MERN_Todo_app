import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import AddTodo from "./components/AddTodo";
import ViewAllTodos from "./components/ViewAllTodos";
import UpdateTodo from "./components/UpdateTodo";


export default function TodoRouter() {
  return (
    <div>
      <Router>
        
        <Routes>
          

          <Route path="/" element={<ViewAllTodos />} />
          
          <Route
            path="/AddTodo"
            element={<AddTodo />}
          />
          <Route
            path="/UpdateTodo/:id"
            element={<UpdateTodo />}
          />
         

        </Routes>
        
      </Router>
    </div>
  );
}
