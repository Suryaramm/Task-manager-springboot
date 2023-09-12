import React from 'react';

import {Link, useNavigate} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

 

const Navbar = () => {

  const navigate = useNavigate();

return (

  <div>

<nav class="navbar navbar-expand-lg" id="navbar">

        <div class="container-fluid">

          <a class="navbar-brand" href="" id="logo"><span id="span1">HCL</span></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span><img src="./images/menu.png" alt="" width="30px"/></span>

          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0  " >

             
            <li class="nav-item  links">

{/* <li><Link to="/student" class="nav-link" >Student</Link> </li> */}

<li><Link to="/" class="nav-link" >ViewTasks</Link> </li>

</li>


              <li class="nav-item  links">

              {/* <li><Link to="/student" class="nav-link" >Student</Link> </li> */}

              <li><Link to="/addTask" class="nav-link" >AddTask</Link> </li>

              </li>

             

              <li class="nav-item">

              {/* <li><Link to="/entermarks" class="nav-link" > EnterMarks</Link> </li> */}

              <li><Link to="/updateTask" class="nav-link" >UpdateTask</Link> </li>

              </li>

 

              <li class="nav-item  links">

              {/* <li><Link to="/student" class="nav-link" >Student</Link> </li> */}

              <li><Link to="/deleteTask" class="nav-link" >DeleteTask</Link> </li>

              </li>

             



             

           

             

            </ul>

            <form class="d-flex" id="search">

              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

              <button  id="btnregi" onClick={()=>{

        navigate("/")

   }}>Logout</button>

            </form>

          </div>

        </div>

      </nav>

 

 

{/* <section class="home">

<div class="content">

  <h1> <span>Student Management</span>

    <br />

     System  

  </h1>

  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.

    <br />Lorem ipsum dolor sit amet consectetur.

  </p>

  <div class="btn"><button> More Details</button></div>

 

</div>

<div class="img">

  <img src="https://i2-prod.getwestlondon.co.uk/incoming/article9687806.ece/ALTERNATES/s1227b/KC-WTL-Brunel-graduation-2015_03.jpg" alt="" />

</div>

</section> */}

</div>

);

};

 

export default Navbar;