require("./index.css");
var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$react = require("react");
var $ltMAx$reactdom = require("react-dom");
var $ltMAx$reactrouterdom = require("react-router-dom");
var $ltMAx$axios = require("axios");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}













const $dfca7f53f6b7a34c$var$AddTodo = ()=>{
    //to navigate to anohter page or the same page
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    //use state to track state in function components
    const [Date, setDate] = (0, $ltMAx$react.useState)("");
    const [Topic, setTopic] = (0, $ltMAx$react.useState)("");
    const [Description, setDescription] = (0, $ltMAx$react.useState)("");
    //handle the input data 
    const handle_Date_Change = (e)=>{
        setDate(e.target.value);
    };
    const handle_Topic_Change = (e)=>{
        e.preventDefault();
        setTopic(e.target.value);
    };
    const handle_Description_Change = (e)=>{
        e.preventDefault();
        setDescription(e.target.value);
    };
    // clear all input values
    const resetInputField = ()=>{
        setDate("");
        setTopic("");
        setDescription("");
    };
    //handle the submit data
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (Date === "" || Topic === "") alert("Fill The Required Fields!!");
        else {
            let newTodo = {
                Date: Date,
                Topic: Topic,
                Description: Description
            };
            let data = await (0, ($parcel$interopDefault($ltMAx$axios))).post("http://localhost:8000/TodoList/Save", {
                Date: Date,
                Topic: Topic,
                Description: Description
            });
            // console.log("Saved Data : ",data);
            if (data.status !== 200) alert("Data Saving Unsuccessfull");
            else {
                alert("You Are Saving The Data");
                navigate("/");
            }
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("center", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "content2",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("center", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                            style: {
                                color: "white",
                                textShadow: "1px 2px 5px black",
                                marginTop: "40px"
                            },
                            children: "Create Your Todo! "
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("form", {
                        onSubmit: (e)=>handleSubmit(e),
                        className: "Add_form",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                        type: "text",
                                        value: Topic,
                                        placeholder: "Type Your Todo",
                                        className: "form-control",
                                        style: {
                                            marginBottom: "20px"
                                        },
                                        onChange: (e)=>handle_Topic_Change(e),
                                        required: "true"
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("textarea", {
                                        value: Description,
                                        placeholder: "Type a Description (optional)",
                                        className: "form-control",
                                        style: {
                                            marginBottom: "20px"
                                        },
                                        onChange: (e)=>handle_Description_Change(e)
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                        type: "datetime-local",
                                        value: Date,
                                        name: "DateTime",
                                        placeholder: "Dealine",
                                        className: "form-control",
                                        style: {
                                            marginBottom: "20px"
                                        },
                                        onChange: (e)=>handle_Date_Change(e),
                                        required: "true"
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                    href: "/",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("button", {
                                        type: "button",
                                        className: "btn btn-info",
                                        style: {
                                            marginRight: " 20px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                className: "fa-solid fa-chevron-left"
                                            }),
                                            "\xa0 HOME"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("button", {
                                    type: "submit",
                                    className: "btn btn-success",
                                    style: {
                                        marginRight: " 10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            className: "fa-solid fa-circle-check"
                                        }),
                                        "\xa0 SUBMIT"
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("button", {
                                    className: "btn btn-warning",
                                    onClick: resetInputField,
                                    style: {
                                        marginLeft: " 10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                            className: "fa-solid fa-broom"
                                        }),
                                        "\xa0 CLEAR"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
var $dfca7f53f6b7a34c$export$2e2bcd8739ae039 = $dfca7f53f6b7a34c$var$AddTodo;






class $b8b2ab4a2f533ce0$export$2e2bcd8739ae039 extends (0, $ltMAx$react.Component) {
    //initialize constructor to pass the props
    constructor(props){
        super(props);
        this.state = {
            //initializing an array 
            GetAllTodos: [],
            filterOption: "all" // default filter option
        };
    }
    //calling the method after componenets render to the page
    componentDidMount() {
        this.retrieveTodoDetalis();
    }
    //get request method
    retrieveTodoDetalis() {
        (0, ($parcel$interopDefault($ltMAx$axios))).get("http://localhost:8000/GetAllTodos").then((res)=>{
            // console.log(res.data);
            //if the request success, store the data to the array 
            if (res.data.success) this.setState({
                GetAllTodos: res.data.existingData
            });
        }).catch((error)=>{
            console.error("Error retrieving todo details:", error);
        });
    }
    //delete function
    onDelete = (id)=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).delete(`http://localhost:8000/DeleteTodo/${id}`).then((res)=>{
            this.retrieveTodoDetalis();
            alert("Deleted succesfully");
        }).catch((error)=>{
            console.error("Error deleting todo:", error);
        });
    };
    handleFilterChange = (e)=>{
        this.setState({
            filterOption: e.target.value
        });
    };
    //search data according to the topic
    filterData(GetAllTodos, searchKey) {
        const result = GetAllTodos.filter((TodoData)=>(TodoData.Shift?.toLowerCase() || "").includes(searchKey) || TodoData.Shift && TodoData.Shift.includes(searchKey) || TodoData.Topic.toLowerCase().includes(searchKey));
        this.setState({
            GetAllTodos: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        (0, ($parcel$interopDefault($ltMAx$axios))).get("http://localhost:8000/GetAllTodos").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingData, searchKey);
        });
    };
    handleCheckboxChange = (id, checked)=>{
        (0, ($parcel$interopDefault($ltMAx$axios))).put(`http://localhost:8000/UpdateTodocheck/${id}`, {
            completed: checked
        }).then(()=>{
            // Update local state 
            this.setState((prevState)=>({
                    GetAllTodos: prevState.GetAllTodos.map((GetAllTodos)=>{
                        if (GetAllTodos._id === id) return {
                            ...GetAllTodos,
                            completed: checked
                        };
                        return GetAllTodos;
                    })
                }));
        }).catch((error)=>{
            console.error("Error updating todo:", error);
        });
    };
    // handle clearing checked todos
    handleClearCheckedTodos = async ()=>{
        const checkedTodos = this.state.GetAllTodos.filter((todo)=>todo.completed);
        const checkedIds = checkedTodos.map((todo)=>todo._id);
        try {
            const response = await (0, ($parcel$interopDefault($ltMAx$axios))).delete("http://localhost:8000/DeleteCheckedTodos", {
                data: {
                    checkedIds: checkedIds
                } // Pass the array of checked todo IDs in the request body
            });
            // console.log(response.data.message);
            // Refresh the todo list after successful deletion
            this.retrieveTodoDetalis();
            alert("Completed Todos Removed!");
        } catch (error) {
            console.error("Error clearing checked todos:", error);
            alert("Failed to clear completed todos");
        }
    };
    render() {
        const { GetAllTodos: GetAllTodos , filterOption: filterOption  } = this.state;
        let filteredTodos = GetAllTodos;
        if (filterOption === "checked") filteredTodos = GetAllTodos.filter((GetAllTodos)=>GetAllTodos.completed);
        else if (filterOption === "unchecked") filteredTodos = GetAllTodos.filter((GetAllTodos)=>!GetAllTodos.completed);
        return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("center", {
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "content1",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                                className: "Header1",
                                children: "My Todo List"
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "col-lg-3 my-2 mb-2",
                                    style: {
                                        width: "350px"
                                    },
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                        className: "form-control",
                                        type: "search",
                                        placeholder: "Search Here...",
                                        name: "searchQuery",
                                        onChange: this.handleSearchArea
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "col-lg-3 my-2 mb-2",
                                    style: {
                                        width: "350px"
                                    },
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("select", {
                                        className: "form-select",
                                        onChange: this.handleFilterChange,
                                        defaultValue: "all",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                value: "all",
                                                children: "All"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                value: "checked",
                                                children: "Completed"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("option", {
                                                value: "unchecked",
                                                children: "Pending"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                            href: "/AddTodo",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                className: "btn btn-success",
                                id: "createbtn",
                                style: {
                                    width: "60px"
                                },
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                    className: "fa-solid fa-plus"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("t", {}),
                        "  ",
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("t", {}),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                            className: "btn btn-secondary",
                            style: {
                                width: "60px"
                            },
                            onClick: this.handleClearCheckedTodos,
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                className: "fa-solid fa-check-double"
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("table", {
                            className: "center-table",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("thead", {
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                style: {
                                                    width: "40px",
                                                    textAlign: "center"
                                                },
                                                children: "No"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                style: {
                                                    width: "20px"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                style: {
                                                    width: "40px",
                                                    textAlign: "center"
                                                },
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                style: {
                                                    width: "20px"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                style: {
                                                    width: "250px",
                                                    textAlign: "center"
                                                },
                                                children: "Todo"
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                style: {
                                                    width: "20px"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                style: {
                                                    width: "150px",
                                                    textAlign: "center"
                                                },
                                                children: "Deadline"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("tbody", {
                                    children: filteredTodos.map((GetAllTodos, index)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                    scope: "row",
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: index + 1
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                    style: {
                                                        width: "20px"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    style: {
                                                        width: "20px"
                                                    },
                                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                                        type: "checkbox",
                                                        checked: GetAllTodos.completed,
                                                        onChange: (e)=>this.handleCheckboxChange(GetAllTodos._id, e.target.checked)
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                    style: {
                                                        width: "20px"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        GetAllTodos.Topic,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                    style: {
                                                        width: "20px"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("td", {
                                                    children: GetAllTodos.Date
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("th", {
                                                    style: {
                                                        width: "20px"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                            className: "btn btn-warning",
                                                            href: `/UpdateTodo/${GetAllTodos._id}`,
                                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                                className: "fas fa-edit"
                                                            })
                                                        }),
                                                        "\xa0",
                                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                                            className: "btn btn-danger",
                                                            href: "",
                                                            onClick: ()=>this.onDelete(GetAllTodos._id),
                                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                                className: "far fa-trash-alt",
                                                                children: " "
                                                            })
                                                        }),
                                                        "  \xa0"
                                                    ]
                                                })
                                            ]
                                        }, index))
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }
}








function $7be6d696cbc1f221$var$UpdateTodo() {
    //track the states in function and set values with useState 
    const [Date, setDate] = (0, $ltMAx$react.useState)("");
    const [Topic, setTopic] = (0, $ltMAx$react.useState)("");
    const [Description, setDescription] = (0, $ltMAx$react.useState)("");
    //id initialize to match the data
    const id = (0, $ltMAx$reactrouterdom.useParams)();
    const [UpdateTodo] = (0, $ltMAx$react.useState)({
        Date: "",
        Topic: "",
        Description: ""
    });
    // handle data 
    const handle_Date_Change = (e)=>{
        setDate(e.target.value);
    };
    const handle_Topic_Change = (e)=>{
        e.preventDefault();
        setTopic(e.target.value);
        //validation
        if (e.target.value.length > 20) alert("Limit Exceeded!");
    };
    const handle_Description_Change = (e)=>{
        e.preventDefault();
        setDescription(e.target.value);
    };
    //assign the updated value to existing data  
    const ChangeOnClick = async (e)=>{
        e.preventDefault();
        // console.log("data");
        const formData = new FormData();
        formData.append("Date", Date);
        formData.append("Topic", Topic);
        formData.append("Description", Description);
        setDate("");
        setTopic("");
        setDescription("");
        // console.log(formData.get('Topic'));
        UpdateTodo.Date = formData.get("Date");
        UpdateTodo.Topic = formData.get("Topic");
        UpdateTodo.Description = formData.get("Description");
        // console.log(UpdateTodo);
        //update process 
        // console.log(id)
        await (0, ($parcel$interopDefault($ltMAx$axios))).put(`http://localhost:8000/UpdateTodo/${id?.id}`, UpdateTodo).then((res)=>{
            // console.log("Return Data",res);
            alert("Update Success!!");
        }).catch((err)=>{
            alert("Update Failed!!");
            console.log(err);
        });
    };
    //page refresh function
    function refreshPage() {
        window.location.reload(false);
    }
    //get one data to update
    (0, $ltMAx$react.useEffect)(function effectFunction() {
        // console.log("get ID",id);
        (0, ($parcel$interopDefault($ltMAx$axios))).get(`http://localhost:8000/GetOneTodo/${id?.id}`).then((res)=>{
            // console.log("data",res);
            setDate(res.data.oneTodo.Date);
            setTopic(res.data.oneTodo.Topic);
            setDescription(res.data.oneTodo.Description);
        }).catch((err)=>console.log(err));
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("center", {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "content3",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("center", {
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                style: {
                                    color: "white",
                                    textShadow: "1px 2px 5px black",
                                    marginTop: "40px"
                                },
                                children: "Todo Update"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                        className: "Add_form",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "Topic",
                                    onChange: (e)=>handle_Topic_Change(e),
                                    value: Topic,
                                    required: "true"
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("textarea", {
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "Description (optional)",
                                    name: "Description",
                                    onChange: (e)=>handle_Description_Change(e),
                                    value: Description
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                    type: "datetime-local",
                                    className: "form-control",
                                    name: "DateTime",
                                    onChange: handle_Date_Change,
                                    value: Date,
                                    required: "true"
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {})
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                        href: "/",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("button", {
                            type: "button",
                            className: "btn btn-info",
                            style: {
                                marginRight: " 20px",
                                width: "110px"
                            },
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                    className: "fa-solid fa-chevron-left"
                                }),
                                "\xa0 HOME"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("button", {
                        className: "btn btn-secondary",
                        type: "submit",
                        style: {
                            width: "110px",
                            marginRight: "10px",
                            backgroundColor: "#484846"
                        },
                        onClick: (e)=>ChangeOnClick(e),
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                className: "fa-solid fa-pen-to-square"
                            }),
                            "\xa0 UPDATE"
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("button", {
                        className: "btn btn-warning",
                        style: {
                            width: "110px",
                            marginLeft: "10px"
                        },
                        onClick: refreshPage,
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                className: "fa-solid fa-arrow-rotate-right"
                            }),
                            "\xa0Refresh"
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {})
                ]
            })
        })
    });
}
var $7be6d696cbc1f221$export$2e2bcd8739ae039 = $7be6d696cbc1f221$var$UpdateTodo;


function $5533223c7c20e5b9$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.BrowserRouter), {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactrouterdom.Routes), {
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                        path: "/",
                        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $b8b2ab4a2f533ce0$export$2e2bcd8739ae039), {})
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                        path: "/AddTodo",
                        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $dfca7f53f6b7a34c$export$2e2bcd8739ae039), {})
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                        path: "/UpdateTodo/:id",
                        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $7be6d696cbc1f221$export$2e2bcd8739ae039), {})
                    })
                ]
            })
        })
    });
}


function $da11a1101b2a894a$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        className: "App",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $5533223c7c20e5b9$export$2e2bcd8739ae039), {})
    });
}


(0, ($parcel$interopDefault($ltMAx$reactdom))).render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $da11a1101b2a894a$export$2e2bcd8739ae039), {}), document.getElementById("app"));


//# sourceMappingURL=index.js.map
