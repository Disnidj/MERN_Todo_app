import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddTodo = () => {

    //to navigate to anohter page or the same page
    const navigate=useNavigate();

    //use state to track state in function components
    const [Date, setDate]=useState("");
    const [Topic, setTopic]=useState("");
    const [Description, setDescription]=useState("");
    
 


    //handle the input data 
    

    const handle_Date_Change=(e)=>{
      
      setDate(e.target.value)

    }

   
    const handle_Topic_Change=(e)=>{
      e.preventDefault();
      setTopic(e.target.value)
    }

    const handle_Description_Change=(e)=>{
      e.preventDefault();
      setDescription(e.target.value)
    }



    // clear all input values
      const resetInputField = () => {
        setDate("");
        setTopic("");
        setDescription("");
       
      };


     
      

      //handle the submit data
    const handleSubmit = async (e)=>{
      e.preventDefault();

      if(Date===''|| Topic===''){
        alert("Fill The Required Fields!!")

      }else {

        let newAttendace={
          Date:Date,
          Topic:Topic,
          Description:Description
        }

        // console.log("Sending Todo Details...",newTodo);

        let data= await axios.post('http://localhost:8000/TodoList/Save',{
        
          Date:Date,
          Topic:Topic,
          Description:Description
          
        });

        

        console.log("Saved Data : ",data);

        if(data.status !== 200){
          alert("Data Saving Unsuccessfull")
        }
        else{
      
          alert("You Are Saving The Data")
          navigate('/')
        }

      }

  
    }


  return (
    <div>


            <div >
                
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>Create</h1>
               
            </div>


            <div >
              <br/>
              
              <button className="btn btn-success" style={{marginLeft:'70px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
              <a href="/"
              style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
              <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
              </button>

            <div style={{width:'800px', marginLeft:'350px',background:"rgba(25,222,225,0.35)"}}>

           
              <br/>
                <center><h2 style={{color:"white",textShadow: '1px 2px 5px black'}}>Todo</h2></center>
              <br/> 
              
               <form onSubmit={(e) => handleSubmit(e)} >
                <div>
              
                    <div className='form-group' >
                     <label>Todo Topic :</label><br />
                        <input 
                        type='text' 
                        value={Topic} 
                        placeholder="Type Here"
                        className='form-control' 
                        style={{ marginBottom: '20px' }} 
                        onChange={(e) => handle_Topic_Change(e)} 
                        required='true' />
                        
                    </div>
                    
                        <div className='form-group'>
                            <label>Description :</label><br />
                              <textarea 
                               
                              value={Description} 
                              placeholder="Type Here"
                              className='form-control' 
                              style={{ marginBottom: '20px' }} 
                              onChange={(e) => handle_Description_Change(e)} 
                               />
                        </div>

                        <div className='form-group'>
                            <label>Deadline :</label><br />
                              <input 
                              type='datetime-local' 
                              value={Date} 
                              name="DateTime"
                              className='form-control' 
                              style={{ marginBottom: '20px' }} 
                              onChange={(e) => handle_Date_Change(e)} 
                              required='true' />
                        </div>
                     
                        <br/>   
                        
                     
                     
                        <button type='submit' className='btn btn-success' style={{marginLeft:" 270px"}} > 
                        <i class="fa-solid fa-circle-check"></i>
                        &nbsp; SUBMIT</button>
                        
                        <button className="btn btn-warning" onClick={resetInputField} style={{marginLeft:" 50px"}}> 
                        <i class="fa-solid fa-broom"></i>
                        &nbsp; CLEAR</button>
                        
                     
                    </div>
                </form>
                <br/>
            </div>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>

    </div>
  )
}

export default AddTodo