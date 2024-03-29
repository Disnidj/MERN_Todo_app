//import mongoose

const mongoose=require("mongoose");

//make a db schema to store todo list data

const TodoListSchema = new mongoose.Schema({

    Date:{
        type:String,
        required:true,
    },

    Topic:{
        type:String,
        required:true,
    },

    Description:{
        type:String,
        
    },
    completed: {
        type: Boolean,
        default: false 
    }

   
});

//pass the schema
module.exports=mongoose.model("TodoList",TodoListSchema);