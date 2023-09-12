
import React, { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const [data, setData] = useState([]);
    const [description, setDescription] = useState();
  
    const [status, setStatus] = useState("");
  
    const [startDate, setStartDate] = useState("");
  
    const [endDate, setEndDate] = useState("");
  
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    const  navigate=useNavigate();
    const addTask = (event) => {
        event.preventDefault();
    
          
            if(new Date(endDate)<new Date(startDate)){
              alert("enddate cant exceed sratet date");
            }
          else{
        const newTask = {
          description: description,
          status: status,
          startDate: startDate,
          endDate: endDate,
        };
    
        axios
          .post("http://localhost:8084/api/tasks", newTask)
          .then((response) => {
            console.log("Task added successfully:", response.data);
            setDescription("");
            setStatus("");
            setStartDate("");
            setEndDate("");
            fetchBooks();
            navigate('/');
          })
          .catch((error) => {
            console.error("Error adding book:", error);
          });
      };
    }
      useEffect(() => {
        fetchBooks();
      }, []);
    
      const fetchBooks = () => {
        axios
          .get("http://localhost:8080/api/tasks")
    
          .then((response) => {
            setData(response.data);
          })
    
          .catch((error) => {
            console.error("Error fetching tasks:", error);
          });
      };
  return (
    
    <div className="container  mt-5 ">
        <div className="d-flex justify-content-center">
       <form onSubmit={ addTask}>

        <div className="row">
          <div className="">

        <div className="form-group">
       
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Enter your Task"
            value={description}
            onChange={(event) => setDescription(event.target.value)} required
          />
        </div>
        </div>
        <div className="">
          <select
             className="form-control mt-3"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value=""> Status</option>

            <option value="yet to complete">yet to complete</option>

            <option value="complete">completed</option>

          
          </select>
        </div>
        </div>
        <div className="row">
            <div className="">
        <div className="form-group">
         
          <input
            type="Date"
            className="form-control mt-3"
            placeholder="enter start date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            required
          />
        </div>
        </div>
        <div className="">
        <div className="form-group">
       
          <input
            type="Date"
            className="form-control mt-3"
            placeholder="enter end date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            required
          />
        </div>
        </div>
        </div>
        <button type="submit" className="btn btn-primary add  mt-5">
          {selectedTaskId ? "Update" : "Add"}
        </button>
       
      </form>

   

    </div>
</div>
  )
}

export default AddTask
