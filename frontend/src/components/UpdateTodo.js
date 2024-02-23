//import react
import React from 'react';
//import react hooks
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import useParams (use to access the matching data)
import{useParams} from "react-router-dom";
import './TodoStyle.css'



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


  // handle data 
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

  // console.log("data");

  const formData = new FormData();

  formData.append("Date",Date);
  formData.append("Topic",Topic);
  formData.append("Description",Description);
 

        setDate("");
        setTopic("");
        setDescription("");
    
        

// console.log(formData.get('Topic'));

UpdateTodo.Date=formData.get('Date');
UpdateTodo.Topic=formData.get('Topic');
UpdateTodo.Description=formData.get('Description');


// console.log(UpdateTodo);


//update process 

// console.log(id)
await axios.put(`http://localhost:8000/UpdateTodo/${id?.id}`,UpdateTodo)
.then(res=>{
  // console.log("Return Data",res);
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
  // console.log("get ID",id);

  axios.get(`http://localhost:8000/GetOneTodo/${id?.id}`)
  .then(res=>{
    // console.log("data",res);
    setDate(res.data.oneTodo.Date)
    setTopic(res.data.oneTodo.Topic)
    setDescription(res.data.oneTodo.Description)
   
 
  }).catch(err => console.log(err));



},[]);



  return (
          <div>

            <center>
            <div className='content3'>
                
                <center> <h2 style={{color:"white",textShadow: '1px 2px 5px black', marginTop:'40px'}}>Todo Update</h2> </center>
                <br/><br/>
           
             {/* todo update display here  */}
                <form className='Add_form'>
              
                          <div className="form-group">
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
                              <textarea type="text"
                              className="form-control"
                              placeholder='Description (optional)'
                              name="Description"
                              onChange={(e) => handle_Description_Change(e)}
                              value={Description}
                              
                              />
                          </div>
                          <br/>

                          <div className="form-group">
                              <input type="datetime-local"
                              className="form-control"
                              name="DateTime"
                              onChange={handle_Date_Change}
                              value={Date}
                              required='true'
                              />
                          </div>
                          <br/>
                        
                        
                </form>
                 
                {/* to go back  */}
                <a href="/">
                <button type='button' className="btn btn-info" style={{marginRight:" 20px",width:"110px"}}> 
                <i className="fa-solid fa-chevron-left"></i>
                &nbsp; HOME</button>
                </a>  
                      
                {/* update button  */}
                <button className="btn btn-secondary" type="submit" style={{ width:"110px", 
                marginRight:"10px", backgroundColor:"#484846"}} onClick={(e)=>ChangeOnClick(e)} >
                <i className="fa-solid fa-pen-to-square"></i>
                &nbsp; UPDATE
                </button>
              
                {/* refresh the page to see changes */}
                <button className="btn btn-warning" style={{width:"110px",marginLeft:"10px"}}
                onClick={refreshPage}>  
                <i className="fa-solid fa-arrow-rotate-right"></i>&nbsp;Refresh
                </button>
              
              
                           
              <br/><br/><br/>
          </div>
          </center>
                
       </div>
  )
}

export default UpdateTodo