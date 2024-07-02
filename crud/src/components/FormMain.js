import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormMain() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const [storeValue, setStoreValue] = useState([]);
  const [id, setId] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.vdalue;
    const name = nameRef.current.value;
    setStoreValue([...storeValue, { id: id, email: email, name: name }]);
    setId(id + 1);
    emailRef.current.value = "";
    nameRef.current.value = "";
    setIsSubmitted(true);
    navigate("/HomePage"); 
  };

  useEffect(() => {
    if (isSubmitted) {
      alert("Submitted");
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <div className='bg-dark text-light col-md-6'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control bg-dark text-light"
            ref={emailRef}
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control bg-dark text-light"
            ref={nameRef}
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
              Id: {item.id}, Email: {item.email}, Name: {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}