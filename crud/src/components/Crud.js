import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const API_URL = "https://66867b9d83c983911b02707f.mockapi.io/users";

export default function Crud() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [storeData, setStoreData] = useState([]);
  
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetching data from API on component mount
    axios.get(API_URL)
      .then(response => setStoreData(response.data))
      .catch(error => console.error("There was an error fetching the data!", error));
  }, []);

  const formSubmitted = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const emailAddress = emailRef.current.value;
    const password = passwordRef.current.value;

    if (editingId !== null) {
      axios.put(`${API_URL}/${editingId}`, { firstName, lastName, email: emailAddress, password })
        .then(response => {
          setStoreData(storeData.map(item => item.id === editingId ? response.data : item));
          setEditingId(null);
          resetForm();
        })
        .catch(error => console.error("There was an error updating the user!", error));
    } else {
      axios.post(API_URL, { firstName, lastName, email: emailAddress, password })
        .then(response => {
          setStoreData([...storeData, response.data]);
          resetForm();
        })
        .catch(error => console.error("There was an error creating the user!", error));
    }
  };

  const resetForm = () => {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value  = "";
    passwordRef.current.value = "";
  };

  const handleEdit = (id) => {
    const itemToEdit = storeData.find(item => item.id === id);
    firstNameRef.current.value = itemToEdit.firstName;
    lastNameRef.current.value = itemToEdit.lastName;
    emailRef.current.value = itemToEdit.email;
    passwordRef.current.value = itemToEdit.password;
    setEditingId(id);
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setStoreData(storeData.filter(item => item.id !== id));
      })
      .catch(error => console.error("There was an error deleting the user!", error));
  };

  return (
    <>
      <div className="container bg-dark text-dark main-container">
        <div className="form-container ">
          <form onSubmit={formSubmitted}>
            <div className="form-row form">
              <div className="form-group col-md-6 m-auto">
                <label htmlFor="input1" className="text-light">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  placeholder="First Name"
                  ref={firstNameRef}
                />
              </div>
              <div className="form-group col-md-6 m-auto">
                <label htmlFor="input2" className="text-light">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input2"
                  placeholder="Last Name"
                  ref={lastNameRef}
                />
              </div>
              <div className="form-group col-md-6 m-auto">
                <label htmlFor="input3" className="text-light">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="input3"
                  placeholder="Email"
                  ref={emailRef}
                />
              </div>
              <div className="form-group col-md-6 m-auto">
                <label htmlFor="input4" className="text-light">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="input4"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
              <button type="submit" className="btn btn-primary col-md-6 submitBtn">
                {editingId !== null ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>

        <div className="table-container">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {storeData.map((item,index) => (
                <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
