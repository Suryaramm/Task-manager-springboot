import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Task = () => {
  const [data, setData] = useState([]);
  const [description, setDescription] = useState();

  const [status, setStatus] = useState("");

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [selectedTaskId, setSelectedTaskId] = useState(null);
  // const headers = {
  //     'Access-Control-Allow-Origin' : '*',
  //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  //   };
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

  const addTask = (event) => {
    event.preventDefault();

    const newTask = {
      description: description,
      status: status,
      startDate: startDate,
      endDate: endDate,
    };

    axios
      .post("http://localhost:8080/api/tasks", newTask)
      .then((response) => {
        console.log("Task added successfully:", response.data);
        setDescription("");
        setStatus("");
        setStartDate("");
        setEndDate("");
        fetchBooks();
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };

  const selectTask = (TaskId) => {
    const selectedTask = data.find((data) => data.id === TaskId);
    setSelectedTaskId(TaskId);
    setDescription(selectedTask.description);
    setStatus(selectedTask.status);
    setStartDate(selectedTask.startDate);
    setEndDate(selectedTask.endDate);
  };

  const updateTask = (event) => {
    event.preventDefault();

    const updatedTask = {
      description: description,
      status: status,
      startDate: startDate,
      endDate: endDate,
    };

    axios
      .put(`http://localhost:8080/api/tasks/${selectedTaskId}`, updatedTask)
      .then((response) => {
        console.log("Task updated successfully:", response.data);
        setDescription("");
        setStatus("");
        setStartDate("");
        setEndDate("");

        setSelectedTaskId(null);
        fetchBooks();
      })
      .catch((error) => {
        console.error("Error updating book:", error);
      });
  };

  const deleteTask = (TaskId) => {
    console.log(TaskId);
    axios
      .delete(`http://localhost:8080/api/tasks/${TaskId}`)
      .then((response) => {
        console.log("Task deleted successfully:", response.data);
        fetchBooks();
      })
      .catch((error) => {
        console.error("Error deleting Task:", error);
      });
  };

  return (
    <div className="container">
      <h2>Task List</h2>

      <form onSubmit={selectedTaskId ? updateTask : addTask}>
        <div className="form-group">
       
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Task"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="col-md-6">
          <select
            className="form-control mt-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>

            <option value="yet to complete">yet to complete</option>

            <option value="complete">completed</option>

          
          </select>
        </div>
        <div className="form-group">
          {/* <label>Author:</label> */}
          <input
            type="Date"
            className="form-control"
            placeholder="enter start date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </div>
        <div className="form-group">
       
          <input
            type="Date"
            className="form-control"
            placeholder="enter end date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary add">
          {selectedTaskId ? "Update" : "Add"}
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>description</th>

            <th>status</th>

            <th>startDate</th>

            <th>endDate</th>

            <th>Action</th>
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

              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => selectTask(data.id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
