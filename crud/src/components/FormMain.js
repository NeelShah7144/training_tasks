import React, { useState } from 'react';

export default function FormMain() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [storeValue, setStoreValue] = useState([]);
  const [id, setId] = useState(0);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setStoreValue([...storeValue, { id: id, email: email, name: name }]);
    setId(id + 1);
    setEmail("");
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleNameChange}
            id="name"
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text">Please enter your full name.</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div>
        <h2>Your submitted details are:</h2>
        <ul>
          {storeValue.map(item => (
            <li key={item.id}>
              Email: {item.email}, Name: {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
