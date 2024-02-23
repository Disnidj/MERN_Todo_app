//import react
import React from 'react';
//import react hooks
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import useParams (use to access the matching data)
import{useParams} from "react-router-dom";



function UpdateTodo() {

  //track the states in function and set values with useState 
  const [Date, setDate]=useState("");
  const [Topic, setTopic]=useState("");
  const [Description, setDescription]=useState("");

  

  //id initialize to match the data
  const id=useParams();

  const [UpdateTodo]=useState({
          Date:"",
          Topic:"",
          Description:"",
         
         
  })


  //target.value use to get an input value from keyboard

  // const handle_Date_Change=(e)=>{
  //   e.preventDefault();
  //   setDate(e.target.value)

  // }

  const handle_Date_Change = (e) => {
    setDate(e.target.value);
};

  const handle_Topic_Change = (e)=>{
    e.preventDefault();
    setTopic(e.target.value); 
    
      //validation
  if ((e.target.value).length>20) {
    alert("Limit Exceeded!");
  }
  } 


  const handle_Description_Change=(e)=>{
    e.preventDefault();
    setDescription(e.target.value)

  }

//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
  e.preventDefault();

  console.log("data");

  const formData = new FormData();

  formData.append("Date",Date);
  formData.append("Topic",Topic);
  formData.append("Description",Description);
 

        setDate("");
        setTopic("");
        setDescription("");
    
        

console.log(formData.get('Topic'));

UpdateTodo.Date=formData.get('Date');
UpdateTodo.Topic=formData.get('Topic');
UpdateTodo.Description=formData.get('Description');


console.log(UpdateTodo);


//update process 
console.log(id)
await axios.put(`http://localhost:8000/UpdateTodo/${id?.id}`,UpdateTodo)
.then(res=>{
  console.log("Return Data",res);
  alert("Update Success!!");

})
.catch(err=>{
  alert("Update Failed!!");
  console.log(err);
});

}

//page refresh function
function refreshPage() {
  window.location.reload(false);
}




//get one data to update
useEffect(function effectFunction() {
  console.log("get ID",id);

  axios.get(`http://localhost:8000/GetOneTodo/${id?.id}`)
  .then(res=>{
    console.log("data",res);
    setDate(res.data.oneTodo.Date)
    setTopic(res.data.oneTodo.Topic)
    setDescription(res.data.oneTodo.Description)
   
 
  }).catch(err => console.log(err));



},[]);



  return (
          <div>


            <div >
                <br/><br/>
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>Update</h1>
                
            </div>

              

            <div >

              <br/>

              <button className="btn btn-success" style={{marginLeft:'100px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
              <a href="/"
              style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
              <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>

             
                          <form style={{width:'60%', marginLeft:'450px',fontSize:'18px', color:"white",textShadow: '1px 2px 5px black',background:"rgba(178,34,34,0.35)"}}>
                        

                                    <div className="form-group">
                                    <h5>Topic: </h5>
                                        <input type="text"
                                        className="form-control"
                                        name="Topic"
                                        onChange={(e) => handle_Topic_Change(e)} 
                                        value={Topic}
                                        required='true'
                                        />
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <h5>Description: </h5>
                                        <textarea type="text"
                                        className="form-control"
                                        name="Description"
                                        onChange={(e) => handle_Description_Change(e)}
                                        value={Description}
                                       
                                        />
                                    </div>

                                    <div className="form-group">
                                    <h5>Deadline: </h5>
                                        <input type="datetime-local"
                                        className="form-control"
                                        name="DateTime"
                                        onChange={handle_Date_Change}
                                        value={Date}
                                        required='true'
                                        />
                                    </div>
                                  
                                  
                            </form>
                 
                  
                      
              <button className="btn btn-secondary" type="submit" style={{ width:"150px", 
                      marginLeft:"990px", backgroundColor:"#484846"}} onClick={(e)=>ChangeOnClick(e)} >
                      <i class="fa-solid fa-pen-to-square"></i>
                      &nbsp; UPDATE
              </button>
              
             
              <button className="btn btn-warning" style={{width:"150px",marginLeft:"10px"}}
              onClick={refreshPage}>  
              <i class="fa-solid fa-arrow-rotate-right"></i>&nbsp;Refresh
              </button>
              
              
                           
              <br/> <br/><br/>
          </div>
                
       </div>
  )
}

export default UpdateTodo