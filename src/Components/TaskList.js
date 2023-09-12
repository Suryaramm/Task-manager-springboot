
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskList = () => {
  const [data, setData] = useState([]);
 


  

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:8084/api/tasks")

      .then((response) => {
        setData(response.data);
      })

      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };


  return (
    <div className="container ">
      <h2>Task List</h2>
      
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>description</th>

            <th>status</th>

            <th>startDate</th>

            <th>endDate</th>

          
          </tr>
        </thead>

        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.description}</td>

              <td>{data.status}</td>

              <td>{data.startDate}</td>

              <td>{data.endDate}</td>

            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

