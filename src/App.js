import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tabb, setTabb] = useState(
    <table className="table table-striped">
    <thead className="Dark">
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Avtar</th>
      </tr>
      </thead>
      </table>
  );
  const url = "https://reqres.in/api/users?page=1";

  useEffect(() => {
    axios.get(url).then((response) => {
      var tempArray = response.data.data;
      setProduct(tempArray);
      setLoading(true)
    });
  }, [])
 

  function open_table(){
    setTabb(
      
      <table className="table table-striped">
      <thead className="Dark">
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avtar</th>
        </tr>
      </thead>
      <tbody>
          {product.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><img src={item.avatar} alt="Img" /></td>
              </tr>
              );
          })}
      </tbody>
      </table>
    )
  }

  function close_table () {
    setTabb(
      <table className="table table-striped">
      <thead className="Dark">
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Avtar</th>
      </tr>
      </thead>
      </table>)
  }
  
  
  

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Data</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <button className="btn btn-outline-success" onClick = {open_table} >Get User</button>
              </li>
              <li className="nav-item" margin-left= "20px" >
              <button className="btn btn-primary"  onClick = {close_table} >Clear</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
      {
        loading ? (tabb) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          ) 
      }
      </div>
    </>
  );
}

export default App;