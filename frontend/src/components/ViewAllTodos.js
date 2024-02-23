//import react
import React, { Component } from 'react'
//import axios
import axios from 'axios'

//import styles
import './TodoStyle.css';


export default class ViewAllTodos extends Component {

//initialize constructor to pass the props
constructor (props) {
    super(props);
    this.state={
      //initializing an array 
      GetAllTodos:[],
      filterOption: 'all' // default filter option
    };
  }


 //calling the method after componenets render to the page
 componentDidMount(){
    this.retrieveTodoDetalis();
  }

 //get request method
 retrieveTodoDetalis(){
    axios.get("http://localhost:8000/GetAllTodos").then(res=>{
      // console.log(res.data);
      
    //if the request success, store the data to the array 
      if(res.data.success){
        this.setState({
          GetAllTodos:res.data.existingData
        });
             
        
       }
    })
    .catch(error => {
      console.error('Error retrieving todo details:', error);
  });

}


 //delete function

 onDelete = (id)=>{
  axios.delete(`http://localhost:8000/DeleteTodo/${id}`).then((res)=>{
    this.retrieveTodoDetalis();
    alert("Deleted succesfully");
  })
  

  .catch(error => {
    console.error('Error deleting todo:', error);
});
} 

handleFilterChange = (e) => {
  this.setState({ filterOption: e.target.value });
};

//search data according to the topic

filterData(GetAllTodos,searchKey){
  const result =GetAllTodos.filter((TodoData)=>
  (TodoData.Shift?.toLowerCase() || '').includes(searchKey) ||
  (TodoData.Shift && TodoData.Shift.includes(searchKey))||
  TodoData.Topic.toLowerCase().includes(searchKey) 
  
  )

this.setState({GetAllTodos:result})

}

handleSearchArea=(e)=>{

  const searchKey = e.currentTarget.value;
  
  axios.get("http://localhost:8000/GetAllTodos").then(res=>{
  if(res.data.success){
  
    this.filterData(res.data.existingData,searchKey)
  }
});

}

handleCheckboxChange = (id, checked) => {
  axios.put(`http://localhost:8000/UpdateTodocheck/${id}`, { completed: checked })
      .then(() => {
          // Update local state 
          this.setState(prevState => ({
              GetAllTodos: prevState.GetAllTodos.map(GetAllTodos => {
                  if (GetAllTodos._id === id) {
                      return { ...GetAllTodos, completed: checked };
                  }
                  return GetAllTodos;
              })
          }));
      })
      .catch(error => {
          console.error('Error updating todo:', error);
      });
};


// handle clearing checked todos
handleClearCheckedTodos = async () => {
  const checkedTodos = this.state.GetAllTodos.filter(todo => todo.completed);
  const checkedIds = checkedTodos.map(todo => todo._id);
  try {
      const response = await axios.delete("http://localhost:8000/DeleteCheckedTodos", {
          data: { checkedIds } // Pass the array of checked todo IDs in the request body
      });
      // console.log(response.data.message);
      // Refresh the todo list after successful deletion
      this.retrieveTodoDetalis();
      alert("Completed Todos Removed!");
  } catch (error) {
      console.error('Error clearing checked todos:', error);
      alert("Failed to clear completed todos");
  }
};



  render() {

    const { GetAllTodos, filterOption } = this.state;
    let filteredTodos = GetAllTodos;
    if (filterOption === 'checked') {
        filteredTodos = GetAllTodos.filter(GetAllTodos => GetAllTodos.completed);
    } else if (filterOption === 'unchecked') {
        filteredTodos = GetAllTodos.filter(GetAllTodos => !GetAllTodos.completed);
    }

    return (

            <div>
                
                

                <center>

                <div className='content1' >


                  <div >
                    <h1 className='Header1'>My Todo List</h1> 
                  </div>
                  <br/>

                  {/* search bar */}
                  <div className='row justify-content-center'>
                      <div className="col-lg-3 my-2 mb-2" style={{width:'350px'}} >
                      <input
                      className="form-control" 
                      type="search"
                      placeholder="Search Here..."
                      name="searchQuery"
                      onChange={this.handleSearchArea}>
                      </input>
                      </div>

                      {/* filter option  */}
                      <div className="col-lg-3 my-2 mb-2" style={{width:'350px'}} >
                            <select className="form-select" onChange={this.handleFilterChange} defaultValue="all">
                                <option value="all">All</option>
                                <option value="checked">Completed</option>
                                <option value="unchecked">Pending</option>
                            </select>
                      </div>

                  </div>

                  {/* render to create todo page  */}
                  <a href="/AddTodo" > 
                  <button className="btn btn-success" id="createbtn" style={{width:'60px'}}>
                  <i className="fa-solid fa-plus"></i>
                  </button>
                  </a>

                  <t/>  <t/>

                  {/* clear completed todos  */}
                  <button className="btn btn-secondary" style={{width:'60px'}} onClick={this.handleClearCheckedTodos}>
                  <i className="fa-solid fa-check-double"></i>
                  </button>
                  

                 <br/><br/>
                 
                      
                      
              {/* display todo list  */}
              <table className="center-table"  >
                  <thead >
                    <tr  >
                        <th style={{width:'40px', textAlign:'center'}} >No</th>
                        <th style={{width:'20px'}} > </th>
                        <th style={{width:'40px',textAlign:'center'}} >Status</th> 
                        <th style={{width:'20px'}} > </th>
                        <th style={{width:'250px', textAlign:'center'}}>Todo</th>
                        <th style={{width:'20px'}} > </th>  
                        <th style={{width:'150px', textAlign:'center'}}>Deadline</th>   
                            
                    </tr>
                  </thead>
                  
                  <tbody>

                    {filteredTodos.map((GetAllTodos,index)=>(
                    <tr key ={index} >
                        <th scope='row' style={{textAlign:'center'}}>{index+1}</th>

                        <th style={{width:'20px'}} > </th>

                        <td style={{width:'20px'}}>
                              <input
                                  type="checkbox"
                                  checked={GetAllTodos.completed}
                                  onChange={(e) => this.handleCheckboxChange(GetAllTodos._id, e.target.checked)}
                              />
                              
                        </td>

                        <th style={{width:'20px'}} > </th>
                      
                        <td >
                            {GetAllTodos.Topic} </td> 
                        <th style={{width:'20px'}} > </th>

                        <td>{GetAllTodos.Date}</td>
                         
                      


                         <th style={{width:'20px'}} > </th>
                        <td>
                          {/* render to edit page  */}
                        <a className ="btn btn-warning" href={`/UpdateTodo/${GetAllTodos._id}`}>
                            <i className="fas fa-edit"></i>
                            </a>
                            &nbsp;

                            {/* delete a todo  */}
                            <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(GetAllTodos._id)}>
                            <i className ="far fa-trash-alt"> </i>
                            </a>  &nbsp;
                        </td>
                    </tr>

                    
                    
                        ))} 

                                             
                  </tbody>
                  
              </table>

          
           </div>
        </center>

      </div>

    )
  }
}
