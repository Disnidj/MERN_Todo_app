//import react
import React, { Component } from 'react'
//import axios
import axios from 'axios'


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
      console.log(res.data);
      
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

//search data according to the shift,date,Name and ID

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
          // Update local state after successful update
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


                <div>
                  <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>Todo LIST</h1> 
                </div>
                

                <div >
                  <button className="btn btn-success" 
                    style={{padding:'8px 8px',backgroundColor:'#3895d3', marginLeft:'50px', marginTop:'10px'}}>
                    <a href="/AddTodo" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                    <i className="far fa-arrow-alt-circle-left"></i>&nbsp;Create</a>
                  </button>


                  <div className="col-lg-3 my-2 mb-2" style={{marginTop:'10px', marginLeft:'170px'}}>
                
                  <input
                  className="form-control" style={{marginTop:'100px',padding:'10px 50px', width:'1150px'}}
                  type="search"
                  placeholder="Search Here..."
                  name="searchQuery"
                  onChange={this.handleSearchArea}>
                  </input>
              
                  </div>

                 <br/>  
                 <div className="col-lg-3 my-2 mb-2" style={{ marginTop: '10px' }}>
                        <select className="form-select" onChange={this.handleFilterChange} defaultValue="all">
                            <option value="all">All</option>
                            <option value="checked">Checked</option>
                            <option value="unchecked">Unchecked</option>
                        </select>
                  </div>
                  <br/>
                 
                      
                      

              <table className="table table-hover" style={{marginTop:'50px',  marginLeft:'170px', width:'700px'}}>
                  <thead>
                    <tr style={{fontSize:'20px'}}>
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>NO</th>
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>Date</th>
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>Topic</th>     
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>Status</th>     
                    </tr>
                  </thead>
                  
                  <tbody>

                    {filteredTodos.map((GetAllTodos,index)=>(
                    <tr key ={index} >
                        <th scope='row' style={{color:"white",textShadow: '1px 2px 5px black'}}>{index+1}</th>
                        <td style={{color:"white",textShadow: '1px 2px 5px black'}}>{GetAllTodos.Date}</td>
                        <td style={{textShadow: '1px 2px 5px black'}}><u><a  href={`ViewOneTodo/${GetAllTodos._id}`} style={{textDecoration:'none', color:'white', }}>
                            {GetAllTodos.Topic}
                            </a></u>
                         </td> 
                         <td>
                              <input
                                  type="checkbox"
                                  checked={GetAllTodos.completed}
                                  onChange={(e) => this.handleCheckboxChange(GetAllTodos._id, e.target.checked)}
                              />
                          </td>
                      
                      


                        
                        <td>
                        <a className ="btn btn-warning" href={`/UpdateTodo/${GetAllTodos._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                            &nbsp;
                            <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(GetAllTodos._id)}>
                            <i className ="far fa-trash-alt"> </i>&nbsp;Delete
                            </a>  &nbsp;
                        </td>
                    </tr>

                    
                    
                        ))} 

                  </tbody>


              </table>
              <br/>
           </div>
      </div>






    )
  }
}
