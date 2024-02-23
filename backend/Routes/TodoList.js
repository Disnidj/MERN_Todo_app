//import express
const express = require("express");

//import db schema
const TodoList =require("../Model/TodoList");

//give access to request function through express router
const router=express.Router();

//Create todo
router.post("/TodoList/Save", async (req, res) => {
    console.log('Request body:', req.body);
    try {
        let newTodoList = new TodoList(req.body);
        await newTodoList.save(); // Use await to wait for the save operation to complete
        return res.status(200).json({
            success: "TodoList created successfully"
        });
    } catch (err) {
        console.error('Error:', err);
        return res.status(400).json({
            error: err.message // Use err.message to capture the error message
        });
    }
});

//Get all todos

router.get("/GetAllTodos", async (req, res) => {
    try {
        const allTodos = await TodoList.find().exec();
        return res.status(200).json({
            success: true,
            existingData: allTodos
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


/// Get one todo
router.get("/GetOneTodo/:id", async (req, res) => {
    try {
        const todo = await TodoList.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        return res.status(200).json({
            success: true,
            oneTodo: todo
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});



//Update a todo
router.put("/UpdateTodo/:id", async (req, res) => {
    try {
        const updatedTodo = await TodoList.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        return res.status(200).json({
            success: "Updated Successfully",
            updatedTodo
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});

router.put("/UpdateTodocheck/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;
        const updatedTodo = await TodoList.findByIdAndUpdate(id, { completed }, { new: true });
        res.status(200).json({ success: true, todo: updatedTodo });
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});



// Delete a todo
router.delete("/DeleteTodo/:id", async (req, res) => {
    try {
        const deletedTodo = await TodoList.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        return res.json({
            message: "Deleted Successfully",
            deletedTodo
        });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});


module.exports=router;